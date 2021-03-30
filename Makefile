# Copyright © 2020 The Things Network Foundation, The Things Industries B.V.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

GO = go
HUGO_BUILD_FLAGS = -tags extended
HUGO_MODULE = github.com/gohugoio/hugo
HUGO ?= $(GO) run $(HUGO_BUILD_FLAGS) $(HUGO_MODULE)
DOC_ROOT = doc
PUBLIC_DEST = ../public # Relative to DOC_ROOT
INTERNAL_DEST = ../internal # Relative to DOC_ROOT
ENVIRONMENT ?= gh-pages
HUGO_BASE_URL ?= https://www.thethingsindustries.com/docs

.PHONY: default
default: server

.PHONY: clean.internal
clean.internal:
	cd $(DOC_ROOT) && rm -rf $(INTERNAL_DEST)

.PHONY: clean.public
clean.public:
	cd $(DOC_ROOT) && rm -rf $(PUBLIC_DEST)

.PHONY: clean.deps
clean.deps:
	rm -rf $(FREQUENCY_PLAN_DEST)
	rm -rf $(YARN_DEPS)

.PHONY: build.internal
build.internal:
	$(HUGO) --source $(DOC_ROOT) --destination $(INTERNAL_DEST)

.PHONY: build.public
build.public:
	$(HUGO) --source $(DOC_ROOT) --destination $(PUBLIC_DEST) --baseURL $(HUGO_BASE_URL) --environment $(ENVIRONMENT)

.PHONY: server
server:
	$(HUGO) server -s $(DOC_ROOT) --environment $(ENVIRONMENT)

.PHONY: new
new:
	$(HUGO) new --kind section-bundle -s $(DOC_ROOT) $(filter-out $@,$(MAKECMDGOALS))
%:
	@:

.PHONY: deps
deps: hooks | go.deps js.deps

.PHONY: go.deps
go.deps:
	go mod download

.PHONY: js.deps
js.deps:
	yarn --cwd $(DOC_ROOT)

hugo.exe: go.mod go.sum
	GOOS=windows go build -o $@ $(HUGO_BUILD_FLAGS) $(HUGO_MODULE)

hugo.darwin: go.mod go.sum
	GOOS=darwin go build -o $@ $(HUGO_BUILD_FLAGS) $(HUGO_MODULE)

hugo.linux: go.mod go.sum
	GOOS=linux go build -o $@ $(HUGO_BUILD_FLAGS) $(HUGO_MODULE)

.PHONY: hooks
hooks:
ifeq (,$(wildcard .git/hooks/commit-msg))
	go run .hooks/install-hooks.go
endif

.PHONY: init
init: deps

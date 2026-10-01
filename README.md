# The Things Network Documentation

The documentation site for The Things Network is built with [Hugo](https://gohugo.io/documentation/).
All content is stored as Markdown files in `doc/content`.

Data for generated documentation like the glossary is stored in `doc/data`.

## Development Environment Dependencies

The Things Network Documentation development tooling uses [Go](https://golang.org/doc/install)
(Hugo is pinned in `go.mod` and built with `make deps`). The theme has no JavaScript build step.

- Follow [Go's installation guide](https://golang.org/doc/install) to install Go.

## Theme

The theme lives in `doc/layouts` + `doc/assets` (plain CSS and JS, no Bulma/TTUI). The global
header and footer render from `doc/data/site_nav.json`, and icons from `doc/data/icons.json`. Both
are **generated** from www.thethingsnetwork.org's single navigation source — do not edit them by
hand; re-export them from the platform repo instead:

```
node scripts/export-docs-chrome.mjs <path to this repo>/doc/data
```

Nav hrefs are root-relative and prefixed with `params.ttnOrigin` (default
`https://www.thethingsnetwork.org`); for a local all-in-one preview run Hugo with
`HUGO_PARAMS_TTNORIGIN=http://localhost:3000`.

Section landing pages can use the `lead`, `actions`/`button`, `chapters`, `feature` and `topics`
shortcodes (see `doc/content/lorawan/_index.md`); a section's numbered course is its `chapters`
front matter and its topic index the `topics` front matter.

## Getting Started

Install dependencies and tooling to help you comply with our git style guidelines by running

```
$ make init
```

## Running a Development Server

You can start a development server with live reloading by running
`make` or `make server`. This command will print the address of the server.

## Building the Documentation for Github Pages

The documentation site can be built for Github Pages by running `make build.public`. This will
output the site to `public`.

## Building the Documentation for Internal (Offline) Use

The documentation site can be built for internal (offline) use by running `make build.internal`. This will
output the site to `internal`.

## Contributing

Please see the style, branch naming, and commit guidelines in [CONTRIBUTING](CONTRIBUTING.md)

## Creating New Documentation

Run `make new <path>` to create a new documentation section from the [template](doc/archetypes/section-bundle/_index.md) at `path`. For example, `make new getting-started/hello` will create a section in `getting-started/hello`.

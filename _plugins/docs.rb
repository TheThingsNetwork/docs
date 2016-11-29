module Jekyll
  module DocsFilter
    def docs_content(input)
      input
        .gsub(/(href="[^:"]+\/)index.md((?:#[\da-z-]+)?")/i, '\1\2') # replace local path to /index.md with /
        .gsub(/(href="[^:"]+\.)md((?:#[\da-z-]+)?")/i, '\1html\2') # replace local path to foo.md with foo.html
        .gsub('<table>', '<table class="table">') # add bootstrap table class to tables
    end
  end
end

Liquid::Template.register_filter(Jekyll::DocsFilter) 
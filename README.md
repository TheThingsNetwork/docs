The Things Network Documentation
================================

This is a [Jekyll](https://jekyllrb.com) site configured to be build and served through [GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/).

## Update content

Because we let GitHub Pages do the Jekyll builds the website will be updated automatically after pushing commits or merging pull requests.

- The homepage for the site is [index.html](index.html).
- The guides are Jekyll pages grouped under the [pages](pages) folder.
- The guides use sections to include the actual content from the [_includes](_includes) folders. This allows for re-use of content throughout different guides.

## Run locally

1. [Install Ruby 2.0.0 or higher](https://www.ruby-lang.org/en/downloads/)
2. Install [Bundler](http://bundler.io/):
	
	```bash
	$ gem install bundler
	```

3. Install [Jekyll](https://jekyllrb.com/) using Bundler:

	```bash
	$ bundle install
	```

4. Build the local Jekyll site:

	```bash
	$ bundle exec jekyll serve
	```
	
	Changes to the content, layout or styles will trigger a rebuild.

## Update Bootstrap

Bootstrap 4.0.0-alpha.3 [has been installed](bower.json) via [Bower](https://bower.io) and [bower_components](bower_components) is included in the GitHub repository so that GitHub Pages can use it when building the Jekyll site.

To update to a newer Bootstrap version or add other front-end dependencies and save them to [bower.json](bower.json):

```bash
$ bower install bootstrap@4.0.0-alpha.666 --save
```
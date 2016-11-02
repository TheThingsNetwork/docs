# The Things Network Documentation [![Build Status](https://travis-ci.org/TheThingsNetwork/docs.svg?branch=master)](https://travis-ci.org/TheThingsNetwork/docs)

This is a [Jekyll](https://jekyllrb.com) site configured to be build and served through [GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/).

## Update content

Because we let GitHub Pages do the Jekyll builds the website will be updated automatically after pushing commits or merging pull requests.

### Guidance

* The homepage for the site is [index.html](index.html).
* The guides are a Jekyll collection in the [_includes](_includes) folder, grouped per version.
* Use the main file of each guide for the intro.
* Use the `sections` front matter to include additional content from files relative to the guide, preferably in a subfolder with the same name. Make sure to start these files with `_` to prevent Jekyll for outputting them as stand-alone pages.
* To use a section from another guide or even version start with `/`.
* Make sure there are no duplicate headings (of any level) between different sections or [specify a unique heading ID](http://kramdown.gettalong.org/syntax.html#specifying-a-header-id) for each of them.
* Store guide assets in the same folder as the markdown you need it in and include them by their filename. You can also use relative paths to re-use images from other guides.
* The guide layout will prepend `/docs/<version>` to all links and image references that start with `/`. To link to a different version start with `../<version>/<guide>`.
* To include content from another guide use `{% include path/relative/to/_includes/folder.md %}`.
* Always end internal links with `/` to prevent redirects.
* Use blockquotes (`>`) to create callouts for important notes.
* If you do a lot of edits please use a local build to preview and test.

## Build local for preview and design

1. [Install Ruby 2.0.0 or higher](https://www.ruby-lang.org/en/downloads/)
2. Install [Bundler](http://bundler.io/):
	
	```bash
	$ gem install bundler
	```

3. Install [Jekyll](https://jekyllrb.com/) using Bundler:

	```bash
	$ bundle install
	```

4. Install [Node.js and NPM](https://nodejs.org/).

5. Install front-end and development dependencies:

  ```basg
  $ npm install
  ```

4. Run [Webpack](http://webpack.github.io/), build the local Jekyll site and watch for changes:

	```bash
	$ npm run dev
	```

> *NOTE:* Running `npm install` will overwrite the git pre-commit hook to execute [npm run webpack](package.json#L12), [npm test](package.json#L15) and [npm run add](package.json#L16) to append the webpack build.
	
### Guidance

* Require and use any JS libraries you need in [assets/js/_main.js](assets/js/_main.js).
* Import any Sass files you need in [assets/css/main.scss](assets/css/main.scss).
* Override Bootstrap variables in [_sass/_variables.scss](_sass/_variables.scss).
* Edit styles in [_sass/_base.scss](_sass/_base.scss) or break out to additional Sass files to keep it organized.
* Store layout assets in [assets](assets) folder.
* Edit layouts in the [_layouts](_layouts) folder.
* All layouts should inherit the [default](_layouts/default.html) layout.

## Test [![Build Status](https://travis-ci.org/TheThingsNetwork/docs.svg?branch=master)](https://travis-ci.org/TheThingsNetwork/docs)

Pull Requests and Pushes will be tested automatically by Travis using the [test](test) script. This will use [markdown-spellcheck](https://www.npmjs.com/package/markdown-spellcheck) on the Markdown source files, let Jekyll try to build the site and then use [HTMLProofer](https://github.com/gjtorikian/html-proofer) to test for broken links etc.

To run the test local, follow *Build local* to install the dependencies and then run:

```
./test
```

The test will also run automatically before every commit.

To ignore spelling errors for all or certain files, add them to [.spelling](.spelling).

## Automatic updates

Some content we source directly from elsewhere, e.g. the [MQTT API Reference](https://github.com/TheThingsNetwork/ttn/blob/refactor/mqtt/README.md).

### Update

1.  Follow the previous section to install NPM and dependencies.

2.  [Install Gulp](http://gulpjs.com):

    ```bash
    sudo npm i --global gulp
    ```
    
3.  [Install Subversion](https://subversion.apache.org/packages.html).
    
3.  Run the default task:

    ```bash
    gulp
    ```
    
### Source

To source more content from elsewhere edit [gulpfile.js](gulpfile.js#L7).

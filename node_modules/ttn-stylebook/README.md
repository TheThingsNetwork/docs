# The Things Network Stylebook

The goal of this project is to contain a shared set of styles and related assets for use on several website properties of [The Things Network](https://www.thethingsnetwork.org). It does not enforce a particular CSS preprocessor or build flow and allows us to adopt global styles step by step.

## Why Less?
The [source stylesheets](src) are in [Less](http://lesscss.org) because it was [the only format](https://csspre.com/convert/) that can be automatically converted to [SCSS](http://sass-lang.com) and [Stylus](http://stylus-lang.com).

## Documentation
The [docs](docs) folder uses [dist/scss](dist/scss) to demonstrate the styles and is a usage example at the same time. You can view the documentation via [GitHub Pages](https://thethingsnetwork.github.io/ttn-stylebook/).

## Usage

1. Depend on the repository, e.g. via NPM:

	```bash
	npm install --save thethingsnetwork/ttn-stylebook
	```
	
	> You can also [lock in to a certain branch or commit](https://docs.npmjs.com/files/package.json#github-urls).
	
2. Import a stylesheet in the language you use:

	```css
	@import 'scss/variables';
	
	body {
		color: $ttn-color-brand;
	}
	```
	
	> This example assumes you run Sass with `--load-path node_modules/ttn-stylebook/dist/scss` to not have to give the full path on every import.
	
### Stylesheets
At the moment there's three stylesheets you can import:

* `ttn/variables`: Just variables for our colors etc.
* `ttn/ttn`: The above plus custom styles.
* `ttn/bootstrap`: The above plus customized Bootstrap.

## Development

1. [Install Ruby](https://www.ruby-lang.org/en/downloads/)
2. Install [Bundler](http://bundler.io/):
	
	```bash
	$ gem install bundler
	```

3. Install Ruby dependencies via Bundler:

	```bash
	$ bundle install
	```

4. Install [Node.js and NPM](https://nodejs.org/).

5. Install Node.js dependencies via NPM:

  ```basg
  $ npm install
  ```
  
6. Update styles in [src](src) using [Less](http://lesscss.org).

7. Run `convert` to update [dist](dist) with Less, SCSS, Stylus and CSS versions and process [docs/src](docs/src).

	```bash
	$ npm run convert
	```

> *NOTE:* Running `npm install` will overwrite the git pre-commit hook to execute [npm run convert & npm run add](package.json#L10) automagically on every commit so you can ignore step 7.

## Conventions

* Variables, selectors and mixins should start with `ttn-` so that they do not conflict with other frameworks or custom styles on the site.

# TODO

* Add more base variables.
* Add styles for custom components.
* Include TTN assets like fonts and logos.
* Maybe even include common templates and scripts?

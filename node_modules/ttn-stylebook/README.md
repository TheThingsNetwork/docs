# The Things Network Stylebook

The goal of this project is to contain a shared set of styles and related assets for use on several website properties of [The Things Network](https://www.thethingsnetwork.org). It does not enforce a particular CSS preprocessor or build flow and allows us to adopt global styles step by step.

## Why Less?
The [source stylesheets](src) are in [Less](http://lesscss.org) because it was [the only format](https://csspre.com/convert/) that can be automatically converted to [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html), [Sass](http://sass-lang.com), [Stylus](http://stylus-lang.com) and CSS version.

## Usage examples

### NPM & Sass

1. Add the dependency:

	```bash
	npm install --save thethingsnetwork/styleguide
	```
	
	> You can lock in on a certain branch or commit by adding e.g. `#master` as [documented on NPM](https://docs.npmjs.com/files/package.json#github-urls).
	
	**Example:** [docs/package.json](https://github.com/TheThingsNetwork/docs/blob/master/package.json#L46)
	
2. Import a stylesheet in the language you use:

	```css
	@import '../node_modules/ttn/styleguide/dist/sass/variables';
	
	body {
		color: $color-brand;
	}
	```
	
	**Example:** [docs/scss/main.scss](https://github.com/TheThingsNetwork/docs/blob/master/css/main.scss#L12) and [docs/_sass/_variables.scss](https://github.com/TheThingsNetwork/docs/blob/master/_sass/_variables.scss#L15)

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

7. Run `convert` to update [dist](dist) with Less, SCSS, Sass and Stylus versions:

	```bash
	$ npm run dev
	```

> *NOTE:* Running `npm install` will overwrite the git pre-commit hook to execute [npm run convert & npm run add](package.json#L10) automagically on every commit so you can ignore step 7.

## Conventions

* Variables, selectors and mixins should start with `ttn-` so that they do not conflict with other frameworks or custom styles on the site.

# TODO

* Add more base variables.
* Integrate a framework, probably Bootstrap.
* Add styles for custom components.
* Include assets like fonts and images.
* Include templates and scripts even?
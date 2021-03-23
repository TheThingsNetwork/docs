# The Things Network Documentation

The documentation site for The Things Network is built with [Hugo](https://gohugo.io/documentation/).
All content is stored as Markdown files in `doc/content`.

Data for generated documentation like the glossary is stored in `doc/data`.

## Development Environment Dependencies

The Things Network Documentation development tooling uses [Go](https://golang.org/doc/install) and [Yarn](https://yarnpkg.com/en/docs/install).

- Follow [Go's installation guide](https://golang.org/doc/install) to install Go.
- Follow [Yarn's installation guide](https://yarnpkg.com/en/docs/install) to install Yarn.

In order to build the documentation site with the right theme, you need to run
`make deps` from time to time. This will install [Yarn](https://yarnpkg.com/) on Mac and Unix systems if it is not already installed.

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

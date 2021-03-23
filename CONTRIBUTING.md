# Contributing to The Things Network Docs

Thank you for your interest in building this thing together with us. We're really happy with our active community and are glad that you're a part of it. There are many ways to contribute to our project, but given the fact that you're on Github looking at the code for The Things Network Docs, you're probably here for one of the following reasons:

- **Asking a question**: If you have questions, please use the [forum](https://www.thethingsnetwork.org/forum/).
- **Writing documentation**: If you see that our documentation is lacking or incorrect, it would be great if you could help us improve it. 
Style guidelines for contributing code and writing documentation can be found [here](README.md#style-guidelines).

## Branching

When contributing documentation to this repository, we follow a number of guidelines.

### Branch Naming

All branch names should begin with a topic. Accepted topics are:

- `doc`: documentation
- `util`: utilities

All branches shall therefore have one of these names.

- `doc/#-short-name` or `doc/short-name`: refers to a documentation update, preferably with issue number. The short name describes the topic.
- `util/#-short-name` or `util/short-name`: refers to updates to the way this repository is deployed or managed. The short name describes the feature.

### Scope

A branch should be **small and focused** and should be scoped to a **single specific task**. Do not combine new features and refactoring of existing documentation or tooling.

### Pull requests and rebasing

Pull requests shall close or reference issues. Please file an issue first before submitting a pull request. When submitting a pull request, please fill out all the sections in the pull request template.

- **Before** a reviewer is assigned, rebasing the branch to reduce the number of commits is highly advised. We recommend self-reviewing your own pull request: making the [commit](#commit) history clean, checking for typos or incoherences, and making sure Continuous Integration passes.
- **During** a pull request's review, do not squash commits: it makes it harder for reviewers to read the evolution of a pull request. Making the commit history denser to answer reviewers' comments is acceptable at that point.
- Once a pull request **has been approved** by the reviewers, it can be rebased on top of its target branch before it is merged. This is an opportunity for the contributor to clean up the commit history. A reviewer can also ask specifically for a rebase.

## Commits

Keep the commits to be merged clean: adhere to the commit message format defined below and instead of adding and deleting files within a pull request, drop or fix the concerning commit that added the file.

Interactive rebase (`git rebase -i`) can be used to edit or rewrite commits that do not follow these contribution guidelines.

## <a name="commit"></a>Commit Messages

The first line of a commit message is the subject. The commit message may contain a body, separated from the subject by an empty line.

### Commit Subject

The subject contains the concerning topic and a concise message in [the imperative mood](https://chris.beams.io/posts/git-commit/#imperative), starting with a capital. The subject may also contain references to issues or other resources.

The topic is typically a few characters long and should always be present. Accepted topics are:

- `doc`: documentation
- `util`: utilities

Changes that affect multiple components can be comma separated.

Good commit messages:

- `doc: Add AppEUI to glossary`
- `util: Refactor makefile`

Make sure that commits are scoped to something meaningful and could potentially be cherry-picked individually.

### Commit Body

The body may contain a more detailed description of the commit, explaining what it changes and why. The "how" is less relevant, as this should be obvious from the diff.

## Creating New Documentation

Run `make new <path>` to create a new documentation section from the [template](doc/archetypes/section-bundle/_index.md) at `path`. For example, `make new getting-started/hello` will create a section in `getting-started/hello`.

## Troubleshooting Sections

If you add a section and it needs a troubleshooting page, title the troubleshooting page "Troubleshooting <name_of_section>", so that it is easy to find in search. For example, "Troubleshooting AWS IoT Integration" or "Troubleshooting Installation". An example is included in the new documentation template.

## Style Guidelines

Please respect the following guidelines for content in our documentation site.

- The title of a doc page is already rendered by the build system as a h1, don't add an extra one.
- Use title case for headings.
- A documentation page starts with an introduction, and then the first heading. The first paragraph of the introduction is typically a summary of the page. Use a `<!--more-->` to indicate where the summary ends.
- Divide long documents into separate files, each with its own folder and `_index.md`.
- Use the `weight`tag in the Front Matter to manually sort sections if necessary. If not, they will be sorted alphabetically.
- Since the title is a `h1`, everything in the content is at least `h2` (`##`).
- Paragraphs typically consist of at least two sentences.
- Use an empty line between all blocks (headings, paragraphs, lists, ...).
- Prefer text over bullet lists or enumerations. For bullets, use `-`, for enumerations `1.` etc.
- Write guides as a goal-oriented journey.
- Unless already clear from context, use a clearer term than "user", especially if there are multiple kinds (network operator, gateway owner, application developer, ...).
- The user does not have a gender (so use they/them/their).
- Taking screenshots is done as follows:
  - In Chrome: activate the **Developer Tools** and toggle the **Device Toolbar**. In the **Device Toolbar**, select **Laptop with HiDPI screen** (add it if not already there), and click **Capture Screenshot** in the menu on the right.
  - In Firefox: enter **Responsive Design Mode**. In the **Device Toolbar**, select "Laptop with HiDPI screen" (add it if not already there) and **Take a screenshot of the viewport**.
- Use `{{< figure src="image.png" alt="Show this text if the image is missing" >}}` shortcode to insert images. Adding `class="float"` will embed the image into the content, while `class="plain"` will remove the shadow box around the image.
- Use `**Strong**` when referring to buttons in the Console.
- Use the `{{< note "This is a note" />}}` and `{{< warning "This is a warning" />}}` shortcodes to add a note or warning.
- Use fenced code blocks with a language:
  - `bash` for lists of environment variables: `SOME_ENV="value"`.
  - `bash` for CLI examples. Prefix commands with `$ `. Wrap strings with double quotes `""` (except when working with JSON, which already uses double quotes).
  - Wrap large CLI output with `<details><summary>Show CLI output</summary> ... output here ... </details>`.
  - `yaml` (not `yml`) for YAML. Wrap strings with single quotes `''` (because of frequent Go templates that use double quotes).
- For variables which a user must replace, use a command to define the variable in the shell, if possible, e.g `API_KEY="your-api-key"`.
- If not possible to define the variable, use angle brackets to indicate a variable that needs to be replaced, e.g `https://<server-address>`. 
- In long command line examples or other code snippets, use the following guidelines:
  - If a line is longer than 80 columns, try to find a "natural" break
  - If a line is longer than 120 columns, insert a line break
  - In very special cases, longer lines are tolerated

## Legal

The Things Network Documentation is Apache 2.0 licensed.

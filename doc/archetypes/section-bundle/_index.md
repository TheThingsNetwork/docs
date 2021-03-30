---
title: "{{ replace .Name "-" " " | title }}"
description: ""
weight:
---

Guidelines here are taken from [CONTRIBUTING.md](CONTRIBUTING.md) in this repository, which you should read. This template exists as a copy and paste starting point for new documentation. Remove the `draft`key in the Front Matter to generate the page (otherwise hugo will skip it).

A documentation page starts with an introduction, and then the first heading. The first paragraph of the introduction is typically a summary of the page. Use a <!--more--> to indicate where the summary ends.

<!--more-->

## Requirements

Use a requirements subheading to list requirements/prerequisites.

1. Requirement 1
2. Requirement 2

## Links Within Docs

Use the `ref` shortcode. For example, [this is a link to the component reference]({{< ref "reference/components" >}}).

## Sections

When possible, divide long documents into separate files, each with its own folder and `_index.md`. Use the `weight` tag in the [Front Matter](https://gohugo.io/content-management/front-matter/) to manually sort sections if necessary. If not, they will be sorted alphabetically.

## Subheadings

Subheadings use Title Casing. Since the title is a h1, everything in the content is at least h2 (##). Use subheadings to break up sections and provide a high level overview of steps the user should follow.

## Notes and Warnings

Use the `{{< note "This is a note" />}}` and `{{< warning "This is a warning" />}}` shortcodes to add a note or warning. Markdown inside the note will be processed normally. It is also possible to use these shortcodes using opening and closing tags:

{{< note >}}
There is no need to add the word "note" at the beginning of a note, or "warning" at the beginning of a warning - they are automatically added for you!
{{</ note >}}

## Images

Taking screenshots is done as follows:
- In Chrome: activate the Developer Tools and toggle the Device Toolbar. In the Device Toolbar, select Laptop with HiDPI screen (add it if not already there), and click Capture Screenshot in the menu on the right.
- In Firefox: enter Responsive Design Mode. In the Device Toolbar, select "Laptop with HiDPI screen" (add it if not already there) and Take a screenshot of the viewport.

Screenshots should be inserted using the figure shortcode:

{{< figure src="screenshot.png" alt="I am a screenshot" >}}

To render images without styling, use standard markdown syntax:

![I am a picture of Wienke](wienke.jpeg)

## Syntax Highlighting

See the following examples for types of syntax highlighting.

### Console Button

I am a **Button** in the console.

### Large Command Line Example

<details><summary>Show CLI output</summary>
```bash
command_line_output_line_1
command_line_output_line_2
```
</details>

### Normal Command Line Example

```bash
$ command_prefixed_by_dollar_sign
command_line_output
```

### Environment Variable

```bash
SOME_ENV="value"
```

### YAML

```yaml
# file: yaml-file.yml
services:
  stack:
    image: 'thethingsnetwork/lorawan-stack:<the tag>'
```

### Line Breaks

In long command line examples or other code snippets, use the following guidelines:

- If a line is longer than 80 columns, try to find a "natural" break
- If a line is longer than 120 columns, insert a line break
- In very special cases, longer lines are tolerated

For example:

```bash
$ curl --location --header 'Authorization: Bearer NNSXS.XXXXXXXXX' --header 'Accept: application/json' \
    --header 'Content-Type: application/json' --request POST 'https://thethings.example.com/api/v3/events' \
    --data-raw '{
    "identifiers":[{
        "device_ids":{
            "device_id":"dev1",
            "application_ids":{"application_id":"app1"}
        }
    }]
}'
```

### Referencing Files

It is also possible to host source code (or any text file) and display it using shortcodes. For example:

{{< highlight yaml "linenos=table,linenostart=5" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=5 to=14 >}}
{{< /highlight >}}

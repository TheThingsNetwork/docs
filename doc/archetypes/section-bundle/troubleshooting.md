---
title: "Troubleshooting {{ replace .Name "-" " " | title }}"
description: ""
---

If your section doesn't need a troubleshooting section, delete this page.

Include an intro, i.e "This section contains help for common issues you may encounter while installing {{% tts %}}."

Some example troubleshooting sections are included below.

## Naming

Title the troubleshooting page "Troubleshooting <name_of_section>", so that it is easy to find in search. For example, "Troubleshooting AWS IoT Integration" or "Troubleshooting Installation".

## Component address is not included in this license

Ensure that you configure the `is.oauth.ui.canonical-url` with a domain that matches the domain in your license. See the [Configuration Reference]({{< ref src="/reference/configuration" >}}) for more information about the configuration options.

## Version in "docker-compose.yml" is unsupported

Our `docker-compose.yml` file uses [Compose file version 3.7](https://docs.docker.com/compose/compose-file/). If using a package manager to install Docker Compose, it is possible to install an old, unsupported version. See Docker's [installation instructions](https://docs.docker.com/compose/install/) to upgrade to a more recent version.

---
name: Release
about: Checklist for releases

---

<!--
Please check items along as you follow the release process.
-->

#### Overview

This is a checklist for releases. This is filled in by both the releaser and the reviewer where necessary.


#### Update Documentation

- [ ] Update the [documentation version](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/config/_default/config.toml#L28) to match the current minor, if necessary (`v3.${minor}`).
- [ ] Run `mage ttiProto:hugoData` from [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack), and copy the generated files to the [TheThingsIndustries/lorawan-stack-docs](https://github.com/TheThingsIndustries/lorawan-stack-docs).
  ```
  doc/data/api/tti.lorawan.v3/messages.yml
  doc/data/api/tti.lorawan.v3/services.yml
  doc/data/api/tti.lorawan.v3/enums.yml
  doc/data/api/ttn.lorawan.v3/messages.yml
  doc/data/api/ttn.lorawan.v3/services.yml
  doc/data/api/ttn.lorawan.v3/enums.yml
  ```
- [ ] Run `go install ./cmd/ttn-lw-cli` from [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack), and export the generated files to the [TheThingsIndustries/lorawan-stack-docs](https://github.com/TheThingsIndustries/lorawan-stack-docs) using the following command:
```
  HOME='$HOME' ttn-lw-cli gen-yaml-doc -o /path/to/lorawan-stack-docs/doc/data/
```

#### Check (for reviewers)

- [ ] The documentation version is up to date.
- [ ] The TTI and TTN API documentation has been generated and updated in [doc/data/api](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/data/api).
- [ ] The TTN CLI documentation has been generated and updated in [doc/data](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/data)

---
title: API Reference
zindex: -1000
source: 'https://github.com/TheThingsIndustries/integration-storage/blob/master/api/README.md'
---

# API Reference

The Storage API allows you to query data and list devices for which data is stored by the Storage Integration.

The API is available over HTTPS and serves data in JSON format. The base URL for the Storage API is:

```
https://<app-id>.data.thethingsnetwork.org/
```

To access devices and data, you need to provide the app access key that you used when configuring the Storage Integration. The app access key should be provided through the `Authorization` HTTP header with value `key <app-access-key>`. 

## Methods

### Devices

Query the devices for which data has been stored.

#### HTTP Endpoint

- `GET` `/api/v2/devices`

#### JSON Response Format

```json
["device-1", "device-2"]
```

>Note: this endpoint only returns devices for which data has been stored. When you delete a devices, its data will not be deleted. To fetch the current registered devices, use the [ApplicationManager API](https://github.com/TheThingsNetwork/ttn/blob/master/api/handler/ApplicationManager.md). 

#### Example

```
➜ curl -H "Authorization: key ttn-account.<secret>" https://office-app.data.thethingsnetwork.org/v2/api/devices

["basement", "conference-1", "conference-2", "ballroom"]
```

### Data

Query the data for all devices or a specific device.

#### HTTP Endpoint

- `GET` `/api/v2/query`
- `GET` `/api/v2/query?last=<time>`
- `GET` `/api/v2/query/<device-id>`
- `GET` `/api/v2/query/<device-id>?last=<time>`

When omitting the device ID, data for all devices is returned. When omitting the `last` parameter, data of the last hour is returned. The `last` parameter contains time, e.g. `30s` for the last 30 seconds, `1h` for the last hour and `2d` for the last 48 hours.

#### JSON Response Format

```json
[
    {
        "device_id": "device-d",
        "raw": "PazV30BAAEgAVQAAAAA=",
        "time": "2016-12-14T14:50:42.436297929Z",
        "field1": "value1",
        "field2": "value2"
    },
    {
        "device_id": "device-id",
        "raw": "PSHS30BAAEgAVQAAAAA=",
        "time": "2016-12-14T14:51:07.187792662Z",
        "field1": "value1",
        "field2": "value2"
    }
]
```

>Note: the fields returned are the result of the payload functions. If you do not have an decoder or converter payload function configured, only the `raw` field is available, containing the base64 encoded payload.

#### Example

```
➜ curl -H "Authorization: key ttn-account.<secret>" https://office-app.data.thethingsnetwork.org/v2/api/query?last=1m

[{"celcius":23.3,"device_id":"office-hq","light":477,"raw":"Ad0JGgGH","sound":391,"time":"2016-12-14T14:58:34.26230046Z"},{"celcius":23.3,"device_id":"office-hq","light":476,"raw":"AdwJGgI/","sound":575,"time":"2016-12-14T14:58:56.461535619Z"},{"celcius":23.3,"device_id":"office-hq","light":476,"raw":"AdwJGgFl","sound":357,"time":"2016-12-14T14:59:18.653984846Z"}]
```

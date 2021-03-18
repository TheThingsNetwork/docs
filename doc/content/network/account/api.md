---
title: API Reference
weight: -1000
source: 'https://github.com/TheThingsNetwork/docs/blob/master/_content/network/account/api.md'
---

Base URL: https://account.thethingsnetwork.org/api/v2

- [Endpoints](#endpoints)
  - [GET /applications](#get-applications)
  - [POST /applications](#post-applications)
  - [GET /applications/{app_id}](#get-applicationsapp_id)
  - [PATCH /applications/{app_id}](#patch-applicationsapp_id)
  - [DELETE /applications/{app_id}](#delete-applicationsapp_id)
  - [POST /applications/{app_id}/restore](#post-applicationsapp_idrestore)
  - [GET /applications/{app_id}/euis](#get-applicationsapp_ideuis)
  - [POST /applications/{app_id}/euis](#post-applicationsapp_ideuis)
  - [PUT /applications/{app_id}/euis/{eui}](#put-applicationsapp_ideuiseui)
  - [DELETE /applications/{app_id}/euis/{eui}](#delete-applicationsapp_ideuiseui)
  - [GET /applications/{app_id}/collaborators](#get-applicationsapp_idcollaborators)
  - [GET /applications/{app_id}/collaborators/{username}](#get-applicationsapp_idcollaboratorsusername)
  - [PUT /applications/{app_id}/collaborators/{username}](#put-applicationsapp_idcollaboratorsusername)
  - [DELETE /applications/{app_id}/collaborators/{username}](#delete-applicationsapp_idcollaboratorsusername)
  - [GET /applications/{app_id}/rights](#get-applicationsapp_idrights)
  - [GET /applications/{app_id}/access-keys](#get-applicationsapp_idaccess-keys)
  - [POST /applications/{app_id}/access-keys](#post-applicationsapp_idaccess-keys)
  - [GET /applications/{app_id}/access-keys/{keyname}](#get-applicationsapp_idaccess-keyskeyname)
  - [DELETE /applications/{app_id}/access-keys/{keyname}](#delete-applicationsapp_idaccess-keyskeyname)
  - [POST /applications/{app_id}/token](#post-applicationsapp_idtoken)
  - [GET /gateways](#get-gateways)
  - [POST /gateways](#post-gateways)
  - [GET /gateways/{gw_id}](#get-gatewaysgw_id)
  - [PATCH /gateways/{gw_id}](#patch-gatewaysgw_id)
  - [DELETE /gateways/{gw_id}](#delete-gatewaysgw_id)
  - [GET /gateways/{gw_id}/collaborators](#get-gatewaysgw_idcollaborators)
  - [GET /gateways/{gw_id}/collaborators/{username}](#get-gatewaysgw_idcollaboratorsusername)
  - [PUT /gateways/{gw_id}/collaborators/{username}](#put-gatewaysgw_idcollaboratorsusername)
  - [DELETE /gateways/{gw_id}/collaborators/{username}](#delete-gatewaysgw_idcollaboratorsusername)
  - [GET /gateways/{gw_id}/rights](#get-gatewaysgw_idrights)

## Endpoints

### GET /applications

Gets all the applictions the user has access to.


**Parameters**

| in    | name    | required | description                              |
|-------|---------|----------|------------------------------------------|
| query | deleted | false    | Set to `1` to also include deleted apps. |

#### Response: 200

A list of applications.

**Schema**

- (array)
  - (object)
    - id (string) The globally unique identifier of the application.
    - name (string) The friendly name/description of the application.
    - euis (array) The list of EUIs this application is reachable at.
      - (string)
    - created (string, date-time) The time this application was created.
    - rights (array) A list of rights the current user has for the application.
      - (string)
    - collaborators (array) (optional) The collaborators that have access to this app.
      - (object)
        - username (string) The username of the collaborator.
        - email (string, email) The email address of the collaborator.
        - rights (array) The rights the collaborator has to the specified application or gateway.
          - (string)
    - access_keys (array) (optional) The access keys of this application.
      - (object)
        - name (string) The friendly name for the access key.
        - key (string) The opaque string that is the access key.
        - rights (array) The rights the access key will grant if used.
          - (string)
    - deleted (string, date) (optional) Set to the time of app deletion, if and only if the app is to be considered deleted.

### POST /applications

Creates an application on the account server and adds the user as its first
collaborator.


**Parameters**

| in   | name        | required | description                |
|------|-------------|----------|----------------------------|
| body | application | false    | The application to create. |

**Request Body**

- (object)
  - id (string) The globally unique identifier of the application.
  - name (string) The friendly name/description of the application.
  - euis (array) The list of EUIs this application is reachable at.
    - (string)
  - created (string, date-time) The time this application was created.
  - rights (array) A list of rights the current user has for the application.
    - (string)
  - collaborators (array) (optional) The collaborators that have access to this app.
    - (object)
      - username (string) The username of the collaborator.
      - email (string, email) The email address of the collaborator.
      - rights (array) The rights the collaborator has to the specified application or gateway.
        - (string)
  - access_keys (array) (optional) The access keys of this application.
    - (object)
      - name (string) The friendly name for the access key.
      - key (string) The opaque string that is the access key.
      - rights (array) The rights the access key will grant if used.
        - (string)
  - deleted (string, date) (optional) Set to the time of app deletion, if and only if the app is to be considered deleted.

#### Response: 201

The application was succesfully created.

**Schema**

- (object)
  - id (string) The globally unique identifier of the application.
  - name (string) The friendly name/description of the application.
  - euis (array) The list of EUIs this application is reachable at.
    - (string)
  - created (string, date-time) The time this application was created.
  - rights (array) A list of rights the current user has for the application.
    - (string)
  - collaborators (array) (optional) The collaborators that have access to this app.
    - (object)
      - username (string) The username of the collaborator.
      - email (string, email) The email address of the collaborator.
      - rights (array) The rights the collaborator has to the specified application or gateway.
        - (string)
  - access_keys (array) (optional) The access keys of this application.
    - (object)
      - name (string) The friendly name for the access key.
      - key (string) The opaque string that is the access key.
      - rights (array) The rights the access key will grant if used.
        - (string)
  - deleted (string, date) (optional) Set to the time of app deletion, if and only if the app is to be considered deleted.

#### Response: 409

The application could not be created because the id is already taken.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### GET /applications/{app_id}

Gets the application specified by the `app_id` parameter.


**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 200

Application found.

**Schema**

- (object)
  - id (string) The globally unique identifier of the application.
  - name (string) The friendly name/description of the application.
  - euis (array) The list of EUIs this application is reachable at.
    - (string)
  - created (string, date-time) The time this application was created.
  - rights (array) A list of rights the current user has for the application.
    - (string)
  - collaborators (array) (optional) The collaborators that have access to this app.
    - (object)
      - username (string) The username of the collaborator.
      - email (string, email) The email address of the collaborator.
      - rights (array) The rights the collaborator has to the specified application or gateway.
        - (string)
  - access_keys (array) (optional) The access keys of this application.
    - (object)
      - name (string) The friendly name for the access key.
      - key (string) The opaque string that is the access key.
      - rights (array) The rights the access key will grant if used.
        - (string)
  - deleted (string, date) (optional) Set to the time of app deletion, if and only if the app is to be considered deleted.

### PATCH /applications/{app_id}

Edits the application specified by the `app_id` parameter.


**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 204

Application edited.

**Schema**

N/A

### DELETE /applications/{app_id}

Removes the application specified by the `app_id` parameter.


**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 204

Succesfully removed the application.

**Schema**

N/A

### POST /applications/{app_id}/restore

**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 204

Succesfully restored the application.

**Schema**

N/A

### GET /applications/{app_id}/euis

Lists all of the applications EUIs.

**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 200

The list of EUIs.

**Schema**

- (array)
  - (string)

### POST /applications/{app_id}/euis

Selects a new EUI from the TTN EUI block and adds it to the application.

**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 201

The EUI was created succesfully.

**Schema**

- (string)

### PUT /applications/{app_id}/euis/{eui}

Add an EUI to the application.

**Parameters**

| in   | name   | type   | required | description                | pattern        |
|------|--------|--------|----------|----------------------------|----------------|
| path | app_id | string | true     | The ID of the application. |                |
| path | eui    | string | true     | The EUI of an application. | `[0-9A-Z]{16}` |

#### Response: 204

The EUI was added successfully.

**Schema**

N/A

### DELETE /applications/{app_id}/euis/{eui}

Remove an EUI from the application.

**Parameters**

| in   | name   | type   | required | description                | pattern        |
|------|--------|--------|----------|----------------------------|----------------|
| path | app_id | string | true     | The ID of the application. |                |
| path | eui    | string | true     | The EUI of an application. | `[0-9A-Z]{16}` |

#### Response: 204

The EUI was removed.

**Schema**

N/A

### GET /applications/{app_id}/collaborators

List the collaborators of the application.

**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 200

The list of collaborators.

**Schema**

- (array)
  - (object)
    - username (string) The username of the collaborator.
    - email (string, email) The email address of the collaborator.
    - rights (array) The rights the collaborator has to the specified application or gateway.
      - (string)

### GET /applications/{app_id}/collaborators/{username}

**Parameters**

| in   | name     | type   | required | description                     |
|------|----------|--------|----------|---------------------------------|
| path | app_id   | string | true     | The ID of the application.      |
| path | username | string | true     | The username of a collaborator. |

#### Response: 200

The rights the collaborator has to the application.

**Schema**

- (object)
  - username (string) The username of the collaborator.
  - email (string, email) The email address of the collaborator.
  - rights (array) The rights the collaborator has to the specified application or gateway.
    - (string)

### PUT /applications/{app_id}/collaborators/{username}

**Parameters**

| in   | name     | type   | required | description                                    |
|------|----------|--------|----------|------------------------------------------------|
| path | app_id   | string | true     | The ID of the application.                     |
| path | username | string | true     | The username of a collaborator.                |
| body | rights   |        | true     | The rights you want to grant the collaborator. |

**Request Body**

- (array)
  - (string)

#### Response: 201

The rights where succesfully added to the collaborator.

**Schema**

N/A

### DELETE /applications/{app_id}/collaborators/{username}

Removes a collaborator from the application.

It is not possible to
- remove the last collaborator with the `collaborators` right from an application


**Parameters**

| in   | name     | type   | required | description                     |
|------|----------|--------|----------|---------------------------------|
| path | app_id   | string | true     | The ID of the application.      |
| path | username | string | true     | The username of a collaborator. |

#### Response: 204

The collaborator was succesfully removed from the application.

**Schema**

N/A

### GET /applications/{app_id}/rights

**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 200

The rights you have to the application.

**Schema**

- (array)
  - (string)

### GET /applications/{app_id}/access-keys

**Parameters**

| in   | name   | type   | required | description                |
|------|--------|--------|----------|----------------------------|
| path | app_id | string | true     | The ID of the application. |

#### Response: 200

The rights you have to the application.

**Schema**

- (array)
  - (object)
    - name (string) The friendly name for the access key.
    - key (string) The opaque string that is the access key.
    - rights (array) The rights the access key will grant if used.
      - (string)

### POST /applications/{app_id}/access-keys

**Parameters**

| in   | name   | type   | required | description                             |
|------|--------|--------|----------|-----------------------------------------|
| path | app_id | string | true     | The ID of the application.              |
| body | rights |        | true     | The rights the new access key will have |

**Request Body**

- (object)
  - name (string)
  - rights (array)
    - (string)

#### Response: 204

Access key created successfully.

**Schema**

N/A

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request is authorized but does not have the rights to edit access keys.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

Application with does not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 409

An access key with that name already exists.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### GET /applications/{app_id}/access-keys/{keyname}

**Parameters**

| in   | name    | type   | required | description                |
|------|---------|--------|----------|----------------------------|
| path | app_id  | string | true     | The ID of the application. |
| path | keyname | string | true     | The name of the access key |

#### Response: 200

The resulting access key

**Schema**

- (object)
  - name (string) The friendly name for the access key.
  - key (string) The opaque string that is the access key.
  - rights (array) The rights the access key will grant if used.
    - (string)

### DELETE /applications/{app_id}/access-keys/{keyname}

**Parameters**

| in   | name    | type   | required | description                |
|------|---------|--------|----------|----------------------------|
| path | app_id  | string | true     | The ID of the application. |
| path | keyname | string | true     | The name of the access key |

#### Response: 204

The key was successfully removed

**Schema**

N/A

### POST /applications/{app_id}/token

**Parameters**

| in   | name           | type   | required | description                             |
|------|----------------|--------|----------|-----------------------------------------|
| path | app_id         | string | true     | The ID of the application.              |
| body | token_exchange |        | false    | The credentials for the token exchange. |

**Request Body**

N/A

#### Response: 200

Token exchange successful.

**Schema**

N/A

### GET /gateways

Gets all the gateways the user has access to.


#### Response: 200

A list of gateways.

**Schema**

- (array)
  - (object)
    - id (string) The globally unique identifier of the gateway.
    - frequency_plan (string) The frequency plan the gateway is using.
    - frequency_plan_url (string, url) The URL of the frequency plan description.
    - location_public (boolean) Wether or not the location is public.
    - owner_public (boolean) Wether or not the owner is public.
    - status_public (boolean) Wether or not the status is public.
    - attributes (object) A free form map of gateway attributes.
    - antenna_location (object) (optional) The (gps) location of the gateway antenna.
      - longitude (number) (optional) The longitude.
      - latitude (number) (optional) The latitude.
      - altitude (integer) (optional) The altitude.
    - collaborators (array) (optional) A list of collaborators that have access to the gateway.
      - (object)
        - username (string) The username of the collaborator.
        - email (string, email) The email address of the collaborator.
        - rights (array) The rights the collaborator has to the specified application or gateway.
          - (string)
    - key (string) (optional) An opaque string that the gateway can use to prove it's identity (keep this safe!).
    - auto_update (boolean) (optional) Wether or not the gateway has auto updates enabled.
    - activated (boolean) (optional) Wether or not the gateway has been activated.
    - token (object) (optional) A token the gateway can use to authenticate itself to components of the network.
      - expires_in (integer) The number of seconds before the token expires.
      - access_token (string) The signed JWT that can be used to authenticate.
    - router (object) The router the gateway should talk to.
      - id (string) The id of the router.
      - address (string, url) The gRPC address of the router the gateway will talk to.
      - mqtt_address (string, url) The MQTT address of the router the gateway will talk to.
    - fallback_routers (array) (optional) List of fallback routers that the gateway should attempt to connect to when the primary one is down.
      - (object)
        - id (string) The id of the router.
        - address (string, url) The gRPC address of the router the gateway will talk to.
        - mqtt_address (string, url) The MQTT address of the router the gateway will talk to.

### POST /gateways

Registers a gateway on the account server and adds the user as its first
collaborator.


**Parameters**

| in   | name    | required | description            |
|------|---------|----------|------------------------|
| body | gateway | false    | The gateway to create. |

**Request Body**

- (object)
  - id (string) The ID of the new gateway.
  - frequency_plan (string) The frequency plan the new gateway will use.
  - location (object) (optional)
    - longitude (number) (optional) The longitude.
    - latitude (number) (optional) The latitude.
    - altitude (integer) (optional) The altitude.
  - auto_update (boolean) (optional) Wether or not the gateway should automatically update itself.

#### Response: 201

The gateway was succesfully registered.

**Schema**

- (object)
  - id (string) The globally unique identifier of the gateway.
  - frequency_plan (string) The frequency plan the gateway is using.
  - frequency_plan_url (string, url) The URL of the frequency plan description.
  - location_public (boolean) Wether or not the location is public.
  - owner_public (boolean) Wether or not the owner is public.
  - status_public (boolean) Wether or not the status is public.
  - attributes (object) A free form map of gateway attributes.
  - antenna_location (object) (optional) The (gps) location of the gateway antenna.
    - longitude (number) (optional) The longitude.
    - latitude (number) (optional) The latitude.
    - altitude (integer) (optional) The altitude.
  - collaborators (array) (optional) A list of collaborators that have access to the gateway.
    - (object)
      - username (string) The username of the collaborator.
      - email (string, email) The email address of the collaborator.
      - rights (array) The rights the collaborator has to the specified application or gateway.
        - (string)
  - key (string) (optional) An opaque string that the gateway can use to prove it's identity (keep this safe!).
  - auto_update (boolean) (optional) Wether or not the gateway has auto updates enabled.
  - activated (boolean) (optional) Wether or not the gateway has been activated.
  - token (object) (optional) A token the gateway can use to authenticate itself to components of the network.
    - expires_in (integer) The number of seconds before the token expires.
    - access_token (string) The signed JWT that can be used to authenticate.
  - router (object) The router the gateway should talk to.
    - id (string) The id of the router.
    - address (string, url) The gRPC address of the router the gateway will talk to.
    - mqtt_address (string, url) The MQTT address of the router the gateway will talk to.
  - fallback_routers (array) (optional) List of fallback routers that the gateway should attempt to connect to when the primary one is down.
    - (object)
      - id (string) The id of the router.
      - address (string, url) The gRPC address of the router the gateway will talk to.
      - mqtt_address (string, url) The MQTT address of the router the gateway will talk to.

#### Response: 409

The gateway could not be created because the ID is already taken.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### GET /gateways/{gw_id}

Gets the application specified by the `gw_id` parameter.


**Parameters**

| in   | name  | type   | required | description            |
|------|-------|--------|----------|------------------------|
| path | gw_id | string | true     | The ID of the gateway. |

#### Response: 200

Gateway found.

**Schema**

- (object)
  - id (string) The globally unique identifier of the gateway.
  - frequency_plan (string) The frequency plan the gateway is using.
  - frequency_plan_url (string, url) The URL of the frequency plan description.
  - location_public (boolean) Wether or not the location is public.
  - owner_public (boolean) Wether or not the owner is public.
  - status_public (boolean) Wether or not the status is public.
  - attributes (object) A free form map of gateway attributes.
  - antenna_location (object) (optional) The (gps) location of the gateway antenna.
    - longitude (number) (optional) The longitude.
    - latitude (number) (optional) The latitude.
    - altitude (integer) (optional) The altitude.
  - collaborators (array) (optional) A list of collaborators that have access to the gateway.
    - (object)
      - username (string) The username of the collaborator.
      - email (string, email) The email address of the collaborator.
      - rights (array) The rights the collaborator has to the specified application or gateway.
        - (string)
  - key (string) (optional) An opaque string that the gateway can use to prove it's identity (keep this safe!).
  - auto_update (boolean) (optional) Wether or not the gateway has auto updates enabled.
  - activated (boolean) (optional) Wether or not the gateway has been activated.
  - token (object) (optional) A token the gateway can use to authenticate itself to components of the network.
    - expires_in (integer) The number of seconds before the token expires.
    - access_token (string) The signed JWT that can be used to authenticate.
  - router (object) The router the gateway should talk to.
    - id (string) The id of the router.
    - address (string, url) The gRPC address of the router the gateway will talk to.
    - mqtt_address (string, url) The MQTT address of the router the gateway will talk to.
  - fallback_routers (array) (optional) List of fallback routers that the gateway should attempt to connect to when the primary one is down.
    - (object)
      - id (string) The id of the router.
      - address (string, url) The gRPC address of the router the gateway will talk to.
      - mqtt_address (string, url) The MQTT address of the router the gateway will talk to.

#### Response: 404

Gateway not found.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### PATCH /gateways/{gw_id}

Edits the gateway specified by the `gw_id` parameter.


**Parameters**

| in   | name  | type   | required | description            |
|------|-------|--------|----------|------------------------|
| path | gw_id | string | true     | The ID of the gateway. |

#### Response: 204

Gateway successfully edited.

**Schema**

N/A

#### Response: 400

Gateway editing failed.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request was authorized, but did not have the correct rights.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

The gateway does not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### DELETE /gateways/{gw_id}

Removes the gateway specified by the `gw_id` parameter.

**Parameters**

| in   | name  | type   | required | description            |
|------|-------|--------|----------|------------------------|
| path | gw_id | string | true     | The ID of the gateway. |

#### Response: 204

Succesfully removed the gateway.

**Schema**

N/A

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request was authorized, but did not have the correct rights to delete the gateway.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

The gateway does not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### GET /gateways/{gw_id}/collaborators

**Parameters**

| in   | name  | type   | required | description            |
|------|-------|--------|----------|------------------------|
| path | gw_id | string | true     | The ID of the gateway. |

#### Response: 200

The list of collaborators.

**Schema**

- (array)
  - (object)
    - username (string) The username of the collaborator.
    - email (string, email) The email address of the collaborator.
    - rights (array) The rights the collaborator has to the specified application or gateway.
      - (string)

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request was authorized, but did not have the correct rights to view the gateway collaborators.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

The gateway does with the specified ID not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### GET /gateways/{gw_id}/collaborators/{username}

**Parameters**

| in   | name     | type   | required | description                     |
|------|----------|--------|----------|---------------------------------|
| path | gw_id    | string | true     | The ID of the gateway.          |
| path | username | string | true     | The username of a collaborator. |

#### Response: 200

Found a collaborator.

**Schema**

- (object)
  - username (string) The username of the collaborator.
  - email (string, email) The email address of the collaborator.
  - rights (array) The rights the collaborator has to the specified application or gateway.
    - (string)

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request was authorized, but did not have the correct rights to view the gateway collaborators.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

The gateway does with the specified ID not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### PUT /gateways/{gw_id}/collaborators/{username}

**Parameters**

| in   | name     | type   | required | description                                   |
|------|----------|--------|----------|-----------------------------------------------|
| path | gw_id    | string | true     | The ID of the gateway.                        |
| path | username | string | true     | The username of a collaborator.               |
| body | rights   |        | true     | The rights you want to grant the collaborator |

**Request Body**

- (array)
  - (string)

#### Response: 201

The rights where succesfully added to the collaborator.

**Schema**

N/A

#### Response: 400

Something went wrong when adding or updating the collaborator.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request was authorized, but did not have the correct rights to edit the gateway collaborators.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

The gateway does with the specified ID not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### DELETE /gateways/{gw_id}/collaborators/{username}

Removes a collaborator from the gateway.

It is not possible to
- remove the last collaborator with the `collaborators` right from an gateway


**Parameters**

| in   | name     | type   | required | description                     |
|------|----------|--------|----------|---------------------------------|
| path | gw_id    | string | true     | The ID of the gateway.          |
| path | username | string | true     | The username of a collaborator. |

#### Response: 204

The collaborator was succesfully removed from the application.

**Schema**

N/A

#### Response: 401

The request is not authorized.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 403

The request was authorized, but did not have the correct rights to remove gateway collaborators.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

#### Response: 404

The gateway does with the specified ID not exist.

**Schema**

- (object)
  - code (number) The error status code (corresponds to the HTTP status code).
  - error (string) A human-readable description of what went wrong.

### GET /gateways/{gw_id}/rights

**Parameters**

| in   | name  | type   | required | description            |
|------|-------|--------|----------|------------------------|
| path | gw_id | string | true     | The ID of the gateway. |

#### Response: 200

The rights you have to the application.

**Schema**

- (array)
  - (string)

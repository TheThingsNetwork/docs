---
title: API Reference
zindex: -1000
source: 'https://github.com/TheThingsIndustries/node-ttn-oauth2/blob/v2-preview/apidocs.md'
---

API Reference
=====================================
This is the API specification all account server need to comply to
to be able to run a TTN backend.


**Version:** 2.0.0

### Security
---
|oauth2|*OAuth 2.0*|
|---|---|
|Flow|accessCode|
|Authorization URL|/users/authorize|
|Token URL|/users/token|
|**Scopes**||
|profile|Manage user profile|
|apps|Manage applications|
|apps:<app_id>|Manage application <app_id>|
|gateways|Manage gateways|
|gateways:<gateway_id>|Manage gateway <gateway_id>|
|components|Manage components|
|components:<component_id>|Manage component <component_id>|

|apiKey|*API Key*|
|---|---|
|In|header|
|Name|Key|

|oauth2|*OAuth 2.0*|
|---|---|
|Flow|password|
|Token URL|/applications/token|
|**Scopes**||
|apps|Manage applications|

### /applications
---
##### ***GET***
**Summary:** List applications.

**Description:** Gets all the applictions the user has access to.


**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of applications. |

##### ***POST***
**Summary:** Create an application.

**Description:** Creates an application on the account server and adds the user as its first
collaborator.


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| application | body | The application to create. | No |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | The application was succesfully created. |
| 409 | The application could not be created because the id is already taken. |

### /{app_id}
---
##### ***GET***
**Summary:** Get application.

**Description:** Gets the application specified by the `app_id` parameter.


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Application found. |

##### ***PATCH***
**Summary:** Edit application.

**Description:** Edits the application specified by the `app_id` parameter.


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | Application edited. |

##### ***DELETE***
**Summary:** Remove application.

**Description:** Removes the application specified by the `app_id` parameter.


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | Succesfully removed the application. |

### /{app_id}/euis
---
##### ***GET***
**Summary:** List EUIs of an application.

**Description:** Lists all of the applications EUIs.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The list of EUIs. |

##### ***POST***
**Summary:** Request new EUI.

**Description:** Selects a new EUI from the TTN EUI block and adds it to the application.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | The EUI was created succesfully. |

### /{app_id}/euis/{eui}
---
##### ***PUT***
**Summary:** Add an EUI to the application.

**Description:** Add an EUI to the application.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| eui | path | The EUI of an application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | The EUI was added successfully. |

##### ***DELETE***
**Summary:** Remove an EUI from the application.

**Description:** Remove an EUI from the application.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| eui | path | The EUI of an application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | The EUI was removed. |

### /{app_id}/collaborators
---
##### ***GET***
**Summary:** List the collaborators of the application.

**Description:** List the collaborators of the application.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The list of collaborators. |

### /{app_id}/collaborators/{username}
---
##### ***GET***
**Summary:** Get a collaborators rights to the application.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| username | path | The username of a collaborator. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The rights the collaborator has to the application. |

##### ***PUT***
**Summary:** Add or update the rights of a user as collaborator to the application.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| username | path | The username of a collaborator. | Yes | string |
|  |  |  | No |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | The rights where succesfully added to the collaborator. |

##### ***DELETE***
**Summary:** Remove a user as collaborator from the application.

**Description:** Removes a collaborator from the application.

It is not possible to
- remove the last collaborator with the `collaborators` right from an application


**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| username | path | The username of a collaborator. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | The collaborator was succesfully removed from the application. |

### /{app_id}/rights
---
##### ***GET***
**Summary:** Get the rights you have to the specified application with the current authentication method.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The rights you have to the application. |

### /{app_id}/access-keys
---
##### ***GET***
**Summary:** List the applications access keys

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The rights you have to the application. |

##### ***POST***
**Summary:** Create a new access key with the specified name and rights

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| name | body | The name of the new access key | Yes |  |
| rights | body | The rights the new access key will have | Yes |  |

### /{app_id}/access-keys/{keyname}
---
##### ***GET***
**Summary:** Get information about an app access key

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| keyname | path | The name of the access key | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The resulting access key |

##### ***DELETE***
**Summary:** Remove an access key

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| keyname | path | The name of the access key | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | The key was successfully removed |

### /{app_id}/token
---
##### ***POST***
**Summary:** Exchange an application Access Key for an application Access Token.

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| app_id | path | The ID of the application. | Yes | string |
| token_exchange | body | The credentials for the token exchange. | No |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Token exchange successful. |

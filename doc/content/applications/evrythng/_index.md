---
title: EVRYTHNG
section: Integrations
weight: -1000
source: 'https://github.com/TheThingsIndustries/integration-messaging/blob/master/evrythng/README.md'
---

# EVRYTHNG Integration
EVRYTHNG is an online platform for managing IoT devices and using their data to enhance business operations. See [www.evrythng.com](https://www.evrythng.com) for more information.
 
This integration enables LoRaWAN with THNGs through The Things Network. See also [integration documentation](https://developers.evrythng.com/docs/the-things-network) by EVRYTHNG.
 
## How to setup EVRYTHNG 

You will need an EVRYTHNG developer account. You can sign up for the [US platform](https://dashboard.evrythng.com/signup) or for the [EU platform](https://dashboard-eu.evrythng.com/signup).

Your EVRYTHNG developer account needs to have an application in a project. See the [EVRYTHNG documentation](https://developers.evrythng.com/docs/connected-device-walkthrough-projects-and-applications) on how to set up your application.

Please note:
  - Which platform/region your EVRYTHNG account is on. This is either **us** (United States) or **eu** (Europe). If you access EVRYTHNG through **dashboard-eu.evrythng.com** then your account is on the **eu** platform. If there's no **-eu** in the URL, you're on the **us** platform
  - Your EVRYTHNG application's **Trusted API Key**, which can be found on the application's page in your dashboard

## Create the integration
   
In the [The Things Network Console](https://console.thethingsnetwork.org), navigate to your application, click on **Integrations** -> **add an integration** -> **EVRYTHNG integration**.

You will be asked to enter the following settings:
- **Region**: this is the platform your EVRYTHNG account is on (**eu** or **us**)
- **Create**: enter **true** if you want the integration to create a new THNG for each device automatically, or **false**
- **Trusted Api Key**: the Trusted API Key for your EVRYTHNG application

## Uplink

Device uplinks will update their corresponding THNG's properties, creating new properties if needed. The raw payload will also be stored as an additional THNG property.

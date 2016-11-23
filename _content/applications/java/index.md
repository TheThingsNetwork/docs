---
title: Java
section: SDKs
redirect_from:
 - /refactor/java/
 - /v2-preview/java/
 - /current/java/
 - /java/
ambassador:
  name: Romain Cambier
  username: cambierr
---

# Java SDK

[Java](https://www.java.com) is a complete ecosystem that provides tools for developing software and deploying it in a cross-platform environment.

With the [TTN Client](http://mvnrepository.com/artifact/org.thethingsnetwork/java-app-lib) you can receive activations and uplink messages from devices via The Things Network as well as respond with downlink messages.

## Prerequisites

* Access to [preview.console.thethingsnetwork.org](https://preview.console.thethingsnetwork.org/).
* Access to an application with registered device on TTN.
* A server/computer to run Java on.
* Version 1.x of the [TTN Java client](https://github.com/TheThingsNetwork/java-app-lib).

    > You can get version 1.x via maven using:
    >
    > ```xml
    > <dependency>
    >   <groupId>org.thethingsnetwork</groupId>
    >   <artifactId>java-app-lib</artifactId>
    >   <version>1.0.0</version>
    > </dependency>
    > ```

---
title: Java
sections:
 - java/_quick-start.md
 - java/_api.md
redirect_from:
 - /refactor/java/
ambassador:
  name: Romain Cambier
  username: cambierr
  text: >
    Both this guide and the [client](https://github.com/thethingsnetwork/java-app-lib) are a community effort led by our Java ambassador [Romain Cambier](https://www.thethingsnetwork.org/u/cambierr/). The Things Network does not provide support for this gateway. For community support visit the [forum](https://www.thethingsnetwork.org/forum/search?q=java) or create an issue on [GitHub](https://github.com/thethingsnetwork/java-app-lib/issues).
---

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

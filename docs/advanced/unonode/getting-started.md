---
sidebar_position: 1
---

# Getting started

This document describes how one can set up their own Unoparty "Federated Node" system, on Linux, Windows or OS X.

A Federated Node (unonode) is a self-contained system that runs the some or all of the Unoparty software stack, via Docker. Each system operates as a Unobtanium and Unoparty "full node". Using this toolset, one can generally get started running the Unoparty software much quicker and more easily than a manual installation of the various components.

The document is primarily intended for power users and developers.

### Node Services[​](#node-services "Direct link to heading")

Services run on a Federated Node include some or all of the following:

*   **unoparty-server**: `unoparty-lib` + `unoparty-cli`. Implements support for the core Unoparty protocol, via a provided REST API and command line interface.
*   **unoblock**: Provides additional services (required by `unowallet` and potentially other services) beyond those offered in the API provided by `unoparty-server`. It features a full-fledged JSON RPC-based API, and has an extensible architecture to support custom plugins.
*   **unowallet**: The reference Web wallet for Unoparty. This is a collection of HTML, CSS and javascript resources, served by `nginx`.
*   **unobtaniumd**: Reference Unobtanium implementation, used by `unoparty-server` to sync to the Unobtanium blockchain.
*   **addrindexrs_uno**: Unobtanium address index service. Maintains an updated database of UTXOs for usage in the unoparty services.
*   **armory\_utxsvr**: A service used by `unoblock` with Unowallet to support [Offline Armory transactions](/docs/wallets/tuts/create_armory_address/). This service requires Armory itself, which is automatically installed as part of the Federated Node setup procedure.
*   **nginx**: Reverse proxies `unowallet` access. Not used with `unoparty-server`\-only or `unoblock`\-only nodes.
*   **mongodb and redis**: Used by `unoblock`.

Please note that Federated Node should not be installed on a system which already has one or more of conflicting services running on the ports used by Federated Node. The Federated Node install script checks that required ports are unused and exits to avoid conflict. If you have a non-essential Web, mongodb or other service running on the target system you can disable them or bind them to a different port to be able to pass the built-in check and avoid application conflicts.

### Hardware / OS requirements[​](#hardware--os-requirements "Direct link to heading")

*   **Memory**: 4GB RAM (`unobtaniumd`, `unoparty-server` only), 8GB+ RAM (full stack)
*   **Disk space:** The exact disk space required will be dependent on what services are run on the node:
    *   For `unobtanium` databases: **~3GB** (mainnet), **~1GB** (testnet)
    *   For `addrindexrs_uno` database: **~1GB** (mainnet), **~1GB** (testnet)
    *   For `unoparty` databases: **~5GB** (mainnet), **~1GB** (testnet)
    *   For `armory_utxsvr`: **~3GB** (mainnet), **~1GB** (testnet)
*   **OS:** _Please note that Ubuntu Linux is the recommended OS at this time, as most of our testing is performed on it. Windows and OS X support is considered in BETA._
    *   **Linux**: We recommend Ubuntu 20.10 64-bit, but other, modern versions of Linux should work, as long as they support the newest released version of Docker
    *   **Windows**: Windows 7 or higher, or Server 2008 or higher. 64-bit required
    *   **OS X**: 10.8 "Mountain Lion" or higher

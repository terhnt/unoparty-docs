---
sidebar_position: 1
---
# Platform Architecture  
In the figure below you can see how all Unoparty platform components interact with each other.

![Architecture Image](/img/tutorial/platformarch.png)

## unoparty-server
unoparty-server is the name for the combination of unoparty-lib and unoparty-cli. It serves as the reference client for Unoparty, and implements support for the core Unoparty protocol via a provided REST API and command line interface.

## unoblock
unoblock provides additional services (required by unowallet and potentially other services) beyond those offered in the API provided by unoparty-server. It features a full-fledged JSON RPC-based API, and has an extensible architecture to support custom plugins.

## Unowallet
Unowallet is a web wallet for Unobtanium (UNO) and Unoparty (XUP). It is being actively developed and currently implements most Unoparty features, such as:

- Fully functional wallet for UNO, XUP, and user-created tokens
- Peer-to-peer asset trading with algorithmic order matching (XUP, other assets)
- Custom asset creation
- Betting
- Broadcasting data on the Unobtanium Blockchain
- Multisig (Buggy)
- Offline (Armory) transactions (TODO)

## armory_utxsvr
A service used by unoblock with Unowallet to support Offline Armory transactions. This service requires Armory itself.

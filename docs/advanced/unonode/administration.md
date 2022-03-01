---
sidebar_position: 4
id: administration
---

# Node Administration

Administration[​](#administration)
-----------------------------------------------------------

### Checking status[​](#checking-status)

To check the status of the containers, run:

```bash
unonode ps
```

### Modifying configurations[​](#modifying-configurations)

Configuration files for the `unobtanium`, `unoparty` and `unoblock` services are stored under `unonode/config/` and may be freely edited. The various locations are as follows:

*   `unobtanium`: See `unonode/config/unobtanium/unobtanium.conf`
*   `unobtanium-testnet`: See `unonode/config/unobtanium/unobtanium.testnet.conf`
*   `unoparty`: See `unonode/config/unoparty/server.conf`
*   `unoparty-testnet`: See `unonode/config/unoparty/server.testnet.conf`
*   `unoblock`: See `unonode/config/unoblock/server.conf`
*   `unoblock-testnet`: See `unonode/config/unoblock/server.testnet.conf`
*   `redis`: shared service used for both mainnet and testnet
*   `mongodb`: shared service used for both mainnet and testnet

Remember: once done editing a configuration file, you must `restart` the corresponding service. Also, please don't change port or usernames/passwords if the configuration files unless you know what you are doing (as the services are coded to work together smoothly with specific values).

For example, a user with base setup (Unobtanium Core & Unoparty Server) could make Unoparty use existing Unobtanium Core by changing configuration files found under unonode/config/unoparty/ (`backend-connect` in Unoparty server configuration files and `wallet-connect` in client configuration files.) At this point Unobtanium Core (mainnet and/or testnet) container(s) could be stopped and unoparty server container restarted. If your existing Unobtanium Server allows RPC connections, with proper settings and correct RPC credentials in their configuration files, unoparty (server), unoblock and unowallet can all use it so that you don't have to run unobtanium or unobtanium-testnet container.

### Viewing/working with stored data[​](#viewingworking-with-stored-data)

The various services use [Docker named volumes](https://docs.docker.com/engine/tutorials/dockervolumes/) to store data that is meant to be persistent:

*   `unobtanium` and `unobtanium-testnet`: Stores blockchain data in the `unonode_unobtanium-data` volume
*   `addrindexrs_uno` and `addrindexrs_uno-testnet`: Stores index data in the `unonode_addrindexrs_uno-data` volume
*   `unoparty` and `unoparty-testnet`: Stores Unoparty databases in the `unonode_unoparty-data` volume
*   `unoblock` and `unoblock-testnet`: Stores Unoblock asset info (images), etc in the `unonode_unoblock-data` volume
*   `mongodb`: Stores the databases for `unoblock` and `unoblock-testnet` in the `unonode_mongodb-data` volume

Use `docker volume inspect <volume-name>` to display volume location. See `docker volume --help` for help on how to interact with Docker volumes.

### Viewing logs[​](#viewing-logs)

To tail the logs, use the following command:

```bash
unonode tail <service>
```

Or, to view the entire log, run:

```bash
unonode logs <service>
```

#### Service Names

Where `<service>` may be one the following, or blank to tail all services:

*   `unoparty` (`unoparty-server` mainnet)
*   `unoblock` (`unoblock` mainnet)
*   `unobtanium` (`unobtanium` mainnet)
*   `addrindexrs_uno` (`addrindexrs_uno` mainnet)
*   `armory_utxsvr` (`armory_utxsvr` mainnet)
*   `unoparty-testnet`
*   `unoblock-testnet`
*   `unobtanium-testnet`
*   `addrindexrs_uno-testnet`
*   `armory_utxsvr-testnet`
*   `unowallet`

### Stopping and restarting containers[​](#stopping-and-restarting-containers)

```bash
unonode stop <service>
unonode start <service>
unonode restart <service>
```

Where `<service>` is one of the service names listed [above](#service-names), or blank for all services.

Note that redis and mongodb are shared services and need to run if either (mainnet or testnet) unoblock container is running and shut down only if both unoblock containers are not running.

### Issuing a single shell command[​](#issuing-a-single-shell-command)

```bash
unonode exec <service> <CMD>
```

Where `<service>` is one of the service names listed [above](#service-names), and `<CMD>` is an arbitrary shell command.

For example:

```bash
unonode exec unoparty unoparty-client send --source=uVVuwXm2mDK9pr9XkWT5k7ihQyoSC8y2MW --destination=uVjbsx6tAhySeJpN7xLBieAzWcD7rEVmYp --quantity=1.5 --asset=XUP
unonode exec unobtanium-testnet unobtanium-cli getpeerinfo
unonode exec unoblock ls /root
```

**Getting a shell in a conainer**

```bash
unonode shell <service>
```

Where `<service>` is one of the service names listed [above](#service-names).

Updating, rebuilding, uninstalling[​](#updating-rebuilding-uninstalling)
-------------------------------------------------------------------------------------------------

To pull the newest software from the git repositories and restart the appropriate daemon, issue the following command:

```bash
unonode update <service>
```

Where `<service>` is one of the following, or blank for all applicable services:

*   `unoparty`
*   `unoparty-testnet`
*   `unoblock`
*   `unoblock-testnet`
*   `armory_utxsvr`
*   `armory_utxsvr-testnet`
*   `unowallet`

### Reparsing blockchain data[​](#reparsing-blockchain-data)

Both `unoparty-server` and `unoblock` read in blockchain data and construct their own internal databases. To reset these databases and trigger a reparse of this blockchain data for one of the services, run:

```bash
unonode reparse <service>
```

Where service is `unoparty`, `unoparty-testnet`, `unoblock`, or `unoblock-testnet`.

### Rebuilding a service container[​](#rebuilding-a-service-container)

As a more extensive option, if you want to remove, rebuild and reinstall a container (downloading the newest container image/`Dockerfile` and utilizing that):

```bash
unonode rebuild <service>
```

Where `<service>` is one of the service names listed [earlier](#service-names), or blank for all services. Note that you are just looking to update the source code and restart the service, `update` is a better option.

### Uninstalling[​](#uninstalling)

To uninstall the entire unonode setup, run:

```bash
unonode uninstall
```

Component development[​](#component-development)
-------------------------------------------------------------------------

The system allows for easy development and modification of the Unoparty software components. To do so, simply update code in the directories under `unonode/src/` as you see fit. These directories are mapped into the appropriate containers, overlaying (overriding) the source code that the container ships with. This, along with symlinked (develop) Python package installations makes it possible to work on code in-place, with just a service restart necessary to have the changes take effect.

Once done updating the source code for a particular service, issue the following command(s) to restart the container with the new code:

```bash
unonode restart <service>
```

Where `<service>` is one of the services mentioned [here](#service-names).

### Other Developer Notes[​](#other-developer-notes)

*   To run the `unoparty-lib` test suite, execute:

```bash
unonode exec unoparty "cd /unoparty-lib/unopartylib; py.test --verbose --skiptestbook=all --cov-config=../.coveragerc --cov-report=term-missing --cov=./"
```

*   If you are working on `unowallet`, you should browse the system using the `/src/` subdirectory (e.g. `https://myunowallet.bla/src/`). This avoids using precompiled sources. Once you are happy with your changes and ready to make them available to everyone that hits the server, run `unonode update unowallet`, which will pull the newest repo code and repackage the web assets so that the code updates are then active from `https://myunowallet.bla/`.

*   Note that when you install the federated node system, HTTPS repository URLs are used by default for all of the repositories checked out under `src` by `unonode.py`. To use SSH URIs instead, specify the `--use-ssh-uris` to the `unonode install` command.

---
sidebar_position: 3
---

# Installation

On Linux and OS X, install as a non-root sudo-er from home directory.

**Clone and check out the code**

On all OS, clone federatednode repo and enter cloned directory:

```bash
git clone https://github.com/terhnt/unonode.git
cd unonode
```

On Linux and OS X:

```bash
sudo ln -sf `pwd`/unonode.py /usr/local/bin/unonode
```

On Windows (if using Docker Quickstart Terminal, a.k.a MINGW64):

```bash
mkdir ~/bin
echo "python.exe \"`pwd`\\unonode.py\" \$*" > ~/bin/unonode
chmod +x ~/bin/unonode
```

On Windows (if using Windows Command prompt):

```bash
> C:\Windows\unonode.bat echo python.exe %CD%\unonode.py \%*
```

**Build and link the containers**

Run the following command:

```bash
unonode install <CONFIG> <BRANCH>
```

Where `<CONFIG>` is one of the following:

*   **`base`** if you want to run `unoparty-server` and `unobtaniumd` only
*   **`unoblock`** if you want to run everything in `base`, with the addition of `unoblock` and its dependencies (`mongodb` and `redis`)
*   **`full`** if you would like to run a _full federated node configuration_, which is all services on the [list above](#services)

And where `<BRANCH>` is one of the following:

*   **`master`** (stable and recommended)
*   **`develop`** (cutting edge, likely with bugs)

For example:

    # install a base configuration for the master branchunonode install base master# install a full configuration for the develop branchunonode install full develop



In some cases (slow host, limited bandwidth), you may experience a failure to install due to download timeouts which happen because of network unstability. In that case consider changing Docker's `max-concurrent-downloads` value to 1 or 2 from default 3. To do that create a custom `/etc/docker/daemon.json` daemon options file and restart Docker service.

As mentioned earlier, the install script may stop if ports used by Federated Node services are used by other applications. While it is not recommended to run Federated Node alongside production services, small changes can make the evaluation of Federated Node easier. For example you may change ports used by existing applications (or disable said applications) or run Federated Node inside of a virtual machine.

For example, the original mongodb can be reconfigured to listen on port 28018 and unoblock's mongodb can use the default port 27017. The Federated Node install script makes it possible to specify the interface used by its mongodb container (example below), but it currently does not have the ability to do this for other services or get around port conflicts.

```bash
unonode install --mongodb-interface 127.0.0.2 unoblock master
```

**Wait for initial sync**

After installation, the services will be automatically started. To check the status, issue:

```bash
unonode ps
```

If you have existing instances of Unobtanium Core (either mainnet or testnet), at this point you could stop all services listed in `unonode ps` output, change configuration files (of unoparty and unoblock, for example) and point them to your existing Unobtanium Core. Configuration files can be found in various service directories located under federatednode/config.

Once the containers are installed and running, keep in mind that it will take some time for `unobtaniumd` to download the blockchain data. Once this is done, `unoparty-server` will fully start and sync, followed by `unoblock` (if in use). At that point, the server will be usable.

You may check the sync status by tailing the appropriate service logs, e.g. for Unobtanium Core and Unoparty server on mainnet:

```bash
unonode tail unobtanium
unonode tail unoparty
```

## Access the system

Once running, the system listens on the following ports:

*   `unoparty-server`: 4120/tcp (mainnet), 14120/tcp (testnet)
*   `unoblock`: 4420/tcp (mainnet), 14420/tcp (testnet)

For `unoparty-server`, use RPC username `unobtaniumrpc` and default password `rpc`.

If `unowallet` is installed, access to the following URLs will be possible:

*   `http://<host>/` — directs to `https`
*   `https://<host>/` - main production URL (uses minified JS/CSS)
*   `https://<host>/src/` - development URL (uses un-minified JS/CSS)

Post-installation tasks[​](#post-installation-tasks)
-----------------------------------------------------------------------------

Ensure that your firewall software is enabled. If you want to provide access from external systems, you can allow through some or all of the [appropriate ports](#access-the-system). In addition, if you are running a node in a production scenario, it is recommended that you properly secure it.

You may also want to tighten ownership and permissions on all conf files in federatednode/config subdirectories, but keep in mind that you should be the only user with access to the operating system that runs Federated Node containers: Federated Node is not designed for shared OS environments.

**Ubuntu Linux**

Ubuntu Linux users can optionally run a little script that will issue a number of commands to assist with securing their systems:

```bash
cd extras/host_security
sudo ./run.py
```

Note that this script will make several modifications to your host system as it runs. Please review what it does [here](https://github.com/terhnt/unonode/blob/master/extras/host_security/run.py) before using it.

If you expect to run a busy Federated Node(unonode) that requires unoblock, you can consider making the following performance tweaks for mongodb and redis. Please do not make these changes to the host if you're not comfortable with them because they impact not only Docker but the entire OS.

*   Disable huge memory pages (for redis and mongodb): on Ubuntu 16.04 add `echo "never" > /sys/kernel/mm/transparent_hugepage/enabled` to /etc/rc.local and run `sudo systemctl enable rc-local.service`. Reboot and check with `cat /sys/kernel/mm/transparent_hugepage/enabled` (expected setting: `[never]`).
*   Edit /etc/sysctl.conf (for redis): add `net.core.somaxconn = 511` and `vm.overcommit_memory = 1` and run `sudo sysctl -p`.

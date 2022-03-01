---
sidebar_position: 5
---

# Unowallet-Specific

If you are setting up a Unowallet server, you will next need to create a `unowallet.conf.json` configuration file. Instructions for doing that are detailed in the _Unowallet Configuration File_ section later in this document. Once creating this file, open up a web browser, and go to the IP address/hostname of the server. You will then be presented to accept your self-signed SSL certificate, and after doing that, should see the Unowallet login screen.

### Getting a SSL Certificate[​](#getting-a-ssl-certificate)

By default, the system is set up to use a self-signed SSL certificate. If you are hosting your services for others, you should get your own SSL certificate from your DNS registrar so that your users don't see a certificate warning when they visit your site.

Once you have that certificate, create a nginx-compatible `.pem` file. Copy that `.pem` file to `federatednode/config/unowallet/ssl/unowallet.pem` and the cooresponding certificate `.key` file to `federatednode/config/unowallet/ssl/unowallet.key`. (Note that there will be a `unowallet.key` and `unowallet.pem` file already there, which are the default, self-signed certificates, and can be safely overridden.) Then, restart the `unowallet` service for the new certificate to take effect.

### Monitoring the Server[​](#monitoring-the-server)

To monitor the server, you can use a 3rd-party service such as [Pingdom](http://www.pingdom.com) or [StatusCake](http://statuscake.com). The federated node allows these (and any other monitoring service) to query the basic status of the Federated Node via making a HTTP GET call to one of the following URLs:

*   `/_api/` (for mainnet)
*   `/_t_api/` (for testnet)

If all services are up, a HTTP 200 response with the following data will be returned:

```json
{"unoparty-server": "OK", "unoblock_ver": "1.3.0", "unoparty-server_ver": "9.31.0", "unoblock": "OK",
"unoblock_check_elapsed": 0.0039348602294921875, "unoparty-server_last_block": {
"block_hash": "0000000000000000313c4708da5b676f453b41d566832f80809bc4cb141ab2cd", "block_index": 311234,
"block_time": 1405638212}, "local_online_users": 7, "unoparty-server_check_elapsed": 0.003687143325805664,
"unoblock_error": null, "unoparty-server_last_message_index": 91865}
```

Note the `"unoparty-server": "OK"` and `"unoblock": "OK"` items.

If all services but `unoparty-server` are up, a HTTP 500 response with `"unoparty-server": "NOT OK"`, for instance.

If `unoblock` is not working properly, `nginx` will return a HTTP 503 (Gateway unavailable) or 500 response.

If `nginx` is not working properly, either a HTTP 5xx response, or no response at all (i.e. timeout) will be returned.

### Creating a configuration file[​](#creating-a-configuration-file)

Unowallet can be configured via editing the `unowallet.conf.json` file, via issuing the following command:

```bash
sudo docker exec -it unonode_unowallet_1 vim /unowallet/unowallet.conf.json
```


This file will contain a valid JSON-formatted object, containing an a number of possible configuration properties. For example::

```json
{
  "servers": [ "unoblock1.mydomain.com", "unoblock2.mydomain.com", "unoblock3.mydomain.com" ],
  "forceTestnet": true,
  "googleAnalyticsUA": "UA-48454783-2",
  "googleAnalyticsUA-testnet": "UA-48454783-4",
  "rollbarAccessToken": "39d23b5a512f4169c98fc922f0d1b121Click to send altcoins to this UNO address ",
  "disabledFeatures": ["betting"],
  "restrictedAreas": {
    "pages/betting.html": ["US"],
    "pages/openbets.html": ["US"],
    "pages/matchedbets.html": ["US"],
    "dividend": ["US"]
  },
}
```

Here's a description of the possible fields:

**Required fields:**

*   **servers**: Unowallet should work out-of-the-box in a scenario where you have a single Unoblock Federated Node that both hosts the static site content, as well as the backend Unoblock API services. However, Unowallet can also be set up to work in MultiAPI mode, where it can query more than one server (to allow for both redundancy and load balancing). To do this, set this `servers` parameter as a list of multiple server URIs. Each URI can have a `http://` or `https://` prefix (we strongly recommend using HTTPS), and the strings must _not_ end in a slash (just leave it off). If the server hostname does not start with `http://` or `https://`, then `https://` is assumed.

If you just want to use the current server (and don't have a multi-server setup), just specify this as `[]` (empty list).\*

**Optional fields:**

*   **forceTestnet**: Set to true to always use testnet (not requiring 'testnet' in the FQDN, or the '?testnet=1' parameter in the URL.
*   **googleAnalyticsUA** / **googleAnalyticsUA-testnet**: Set to enable google analytics for mainnet/testnet. You must have a google analytics account.
*   **rollbarAccessToken**: Set to enable client-side error tracking via rollbar.com. Must have a rollbar account.
*   **disabledFeatures**: Set to a list of zero or more features to disable in the UI. Possible features are: `betting`, `dividend`, `exchange`, `leaderboard`, `portfolio`, `stats` and `history`. Normally this can just be `[]` (an empty list) to not disable anything.
*   **restrictedAreas**: Set to an object containing a specific page path as the key (or "dividend" for dividend functionality), and a list of one or more ISO 2-letter country codes as the key value, to allow for country-level blacklisting of pages/features.

Once done, save this file and make sure it exists on all servers you are hosting Unowallet static content on, and restart the `unowallet` service. Now, when you go to your Unowallet site, the server will read in this file immediately after loading the page, and set the list of backend API hosts from it automatically.

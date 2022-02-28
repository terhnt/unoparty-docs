---
sidebar_position: 1
id: unowalletfaq
---
# Unowallet FAQ

## What is Unowallet?
Unowallet is an open-source web wallet for Unobtanium (UNO) and [Unoparty](https://github.com/terhnt/) (XUP), the world’s first protocol for decentralized financial tools. It is built using Javascript, Unobtanium libraries and Unoparty software.

Unowallet handles transaction signing locally, which means your passphrase and private keys never leave your browser.

Additional security features such as m-of-n (max 3) multi-signature addresses, watch-only, and Armory addresses are also natively supported.

All trades and actions made with Unowallet use a secure automatic escrow system within the Unobtanium blockchain, which means that unlike centralized exchanges, no middleman is ever required.

## What are some of Unowallet's features?
- Supports UNO, XUP and all Unoparty assets
- Create and manage new assets (tokens) on the Unobtanium blockchain
- Distribute profits to asset holders using UNO, XUP, or any other - - Unoparty token (asset)
- Broadcast data feeds to the Unobtanium network
- Trade XUP for any Unoparty asset (peer-to-peer)
- Access P2P assets with no middleman, and no unoparty risk
- Monitor the Unoparty network statistics
- Strong privacy - no registration required; you can run your own Unowallet
- Multilingual (English, Chinese, Russian and other languages) - [become a translator](https://www.transifex.com/organization/counterparty/dashboard/counterwallet)!
- Deterministic hierarchical wallet
- Supports desktop and mobile browsers
- Client-side authentication/encryption
- Cold storage support (with Armory)
- Multi-sig support (up to 3-of-3)
- Watch-only addresses

## Where can I access it?
Unowallet (CW) hosted by the Unoparty project is available at [Unoparty.io](https://unoparty.io). However, because Unowallet source code is [open source](https://github.com/terhnt/unowallet), anyone can host and alter their own instance of Unowallet. Those instances, however, are not under control of Unoparty.io, so it is up to the user to assess reliability and trustworthiness of the host.

## What is an Asset/Token/Coin? How can I store them?
Assets (also known as tokens or coins) are user-created currencies that are stored inside the Unobtanium blockchain using Unoparty technology. Anyone can create their own.

All Unowallet addresses are regular Unobtanium addresses. You can store UNO, XUP, and user created assets on any Unowallet address. In fact, you can store any of these currencies on any regular Unobtanium address as well, provided that you have access to the private key of that address.

(Altcoins that have their own blockchain, which is seperate from the Unobtanium blockchain, are not supported.)

## I want to trade a certain asset, is it legitimate?
Assets/tokens are issued on the Unobtanium blockchain directly. This means that anyone with access to the internet is able to create and trade tokens freely without restrictions. There is no way to block Unobtanium addresses and transactions, which means that there is also no way to limit any Unoparty activity. We recommend significant due diligence and research before trading. Unowallet does not filter any assets. Please check the official website of whatever asset/token you are planning to trade, and make sure to verify that it is legitimate.

## Is Unowallet down?
Unoparty health status monitor is not yet available(TODO). Should the server you're connecting to be unresponsive or time out, you can try to directly access another of servers listed at [unoparty.io](https://unoparty.io). It is also possible that Unowallet is being updated or dealing with a blockchain reorganization.

## Unowallet is offline. Can I still access my funds?
Yes, and your orders and assets are still there*. You can mathematically generate your public and private keys using your passphrase. Since the addresses are generated on the fly using JavaScript, it is possible to do this in your own browser (even offline). You can use this tool.

- The Unoparty Distributed Exchange is actually part of the Unobtanium blockchain. This means that Unobtanium itself would have to be shut down entirely in order for it to go offline.

## How does Unowallet make profit?
It doesn't! Unowallet development is a public service to the Unoparty and Unobtanium community. If you would like to contribute, you can click the donate button within Unowallet itself. Or you can [fork the code](https://github.com/terhnt/unowallet) and contribute that way.

## Can I try Unowallet on testnet?
Yes, you can test Unowallet by using a testnet instance located at [testnet.unoparty.io](https://unoparty.io?testnet=1). Once you log on, get some testnet Unoparty tokens from the faucet as explained on the welcome page.

## Can I use Unowallet with Armory?
Potentially in the future.

Add an address in an offline armory wallet, [here's how](https://bitcoinarmory.com/about/using-our-wallet/) to your Unowallet, and do something with the address (like send some XUP from that address), which will produce the armory unsigned transaction text. Copy it to a USB key, take it to your offline computer running Armory (which has the private keys), sign it on that computer via the Armory GUI, and then broadcast the signed transaction back in Unowallet.

This will make use of assets owned in this address very secure... Basically Armory will act as cold storage of Unoparty assets, with almost the usability of a hot wallet.

## I logged in and my address is different, and I have no balance! Help!
In rare circumstances an address can disappear from the view. You can add another address from the Unowallet user interface and in all likelihood the address will reappear. Otherwise you can use this tool to obtain the private key for the missing address and then use the import feature in Unowallet to import its assets to another address in your Unowallet.

## I sent UNO to Unowallet, why doesn't it show up?
It either was not sent, or it has not arrived. To check for UNO transactions, use a Unobtanium blockchain explorer (e.g. blockchain.info) and to check for XUP and other Unoparty-based tokens, use xchain.io or coindaddy.io.

## Why do I need small amounts of Unobtanium to do things in Unowallet?
Unoparty builds directly on top of the Unobtanium network, and every Unoparty transaction is a Unobtanium transaction as well. This means that Unoparty transactions are the same as as Unobtanium transactions, with some information attached.

Because of this, Unoparty transactions must pay a small UNO fee to the Unobtanium miners for each transaction sent. Beyond being a sign of our commitment to the health of the Unobtanium network, this allows Unoparty transactions to be given a high priority and be confirmed quickly.

If speed of confirmation is not as important to you as the fee amount paid, note that it is possible to have lower fees in Unoparty, especially involving bulk sends. This functionality will also be coming to Unowallet as well.

## Does Unowallet support two-factor authentication?
Currently, no. But you can create multi-signature addresses to better protect your assets.

## What else do I need to know?
All encryption is handled client-side. Neither your passphrase nor any of your private information ever leaves your browser. This also means that there is no password recovery, so make sure you do not lose your passphrase.

Because Unowallet does not store your credentials, it has no access to your information. However it is important to use a reputable Unowallet provider.

Because of the US government regulations, betting functionality is limited to non-US-based client IP addresses by default. This is not a limitation of the protocol itself. Please ensure that the use-case you are aiming for is legal within your jurisdiction, and seek professional legal advice when starting a project.

## Can I run my own Unowallet server?
Yes, although that requires a full unobtanium node and some technical knowledge. Please refer to [this page](https:/TODO.com/advanced/federated-node/getting-started) for details on how to setup a Unoparty Federated Node. If you are starting from scratch, it may take several days to download and index the unobtanium blockchain.

## I want to translate Unowallet to my language
Translations are hosted at [Transifex](https://www.transifex.com/organization/counterparty/dashboard/counterwallet). Open an account (or login with Github) and contribute as a translator or reviewer. We appreciate any contributions.

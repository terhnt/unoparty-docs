---
sidebar_position: 5
---

# Unoblock API

For an overview of `unoblock`, see [here](/docs/platform_architecture/).

`unoblock` release information is available from [this link](https://github.com/terhnt/unoblock/releases).

**Warning:** _This API documentation is INCOMPLETE. It contains errors, omissions, etc., and could change drastically at any time._

Connecting to the API[​](#connecting-to-the-api)
-------------------------------------------------------------------------

By default, `unoblock` will listen on port `4420` for API requests. API requests are made via a HTTP POST request to `/api/`, with JSON-encoded data passed as the POST body. For more information on JSON RPC, please see the [JSON RPC specification](http://json-rpc.org/wiki/specification).

Terms & Conventions[​](#terms--conventions)
--------------------------------------------------------------------

The API calls documented are categorized based on the `unoblock` module/plug-in they appear in. For a list of the various modules with a description of each one, see [the unoblock modules document](/docs/develop/unoblock/modules).

**Return Types**

*   `[ ]` indicates a list of one or more items, the structure will be detailed inside the brackets if regular.
*   `{ }` indicates a hash/object with the keys indicated
*   `'id'` means a key named id.
*   `<id>` means the key is based on some parameter. This will usually be based on the inputs to the function (for example a search parameter)
*   `('key')` means an optional key that may or may not be present in the output. Usually configured by a parameter.

**wallet IDs**

An individual Unowallet user needs a way to identify themselves to `unoblock` for things like storing and retrieving their wallet preferences data, and more.

For this purpose, we define the concept of a wallet ID, which is simply the user's Unowallet 12-word password, double-hashed with SHA256 and converted to base 64.

core API[​](#core-api)
-----------------------------------------------

These API methods are part of the core `unoblock` code, and not part of a plugin module.

### get\_messagefeed\_messages\_by\_index[​](#get_messagefeed_messages_by_index)

**get\_messagefeed\_messages\_by\_index(message\_indexes)**

Alias for unopartyd get\_messages\_by\_index

*   **param list message\_indexs:** Message IDs to fetch
*   **return:** A list of messages

### get\_chain\_block\_height[​](#get_chain_block_height)

**get\_chain\_block\_height()**

_deprecated: 1.5_ Use `get_chain_address_info`

*   **return:** The height of the block chain

### get\_insight\_block\_info[​](#get_insight_block_info)

**get\_insight\_block\_info(block\_hash)**

Get block info for a specific block hash from the backend (insight, unobtaniumd, etc).

### get\_chain\_address\_info[​](#get_chain_address_info)

**get\_chain\_address\_info(addresses, with\_uxtos=True, with\_last\_txn\_hashes=4)**

Get info for one or more addresses

*   **parameter list addresses:** Address to query
*   **parameter boolean with\_uxtos:** Include Unspent
*   **parameter int with\_last\_txn\_hashes:** Include n recent confirmed transactions
*   **return:** Address info
*   **rtype:** \[{'addr', 'info',('uxto'),('last\_txns'),('block\_height')}\]

### get\_chain\_txns\_status[​](#get_chain_txns_status)

**get\_chain\_txns\_status**

*   **param list txn\_hashes:** A list of one or more txn hashes
*   **return:** Transaction information
*   **rtype:** \[{'tx\_hash', 'blockhash', 'confirmations', 'blocktime'}\]

### get\_last\_n\_messages[​](#get_last_n_messages)

**get\_last\_n\_messages(count=100)**

Return latest messaages

*   **param int count:** Number of messages to return. Must be < 1000 if specified.
*   **return:** A list of messages
*   **rtype:** \[{'raw\_tx\_type', ... other fields vary per tx type}\]

### get\_pubkey\_for\_address[​](#get_pubkey_for_address)

**get\_pubkey\_for\_address(address)**

Returns None if the address has made 0 transactions (as we wouldn't be able to get the public key)

*   **returns:** String or None

### get\_script\_pub\_key[​](#get_script_pub_key)

**get\_script\_pub\_key(tx\_hash, vout\_index)**

**broadcast\_tx(signed\_tx\_hex)**

### get\_raw\_transactions[​](#get_raw_transactions)

**get\_raw\_transactions(address, start\_ts=None, end\_ts=None, limit=500):**

Gets raw transactions for a particular address

*   **param address:** A single address string
*   **param start\_ts:** The starting date & time. Should be a unix epoch object. If passed as None, defaults to 60 days before the end\_date
*   **param end\_ts:** The ending date & time. Should be a unix epoch object. If passed as None, defaults to the current date & time
*   **param limit:** the maximum number of transactions to return; defaults to ten thousand
*   **return:** Returns the data, ordered from newest txn to oldest. If any limit is applied, it will cut back from the oldest results
*   **rtype:** {id: {status, tx\_hash, \_divisible, \_tx\_index, block\_index, \_category, destination, tx\_index, \_block\_time, source, asset, \_command, quantity}}

####proxy\_to\_unopartyd

**proxy\_to\_unopartyd(method='', params={})**

*   **param method:** Method name to call in unopartyd.
*   **param params:** Array of function parameters.
*   **returns:** The method response from unopartyd

Relays a request to the unopartyd server, with the given method and params, and returns the result. See the API documentation for available methods.

**NOTE:** This method may be depreciated/removed in the future.

assets Module API[​](#assets-module-api)
-----------------------------------------------------------------

### get\_normalized\_balances[​](#get_normalized_balances)

**get\_normalized\_balances(addresses)**

This call augments unoparty's get\_balances with a normalized\_quantity field. It also will include any owned assets for an address, even if their balance is zero. NOTE: Does not retrieve BTC balance. Use get\_address\_info for that.

*   **param addresses:** The addresses to retrieve balances on
*   **return:** Balances are returned as a list of dicts, with each dict having the following structure:
    *   address: The address with the asset balance
    *   asset: The asset (e.g. "XUP")
    *   owner: Set to True if this address is the owner of the asset
    *   quantity: The quantity in satoshi
    *   normalized\_quantity: The quantity, as a human readable number

### get\_escrowed\_balances[​](#get_escrowed_balances)

**get\_escrowed\_balances(addresses)**

Gets a list of address balances that are escrowed away by the protocol (either due to an open trade or bet).

*   **param list addresses:** List of addresses to check
*   **return:** An array of assets held in escrow
*   **rtype:** `{<address of escrowee>:{<asset>:<amount>}}`

### get\_assets\_info[​](#get_assets_info)

**get\_assets\_info(assetsList)**

Returns information on the specified assets.

*   **param assetsList**: A list of one or more asset names.
*   **return:** A list of dicts, one dict for each asset provided in `assetsList`:
    *   asset: The name of the asset (e.g. "XUP")
    *   owner: The address of the current owner of the asset
    *   divisible: True if the asset is divisible, False otherwise
    *   locked: True if the asset is locked, False otherwise
    *   supply: The current supply of the asset
    *   description: The asset's current description
    *   issuer: The issuing address of the asset

### get\_base\_quote\_asset[​](#get_base_quote_asset)

**get\_base\_quote\_asset(asset1, asset2)**

Given two arbitrary assets, returns the base asset and the quote asset.

_deprecated: 1.5_ Use `get_market_info/get_market_details`

*   **param asset1:** An asset
*   **param asset2:** An asset
*   **return:** Array
*   **rtype:** `{'base_asset', 'quote_asset', 'pair_name'}`

### get\_owned\_assets[​](#get_owned_assets)

**get\_owned\_assets(addresses)**

Returns the assets owned by the addresses

*   **param addresses:** An array of addresses.
*   **return:** Information on owned assets
*   **rtype:** \[{'\_change\_type', 'locked', 'description', '\_at\_block', 'divisible', 'total\_issued\_normalized', '\_at\_block\_time', 'asset', 'total\_issued', 'owner', history:\[\]\]

### get\_asset\_pair\_market\_info[​](#get_asset_pair_market_info)

**get\_asset\_pair\_market\_info(asset1=None, asset2=None, limit=50):**

_deprecated: 1.5_ Use `get_market_details/get_market_info`

Given two arbitrary assets, returns the base asset and the quote asset.

*   **param asset1:** First asset name
*   **param asset2:** Second asset name
*   **param limit:** Max # of records to return
*   **return:** Market info for the given pair
*   **rtype:** {'24h\_vol\_in\_btc', 'open\_orders\_count', 'lowest\_ask', 'base\_asset', 'completed\_trades\_count', '24h\_pct\_change', 'vol\_quote', 'highest\_bid', '24h\_vol\_in\_xcp', 'vol\_base', 'last\_updated', 'quote\_asset'}

### get\_asset\_extended\_info[​](#get_asset_extended_info)

**get\_asset\_extended\_info(asset)**

Returns extended asset data (i.e. that published via an external .json file, as documented [here](/docs/enhanced_asset_info/)), if available, for a specific asset.

*   **param asset:** The name of the asset (e.g. "XUP")
*   **return:** Information on the asset or False if no extended info exists. Contains the data as documented in the extended asset info JSON format, among other fields.
*   **rtype:** {}

### get\_asset\_history[​](#get_asset_history)

**get\_asset\_history(asset, reverse=False**

Returns a list of changes for the specified asset, from its inception to the current time.

*   **param asset:** The asset to retrieve a history on
*   **param reverse:** By default, the history is returned in the order of oldest to newest. Set this parameter to True to return items in the order of newest to oldest.
*   **return:** Changes are returned as a list of dicts, with each dict having the following format:
    *   type: One of 'created', 'issued\_more', 'changed\_description', 'locked', 'transferred', 'called\_back'
    *   'at\_block': The block number this change took effect
    *   'at\_block\_time': The block time this change took effect
    *   IF type = 'created': Has the following fields, as specified when the asset was initially created:
        *   owner, description, divisible, locked, total\_issued, total\_issued\_normalized
    *   IF type = 'issued\_more':
        *   'additional': The additional quantity issued (raw)
        *   'additional\_normalized': The additional quantity issued (normalized)
        *   'total\_issued': The total issuance after this change (raw)
        *   'total\_issued\_normalized': The total issuance after this change (normalized)
    *   IF type = 'changed\_description':
        *   'prev\_description': The old description
        *   'new\_description': The new description
    *   IF type = 'locked': NO EXTRA FIELDS
    *   IF type = 'transferred':
        *   'prev\_owner': The address the asset was transferred from
        *   'new\_owner': The address the asset was transferred to
    *   IF type = 'called\_back':
        *   'percentage': The percentage of the asset called back (between 0 and 100)

### get\_balance\_history[​](#get_balance_history)

**get\_balance\_history(asset, addresses, normalize=True, start\_ts=None, end\_ts=None)**

Retrieves the ordered balance history for a given address (or list of addresses) and asset pair, within the specified date range

*   **param normalize:** If set to True, return quantities that (if the asset is divisible) have been divided by 100M (satoshi).
*   **return:** A list of tuples, with the first entry of each tuple being the block time (epoch TS), and the second being the new balance at that block time.
*   **rtype:** `[<block time>, <balance>]`

dex Module[​](#dex-module)
---------------------------------------------------

### get\_market\_price\_summary[​](#get_market_price_summary)

**get\_market\_price\_summary(asset1, asset2, with\_last\_trades=0)**

_deprecated: 1.5_ Use `get_market_price_history`

*   **param asset1:** An asset
*   **param asset2:** An asset
*   **param with\_last\_trades:** Include last trades
*   **return:** Array
*   **rtype:** {'quote\_asset', 'base\_asset', 'market\_price',('last\_trades')}

### get\_market\_cap\_history[​](#get_market_cap_history)

**get\_market\_cap\_history(start\_ts=None, end\_ts=None)**

*   **param start\_ts:** Unix timestamp (defaults to 30 days before the end timestamp)
*   **param end\_ts:** Unix timestamp (defaults to current timestamp)
*   **return:** Array
*   **rtype:** `{'base_currency':[{'data':[ts,market_cap], 'name'}]}`

### get\_market\_info[​](#get_market_info)

**get\_market\_info(assets)**

*   **param list assets:** Assets to check
*   **return:** Array
*   **rtype:** {'24h\_hlc\_in\_btc', 'extended\_description', 'extended\_pgpsig', 'aggregated\_price\_as\_btc', 'price\_in\_btc', '24h\_summary':{'vol', 'count'}, 'market\_cap\_in\_btc', 'asset', 'price\_as\_xcp', '7d\_history\_in\_btc':\[\[ts, price\]\], '24h\_vol\_price\_change\_in\_xcp', 'price\_in\_xcp', 'extended\_website', '24h\_vol\_price\_change\_in\_btc', 'aggregated\_price\_as\_xcp', 'market\_cap\_in\_xcp', '7d\_history\_in\_xcp':\[\[ts, price\]\], 'aggregated\_price\_in\_btc', 'aggregated\_price\_in\_xcp', 'price\_as\_btc', 'total\_supply', '24h\_ohlc\_xcp', 'extended\_image'}

### get\_market\_info\_leaderboard[​](#get_market_info_leaderboard)

**get\_market\_info\_leaderboard(limit=100)**

*   **param limit:** Number of results to return
*   **return:** Array
*   **rtype:** {base\_currency:\[{ '24h\_ohlc\_in\_btc', 'total\_supply', 'aggregated\_price\_in\_btc', 'price\_in\_btc', '24h\_vol\_price\_change\_in\_xcp', 'aggregated\_price\_in\_xcp', '24h\_summary: {'vol', 'count'}, 'price\_in\_xcp', 'price\_as\_btc', 'market\_cap\_in\_btc', '24h\_ohlc\_in\_xcp', '24h\_vol\_price\_change\_in\_btc', 'aggregated\_price\_as\_xcp', 'market\_cap\_in\_xcp', 'asset', 'price\_as\_xcp', '7d\_history\_in\_xcp', '7d\_history\_in\_btc', 'aggregated\_price\_as\_btc'}\]}

### get\_market\_price\_history[​](#get_market_price_history)

**get\_market\_price\_history(asset1, asset2, start\_ts=None, end\_ts=None, as\_dict=False)**

Return block-by-block aggregated market history data for the specified asset pair, within the specified date range.

*   **param asset1:** An asset
*   **param asset2:** An asset .
*   **param start\_ts:** Unix timestamp (defaults to 30 days before the end timestamp)
*   **param end\_ts:** Unix timestamp (defaults to current timestamp)
*   **param as\_dict:** Return as list of list or list of dicts
*   **return:** List of lists or dicts
*   **rtype:** \[{'block\_time', 'block\_index', 'open', 'high', 'low', 'close', 'vol', 'count'}\]

### get\_trade\_history[​](#get_trade_history)

**get\_trade\_history(asset1=None, asset2=None, start\_ts=None, end\_ts=None, limit=50)**

Gets last N of trades within a specific date range (normally, for a specified asset pair, but this can be left blank to get any/all trades).

*   **param asset1:** An asset
*   **param asset2:** An asset
*   **param start\_ts:** Unix timestamp
*   **param end\_ts:** Unix timestamp
*   **param limit:** Number of trades to return
*   **return:** Array of length `n`
*   **rtype:** \[{'base\_quantity', 'message\_index', 'order\_match\_tx1\_index', 'base\_asset', 'quote\_quantity', 'order\_match\_tx0\_address', 'unit\_price', 'base\_quantity\_normalized', 'block\_index', 'block\_time', 'quote\_quantity\_normalized', 'unit\_price\_inverse', 'order\_match\_tx0\_index', 'order\_match\_id', 'order\_match\_tx1\_address', 'quote\_asset'}\]

### get\_order\_book\_simple[​](#get_order_book_simple)

**get\_order\_book\_simple(asset1, asset2, min\_pct\_fee\_provided=None, max\_pct\_fee\_required=None)**

_deprecated: 1.5_ Use unoparty-server's `get_orders`

Easier to call version when you want all orders involving the two assets.

*   **param asset1:** Asset
*   **param asset2:** Asset
*   **param pct\_fee\_provided:** A minimum fee level in satoshis
*   **param pct\_fee\_required:** A minimum fee level in satoshis
*   **return:** Object
*   **rtype:** {'base\_bid\_book':\[{'count', 'depth', 'unit\_price', 'quantity'}\], 'bid\_depth', 'raw\_orders:\[{ 'status', 'tx\_hash', 'give\_quantity', '\_is\_online', 'fee\_provided', 'source', 'give\_asset', 'expire\_index', 'fee\_required\_remaining', 'block\_index', 'tx\_index', 'give\_remaining', 'block\_time', 'get\_asset', 'expiration', 'fee\_required', 'get\_remaining', 'get\_quantity', 'fee\_provided\_remaining'}\], 'bid\_ask\_median', 'quote\_asset', 'base\_asset', 'ask\_depth', 'bid\_ask\_spread', 'base\_ask\_book':\[{'count', 'depth', 'unit\_price', 'quantity'}\], 'id'}

### get\_order\_book\_buysell[​](#get_order_book_buysell)

**get\_order\_book\_buysell(buy\_asset, sell\_asset, pct\_fee\_provided=None, pct\_fee\_required=None)**

_deprecated: 1.5_ Use unoparty-server's `get_orders`

*   **param buy\_asset:** Asset
*   **param sell\_asset:** Asset
*   **param pct\_fee\_provided:** A minimum fee level in satoshis
*   **param pct\_fee\_required:** A minimum fee level in satoshis
*   **return:** Object
*   **rtype:** {'base\_bid\_book':\[{'count', 'depth', 'unit\_price', 'quantity'}\], 'bid\_depth', 'raw\_orders:\[{ 'status', 'tx\_hash', 'give\_quantity', '\_is\_online', 'fee\_provided', 'source', 'give\_asset', 'expire\_index', 'fee\_required\_remaining', 'block\_index', 'tx\_index', 'give\_remaining', 'block\_time', 'get\_asset', 'expiration', 'fee\_required', 'get\_remaining', 'get\_quantity', 'fee\_provided\_remaining'}\], 'bid\_ask\_median', 'quote\_asset', 'base\_asset', 'ask\_depth', 'bid\_ask\_spread', 'base\_ask\_book':\[{'count', 'depth', 'unit\_price', 'quantity'}\], 'id'}

### get\_users\_pairs[​](#get_users_pairs)

**get\_users\_pairs(addresses=\[\], max\_pairs=12)**

Return asset pairs held by the addresses.

*   **rtype:** \[{'base\_asset', 'progression', 'trend', 'price\_24h', 'price', 'quote\_asset'}\]

### get\_market\_orders[​](#get_market_orders)

**get\_market\_orders(asset1, asset2, addresses=\[\], min\_fee\_provided=0.95, max\_fee\_required=0.95)**

Returns orders for the search parameters

*   **rtype:** \[{'completion', 'tx\_hash', 'fee\_provided', 'block\_index', 'price', 'tx\_index', 'source', 'amount', 'block\_time', 'total', 'type'}\]

### get\_market\_trades[​](#get_market_trades)

**get\_market\_trades(asset1, asset2, addresses=\[\], limit=100)**

Returns completed trades for the search parameters

*   **rtype:** \[{'status', 'match\_id', 'countersource', 'block\_index', 'price', 'source', 'amount', 'block\_time', 'total', 'type'}\]

### get\_markets\_list[​](#get_markets_list)

**get\_markets\_list()**

Returns available markets

*   **rtype:** \[{'market\_cap', 'base\_asset', 'progression', 'supply', 'trend', 'price\_24h', 'price', ' quote\_divisibility', 'pos', 'volume', 'with\_image', 'base\_divisibility', 'quote\_asset'}\]

### get\_market\_details[​](#get_market_details)

**get\_market\_details(asset1, asset2, min\_fee\_provided=0.95, max\_fee\_required=0.95)**

Return detailed information on a market.

*   **rtype:** {'base\_asset','progression','supply', 'trend','price\_24h', 'price','sell\_orders': \[{'fee\_required', 'amount', 'total', 'type', 'price'}\],'quote\_asset\_divisible','buy\_orders': \[{'amount', 'total', 'type', 'price', 'fee\_provided'}\], 'last\_trades': \[{'status', 'match\_id', 'countersource', 'source', 'price', 'block\_index', 'amount', 'block\_time', 'total', 'type'}\],'base\_asset\_infos','base\_asset\_divisible','quote\_asset'}

betting Module[​](#betting-module)
-----------------------------------------------------------

### get\_bets[​](#get_bets)

**get\_bets(bet\_type, feed\_address, deadline, target\_value=None, leverage=5040)**

Returns bets with non-zero remaining counterwager for the specified search terms.

*   **param bet\_type:** 0, 1, 2 or 3
*   **param feed\_address:** An address
*   **param deadline:** Unix timestamp
*   **rtype:** \[{'tx\_hash' 'feed\_address', 'wager\_quantity', 'leverage', 'source', 'expire\_index', 'status', 'tx\_index', 'block\_index', 'counterwager\_quantity', 'deadline', 'expiration', 'fee\_fraction\_int', 'bet\_type', 'counterwager\_remaining', 'wager\_remaining', 'target\_value' }\]

### get\_user\_bets[​](#get_user_bets)

**get\_user\_bets(addresses=\[\], status="open")**

*   **param addresses:** List of addresses
*   **param status:** "open", "filled","expired","cancelled","dropped", or "invalid"
*   **rtype:** \[{'tx\_hash' 'feed\_address', 'wager\_quantity', 'leverage', 'source', 'expire\_index', 'status', 'tx\_index', 'block\_index', 'counterwager\_quantity', 'deadline', 'expiration', 'fee\_fraction\_int', 'bet\_type', 'counterwager\_remaining', 'wager\_remaining', 'target\_value' }\]

### get\_feed[​](#get_feed)

**get\_feed(address\_or\_url='')**

*   **param address\_or\_url:** Feed URL or Unobtanium Address
*   **rtype:** {'broadcasts':\[{'status', 'tx\_hash', 'locked', 'timestamp', 'source', 'text', 'tx\_index', 'value', 'block\_index', 'fee\_fraction\_int'}\], 'counters':{'bets':\[\]}

### get\_feeds\_by\_source[​](#get_feeds_by_source)

**get\_feeds\_by\_source(addresses=\[\])**

*   **param addresses:** Address list
*   **rtype:** `{<address>:{'errors':[], 'locked', 'info_url', 'info_data':{}, 'fetch_info_retry', 'source', 'info_status', 'fee_fraction_int', 'last_broadcast':{}}}`

### parse\_base64\_feed[​](#parse_base64_feed)

**parse\_base64\_feed(base64\_feed):**

Takes a base64-encoded feed and decodes it.

*   **rtype:** \[{'tx\_hash' 'feed\_address', 'wager\_quantity', 'leverage', 'source', 'expire\_index', 'status', 'tx\_index', 'block\_index', 'counterwager\_quantity', 'deadline', 'expiration', 'fee\_fraction\_int', 'bet\_type', 'counterwager\_remaining', 'wager\_remaining', 'target\_value' }\]

unowallet Module[​](#unowallet-module)
-----------------------------------------------------------------------

### is\_ready[​](#is_ready)

**is\_ready()**

Used by the client to check if the server is alive, caught up, and ready to accept requests. If the server is NOT caught up, a 525 error will be returned actually before hitting this point. Thus, if we actually return data from this function, it should always be true. (may change this behaviour later)

*   **rtype:** Boolean

### get\_reflected\_host\_info[​](#get_reflected_host_info)

**get\_reflected\_host\_info()**

Allows the requesting host to get some info about itself, such as its IP. Used for troubleshooting.

*   **return:** Client host info
*   **rtype:** {'ip', 'cookie', 'country'}

### get\_wallet\_stats[​](#get_wallet_stats)

**get\_wallet\_stats(start\_ts=None, end\_ts=None):**

If timestamps omitted, queries the last 360 days.

*   **param start\_ts:** Unix timestamp
*   **param end\_ts:** Unix timestamp
*   **return:** Wallet information
*   **rtype:** {'wallet\_stats':\[id: {'data': \[{}\], 'name'}\], 'num\_wallets\_testnet', 'num\_wallets\_mainnet', 'num\_wallets\_unknown'}

### get\_preferences[​](#get_preferences)

**get\_preferences(wallet\_id, for\_login=False, network=None)**

Gets stored wallet preferences

*   **param network:** only required if for\_login is specified. One of: 'mainnet' or 'testnet'
*   **returns:** A wallet preferences object:
    *   **num\_addresses\_used** (_integer_): The number of addresses utilized in the user's wallet (this determines how many addresses we will deterministally generate when the user logs in).
    *   **address\_aliases** (_list_): A list of zero or objects, with each object having an `address` string property, being the Unobtanium base56 address, and an `alias` string property, being the textual alias (i.e. nickname) for this address. Using aliases helps make the wallet more user-friendly.
*   **rtype:** Boolean

### store\_preferences[​](#store_preferences)

**store\_preferences(wallet\_id, preferences)**

Stores the preferences for a given wallet ID.

*   **param string wallet\_id:** The wallet ID to store the preferences for.
*   **param object preferences:** A wallet preferences object (see above)
*   **return:** `true` if the storage was successful, `false` otherwise.

### create\_armory\_utx[​](#create_armory_utx)

**create\_armory\_utx(unsigned\_tx\_hex, public\_key\_hex)**

Used to create an offline Armory transaction for signing in Armory.

*   **returns:** The signed tx hash
*   **rtype:** String

### convert\_armory\_signedtx\_to\_raw\_hex[​](#convert_armory_signedtx_to_raw_hex)

**convert\_armory\_signedtx\_to\_raw\_hex(signed\_tx\_ascii)**

Used to convert a signed armory transaction to a hex-encoded raw transaction suitable for broadcasting on the Unobtanium network.

*   **returns:** The raw hash as hex
*   **rtype:** String

### create\_support\_case[​](#create_support_case)

**create\_support\_case(name, from\_email, problem, screenshot=None, addtl\_info='')**

create an email with the information received

*   **param screenshot:** The base64 text of the screenshot itself, prefixed with data=image/png
*   **param addtl\_info:** A JSON-encoded string of a dict with additional information to include in the support request

unowallet\_iofeeds Module[​](#unowallet_iofeeds-module)
----------------------------------------------------------------------------------------

### get\_num\_users\_online[​](#get_num_users_online)

**get\_num\_users\_online()**

*   **return:** The current number of users attached to the server's chat feed :rtype: Int

_deprecated: 1.6.3_

### is\_chat\_handle\_in\_use[​](#is_chat_handle_in_use)

**is\_chat\_handle\_in\_use(handle)**

_deprecated: 1.6.3_

*   **rtype:** Boolean

### get\_chat\_handle[​](#get_chat_handle)

**get\_chat\_handle(wallet\_id)**

*   **rtype:** {'handle', 'is\_op', 'last\_updated', 'banned\_until'}

_deprecated: 1.6.3_

### store\_chat\_handle[​](#store_chat_handle)

**store\_chat\_handle(wallet\_id, handle)**

_deprecated: 1.6.3_

### get\_chat\_history[​](#get_chat_history)

**get\_chat\_history(start\_ts=None, end\_ts=None, handle=None, limit=1000)**

_deprecated: 1.6.3_

### is\_wallet\_online[​](#is_wallet_online)

**is\_wallet\_online(wallet\_id)**

*   **rtype:** Boolean

transaction\_stats Module[​](#transaction_stats-module)
--------------------------------------------------------------------------------

### get\_transaction\_stats[​](#get_transaction_stats)

**get\_transaction\_stats(start\_ts=None, end\_ts=None)**

This function returns the number of transactions in each 24 hour clock within the given time range, or the last 360 days if no time range is given.

*   **param start\_ts:** Unix timestamp
*   **param end\_ts:** Unix timestamp
*   **return:** The number of transactions in each time interval.
*   **rtype:** \[\[`unix timestamp *in milliseconds* (e.g. 1000 * a typical unix timestamp)`, `transaction count`\]\]

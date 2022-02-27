---
sidebar_position: 3
---

# Command-line (CLI) Guide
The following examples are abridged for parsimony (meaning: actions are normally preceded by ```unoparty-client```, i.e. the ```burn``` command would be called with ```unoparty-client --testnet burn```).

```unoparty-server``` should always be running in the background (or another console). All other commands will fail if the index of the last block in the database is less than that of the last block seen by Unobtanium Core.

## Burn
_Destroy UNO to earn XUP, during an initial period of time_

The ```burn``` command is currently usable only on testnet because the burn period for mainnet hasn't been released yet (TBA).

- --source = the source address
- --quantity = quantity of UNO to be burned
- --fee = the exact UNO fee to be paid to miners

```burn --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity=0.5```

## Send
_Create and broadcast a ```send``` message_

- --source = the source address
- --destination = the destination address
- --quantity = the quantity of ASSET to send
- --asset = the ASSET of which you would like to send QUANTITY
- --fee = the exact UNO fee to be paid to miners
```
- send --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity=3 \
- --asset=BBBC --destination=n3BrDB6zDiEPWEE6wLxywFb4Yp9ZY5fHM7
```

## Dispenser
_Create and broadcast a ```dispenser``` message_

- --source = the source address
- --give_quantity = the quantity of ASSET to send on each dispense
- --escrow_quantity = the quantity of ASSET to escrow for the dispenser
- --mainchainrate = the quantity of UNO to receive for each give_quantity sent
- --asset = the ASSET of which you would like to dispense
- --status = the status of the dispenser (0 open, 10 close)

```
dispenser --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --give_quantity=3 \
--escrow_quantity=3000 --asset=BBBC --mainchainrate=0.01 --status=10
```

## Order
_Create and broadcast an ```order``` message_

- --source = the source address
- --get-quantity = the quantity of GET_ASSET that the source would like to receive
- --get-asset = the asset that you would like to buy
- --give-quantity = the quantity of GIVE_ASSET that the source is willing to give
- --give-asset = the asset that the source would like to sell
- --expiration = the number of blocks for which the order should be valid
- --fee-fraction-required = the miners’ fee required for an order to match
- --fee = the exact UNO fee to be paid to miners

To make a trade that involves UNO, the ```order``` function requires an extra parameter, and a second step (```btcpay```) is needed. If [address_1] is trading [give_quantity_1] of UNO in exchange for [get_quantity_1] of [asset].

```
order --source=[address_1] --give-asset=UNO --give-quantity=[give_quantity_1] \
--get-asset=[asset] --get-quantity=[get_quantity_1] --fee-provided=[fee_provided] \
--expiration=[expiration_1]
```

If [address_2] is trading [give_quantity_2] of [asset] for [get_quantity_2] of UNO:

```
order --source=[address_2] --give-asset=[asset] --give-quantity=[give_quantity_2] \
--get-asset=UNO --get-quantity=[get_quantity_2] --fee-required=[fee_required] \
--expiration=[expiration_2]
```

[asset] is debited immediately from [address_2] and is held in the Unoparty protocol's escrow. [address_1] then must complete the trade using btcpay before 10 blocks have passed (or the lesser of the two expiration periods has passed, if the latter is less than 10 blocks from the time of match). After the payment transaction has received enough confirmations, the asset will be automatically released to the UNO seller by the Unoparty protocol.

The command for a ```btcpay``` is:

```
btcpay --source=[source_address] -–order-match-id=[txhash1]+[txhash2]


order --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --get-quantity=10 \
--get-asset=UNO --give-quantity=20 --give-asset=XUP --expiration=10 \
--fee_required=0.0002


order --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --get-quantity=10 \
--get-asset=BBBC --give-quantity=20 --give-asset=UNO --expiration=10 \
--fee_provided=0.0002
```

For orders that do not involve UNO buy or sell, BTCpay is not required. For Sally to receive [get_quantity_1] of [get_asset_1] in exchange for [give_quantity_1] of [give_asset_1], the command is the following:
```
order --source=[sallys_address] --give-asset=[give_asset_1] \
--give-quantity=[give_quantity_1] --get-asset=[get_asset_1] \
--get-quantity=[get_quantity_1] --expiration=expiration_1
In order for Alice to receive [get_quantity_2] of Sally's [give_asset_1] in exchange for [give_quantity_2] of [get_asset_2], the command is:

order --source=[alices_address] --give-asset=[give_asset_2] \
--give-quantity=[give_quantity_2] --get-asset=[get_asset_2] \
--get-quantity=[get_quantity_2] --expiration=expiration_2
For example, Alice wants to sell 20 BBBC for 10 XUP within (expiration) 144 unobtanium blocks (approximately 144 * 10 min = 24 hours):

order --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --get-quantity=10 \
--get-asset=XUP --give-quantity=20 --give-asset=BBBC --expiration=144
Note that orders can be partially matched.
```

## BTCPay
**NOTE:** We never renamed BTCpay to UNOpay - it is not used to send BTC.

_Create and broadcast a ```BTCpay``` message, to settle an Order Match for which you owe_

BTCPay has been disabled in Unowallet, but remains available in the CLI (and API).

- --source = the source address
- --order-match-id = the underscore-separated concatenation of the hashes of the two transactions which compose the order match
- --fee = the exact UNO fee to be paid to miners

```
btcpay --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf \
--order-match-id=092f15d36786136c4d868c3335_6ec3c9b5a0c77de54ed0e96a8dbdd8af160c23
```

Order Match ID can be obtained with the ```pending``` command. The source address of UNO sell has 20 blocks (or approximately 200 minutes) after his offer has been matched) to send UNO to fund his side of transaction, but should wait for the order-matching transaction to receive several confirmations because UNO cannot be escrowed by the Unoparty protocol.

Use the ```pending``` command to display own DEx order matches that require BTCpay and make sure you use the correct ```source``` address to fund each pending BTCpay.

## Issuance
_Issue a new asset, issue more of an existing asset or transfer the ownership of an asset._

- --source = the source address
- --transfer-destination = for transfer of ownership of asset issuance rights.
- --quantity = the quantity of ASSET to be issued
- --asset = the name of the asset to be issued (if it’s available)
- --divisible = the asset is divisible (must agree with previous issuances; omitted means indivisible)
- --description = a description of the asset (set to ‘LOCK’ to lock against further issuances with non‐zero quantities). It can be up to 41 bytes with opreturn and up to 52 with pubkeyhash (see Optional Arguments further below).
- --fee = the exact fee to be paid to miners

Assets can be divisible or indivisible (the smallest unit is 1). Issuance and transfer cannot happen in the same transaction.

```issuance --source=[source] --quantity=[quantity] --asset=[asset]```

```
issuance --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity=100 \
--asset='BBBQ' --divisible
```

## Destroy
_Destroy a quantity of a Unoparty asset_

- --source = the source address
- --asset = the ASSET of which you would like to destroy QUANTITY
- --quantity = the quantity of ASSET to destroy
- --tag = tag
- --fee = the exact UNO fee to be paid to miners
This command is not yet implemented (enabled).

## Broadcast
_Broadcast textual and numerical information to the network._

- --source = the source address
- --text = the textual part of the broadcast (set to ‘LOCK’ to lock feed)
- --value = numerical value of the broadcast
- --fee-fraction = the fraction of bets on this feed that go to its operator
- --fee = the exact fee to be paid to miners

```
broadcast --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --text="Unobtanium price feed" \
--value=825.22
```
**Note:** _for some users unoparty-cli has trouble parsing spaces in the ```--text``` argument. One workaround is to add an additional set of quotes. For example, ```--text='"Unobtanium price feed"'```. This may not work on Windows due to Python/Windows issues unrelated to Unoparty. Another situation where double quotes may be required on Windows is filtering (e.g. ```--filter "source" "=" "Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf"```)._

## Bet (Equal/Not Equal)
_Offer to make a bet on the value of a feed

- --source = the source address
- --feed-address = the address which publishes the feed to bet on
- --bet-type = choices: {Equal,NotEqual}
- --deadline = the date and time at which the bet should be decided/settled
- --wager = the quantity of XUP to wager
- --counterwager = the minimum quantity of XUP to be wagered by the user to bet against you, if he were to accept the whole thing
- --target-value = target value for Equal/NotEqual bet
- --leverage = leverage, as a fraction of 5040
- --expiration = the number of blocks for which the bet should be valid
- --fee = the exact UNO fee to be paid to miners

Bet on Super Bowl Feed. Denver vs. Seattle. Feed value of 1 means Seattle Wins. Feed value of 2 means Denver Wins. This command places a 1 XUP bet on the Super Bowl Feed for Seattle to win, paying out 2 to 1. The bet will expire in 100 blocks and the settlement value of the bet is based on the first feed update after the deadline timestamp of February 3, 2014 1:39 PM US Eastern Standard Time (UTC-0500).

```
bet --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf \
--feed-address=n3BrDB6zDiEPWEE6wLxywFb4Yp9ZY5fH --bet-type=Equal \
--deadline=2014-02-03T13:39:00-0500 --wager=1 --counterwager=2 \
--target-value=1 --expiration=100
```

## Cancel
_Cancel an open order or bet you created_

- --source = the source address
- --offer-hash = the transaction hash of the order or bet
- --fee = the exact UNO fee to be paid to miners

```
cancel --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf \
--offer-hash=092f15d36786136c4d868c33356ec3c9b5a0c77de54ed0e96a8dbdd8af160c23
```

## Dividend
_Pay dividends to the holders of an asset (in proportion to their stake in it)_

- --source = the source address
- --quantity-per-unit = the quantity of XUP to be paid per whole unit held of ASSET
- --asset = the asset to which pay dividends
- --dividend-asset = asset in which to pay the dividends
- --fee = the exact UNO fee to be paid to miners

To pay dividends in UNO, you should, for now, just use a regular Unobtanium client, coupled with the output from unoparty-cli asset ASSET, which will list all of the shareholders (and their holdings) of ASSET.

```
dividend --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity-per-share=1 \
--asset=MULTIPOOLSTOCK
```

## Asset
_The asset action displays the basic properties of a given ```asset```._

```asset=[asset]```

To lock an asset, the command is:

```issuance --source=[source] --asset=[asset] --description="LOCK"```

## Balances
_The balances action displays the balances of an address._

```balances --address=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf```

## Wallet
_The wallet action lists the addresses in your backend wallet along with their balances in all assets._

## Pending
_The pending action lists pending order matches awaiting payment from you._

## Getrows
_The getrows action gets rows from a Unoparty table._

- --table = table name
- --filter = filters to get specific rows
- --filter-op = operator uses to combine filters
- --order-by = field used to order results
- --order-dir = direction used to order results
- --start-block = return only rows with block_index greater than start-block
- --end-block = return only rows with block_index lower than end-block
- --status = return only rows with the specified status
- --limit = number of rows to return
- --offset = number of rows to skip
```
getrows --table balances --filter 'address' '=' 'muQjaj46wghHprjSjpgU7D55JxKyK5dJtZ'

getrows --table balances --filter 'address' '=' 'muQjaj46wghHprjSjpgU7D55JxKyK5dJtZ' \
--filter 'asset' '=' 'BBBQ' --filter-op OR

```
Windows users may need to make changes to handle console quirks. On Windows 10, the double quotes work fine: ```--filter "address" "=" "muQjaj46wghHprjSjpgU7D55JxKyK5dJtZ"```.

Note that balances (quantities) for divisible assets such as XUP are stored and retrieved in "satoshi"-like units. Hence, an address with 4 XUP and 4 INDIVISIBLE may show their respective balances as 400,000,000 and 4 (which would be the case if INDIVISIBLE wasn't a divisible asset).

## GetInfo
_The ```getinfo``` action gets the current state of the server._

## Get_TX_Info
_Display information about an unsigned raw transaction_

The ```get_tx_info``` command displays information about an unsigned raw transaction. Some destinations (e.g. P2SH addresses) are not supported by this command.

```get_tx_info=[tx_hex]```

## Input and Output
- Quantities of divisible assets are written to eight decimal places.
- Quantities of indivisible assets are written as integers.
- All other quantities, i.e. prices, odds, leverages, feed values and target values, fee multipliers, are represented internally as fractions, but printed to four decimal places.
- As note above, "direct" access to tables via the getrows action outputs "raw" values (amounts) using internal representation

## Optional arguments
This list contains some optional arguments for unoparty-client. A complete list for client and server is available in online help.

- -h, --help = show help message and exit
- -V, --version = show version
- --config-file = the location of the configuration file
- --testnet = use Unobtanium testnet
- --json-output = display result in JSON format
- --unconfirmed = allow the spending of unconfirmed transaction outputs
- --unsigned = print out unsigned hex of transaction; do not sign or broadcast
- --encoding = the default is auto, which lets unoparty-lib determine the encoding (opreturn, pubkeyhash, or multisig); certain transactions may require this argument with a non-default value

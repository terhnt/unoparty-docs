"use strict";(self.webpackChunkunoparty_docs=self.webpackChunkunoparty_docs||[]).push([[171],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7425:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:3},l="Command-line (CLI) Guide",u={unversionedId:"advanced/cli",id:"advanced/cli",title:"Command-line (CLI) Guide",description:"The following examples are abridged for parsimony (meaning: actions are normally preceded by `unoparty-client`, i.e. the `burn` command would be called with `unoparty-client --testnet burn`).",source:"@site/docs/advanced/cli.md",sourceDirName:"advanced",slug:"/advanced/cli",permalink:"/unoparty-docs/docs/advanced/cli",editUrl:"https://github.com/terhnt/unoparty-docs/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/cli.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"advanced",previous:{title:"Protocol Specification",permalink:"/unoparty-docs/docs/advanced/protocol"}},d={},p=[{value:"Burn",id:"burn",level:2},{value:"Send",id:"send",level:2},{value:"Dispenser",id:"dispenser",level:2},{value:"Order",id:"order",level:2},{value:"BTCPay",id:"btcpay",level:2},{value:"Issuance",id:"issuance",level:2},{value:"Destroy",id:"destroy",level:2},{value:"Broadcast",id:"broadcast",level:2},{value:"Bet (Equal/Not Equal)",id:"bet-equalnot-equal",level:2},{value:"Cancel",id:"cancel",level:2},{value:"Dividend",id:"dividend",level:2},{value:"Asset",id:"asset",level:2},{value:"Balances",id:"balances",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Pending",id:"pending",level:2},{value:"Getrows",id:"getrows",level:2},{value:"GetInfo",id:"getinfo",level:2},{value:"Get_TX_Info",id:"get_tx_info",level:2},{value:"Input and Output",id:"input-and-output",level:2},{value:"Optional arguments",id:"optional-arguments",level:2}],c={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-line-cli-guide"},"Command-line (CLI) Guide"),(0,i.kt)("p",null,"The following examples are abridged for parsimony (meaning: actions are normally preceded by ",(0,i.kt)("inlineCode",{parentName:"p"},"unoparty-client"),", i.e. the ",(0,i.kt)("inlineCode",{parentName:"p"},"burn")," command would be called with ",(0,i.kt)("inlineCode",{parentName:"p"},"unoparty-client --testnet burn"),")."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"unoparty-server")," should always be running in the background (or another console). All other commands will fail if the index of the last block in the database is less than that of the last block seen by Unobtanium Core."),(0,i.kt)("h2",{id:"burn"},"Burn"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Destroy UNO to earn XUP, during an initial period of time")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"burn")," command is currently usable only on testnet because the burn period for mainnet hasn't been released yet (TBA)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--quantity = quantity of UNO to be burned"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"burn --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity=0.5")),(0,i.kt)("h2",{id:"send"},"Send"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Create and broadcast a ",(0,i.kt)("inlineCode",{parentName:"em"},"send")," message")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--destination = the destination address"),(0,i.kt)("li",{parentName:"ul"},"--quantity = the quantity of ASSET to send"),(0,i.kt)("li",{parentName:"ul"},"--asset = the ASSET of which you would like to send QUANTITY"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- send --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity=3 \\\n- --asset=BBBC --destination=n3BrDB6zDiEPWEE6wLxywFb4Yp9ZY5fHM7\n")),(0,i.kt)("h2",{id:"dispenser"},"Dispenser"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Create and broadcast a ",(0,i.kt)("inlineCode",{parentName:"em"},"dispenser")," message")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--give_quantity = the quantity of ASSET to send on each dispense"),(0,i.kt)("li",{parentName:"ul"},"--escrow_quantity = the quantity of ASSET to escrow for the dispenser"),(0,i.kt)("li",{parentName:"ul"},"--mainchainrate = the quantity of UNO to receive for each give_quantity sent"),(0,i.kt)("li",{parentName:"ul"},"--asset = the ASSET of which you would like to dispense"),(0,i.kt)("li",{parentName:"ul"},"--status = the status of the dispenser (0 open, 10 close)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dispenser --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --give_quantity=3 \\\n--escrow_quantity=3000 --asset=BBBC --mainchainrate=0.01 --status=10\n")),(0,i.kt)("h2",{id:"order"},"Order"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Create and broadcast an ",(0,i.kt)("inlineCode",{parentName:"em"},"order")," message")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--get-quantity = the quantity of GET_ASSET that the source would like to receive"),(0,i.kt)("li",{parentName:"ul"},"--get-asset = the asset that you would like to buy"),(0,i.kt)("li",{parentName:"ul"},"--give-quantity = the quantity of GIVE_ASSET that the source is willing to give"),(0,i.kt)("li",{parentName:"ul"},"--give-asset = the asset that the source would like to sell"),(0,i.kt)("li",{parentName:"ul"},"--expiration = the number of blocks for which the order should be valid"),(0,i.kt)("li",{parentName:"ul"},"--fee-fraction-required = the miners\u2019 fee required for an order to match"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("p",null,"To make a trade that involves UNO, the ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," function requires an extra parameter, and a second step (",(0,i.kt)("inlineCode",{parentName:"p"},"btcpay"),") is needed. If ","[address_1]"," is trading ","[give_quantity_1]"," of UNO in exchange for ","[get_quantity_1]"," of ","[asset]","."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"order --source=[address_1] --give-asset=UNO --give-quantity=[give_quantity_1] \\\n--get-asset=[asset] --get-quantity=[get_quantity_1] --fee-provided=[fee_provided] \\\n--expiration=[expiration_1]\n")),(0,i.kt)("p",null,"If ","[address_2]"," is trading ","[give_quantity_2]"," of ","[asset]"," for ","[get_quantity_2]"," of UNO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"order --source=[address_2] --give-asset=[asset] --give-quantity=[give_quantity_2] \\\n--get-asset=UNO --get-quantity=[get_quantity_2] --fee-required=[fee_required] \\\n--expiration=[expiration_2]\n")),(0,i.kt)("p",null,"[asset]"," is debited immediately from ","[address_2]"," and is held in the Unoparty protocol's escrow. ","[address_1]"," then must complete the trade using btcpay before 10 blocks have passed (or the lesser of the two expiration periods has passed, if the latter is less than 10 blocks from the time of match). After the payment transaction has received enough confirmations, the asset will be automatically released to the UNO seller by the Unoparty protocol."),(0,i.kt)("p",null,"The command for a ",(0,i.kt)("inlineCode",{parentName:"p"},"btcpay")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"btcpay --source=[source_address] -\u2013order-match-id=[txhash1]+[txhash2]\n\n\norder --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --get-quantity=10 \\\n--get-asset=UNO --give-quantity=20 --give-asset=XUP --expiration=10 \\\n--fee_required=0.0002\n\n\norder --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --get-quantity=10 \\\n--get-asset=BBBC --give-quantity=20 --give-asset=UNO --expiration=10 \\\n--fee_provided=0.0002\n")),(0,i.kt)("p",null,"For orders that do not involve UNO buy or sell, BTCpay is not required. For Sally to receive ","[get_quantity_1]"," of ","[get_asset_1]"," in exchange for ","[give_quantity_1]"," of ","[give_asset_1]",", the command is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"order --source=[sallys_address] --give-asset=[give_asset_1] \\\n--give-quantity=[give_quantity_1] --get-asset=[get_asset_1] \\\n--get-quantity=[get_quantity_1] --expiration=expiration_1\nIn order for Alice to receive [get_quantity_2] of Sally's [give_asset_1] in exchange for [give_quantity_2] of [get_asset_2], the command is:\n\norder --source=[alices_address] --give-asset=[give_asset_2] \\\n--give-quantity=[give_quantity_2] --get-asset=[get_asset_2] \\\n--get-quantity=[get_quantity_2] --expiration=expiration_2\nFor example, Alice wants to sell 20 BBBC for 10 XUP within (expiration) 144 unobtanium blocks (approximately 144 * 10 min = 24 hours):\n\norder --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --get-quantity=10 \\\n--get-asset=XUP --give-quantity=20 --give-asset=BBBC --expiration=144\nNote that orders can be partially matched.\n")),(0,i.kt)("h2",{id:"btcpay"},"BTCPay"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," We never renamed BTCpay to UNOpay - it is not used to send BTC."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Create and broadcast a ",(0,i.kt)("inlineCode",{parentName:"em"},"BTCpay")," message, to settle an Order Match for which you owe")),(0,i.kt)("p",null,"BTCPay has been disabled in Unowallet, but remains available in the CLI (and API)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--order-match-id = the underscore-separated concatenation of the hashes of the two transactions which compose the order match"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"btcpay --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf \\\n--order-match-id=092f15d36786136c4d868c3335_6ec3c9b5a0c77de54ed0e96a8dbdd8af160c23\n")),(0,i.kt)("p",null,"Order Match ID can be obtained with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," command. The source address of UNO sell has 20 blocks (or approximately 200 minutes) after his offer has been matched) to send UNO to fund his side of transaction, but should wait for the order-matching transaction to receive several confirmations because UNO cannot be escrowed by the Unoparty protocol."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," command to display own DEx order matches that require BTCpay and make sure you use the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," address to fund each pending BTCpay."),(0,i.kt)("h2",{id:"issuance"},"Issuance"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Issue a new asset, issue more of an existing asset or transfer the ownership of an asset.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--transfer-destination = for transfer of ownership of asset issuance rights."),(0,i.kt)("li",{parentName:"ul"},"--quantity = the quantity of ASSET to be issued"),(0,i.kt)("li",{parentName:"ul"},"--asset = the name of the asset to be issued (if it\u2019s available)"),(0,i.kt)("li",{parentName:"ul"},"--divisible = the asset is divisible (must agree with previous issuances; omitted means indivisible)"),(0,i.kt)("li",{parentName:"ul"},"--description = a description of the asset (set to \u2018LOCK\u2019 to lock against further issuances with non\u2010zero quantities). It can be up to 41 bytes with opreturn and up to 52 with pubkeyhash (see Optional Arguments further below)."),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact fee to be paid to miners")),(0,i.kt)("p",null,"Assets can be divisible or indivisible (the smallest unit is 1). Issuance and transfer cannot happen in the same transaction."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"issuance --source=[source] --quantity=[quantity] --asset=[asset]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"issuance --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity=100 \\\n--asset='BBBQ' --divisible\n")),(0,i.kt)("h2",{id:"destroy"},"Destroy"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Destroy a quantity of a Unoparty asset")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--asset = the ASSET of which you would like to destroy QUANTITY"),(0,i.kt)("li",{parentName:"ul"},"--quantity = the quantity of ASSET to destroy"),(0,i.kt)("li",{parentName:"ul"},"--tag = tag"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners\nThis command is not yet implemented (enabled).")),(0,i.kt)("h2",{id:"broadcast"},"Broadcast"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Broadcast textual and numerical information to the network.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--text = the textual part of the broadcast (set to \u2018LOCK\u2019 to lock feed)"),(0,i.kt)("li",{parentName:"ul"},"--value = numerical value of the broadcast"),(0,i.kt)("li",{parentName:"ul"},"--fee-fraction = the fraction of bets on this feed that go to its operator"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact fee to be paid to miners")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'broadcast --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --text="Unobtanium price feed" \\\n--value=825.22\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("em",{parentName:"p"},"for some users unoparty-cli has trouble parsing spaces in the ",(0,i.kt)("inlineCode",{parentName:"em"},"--text")," argument. One workaround is to add an additional set of quotes. For example, ",(0,i.kt)("inlineCode",{parentName:"em"},"--text='\"Unobtanium price feed\"'"),". This may not work on Windows due to Python/Windows issues unrelated to Unoparty. Another situation where double quotes may be required on Windows is filtering (e.g. ",(0,i.kt)("inlineCode",{parentName:"em"},'--filter "source" "=" "Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf"'),").")),(0,i.kt)("h2",{id:"bet-equalnot-equal"},"Bet (Equal/Not Equal)"),(0,i.kt)("p",null,"_Offer to make a bet on the value of a feed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--feed-address = the address which publishes the feed to bet on"),(0,i.kt)("li",{parentName:"ul"},"--bet-type = choices: {Equal,NotEqual}"),(0,i.kt)("li",{parentName:"ul"},"--deadline = the date and time at which the bet should be decided/settled"),(0,i.kt)("li",{parentName:"ul"},"--wager = the quantity of XUP to wager"),(0,i.kt)("li",{parentName:"ul"},"--counterwager = the minimum quantity of XUP to be wagered by the user to bet against you, if he were to accept the whole thing"),(0,i.kt)("li",{parentName:"ul"},"--target-value = target value for Equal/NotEqual bet"),(0,i.kt)("li",{parentName:"ul"},"--leverage = leverage, as a fraction of 5040"),(0,i.kt)("li",{parentName:"ul"},"--expiration = the number of blocks for which the bet should be valid"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("p",null,"Bet on Super Bowl Feed. Denver vs. Seattle. Feed value of 1 means Seattle Wins. Feed value of 2 means Denver Wins. This command places a 1 XUP bet on the Super Bowl Feed for Seattle to win, paying out 2 to 1. The bet will expire in 100 blocks and the settlement value of the bet is based on the first feed update after the deadline timestamp of February 3, 2014 1:39 PM US Eastern Standard Time (UTC-0500)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bet --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf \\\n--feed-address=n3BrDB6zDiEPWEE6wLxywFb4Yp9ZY5fH --bet-type=Equal \\\n--deadline=2014-02-03T13:39:00-0500 --wager=1 --counterwager=2 \\\n--target-value=1 --expiration=100\n")),(0,i.kt)("h2",{id:"cancel"},"Cancel"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cancel an open order or bet you created")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--offer-hash = the transaction hash of the order or bet"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cancel --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf \\\n--offer-hash=092f15d36786136c4d868c33356ec3c9b5a0c77de54ed0e96a8dbdd8af160c23\n")),(0,i.kt)("h2",{id:"dividend"},"Dividend"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pay dividends to the holders of an asset (in proportion to their stake in it)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--source = the source address"),(0,i.kt)("li",{parentName:"ul"},"--quantity-per-unit = the quantity of XUP to be paid per whole unit held of ASSET"),(0,i.kt)("li",{parentName:"ul"},"--asset = the asset to which pay dividends"),(0,i.kt)("li",{parentName:"ul"},"--dividend-asset = asset in which to pay the dividends"),(0,i.kt)("li",{parentName:"ul"},"--fee = the exact UNO fee to be paid to miners")),(0,i.kt)("p",null,"To pay dividends in UNO, you should, for now, just use a regular Unobtanium client, coupled with the output from unoparty-cli asset ASSET, which will list all of the shareholders (and their holdings) of ASSET."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dividend --source=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf --quantity-per-share=1 \\\n--asset=MULTIPOOLSTOCK\n")),(0,i.kt)("h2",{id:"asset"},"Asset"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The asset action displays the basic properties of a given ",(0,i.kt)("inlineCode",{parentName:"em"},"asset"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"asset=[asset]")),(0,i.kt)("p",null,"To lock an asset, the command is:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'issuance --source=[source] --asset=[asset] --description="LOCK"')),(0,i.kt)("h2",{id:"balances"},"Balances"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The balances action displays the balances of an address.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"balances --address=Ub2xXLYiUphddYYuEKSfr4hHGjNYhjG5Nf")),(0,i.kt)("h2",{id:"wallet"},"Wallet"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The wallet action lists the addresses in your backend wallet along with their balances in all assets.")),(0,i.kt)("h2",{id:"pending"},"Pending"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The pending action lists pending order matches awaiting payment from you.")),(0,i.kt)("h2",{id:"getrows"},"Getrows"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The getrows action gets rows from a Unoparty table.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--table = table name"),(0,i.kt)("li",{parentName:"ul"},"--filter = filters to get specific rows"),(0,i.kt)("li",{parentName:"ul"},"--filter-op = operator uses to combine filters"),(0,i.kt)("li",{parentName:"ul"},"--order-by = field used to order results"),(0,i.kt)("li",{parentName:"ul"},"--order-dir = direction used to order results"),(0,i.kt)("li",{parentName:"ul"},"--start-block = return only rows with block_index greater than start-block"),(0,i.kt)("li",{parentName:"ul"},"--end-block = return only rows with block_index lower than end-block"),(0,i.kt)("li",{parentName:"ul"},"--status = return only rows with the specified status"),(0,i.kt)("li",{parentName:"ul"},"--limit = number of rows to return"),(0,i.kt)("li",{parentName:"ul"},"--offset = number of rows to skip")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"getrows --table balances --filter 'address' '=' 'muQjaj46wghHprjSjpgU7D55JxKyK5dJtZ'\n\ngetrows --table balances --filter 'address' '=' 'muQjaj46wghHprjSjpgU7D55JxKyK5dJtZ' \\\n--filter 'asset' '=' 'BBBQ' --filter-op OR\n\n")),(0,i.kt)("p",null,"Windows users may need to make changes to handle console quirks. On Windows 10, the double quotes work fine: ",(0,i.kt)("inlineCode",{parentName:"p"},'--filter "address" "=" "muQjaj46wghHprjSjpgU7D55JxKyK5dJtZ"'),"."),(0,i.kt)("p",null,'Note that balances (quantities) for divisible assets such as XUP are stored and retrieved in "satoshi"-like units. Hence, an address with 4 XUP and 4 INDIVISIBLE may show their respective balances as 400,000,000 and 4 (which would be the case if INDIVISIBLE wasn\'t a divisible asset).'),(0,i.kt)("h2",{id:"getinfo"},"GetInfo"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The ",(0,i.kt)("inlineCode",{parentName:"em"},"getinfo")," action gets the current state of the server.")),(0,i.kt)("h2",{id:"get_tx_info"},"Get_TX_Info"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Display information about an unsigned raw transaction")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"get_tx_info")," command displays information about an unsigned raw transaction. Some destinations (e.g. P2SH addresses) are not supported by this command."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get_tx_info=[tx_hex]")),(0,i.kt)("h2",{id:"input-and-output"},"Input and Output"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quantities of divisible assets are written to eight decimal places."),(0,i.kt)("li",{parentName:"ul"},"Quantities of indivisible assets are written as integers."),(0,i.kt)("li",{parentName:"ul"},"All other quantities, i.e. prices, odds, leverages, feed values and target values, fee multipliers, are represented internally as fractions, but printed to four decimal places."),(0,i.kt)("li",{parentName:"ul"},'As note above, "direct" access to tables via the getrows action outputs "raw" values (amounts) using internal representation')),(0,i.kt)("h2",{id:"optional-arguments"},"Optional arguments"),(0,i.kt)("p",null,"This list contains some optional arguments for unoparty-client. A complete list for client and server is available in online help."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-h, --help = show help message and exit"),(0,i.kt)("li",{parentName:"ul"},"-V, --version = show version"),(0,i.kt)("li",{parentName:"ul"},"--config-file = the location of the configuration file"),(0,i.kt)("li",{parentName:"ul"},"--testnet = use Unobtanium testnet"),(0,i.kt)("li",{parentName:"ul"},"--json-output = display result in JSON format"),(0,i.kt)("li",{parentName:"ul"},"--unconfirmed = allow the spending of unconfirmed transaction outputs"),(0,i.kt)("li",{parentName:"ul"},"--unsigned = print out unsigned hex of transaction; do not sign or broadcast"),(0,i.kt)("li",{parentName:"ul"},"--encoding = the default is auto, which lets unoparty-lib determine the encoding (opreturn, pubkeyhash, or multisig); certain transactions may require this argument with a non-default value")))}h.isMDXComponent=!0}}]);
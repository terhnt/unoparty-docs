"use strict";(self.webpackChunkunoparty_docs=self.webpackChunkunoparty_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"intro":[{"type":"category","label":"What is Unoparty?","items":[{"type":"link","label":"A Unobtanium Protocol","href":"/unoparty-docs/docs/what-is-unoparty/A-Unobtanium-Protocol","docId":"what-is-unoparty/A-Unobtanium-Protocol"},{"type":"link","label":"An incencentivization token","href":"/unoparty-docs/docs/what-is-unoparty/An-incencentivization-token","docId":"what-is-unoparty/An-incencentivization-token"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Assets token/NFTS","items":[{"type":"link","label":"Enhanced Asset Info","href":"/unoparty-docs/docs/assets/enhanced-asset","docId":"assets/enhanced-asset"},{"type":"link","label":"Enhanced Feed Info","href":"/unoparty-docs/docs/assets/enhanced-feed","docId":"assets/enhanced-feed"},{"type":"link","label":"Some use cases","href":"/unoparty-docs/docs/assets/use-cases","docId":"assets/use-cases"}],"collapsed":true,"collapsible":true},{"type":"category","label":"FAQ","items":[{"type":"link","label":"Frequently Asked Questions","href":"/unoparty-docs/docs/faq/general","docId":"faq/general"}],"collapsed":true,"collapsible":true}],"wallets":[{"type":"category","label":"Unowallet","items":[{"type":"link","label":"Unowallet FAQ","href":"/unoparty-docs/docs/wallets/unowalletfaq","docId":"wallets/unowalletfaq"},{"type":"link","label":"Unowallet notes","href":"/unoparty-docs/docs/wallets/unowallet-notes","docId":"wallets/unowallet-notes"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Unowallet Tutorial","items":[{"type":"link","label":"Getting Started","href":"/unoparty-docs/docs/wallets/tuts/getting-started","docId":"wallets/tuts/getting-started"}],"collapsed":true,"collapsible":true}],"advanced":[{"type":"category","label":"Architecture/Protocol","items":[{"type":"link","label":"Platform Architecture","href":"/unoparty-docs/docs/advanced/architecture","docId":"advanced/architecture"},{"type":"link","label":"Protocol Specification","href":"/unoparty-docs/docs/advanced/protocol","docId":"advanced/protocol"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Command-Line","items":[{"type":"link","label":"Command-line (CLI) Guide","href":"/unoparty-docs/docs/advanced/cli","docId":"advanced/cli"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Advanced Usage","items":[{"type":"link","label":"How to send Unoparty assets in bulk","href":"/unoparty-docs/docs/advanced/sending-bulk","docId":"advanced/sending-bulk"}],"collapsed":true,"collapsible":true}],"Develop":[{"type":"category","label":"Unoparty API","items":[{"type":"link","label":"Overview","href":"/unoparty-docs/docs/develop/api/overview","docId":"develop/api/overview"},{"type":"link","label":"Technical Specification","href":"/unoparty-docs/docs/develop/api","docId":"develop/api"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Unoblock","items":[{"type":"link","label":"Unoblock API","href":"/unoparty-docs/docs/develop/unoblock/api","docId":"develop/unoblock/api"},{"type":"link","label":"Writing unoblock Plug-in Modules","href":"/unoparty-docs/docs/develop/unoblock/modules","docId":"develop/unoblock/modules"}],"collapsed":true,"collapsible":true}]},"docs":{"advanced/architecture":{"id":"advanced/architecture","title":"Platform Architecture","description":"In the figure below you can see how all Unoparty platform components interact with each other.","sidebar":"advanced"},"advanced/cli":{"id":"advanced/cli","title":"Command-line (CLI) Guide","description":"The following examples are abridged for parsimony (meaning: actions are normally preceded by `unoparty-client`, i.e. the `burn` command would be called with `unoparty-client --testnet burn`).","sidebar":"advanced"},"advanced/protocol":{"id":"advanced/protocol","title":"Protocol Specification","description":"Summary","sidebar":"advanced"},"advanced/sending-bulk":{"id":"advanced/sending-bulk","title":"How to send Unoparty assets in bulk","description":"Below is a script for constructing, signing and broadcasting a large number of sends efficiently. It assumes that the source addresses are in a (temporarily) unlocked Unobtanium Core wallet, to which a running instance of unopartyd is connected.","sidebar":"advanced"},"assets/enhanced-asset":{"id":"assets/enhanced-asset","title":"Enhanced Asset Info","description":"When initially setting or changing your asset\'s (token\'s) description, you can enable enhanced functionality (such as an token image and a longer description) by providing a URL to a specially formatted .json file (e.g. http://www.mydomain.com/foo.json) as the description. This allows the token owner to provide enhanced information to the token\'s holders, and enhances the user experience for these holders for wallet implementations that support this spec.","sidebar":"intro"},"assets/enhanced-feed":{"id":"assets/enhanced-feed","title":"Enhanced Feed Info","description":"Feed providers can initialize a feed via a broadcast where the broadcast text field contains a URL to a specially formatted .json file (e.g. http://www.mydomain.com/foo.json). This allows the feed operator to provide enhanced information to their users.","sidebar":"intro"},"assets/unoparty-assets":{"id":"assets/unoparty-assets","title":"Understanding assets on Unoparty","description":"With Unoparty, users can create their own assets (also known as \\"tokens\\", \\"coins\\" or \\"currencies\\") inside the Unobtanium blockchain. These are seperate from Unobtanium the currency itself, but exist entirely inside ordinary Unobtanium transactions. Tokens can be received, stored, and sent from any Unobtanium address to any other. They can also be placed in cold storage. Unlike Colored Coins, Unoparty tokens are not tied to the UNO balance of any given address. This means that sending/receiving Unobtaniums has no effect on the balance of tokens."},"assets/use-cases":{"id":"assets/use-cases","title":"Some use cases","description":"Below are just a few of the many uses of assets, feel free to propose new uses if you find them.","sidebar":"intro"},"develop/api":{"id":"develop/api","title":"Technical Specification","description":"Read API Function Reference","sidebar":"Develop"},"develop/api/overview":{"id":"develop/api/overview","title":"Overview","description":"{","sidebar":"Develop"},"develop/main":{"id":"develop/main","title":"TODO","description":""},"develop/unoblock/api":{"id":"develop/unoblock/api","title":"Unoblock API","description":"For an overview of unoblock, see here.","sidebar":"Develop"},"develop/unoblock/modules":{"id":"develop/unoblock/modules","title":"Writing unoblock Plug-in Modules","description":"unoblock is a modular application that allows developers to turn on or off various bits of its out-of-the-box functionality, as well as extending it with new functionality, through its plug-in architecture.","sidebar":"Develop"},"faq/general":{"id":"faq/general","title":"Frequently Asked Questions","description":"What is XUP?","sidebar":"intro"},"intro":{"id":"intro","title":"Unoparty Intro","description":"Let\'s discover Unoparty in less than 5 minutes."},"wallets/tuts/getting-started":{"id":"wallets/tuts/getting-started","title":"Getting Started","description":"Unowallet is an open-source web wallet for Unobtanium and Unoparty. It uses regular Unobtanium addresses, and lets you store Unobtanium, XUP, and user-created tokens without having to trust a server. What makes it different from many other web wallets, is that the only possible way to access a wallet is by having access to the passphrase. In Unowallet, none of your private information ever leaves your PC.","sidebar":"wallets"},"wallets/unowallet-notes":{"id":"wallets/unowallet-notes","title":"Unowallet notes","description":"More on multiple Unowallet servers","sidebar":"wallets"},"wallets/unowalletfaq":{"id":"wallets/unowalletfaq","title":"Unowallet FAQ","description":"What is Unowallet?","sidebar":"wallets"},"what-is-unoparty/A-Unobtanium-Protocol":{"id":"what-is-unoparty/A-Unobtanium-Protocol","title":"A Unobtanium Protocol","description":"How does Unoparty work?","sidebar":"intro"},"what-is-unoparty/An-incencentivization-token":{"id":"what-is-unoparty/An-incencentivization-token","title":"An incencentivization token","description":"XUP is the native token of Unoparty. It is a technical necessity for adding advanced features to Unoparty, which by nature require a protocol aware currency. Unobtanium can only be aware of UNO, while Unoparty can be aware of both UNO and XUP itself. This makes it possible to escrow funds, trade in a decentralized manner, and harness the full potential of programmable money.","sidebar":"intro"}}}')}}]);
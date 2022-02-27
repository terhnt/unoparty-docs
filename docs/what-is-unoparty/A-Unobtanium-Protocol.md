---
sidebar_position: 1
---

# A Unobtanium Protocol

### How does Unoparty work?

Unoparty embeds data into regular Unobtanium transactions. To a regular Unobtanium client, these transactions look like normal Unobtanium transactions, with one party sending another party a very small amount of Unobtanium. A Unoparty node (which runs the Unobtanium client along [with the Unoparty client software](https://github.com/terhnt/unoparty-lib)) will recognize and interpret the data in these Unobtanium transactions based on specific rules. From this, it constructs its own ledger of Unoparty transactions that it has seen on the Unobtanium network.

To better help understand this, [here](https://chainz.cryptoid.info/uno/tx.dws?2067485.htm) is a record of a Unoparty transaction where one address is sending 48 TEST tokens to another address. [Here](https://chainz.cryptoid.info/uno/tx.dws?2067485.htm) is what this transaction looks like to a chainz.cryptoid.info, a popular Unobtanium block explorer. You can see that while it is indeed a Unobtanium transaction, the amount of Unobtanium moved is small. In reality, the UNO spent is just enough to compensate the Unobtanium miners to include the transaction in a block. Essentially, the user that sent the transaction is paying the Unobtanium network to record and secure this embedded Unoparty data.

### So Unoparty is not its own Blockchain, but "rides on top of" Unobtanium?

Yes. Another way to think of it is similar to a [Russian nesting doll](https://en.wikipedia.org/wiki/Matryoshka_doll), where the bigger doll would be the Unobtanium transaction, and the next doll (inside of it) would be a Unoparty transaction.

This embedding method is technically known as **embedded consensus**.

### Is Unoparty "polluting" the Unobtanium blockchain, then?

No. 99%+ of Unoparty transactions utilize a data encoding method called ```OP_RETURN```, which is fully "prunable", meaning that the data may be safely discarded by Unobtanium nodes which wish to do so. For the remaining 1% of transactions, an different encoding method is utilized that produces fully "spendable" outputs. These outputs do not stick around in the critical list of unspent outputs (the "UTXO set").

On top of this, every Unoparty transaction pays a fair fee to the network for inclusion.

### How do the Unoparty nodes stay in sync? What's to stop one node from disagreeing with another?
As all Unoparty nodes run the same code, and all receive the same Unobtanium transaction data, the ledgers across each node match exactly. Unoparty nodes are not like Unobtanium nodes in that they don't communicate with each other: they simply connect to the Unobtanium software and download transactions from it, decoding each one as they go along. In this way, the immense security and computing power behind Unobtanium is leveraged as the "transport network" for Unoparty data.

Given the above, there is no "Unoparty peer to peer network" like there is a "Unobtanium peer-to-peer network": Unoparty-aware nodes comprise a subset of the Unobtanium full nodes in existance.

### What about Sidechains?
Unoparty is optimal for mainly higher value transactions and greatly benefits from the security of the main chain. However, if sidechains are ever released, there is no reason that they couldn't be made to work with Unoparty. This is the beauty of Unoparty's embedded consensus technology -- it can work with just about any blockchain out there, including sidechain designs.

### What kind of addresses does Unoparty use?
Exactly the same Unobtanium addresses we all know and love. As such, Unoparty tokens (such as XUP, RARE, CRYPTOPUNX and more) may be sent to any Unobtanium address.

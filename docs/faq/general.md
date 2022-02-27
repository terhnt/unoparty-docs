---
sidebar_position: 1
---

# Frequently Asked Questions

## What is XUP?
XUP is the native token of Unoparty. It is a technical necessity for adding advanced features to Unoparty, which by nature require a protocol aware currency. Unobtanium can only be aware of BTC, while Unoparty can be aware of both BTC and XUP itself. This makes it possible to escrow funds, trade in a decentralized manner, and harness the full potential of programmable money.

To learn more about XUP, see about XUP.

## Can I secure my XUP and tokens in cold storage?
Yes. You can make a regular Unobtanium paper wallet and store them there. Later, you can sweep the funds into a Unoparty wallet, like Unowallet.

Unowallet also supports the use of Offline Armory. More info on that is here.

## Is a 51% attack against Unoparty possible?
As every Unoparty transaction is a Unobtanium transaction, to do a "51% attack" on Unoparty you would have to do a 51% attack on Unobtanium.

## Besides a 51% attack, what are the other risks to consensus?
The Unoparty network could be effectively "forked" by a sizable number of people running different versions of the Unoparty client that had different "consensus sensitive code" (i.e. protocol code). In this case, if a transaction was read in from the Unobtanium client software, the differing code may cause two different interpretations of the data, and thus, two different ledger states.

As long as all participants run software that has the same protocol rules (even if it is different Unoparty client implementations), this situation will not happen. The reference client includes extensive safeguards that help detect and prevent this from happening.

That being said, the [Unoparty client](https://github.com/terhnt/unoparty-lib) is completely open-source. Anyone is able to copy the code and make their own modifications. They can then run their modified version of the software, which technically may generate a different ledger than everyone else. This is similar to Unobtanium itself. However, to have any impact, that person would have to get others to run it, who would have to trust this individual more than they trust the Unoparty development team. This new ledger would not be "Unoparty". It would be a separate ledger with its own protocol rules. Services built on this ledger (such as a block explorer) would not agree with similar services built on the Unoparty ledger.

## So can the Unoparty Team rewrite the Unoparty ledger’s history, in an emergency or by decree? How does that compare to the same risks with Unobtanium Core devs?
It’s identical to the case with Unobtanium. The Unobtanium core devs could publish a copy of Unobtanium Core that does anything, but no one would download it.

Unoparty is 100% open source, with [a list of code changes](https://github.com/terhnt/unoparty-lib/releases) from one release to the next visible for all to see and inspect.

## What about support for other blockchains instead of Unobtanium?
Unoparty is built on Unobtanium. That has always been the case and we do not see it changing, ever. For other blockchains, there are "forks" of the Unoparty software. Examples would be Dogeparty for Dogecoin, and Viacoin's ClearingHouse. We generally encourage forks on other blockchains, especially if they help contribute back bug fixes and enhancements to the main Unoparty codebase.

## What is Unobtanium fails or becomes co-opted?
In the event of a catastrophic failure of the Unobtanium network, Unoparty does have the technical capability of "freezing" balances and migrating to another blockchain, like Litecoin for instance, with relative ease.

## What happens if and when ```OP_RETURN``` data is auto-pruned?
Unoparty only needs some Unobtanium full nodes somewhere to have an unpruned copy of the blockchain. As every Unoparty full node is also a Unobtanium full node, this is easily done.

## How are blockchain reorganizations ("reorgs") handled by Unoparty?
Blockchain reorganizations are essentially handled by Unoparty the same way they are handled by Unobtanium. If the Unoparty software detects that a reorganization has occurred, it will utilize an internal "undolog" to quickly undo (roll back) transactions up to the point of the chain branching, and then process new transactions on the now-longest chain.

## How can a thin client trustlessly lookup the Unobtanium public address associated with the OSTOCK asset name?
You can use a local copy of the blockchain just fine. The only difference between Unoparty and Unobtanium here is that Unoparty doesn’t support SPV. We’re working on solutions to this issue. Protocols like VerSum offer excellent models for untrusted verification [here](https://).

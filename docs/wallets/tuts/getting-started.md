---
sidebar_position: 2
id: getting-started
---
# Getting Started
Unowallet is an open-source web wallet for Unobtanium and Unoparty. It uses regular Unobtanium addresses, and lets you store Unobtanium, XUP, and user-created tokens without having to trust a server. What makes it different from many other web wallets, is that the only possible way to access a wallet is by having access to the passphrase. In Unowallet, none of your private information ever leaves your PC.

For extra security, Unowallet also supports watch-only addresses, offline transaction signing, and Armory(TBA).

## Creating a Wallet
You can create as many wallets as you like.

![Create New Wallet image](/img/tutorial/download.png)



Your account in Unowallet is secured by a 12 word passphrase. In fact, this passphrase is your wallet itself. Every word in this phrase represents a number. Your browser places this passphrase into a math equation and gets a list of Unobtanium addresses and private keys as the result. If the passphrase is the same, you can always calculate the same addresses and keys. You can do this even if Unowallet is offline.

This means that your passphrase, your addresses and your private keys are never sent anywhere. This also makes it extremely important to keep your passphrase safe, as it cannot be restored by anyone. Please ensure that you have written it down correctly. Remember that once you close your browser, the only place this passphrase exists is the paper in your hand.
![Get Your Passphrase image](/img/tutorial/passphrase.png)


After you have written down your passphrase, the next dialog will give you an option to create a custom quick access URL. This will make it possible to access your wallet with a password of your choosing, by encrypting your passphrase as a link. This feature is best used for wallets with a low amount of funds that need to be accessed very frequently. When logging in with a quick URL, you will only need to enter your password (and can avoid writing the 12 word passphrase every time).

![Quick Access URL image](/img/tutorial/quickaccessurl.png)



When you type a password, the URL will automatically adapt to be accessible for that password. Write the URL for your desired password down, and verify that it is correct by entering the same password again.
![Quick Access URL image](/img/tutorial/quickaccessurlcreate.png)


You can log in to your wallet by writing your passphrase, and pressing open wallet. The open wallet button will only become active once you have entered a valid passphrase.
![open wallet image](/img/tutorial/openwallet.png)


If this is your first time logging in, you will have to agree to the terms and conditions of service. Some features may not be permitted in your country or jurisdiction. U.S. users cannot use dividend or betting functionality by default, for example. This is not a technical limitation, and can be disabled if you run your own Unowallet, but bare in mind that legal difficulties may arise. We hope that U.S. regulation will become more clear on this matter.
![agreement image](/img/tutorial/agreement.png)


One important thing to know before getting started is that when you perform an action in Unowallet (i.e. place an order, create a token, etc), it doesn't take effect immediately as it must first be confirmed on the Unobtanium blockchain. Unowallet lets you know this by displaying your actions under the Pending Actions panel (the Clock icon on the top bar), and then moving them to the Notifications panel (the Checkbox icon) automatically once the network has successfully confirmed them. You'll also see the future expected value in parenthesis next to the current balance to better alert you that the change is pending. Note that depending on the speed at which blocks are solved, it could take anywhere from 2 to 40 minutes for your actions to be confirmed.

## Sending and receiving UNO, XUP, and user-created tokens
![Opened Wallet Image](/img/tutorial/openedwallet.png)
_Note the image above is from testnet_

**One Unobtanium address will be automatically visible once you have created your wallet.** You can learn how to create more here and if you would like create an Armory address, you can read more about that here.

![Wallet Address Image](/img/tutorial/testnetaddress.png)  
_Note the image above is from testnet_


You can send and receive both unobtanium and Unoparty tokens with it. To start using the wallet, simply send some UNO or XUP to the address (just single click on the address string itself to select it, then copy that text, which you can then give to others or use to send funds to).

To send, click the down arrow button on UNO, XUP, or any user created token to show the drop-down menu. Then click send.
![Send Uno Image](/img/tutorial/senduno.png)


Enter the address you wish to send to, and your desired amount. The "MAX" button will send the entire balance of your sending address, minus the fees necessary for the transfer. Press send to sign and broadcast the transaction. The transfer will be complete once it is verified by the Unobtanium network.

![sendscreen image](/img/tutorial/sendscreen.png)


Logging in without a keyboard (to avoid malware)
If you are worried about some form of malware reading your keyboard strokes, or cannot use a keyboard, it is possible to to use the on-screen keyboard to login. Simply click the blue keyboard icon to the right of the open wallet button.

![Login with OSK](/img/tutorial/osklogin.png)


Then click on the text field of Word 1 to start typing. Note that this process is rather time consuming. Use it if you are worried or have reason to believe your computer has been compromised, and you need to move your coins.
![passphrase entering OSK image](/img/tutorial/enterphraseosk.png)

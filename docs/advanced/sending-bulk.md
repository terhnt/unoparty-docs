---
sidebar_position: 4
---
# How to send Unoparty assets in bulk

Below is a script for constructing, signing and broadcasting a large number of sends efficiently. It assumes that the source addresses are in a (temporarily) unlocked Unobtanium Core wallet, to which a running instance of unopartyd is connected.

This script takes a single command-line argument of the CSV file from which to pull the sources, destinations, quantities, assets and fees.

Warning: This example is outdated as it used the previous addrindexrs_uno unobtanium branch, however, same principles apply to current mainline repo.

## Script

```
import csv
import sys

from unopartylib.lib import util
from unopartylib.lib import config
from unopartylib.lib.backend import addrindex_uno

config.BACKEND_URL = 'http://user:password@localhost:4120'
config.BACKEND_SSL_NO_VERIFY = False
config.TESTNET = False
config.REQUESTS_TIMEOUT = 5

def unoparty_api(method, params):
    return util.api(method, params)

def unobtanium_api(method, params):
    return addrindex_uno.rpc(method, params)

def do_send(source, destination, asset, quantity, fee, encoding):
    validateaddress = unobtanium_api('validateaddress', [source])
    assert validateaddress['ismine']
    pubkey = validateaddress['pubkey']
    unsigned_tx = unoparty_api('create_send', {'source': source, 'destination': destination, 'asset': asset, 'quantity': quantity, 'pubkey': pubkey, 'allow_unconfirmed_inputs': True})
    signed_tx = unobtanium_api('signrawtransaction', [unsigned_tx])['hex']
    tx_hash = unobtanium_api('sendrawtransaction', [signed_tx])
    return tx_hash


with open(sys.argv[1], 'r') as csvfile:
      reader = csv.reader(csvfile)
      print('{}|{}|{}'.format('linenum', 'input', 'result'))

      for row in reader:
            if reader.line_num == 1:                                            
                  continue                                                        

            source, destination, asset, quantity, fee = row
            fee, quantity = int(fee), int(quantity)

            try:
                  tx_hash = do_send(source, destination, asset, quantity, fee, 'opreturn')
            except Exception as e:
                  tx_hash = str(e)

            print('{}|{}|{}'.format(reader.line_num, ','.join(row), tx_hash))
```

## CSV File
All quantities are specified in satoshis. The format of the CSV file is as follows:

```
source,destination,asset,quantity,fee
  uVVuwXm2mDK9pr9XkWT5k7ihQyoSC8y2MW,uVVuwXm2mDK9pr9XkWT5k7ihQyoSC8y2MW,XUP,100000000,150
  uVVuwXm2mDK9pr9XkWT5k7ihQyoSC8y2MW,uVVuwXm2mDK9pr9XkWT5k7ihQyoSC8y2MW,XUP,200000000,100
```

## Instructions
Use this script on a system with unoparty-lib installed and in the ```PYTHONPATH```. (If using a Federated Node, this is possible by issuing the command ```unonode shell unoparty``` or ```unonode shell unoparty-testnet``` as appropriate, and using the script in that shell.)

If the CSV file with the data is called ```input.csv```, and the script is called ```sendmany.py```, then call this script with ```$ python3 sendmany.py input.csv```.

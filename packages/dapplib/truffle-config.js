require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hope area off tragic educate ranch remind evil idea fork bottom sustain'; 
let testAccounts = [
"0x7b1f3190eccc9eb4e500872858bc01b1fa49749e4692dc2172e6d5a2a734aef4",
"0xa7b6ebff55013a54fd6a3698c6dc3639f620949fdbeb0ec0cd8b5780e4d08a26",
"0x5bb51f375b63f47c157c6d45a1ccea2c34362d7ecbddf64875bc653356a6beaf",
"0x8ed7769d15bd667b2b0a26b88ae08a990ef831910555df19c206ca268e5d31fe",
"0x8d2aeaa82db98ed9736c92710f30e33389f92cfda4afb7b3218cbab9cd5b36ca",
"0xb60aed6fcedd775d06b600a383144175639b5433cf3ad34bcb452579d1bc8efe",
"0x0f84288806aa87df54b881191468bbd4e8d352ea7e08d9f46debb9045cf039f2",
"0x6524bb6bfc0ccc843ef84405759c8d5142f7b99d4e9af8df46fd8071abcb94e0",
"0x40af66d328d093defd0ad5208beee22cc09b83988a2bdb14fec0ff7cb738d52d",
"0x7228997cbf941b71b6f6357a0b2ccc7c1fa23f3d2be09d0374702d330dd3cd03"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



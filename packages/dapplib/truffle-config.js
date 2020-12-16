require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name renew night hole grace cart equal gesture'; 
let testAccounts = [
"0x859cad6fa6e6e123f74c81d05aecb5a378be6e0ada8c0b9bf6266ef6c350afc6",
"0x782c6efb9c2b097189487c9aaf665b4ab7dd9cff80b59910658b1be8ae552abf",
"0x25b9c619cbb7b48e37a83169e63f035b1e187945117c45f5ff3e226b2b77fcd2",
"0x5962c6ed0d1b3ad71f818234a6d97d8e1c46e62f8b9c2a519b99f98d709e19be",
"0x603bfc6a1f01de672bc68f42a4f6962f15a48891c076c1faf2ec1713030b257d",
"0xdbbf7d097151fcaaf6843acb8196bf12da12115afce4e7b09d10d4d32f0af2b1",
"0x3bed126df7f1d1986757a1276c79374445a9d9cc9b3022fe0fde773b2d492de8",
"0xba663aa563524662971050fb20faa56cd5acbddd5fd498344a46e688008ad7b1",
"0xec1c6af4f37af6fdf02d9c61c684ecefcd9af965e91c8d9a1b64ddb9f4dfa938",
"0x49b90a4a2e055078dfbd5d98c762639f3d58fb40511888f513445839b3a6181b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

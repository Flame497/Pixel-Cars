import "./abi" as _abi;

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const contract = new web3.eth.Contract(_abi, ); //insert contract address
}

//base functions (public)
var purchase = contract.methods.Buy(amount).send();
document.getElementById('purchase').className = 'buyFunc';

var sale = contract.methods.Sell(amount).send();
document.getElementById('sale').className = 'saleFunc';

var transfer = contract.methods.transfer().send()
document.getElementById('transfer').className = 'transferFunc';

var mint = contract.methods.mint(pic).send();
document.getElementById('mint').className = 'mintFunc';

//public functions
//max mintable
var _maxPXC = contract.methods.maxPXC().call();
document.getElementById('_maxPXC').className = 'pxcNum';
//minted so far
var _minted = contract.methods.mintedTotal().call();
document.getElementById('_minted').className = 'mintAmount';
//circulating supply
var circSup = contract.methods.circulatingSupply().call()
document.getElementById('circSup').className = 'supply';
//total supply
var totSup = contract.methods.totalSupply().call();
document.getElementById('totSup').className = 'MaxSupply';

//owner functions
var AD = contract.methods.ADAmount(amount).call();
document.getElementById('AD').className = 'Drop';

var wl_add = contract.methods.addPXC(amount).call();
document.getElementById('wl_add').className = 'adWhiteListed';

import "./abi.JSON" as _abi;

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const contract = new web3.eth.Contract(_abi, ); //insert contract address
}

//NFT check function
async function chkBought() {
  await contract.methods.chksold().call();
}

//base functions (public)
async function purchase() {
  await contract.methods.Buy(amount).send();
}

async function sale() {
  await contract.methods.Sell(amount).send();
}

async function transfer() {
  await contract.methods.transfer().send();
}

async function mint() {
  await contract.methods.mint(pic).send();
}

//public functions
//max mintable
async function _maxPXC() {
  await contract.methods.maxPXC().call();
}

//minted so far
async function  _minted() {
  await contract.methods.mintedTotal().call();
}

//circulating supply
async function circSup() {
  await contract.methods.circulatingSupply().call();
}

//total supply
async function totSup() {
  await contract.methods.totalSupply().call();
}

//owner functions
async function AD(Num) {
  await contract.methods.ADAmount(Num).call();
}

async function wl_add(Num) {
  await contract.methods.addPXC(Num).call();
}

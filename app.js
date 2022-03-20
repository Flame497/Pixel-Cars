import "./abi";

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const contract = = new web3.eth.Contract();
  var nodeConnection = accounts(0, 'https://speedy-nodes-nyc.moralis.io/6c627e79cc3a63387a84097b/bsc/testnet');
}

function buy() {}

function sell() {}

function transfer() {}

function mint() {}

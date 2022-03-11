function BlockUpdate(address, token_id, value) {
  this.address = address;
  this.token_id = token_id;
  this.value = value;
}

const tx = erc20.deploy({
    data: erc20Contract.bytecode,
    arguments: [
      name,
      symbol,
      decimalPrecision,
      web3.utils.toBN(totalSupply), 
      web3.utils.toBN(tokenCap),
    ]
  });

// Input variables
{
    "name": "name",
    "symbol": "symbol",
    "totalSupply": 1000000,
    "tokenCap": 100000000,
    "decimalPrecision": 12
}

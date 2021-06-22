web3.eth.getTransactionCount(send_account, (err, txCount) => {
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    to: receive_account,
    value: "0x2C68AF0BB140000", // 0.2 ether
  };
  const tx = new Tx(txObject);
  tx.sign(privateKeyBuffer);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  web3.eth
    .sendSignedTransaction(raw)
    .once("transactionHash", (hash) => {
      console.info(
        "transactionHash",
        "https://ropsten.etherscan.io/tx/" + hash
      );
    })
    .once("receipt", (receipt) => {
      console.info("receipt", receipt);
    })
    .on("error", console.error);
});

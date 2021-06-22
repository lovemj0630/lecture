const optionDefinitions = [
  { name: "infuraFileToken", type: String },
  { nmae: "privateKey", type: String },
];
const commandLineArgs = require("command-line-args");
const options = commandLineArgs(optionDefinitions);

var Web3 = require("Web3");
var fs = require("fs");
var Tx = require("ethereumjs-tx");
var infuraToken = fs.readFileSync(options.infufaFileToken, "utf-8");
var privateKey = fs.readFileSync(options.privateKey, "utf-8");
var node_host = "https://ropsten.infura.io/v3/${infuraToken}";

var web3 = new Web3(node_host);

const send_account = "0x146b599ea5F0A8c8C64Ee7771CA42d8a3eC7A371";
const receive_account = "0x57Ef55a3B86a81CB19894B208c9df256C7FF6AaF";
const privateKeyBuffer = Buffer.from(privateKey, "hex");

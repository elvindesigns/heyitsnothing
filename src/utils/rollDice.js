import {
    Api,
    JsonRpc,
    RpcError
  } from "eosjs";
  import ScatterJS from "scatterjs-core";
  import ScatterEOS from "scatterjs-plugin-eosjs2";
  // import axios from "axios";
  
  
  // const url = "http://localhost:4000/api/v1";
  const JSON_RPC = "https://api-kylin.eosasia.one:443";
  const CONTRACT_ACCOUNT = "mcryptolotto";
  const HOST = "api-kylin.eosasia.one";
  const PROTOCOL = "https";
  const PORT = 443;
  const BLOCKCHAIN = "eos";
  const CHAIN_ID = "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"
  const APP_NAME = "Megacrypto Lotto";
  
  export default function rollDice(data) {
    // Declare the type (EOS)
    ScatterJS.plugins(new ScatterEOS());
  
    // Decalre Network
    const network = {
      blockchain: `${BLOCKCHAIN}`,
      protocol: `${PROTOCOL}`,
      host: `${HOST}`,
      port: `${PORT}`,
      chainId: `${CHAIN_ID}`
    };
  
    ScatterJS.scatter.connect(`${APP_NAME}`).then(connected => {
      // User does not have Scatter Desktop, Mobile or Classic installed.
  
      if (!connected) {
        alert('No Scatter Instance detected')
        return false;
      }
      const scatter = ScatterJS.scatter;
  
      // Declare your required fields here.
      const requiredFields = {
        accounts: [network]
      };
      scatter
        .getIdentity(requiredFields)
        .then(() => {
          const account = scatter.identity.accounts.find(
            x => x.blockchain === `${BLOCKCHAIN}`
          );
  
          console.log(account); // Prints out the account details on the scatter instance, i.e {name: "greenunicorn", authority: "active", publicKey: "EOS5MqPqNJugnbZsHB7pJrFvNuNNrh38KZwNfdtPTgPyEiSCtMBsU", blockchain: "eos"}
  
  
          const transactionOptions = {
            authorization: [`${account.name}@${account.authority}`]
          }; // Permission Level
  
          const dataF = { ...data,
            player: account.name
          }
  
          process(scatter, network, dataF);
  
          console.log("finished init");
        })
        .catch(error => {
          console.log("Errors on init here = " + error);
        });
  
      // Null out the scatter reference to prevent other plugins trying to call a valid scatter instance on the user's browser.
      window.ScatterJS = null;
    });
  };
  
  const process = function (scatter, network, data) {
    console.log("Heading to process");
    const rpc = new JsonRpc(`${JSON_RPC}`, {
      fetch
    });
    console.log(scatter);
    const api = new Api({
      rpc,
      signatureProvider: scatter.eosHook(network)
    });
  
    const dataFiles = {
      ...data
      // user: scatter.identity.accounts[0].name,
      // timestamp: Math.floor(Date.now() / 1000)
    };
  
    execute(api, scatter, "move", dataFiles);
  };
  
  const execute = async (api, scatter, action_name, dataFiles) => {
    console.log("Moving");
    try {
      const actorName = scatter.identity.accounts[0].name;
      const actorAuthority = scatter.identity.accounts[0].authority;
      const result = await api.transact({
        actions: [{
          account: `${CONTRACT_ACCOUNT}`,
          name: action_name,
          authorization: [{
            actor: actorName,
            permission: actorAuthority
          }],
          data: dataFiles
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30
      });
      console.dir(result);
    } catch (e) {
      console.log("\nCaught exception: " + e);
      if (e instanceof RpcError) {
        console.log(JSON.stringify(e.json, null, 2))
      };
    }
  
  };
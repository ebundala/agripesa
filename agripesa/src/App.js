import React, { Component } from 'react';
//import getWeb3 from './utils/getWeb3'; zab 107-9,mark 1;
import Web3 from 'web3'
import abi from './contracts/kilimoCoin'
import logo from './logo.svg';
import './App.css';
let provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
const contractAddress="0x6d5c753d0411992577d8a4293843872d5bf30f17";
//let web3 = new Web3(provider)
class App extends Component {
  constructor(props){

    super();
    this.state={owner:"",user:{},transaction:{},userBalance:"",baseBalance:""};
      this.getOwner=this.getOwner.bind(this);
      this.registerUser=this.registerUser.bind(this);
      this._users=this._users.bind(this);
      this.getBaseEtherBalance=this.getBaseEtherBalance.bind(this);
      this.getUserEtherBalance=this.getUserEtherBalance.bind(this);
      this.topUpBase=this.topUpBase.bind(this);
      this.topUpUser=this.topUpUser.bind(this);
  }
  componentDidMount(){
    this.web3=new Web3(provider);
    this.contract= new this.web3.eth.Contract(abi.abi, contractAddress);
    let ctx=this;
    this.web3.eth.getAccounts().then((res)=>{
        console.log(res);
        ctx.accounts=res;
    })

   console.log(this.web3.eth.Coinbase)

  }
  contractsMethod(){
      return this.contract.methods;
  }
  getOwner(e){
   let ctx=this;
      this.contractsMethod().getOwner().call({from:this.accounts[0]},(error,result)=> {
      if(error){
        console.log(error)
      }else {
        console.log(result);
        ctx.setState({owner:result})
      }

    })
  }
  registerUser(){
      //console.log(this.web3.eth.getAccounts())
      let ctx=this;
      this.contractsMethod().register("elias","joachim","bundala",989899,778899,"admin")
          .send({from:this.accounts[1],gas: 1500000})
          .on('transactionHash', function(hash){
         console.log("hash "+hash);
         //ctx.state.transaction= {...{hash};
              ctx.setState({transaction:{hash}});
      })
          .on('receipt', function(receipt){
              console.log("receipt "+receipt);
              //ctx.state.transaction.receipt=receipt;
              ctx.setState({transaction:{receipt}})
          })
          .on('confirmation', function(confirmationNumber, receipt){
              console.log("confirmation "+confirmationNumber);
              let confirmation={confirmationNumber,receipt};
              ctx.setState({transaction:{confirmationNumber}})
          })
          .on('error', console.error);





          /*.call({from:this.web3.eth.accounts[0]},(error,result)=> {
          if(error){
              console.log(error)
          }else {
              console.log(result);
              //ctx.setState({owner:result})
          }

      })*/

    }
  _users(){
      let ctx=this;
      this.contractsMethod()._users(this.accounts[0]).call({from:this.accounts[0]},(error,result)=> {
          if(error){
              console.log(error)
          }else {
              console.log(result);
              ctx.setState({user:result})
          }

      })
  }
  getUserEtherBalance(){
      let ctx=this;
      this.contractsMethod().getMyBalance().call({from:this.accounts[1]},(error,result)=> {
       if(error){
       console.log(error)
       }else {
       console.log("ac 1 balance =",result);
       //ctx.setState({userBalance:result})
       }

       })

  }
  getBaseEtherBalance(){
      let ctx=this;
      this.contractsMethod().getMyBalance().call({from:this.accounts[1]},(error,result)=> {
          if(error){
              console.log(error)
          }else {
              console.log("base ac  balance =",result);
              ctx.setState({baseBalance:result})
          }

      })
  }
  topUpBase(){
      let ctx=this;
      this.contractsMethod().topUpBase()
          .send({from:this.accounts[1],value: 1500000})
          .on('transactionHash', function(hash){
              console.log("hash "+hash);
              //ctx.state.transaction= {...{hash};
              ctx.setState({transaction:{hash}});
          })
          .on('receipt', function(receipt){
              console.log("receipt "+receipt);
              //ctx.state.transaction.receipt=receipt;
              ctx.setState({transaction:{receipt}})
          })
          .on('confirmation', function(confirmationNumber, receipt){
              console.log("confirmation "+confirmationNumber);
              let confirmation={confirmationNumber,receipt};
              ctx.setState({transaction:{confirmationNumber}})
          })
          .on('error', console.error);
  }
  topUpUser(){
      let ctx=this;
      this.contractsMethod().topUpUser(this.accounts[1],70000).send({from:this.accounts[1]})
          .on('transactionHash', function(hash){
              console.log("hash "+hash);
              //ctx.state.transaction= {...{hash};
              ctx.setState({transaction:{hash}});
          })
          .on('receipt', function(receipt){
              console.log("receipt "+receipt);
              //ctx.state.transaction.receipt=receipt;
              ctx.setState({transaction:{receipt}})
          })
          .on('confirmation', function(confirmationNumber, receipt){
              console.log("confirmation "+confirmationNumber);
              let confirmation={confirmationNumber,receipt};
              ctx.setState({transaction:{confirmationNumber}})
          })
          .on('error', console.error);



        /*  .send({from:this.accounts[1],gas:700000},(error,result)=> {
          if(error){
              console.log(error)
          }else {
              console.log("topUpUser =",result);
             // ctx.setState({userBalance:result})
          }

      })*/
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button  onClick={this.getOwner}>get owner</button>
        <p className="App-intro">
          owner {this.state.owner}
        </p>
          <button  onClick={this.registerUser}>register user</button>
          <p className="App-intron">
              user {JSON.stringify(this.state.transaction)}
          </p>

          <button  onClick={this._users}>get user</button>
          <p className="App-intron">
              user {JSON.stringify(this.state.user)}
          </p>
          <button  onClick={this.topUpBase}>top base balance</button>
          <p className="App-intron">
            toped  base balance{this.state.baseBalance}
          </p>
          <button  onClick={this.topUpUser}>top user balance</button>
          <p className="App-intron">
              base balance{this.state.userBalance}
          </p>
          <button  onClick={this.getBaseEtherBalance}>get base balance</button>
          <p className="App-intron">
              base balance{this.state.baseBalance}
          </p>
          <button  onClick={this.getUserEtherBalance}>user balance</button>
          <p className="App-intron">
              user balance {this.state.userBalance}
          </p>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import getWeb3 from './utils/getWeb3'; zab 107-9,mark 1;
import Web3 from 'web3'
import kilimoCoin,{txOtions} from './contracts/contract';
import logo from './logo.svg';
import './App.css';
let provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
//const contractAddress="0x6d5c753d0411992577d8a4293843872d5bf30f17";
const web3 = new Web3(provider);
class App extends Component {
  constructor(props){

    super();
    this.state={instance:{},owner:"",user:{},transaction:{},userBalance:"",baseBalance:""};
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
      let ctx=this;
      kilimoCoin.new().then((instance)=>{
          console.log(instance);
          ctx.setState({instance});
          return instance
      }).then((inst)=>{
          return inst.getOwner.call()
      }).then((owner)=>{
          ctx.setState({owner});
      }).catch(console.error);


    /*this.web3.eth.getAccounts().then((res)=>{
        console.log(res);
        ctx.accounts=res;
    })

   console.log(this.web3.eth.Coinbase)*/

  }
  contractsMethod(){
      return kilimoCoin.deployed();
  }
  getOwner(e){
   let ctx=this;
      this.state.instance.getOwner.call().then((res)=>{
          ctx.setState({owner:res});
      }).catch(console.error);
  }
  registerUser(){
      //console.log(this.web3.eth.getAccounts())
      let ctx=this;
      this.state.instance.register("elias","joachim","bundala",989899,778899,"admin")
          .then((res)=>{
          ctx.setState({transaction:res});
      }).catch(console.error);








    }
  _users(){
      let ctx=this;
      this.state.instance._users.call(txOtions.from).then((res)=>{
          ctx.setState({user:res});
      }).catch(console.error);
  }
  getUserEtherBalance(){
      let ctx=this;
      this.state.instance.getUserBalance.call(txOtions)
          .then((res)=>{
          ctx.setState({userBalance:res});
      }).catch(console.error);


  }
  getBaseEtherBalance(){
      let ctx=this;
      this.state.instance.getBaseBalance.call(txOtions).then((res)=>{
          ctx.setState({baseBalance:res});
      }).catch(console.error);


  }
  topUpBase(){
      let ctx=this;
      this.state.instance.topUpBase({...txOtions,value:web3.toWei(9,"ether")}).then((res)=>{
          ctx.setState({transaction:res});
      })

  }
  topUpUser(){
      let ctx=this;
      this.state.instance.topUpUser(70000)
      /*.send({from:this.accounts[1]})
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
              ctx.setState({transaction:{confirmation}})
          })
          .on('error', console.error);*/



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
          owner {JSON.stringify(this.state.owner)}
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
            toped  base balance{JSON.stringify(this.state.baseBalance)}
          </p>
          <button  onClick={this.topUpUser}>top user balance</button>
          <p className="App-intron">
              base balance{JSON.stringify(this.state.userBalance)}
          </p>
          <button  onClick={this.getBaseEtherBalance}>get base balance</button>
          <p className="App-intron">
              base balance{JSON.stringify(this.state.baseBalance)}
          </p>
          <button  onClick={this.getUserEtherBalance}>user balance</button>
          <p className="App-intron">
              user balance {JSON.stringify(this.state.userBalance)}

          </p>

      </div>
    );
  }
}

export default App;

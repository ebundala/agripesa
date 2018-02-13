import React, { Component } from 'react';
//import getWeb3 from './utils/getWeb3'; zab 107-9,mark 1;
import Web3 from 'web3'
import kilimoCoin,{txOtions,contractAddress} from './contracts/contract';
import logo from './logo.svg';
import './App.css';
let provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
//const contractAddress="0x6d5c753d0411992577d8a4293843872d5bf30f17";
const product={name:"men's shoes",price:9000,quantity:89,brand:"nike",photos:["hhhjhhj","hjkhjkhjk"]};
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

      this.getProductCount=this.getProductCount.bind(this);
      this.newProduct=this.newProduct.bind(this);
      this.updateProduct=this.updateProduct.bind(this);
      this.deleteProduct=this.deleteProduct.bind(this);
      this.getProducts=this.getProducts.bind(this);
      this.getProductStruct=this.getProductStruct.bind(this)
  }
  componentWillMount(){
      let ctx=this;
      web3.personal.unlockAccount(txOtions.from, "kiazi-kitamu", 10000);
      web3.settings.defaultAccount=txOtions.from;
      if(contractAddress!==undefined)
      {
          kilimoCoin.at(contractAddress).then((instance)=>{
              console.log(instance,web3);
              ctx.setState({instance});
          }).catch((e)=>{console.error("failed to load contract",e)});
      }else {
          kilimoCoin.new().then((instance)=>{
              console.log(instance);
              ctx.setState({instance});
              return instance
          }).then((inst)=>{
              return inst.getOwner.call()
          }).then((owner)=>{
              ctx.setState({owner});
          }).catch(console.error);
      }
  }
  componentDidMount(){
    this.web3=web3//new Web3(provider);


    /*this.web3.eth.getAccounts().then((res)=>{
        console.log(res);
        ctx.accounts=res;
    })

   console.log(this.web3.eth.Coinbase)*/

  }
    getProductCount(){
      this.state.instance.getProductCount.call().then((count)=>{
          console.log("products count ",count);
          return count
      }).catch(console.error)
    }
    getProductStruct(){
        this.state.instance.productsStructs.call(0).then((product)=>{
            console.log(product);
        }).catch(console.error)
  }
    newProduct(){
        this.state.instance.newProduct(product.price,product.quantity,JSON.stringify(web3.eth),txOtions).then((res)=>{
            console.log(res);
        }).catch(console.error)
    }
    deleteProduct(){
        this.state.instance.deleteProduct(1,txOtions).then((res)=>{
            console.log(res)
        }).catch(console.error)
    }
    updateProduct(){
        this.state.instance.updateProduct(0,99000,80,JSON.stringify(product),txOtions).then((res)=>{
            console.log(res)
        }).catch(console.error)
    }
    getProducts(){

        this.state.instance.getProducts.call(0,90).then((products)=>{
            console.log(products)
        }).catch(console.error)

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
      //let ctx=this;
      this.state.instance.topUpUser(70000);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button  onClick={this.getOwner}>getowner</button>
        <p className="App-intro">
          owner {JSON.stringify(this.state.owner)}
        </p>
          <button  onClick={this.registerUser}>register</button>
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
          <button  onClick={this.getProductCount}>get product count</button>
          <button  onClick={this.newProduct}>new product</button>
          <button  onClick={this.updateProduct}>update product</button>
          <button  onClick={this.deleteProduct}>delete product</button>
          <button  onClick={this.getProductStruct}>get prod struct</button>
          <button  onClick={this.getProducts}>get products</button>

      </div>
    );
  }
}

export default App;

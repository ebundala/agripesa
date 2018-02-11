pragma solidity ^0.4.0;
import "./strings.sol";
contract users {
    using strings for *;
    address owner = msg.sender;
    address myAddress=this;
    struct  user{
        address userAddress;
        string firstName;
        string middleName;
        string lastName;
        uint32 dob;
        uint32 phoneNumber;
        string role;
        bool exist;

    }
    mapping(address => user) public _users;

    modifier hasFunds(address from,uint amount){
        require(from.balance>amount);
        _;
    }
    modifier notRegistered(){
        require(!_users[msg.sender].exist);
        _;
    }
    modifier ownerOnly(){
        require(msg.sender==owner);
        _;
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Unregister(address indexed account);
    event Registered(address indexed account,string name);
    event Updated(address indexed account,string name);


    function ()public payable {
        //add logic to divide dividends according to contributions
    }
    function users() public {

        //myAddress.transfer(msg.value);

    }
    function getBaseBalance()public constant returns(uint){
        return myAddress.balance;
    }
    function getUserBalance()public constant returns(uint){
        return msg.sender.balance;
    }
    function topUpUser(uint amount) public hasFunds(myAddress,amount){
        msg.sender.transfer(amount);
        Transfer(myAddress,msg.sender,amount);

    }
    function topUpBase() public payable hasFunds(msg.sender,msg.value){
        //myAddress.transfer(amount);
        Transfer(msg.sender,myAddress,msg.value);

    }
    function register(string firstName,string middleName,string lastName,uint32 dob,uint32 phoneNumber,string role)
    notRegistered() public payable
    {
        user storage aUser=_users[msg.sender];
        aUser.firstName=firstName;
        aUser.middleName=middleName;
        aUser.lastName=lastName;
        aUser.dob=dob;
        aUser.userAddress=msg.sender;
        aUser.phoneNumber=phoneNumber;
        aUser.role=role;
        aUser.exist=true;
        Registered(msg.sender,firstName);

    }

    function deRegister() notRegistered() public {
        delete _users[msg.sender];
         Unregister(msg.sender);

    }
    function getOwner() public constant returns(address){
        return owner;
    }
    function kill() public ownerOnly() {
     selfdestruct(owner);
    }

}

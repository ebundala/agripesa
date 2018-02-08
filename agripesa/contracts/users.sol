pragma solidity ^0.4.0;

contract users {
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
    mapping(address => user) public _users;
    function ()public payable {
        //add logic to divide dividends according to contributions
    }
    function users() public {

        //myAddress.transfer(msg.value);

    }
    function getMyBalance()public view returns(uint){
        return myAddress.balance;
    }
    function topUpUser(address to,uint amount) public hasFunds(myAddress,amount){
        to.transfer(amount);

    }
    function topUpBase() public payable hasFunds(msg.sender,msg.value){
        //myAddress.transfer(amount);

    }
    function register(string firstName,string middleName,string lastName,uint32 dob,uint32 phoneNumber,string role)
    notRegistered() public payable returns(bool)
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
        return true;
    }

    function deRegister() notRegistered() public returns(bool) {
        delete _users[msg.sender];

        return true;
    }
    function getOwner() public constant returns(address){
        return owner;
    }
    function kill() public ownerOnly() {
     selfdestruct(owner);
    }

}

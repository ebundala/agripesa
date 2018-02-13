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
        string metadata;
        string role;
        bool exist;
        uint listPointer;
    }

    mapping(address => user) public _users;
    address[] public usersList;
    //modifiers
    modifier hasFunds(address from,uint amount){
        require(from.balance>amount);
        _;
    }
    modifier notRegistered(){
        require(!_users[msg.sender].exist);
        _;
    }
    modifier isRegistered(){
        require(_users[msg.sender].exist);
        _;
    }
    modifier ownerOnly(){
        require(msg.sender==owner);
        _;
    }
   //events + logs
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event UserUnregistered(address indexed account);
    event UserRegistered(address indexed account,string name);
    event UserUpdated(address indexed account,string name);


    function ()public payable {
        //add logic to divide dividends according to contributions
    }
    function users() public {

        //myAddress.transfer(msg.value);

    }
    //users methods
    function isUser(address userAddress)internal view returns(bool isIndeed){
        require(usersList.length>0);
        return (usersList[_users[userAddress].listPointer])== userAddress;
    }
    function getOwner() public constant returns(address){
        return owner;
    }
    function getUsersCount() public view returns(uint){
        return usersList.length;
    }
    function newUser(string firstName,string middleName,string lastName,uint32 dob,uint32 phoneNumber,string role,string metadata)public notRegistered() returns(bool success){
        user storage aUser=_users[msg.sender];
        aUser.listPointer=usersList.push(msg.sender);
        aUser.firstName=firstName;
        aUser.middleName=middleName;
        aUser.lastName=lastName;
        aUser.dob=dob;
        aUser.userAddress=msg.sender;
        aUser.phoneNumber=phoneNumber;
        aUser.role=role;
        aUser.exist=true;
        aUser.metadata=metadata;
        UserRegistered(msg.sender,firstName);
        return true;
    }
    function updateUser(string firstName,string middleName,string lastName,uint32 dob,uint32 phoneNumber,string role,string metadata)public isRegistered() returns(bool success) {
        user storage aUser=_users[msg.sender];
        aUser.firstName=firstName;
        aUser.middleName=middleName;
        aUser.lastName=lastName;
        aUser.dob=dob;
        aUser.userAddress=msg.sender;
        aUser.phoneNumber=phoneNumber;
        aUser.role=role;
        aUser.exist=true;
        aUser.metadata=metadata;
        UserUpdated(msg.sender,firstName);
        return true;
    }
    function deleteUser()public isRegistered() returns(bool success){

        uint rowToDelete=_users[msg.sender].listPointer;
        address keyToMove=usersList[usersList.length-1];
        usersList[rowToDelete]=keyToMove;
        _users[msg.sender].listPointer=rowToDelete;
        usersList.length--;
        _users[msg.sender].exist=false;
        UserUnregistered(msg.sender);
        return true;
    }
    function getUserStruct(uint i)internal view  returns(user item){

        return _users[usersList[i]];
    }
    function getUsers(uint offset,uint limit)public constant  returns(string){
        uint usersCount=getUsersCount();
        require(offset<usersCount);
        require(limit<100);
        strings.slice memory comma=",".toSlice();
        string memory usersCatalog="[";

        uint j=offset+limit;

        for(offset;offset<j;offset++)
        {
            if(offset<usersCount){
                usersCatalog=strings.concat(usersCatalog.toSlice(),strings.concat(getUserStruct(offset).metadata.toSlice(),comma).toSlice());
            }
            else{
                break;
            }
        }
        return strings.concat(usersCatalog.toSlice(),"]".toSlice());//strings.join(','.toSlice(),items);
    }
    //utility methods
    function getBaseBalance()public ownerOnly constant returns(uint){
        return myAddress.balance;
    }
    function getUserBalance()public ownerOnly constant returns(uint){
        return msg.sender.balance;
    }
    function topUpUser(uint amount) public  hasFunds(myAddress,amount){
        msg.sender.transfer(amount);
        Transfer(myAddress,msg.sender,amount);

    }
    function topUpBase() public payable  hasFunds(msg.sender,msg.value){
        //myAddress.transfer(amount);
        Transfer(msg.sender,myAddress,msg.value);

    }
    function kill() public ownerOnly() {
        selfdestruct(owner);
    }
}

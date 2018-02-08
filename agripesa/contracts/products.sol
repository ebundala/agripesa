pragma solidity ^0.4.0;
import "./users.sol";
import "./strings.sol";
contract products is users {
  using strings for *;
    struct product{
        uint listPointer;
        uint priceUnit;
        uint quantity;
        string metadata;
        address owner;
    }
    uint public productsCounter=0;//auto incrimented on insertion
    address[] public productsList;
    mapping(uint => product) public productsStructs;

    function isProduct(uint entityAddress)public constant returns(bool isIndeed){
        if(productsList.length==0) return false;
        return (productsList[productsStructs[entityAddress].listPointer])== entityAddress;
    }
    function getProductCount() public constant returns(uint entityCount){
        return productsList.length;
    }
    function newProduct(address owner,uint priceUnit,uint quantity,string metadata)public returns(bool success){
        if(isProduct(entityAddress)) throw;
        productsCounter++;//incriment the counter
        productsStructs[productsCounter].priceUnit=priceUnit;
        productsStructs[productsCounter].quantity=quantity;
        productsStructs[productsCounter].dataJson=dataJson;
        productsStructs[productsCounter].metadata=metadata;
        productsStructs[productsCounter].owner=owner;
        productsStructs[productsCounter].listPointer=productsList.push(productsCounter)-1;
        return true;
    }
    function updateProduct(uint entityAddress,uint priceUnit,uint quantity,string metadata)public returns(bool success){
        if(!isProduct(entityAddress)) throw;
        productsStructs[entityAddress].priceUnit=priceUnit;
        productsStructs[entityAddress].quantity=quantity;
        productsStructs[entityAddress].dataJson=dataJson;
        productsStructs[entityAddress].metadata=metadata;

        return true;
    }
    function deleteProduct(uint entityAddress)public returns(bool success){
        if(!isProduct(entityAddress)) throw;
        uint rowToDelete=productsStructs[entityAddress].listPointer;
        uint keyToMove=productsList[productsList.length-1];
        productsList[rowToDelete]=keyToMove;
        productsStructs[keyToMove].listPointer=rowToDelete;
        productsList.length--;
        delete productsStructs[entityAddress];
        return true;
    }
    function getProductStruct(uint i) returns(product item){
        require(i<getProductCount());
        return productsStructs[productsList[i]];
    }
    function getProducts(uint8 offset,uint8 limit)public returns(string[100]){
        uint productCount=getProductCount();
        require(offset<c);
        require(limit<100);
        string[100] memory items;
        uint8  i=0;
        uint8  j=offset+limit;

        for(offset;offset<j;offset++)
        {
            if(offset<productCount&&i<100){
          items[i]= getProductStruct(offset).metadata;
            }
            else{
                return items;
            }
        }
        return items;
    }
    function products(){

    }
}

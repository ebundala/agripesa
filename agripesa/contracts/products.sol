pragma solidity ^0.4.0;
//import "./users.sol";
import "./strings.sol";
contract products  {
    using strings for *;
    struct product{
        uint listPointer;
        uint priceUnit;
        uint quantity;
        string metadata;
        address owner;
    }
    uint public productsCounter=0;//auto incrimented on insertion
    uint[] public productsList;
    mapping(uint => product) public productsStructs;

    function isProduct(uint entityAddress)public constant returns(bool isIndeed){
        if(productsList.length==0) return false;
        return (productsList[productsStructs[entityAddress].listPointer])== entityAddress;
    }
    function getProductCount() public constant returns(uint){
        return productsList.length;
    }
    function newProduct(address owner,uint priceUnit,uint quantity,string metadata)public returns(bool success){


        require(!isProduct(productsCounter));
        productsStructs[productsCounter].priceUnit=priceUnit;
        productsStructs[productsCounter].quantity=quantity;
        productsStructs[productsCounter].metadata=metadata;
        productsStructs[productsCounter].owner=owner;
        productsStructs[productsCounter].listPointer=productsList.push(productsCounter)-1;
        productsCounter++;//incriment the counter
        return true;
    }
    function updateProduct(uint entityAddress,uint priceUnit,uint quantity,string metadata)public returns(bool success){
        require(isProduct(entityAddress));
        productsStructs[entityAddress].priceUnit=priceUnit;
        productsStructs[entityAddress].quantity=quantity;
        productsStructs[entityAddress].metadata=metadata;

        return true;
    }
    function deleteProduct(uint entityAddress)public returns(bool success){
        require(isProduct(entityAddress));
        uint rowToDelete=productsStructs[entityAddress].listPointer;
        uint keyToMove=productsList[productsList.length-1];
        productsList[rowToDelete]=keyToMove;
        productsStructs[keyToMove].listPointer=rowToDelete;
        productsList.length--;
        delete productsStructs[entityAddress];
        return true;
    }
    function getProductStruct(uint i)public constant returns(product item){
        require(i<getProductCount());
        return productsStructs[productsList[i]];
    }
    function getProducts(uint offset,uint limit)public constant returns(string prod){
        uint productCount=getProductCount();
        require(offset<productCount);
        require(limit<100);
        strings.slice[] items;
        // uint8  i=0;
        uint j=offset+limit;

        for(offset;offset<j;offset++)
        {
            if(offset<productCount){
                items.push(getProductStruct(offset).metadata.toSlice());
                // i++;
            }
            else{
                break;
            }
        }
        return strings.join(','.toSlice(),items);
    }

    function products() public{

    }
}
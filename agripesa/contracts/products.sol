pragma solidity ^0.4.0;

import "./strings.sol";
contract products  {
    using strings for *;
    struct product{
        uint listPointer;
        uint priceUnit;
        uint quantity;
        string  metadata;
       // strings.slice metadataSlice;
        address owner;
    }
    uint public productsCounter=0;//auto incrimented on insertion
    uint[] public productsList;
    mapping(uint => product) public productsStructs;
    event ProductAdded(uint id);
    event ProductUpdated(uint id);
    event ProductDeleted(uint id);


    function isProduct(uint entityAddress)internal view returns(bool isIndeed){
        if(productsList.length==0) return false;
        return (productsList[productsStructs[entityAddress].listPointer])== entityAddress;
    }
    function getProductCount() public view returns(uint){
        return productsList.length;
    }
    function newProduct(uint priceUnit,uint quantity,string metadata)public returns(bool success){

        require(!isProduct(productsCounter));
        productsStructs[productsCounter].priceUnit=priceUnit;
        productsStructs[productsCounter].quantity=quantity;
        productsStructs[productsCounter].metadata=metadata;
        productsStructs[productsCounter].owner=msg.sender;
        productsStructs[productsCounter].listPointer=productsList.push(productsCounter)-1;
        productsCounter++;//incriment the counter
        ProductAdded(productsCounter);
        return true;
    }
    function updateProduct(uint entityAddress,uint priceUnit,uint quantity,string metadata)public returns(bool success){
        require(isProduct(entityAddress));
        productsStructs[entityAddress].priceUnit=priceUnit;
        productsStructs[entityAddress].quantity=quantity;
        productsStructs[entityAddress].metadata=metadata;
        ProductUpdated(entityAddress);
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
        ProductDeleted(entityAddress);
        return true;
    }
    function getProductStruct(uint i)internal view returns(product item){
        require(i<getProductCount());
        return productsStructs[productsList[i]];
    }
    function getProducts(uint offset,uint limit)public constant returns(string){
        uint productCount=getProductCount();
        require(offset<productCount);
        require(limit<100);
        strings.slice memory comma=",".toSlice();
        string memory productsCatalog="[";

        uint j=offset+limit;

        for(offset;offset<j;offset++)
        {
            if(offset<productCount){
            productsCatalog=strings.concat(productsCatalog.toSlice(),strings.concat(getProductStruct(offset).metadata.toSlice(),comma).toSlice());
            }
            else{
                break;
            }
        }
        return strings.concat(productsCatalog.toSlice(),"]".toSlice());//strings.join(','.toSlice(),items);
    }

    function products() public{

    }
}
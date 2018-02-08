 const abi={
     "contractName": "kilimoCoin",
     "abi": [
         {
             "constant": true,
             "inputs": [
                 {
                     "name": "",
                     "type": "address"
                 }
             ],
             "name": "_users",
             "outputs": [
                 {
                     "name": "userAddress",
                     "type": "address"
                 },
                 {
                     "name": "firstName",
                     "type": "string"
                 },
                 {
                     "name": "middleName",
                     "type": "string"
                 },
                 {
                     "name": "lastName",
                     "type": "string"
                 },
                 {
                     "name": "dob",
                     "type": "uint32"
                 },
                 {
                     "name": "phoneNumber",
                     "type": "uint32"
                 },
                 {
                     "name": "role",
                     "type": "string"
                 },
                 {
                     "name": "exist",
                     "type": "bool"
                 }
             ],
             "payable": false,
             "stateMutability": "view",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [],
             "name": "kill",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": true,
             "inputs": [],
             "name": "getMyBalance",
             "outputs": [
                 {
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "payable": false,
             "stateMutability": "view",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [],
             "name": "topUpBase",
             "outputs": [],
             "payable": true,
             "stateMutability": "payable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "to",
                     "type": "address"
                 },
                 {
                     "name": "amount",
                     "type": "uint256"
                 }
             ],
             "name": "topUpUser",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": true,
             "inputs": [],
             "name": "getOwner",
             "outputs": [
                 {
                     "name": "",
                     "type": "address"
                 }
             ],
             "payable": false,
             "stateMutability": "view",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [],
             "name": "deRegister",
             "outputs": [
                 {
                     "name": "",
                     "type": "bool"
                 }
             ],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [],
             "name": "send",
             "outputs": [],
             "payable": true,
             "stateMutability": "payable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "firstName",
                     "type": "string"
                 },
                 {
                     "name": "middleName",
                     "type": "string"
                 },
                 {
                     "name": "lastName",
                     "type": "string"
                 },
                 {
                     "name": "dob",
                     "type": "uint32"
                 },
                 {
                     "name": "phoneNumber",
                     "type": "uint32"
                 },
                 {
                     "name": "role",
                     "type": "string"
                 }
             ],
             "name": "register",
             "outputs": [
                 {
                     "name": "",
                     "type": "bool"
                 }
             ],
             "payable": true,
             "stateMutability": "payable",
             "type": "function"
         },
         {
             "inputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "constructor"
         },
         {
             "payable": true,
             "stateMutability": "payable",
             "type": "fallback"
         }
     ],
     "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550341561009057600080fd5b610c3e8061009f6000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633cacd7d61461009b57806341c0e1b5146103695780634c7389091461037e5780636a083a82146103a75780636f7a0e46146103b1578063893d20e8146103f3578063a5418a7714610448578063b46300ec14610475578063b514549a1461047f575b005b34156100a657600080fd5b6100d2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105d0565b604051808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001806020018863ffffffff1663ffffffff1681526020018763ffffffff1663ffffffff168152602001806020018615151515815260200185810385528c8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101c75780601f1061019c576101008083540402835291602001916101c7565b820191906000526020600020905b8154815290600101906020018083116101aa57829003601f168201915b505085810384528b81815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561024a5780601f1061021f5761010080835404028352916020019161024a565b820191906000526020600020905b81548152906001019060200180831161022d57829003601f168201915b505085810383528a8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b50508581038252878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b50509c5050505050505050505050505060405180910390f35b341561037457600080fd5b61037c610661565b005b341561038957600080fd5b6103916106f6565b6040518082815260200191505060405180910390f35b6103af610737565b005b34156103bc57600080fd5b6103f1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610762565b005b34156103fe57600080fd5b6104066107f1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561045357600080fd5b61045b61081a565b604051808215151515815260200191505060405180910390f35b61047d61096a565b005b6105b6600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803563ffffffff1690602001909190803563ffffffff1690602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061096c565b604051808215151515815260200191505060405180910390f35b60026020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010190806002019080600301908060040160009054906101000a900463ffffffff16908060040160049054906101000a900463ffffffff169080600501908060060160009054906101000a900460ff16905088565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106bc57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1631905090565b3334808273ffffffffffffffffffffffffffffffffffffffff163111151561075e57600080fd5b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681808273ffffffffffffffffffffffffffffffffffffffff16311115156107ab57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015156107eb57600080fd5b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900460ff1615151561087857600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006108ef9190610b25565b6002820160006108ff9190610b25565b60038201600061090f9190610b25565b6004820160006101000a81549063ffffffff02191690556004820160046101000a81549063ffffffff021916905560058201600061094d9190610b25565b6006820160006101000a81549060ff021916905550506001905090565b565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900460ff161515156109cb57600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905087816001019080519060200190610a24929190610b6d565b5086816002019080519060200190610a3d929190610b6d565b5085816003019080519060200190610a56929190610b6d565b50848160040160006101000a81548163ffffffff021916908363ffffffff160217905550338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838160040160046101000a81548163ffffffff021916908363ffffffff16021790555082816005019080519060200190610af8929190610b6d565b5060018160060160006101000a81548160ff02191690831515021790555060019150509695505050505050565b50805460018160011615610100020316600290046000825580601f10610b4b5750610b6a565b601f016020900490600052602060002090810190610b699190610bed565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bae57805160ff1916838001178555610bdc565b82800160010185558215610bdc579182015b82811115610bdb578251825591602001919060010190610bc0565b5b509050610be99190610bed565b5090565b610c0f91905b80821115610c0b576000816000905550600101610bf3565b5090565b905600a165627a7a72305820016fb038cd043243dbbf7df8b8834fcfc5ab40fa668a6801bb00a5fd4b34c4b30029",
     "deployedBytecode": "0x606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633cacd7d61461009b57806341c0e1b5146103695780634c7389091461037e5780636a083a82146103a75780636f7a0e46146103b1578063893d20e8146103f3578063a5418a7714610448578063b46300ec14610475578063b514549a1461047f575b005b34156100a657600080fd5b6100d2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105d0565b604051808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001806020018863ffffffff1663ffffffff1681526020018763ffffffff1663ffffffff168152602001806020018615151515815260200185810385528c8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101c75780601f1061019c576101008083540402835291602001916101c7565b820191906000526020600020905b8154815290600101906020018083116101aa57829003601f168201915b505085810384528b81815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561024a5780601f1061021f5761010080835404028352916020019161024a565b820191906000526020600020905b81548152906001019060200180831161022d57829003601f168201915b505085810383528a8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b50508581038252878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b50509c5050505050505050505050505060405180910390f35b341561037457600080fd5b61037c610661565b005b341561038957600080fd5b6103916106f6565b6040518082815260200191505060405180910390f35b6103af610737565b005b34156103bc57600080fd5b6103f1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610762565b005b34156103fe57600080fd5b6104066107f1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561045357600080fd5b61045b61081a565b604051808215151515815260200191505060405180910390f35b61047d61096a565b005b6105b6600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803563ffffffff1690602001909190803563ffffffff1690602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061096c565b604051808215151515815260200191505060405180910390f35b60026020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010190806002019080600301908060040160009054906101000a900463ffffffff16908060040160049054906101000a900463ffffffff169080600501908060060160009054906101000a900460ff16905088565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106bc57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1631905090565b3334808273ffffffffffffffffffffffffffffffffffffffff163111151561075e57600080fd5b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681808273ffffffffffffffffffffffffffffffffffffffff16311115156107ab57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015156107eb57600080fd5b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900460ff1615151561087857600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006108ef9190610b25565b6002820160006108ff9190610b25565b60038201600061090f9190610b25565b6004820160006101000a81549063ffffffff02191690556004820160046101000a81549063ffffffff021916905560058201600061094d9190610b25565b6006820160006101000a81549060ff021916905550506001905090565b565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900460ff161515156109cb57600080fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905087816001019080519060200190610a24929190610b6d565b5086816002019080519060200190610a3d929190610b6d565b5085816003019080519060200190610a56929190610b6d565b50848160040160006101000a81548163ffffffff021916908363ffffffff160217905550338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838160040160046101000a81548163ffffffff021916908363ffffffff16021790555082816005019080519060200190610af8929190610b6d565b5060018160060160006101000a81548160ff02191690831515021790555060019150509695505050505050565b50805460018160011615610100020316600290046000825580601f10610b4b5750610b6a565b601f016020900490600052602060002090810190610b699190610bed565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bae57805160ff1916838001178555610bdc565b82800160010185558215610bdc579182015b82811115610bdb578251825591602001919060010190610bc0565b5b509050610be99190610bed565b5090565b610c0f91905b80821115610c0b576000816000905550600101610bf3565b5090565b905600a165627a7a72305820016fb038cd043243dbbf7df8b8834fcfc5ab40fa668a6801bb00a5fd4b34c4b30029",
     "sourceMap": "48:115:0:-;;;65:10:1;49:26;;;;;;;;;;;;;;;;;;;;100:4;82:22;;;;;;;;;;;;;;;;;;;;84:35:0;;;;;;;;48:115;;;;;;",
     "deployedSourceMap": "48:115:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;629:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1947:70;;;;;;;;;;;;;;868:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1087:115;;;;;;965:116;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1858:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1725:127;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;127:33:0;;;;;;1208:509:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;629:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1947:70::-;597:5;;;;;;;;;;;585:17;;:10;:17;;;577:26;;;;;;;;2003:5;;;;;;;;;;;1990:19;;;868:91;911:4;934:9;;;;;;;;;;;:17;;;927:24;;868:91;:::o;1087:115::-;1132:10;1143:9;418:6;405:4;:12;;;:19;397:28;;;;;;;;1087:115;;:::o;965:116::-;1024:9;;;;;;;;;;;1034:6;418;405:4;:12;;;:19;397:28;;;;;;;;1052:2;:11;;:19;1064:6;1052:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:116;;;;:::o;1858:83::-;1902:7;1928:5;;;;;;;;;;;1921:12;;1858:83;:::o;1725:127::-;1778:4;495:6;:18;502:10;495:18;;;;;;;;;;;;;;;:24;;;;;;;;;;;;494:25;486:34;;;;;;;;1802:6;:18;1809:10;1802:18;;;;;;;;;;;;;;;;1795:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;1840:4;1833:11;;1725:127;:::o;127:33:0:-;:::o;1208:509:1:-;1364:4;1386:18;495:6;:18;502:10;495:18;;;;;;;;;;;;;;;:24;;;;;;;;;;;;494:25;486:34;;;;;;;;1405:6;:18;1412:10;1405:18;;;;;;;;;;;;;;;1386:37;;1450:9;1434:5;:15;;:25;;;;;;;;;;;;:::i;:::-;;1487:10;1470:5;:16;;:27;;;;;;;;;;;;:::i;:::-;;1523:8;1508:5;:14;;:23;;;;;;;;;;;;:::i;:::-;;1552:3;1542:5;:9;;;:13;;;;;;;;;;;;;;;;;;1584:10;1566:5;:17;;;:28;;;;;;;;;;;;;;;;;;1623:11;1605:5;:17;;;:29;;;;;;;;;;;;;;;;;;1656:4;1645:5;:10;;:15;;;;;;;;;;;;:::i;:::-;;1683:4;1671:5;:11;;;:16;;;;;;;;;;;;;;;;;;1705:4;1698:11;;1208:509;;;;;;;;;:::o;48:115:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
     "source": "pragma solidity ^0.4.0;\r\nimport \"./users.sol\";\r\ncontract kilimoCoin is users {\r\n    function kilimoCoin()  {\r\n\r\n\r\n    }\r\n\r\n    function send() payable{\r\n\r\n    }\r\n}\r\n",
     "sourcePath": "E:\\androidSDK\\projects\\blockchain\\cp\\agripesa\\contracts\\kilimoCoin.sol",
     "ast": {
         "attributes": {
             "absolutePath": "/E/androidSDK/projects/blockchain/cp/agripesa/contracts/kilimoCoin.sol",
             "exportedSymbols": {
                 "kilimoCoin": [
                     13
                 ]
             }
         },
         "children": [
             {
                 "attributes": {
                     "literals": [
                         "solidity",
                         "^",
                         "0.4",
                         ".0"
                     ]
                 },
                 "id": 1,
                 "name": "PragmaDirective",
                 "src": "0:23:0"
             },
             {
                 "attributes": {
                     "SourceUnit": 241,
                     "absolutePath": "/E/androidSDK/projects/blockchain/cp/agripesa/contracts/users.sol",
                     "file": "./users.sol",
                     "scope": 14,
                     "symbolAliases": [
                         null
                     ],
                     "unitAlias": ""
                 },
                 "id": 2,
                 "name": "ImportDirective",
                 "src": "25:21:0"
             },
             {
                 "attributes": {
                     "contractDependencies": [
                         240
                     ],
                     "contractKind": "contract",
                     "documentation": null,
                     "fullyImplemented": true,
                     "linearizedBaseContracts": [
                         13,
                         240
                     ],
                     "name": "kilimoCoin",
                     "scope": 14
                 },
                 "children": [
                     {
                         "attributes": {
                             "arguments": [
                                 null
                             ]
                         },
                         "children": [
                             {
                                 "attributes": {
                                     "contractScope": null,
                                     "name": "users",
                                     "referencedDeclaration": 240,
                                     "type": "contract users"
                                 },
                                 "id": 3,
                                 "name": "UserDefinedTypeName",
                                 "src": "71:5:0"
                             }
                         ],
                         "id": 4,
                         "name": "InheritanceSpecifier",
                         "src": "71:5:0"
                     },
                     {
                         "attributes": {
                             "constant": false,
                             "implemented": true,
                             "isConstructor": true,
                             "modifiers": [
                                 null
                             ],
                             "name": "kilimoCoin",
                             "payable": false,
                             "scope": 13,
                             "stateMutability": "nonpayable",
                             "superFunction": null,
                             "visibility": "public"
                         },
                         "children": [
                             {
                                 "attributes": {
                                     "parameters": [
                                         null
                                     ]
                                 },
                                 "children": [],
                                 "id": 5,
                                 "name": "ParameterList",
                                 "src": "103:2:0"
                             },
                             {
                                 "attributes": {
                                     "parameters": [
                                         null
                                     ]
                                 },
                                 "children": [],
                                 "id": 6,
                                 "name": "ParameterList",
                                 "src": "107:0:0"
                             },
                             {
                                 "attributes": {
                                     "statements": [
                                         null
                                     ]
                                 },
                                 "children": [],
                                 "id": 7,
                                 "name": "Block",
                                 "src": "107:12:0"
                             }
                         ],
                         "id": 8,
                         "name": "FunctionDefinition",
                         "src": "84:35:0"
                     },
                     {
                         "attributes": {
                             "constant": false,
                             "implemented": true,
                             "isConstructor": false,
                             "modifiers": [
                                 null
                             ],
                             "name": "send",
                             "payable": true,
                             "scope": 13,
                             "stateMutability": "payable",
                             "superFunction": null,
                             "visibility": "public"
                         },
                         "children": [
                             {
                                 "attributes": {
                                     "parameters": [
                                         null
                                     ]
                                 },
                                 "children": [],
                                 "id": 9,
                                 "name": "ParameterList",
                                 "src": "140:2:0"
                             },
                             {
                                 "attributes": {
                                     "parameters": [
                                         null
                                     ]
                                 },
                                 "children": [],
                                 "id": 10,
                                 "name": "ParameterList",
                                 "src": "150:0:0"
                             },
                             {
                                 "attributes": {
                                     "statements": [
                                         null
                                     ]
                                 },
                                 "children": [],
                                 "id": 11,
                                 "name": "Block",
                                 "src": "150:10:0"
                             }
                         ],
                         "id": 12,
                         "name": "FunctionDefinition",
                         "src": "127:33:0"
                     }
                 ],
                 "id": 13,
                 "name": "ContractDefinition",
                 "src": "48:115:0"
             }
         ],
         "id": 14,
         "name": "SourceUnit",
         "src": "0:165:0"
     },
     "compiler": {
         "name": "solc",
         "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
     },
     "networks": {
         "1517961160332": {
             "events": {},
             "links": {},
             "address": "0x8ff918f7e67fbae7e035a082166c63a4bbda4c8d"
         },
         "1517958404260": {
             "events": {},
             "links": {},
             "address": "0x4c2aec171df00eff60ddccead7e681bf1ef0b6e4"
         },
         "1517959542009": {
             "events": {},
             "links": {},
             "address": "0xf480a6b505e03d7ede09fc9070dde29d57fd7cfa"
         },
         "1517960692874": {
             "events": {},
             "links": {},
             "address": "0x08070689bee5b10f3fedf42b5ea42ba1e5a83c81"
         }
     },
     "schemaVersion": "1.0.1",
     "updatedAt": "2018-02-07T00:49:31.949Z"
 }
export default abi;

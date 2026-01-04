// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract SimpleMappingExample {
    mapping(uint => bool) public mymapping;
    mapping(address => bool) public myaddressmapping;

    function setvalue(uint _index) public {
        mymapping[_index] = true;
    }

    function muaddresstovalue() public {
        myaddressmapping[msg.sender] = true;
    }
}

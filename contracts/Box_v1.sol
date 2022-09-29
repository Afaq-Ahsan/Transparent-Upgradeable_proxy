// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Box_v1{

   uint public value;

   function initialize(uint _val)external{

    value = _val;

   }

}
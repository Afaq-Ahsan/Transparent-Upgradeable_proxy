// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Box_v2{

   uint public value;

//    function initialize(uint _val)external{

//     value = _val;

//    }

function inc()external{
    value+=1;
}

}
/*
LeetCode #1108
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

const defangIPaddr = (address) => {
    return address.replace(/\./g, `[.]`);
};

// 40ms and 33.9mb

defangIPaddr('1.1.1.1');

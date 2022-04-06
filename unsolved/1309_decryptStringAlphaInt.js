/*
LeetCode #1309 - Decrypt String from Alphabet to Integer Mapping - Medium

Given a string s formed by digits ('0' - '9') and '#' . We want to map s to
English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.
*/

const freqAlphabets = (s) => {};

freqAlphabets(`10#11#12`); // jkab
freqAlphabets(`1236#`); // acz
freqAlphabets(`25#`); // y
// eslint-disable-next-line max-len
freqAlphabets(`12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#`); // abcdefghijklmnopqrstuvwxyz

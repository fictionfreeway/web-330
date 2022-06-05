/* 
    Title: watlington-palindrome.js
    Author: William Watlington
    Date: 6/5/2022
    Description: Script for palindrome app
*/

//returns todays date as formatted string
function getTodaysDate() {
    return new Date().toLocaleDateString("en-us");
}

//returns length of given string
function getLength(str) {
    return str.length;
}

//returns reversed string
function reverse(str) {
    let strArr = str.split("");
    let reverseStrArr = strArr.reverse();
    let reverseStr = reverseStrArr.join("");
    return reverseStr;
}

//checks if string is the same forwards and backwards
function isPalindrome(str) {
    let reversedStr = reverse(str);
    if(reversedStr === str) {
        return true;
    } else {
        return false;
    }
}


//checks if user input is string, populates header with date, phrase, reversed phrase, phrase length.
//displays if user input is or is not palindrome
document.getElementById("btnCheckPhrase").onclick = function() {
    let userPhrase = document.getElementById("txtPhrase").value;
    let resultsDiv = document.getElementById("assign-results");
    let headerDiv = document.getElementById("assign-results-header");
    let today = getTodaysDate();
    let len = getLength(userPhrase);
    let reversedPhrase = reverse(userPhrase);
    let header = `Date: ${today} <br> Original Phrase: ${userPhrase} <br> Reversed Phrase: ${reversedPhrase} <br> Phrase Length: ${len}`;
    headerDiv.innerHTML = header;
    if(isPalindrome(userPhrase.toLowerCase()) == true) {
        resultsDiv.innerHTML = `${userPhrase} <span style="text-decoration: underline; font-weight: bold;;">is</span> a palindrome`;
    } else {
        resultsDiv.innerHTML = `${userPhrase} <span style="text-decoration: underline; font-weight: bold;">is not</span> a palindrome`;
    }
} 
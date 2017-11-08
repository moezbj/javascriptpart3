// DO NOT CHANGE THIS

var print = console.log;
var separator = "\n---\n\n";
function areEqualArrays(listA, listB) {
	if (listA.length !== listB.length) return false;
	for (var i = 0; i < listA.length; i++) {
		if (Array.isArray(listA[i]) && Array.isArray(listA[i])) {
			return areEqualArrays(listA[i], listB[i]);
		}
		if (listB.indexOf(listA[i]) === -1) return false; 
	}
	return true;
}


function test(got, expected) {
	var prefix = "";
	var smiley = "";

	if (Array.isArray(got)  && Array.isArray(expected) && areEqualArrays(got, expected)) {
		prefix = "\u{2714} ";
		smiley = " \u{1F600}";
	} 
	else if (got === expected) {
		prefix = "\u{2714} ";
		smiley = " \u{1F600}";
	}
	else {
		prefix = "\u{2716} ";
		smiley = " \u{1F61E}";
	}
	print(prefix + "got: " + got + ", expected: " + expected + smiley)
}

// --------------------------

// Basic algorithmic scripting
print("Basic Algorithmic Scripting");
// Ex 0

/*
	Reverse the provided string.
	You may need to turn the string into an array before you can reverse it.
	Your result must be a string.
*/
function reverseStringV1(str) {
		let res="";
	for(let i = str.length-1; i>=0; i--){
		res+=str[i];
	}
  return res;
}

// Here do the same thing but don't use built-in functions
// such as split/reverse/join

function reverseStringV2(str) {

 return str
 	.split('')
 	.reverse()
 	.join('');
}

print("reverseStringV1");
test(reverseStringV1("Hello World"), "dlroW olleH");
test(reverseStringV1("awesomeString"), "gnirtSemosewa");
test(reverseStringV1("first second"), "dnoces tsrif");
test(reverseStringV1("madam"), "madam");
print(separator);

print("reverseStringV2");
test(reverseStringV2("Hello World"), "dlroW olleH");
test(reverseStringV2("awesomeString"), "gnirtSemosewa");
test(reverseStringV2("first second"), "dnoces tsrif");
test(reverseStringV2("madam"), "madam");
print(separator);

// Ex 1

/*  Factorialize a Number
	Return the factorial of the provided integer.
	If the integer is represented with the letter n,
	a factorial is the product of all positive integers less than or equal to n.
	Factorials are often represented with the shorthand notation n!
	For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
function factorialize(num) {
	var fact=1;
	for(var i=1;i<=num;i++){
		fact*=i;

	}
  return fact;
}

print("factorialize");
test(factorialize(5), 120);
test(factorialize(7), 5040);
test(factorialize(9), 362880);
test(factorialize(11), 39916800);
print(separator);

 // Ex 2

/*  Check for Palindromes
	Return true if the given string is a palindrome. Otherwise, return false.
	A palindrome is a word or sentence that's spelled the same way both forward and backward,
	ignoring punctuation, case, and spacing.
	Note
	You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
	and turn everything lower case in order to check for palindromes.
	We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" 
	among others.
	We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".

*/
function isAlphaNum(c) {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
}

function cleanStr(str) {
  let result = "";
  
  for(let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if(isAlphaNum(currentChar)) {
      result += currentChar;
    }
  }
  
  return result;
}

function palindrome(str) {

		str = str.toLowerCase();
		
    str = cleanStr(str);
  
		let backward = str
      .split('')
      .reverse()
      .join('');
		
		return backward === str
	}
	print("palindrome");
test(palindrome('ab ba'), true);
test(palindrome('ab_ba'), true);
test(palindrome('7ab@ba7'), true);
test(palindrome('race car'), true);
test(palindrome('A man, a plan, a canal. Panama'), true);
test(palindrome('never odd or even'), true);
test(palindrome('nope'), false);
test(palindrome('My age is 0, 0 si ega ym.'), true);
test(palindrome('1 eye for of 1 eye.'), false);
print(separator);




// Ex 3

/*  Find the Longest Word in a String 
	Return the length of the longest word in the provided sentence.
	Your response should be a number.
*/
function findLongestWord(str) {
	var words=str.split(' ');
	var maxlen=words[0].length;
	for(var i=1;i< words.length;i++){
		if(maxlen < words[i].length){
			maxlen = words[i].length;
		}
	}
  return maxlen;
}

print("findLongestWord");
test(findLongestWord('The quick brown fox jumped over the lazy dog'), 6);
test(findLongestWord('May the force be with you'), 5);
test(findLongestWord('Google do a barrel roll'), 6);
test(findLongestWord('What is the average airspeed velocity'), 8);
test(findLongestWord('What if we try a super-long word such as\
	otorhinolaryngology'), 22);
print(separator);

// Ex 4

/*  Title Case a Sentence  
	Return the provided string with the first letter of each word capitalized. 
	Make sure the rest of the word is in lower case.
	For the purpose of this exercise, you should also capitalize 
	connecting words like "the" and "of".
*/
function titleCase(str) {
	 var title=str.split(' ');
	 for (var i = 0; i < title.length; i++) {

 title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1).toLowerCase() ;
}
return title.join(" ");
}
print("titleCase");
test(titleCase('I\'m a little tea pot'), 'I\'m A Little Tea Pot');
test(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
test(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'),
	'Here Is My Handle Here Is My Spout');
print(separator);

// Ex 5

/*  Return Largest Numbers in Arrays  
	Return an array consisting of the largest number from each provided sub-array.
	For simplicity, the provided array will contain exactly 4 sub-arrays.
	Remember, you can iterate through an array with a simple for loop, 
	and access each member with array syntax arr[i].
*/
function largestOfFour() {
		var arr=arguments;
		var arrRes = [];
		for (var i = 0; i < arr.length; i++) {
			var subArr = arr[i];
			var max = subArr[0] ;
			for (var j = 1; j < subArr.length; j++){
				if (max < subArr[j]) {
					max = subArr[j];
				}
			}
		arrRes.push(max);
		}
		return arrRes;
	}
	print('largestOfFour');
	test(largestOfFour([1, 2, 3, 4], [10, 20, 30, 40],
		[100, 200, 300, 400], [1000, 2000, 3000, 4000]), [4, 40, 400, 4000]);
	test(largestOfFour([1, 2, 3, 4], [10, 20, 30, -40],
		[100, -200, 300, -400], [1000, -2000, -3000, -400]), [4, 30, 300, 1000]);
	test(largestOfFour([1, 2, 3, 4], [5, 20, 25, 75],
		[30, -20, 33, 0], [10, 0, 0, 175]), [4, 75, 33, 175]);
	test(largestOfFour([1, 2, 3, 0], [0, 20, 30, -40],
		[10, -200, 3, -400], [100, -2000, 330, -400]), [3, 30, 10, 330]);


print(separator);


// Ex 6

/*  Confirm the Ending
	Check if a string (first argument, str) ends with the given target string 
	(second argument, target).
	This challenge can be solved with the .endsWith() method, 
	which was introduced in ES2015. But for the purpose of this challenge, 
	we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
		var start = str.length - (target.length);
  if(str.substr(start) == target){
     return true;
  } else {
     return false;
  }
}

print("confirmEnding");
test(confirmEnding('Bastian', 'n'), true);
test(confirmEnding('Connor', 'n'), false);
test(confirmEnding('He has to give me a new name', 'name'), true);
test(confirmEnding('Walking on water and developing software from a\
 specification are easy if both are frozen', 'specification'), false);
test(confirmEnding('Open sesame', 'pen'), false);
test(confirmEnding('If you want to save our world, you must hurry.\
 We dont know how much longer we can withstand the nothing', 'mountain'), false);
print(separator);

// Ex 7

/*  Repeat a string repeat a string
	Repeat a given string (first argument) num times (second argument).
	Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
	ch="";
	for(var i=0 ;i<num;i++){
		ch+=str;
	}


  return ch;
}

print("repeatStringNumTimes");
test(repeatStringNumTimes('*', 3), '***');
test(repeatStringNumTimes('*', 8), '********');
test(repeatStringNumTimes('abc', 3), 'abcabcabc');
test(repeatStringNumTimes('abc', -3), '');
print(separator);


/*  Truncate a string
	Truncate a string (first argument) if it is longer than the given maximum
	string length (second argument). 
	Return the truncated string with a ... ending.
	Note that inserting the three dots to the end will add to the string length.
	However, if the given maximum string length num is less than or equal to 3, 
	then the addition of the three dots does not add to the string length 
	in determining the truncated string.
*/
function truncateString(str, num) {
	var ch="";
	var end="";
for(var i=0 ;i<str.length;i++){	
	if(str.length<=num){
	return str
}
	else if(num<3){
		ch=str.slice(0,num);			
		end=ch.slice(0,num);
		return end+"..."
	}
	else if(num>3){
		ch=str.slice(0,num);			
		end=ch.slice(0,-3);
		return end+"..."
		}
	}
}


print("truncateString");
test(truncateString("A-tisket a-tasket A green and yellow basket", 11) , 
	'A-tisket...');
test(truncateString("Peter Piper picked a peck of pickled peppers", 14) ,
	'Peter Piper...');
test(truncateString("A-", 1), 'A...');
test(truncateString("Absolutely Longer", 2) , 'Ab...');
test(truncateString("A-tisket a-tasket A green and yellow basket",
	"A-tisket a-tasket A green and yellow basket".length + 2) , 
	'A-tisket a-tasket A green and yellow basket');
test(truncateString("A-tisket a-tasket A green and yellow basket",
	"A-tisket a-tasket A green and yellow basket".length) ,
	'A-tisket a-tasket A green and yellow basket');
print(separator);

// Ex 9

/*  Chunky Monkey
	Write a function that splits an array (first argument) 
	into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
var	resarray=[];
for(var i=0 ;i<arr.length;i+=size){
	var	array=[];
	for(var j=i ;j<i+size && j<arr.length;j++){
  		array.push(arr[j])
  	}
	resarray.push(array);
}
return resarray
}

// var	resarray=[];
// var	array=[];
// for(var i=0 ;i<arr.length;i+=size){
// resarray.push(arr.slice(i,i+size))
// }
// return resarray

print("chunkArrayInGroups");
test(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]]);
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
print(separator);8

// Ex 10

/*  Slasher Flick
	Return the remaining elements of an array after chopping off n elements from the head.
	The head means the beginning of the array, or the zeroth index.
*/
function slasher(arr, howMany) {
	var res=[];
	for (var i = 0; i < arr.length; i++) {
		res=arr.slice(howMany)
	}
  return res;
}

print("slasher");
test(slasher([1, 2, 3], 2), [3]);
test(slasher([1, 2, 3], 0), [1, 2, 3]);
test(slasher(["burgers", "fries", "shake"], 1), ["fries", "shake"]);
test(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5), ["cheese", 4]);
print(separator);

// Ex 11

/*  Mutations
	Return true if the string in the first element of the array contains all of the letters of the 
	string in the second element of the array.
	For example, ["hello", "Hello"], should return true because all of the letters in the second
	string are present in the first, ignoring case.
	The arguments ["hello", "hey"] should return false because the string "hello" 
	does not contain a "y".
	Lastly, ["Alien", "line"], should return true because all of the letters in "line" 
	are present in "Alien".
*/
function includs(str,c){
	return str.indexOf(c) >= 0;
}

// function mutation(arr) {
// 	let ch1=arr[0].toLowerCase();
// 	let ch2=arr[1].toLowerCase();
// 	for(let i = 0;i< ch2.length; i++) {
// 		if(!includs(ch1,ch2[i])){
// 			return false
// 		}
// 	} 
// 	return true
// }
	// for(var i = 0; i < arr[1].length; i++) {
	// 		if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;}

function mutation(arr) {
	let ch1=arr[0].toLowerCase();
	let ch2=arr[1].toLowerCase();

	ch2.split('').every(Function includs(), arr{
		
	}
	return true
}
print("mutation");
test(mutation(["hello", "hey"]), false);
test(mutation(["hello", "Hello"]), true);
test(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), true);
test(mutation(["Mary", "Army"]), true);
test(mutation(["hello", "neo"]), false);
test(mutation(["voodoo", "no"]), false);
print(separator);
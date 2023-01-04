// day - 05
// question

// 1. print odd number in an array

(function() {

    const num = [10, 22, 13, 44, 15, 96, 47, 18, 19, 11 ]
    const odd = []
    for (let i = 0; i < num.length; i++) {
     if(num[i]%2!=0) {
        odd.push(num[i])
     }  
    }
    console.log(odd)
    
    })();

    // answer => (5) [13, 15, 47, 19, 11]



 // 2. Convert all the strings to title caps in a string array

    (function(str) {

        
        if ((str===null) || (str===''))
        return false;
   else
    str = str.toString();
  
  console.log( str.replace(/\w\S*/g,
 function(txt){return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();}));
        
        })('sharan welcome folks');

    // answer => 'Sharan Welcome Folks'


// 3.Sum of all numbers in an array


var A =[15,85,47,61,62];
             (function(arr) {
        let sum = 0; // initialize sum 
   
        // Iterate through all elements 
        // and add them to sum 
        for (let i = 0; i < arr.length; i++) 
            sum += arr[i]; 
   
        console.log(sum);
    })(A);

    // answer 270

// 4.Return all the prime numbers in an array

(function() {
    const num = [10, 22, 13, 44, 15, 96, 47, 18, 19, 11 ]
    const prime = []
     for (let i = 0; i < num.length; i++) {
        var count = 0;
  
     for(j=2; j<num[i]; j++) {
        
if(num[i]%j==0) {
count++;


    }}if (count==0) {prime.push (num[i]);}

}
    console.log(prime)
})();

// answer =>[13, 47, 19, 11]

// 5.Return all the palindromes in an array
        
(function(str) {

        var p= str

        s = str.split('').reverse().join('');
        if(s==str){console.log(str+' is a palindrome')}
        else{console.log(str+' is not a palindrome')}
        
    })('malayalam');

    // answer => malayalam is a palindrome

    // 6.Return median of two sorted arrays of the same size


    // 7.Remove duplicates from an array

(function() {
    const arr = [11,22,22,6,4,6,20,9]
    var result=new Set(arr);
    console.log(result)

})();

// answer => {11, 22, 6, 4, 20, 9}

// 8.Rotate an array by k times


(function(k) {
    var a = [1,2,3,4,5,6,7,8,9,10]
    for (let i = 0; i < k; i++) {
        a.unshift(a[a.length-1])
        a.pop()
    }
        console.log(a)
        
})(3);

// answer => [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]

// II .Do the below programs in arrow functions.
   
// 1.Print odd numbers in an array
let arr = [10,11,32,74,07,52,08,61,17,]

let odds = arr.filter(n => n%2)

console.log(odds)
// answer=> [11, 7, 61, 17]

// 2.Convert all the strings to title caps in a string array

const str = "hello people";
const newStr = str.split(' ')
   .map(i => i[0].toUpperCase() + i.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);

// answer is => Hello People


// 3.Sum of all numbers in an array

const num = [10, 22, 13, 44, 15, 96, 47, 18, 19, 11 ]
.reduce((partialSum, a) => partialSum + a, 0);
console.log(num);

// answer is => 295

// 4.Return all the prime numbers in an array

hello = ()=>
{ 
    const num = [10, 22, 13, 44, 15, 96, 47, 18, 19, 11 ]
    const prime = []
     for (let i = 0; i < num.length; i++) {
        var count = 0;
  
     for(j=2; j<num[i]; j++) {
        
if(num[i]%j==0) {
count++;


    }}if (count==0) {prime.push (num[i]);}

}
    console.log(prime)
}
hello();

// answer =>[13, 47, 19, 11]

//5. Return all the palindromes in an array
 
palindrome=(str) => 
 {

    var p= str

    s = str.split('').reverse().join('');
    if(s==str){console.log(str+' is a palindrome')}
    else{console.log(str+' is not a palindrome')}
    
};
palindrome('ellel');

// answer => ellel is not a palindrome



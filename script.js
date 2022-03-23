// regex resrouce: https://regex-generator.olafneumann.org/

/** Array.diff - remove duplicate items from two arrays
*** Your goal in this kata is to implement a difference function, 
*** which subtracts one list from another and returns the result.
*** It should remove all values from list a, which are present in list b keeping their order. 
**/ 
function arrayDiff(a,b) {
    return a.filter(item => !b.includes(item));
}

//console.log(arrayDiff([1,2],[1]));

/** FIBONACCI
*** A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square 
*** determine whether a number provided to the function is fibonacci  
**/ 

function productFib(prod){
    //let fibby1 = (5 * (Math.pow(prod,2) + 4));
    //let fibby2 = (5 * (Math.pow(prod,2) - 4));
    //let fib1sqr = Math.sqrt(fibby1);
    //let fib2sqr = Math.sqrt(fibby2);
    //if((fib1sqr * fib1sqr == fibby1) | (fib2sqr * fib2sqr == fibby2)) {
    //} else {
    //    console.log('false');
    //}
    let fibo = [0,1];
    for(x = 0; x < prod; x++) {
        let newNum = fibo[x] + fibo[x+1];
        fibo.push(newNum);
        if(fibo[x] >= prod) {
            break;
        }
    }
    for(i=0; i < fibo.length; i++) {
        let result = []
        if(fibo[i] * fibo[i+1] == prod) {
            result.push(fibo[i], fibo[i+1], true);
            return result;
        } else if (fibo[i] * fibo[i+1] > prod) {
            result.push(fibo[i], fibo[i+1], false);
            return result;
        }
    }
}

// a way better solution for fibonacci

function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

//console.log(productFib(74049690));

// ROMAN NUMERAL CONVERTOR  

// Restarted computer and lost the challenge... saving for next time

function solution(number){
    let numLen = number.toString().length;
    let rN = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
    let rmZero = number.toString().replace(/[0]/g,'');
    let numsArr = rmZero.split("");
    console.log(numLen);
    for(x = 0; x < numsArr.length; x++) {
        console.log(numsArr[x]);
    }
    //return answer;
}

//console.log(solution(2008));


// MORSE CODE DECODER 

function morseCode(morseCode) {
    let alpha = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',
                 J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',
                 S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',
                 1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',
                9:'----.',0:'-----','.':'.-.-.-',",":'--..--','?':'..--..',':':'---...',
                '/':'-..-.','-':'-....-','=':'-...-',"'":'.----.',"_":'..--.-',"!":'-.-.--','&':'.-...',
                '"':'.-..-.',";":'-.-.-.','$':'...-..-',"SOS":'...---...'};
    let msgAry = morseCode.split(" ");
    let result = '';
    for(i = 0; i < msgAry.length; i++) {
        // adding spaces between converted strings
        if(msgAry[i] == '' && msgAry[i+1]) {
            result += ' ';
        } else {
            for (property in alpha) {
            if(alpha[property] == msgAry[i]) {
                    result += property;
                }
            }
        }
    }
    // spent way too much trying to figure out a regex solution 
    // trim was much better solution... 
    let removeSpaces = result.trim();
    return removeSpaces;
}

//console.log(morseCode('         .... . -.--   .--- ..- -.. .'));

// ran aout of time to complete morseCode challenge

// CAMEL CASE 
// Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    // matching any capital letters in a string regex
    let regex = /([A-Z])/g;
    return string.replace(regex, ' $1').trim();
}

//console.log(solution('TheDevilWearsPrada'));

// HASHTAG GENERATOR
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

function generateHashtag (str) {
    //let regex = /\s+/g;
    //let hashTag = str.replace(regex,'');
    //if (hashTag.length >= 141 || hashTag == '#' || hashTag.length == 0) {
    //    return false;
    //} else {
    //    let result = '#' + hashTag;
    //    return result;
    //}
    
    //words = str.split(" ");
    //for (x=0; x < words.length; x++) {
    //    words[x].toUpperCase();
    //}
    //words.join('');
    //return "#" + words;

    let upperCase = str.replace(/(^\w{1})|(\s+\w{1})/g, first => first.toUpperCase());
    let hashTag = upperCase.replace(/\s+/g,'');
    if (hashTag.length >= 140 || hashTag == '#' || hashTag.length == 0) {
        return false;
    } else {
        let result = '#' + hashTag;
        return result;
    }

    return result;
}

console.log(generateHashtag('Do We have A Hashtag'));

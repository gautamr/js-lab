var n = 3.141;
var s1 = 'I say "Hello"';
var s2 = "I'm JavaScript String";
var b = true;
var obj = {
    id: 'ID503',
	name: 'gautamr'
}

var fun = function() {
    console.log('I am inside function fun');
}
var arr = [1, 2, 3.141, 'hello'];
var today = new Date();
var rx1 = /ab+c/;
var rx2 = new RegExp("ab+c");
var objn = null;

try {
    throw new Error();
} catch (e) {
    var err = e;
}

// printing
console.log('printing the values');
console.log(n);
console.log(s1);
console.log(s2);
console.log(b);
console.log(obj);
console.log(fun);
console.log(arr);
console.log(today);
console.log(rx1);
console.log(rx2);
console.log(objn);

(function() {
    console.log('following variable "undef" should be undefined');
	console.log(undef);
})();






function puzzler02() {
    var n = 10.10;
	var s = n.toString();
	var e = n.toExponential();
	var f = n.toFixed();
	
	console.log(s);
	console.log(e);
	console.log(f);
	
	n.foo = 'JavaScript is very very confusing!!';
	console.log(n.foo);
	console.log(typeof n);
	console.log(typeof s);
	console.log(typeof e);
	console.log(typeof f);
}
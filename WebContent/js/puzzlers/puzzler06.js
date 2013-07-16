var a = 'my var';

(function() {
    console.log(a);
	var a = 'local a';
	console.log(a);
})();
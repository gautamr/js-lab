function puzzler01_sol() {
    var arr = [1,2,3];
    var out = [];
    for (var i = 0; i <arr.length; i++) {
        (function(valueToAlert){
            var item = valueToAlert;
            out.push(function(){ alert(item); });
        })(arr[i]);
     }
    out.forEach(function(func){ func(); });
}
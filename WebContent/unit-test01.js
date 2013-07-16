function num(str) {
    var pos = str.indexOf("T");
    var strBeforeBMT = str.substr(0, pos);
    var strAfterBMT = str.substr(pos + 1, str.length - 1);

    return $.isNumeric(strBeforeBMT) && !strAfterBMT && strBeforeBMT;
}
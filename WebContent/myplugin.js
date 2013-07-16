;(function($, window, document, undefined) {
	$.fn.numericVal = function() {		
		var validNumber = function(number, pos) {
			var strBeforeBMT = number.substr(0, pos);
			var strAfterBMT = number.substr(pos+1, number.length-1);
			if((strBeforeBMT == null || strBeforeBMT.length == 0) || ($.isNumeric(strBeforeBMT) == false) || (strAfterBMT != null && strAfterBMT.length > 0))
				return null;

			return strBeforeBMT;
		};
		
		var input = $(this).val();
		if(input.length == 0)
			return null;

		var posOfB = -1;
		posOfB = input.indexOf("B");
		var posOfM = -1;
		posOfM = input.indexOf("M");
		var posOfT = -1;
		posOfT = input.indexOf("T");

		var countBMT = 0;
		if(posOfB >= 0)
			countBMT ++;
		if(posOfM >= 0)
			countBMT ++;
		if(posOfT >= 0)
			countBMT ++;

		// At most one of B, M or T could exist
		if(countBMT > 1)
			return null;

		var val;
		// Format Billion
		if (posOfB >= 0) {
			var number = validNumber(input, posOfB);
			if (number == null)
				return null;
			val = number * 1000000000;
		} else if (posOfM >= 0) {
			var number = validNumber(input, posOfM);
			if (number == null)
				return null;
			val = number * 1000000;
		} else if (posOfT >= 0) {
			var number = validNumber(input, posOfT);
			if (number == null)
				return null;
			val = number * 1000;
		} else
			val = validNumber(input, input.length);

		return val;
	};
}) (jQuery, window, document);
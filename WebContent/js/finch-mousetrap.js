
/**
 * adds a bindGlobal method to Mousetrap that allows you to
 * bind specific keyboard shortcuts that will still work
 * inside a text input field.
 * Taken from https://gist.github.com/ccampbell/3885446
 *
 * usage:
 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
 */
Mousetrap = (function(Mousetrap) {
    var self = Mousetrap,
        _global_callbacks = {},
        _original_stop_callback = Mousetrap.stopCallback;

    self.stopCallback = function(e, element, combo) {
	
	    console.log(element);
        if (_global_callbacks[combo]) {
            return false;
        }

        return _original_stop_callback(e, element, combo);
    };

    self.bindGlobal = function(keys, callback, action) {
        self.bind(keys, callback, action);
        var i;
        if (Array.isArray(keys)){
            for (i = 0; i < keys.length; i++){
                _global_callbacks[keys[i]] = true;
            }
        }else{
            _global_callbacks[keys] = true;
        }
    };

    return self;
} (Mousetrap));
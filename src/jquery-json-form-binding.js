$.fn.jsonToForm = function (data, callbacks) {

    var formInstance = this;

    var options = {

        data: data || null,
        callbacks: callbacks

    };

    if (options.data != null) {
        $.each(options.data, function (k, v) {

            if (options.callbacks != null && options.callbacks.hasOwnProperty(k)) {

                options.callbacks[k](v);

            } else {
                // set values to multi selectable form elements like select/checkbox if value is array
                if (Array.isArray(v)) {
                    var el = $('[name="' + k + '[]"]', formInstance);
                    if (el.length) {
                        el.val(v);
                    } else {
                        console.error('Invalid values passed');
                    }
                } else {
                    $('[name="' + k + '"]', formInstance).val(v);
                }
            }

        });
    }

}
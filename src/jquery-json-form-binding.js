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

                $('[name="' + k + '"]', formInstance).val(v);

            }

        });
    }

}
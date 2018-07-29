$.fn.jsonToForm = function(_options){

	var formInstance = this;

	var options = {

		data: _options.data || null,
		callbacks: _options.callbacks || []

	};

	if ( options.data != null )
	{
		$.each(options.data, function(k, v){

			if ( options.callbacks[k] != null){

				options.callbacks[k](v);

			}else{

				$('[name="'+k+'"]', formInstance).val(v);				

			}

		});
	}

}
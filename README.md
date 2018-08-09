# JQuery-JSON-Form-Fields v 1.2 (UPDATED)
A light weight plugin for binding JSON data to forms. Useful for working with AJAX and forms with large number of fields.

## Usage
Its fairly simple to use. Make a form and call jsonToForm function on it passing json data and your call back as options. 

A simple form:

```
	<form id="myform">
		
		<input type="" name="name">

		<input type="" name="age">

		<input type="" name="gender">

	</form>
```

Now call jsonToForm with JSON object.

```
	var data = {name: "Waleed", age: 23, gender: "Male"};
	$("#myform").jsonToForm(data);
```

If you have a complex form. You can use pass callback functions for each data key you have in your data object like this:

```
var data = {name: "Waleed", age: 23, gender: "Male"};
	$("#myform").jsonToForm(data, {
		// change the way age value will be set in the form
		age: function(value){
				$('[name="age"]').val(value+1);
		}
	});
```

### Suggestions and contributions will be appreciated.
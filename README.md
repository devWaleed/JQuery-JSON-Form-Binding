# !!! NOT MAINTAING ANYMORE !!!
### I have moved to React/Vue apps. Unable to maintain this project any longer. Feel free to fork and use as you like.

# JQuery-JSON-Form-Fields
A light weight plugin for binding JSON data to forms. Useful for working with AJAX and forms with large number of fields.

### Installation

```npm i jquery-json-form-binding```

   or link 'jquery-json-form-binding.js' from src folder
### Usage
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

A form with multi select:

```
	<form id="myform">
		<div class="form-field">
			<h5>
				Text Input
			</h5>
			<input type="" name="name">
		</div>

		<div class="form-field">
			<h5>
				Single Select
			</h5>
			<select name="country">
				<option value="usa">USA</option>
				<option value="uk">UK</option>
				<option value="germany">Germany</option>
			</select>
		</div>

		<div class="form-field">
			<h5>
				Multiple Select
			</h5>
			<select multiple name="skill">
				<option value="html">html</option>
				<option value="css">css</option>
				<option value="javascript">javascript</option>
				<option value="node">node</option>
			</select>
		</div>

		<div class="form-field">
			<h5>
				checkbox example
			</h5>
			<label>
				<input type="checkbox" value="english" name="language" />English</label>
			<label>
				<input type="checkbox" value="french" name="language" />French</label>
			<label>
				<input type="checkbox" value="german" name="language" />German</label>
		</div>


		<div class="form-field">
			<h5>
				Radio example
			</h5>
			<label>
				<input type="radio" value="male" name="sex" />Male</label>
			<label>
				<input type="radio" value="female" name="sex" />Female</label>
		</div>
	</form>
```

Now call jsonToForm with JSON object.

```
	var json = {
		name: "Waleed",
		country: "uk",
		skill: ["html", "javascript"],
		language: ["english", "german"],
		sex: "female"
	};

	$("#myform").jsonToForm(json);
	
	console.log($("#myform").serialize());
```
[Demo](https://jsfiddle.net/sesubash/qmf9djuk/) for multiple selection.

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

##### Suggestions and contributions will be appreciated.

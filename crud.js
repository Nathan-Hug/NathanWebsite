function onFormSubmit() {
	var formData = readFormData(); //get data from from
	insertNewRecord(formData); //adding data from form to table
	resetForm();
}

function readFormData() {
	var formData = {};
	formData["notes"] = document.getElementById("notes").value;
	return formData;
}

//adding data to rows in table
function insertNewRecord(data) {
	var table = document.getElementById("completeNotes").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.notes;
}

// Reset Form
function resetForm () {
	document.getElementById("notes").value="";
}

deleteNoteRow = function () {
	var td = event.target.parentElement; 
	td.remove();
}
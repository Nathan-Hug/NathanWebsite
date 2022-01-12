
var selectedRow = null;

function onFormSubmit() {
	var formData = readFormData(); //get data from form
	if (selectedRow == null) 
		insertNewRecord(formData);
	else 
		updateRecord(formData);
	//insertNewRecord(formData); //adding data from form to table
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
	cell1.id = "notesRow";
	cell1.innerHTML = data.notes;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = '<a id="editNoteButton" class="button" onclick="editNotes(this)">Edit</a>';
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = '<a id="deleteNoteButton" class="button" onclick="deleteNotes(this)">Delete</a>';
}

function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.notes;
}

function editNotes(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("notes").value = selectedRow.cells[0].innerHTML;
	document.getElementById("notes").focus();
}


// Reset Form
function resetForm () {
	document.getElementById("notes").value="";
	document.getElementById("notes").focus();
	selectedRow = null;
}

deleteNotes = function () {	
	var tr = event.target.parentElement.parentElement; 
	tr.remove();
}
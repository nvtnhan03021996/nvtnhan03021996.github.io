function saveData {
	 var fname = document.getElementById("fname").value;
	 alert(fname);
	 sessionStorage.fname = fname;
}
function init() {
	var reForm = document.getElementById("registerForm")
	reForm.onsubmit = saveData;
}

window.onload = init;
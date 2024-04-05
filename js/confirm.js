function init() {
	var fname =  document.getElementById("confirm_fname")
	var lname =  document.getElementById("confirm_lname")
	var yearb =  document.getElementById("confirm_yearb")
	var gender =  document.getElementById("confirm_gender")
	var phone =  document.getElementById("confirm_phone")

	lname = sessionStorage.getItem("lname");
	name.textContent = sessionStorage.fname + " " + lname;
	yearb.textContent = sessionStorage.yearb;
	gender.textContent = sessionStorage.gender;
	phone.textContent = sessionStorage.phone;
}

window.onload = init;

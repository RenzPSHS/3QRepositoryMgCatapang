function validateForm() {
  const name = document.forms["myForm"]["name"].value;
  if (username == "") {
    alert("Name must be filled out");
    return false;
  }
  return true;
}

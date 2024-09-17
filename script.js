


function getFormvalue() {
    //Write your code here
	 // Prevent the form from submitting
    event.preventDefault();

    // Get the form element
    var form = document.getElementById('form1');

    // Get the values of the first and last name
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Print the first and last name using alert
    alert(firstName + " "+ lastName);

}

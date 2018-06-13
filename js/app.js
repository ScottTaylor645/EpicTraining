function validate(form_id, email) {
    var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;

    if (reg.test(address) == false) {
        alert('Invalid Email Address. Please enter a valid Email.');
        document.forms[form_id].elements[email].focus();

        return false;
    } else {
        alert('The Email Sent Successfully!')
    }
}
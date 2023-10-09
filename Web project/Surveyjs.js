function submitForm() {
    const form = document.getElementById('surveyForm');
    if (form.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelectorAll('input[name="gender"]:checked').length > 0 ?
            document.querySelectorAll('input[name="gender"]:checked')[0].value :
            "Not specified";
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const popupContent = document.getElementById('popup-content');
        popupContent.innerHTML = `
            <h2>Survey Form Data</h2>
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Country: ${country}</p>
            <p>Gender: ${gender}</p>
            <p>Profession: ${profession}</p>
            <p>Email: ${email}</p>
            <p>Mobile Number: ${mobile}</p>
        `;

        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        form.reset();
    } else {
        alert('Please fill in all the required fields.');
    }
}

function resetForm() {
    const form = document.getElementById('surveyForm');
    form.reset();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

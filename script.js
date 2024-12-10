document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    // Get the selected date of birth from the input field
    const dob = new Date(document.getElementById('dob').value);

    // Get the current date
    const today = new Date();

    // Calculate the age difference in years
    let age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday has passed this year or not
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // If the birthday hasn't occurred yet this year, subtract 1 from the age
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Display the result in the 'age' element
    document.getElementById('age').textContent = age;
});

// script.js

// Function to fetch valid data from JSON file and validate user input
async function fetchValidData() {
    try {
        const response = await fetch('data.json'); // Path to your JSON file
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching valid data:', error);
        return {};
    }
}

document.getElementById('rollForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const rollno = document.getElementById('rollno').value.trim(); // Trim any whitespace
    const input32 = document.getElementById('input32').value.trim(); // Trim any whitespace

    const { validRollNumbers, validLink } = await fetchValidData();

    // Validate inputs
    if (rollno && input32) {
        if (validRollNumbers[rollno] === input32) { // Use strict equality check (===)
            // Show the link if valid
            document.getElementById('message').innerText = '';
            const linkContainer = document.getElementById('linkContainer');
            linkContainer.innerHTML = `<a href="${validLink}" target="_blank">https://drive.google.com/drive/folders/1fEUG1aw0GyP_BWSnM9onFETmMva_AtE3?usp=sharing</a>`;
        } else {
            document.getElementById('message').innerText = 'Wrong Key';
            document.getElementById('linkContainer').innerHTML = ''; // Clear link if invalid
        }
    } else {
        document.getElementById('message').innerText = 'Please fill out both fields.';
        document.getElementById('linkContainer').innerHTML = ''; // Clear link if fields are empty
    }
});


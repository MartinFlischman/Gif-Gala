document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvpForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch user inputs
        const email = form.elements.email.value;
        const attendance = form.elements.attendance.value;

        // Add your logic for form submission and display confirmation message here
        if (attendance === 'yes') {
            // Display message for attendees
            displayConfirmationMessage(`Thank you for RSVPing to the GIF Gala! We can't wait to see you there!`, 'green');
        } else if (attendance === 'no') {
            // Display message for non-attendees
            displayConfirmationMessage(`We're sorry to hear you can't make it. We hope to see you at the next event!`, 'red');
        }
    });

    function displayConfirmationMessage(message, backgroundColor) {
        // Update message text and background color
        confirmationMessage.innerHTML = `<p>${message}</p>`;
        confirmationMessage.style.backgroundColor = backgroundColor;

        // Show the confirmation message div
        confirmationMessage.style.display = 'block';
    }
});

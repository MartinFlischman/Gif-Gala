// Get the form element and confirmation message element
const rsvpForm = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');
const body = document.body;

// Function to set background image
function setBackgroundImage(url) {
  document.body.style.backgroundImage = url ? `url("${url}")` : 'none';
}

// Add event listener to the form submission
rsvpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the selected attendance value
  const attendance = document.getElementById('attendance').value;

  // Display confirmation message based on attendance selection
  if (attendance === 'yes') {
    confirmationMessage.innerHTML = '🎉 Party on! We look forward to seeing you at the GIF Gala!';
    body.style.backgroundImage = 'url("https://media.giphy.com/media/bZQuYd8U3Vqfe/giphy.gif")'
  } else {
    confirmationMessage.innerHTML = `😔 We're sorry that you can't make it. We hope to see you at the next event!`;
    body.style.backgroundImage = 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWFtenZ0ejNkdzI5cDE4MjB4amY3OTViaDJvMTN4NTc4aGFjeXkxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11xVhnKOKtAj5e/giphy.gif")'
  }

  // Show the confirmation message
  confirmationMessage.style.display = 'block';

  // Reset the form
  rsvpForm.reset();
});

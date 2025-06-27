const form = document.getElementById('feedbackForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const feedback = document.getElementById('feedback').value.trim();

      if (!name || !email || !feedback) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields!";
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email!";
        return;
      }

      message.style.color = "green";
      message.textContent = "Thank you! Your feedback has been submitted.";

      form.reset(); // Clear the form
    });
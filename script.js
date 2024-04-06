document.addEventListener("DOMContentLoaded", function() {
    const messages = document.querySelectorAll(".msg");
    let index = 0;

    function showMessage() {
        if (index < messages.length) {
            messages[index].style.display = "block";
            index++;
            setTimeout(showMessage, 1000); // Adjust the delay between messages (in milliseconds)
        }
    }

    // Call showMessage function when the page is loaded
    showMessage();
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    const user = { name, email };
  
    // Get existing users from localStorage or empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Push new user
    users.push(user);
  
    // Simulate AJAX POST
    fakeAjaxPost(user, () => {
      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(users));
  
      // Redirect to listing page
      window.location.href = "users.html";
    });
  });
  
  // Fake AJAX POST simulation
  function fakeAjaxPost(data, callback) {
    console.log("POSTing data:", data);
    setTimeout(callback, 500); // simulate delay
  }
  
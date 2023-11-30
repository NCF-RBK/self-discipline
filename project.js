var users = [
    { username: "achref.farhat", password: "123456789" },
    { username: "khaled.nacef", password: "987654321" },
    ]

    password.addEventListener("click", password)

    function password() {
var username = document.getElementById("username").value
var password = document.getElementById("password").value
var message = document.getElementById("message")
    for (var i = 0; i < users.length; i++) {
       if (users[i].username === username && users[i].password === password) {
    message.textContent = "Login successful!"
    window.location.replace("project1.html")
    } else {
    message.textContent = "Incorrect username or password. Please try again."
        }
    } 
}
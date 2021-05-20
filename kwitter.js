function addUser(){
    username = document.getElementById("user_name").nodeValue;
    localStorage.setItem("Username", username)
    window.location = "kwitter_room.html"
}
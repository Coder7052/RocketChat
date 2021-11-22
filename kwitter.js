var login_div = document.getElementById("login_div");

function Add(){
    if (document.getElementById("user_name").value == ""){

    }
    else{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
    }
}


const input = document.getElementById("password");
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = 12;

function createPass(){
    let password = "";
    input.value = "";
    for(var i=0;i<12;i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    input.value = password;
    document.querySelector(".msg").innerHTML = "";

}

function copyPass(){
    input.select();
    document.execCommand("copy");
    document.querySelector(".msg").innerHTML = "Password copied."
}
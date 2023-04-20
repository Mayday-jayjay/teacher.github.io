const button = document.getElementById("toggle"),
        data = document.getElementById("data");  
const body = document.querySelector("body");

button.onclick=function(){
    button.classList.toggle('dark');
    body.classList.toggle('dark');
    data.classList.toggle('dark');
}

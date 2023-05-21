// let _user = window.prompt("Enter the user name");
// if(_user.toUpperCase() == "NIZX"){
//     let _pass = window.prompt("Enter the password");
//     if(_pass == "nizz42" || null){
//         window.confirm("Hello Master Nizz");
//     }
//     else{
//         document.querySelector("html").textContent = "Incorrect password";
//     }
// }
// else{
//     document.querySelector("html").textContent = "You are not the corect user";
// }
// let _usname = window.prompt("Enter Your Name");
// document.getElementById("NizX").textContent = _usname ;

// for(var i = 1 ; i<= 10; i++){
//     let prod = "122 *" + i + " = " + 122*i;
//     console.log(prod);
// }

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.bars');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
  document.querySelector('.bar').classList.toggle('cross');
});

const sendButton = document.getElementById('input');
sendButton.addEventListener('click', () => {
  menu.classList.toggle('show');
  document.querySelector('.bar').classList.toggle('cross');
});

let heading = document.createElement('p');
let bod = document.querySelector('body');
bod.style.cssText = "background-color: blue;";
heading.textContent = "This is me ofcourse";
bod.appendChild(heading);
for(i=0; i<3; i++){
    document.getElementsByClassName('demo')[i].style.backgroundColor = "red";  
}
  
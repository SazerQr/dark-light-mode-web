const toggleButton = document.querySelector("input[type = 'checkbox']");
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageSwitch(color){
    image1.src = `img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;
}

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    document.getElementById("moon").style.display = 'inline';
    document.getElementById("sun").style.display = 'none';
    toggleIcon.children[0].textContent = "Dark Mode";
    imageSwitch('dark');
}

function lightMode(){
    
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    document.getElementById("moon").style.display = 'none';
    document.getElementById("sun").style.display = 'inline';
    toggleIcon.children[0].textContent = "Light Mode";
    
    imageSwitch('light');
}

function darkLightMode(event){
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
        localStorage.setItem("theme", "dark");
    }else{
        document.documentElement.setAttribute("data-theme", "light");
        lightMode();
        localStorage.setItem("theme", "light");
    }
}

toggleButton.addEventListener("change", darkLightMode);

const currentTheme = localStorage.getItem("theme");

if(currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme);
    if(currentTheme==='dark'){
        toggleButton.checked = true;
        darkMode();
    }
}
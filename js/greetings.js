const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const weathered = document.querySelector("#weather");
const todoForm = document.querySelector("#todoform");
const quoted = document.querySelector("#quotes");
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const USERNAME_KEY = "username";


function paintGreetings(USERNAME_KEY) {
  greeting.classList.remove("hidden");
  weathered.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  quoted.classList.remove("hidden");
  if (hours < 12) {
    if ( hours >= 0, hours < 4) {
      greeting.innerText = `Good night, ${USERNAME_KEY}`;
    } else {
      greeting.innerText = `Good morning, ${USERNAME_KEY}`;
    } 
  } else {
    if ( hours >= 12, hours < 18 ) {
      greeting.innerText = `Good afternoon, ${USERNAME_KEY}`;      
    } else {
      greeting.innerText = `Good evening, ${USERNAME_KEY}`;        
    }
  }  
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
  loginForm.classList.add("hidden");
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);




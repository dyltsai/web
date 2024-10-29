// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHuWgZotD56b-5wLzCyiEPFrDXSgT1F_0",
  authDomain: "asdasdasdasdasas-60b00.firebaseapp.com",
  projectId: "asdasdasdasdasas-60b00",
  storageBucket: "asdasdasdasdasas-60b00.appspot.com",
  messagingSenderId: "494982887134",
  appId: "1:494982887134:web:d7f4f746d65063087fb44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

this.db = app.firestore.(app);
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function setName() {
    const username = document.getElementById('username').value;
    if (username) {
        setCookie('username', username, 7);
        document.getElementById('namePrompt').style.display = 'none';
        startGame(username);
    }
}

function startGame(username) {
    document.getElementById('displayName').innerText = username;
    document.getElementById('gameArea').style.display = 'block';
    updateScoreboard();
}

function incrementScore() {
    const username = getCookie('username');
    let score = parseInt(getCookie(username)) || 0;
    score++;
    setCookie(username, score, 7);
    document.getElementById('scoreDisplay').innerText = `Your Score: ${score}`;
    updateScoreboard();
    repositionButton();
}

function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '<h2>Scoreboard</h2>';
    const cookies = document.cookie.split('; ');

    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name && value && name !== 'username') {
            scoreboard.innerHTML += `<p>${decodeURIComponent(name)}: ${decodeURIComponent(value)}</p>`;
        }
    });
}

function repositionButton() {
    const button = document.getElementById('pressMeButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

// Check if username cookie exists
const existingUser = getCookie('username');
if (existingUser) {
    startGame(existingUser);
}


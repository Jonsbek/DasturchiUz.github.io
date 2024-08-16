document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const codeDisplay = document.getElementById('codeDisplay');
    const uploadContainer = document.getElementById('uploadContainer');
    const chatContainer = document.getElementById('chatContainer');
    const closeCodeBtn = document.getElementById('closeCodeBtn');
    const registrationMenu = document.getElementById('registrationMenu');
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.getElementById('registrationMessage');

    // Check if the user is already registered
    if (localStorage.getItem('registered') === 'true') {
        registrationMenu.style.display = 'none';
    } else {
        registrationMenu.style.display = 'flex';
    }

    btn1.add

    
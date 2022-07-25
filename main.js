//Collecting DOM elements.

const time = document.getElementById('time'),
    greetings = document.getElementById('greetings'),
    sname = document.getElementById('sname'),
    focus = document.getElementById('focus');

//Show Time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Setting AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 hour format

    hour = hour % 12 || 12;

    //Output Time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add Zero to single digit numbers

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function Greet() {
    let today = new Date()
    if (today.getHours < 12) {
        document.getElementById('greetings');
        greetings.innerHTML = "Good Morning"
    }
    if (today.getHours < 18) {
        document.getElementById('greetings');
        greetings.innerHTML = "Good Night"
    }
}

// Set Backgroud and Greeting

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
        console.log(hour)

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('Morning.jpg')";
        greetings.textContent = 'Good Morning';
    }
    else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('Afternoon.jpg')";
        greetings.textContent = 'Good Afternoon';
    }
    else {

        //Night

        document.body.style.backgroundImage = "url('Night.jpg')";
        greetings.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

// Get Name

function getName() {
    if (localStorage.getItem('sname') === null) {
        sname.textContent = '[Enter Name]';
    } else {
        sname.textContent = localStorage.getItem('sname')
    }
}

//Set Name

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('sname', e.target.innerText);
            sname.blur()
        }
    }
    else {
        localStorage.setItem('sname', e.target.innerText);
    }
}

//Get Focus

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

//Set Focus

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur()
        }
    }
    else {
        localStorage.setItem('focus', e.target.innerText);
    }
}
sname.addEventListener('keypress', setName);
sname.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run this

showTime();
setBgGreet();
getName();
getFocus();
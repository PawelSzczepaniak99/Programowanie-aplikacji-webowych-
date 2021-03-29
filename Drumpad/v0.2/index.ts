let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;
let padBomm = document.getElementById("padBoom");
let padClap = document.getElementById("padClap");
let padKick = document.getElementById("padKick");
let padSanare = document.getElementById("padSnare");
let padHihat = document.getElementById("padHihat");
let padOpenhat = document.getElementById("padOpenhat");
let padRide = document.getElementById("padRide");
let padTink = document.getElementById("padTink");
let padTom = document.getElementById("padTom");

let recordButton1 = document.getElementById("channel1Play");
let recordButton2 = document.getElementById("channel2Play");
let recordButton3 = document.getElementById("channel3Play");
let recordButton4 = document.getElementById("channel4Play");

let isRec = false;


const channel1: any[] = [];
appStart();

function appStart(): void {
    document.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#channel1Play')
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
    
    
}
function onChannel1Play(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)

        })
        
    
}

function getAudioElements(){
    clapSound = document.querySelector('[data-sound="clap"]')
    kickSound = document.querySelector('[data-sound="kick"]')
    snareSound = document.querySelector('[data-sound="snare"]')
    hihatSound = document.querySelector('[data-sound="hihat"]')
    openhatSound = document.querySelector('[data-sound="openhat"]')
    rideSound = document.querySelector('[data-sound="ride"]')
    boomSound = document.querySelector('[data-sound="boom"]')
    tinkSound = document.querySelector('[data-sound="tink"]')
    tomSound = document.querySelector('[data-sound="tom"]')
}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    
    channel1.push({key, time})
    playSound(key);
    console.log(channel1);
}

function playSound(key: string): void {
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
            alert("Tutaj nie ma żadnego dzwięku!")
            break;
    }

   
}


padBomm.addEventListener('click', function(){
    boomSound.play();
    console.log("padboom");
     boomSound.currentTime = 0;
    })

padClap.addEventListener('click', function(){
    clapSound.play()
    clapSound.currentTime = 0;
})
padKick.addEventListener('click', function(){
    kickSound.play();
    kickSound.currentTime = 0;
})
padSanare.addEventListener('click', function(){
    snareSound.play();
    snareSound.currentTime = 0;
})
padHihat.addEventListener('click', function(){
    hihatSound.play();
    hihatSound.currentTime = 0;
})
padOpenhat.addEventListener('click', function (){
    openhatSound.play()
    openhatSound.currentTime = 0;
    
})
padRide.addEventListener('click', function(){
    rideSound.play()
    rideSound.currentTime = 0;
})
padTink.addEventListener('click', function() {
    tinkSound.play()
    tinkSound.currentTime = 0;
    
})
padTom.addEventListener('click', function(){
    tomSound.play()
    tomSound.currentTime = 0;
})

recordButton1.addEventListener("click", function () {
    if(!isRec)
    {
        recordButton1.classList.add("rec")
        isRec = true;

    }
    else if(isRec)
    {
        recordButton1.classList.remove("rec")
        isRec = false;
    }
} )

recordButton2.addEventListener("click", function () {
    if(!isRec)
    {
        recordButton2.classList.add("rec")
        isRec = true;

    }
    else if(isRec)
    {
        recordButton2.classList.remove("rec")
        isRec = false;
    }
} )

recordButton3.addEventListener("click", function() {
    if(!isRec)
    {
        recordButton3.classList.add("rec")
        isRec = true;
    }
    else if(isRec)
    {
        recordButton3.classList.remove("rec")
        isRec = false;
    }
    
})

recordButton4.addEventListener("click", function() {
    if(!isRec)
    {
        recordButton4.classList.add("rec")
        isRec = true;
    }
    else if(isRec)
    {
        recordButton4.classList.remove("rec")
        isRec = false;
    }

})
let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;

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
    
    }

    
}

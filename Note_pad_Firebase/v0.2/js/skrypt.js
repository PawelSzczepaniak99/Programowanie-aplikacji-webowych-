//FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyDdUVyhndesmBdWChPMwk2Rar58SIe2h58",
    authDomain: "notepad-8263e.firebaseapp.com",
    projectId: "notepad-8263e",
    storageBucket: "notepad-8263e.appspot.com",
    messagingSenderId: "520607171850",
    appId: "1:520607171850:web:8a136cff0ad514f25e66f3"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//END FIREBASE

let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#addNewNote")
let submitForm = document.querySelector("#submitButton")
let tasksID = document.querySelector('#noteContainer')
let firebaseTest = document.querySelector('#firebaseTest')

// class Note {
//     constructor(){
//         let dropdown = document.querySelector("select")
//         let date = new Date()
//         let fullDate = "Data dodania: " + date.getDate() + "." + date.getMonth()+1 + "." + date.getFullYear() + "\t\t"+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

//         // let data = {
//         // 'title': document.querySelector("#title").value,
//         // 'value': document.querySelector("#value").value,
//         // 'date': fullDate,
//         // 'color': dropdown.options[dropdown.selectedIndex].value
//         // }
//         // localStorage.setItem(localStorage.length + 1, JSON.stringify(data))

//         db.collection("notes").add({
//             title: document.querySelector("#title").value,
//             value: document.querySelector("#value").value,
//             date: fullDate,
//             color: dropdown.options[dropdown.selectedIndex].value
//         })
//         .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });
//     }  
// }


addNoteButton.addEventListener('click', function(){
    if(popup.style.display == "none")
    {
        popup.style.display = "block"
    }
    else
    {
        popup.style.display = "none"
    }
})


submitForm.addEventListener("click", (e) => {
    //żeby sie nie przeładowało
    e.preventDefault();
    let dropdown = document.querySelector("select")
    let date = new Date()
    let fullDate = "Data dodania: " + date.getDate() + "." + date.getMonth()+1 + "." + date.getFullYear() + "\t\t"+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    db.collection("notes").add({
        title: document.querySelector("#title").value,
        value: document.querySelector("#value").value,
        date: fullDate,
        color: dropdown.options[dropdown.selectedIndex].value
    })
    .then((docRef) => {
        console.log("Dodano");
    })
    .catch((error) => {
        console.error("Bład: ", error);
    });

    //żeby sie przeładowało po czasie
    setTimeout(() => {location.reload()}, 500);
})


    // document.onload(() => {
    //     db.collection("notes").get().then((data) => {
    //         data.forEach((doc) => {
    //             console.log(doc.id);
    //             let divForTask = document.createElement("div")
    //             divForTask.classList.add("task")
    //             let h2ForTitle = document.createElement("h2")
    //             h2ForTitle.innerText = doc.id
    //             divForTask.appendChild(h2ForTitle)
    //             tasksID.appendChild
    //         });
    //     });
    // })




// function displayNote(retrievedObject, i){
//     let divForTask = document.createElement("div")
//     divForTask.style.backgroundColor = retrievedObject.color
//     divForTask.classList.add("task")
//     tasksID.appendChild(divForTask)
//     remove(i,divForTask)
//     pinOnTopButton(divForTask)

//     let h2ForTitle = document.createElement("h2")
//     h2ForTitle.innerText = retrievedObject.title
//     divForTask.appendChild(h2ForTitle)

//     let placeForValue = document.createElement("h4")
//     placeForValue.innerText = retrievedObject.value
//     divForTask.appendChild(placeForValue)

//     let placeForDate = document.createElement("h5")
//     placeForDate.innerText = retrievedObject.date
//     divForTask.appendChild(placeForDate)
// }


// for(i in localStorage)
// {
//     let retrievedObject = JSON.parse(localStorage.getItem(i))
//     displayNote(retrievedObject, i)
// }


function pinOnTopButton(divForTask){
    let button = document.createElement("div")
    button.classList.add("pinontop")
    button.innerText = "Przypnij notkę"
    divForTask.appendChild(button)
    
    button.addEventListener("click", function(){
        this.parentNode.parentNode.prepend(this.parentNode)
    })
}


function remove(id,divForTask) {
    let exitButton = document.createElement("div")
    exitButton.classList.add("exitButton")
    divForTask.appendChild(exitButton)
    let cross1 = document.createElement("div")
    let cross2 = document.createElement("div")
    cross1.classList.add("cross1")
    cross2.classList.add("cross2")

    exitButton.appendChild(cross1)
    exitButton.appendChild(cross2)
    exitButton.addEventListener("click", function(){
        if (confirm('Czy na pewno usunąć tę notatkę?')) {
            localStorage.removeItem(id)
            location.reload()
        }
    })
}
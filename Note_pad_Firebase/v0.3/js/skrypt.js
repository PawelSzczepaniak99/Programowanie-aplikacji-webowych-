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
let deleteAll = document.querySelector('#deleteAll')



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
    let fullDate = `Data dodania: ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${ date.getMinutes()}:${date.getSeconds()}`;

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



window.onload = function() {
    db.collection("notes").get().then((query) => {
        query.forEach((doc) => {
            // console.log(doc.data());
            console.log(doc.id);
            let divForTask = document.createElement("div");
            divForTask.style.backgroundColor = doc.data().color;
            divForTask.classList.add("task");
            tasksID.appendChild(divForTask);

            let deleteButton = document.createElement("button");
            deleteButton.id = doc.id;
            deleteButton.innerHTML = "X";
            deleteButton.classList.add("deleteButton");
            divForTask.appendChild(deleteButton);
            deleteButton.addEventListener("click", (e) => deleteFunction(e.target.id))

            let h2ForTitle = document.createElement("h2");
            h2ForTitle.innerText = doc.data().title;
            divForTask.appendChild(h2ForTitle)

            let placeForValue = document.createElement("h4");
            placeForValue.innerText = doc.data().value;
            divForTask.appendChild(placeForValue);

            let placeForDate = document.createElement("h5");
            placeForDate.innerText = doc.data().date;
            divForTask.appendChild(placeForDate);
        })
    })
}

const deleteFunction = (id) => {
    db.collection("notes").get().then((query) => {
        query.forEach((doc) => {
            db.collection("notes").doc(id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
            
        })
    })
    setTimeout(() => {location.reload()}, 500);
}


deleteAll.addEventListener("click", () => {

    db.collection("notes").get().then((query) => {
        query.forEach((doc) => {
            console.log(doc.id);
            db.collection("notes").doc(doc.id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
            
        })
    })
    setTimeout(() => {location.reload()}, 500);
})

// function pinOnTopButton(divForTask){
//     let button = document.createElement("div")
//     button.classList.add("pinontop")
//     button.innerText = "Przypnij notkę"
//     divForTask.appendChild(button)
    
//     button.addEventListener("click", function(){
//         this.parentNode.parentNode.prepend(this.parentNode)
//     })
// }

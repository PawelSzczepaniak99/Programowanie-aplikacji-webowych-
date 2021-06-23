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
//   console.log();

// const firebaseTest = document.querySelector("#firebaseTest")
// // const title = document.querySelector("#title")
// // const content = document.querySelector("#content")

// firebaseTest.addEventListener("click", () => {
//     db.collection("notes").add({
//         Content: title.value,
//         Title: content.value
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
// })


var addNoteButton = document.querySelector("#buttonAddNote");
var popup = document.querySelector("#addNewNote");
var submitForm = document.querySelector("#submitButton");
var tasksID = document.querySelector('#noteContainer');
var Note = /** @class */ (function () {
    function Note() {
        var dropdown = document.querySelector("select");
        var date = new Date();
        var fullDate = "Data dodania: " + date.getDate() + "." + date.getMonth() + 1 + "." + date.getFullYear() + "\t\t" + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        var data = {
            'title': document.querySelector("#title").value,
            'value': document.querySelector("#value").value,
            'date': fullDate,
            'color': dropdown.options[dropdown.selectedIndex].value
        };
        localStorage.setItem((localStorage.length + 1).toString(), JSON.stringify(data));
    }
    return Note;
}());
addNoteButton.addEventListener('click', function () {
    if (popup.style.display == "none") {
        popup.style.display = "block";
    }
    else {
        popup.style.display = "none";
    }
});
submitForm.addEventListener("click", function () {
    var note = new Note();
});
function displayNote(retrievedObject, i) {
    var divForTask = document.createElement("div");
    divForTask.style.backgroundColor = retrievedObject.color;
    divForTask.classList.add("task");
    tasksID.appendChild(divForTask);
    remove(i, divForTask);
    pinOnTopButton(divForTask);
    var h2ForTitle = document.createElement("h2");
    h2ForTitle.innerText = retrievedObject.title;
    divForTask.appendChild(h2ForTitle);
    var placeForValue = document.createElement("h4");
    placeForValue.innerText = retrievedObject.value;
    divForTask.appendChild(placeForValue);
    var placeForDate = document.createElement("h5");
    placeForDate.innerText = retrievedObject.date;
    divForTask.appendChild(placeForDate);
}
for (var i in localStorage) {
    var retrievedObject = JSON.parse(localStorage.getItem(i));
    displayNote(retrievedObject, i);
}
function pinOnTopButton(divForTask) {
    var button = document.createElement("div");
    button.classList.add("pinontop");
    button.innerText = "Przypnij notkę";
    divForTask.appendChild(button);
    button.addEventListener("click", function () {
        this.parentNode.parentNode.prepend(this.parentNode);
    });
}
function remove(id, divForTask) {
    var exitButton = document.createElement("div");
    exitButton.classList.add("exitButton");
    divForTask.appendChild(exitButton);
    var cross1 = document.createElement("div");
    var cross2 = document.createElement("div");
    cross1.classList.add("cross1");
    cross2.classList.add("cross2");
    exitButton.appendChild(cross1);
    exitButton.appendChild(cross2);
    exitButton.addEventListener("click", function () {
        if (confirm('Czy na pewno usunąć tę notatkę?')) {
            localStorage.removeItem(id);
            location.reload();
        }
    });
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var addNoteButton = document.querySelector("#buttonAddNote");
var popup = document.querySelector("#addNewNote");
var submitForm = document.querySelector("#submitButton");
var tasksID = document.querySelector('#noteContainer');
var firebase_1 = require("firebase");
var config_1 = require("./config");
var firebaseApp = firebase_1["default"].initializeApp(config_1.firebaseConfig);
var db = firebaseApp.firestore();
var note = {
    title: 'Second note',
    contenet: "Second note content from code"
};
function addNote(note) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db.collection('notes').add(note)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteNote(id) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db.collection('notes').doc(id)["delete"]()];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateNote(id, note) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db.collection('notes').doc(id).update(note)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getNote(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db.collection("notes").doc(id).get()];
        });
    });
}
addNote(note);
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

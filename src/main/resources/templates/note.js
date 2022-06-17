function showAllNoteCards() {
    const cardRow = document.getElementById("noteRow");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/api/notes/show', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let allData = JSON.parse(this.responseText);
            var row = "";
            for (var i = 0; i < allData.length; i++) {
                row += '<div class="col-12 col-md-6 col-lg-3 mb-3"><div class="card">'
                    + '<div class="card-body">'
                    + '<h5 class="card-title" style="border-bottom: 1px solid gray">' + allData[i].topicName + '</h5>'
                    + '<p class="card-text" onload="minimizeText()" id="words" style="height: 120px; overflow: hidden;">'
                    + allData[i].note
                    + '</p>'
                    + '<button class="btn btn-primary" value="' + allData[i].id + '" id="edit-btn" onclick="getNoteById(this.value)" data-bs-toggle="modal" data-bs-target="#exampleModals">UPDATE<i class="fa-solid fa-pen-to-square"></i></button>&nbsp;&nbsp;'
                    + '<button class="btn btn-danger delete-btn" value="' + allData[i].id + '" id="delete-btn" onclick="deleteNote(this.value)"><i class="fa-solid fa-trash">DELETE</i></button>'
                    + '</div>'
                    + '</div></div>'
                cardRow.innerHTML = row;
            }
        }
    }
    xhr.send();
};

// setInterval(showAllCards, 2000);

function refreshFunction() {
    showAllNoteCards();
}

// Insert Data in Page===========================================================
// document.querySelector(".insert").addEventListener('submit', (e) => {
//     e.preventDefault();
//     var xhr = new XMLHttpRequest();
//     var name = document.getElementById('form-name').value;
//     var notes = document.getElementById('form-note').value;
//     xhr.open('POST', 'http://localhost:8080/api/notes/add', true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.onload = function () {
//         if (this.status == 200) {
//             showAllCards();
//         }
//     }
//     var param = {
//         topicName: name,
//         note: notes
//     }
//     var params = JSON.stringify(param);
//     xhr.send(params);
//     clearField();
// });

function clearField() {
    var name = document.getElementById('form-name').value = '';
    var notes = document.getElementById('form-note').value = '';
}

function clearFields() {
    var name = document.getElementById('form-names').value = '';
    var notes = document.getElementById('form-notes').value = '';
    var ids = document.getElementById('form-ids').value = '';
}


function deleteNote(el) {
    var order = confirm("Are you sure!!!");
    if (order == true) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'http://localhost:8080/api/notes/delete/' + el, true);
        xhr.onload = function () {
            if (this.status == 200) {
                showAllNoteCards();
            }
        }
        xhr.send();
    }
}

// Get single User By Id===========================================
function getNoteById(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/api/notes/notes/' + id, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var jsObject = JSON.parse(this.responseText);
            console.log(jsObject);
            var myName = document.getElementById('form-names').value = jsObject.topicName;
            var myNotes = document.getElementById('form-notes').value = jsObject.note;
            var myIds = document.getElementById('form-ids').value = jsObject.id;
        }
    }
    xhr.send();
}

function update() {
    var xhr = new XMLHttpRequest();
    var updateName = document.getElementById('form-names').value;
    var updateNotes = document.getElementById('form-notes').value;
    var updateId = document.getElementById('form-ids').value
    xhr.open('PUT', 'http://localhost:8080/api/notes/update', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        if (this.status == 200) {
            showAllNoteCards();
        }
    }
    var param = {
        "id": updateId,
        "topicName": updateName,
        "note": updateNotes
    };
    console.log(param+"  <<<");
    var params = JSON.stringify(param);
    console.log(params);
    xhr.send(params);
    clearField();
}

function addNote() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "http://localhost:8080/api/notes/add", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onload = function () {
        if (this.status == 200) {
            clearField();
            console.log("INSERT...")
            showAllNoteCards();
        }
    }
    var name = document.getElementById('form-name').value;
    var notes = document.getElementById('form-note').value;
    xmlhttp.send(JSON.stringify({"topicName": name, "note": notes}));
    clearField();
}


// Update Single single User By Id===========================================
// document.querySelector(".update").addEventListener('submit', (e) => {
//     e.preventDefault();
//     var xhr = new XMLHttpRequest();
//     var updateName = document.getElementById('form-names').value;
//     var updateNotes = document.getElementById('form-notes').value;
//     var updateId = document.getElementById('form-ids').value
//     xhr.open('PUT', 'http://localhost:8080/api/notes/update', true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.onload = function () {
//         if (this.status == 200) {
//             showAllNoteCards();
//         }
//     }
//     var param = {
//         nId: updateId,
//         topicName: updateName,
//         note: updateNotes
//     }
//     var params = JSON.stringify(param);
//     console.log(params);
//     xhr.send(params);
//     clearField();
// });

// Minimize Text area===================================
function minimizeText() {
    const para = document.querySelectorAll("#words")
    for (var i = 0; i < para.length; i++) {
        var strings = para[i].innerText;
        console.log(strings);
        var result = add3Dots(strings, 13);
        para[i].innerText = result;
    }
}

function add3Dots(string, limit) {
    var dots = "...";
    if (string.length > limit) {
// you can also use substr instead of substring
        string = string.substring(0, limit) + dots;
    }
    return string;
}
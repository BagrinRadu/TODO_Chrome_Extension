// @const Add button element
const addBtn = document.getElementById("add-btn");
// The unordered list containing the tasks
let myNodelist = document.getElementById("myUL");
// Saved tasks
let savedItems = localStorage.getItem('todo-tasks') ? localStorage.getItem('todo-tasks').split(",") : [];

if (savedItems.length > 0) {
    for (let i = 0; i < savedItems.length; i++) {

        if (savedItems[i]) {
            let span = document.createElement("SPAN");
            let txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            let li = document.createElement("LI");
            let taskTxt = document.createTextNode(savedItems[i]);
            li.appendChild(taskTxt);
            li.appendChild(span);
        
            myNodelist.appendChild(li);
        }
    }
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

            let delimiter = String.fromCharCode(215);
            let taskText = div.innerText.split(delimiter, 1)[0];
            deleteTextFromLocalStorage(taskText);
        }
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);

        // Save item in local storage too
        savedItems.push(document.getElementById("myInput").value);
        localStorage.setItem("todo-tasks", savedItems);
    }
    
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener("click", function () {
        let div = this.parentElement;
        div.style.display = "none";

        let delimiter = String.fromCharCode(215);
        let taskText = div.innerText.split(delimiter, 1)[0];
        deleteTextFromLocalStorage(taskText);
    });
    span.appendChild(txt);
    li.appendChild(span);
}

// Add event listener to add button
addBtn.addEventListener("click", newElement);

function deleteTextFromLocalStorage(text) {

    let localStorageItems = localStorage.getItem("todo-tasks").split(",");
    let newLocalStorageItems = [];

    localStorageItems.forEach((savedTaskText) => {

        if (savedTaskText != text) {
            newLocalStorageItems.push(savedTaskText);
        }
    });

    localStorage.setItem("todo-tasks", newLocalStorageItems);
}
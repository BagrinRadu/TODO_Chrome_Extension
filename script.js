let taskContainer = document.getElementById("task-container");
let addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => {

    let id = taskContainer.childElementCount + 1;
    let task = addTask("Check me out ", id);
    document.getElementById("task-container").appendChild(task);
});


function deleteTask() {

    let btnId = this.getAttribute("id");
    let liItemId = "li-" + btnId;
    let liItem = document.getElementById(liItemId);

    taskContainer.removeChild(liItem);

}

function addTask(taskText, id) {

    let textNode = document.createTextNode(taskText);

    // input type checkbox: <input type="checkbox" class="check-input" id="{id}">
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("id", "checkbox-" + id);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input li-checkbox");

    // label: <label class="check-label" for="{id}">{taskText}</label>
    let label = document.createElement("LABEL");
    label.setAttribute("class", "form-check-label li-label");
    label.setAttribute("for", "checkbox-" + id);
    label.appendChild(textNode);

    // i: <i id="{id}" class="material-icons">delete</i>
    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.setAttribute("id", id);
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("class", "btn-delete");
    deleteBtn.innerHTML = "<i class='material-icons'>delete</i>";
    deleteBtn.addEventListener("click", deleteTask);

    // li: <li class="list-group-item"> {checkbox}{label} </li>
    let li = document.createElement("LI");
    li.setAttribute("id", "li-" + id);
    li.setAttribute("class", "list-group-item");
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    return li;
}
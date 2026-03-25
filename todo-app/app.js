let btn = document.querySelector(".btn");
let task = document.querySelector("#task");
let listContainer = document.querySelector("#list-container");

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();

btn.addEventListener("click", () => {
    if (task.value.trim() !== "") {
        let li = document.createElement("li");

        let selectBtn = document.createElement("input");
        selectBtn.type = "checkbox";
        selectBtn.className = "task-check";
        li.appendChild(selectBtn);

        let taskText = document.createTextNode(" " + task.value);
        li.appendChild(taskText);

        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00d7";
        deleteBtn.className = "delete-btn";
        li.appendChild(deleteBtn);

        listContainer.appendChild(li);
        saveData();

        task.value = '';
    } else {
        alert("input a valid task");
    }
});

listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.classList.contains("task-check")) {
        let li = e.target.parentElement;
        if (e.target.checked) {
            li.style.textDecoration = "line-through";
            li.style.color = "grey";
        } else {
            li.style.textDecoration = "none";
            li.style.color = "black";
        }
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
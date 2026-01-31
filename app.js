document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    loadTasks();

    function addTask() {
        const text = taskInput.value.trim();

        if (text === "") {
            alert("Please enter a task");
            return;
        }

        const task = {
            id: Date.now(),
            text: text
        };

        const tasks = getTasks();
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTask(task);
        taskInput.value = "";
    }

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        const span = document.createElement("span");
        span.textContent = task.text;

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        editBtn.onclick = function () {
            editTask(task.id);
        };

        deleteBtn.onclick = function () {
            deleteTask(task.id);
        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);

        taskList.appendChild(li);
    }

    function getTasks() {
        return localStorage.getItem("tasks")
            ? JSON.parse(localStorage.getItem("tasks"))
            : [];
    }

    function loadTasks() {
        const tasks = getTasks();
        taskList.innerHTML = "";
        tasks.forEach(renderTask);
    }

    function deleteTask(id) {
        let tasks = getTasks();
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        const item = document.querySelector(`li[data-id="${id}"]`);
        if (item) item.remove();
    }

    function editTask(id) {
        let tasks = getTasks();
        const task = tasks.find(t => t.id === id);

        const newText = prompt("Edit task", task.text);
        if (!newText || newText.trim() === "") return;

        task.text = newText;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        document.querySelector(`li[data-id="${id}"] span`).textContent = newText;
    }

});

; (function () {
    "use strict";

    // Array de tarefas iniciais
    let arrTasks = getSavedData();

    // Elementos DOM
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li");

    function getSavedData() {
        let tasksData = localStorage.getItem("tasks");
        tasksData = JSON.parse(tasksData);
        return tasksData && tasksData.length ? tasksData : [
            {
                name: "task 1",
                completed: true,
                createdAt: 1592667375012,
                updatedAt: null
            },
            {
                name: "task 2",
                completed: false,
                createdAt: 1581667345723,
                updatedAt: 1592667325018
            }
        ];
    }

    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }

    // Gerar elemento li para cada tarefa
    function generateLiTask(obj) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");
        const editContainer = document.createElement("div");
        const editInput = document.createElement("input");
        const editConfirmButton = document.createElement("button");
        const editCancelButton = document.createElement("button");

        li.className = "todo-item";

        // Botão de checar tarefa
        checkButton.className = "button-check";
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`;
        checkButton.setAttribute("data-action", "checkButton");

        li.appendChild(checkButton);

        // Nome da tarefa
        p.className = "task-name";
        p.textContent = obj.name;
        li.appendChild(p);

        // Botão de edição
        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");
        li.appendChild(editButton);

        // Botão de exclusão
        deleteButton.className = "fas fa-trash-alt";
        deleteButton.setAttribute("data-action", "deleteButton");
        li.appendChild(deleteButton);

        // Container de edição
        editContainer.className = "editContainer";
        editInput.type = "text";
        editInput.className = "editInput";
        editInput.value = obj.name;

        editConfirmButton.className = "editButton";
        editConfirmButton.setAttribute("data-action", "containerEditButton");
        editConfirmButton.textContent = "Edit";

        editCancelButton.className = "cancelButton";
        editCancelButton.setAttribute("data-action", "containerCancelButton");
        editCancelButton.textContent = "Cancel";

        editContainer.appendChild(editInput);
        editContainer.appendChild(editConfirmButton);
        editContainer.appendChild(editCancelButton);

        li.appendChild(editContainer);

        return li;
    }

    // Renderizar tarefas
    function renderTasks() {
        ul.innerHTML = "";
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj));
        });
    }

    // Adicionar nova tarefa
    function addTask(taskName) {
        const newTask = {
            name: taskName,
            completed: false,
            createdAt: Date.now(),
            updatedAt: null
        };
        arrTasks.push(newTask);
        renderTasks();
        setNewData();
    }

    // Lidar com cliques na lista
    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action");
        if (!dataAction) return;

        let currentLi = e.target;
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement;
        }
        const currentLiIndex = [...lis].indexOf(currentLi);

        const actions = {
            checkButton: function () {
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;
                arrTasks[currentLiIndex].updatedAt = Date.now();
                setNewData();
                renderTasks();
            },
            deleteButton: function () {
                arrTasks.splice(currentLiIndex, 1);
                renderTasks();
                setNewData();
            },
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");
                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style");
                });
                editContainer.style.display = "flex";
            },
            containerEditButton: function () {
                const val = currentLi.querySelector(".editInput").value;
                arrTasks[currentLiIndex].name = val;
                arrTasks[currentLiIndex].updatedAt = Date.now();
                renderTasks();
                setNewData();
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style");
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name;
            }
        };

        if (actions[dataAction]) {
            actions[dataAction]();
        }
    }

    // Adicionar evento de submit ao formulário
    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addTask(itemInput.value);
        itemInput.value = "";
        itemInput.focus();
    });

    // Adicionar evento de clique na lista
    ul.addEventListener("click", clickedUl);

    // Renderizar tarefas iniciais
    renderTasks();
})();

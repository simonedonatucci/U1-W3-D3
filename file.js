function task() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskLi = document.createElement("li");
  const taskText = document.createTextNode(taskInput.value);
  taskLi.appendChild(taskText);

  const buttom = document.createElement("button");
  buttom.onclick = function () {
    taskLi.classList.toggle("completed");
  };
  taskLi.appendChild(buttom);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Elimina";
  deleteButton.onclick = function () {
    taskList.removeChild(taskLi);
  };
  taskLi.appendChild(deleteButton);

  taskList.appendChild(taskLi);

  taskInput.value = "";
}

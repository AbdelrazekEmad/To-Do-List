var addTaskBtn = document.getElementById("addingBtn");

addTaskBtn.onclick = function () {
  var allTasks = document.getElementById("tasks");
  var addingTaskValue = document.getElementById("addingTaskValue").value;
  if (!addingTaskValue) {
    alert("please Enter Your Task");
  } else {
    allTasks.innerHTML += `<div class="task">
    <div class="task_content">
        <input id="added_task" type="text" value="${addingTaskValue}" readonly>
    </div>
    <div class="task_control">
        <button class="edit">edit</button>
        <button class="delete">delete</button>
    </div>
</div>`;
  }
};

var editBtn = document.getElementsByClassName("edit");
editBtn.onclick = function () {
  var addedTask = document.getElementById("added_task");
  addedTask.removeAttribute("readonly");
  addedTask.removeAttribute("value");
  addedTask.focus();
};

var deleteBtn = document.getElementsByClassName("delete");
deleteBtn.onclick = function () {
  var newTask = document.getElementsByClassName("task");
  newTask.style.display = "none";
};

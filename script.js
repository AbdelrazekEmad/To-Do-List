var addTaskBtn = document.getElementById("addingBtn");

addTaskBtn.onclick = function () {
  var allTasks = document.getElementById("tasks");
  var addingTaskValue = document.getElementById("addingTaskValue").value;
  if (!addingTaskValue) {
    alert("please Enter Your Task");
  } else {
    allTasks.innerHTML += `<div class="task">
    <div class="task_content">
        <input id="added_task" type="text" value="${addingTaskValue}" >
    </div>
    <div class="task_control">
        <button class="delete">delete</button>
    </div>
</div>`;

    var currantTasksDelete = document.querySelectorAll(".delete");
    for (let i = 0; i < currantTasksDelete.length; i++) {
      currantTasksDelete[i].onclick = function () {
        this.parentNode.parentNode.remove();
      };
    }
    
    // var currantTasksEdit = document.querySelectorAll(".edit");
    // for (let i = 0; i < currantTasksEdit.length; i++) {
    //   currantTasksEdit[i].onclick = function () {
    //     this.parentNode.parentNode.
    //   };
    // }

    
  }
};

// var editBtn = document.getElementsByClassName("edit");
// editBtn.onclick = function () {
//   var addedTask = document.getElementById("added_task");
//   addedTask.removeAttribute("readonly");
//   addedTask.removeAttribute("value");
//   addedTask.focus();
// };

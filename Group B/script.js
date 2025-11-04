// Add a new task
function addTask() {
  var name = document.getElementById("taskInput").value.trim();
  var date = document.getElementById("taskDate").value;

  if (name === "" || date === "") {
    alert("Please enter both task name and due date!");
    return;
  }

  var list = document.getElementById("taskList");
  var li = document.createElement("li");

  // Left side: task details
  var taskInfo = document.createElement("div");
  taskInfo.innerHTML = "<strong>" + name + "</strong><p>Due Date: " + date + "</p>";

  // Right side: buttons
  var btnBox = document.createElement("div");
  btnBox.className = "task-buttons";

  var doneBtn = document.createElement("button");
  doneBtn.innerHTML = "Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function() {
    markDone(this);
  };

  var delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = function() {
    removeTask(this);
  };

  btnBox.appendChild(doneBtn);
  btnBox.appendChild(delBtn);

  li.appendChild(taskInfo);
  li.appendChild(btnBox);
  list.appendChild(li);

  // Reset inputs
  document.getElementById("taskInput").value = "";
  document.getElementById("taskDate").value = "";
}

// Mark as done
function markDone(btn) {
  var li = btn.parentElement.parentElement;
  li.className = "done";
  btn.remove(); // remove done button
  document.getElementById("doneList").appendChild(li);
}

// Delete task
function removeTask(btn) {
  btn.parentElement.parentElement.remove();
}

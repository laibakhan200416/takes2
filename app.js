document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (validateEmail(email) && password.length >= 6) {
    alert("Welcome to Task Management App!");
    window.location.href = "pp.html";
  } else {
    alert("Invalid email or password (min 6 characters).");
  }
});

function validateEmail(email) {
  // Simple email format checker
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
let taskCounter = 0;

function addTask() {
const taskInput = document.getElementById("taskInput");
const taskStatus = document.getElementById("taskStatus").value;
const taskText = taskInput.value.trim();

if (taskText === "") {
  alert("Please enter a task!");
  return;
}

const li = document.createElement("li");
li.textContent = taskText;
li.classList.add(taskStatus);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.onclick = function () {
  li.remove();
  updateCounter(-1);
};

li.appendChild(deleteBtn);

document.getElementById(`${taskStatus}List`).appendChild(li);
taskInput.value = "";
updateCounter(1);
}

function clearAllTasks() {
document.getElementById("todoList").innerHTML = "";
document.getElementById("inprogressList").innerHTML = "";
document.getElementById("doneList").innerHTML = "";
taskCounter = 0;
updateCounter(0, true);
}

  function updateCounter() {
      const todo = document.getElementById("todoList").children.length;
      const inProgress = document.getElementById("inprogressList").children.length;
      const done = document.getElementById("doneList").children.length;
    
      const total = todo + inProgress + done;
      document.getElementById("taskCount").textContent = `Total Tasks: ${total}`;
    }
      




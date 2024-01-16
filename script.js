const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
      if(inputBox.value ===''){
            alert("Enter Some Task Please !");
      }
      else{
            let li= document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
      }
}

// function addTask() {
//       const taskInput = document.getElementById("input-box").value.trim();
//       const listContainer = document.getElementById("list-container");
//       if (taskInput === '') {
//             alert("Please enter some task !!");
//             return;
//       }
//       let li = document.createElement('li');
//       li.innerHTML = taskInput;
//       listContainer.appendChild(li);
// }

// function addTask() {
//       const taskInput = document.getElementById('input-box').value;
//       const listContainer = document.getElementById(".list-container");
//       if (taskInput.trim() === '') {
//             alert('Please enter a task!');
//             return;
//       }

//       const taskText = document.createTextNode(taskInput);
//       const taskElement = document.createElement('div');
//       taskElement.appendChild(taskText);

//       const completedButton = document.createElement('button');
//       completedButton.innerHTML = '✔️';
//       completedButton.onclick = function () {
//             moveTask(taskElement, 'completedTasks');
//       };

//       const incompleteButton = document.createElement('button');
//       incompleteButton.innerHTML = '❌';
//       incompleteButton.onclick = function () {
//             deleteTask(taskElement);
//       };

//       taskElement.appendChild(completedButton);
//       taskElement.appendChild(incompleteButton);

//       document.body.appendChild(taskElement);
// }

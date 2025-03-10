var counter = 0;
function SaveData(event) {
    event.preventDefault();
    var taskTitle = document.getElementById("title").value;
    var taskStatus = document.getElementById("status").value;
    var startDate = document.getElementById("sdate").value;
    var endDate = document.getElementById("edate").value;
    counter++;
    var task = {
        id: counter,
        titles: taskTitle,
        status: taskStatus,
        sdate: startDate,
        edate: endDate
    };
    var tasks = localStorage.getItem("Tasks");
    var taskData = tasks ? JSON.parse(tasks) : [];
    taskData.push(task);
    localStorage.setItem("Tasks", JSON.stringify(taskData));
    ShowData();
}
// // function ShowData(){
// //     let showTask  = document.getElementById("data");
// //     var tasks = localStorage.getItem("Tasks");
// //     var Taskdetailes = tasks ? JSON.parse(tasks) : null;
// //     if(showTask){
// //     for (let i = 0; i < Taskdetailes.length; i++) {
// //         showTask.innerHTML += `
// //             <h1>${Taskdetailes[i].titles}<h1>
// //             <h1>${Taskdetailes[i].status}<h1>
// //             <h1>${Taskdetailes[i].sdate}<h1>
// //             <h1>${Taskdetailes[i].edate}<h1>
// //             `;
// //     }
// // }
// // }
// function ShowData() {
//     let showTask : any= document.getElementById("taskList");
//     showTask.innerHTML = ""; // Clear existing content to prevent duplication
//     var tasks = localStorage.getItem("Tasks");
//     var Taskdetails = tasks ? JSON.parse(tasks) : [];
//     if (showTask) {
//         for (let i = 0; i < Taskdetails.length; i++) {
//             // Create a task card div
//             let taskCard = document.createElement("div");
//             taskCard.classList.add("task-card");
//             // Assign different border colors based on task status
//             if (Taskdetails[i].status === "In Progress") {
//                 taskCard.style.borderLeftColor = "orange";
//             } else if (Taskdetails[i].status === "Completed") {
//                 taskCard.style.borderLeftColor = "green";
//             } else {
//                 taskCard.style.borderLeftColor = "#007bff"; // Default blue for Pending
//             }
//             // Populate the card with task details
//             taskCard.innerHTML = `
//                 <h5>${Taskdetails[i].titles}</h5>
//                 <p><strong>Status:</strong> ${Taskdetails[i].status}</p>
//                 <p><strong>Start Date:</strong> ${Taskdetails[i].sdate}</p>
//                 <p><strong>End Date:</strong> ${Taskdetails[i].edate}</p>
//             `;
//             // Append to the task list container
//             showTask.appendChild(taskCard);
//         }
//     }
// }
// ShowData();
function ShowData() {
    var showTask = document.getElementById("taskList");
    showTask.innerHTML = ""; // Clear existing content
    var tasks = localStorage.getItem("Tasks");
    var taskDetails = tasks ? JSON.parse(tasks) : [];
    if (showTask) {
        for (var i = 0; i < taskDetails.length; i++) {
            var taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            // Assign different border colors based on task status
            if (taskDetails[i].status === "In Progress") {
                taskCard.style.borderLeftColor = "orange";
            }
            else if (taskDetails[i].status === "Completed") {
                taskCard.style.borderLeftColor = "green";
            }
            else {
                taskCard.style.borderLeftColor = "#007bff"; // Default blue for Pending
            }
            taskCard.innerHTML = "\n                <h5>".concat(taskDetails[i].titles, "</h5>\n                <p><strong>Status:</strong> ").concat(taskDetails[i].status, "</p>\n                <p><strong>Start Date:</strong> ").concat(taskDetails[i].sdate, "</p>\n                <p><strong>End Date:</strong> ").concat(taskDetails[i].edate, "</p>\n                <button class=\"btn btn-danger btn-sm mt-2\" onclick=\"deleteTask(").concat(i, ")\">Delete</button>\n            ");
            showTask.appendChild(taskCard);
        }
    }
}
function deleteTask(index) {
    var taskitem = localStorage.getItem("Tasks");
    var tasks = JSON.parse(taskitem) || [];
    tasks.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    ShowData();
}
// document.addEventListener("DOMContentLoaded", ShowData);
ShowData();

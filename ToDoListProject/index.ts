let counter = 0;

interface Task {
    id: number;
    titles: string;
    status: string;
    sdate: string;
    edate: string;
}


//get data from the form and save to local Storage

function SaveData(event){
    event.preventDefault();
    let taskTitle  = (document.getElementById("title") as HTMLInputElement).value;
    let taskStatus = (document.getElementById("status") as HTMLInputElement).value;
    let startDate  = (document.getElementById("sdate")as HTMLInputElement).value;
    let endDate    = (document.getElementById("edate") as HTMLInputElement).value;

    counter ++;

    const task : Task = {
       id : counter,
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



// show data to the html page
function ShowData() {
    let showTask :any= document.getElementById("taskList");
    showTask.innerHTML = ""; // Clear existing content

    var tasks = localStorage.getItem("Tasks");
    var taskDetails = tasks ? JSON.parse(tasks) : [];

    if (showTask) {
        for (let i = 0; i < taskDetails.length; i++) {
            let taskCard = document.createElement("div");
            taskCard.classList.add("task-card");

            // Assign different border colors based on task status
            if (taskDetails[i].status === "In Progress") {
                taskCard.style.borderLeftColor = "orange";
            } else if (taskDetails[i].status === "Completed") {
                taskCard.style.borderLeftColor = "green";
            } else {
                taskCard.style.borderLeftColor = "#007bff"; // Default blue for Pending
            }

            taskCard.innerHTML = `
                <h5>${taskDetails[i].titles}</h5>
                <p><strong>Status:</strong> ${taskDetails[i].status}</p>
                <p><strong>Start Date:</strong> ${taskDetails[i].sdate}</p>
                <p><strong>End Date:</strong> ${taskDetails[i].edate}</p>
                <button class="btn btn-danger btn-sm mt-2" onclick="deleteTask(${i})">Delete</button>
            `;

            showTask.appendChild(taskCard);
        }
    }
}

//delete tasks 
function deleteTask(index) {
    let taskitem : any= localStorage.getItem("Tasks");
    let tasks = JSON.parse(taskitem) || [];
    tasks.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    ShowData();
}

ShowData();
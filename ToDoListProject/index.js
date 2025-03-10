var counter = 0;
// let taskTitle  : string = (document.getElementById("title") as HTMLInputElement).value;
// let taskStatus  : any = (document.getElementById("status") as HTMLInputElement).value;
// let startDate  : any = (document.getElementById("sdate")as HTMLInputElement).value;
// let endDate  : any = (document.getElementById("edate") as HTMLInputElement).value;
// let counter = 0;
// let task : Task [] = [
//     {id : counter, titles: taskTitle, status: taskStatus, startDate: startDate, endDate: endDate},
//     // {status: taskStatus},
//     // {startDate: startDate},
//     // {endDate: endDate}
//  ];
function SaveData(event) {
    event.preventDefault();
    // let taskTitle  : string = (document.getElementById("title") as HTMLInputElement).value;
    // localStorage.setItem("title", taskTitle);
    // let taskStatus  : any = (document.getElementById("status") as HTMLInputElement).value;
    // localStorage.setItem("status", taskStatus);
    // let startDate  : any = (document.getElementById("sdate")as HTMLInputElement).value;
    // localStorage.setItem("sdate", startDate);
    // let endDate  : any = (document.getElementById("edate") as HTMLInputElement).value;
    // localStorage.setItem("edate", endDate);
    var taskTitle = document.getElementById("title").value;
    var taskStatus = document.getElementById("status").value;
    var startDate = document.getElementById("sdate").value;
    var endDate = document.getElementById("edate").value;
    var task = [
        { id: counter, titles: taskTitle, status: taskStatus, startDate: startDate, endDate: endDate },
        // {status: taskStatus},
        // {startDate: startDate},
        // {endDate: endDate}
    ];
    counter++;
    localStorage.setItem('tasks', JSON.stringify(task));
    ShowData();
}
function ShowData() {
    var showTask = document.getElementById("data");
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var showdata1 = JSON.parse(key);
        var showdata = JSON.parse(value);
        showTask.innerHTML += "<p><strong>".concat(showdata1, ":</strong> ").concat(showdata, "}</p>");
    }
}

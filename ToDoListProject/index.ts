let counter = 0;

interface Task {
    id: number;
    titles: string;
    status: string;
    startDate: string;
    endDate: string;
}
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



function SaveData(event){
    event.preventDefault();
    // let taskTitle  : string = (document.getElementById("title") as HTMLInputElement).value;
    // localStorage.setItem("title", taskTitle);

    // let taskStatus  : any = (document.getElementById("status") as HTMLInputElement).value;
    // localStorage.setItem("status", taskStatus);

    // let startDate  : any = (document.getElementById("sdate")as HTMLInputElement).value;
    // localStorage.setItem("sdate", startDate);

    // let endDate  : any = (document.getElementById("edate") as HTMLInputElement).value;
    // localStorage.setItem("edate", endDate);

let taskTitle  : string = (document.getElementById("title") as HTMLInputElement).value;
let taskStatus  : any = (document.getElementById("status") as HTMLInputElement).value;
let startDate  : any = (document.getElementById("sdate")as HTMLInputElement).value;
let endDate  : any = (document.getElementById("edate") as HTMLInputElement).value;

let task : Task [] = [

    {id : counter, titles: taskTitle, status: taskStatus, startDate: startDate, endDate: endDate},
    // {status: taskStatus},
    // {startDate: startDate},
    // {endDate: endDate}
 ];
    counter ++;
    localStorage.setItem('tasks', JSON.stringify(task));
    ShowData();
}


function ShowData(){
    let showTask :any = document.getElementById("data");
    
    for (let i = 0; i < localStorage.length; i++) {
        var key :any = localStorage.key(i);
        var value : any = localStorage.getItem(key);
        let showdata1 : any = JSON.parse(key);
        let showdata : any = JSON.parse(value);
        showTask.innerHTML += `<p><strong>${showdata1}:</strong> ${showdata}}</p>`;
    }
}


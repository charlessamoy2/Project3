noTasks();
let image = document.getElementById('header-div').style;
image.color = '#084267';
document.getElementById('task-progress').style.visibility = "hidden";
let progress = 0;

//get current date
const currentDay = function(splitter){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    
    return (mm+splitter+dd+splitter+yyyy);
};

document.getElementById('currentDate').textContent=currentDay('/');

//change image on click
document.querySelector('#header-div').addEventListener('click',changeImage);
let count = 1;
image.backgroundImage = `url(imgs/header${count}.png)`;

function changeImage() {
    if (confirm("Do you want to change the header background?")) {
        count+=1;
        if (count===2) {
            image.color='white';
        } else if (count===3){
            image.color='black'
        } else {
            image.color='#084267';
        }
        if (count>3) count=1;
        image.backgroundImage = `url(imgs/header${count}.png)`;
    }
}

//add li when new input
function newTask() {
    const newList = document.createElement("LI");
    const newItem = document.getElementById('newTask').value;
    const newTask = document.createTextNode(newItem);
    const newDiv = document.createElement("div");
    const newButton = document.createElement("A");
    const newIcon = document.createElement("I");
    const newRadio = document.createElement("input");

    newIcon.setAttribute("class",'fas fa-times');
    newButton.setAttribute("onclick",'removeItem(this)');
    newRadio.setAttribute("type","checkbox");
    newRadio.setAttribute("id","done");
    newRadio.setAttribute("class","done");
    newRadio.setAttribute("onclick","confirmDone(this)");
    newDiv.setAttribute("class","list-buttons");

    newButton.appendChild(newIcon);

    newDiv.appendChild(newRadio);
    newDiv.appendChild(newButton);
    
    newList.appendChild(newTask);
    newList.appendChild(newDiv);

    document.getElementById('to-do-list').appendChild(newList);
    if(document.getElementById('task-progress').style.visibility === 'hidden') document.getElementById('task-progress').style.visibility = 'visible';
    if(document.getElementById('no-tasks')) document.getElementById('no-tasks').remove();
    updateProgress();
    clearField();
}


//remove text input value when clicked
function clearField() {
    document.getElementById('newTask').value="";
}

//removeItem function
function removeItem(element) {
    const listItem = element.parentElement.parentElement;
    listItem.remove();
    updateProgress();
    
    //if no items display no tasks
    const liList = document.getElementById("to-do-list").getElementsByTagName("li");
    if(liList.length===0) noTasks();
}

//add message if nothing is there
function noTasks() {
    const noItems = document.createElement("h1");
    const message = document.createTextNode("No tasks please add them below!")
    noItems.appendChild(message)
    noItems.setAttribute("id","no-tasks");
    document.getElementById('to-do-list').appendChild(noItems);
    document.getElementById('task-progress').style.visibility = "hidden";
}

//update progress bar when checkbox is clicked
function confirmDone(el) {
    const element = el;
    if (element.checked===true) {
        if (confirm("Are you done with the task?")){
            element.checked = true;
            updateProgress();
        } else {
            element.checked = false;
        }
    } else {
        updateProgress();
    }
}

function updateProgress() {
    const allDone = document.getElementsByClassName('done');
    let sum = 0;
    for (i of allDone) {
        if(i.checked) {
            sum += 1
        }
    }

    progress = parseFloat((sum/allDone.length)*100).toFixed(2);
    if (!progress) progress=0;
    document.getElementById('task-progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-percent').textContent = `${progress}%`;
}
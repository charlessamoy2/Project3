noTasks();

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
let image = document.getElementById('header-div').style;
image.color = '#084267';
let count = 1;
image.backgroundImage = `url(imgs/header${count}.png)`;

function changeImage() {
    count+=1;
    if (count===2) {
        image.color='white';
    } else {
        image.color='#084267';
    }
    if (count>2) count=1;
    image.backgroundImage = `url(imgs/header${count}.png)`;
}

//add li when new input
function newTask() {
    const newList = document.createElement("LI");
    const newItem = document.getElementById('newTask').value;
    const newTask = document.createTextNode(newItem);
    const newButton = document.createElement("A");
    const newIcon = document.createElement("I");
    
    newIcon.setAttribute("class",'fas fa-times');
    newButton.setAttribute("onclick",'removeItem(this)');

    newButton.appendChild(newIcon);

    newList.appendChild(newTask);
    newList.appendChild(newButton);

    document.getElementById('to-do-list').appendChild(newList);
    if(document.getElementById('no-tasks')) document.getElementById('no-tasks').remove();
    clearField();
}


//remove text input value when clicked
function clearField() {
    document.getElementById('newTask').value="";
}

//removeItem function
function removeItem(element) {
    const listItem = element.parentElement;
    listItem.remove();
    
    //if no items display no tasks
    const liList = document.getElementById("to-do-list").getElementsByTagName("li");
    if(liList.length===0) noTasks();
}

//add task if nothing is there
function noTasks() {
    const noItems = document.createElement("h1");
    const message = document.createTextNode("No tasks please add them below!")
    noItems.appendChild(message)
    noItems.setAttribute("id","no-tasks");
    document.getElementById('to-do-list').appendChild(noItems);
}
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
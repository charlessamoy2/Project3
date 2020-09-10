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
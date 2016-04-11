//abandoned vanilla flipclock =(
var workMinutes = 25;
var chillMinutes = 5;
var work = $('.work-timer').FlipClock(workMinutes*60, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false
});

var chill = $('.chill-timer').FlipClock(chillMinutes*60, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false
});

var deleteLabels = document.getElementsByClassName('flip-clock-label');
    deleteLabels[0].remove();
    deleteLabels[0].remove();
    deleteLabels[0].remove();
    deleteLabels[0].remove();
//tried a for loop and a map but it did not delete the tabs...weird...




var workscreen = document.getElementById('work-screen');
workscreen.innerHTML = workMinutes + " minutes";

var chillscreen = document.getElementById('chill-screen');
chillscreen.innerHTML = chillMinutes + " minutes";

var workIncrease = document.getElementById('increase-work');
workIncrease.addEventListener('click', wincreaser);
var workDecrease = document.getElementById('decrease-work');
workDecrease.addEventListener('click', wdecreaser)
function wincreaser() {
    if(workMinutes >= 0){

        workMinutes++;
        workscreen.innerHTML = workMinutes;
        work.getTime().time = workMinutes * 60;
    }
    if(workMinutes > 59){
        alert('You got\'s to chill');
        workMinutes=59;
    }
}
function wdecreaser() {
    if(workMinutes > 0){
        workMinutes--;
        workscreen.innerHTML = workMinutes;
        work.getTime().time = workMinutes * 60;
    }
    else{
        alert('You gotta work!');
    }
}

var chillIncrease = document.getElementById('increase-chill');
chillIncrease.addEventListener('click', cincreaser);
var chillDecrease = document.getElementById('decrease-chill');
chillDecrease.addEventListener('click', cdecreaser)
function cincreaser() {
    if(chillMinutes >= 0){

        chillMinutes++;
        chillscreen.innerHTML = chillMinutes;
        chill.getTime().time = chillMinutes * 60;
    }
    if(chillMinutes > 59){
        alert('You got\'s to chill');
        chillMinutes=59;
    }
}
function cdecreaser() {
    if(chillMinutes > 0){
        chillMinutes--;
        chillscreen.innerHTML = chillMinutes;
        chill.getTime().time = chillMinutes * 60;
    }
    else{
        alert('You gotta work!');
    }
}



function workstart(){
    work.start();
}

function chillstart(){
    chill.start();
}


var currentDay = document.querySelector('#currentDay');
var currentTime = moment().format('HH')
var scheduleContainer = $('.container')
currentDay.textContent = moment().format("dddd, MMMM Do");


function currentHour () {
    for (let i = 0; i < 17; i++) {
        var eachHour = scheduleContainer.children().eq(i).children().eq(1).data('time');
        if (eachHour < currentTime) {
            scheduleContainer.children().eq(i).children().eq(1).addClass('past');
        } else if (eachHour == currentTime) {
            scheduleContainer.children().eq(i).children().eq(1).addClass('present');
        } else {
            scheduleContainer.children().eq(i).children().eq(1).addClass('future')
        }
    }
};

currentHour();


//ON PAGE LOAD, ALL STORED INPUT WILL BE DISPLAYED
//DATE WILL SHOW AT THE TOP


    
//TODO: TIMER FUNCTION THAT CHECKS THE MOMENT TIME EVERY MILLISECOND TO PROVIDE LIVE UPDATES AS THE HOURS PASS
    
    
//TODO: CREATE LOCAL STORAGE TO CONTAIN USER INPUTS IN THE TEXTAREA TAGS.
    //STORE TEXTAREA INPUT ONCE SAVE BUTTON IS PRESSED
    //TODO: ON.CLICK ANY SAVEBTN STORAGE IS UPDATED





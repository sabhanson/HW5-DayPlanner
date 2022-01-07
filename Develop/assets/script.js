//CURRENTLY WORKING:
    //current day is displayed at the top
    //hour boxes will change from green to red to grey depending on UTC hour
    //textboxes will receive text and keep it until the page is refreshed
//NEED TO FIGURE OUT
    //localStorage for each textbox
    //clickevent on each save button
        //can the click event be applied to all buttons so no matter which button the user selects, the information will be saved?

//ACCEPTANCE CRIT
    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    // WHEN I scroll down
    // THEN I am presented with timeblocks for standard business hours
    // WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // WHEN I click into a timeblock
    // THEN I can enter an event
    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist

var currentDay = document.querySelector('#currentDay');
var currentTime = moment().format('HH')
var scheduleContainer = $('.container')
currentDay.textContent = moment().format("dddd, MMMM Do");
var saveButton = $('.saveBtn')

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


    // function test (){
        
    //     saveButton.addEventListener("click")
    //     console.log("button clicked")
        
    // }


    // test();
// function test() {
//     var input = $(textarea);
//     localStorage.setItem("test", input.value);
//     var storedTest = localStorage.getItem("test");
// }





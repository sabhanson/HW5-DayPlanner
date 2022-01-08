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
var nineAM = document.querySelector('.nineAM')
var tenAM = document.querySelector('.tenAM')
var elevenAM = document.querySelector('.elevenAM')
var twelvePM = document.querySelector('.twelvePM')
var onePM = document.querySelector('.onePM')
var twoPM = document.querySelector('.twoPM')
var threePM = document.querySelector('.threePM')
var fourPM = document.querySelector('.fourPM')
var fivePM = document.querySelector('.fivePM')
var saveBtn1 = document.querySelector('.btn1');
var saveBtn2 = document.querySelector('.btn2');
var saveBtn3 = document.querySelector('.btn3');
var saveBtn4 = document.querySelector('.btn4');
var saveBtn5 = document.querySelector('.btn5');
var saveBtn6 = document.querySelector('.btn6');
var saveBtn7 = document.querySelector('.btn7');
var saveBtn8 = document.querySelector('.btn8');
var saveBtn9 = document.querySelector('.btn9');


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

//TEST FUNCTION TO NOT COPY ISAAC
// function currentHour () {
//     for (let i = 0; i < 17; i++) {
//         var containerDiv = scheduleContainer;
//         var innerDivs = containerDiv.get
//         if (eachHour < currentTime) {
//             scheduleContainer.children().eq(i).children().eq(1).addClass('past');
//         } else if (eachHour == currentTime) {
//             scheduleContainer.children().eq(i).children().eq(1).addClass('present');
//         } else {
//             scheduleContainer.children().eq(i).children().eq(1).addClass('future')
//         }
//     }
// };


//local storage for 9am box
function save9AM() {
    var nineInput = nineAM.value;
    localStorage.setItem('9amVal',JSON.stringify(nineInput));
}
saveBtn1.addEventListener('click', save9AM);

function get9AM() {
    nineAM.value = JSON.parse(localStorage.getItem('9amVal'));
}
//local storage for 10am box
function save10AM() {
    var tenInput = tenAM.value;
    localStorage.setItem('10amVal',JSON.stringify(tenInput));
}
saveBtn2.addEventListener('click', save10AM);

function get10AM() {
    tenAM.value = JSON.parse(localStorage.getItem('10amVal'));
}
//local storage for 11am box
function save11AM() {
    var elevenInput = elevenAM.value;
    localStorage.setItem('11amVal',JSON.stringify(elevenInput));
}
saveBtn3.addEventListener('click', save11AM);

function get11AM() {
    elevenAM.value = JSON.parse(localStorage.getItem('11amVal'));
}
//local storage for 12pm box
function save12PM() {
    var twelveInput = twelvePM.value;
    localStorage.setItem('12pmVal',JSON.stringify(twelveInput));
}
saveBtn4.addEventListener('click', save12PM);

function get12PM() {
    twelvePM.value = JSON.parse(localStorage.getItem('12pmVal'));
}
//local storage for 1pm box
function save1PM() {
    var oneInput = onePM.value;
    localStorage.setItem('1pmVal',JSON.stringify(oneInput));
}
saveBtn5.addEventListener('click', save1PM);

function get1PM() {
    onePM.value = JSON.parse(localStorage.getItem('1pmVal'));
}













get9AM();
get10AM();
get11AM();
get12PM();
get1PM();
get2PM();
get3PM();
get4PM();
get5PM();


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





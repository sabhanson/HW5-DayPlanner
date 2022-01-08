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

console.log(currentTime);

//function to check current hour vs global hour to change background color
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
//local storage for 2pm box
function save2PM() {
    var twoInput = twoPM.value;
    localStorage.setItem('2pmVal',JSON.stringify(twoInput));
}
saveBtn6.addEventListener('click', save2PM);

function get2PM() {
    twoPM.value = JSON.parse(localStorage.getItem('2pmVal'));
}
//local storage for 3pm box
function save3PM() {
    var threeInput = threePM.value;
    localStorage.setItem('3pmVal',JSON.stringify(threeInput));
}
saveBtn7.addEventListener('click', save3PM);

function get3PM() {
    threePM.value = JSON.parse(localStorage.getItem('3pmVal'));
}
//local storage for 4pm box
function save4PM() {
    var fourInput = fourPM.value;
    localStorage.setItem('4pmVal',JSON.stringify(fourInput));
}
saveBtn8.addEventListener('click', save4PM);

function get4PM() {
    fourPM.value = JSON.parse(localStorage.getItem('4pmVal'));
}
//local storage for 5pm box
function save5PM() {
    var fiveInput = fivePM.value;
    localStorage.setItem('5pmVal',JSON.stringify(fiveInput));
}
saveBtn9.addEventListener('click', save5PM);

function get5PM() {
    fivePM.value = JSON.parse(localStorage.getItem('5pmVal'));
}


//functions for each hour to populate textarea
get9AM();
get10AM();
get11AM();
get12PM();
get1PM();
get2PM();
get3PM();
get4PM();
get5PM();

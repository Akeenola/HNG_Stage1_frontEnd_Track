const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const time = days[new Date().getDay()];
const utcTime = new Date().getUTCMilliseconds();
//window.onload(alert("I am alive \n"+time));
console.log(time);
console.log("Your name"+time%12);
let clock = "The hour is " + time%12;
//let ampm = (time> 11)?"PM":"AM";
console.log(`half of 100 is ${utcTime}`);
console.log(clock  );
function getDay(){
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const time = days[new Date().getDay()];
    document.getElementById("CurrentDayOfTheWeek").innerHTML = "time is"+time;
    console.log("New function given day"+time);

}

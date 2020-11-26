function showTime(){
    const date= new Date();
    return date.getHours()+" Hrs "+date.getMinutes()+" mins "+date.getSeconds()+" s."
}
function showSessionExpire(){
    console.log("Activity B has been expired at "+showTime());
}
console.log("Activity A triggering Activity B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity B triggered at "+showTime()+" will execute after 5seconds");
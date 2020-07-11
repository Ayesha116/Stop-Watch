var min =00;
var sec = 00;
var msec =  00;
var a;
var datalist = [];
var check = true;

var minutes = document.getElementById("minute")
var seconds = document.getElementById("second")
var mseconds  = document.getElementById("msecond")
var records = document.getElementById("list")



function timer() {
    msec++;
    mseconds.innerHTML = msec;
    if(msec>100){
        sec++
        seconds.innerHTML = sec;
        msec = 0;
        if(sec>60){
            min++
            minutes.innerHTML= min;
            sec = 0;
        }
    }


}

var interval;



function start() {
    interval = setInterval(timer , 100)

    

}

function checkcorrect(){
    if (check==true) {
        start()
        check = false;
    }
    else
    {
        return;
    }
}


function stop() {
    clearInterval(interval)
    check = true;

}

function reset() {
    a = min + ":" + sec +":" + msec + "<br>";
    datalist.push(a)
    min = 00
    sec= 00
    msec = 00
    minutes.innerHTML = min
    seconds.innerHTML = sec
    mseconds.innerHTML = msec
    clearInterval(interval)
    check = true
    records.innerHTML = datalist.join("")


}




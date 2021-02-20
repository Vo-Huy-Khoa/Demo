

var MyDate = new Date("10 12 2019 00:00:00").getTime();
    setInterval(function() {
        var now= new Date().getTime();
        var d = now - MyDate;
        var year = Math.floor(d/(1000*60*60*24*30*12));
        var month = Math.floor(d/(1000*60*60*24*30));
        var week = Math.floor(d/(1000*60*60*24*7*4));
        var days = Math.floor(d/(1000*60*60*24));
        var hours = Math.floor(d/(1000*60*60));
        var minutes = Math.floor(d/(1000*60));
        var seconds= Math.floor(d/(1000));

        
        month %= 12; 
        week %= 4;
        days %= 29;
        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById("year").innerText = year;
        document.getElementById("month").innerText = month;
        document.getElementById("week").innerText = week;
        document.getElementById("days").innerText = days+1;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

} 
   
);
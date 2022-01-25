setInterval(() => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var hrotation = 30*h + m/2;
    var mrotation = 6*m ;
    var srotation = 6*s;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);
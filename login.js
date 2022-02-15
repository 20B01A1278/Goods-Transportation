let b = document.getElementById('dealerbtn');
b.addEventListener("click",function(e)
{
    e.preventDefault();
    let dealername = document.getElementById('dealername');
    let dealerpass = document.getElementById('dealerpass');
    if (dealername.value == "" || dealerpass.value =="" )
    {
        document.getElementById('dealercont').innerHTML = "Invalid Login, please try again";
    }
    else
    {
        document.getElementById('dealercont').innerHTML = "";
        location.href='dealerotp.html';
    }
})
let b2 = document.getElementById('driverbtn');
b2.addEventListener("click",function(e)
{
    e.preventDefault();
    let drivername = document.getElementById('drivername');
    let driverpass = document.getElementById('driverpass');
    if (drivername.value == "" || driverpass.value =="" )
    {
        document.getElementById('drivercont').innerHTML = "Invalid Login, please try again";
    }
    else
    {
        document.getElementById('drivercont').innerHTML = "";
        location.href='driverotp.html';
    }
})
let btn = document .getElementById("btn");
btn.addEventListener("click",function(e){
    e.preventDefault();

    let name = document.getElementById("name");
    if (name.value === ''){
        document.getElementById("nameid").innerHTML = "Please enter your name"
    }
    else{
        document.getElementById("nameid").innerHTML = ""
    }
    
    let age = document.getElementById("age");
    if(age.value === ''){
        document.getElementById("ageid").innerHTML = "Please enter your age"
    }
    else{
        document.getElementById("ageid").innerHTML = ""
    }

    let tnum = document.getElementById("tnum");
    if(tnum.value === ''){
        document.getElementById("tnumid").innerHTML = "Please enter your Truck Number"
    }
    else{
        document.getElementById("tnumid").innerHTML = ""
    }

    let mnum = document.getElementById("mnum");
    if(mnum.value === ''){
        document.getElementById("mnumid").innerHTML = "Please enter your Mobile Number"
    }
    else{
        document.getElementById("mnumid").innerHTML = ""
    }

    let tcap = document.getElementById("tcap");
    if(tcap.value === ''){
        document.getElementById("tcapid").innerHTML = "Please enter your Truck Capacity"
    }
    else{
        document.getElementById("tcapid").innerHTML = ""
    }

    let tname = document.getElementById("tr-name");
    if(tname.value === ''){
        document.getElementById("tr-nameid").innerHTML = "Please enter the Transporter Name"
    }
    else{
        document.getElementById("tr-nameid").innerHTML = ""
    }

    let exp = document.getElementById("exp");
    if(exp.value === ''){
        document.getElementById("expid").innerHTML = "Please enter the driving experience"
    }
    else{
        document.getElementById("expid").innerHTML = ""
    }

    let rot1 = document.getElementById("rot1");
    let rot2 = document.getElementById("rot2");
    let rot3 = document.getElementById("rot3");
    if(rot1.value === '' || rot2.value === '' || rot3.value === ''){
        document.getElementById("rotid").innerHTML = "Please enter three interested routes"
    }
    else{
        document.getElementById("rotid").innerHTML = ""
    }


    let uname = document.getElementById("uname");
    if(tname.value === ''){
        document.getElementById("puname").innerHTML = "Please enter the username"
    }
    else{
        document.getElementById("puname").innerHTML = ""
    }

    let pass = document.getElementById("pass");
    if(pass.value === ''){
        document.getElementById("ppass").innerHTML = "Please enter the password"
    }
    else{
        document.getElementById("ppass").innerHTML = ""
    }

    let cpass = document.getElementById("cpass");
    if(pass.value === ''){
        document.getElementById("pcpass").innerHTML = "Please enter the confirm password"
    }
    else{
        document.getElementById("pcpass").innerHTML = ""
    }
    
})

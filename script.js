function Form_Validate(){
    let name=document.getElementById("inputName4").value;
    let email=document.getElementById("inputEmail4").value;
    let address=document.getElementById("inputAdress").value;
    let number=document.getElementById('inputNumber').value;
    let text=document.getElementById('FormTextarea').value;


    if(name=="" || email=="" || address=="" || number=="" || text==""){
        window.alert("All Fields Are Required");
        return false;
    }

    else if(!name.match((/^[A-Za-z]+$/))){
        window.alert("Name filed should contain only Alphabets");
        return false;
    }

    
    else if(number.length<10 || number.length>10){
        window.alert("Mobile number must be of 10 digits");
        return false;
    }

    else {
        window.alert("Form-Entered Successfully");
        return true;
    }

}


function TextArea(tag){
    if(tag.value==" Enter Your Message   "){
        tag.innerHTML="";
    }

}

function Date_Generator(){
    let now=new Date();

    let date=now.getDate();
    let month=now.getMonth();
    let year=now.getFullYear();
    
    (date<10)?date='0'+date:date;
   
    document.getElementById('date').innerHTML=date;
    document.getElementById('month').innerHTML=" -"+month;
    document.getElementById('year').innerHTML="-"+year;
}

function Time_Generator(){


    let now=new Date();

    let hour=now.getHours();
    let minute=now.getMinutes();
    let sec=now.getSeconds();

    (hour<10)?hour='0'+hour:hour;
    (minute<10)?minute='0'+minute:minute;
    
    document.getElementById('time').innerHTML=hour+":"+minute;
    
    

}




let random=Math.floor(Math.random()*1000);

let cnt=0;

function btclick(){
    cnt+=1;
    

    let value=document.getElementById("in").value;
    console.log(cnt);

    if(cnt>10){
        window.alert("You Have Timed Out\nPlease Try Again ")
        window.close();
    }

    else{

        

         if(value==random){
            window.prompt("Cogratulations! You Won The Game! \nScore:10 Points. ")
        }

        else if(value>random){
            if(cnt!=10){
            window.alert("Ouch! Number Too Big ")}
            else if(cnt==10){
            window.alert("Sorry! You Have Lost The Game! \nScore:0 Points (Reload the Game to Play Again ) ")}
        }
        else if(value<random){
            if(cnt!=10){
            window.alert("Ouch! Number Too Small ")}
            else if(cnt==10){
            window.alert("Sorry! You Have Lost The Game! \nScore:0 Points (Reload the Game to Play Again )  ")}
        }
    }
   

    
}


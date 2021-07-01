// Btn click function
function btnclick(choice){

    let humanchoice=choice.id;
    let botchoice=computerselection(randgen())
    let finalscore=winnerdecide(humanchoice,botchoice);
    let message=finalmessage(finalscore);
    frontenddisplay(message,humanchoice,botchoice);


}

//Random number generator

function randgen(){
    let randnum=Math.floor(Math.random()*6);
    return randnum;
}

//Computer selection function

function computerselection(number){
    let options=['rock','paper','scissors','paper','rock','scissors'];
    return options[number];
}

//Winner deciding function

function winnerdecide(humanchoice,botchoice){

    let gamedatabase={
        'rock':{'paper':0,'scissors':1,'rock':0.5},
        'paper':{'scissors':0,'rock':1,'paper':0.5},
        'scissors':{'rock':0,'paper':1,'scissors':0.5}
    }

    let humanscore=gamedatabase[humanchoice][botchoice];
    let botscore=gamedatabase[botchoice][humanchoice];
    
    let finalscore=[humanscore,botscore];
    return finalscore;

}

//Final message function 

function finalmessage(score){
    if(score[0]==0){
        return {'message':"You've LOST!",'color':'red'};
    }
    else if(score[0]==1){
        return {'message':"You've WON!",'color':'green'};
    }
    else if(score[0]==0.5){
        return {'message':"It's a TIE!",'color':'yellow'};
    }

}

//Front end display function


function frontenddisplay(message,humanchoice,botchoice) {

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanseldiv=document.createElement('div');
    let botseldiv=document.createElement('div');

    let head1=document.createElement('h1');
    let head2=document.createElement('h2');

    let result=document.createElement('div');
    let button=document.createElement('button');

    head1.innerHTML="Your Choice: ";
    head2.innerHTML="Opp Choice: ";

    head1.setAttribute('class','text-success');
    head2.setAttribute('class','text-danger');
    button.setAttribute('class','btn btn-primary');
    button.setAttribute('onclick','window.location.reload()');

    humanseldiv.innerHTML="<img src='"+humanchoice+".jpeg' width=150 height=150 </img>";
    botseldiv.innerHTML="<img src='"+botchoice+".jpeg' width=150 height=150 </img>";
    button.innerHTML=" <b> Play Again! </b> ";
    result.innerHTML="<h1 style=color:"+message['color']+"> "+message['message']+"</h1>";
    console.log(result);

    document.getElementById('out1').appendChild(head1);
    document.getElementById('out3').appendChild(head2);

    document.getElementById('out1').appendChild(humanseldiv);
    document.getElementById('out3').appendChild(botseldiv)

    document.getElementById('out2').appendChild(button);

    document.getElementById('output').appendChild(result);

}

//Exit Function 


function exit(){
    window.alert("Thank You For Playing!");
    window.close();
}

//Reload Function


function reload(){
    window.alert("Game Reloaded! ");
    window.location.reload();
}
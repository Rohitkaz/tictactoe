function start()
{
 window.location.href="tictactoe.html";
}

var player1=0;
var player2=0;
function play()
{
   player1=document.getElementById("pl1").value;
    player2=document.getElementById("pl2").value;
    if(player1==0 || player2==0)
    {
        alert("fill your name first");
    }
    else{
    document.getElementById("topbox").innerHTML="TIC TAC TOE";
    var obj1=document.getElementById("topbox");
    var styles1={
        "font-size":"40px",
        "color":"green",
        "text-align":"center"
    };
    Object.assign(obj1.style,styles1);
 var obj=    document.getElementById("mainbox");
   var styles={
 "display":"block"
    };
    Object.assign(obj.style,styles);
}
}
   var stop=0;
var arr=new Array(9);

var j=0;
for(j=0;j<9;j++)
{
    arr[j]=-1;
}
var turn=0;
var count=0;

function fun(btnid)

    {
        if(stop==1)
        {
            alert("game is over");
        }
    
        
    else if(turn==0)
    {
     if(arr[btnid]!=-1)
     {
        alert("illegal move");

     }
     else
     {
        
    document.getElementById(btnid).innerHTML="X";
    
     turn=1;
     arr[btnid]=5;
    
     count++;
     var audio=document.getElementById("aud");
     
     audio.play();
     

    var obj=document.getElementById(btnid);
 var styles= {
"font-size":"40px"
};
Object.assign(obj.style,styles);
     }

    }
   else
   {
    
    if(arr[btnid]!=-1)
    {

        alert("illegal move");
    }
    else{
    document.getElementById(btnid).innerHTML="O";
   
  arr[btnid]=0;
    turn=0;
    count++;
    var audio=document.getElementById("aud");
        audio.play();
    var obj=document.getElementById(btnid);
 var styles= {
"font-size":"40px"
};
Object.assign(obj.style,styles);

   }

}
}
 // document.getElementById("box4").style.cssText=" font-size:40px; margin-left:80px; margin-top:20px; background-color:cyan ;border-color:cyan ; color:red";
/*var obj=document.getElementById(btnid);
 var styles= {
"font-size":"40px"
};
Object.assign(obj.style,styles);

}*/
var won=0;

function checkwin()
{
if( (arr[1]+arr[4]+arr[7]==15)||(arr[0]+arr[1]+arr[2])==15 || (arr[0]+arr[3]+arr[6]==15) || (arr[0]+arr[4]+arr[8]==15) || (arr[2]+arr[4]+arr[6]==15) || (arr[2]+arr[5]+arr[8]==15) || (arr[3]+arr[4]+arr[5]==15) || (arr[6]+arr[7]+arr[8]==15))
{
    document.getElementById("topbox").innerHTML=player1+" "+"won";
  stop=1;
  var object1=document.getElementById("main");
  var styles={
    "background-image":"url(./giphy.gif)",
    

    
    
  };
  Object.assign(object1.style,styles);
    won=1;
    let btn=document.createElement("button");
    btn.innerHTML="Play Again";
    var styles={
        "margin-left":"100px",
        "font-size":"30px",
        "background-color":"Aqua",
        "onclick":"start()"

    }
    
    Object.assign(btn.style,styles);
    document.body.appendChild(btn);
    btn.addEventListener('click',start);
}
 if( (arr[1]+arr[4]+arr[7]==0)||(arr[0]+arr[1]+arr[2])==0 || (arr[0]+arr[3]+arr[6]==0) || (arr[0]+arr[4]+arr[8]==0) || (arr[2]+arr[4]+arr[6]==0) || (arr[2]+arr[5]+arr[8]==0) || (arr[3]+arr[4]+arr[5]==0) || (arr[6]+arr[7]+arr[8]==0))
{
document.getElementById("topbox").innerHTML=player2+" "+"won";
stop=1;
var object1=document.getElementById("main");
  var styles={
    "background-image":"url(./giphy.gif)",
    
  };
  Object.assign(object1.style,styles);
  won=1;
  let btn=document.createElement("button");
  btn.innerHTML="Play Again";
  var styles={
      "margin-left":"100px",
      "font-size":"30px",
      "background-color":"Aqua",
      "onclick":"start()"

  }
  
  Object.assign(btn.style,styles);
  document.body.appendChild(btn);
  btn.addEventListener('click',start);
    
}
if(count==9 && won==0)
{
    document.getElementById("topbox").innerHTML=" MATCH DRAWN "+"\n";
    
    let btn=document.createElement("button");
    btn.innerHTML="Play Again";
    var styles={
        "margin-left":"100px",
        "font-size":"30px",
        "background-color":"Aqua",
        "onclick":"start()"

    }
    
    Object.assign(btn.style,styles);
    document.body.appendChild(btn);
    btn.addEventListener('click',start);
    stop=1;
}
}

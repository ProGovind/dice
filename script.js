let userbutton = document.querySelectorAll(".dice");
let playagainbutton = document.querySelector(".playagain");
let finalbutton = document.querySelector("#resultbutton");
let finaloutput = document.querySelector("#winMessage");
let output = document.querySelectorAll(".score");
let inputbox = document.querySelectorAll(".input");
let i = 0;
let playerscore = [];
let winplayers=[];


finalbutton.disabled = true;
playagainbutton.disabled = true;

for(let t of userbutton)
  {
      t.addEventListener("click" , dicescore)
  }

function dicescore(event)
{
    let choicenumber = [1 , 2 , 3 , 4 , 5 , 6];
    let diceindex = parseInt(Math.random()*choicenumber.length);
    let dicenumber = choicenumber[diceindex];

   playerscore.push(dicenumber);

  let finalscore = playerscore[playerscore.length-1];

    for(let j = i  ;j<=i ; j++)
      {
        output[j].innerHTML = `${finalscore}`;
      }
    i++
     
      event.target.disabled = true;
      finalbutton.disabled = false;
}



finalbutton.addEventListener("click" , winner)

function winner()
{
  let maximum= Math.max(...playerscore);
  for(let o = 0 ; o<playerscore.length ; o++)
    {
      if(playerscore[o]==maximum)
      {
        winplayers.push(inputbox[o].value);
      }
    }
   let winner = winplayers.join(",");
   finaloutput.innerHTML=`Winner of this round is : ${winner}`;

  playagainbutton.disabled = false;
}

playagainbutton.addEventListener("click" , resetall);

function resetall()
{
   i=0;
   playerscore = [];
   winplayers = [];
   finaloutput.innerHTML="";
   for(let u of userbutton)
    {
      u.disabled = false;
    }
  for(let o of output)
    {
      o.innerHTML="";
    }
   finalbutton.disabled = true;
   playagainbutton.disabled = true;
 }
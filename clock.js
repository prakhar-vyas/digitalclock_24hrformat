let clock = document.getElementById("clock");

function timedisplay()
{
      let today = new Date();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      if(minutes<10)
      {
          minutes = `0${minutes}`;
      }
      if(seconds<10)
      {
          seconds = `0${seconds}`;
      }
      if(hour<10)
      {
          hour = `0${hour}`;
      }
      if(hour>=12)
      {
       clock.innerText=`${hour}:${minutes}:${seconds} PM`;
      }
      else{
            clock.innerText=`${hour}:${minutes}:${seconds} AM`;
      }
    

}
setInterval(timedisplay,1000);
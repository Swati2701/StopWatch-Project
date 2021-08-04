const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let hour = 0;
let min =0;
let sec = 0;
let flag;

function setTimer(){
    if(flag == true){
        sec++;
        if(sec == 60){
            sec = 0; 
            min++;
        }
        if(min == 60){
            min =0; 
            hour++;
        }
    setTimeout(setTimer, 100);
      document.getElementById("hr").innerHTML = hour ;
      document.getElementById("min").innerHTML = min ;
      document.getElementById("sec").innerHTML = sec ;
   }
}

startButton.addEventListener('click', () => {
    flag = true;
    if(flag){
        setTimer();
    }
});

stopButton.addEventListener('click', () => {
    flag = false;
});

resetButton.addEventListener('click', () =>{
    document.getElementById("hr").innerHTML = `00` ;
    document.getElementById("min").innerHTML = `00` ;
    document.getElementById("sec").innerHTML = `00`  ;
});

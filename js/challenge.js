//See the timer increment every second once the page has loaded.: DOne
 //Manually increment and decrement the counter using the plus and minus buttons.: Done
 //"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.: Done

//Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"

// Click the "restart" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
 const increment = document.querySelector("#plus")
 const decrement = document.querySelector("#minus")
 const like = document.querySelector("#heart")
 const pauseButton = document.querySelector("#pause")
 const counter = document.querySelector("#counter")
 const likes = document.querySelector(".likes")
 let numbers = ['']
 var isPaused = false;

 function manuallyIncrement(event){
    counter.innerHTML = parseInt(counter.innerHTML) +1
}
function manuallyDecrement(event){
    counter.innerHTML = parseInt(counter.innerHTML) -1
}
function likeNumber(event){
    numbers.push(parseInt(counter.innerHTML))
    const li = document.createElement("li")
    likes.appendChild(li)

    let likedTimes = numbers.filter(x => x == parseInt(counter.innerHTML)).length
    li.innerHTML = `${counter.innerHTML} has been liked ${likedTimes} times`
}
function pause(event){
    console.log(event);
    isPaused = true;
    clearInterval();
}

function timerIncrement(event) { 
    if(!isPaused) {
    setInterval(() => {
        counter.innerHTML = parseInt(counter.innerHTML) +1
    } , 1000)
 }}
 document.addEventListener("DOMContentLoaded", timerIncrement);
 increment.addEventListener("click",manuallyIncrement);       
 decrement.addEventListener("click",manuallyDecrement);       
 like.addEventListener("click",likeNumber);       
 pauseButton.addEventListener("click",pause);       

const reset_button = document.querySelector("#reset-button")
const reset_count = document.querySelector("#num-resets")
const shoot_button1 = document.querySelector("#teamone-shoot-button")
const shots_taken1 = document.querySelector("#teamone-numshots")
const xgoals1 = document.querySelector("#teamone-numgoals")
const shoot_button2 = document.querySelector("#teamtwo-shoot-button")
const shots_taken2 = document.querySelector("#teamtwo-numshots")
const xgoals2 = document.querySelector("#teamtwo-numgoals")
reset_button.addEventListener("click", function(){
    let resetshotstaken = Number(shots_taken1.innerHTML) * 0;
    shots_taken1.innerHTML = resetshotstaken;
})
reset_button.addEventListener("click", function(){
    let resetshotstaken = Number(xgoals1.innerHTML) * 0;
    xgoals1.innerHTML = resetshotstaken;
})
reset_button.addEventListener("click", function(){
    let resetshotstaken = Number(shots_taken2.innerHTML) * 0;
    shots_taken2.innerHTML = resetshotstaken;
})
reset_button.addEventListener("click", function(){
    let resetshotstaken = Number(xgoals2.innerHTML) * 0;
    xgoals2.innerHTML = resetshotstaken;
})
reset_button.addEventListener("click", function() {
    let numberofresets = Number(reset_count.innerHTML) + 1;
    reset_count.innerHTML = numberofresets;
})
shoot_button1.addEventListener("click", function() {
    let newshotstaken = Number(shots_taken1.innerHTML) + 1;
    shots_taken1.innerHTML = newshotstaken;
})
shoot_button1.addEventListener("click", function () {
    let goals1 = Number(xgoals1.innerHTML) + Math.round(Math.random());
    xgoals1.innerHTML = goals1;
})
shoot_button2.addEventListener("click", function() {
    let newshotstaken = Number(shots_taken2.innerHTML) + 1;
    shots_taken2.innerHTML = newshotstaken;
})
shoot_button2.addEventListener("click", function () {
    let goals2 = Number(xgoals2.innerHTML) + Math.round(Math.random());
    xgoals2.innerHTML = goals2;
})
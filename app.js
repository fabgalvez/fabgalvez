var ps = 0 
var cs = 0 

var name = prompt("Hello new user! What is your name?")
prompt("Would you like to play a game? Whoever gets the biggest randomly generated number wins. Please type Y or N")

do{
    var num = Math.floor(Math.random() * 10) * 1;
    cps = ps + num;
    alert(`You received ${num}. Your new score is ${ps}`)
    var p1 = prompt("Would you like to play again? Please enter Y or N")

} while ((ps <= 19) && (p1 == "y"))

alert("Now it's the Computers turn!")

do {
    var num = Math.floor(Math.random() * 10) * 1;
    cs = cs + num;
    alert(`The CPU number is ${num}. It's total score is ${cs} points`);
    var p1 = prompt("Would you like to play again? Y or N")
} while( cs <= 16)

alert(`The Computer score is ${cs}. Your score is ${ps}.`)

if (cs > ps) {
    alert(`The Computer score is ${cs}. Your score is ${ps}`)
}












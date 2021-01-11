
var isAlive = true
var hasAdv = null
var secondCourse = null
var thirdCourse = null

var firstCourse = prompt('Hamburger, Cheeseburger, or Hotdog?')

if(firstCourse === 'Hamburger'){
    hasAdv = false
    isAlive = false 
    alert('You have been slain because Hamburgers are an infirior choice. This is the way...') 
}else if (firstCourse === 'Cheeseburger'){
    hasAdv = true
    alert('Good choice, We have delicious cheese to top your burger')
} else{
    hasAdv = true
    alert('intersting choice')
}

if(!!hasAdv){
var secondCourse = prompt('Would you like your steak Rare, Medium Rare, Medium or Well Done')
if(secondCourse === 'Rare'){
    hasAdv = true
    alert('Congrats on your good choice')
}
else if ( secondCourse === 'Medium Rare'){
    hasAdv = true
    alert('Congrats on your good choice')
}
else{
    hasAdv = false
    isAlive = false 
    alert('You have been slain for your pitiful choices. May you think wiser in your next life')

}
}

if(!!hasAdv){
    var thirdCourse = confirm('Ice Cream')
    if (thirdCourse){
        hasWon = true
        alert('Congrats on being a distinguished diner')
    } else {
        alert('Wrong Chocice, now u lose and die')
    }
}
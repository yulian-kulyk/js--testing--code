console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));

function feast(beast, dish) {
    if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]){
        return true;
    }
    return false;
}
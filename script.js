var selectedNumber = 70;
var lowerLimit = 10;
var upperLimit = 50;

if ((selectedNumber >= lowerLimit) && (selectedNumber <= upperLimit)) {
    console.log("Within range");
}
else {
    if (selectedNumber < lowerLimit) {
        console.log("Number is too low");
    }

    if (selectedNumber > upperLimit) {
        console.log("Number is too high");
    }

}
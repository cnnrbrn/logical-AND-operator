// requirements: 
// cat
// under 2
// friendly

var petType = "dog";
var age = 1;
var isFriendly = true;

if ((petType === "cat") && (age < 2) && (isFriendly === true)) {
    console.log("Pet accepted");
}
else {
    if (petType !== "cat") {
        console.log("Pet must be a cat");
    }

    if (age >= 2) {
        console.log("Pet must be under 2");
    }

    if (isFriendly !== true) {
        console.log("Pet must be friendly");
    }
}
let choice;
let toDoList = [];
while (choice !== "QUIT") {
    choice = prompt('What would you like to do?').toUpperCase();
    switch (choice) {
        case "NEW":
            toDoList.push(prompt("What task would you like to add?"));
            break;
        case "LIST":
            if (toDoList.length !== 0) {
                console.log("-------------------------")
                for (let item of toDoList) {
                    console.log(toDoList.indexOf(item) + ": " + item);
                }
                console.log("-------------------------")
            }
            else {
                console.log("This list is empty!");
            }
            break;
        case "DELETE":
            let indexNum = parseInt(prompt("Please enter the index of the task you'd like to delete:"));
            do {
                if (indexNum !== NaN && (indexNum < toDoList.length || indexNum >= 0)) {
                    toDoList.splice(indexNum, 1);
                    break;
                } else {
                    indexNum = prompt("Please enter a valid index:");
                }
            } while (indexNum === NaN || (indexNum >= toDoList.length || indexNum < 0));
            break;
        case "QUIT":
            console.log("Thanks for using the toDoList application!");
            break;
        default:
            console.log("Please enter a valid response:");
            break;
    }
}
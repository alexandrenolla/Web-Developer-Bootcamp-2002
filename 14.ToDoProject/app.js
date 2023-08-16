let user = prompt("What would you like to do?");
const array = [];

while (user !== "quit") {
    if (user === "new") {
        const todo = prompt("Enter new Todo:");
        array.push(todo);
        console.log(`${todo} added to list`);
    }
    else if (user === "list") {
        console.log("***************");
        array.forEach((todo, index) => {
            console.log(`${index}: ${todo}`);
            index = index + 1;
        });
        console.log("***************");
    }
    else if (user === "delete") {
        const index = prompt("Enter index of the Todo to delete");
        array.splice(index, 1);
        console.log("Todo removed.");
    }
    user = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
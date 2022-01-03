var names = []

// adding new name
function addNew(){
    var newName = prompt("What name would like to add?")
    names.push(newName)
}

// removing a name
function remove() {
    var removeName = prompt("Enter the name you want to remove?")
    var index = names.indexOf(removeName)
    names.slice(index,1)
}

// displaying all the names
function display() {
    console.log(names)
}

// logic
var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty"
if (start === 'y') {
    while (request !== "quit"){
        request = prompt("Please select an action: add,remove,display or quit.")
        if (request === 'add') {
            addNew();
        }else if (request === 'display') {
            display();
        }else if (request === 'remove') {
            remove();
        }else {
            alert("Not recognized")
            // request = 'quit'
        }
    }
}
alert("Thanks for using the Web app! Please refresh to start over!")

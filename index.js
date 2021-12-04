let items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.querySelector(".item-list")
const addBtn = document.querySelector(".add button")


// save the items inside the array

addBtn.addEventListener('click', function() {
    let input = document.getElementById("add-input").value
    items.push(input)
    printing()
})

function dlt(x) {
    items.splice(x, 1)
    printing()
}

// removing the parentNode
// function dltParent(){
//     this.parentNode.remove();
// }
// console.log

// for(var i=0; i<current_tasks.length; i++){
//     current_tasks[i].onclick = function(){
//         this.parentNode.remove();
//     }
// }

// redner the items
function printing() {
    checklist.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        checklist.innerHTML += `
        <div class="js-list">
            <input type="checkbox">
            <label class="strikethrough"><span>${items[i]}</span><button onclick="dlt(${i})"><i class="fas fa-trash"></i></button></label>
        </div>
        `
    }
}

printing()

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.


let items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.querySelector(".item-list")
const addBtn = document.querySelector(".add button")
let input = document.getElementById("add-input");



// save the items inside the array
addBtn.addEventListener('click', function() {
    if (input.value === "") {
        alert("Please fill the input first!")
    } else {
        items.push(input.value)
        input.value = "";
        printing()
    }
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
        let fullInput = `<div class="js-list">
        <input type="checkbox" id="${items[i]}">
        <label for="${items[i]}" class="strikethrough"><span>${items[i]}</span></label>
        <button onclick="dlt(${i})"><i class="fas fa-trash"></i></button>
    </div>`
        checklist.insertAdjacentHTML('beforeend',fullInput)
    }
}

printing()


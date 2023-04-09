var time = $('#time').text(dayjs().format('dddd, MMMM D')); 
var hour = [9,10, 11, 12, 13, 14, 15, 16, 17];
let hourVar = (dayjs().hour())
let todo = document.querySelector("#to-do")
let todo1 = document.querySelector("#to-do1")
let todo2 = document.querySelector("#to-do2")
let todo3 = document.querySelector("#to-do3")
let todo4 = document.querySelector("#to-do4")
let todo5 = document.querySelector("#to-do5")
let todo6 = document.querySelector("#to-do6")
let todo7 = document.querySelector("#to-do7")
let todo8 = document.querySelector("#to-do8")
let save = document.querySelector("#save");
let save1 = document.querySelector("#save1");
let save2 = document.querySelector("#save2");
let save3 = document.querySelector("#save3");
let save4 = document.querySelector("#save4");
let save5 = document.querySelector("#save5");
let save6 = document.querySelector("#save6");
let save7 = document.querySelector("#save7");
let save8 = document.querySelector("#save8");


function list() {
   let input = localStorage.getItem("todo-list-item")
   let input1 = localStorage.getItem("todo-list-item1")
   let input2 = localStorage.getItem("todo-list-item2")
   let input3 = localStorage.getItem("todo-list-item3")
   let input4 = localStorage.getItem("todo-list-item4")
   let input5 = localStorage.getItem("todo-list-item5")
   let input6 = localStorage.getItem("todo-list-item6")
   let input7 = localStorage.getItem("todo-list-item7")
   let input8 = localStorage.getItem("todo-list-item8")
    todo.value = input
    todo1.value = input1
    todo2.value = input2
    todo3.value = input3
    todo4.value = input4
    todo5.value = input5
    todo6.value = input6
    todo7.value = input7
    todo8.value = input8
    console.log(todo.textContent);
}

list();

for (let i = 0; i < hour.length; i++) {

    if (hour[i] < hourVar) {
        $('input.time').eq(i).css('background-color', 'rgb(211, 211, 211)' )
    } else if (hour[i] === hourVar) {
        $('input.time').eq(i).css('background-color', 'rgb(255, 0, 0)' )
    } else {
        $('input.time').eq(i).css('background-color', 'rgb(0, 255, 0)' )
    }
}

save.addEventListener("click", function(e) {
    e.preventDefault()
    if( e.target.matches("#save")) {
        localStorage.setItem("todo-list-item",todo.value )
        
    }
});

save1.addEventListener("click", function(e) {
    e.preventDefault()
    if( e.target.matches("#save1")) {
        localStorage.setItem("todo-list-item1",todo1.value )
        
    }
});

save2.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save2")) {
        localStorage.setItem("todo-list-item2",todo2.value )
        
    }
});

save3.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save3")) {
        localStorage.setItem("todo-list-item3",todo3.value )
        
    }
});

save4.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save4")) {
        localStorage.setItem("todo-list-item4",todo4.value )
        
    }
});

save5.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save5")) {
        localStorage.setItem("todo-list-item5",todo5.value )
        
    }
});

save6.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save6")) {
        localStorage.setItem("todo-list-item6",todo6.value )
        
    }
});

save7.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save7")) {
        localStorage.setItem("todo-list-item7",todo7.value )
        
    }
});

save8.addEventListener("click", function(e) {
        e.preventDefault()
    if( e.target.matches("#save8")) {
        localStorage.setItem("todo-list-item8",todo8.value )
        
    }
    list();
});

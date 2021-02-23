console.log("Welcome to To-Do-List");

// Whenever the user clicks the + button

let addBtn = document.getElementById("addBtn");
let addTxt = document.getElementById("addTxt");
let to_do_work = document.getElementById("todowork");

addBtn.addEventListener('click', function(e){
    let para = document.createElement('p');
    let done = document.createElement("button");
    done.id = "done";
    done.innerText = "Done";
    let del = document.createElement("button");
    del.id = "del";
    del.innerText = "X";
    para.innerText = addTxt.value;
    para.appendChild(done);
    para.appendChild(del);
    to_do_work.appendChild(para);

    addTxt.value = "";
    del.addEventListener('click', function (e) {
        to_do_work.removeChild(para);
    })

    done.addEventListener('click', function (e) {
        para.style.textDecoration = "line-through"
    })
})


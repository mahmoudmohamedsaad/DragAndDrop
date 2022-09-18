let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxes = document.querySelectorAll(".box");
let drag = null;
btn.onclick = function (){
    if(inp.value != ''){
        boxes[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>`
        inp.value = "";
    }
    dragItem();
}
//drag
function dragItem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item =>{
        //drag start
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = '0.5';
        })
        //drag end
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1';
        })
        boxes.forEach(box => {
            box.addEventListener('dragover' , function(e){
                e.preventDefault();
                this.style.background = '#090';
                this.style.color = '#fff';
            })
            box.addEventListener('dragleave' , function(){
                this.style.background = '#fff';
                this.style.color = '#000';
            })
            box.addEventListener('drop' , function(){
                this.append(drag);
                this.style.background = '#fff';
                this.style.color = '#000';
            })
        })
    })
}

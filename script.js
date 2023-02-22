const grid = document.querySelector("#grid");
const inner = document.querySelectorAll("#inner");
const shake = document.querySelector("shake");
const right = document.querySelector("right-controller");
const left = document.querySelector("left-controller");



function makeRows(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover',() => {cell.style.backgroundColor = "black";})
      //('draggable', 'false')
      grid.appendChild(cell).className = "pixel";
  
    };
  };
  
  makeRows(16);

function changeSize(input){
  input.addEventListener('keydown', (e) => {
      if (13 === e.keyCode) {
        makeRows(input);
      } 
    
    })
  };
console.log(changeSize(input));

function changeColor(right, left){
  if(right){
    cell.style.backgroundColor = {};
    //rba number must be between 3-252
  }
  if(left){

  }
}

right.forEach(right =>{
  right.addEventListener('click', function(){
      changeColor();
  })
})

left.forEach(left =>{
  left.addEventListener('click', function(){
      changeColor();
  })
})
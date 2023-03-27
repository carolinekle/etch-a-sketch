const grid = document.querySelector("#grid");
const inner = document.querySelectorAll("#inner");
const shake = document.querySelector(".shake");
const right = document.querySelector(".right-controller");
const left = document.querySelector(".left-controller");
const change = document.querySelector(".change"); 
const newSize = document.querySelector(".new-size").value;



function makeRows(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover',() => {cell.style.backgroundColor = 'black';})
      //('draggable', 'false')
      grid.appendChild(cell).className = "pixel";
  
    };
  };
  
makeRows(16)


right.addEventListener('click', function(){
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((cell) => {
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = changeColor();
      });
    })
  });

function changeColor(){
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return color ='rgb(' + r + ', ' + g + ', ' + b + ')';
};

shake.addEventListener('click',() => {{
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((cell) => cell.style.backgroundColor = "white");
}});

function revertColor(){
  let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((cell) => {
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
      });
    })
};


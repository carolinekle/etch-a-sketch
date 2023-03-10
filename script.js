const grid = document.querySelector("#grid");
const inner = document.querySelectorAll("#inner");
const shake = document.querySelector(".shake");
const right = document.querySelector(".right-controller");
const left = document.querySelector(".left-controller");
const change = document.querySelector(".change"); 

let color = "black";



function makeRows(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover',() => {cell.style.backgroundColor = color;})
      //('draggable', 'false')
      grid.appendChild(cell).className = "pixel";
  
    };
  };
  
makeRows(16)


console.log(changeColor);


right.addEventListener('onclick', () => {
    cell.style.backgroundColor = {
      Random(){
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
    };
    //rba number must be between 3-252
  }
); 



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
  return color = "black";
}

 /* change.addEventListener('click', () => {
      
        let newSize = document.querySelector(".new-size").innerHTML;
        if(newSize<8 || newSize>80){
        makeRows(newSize);
        let currentSize = document.querySelector("current-size");
        currentSize.appendChild(newSize);
        }
      
        else{
          makeRows(16)
          console.log("Try a smaller number!");//not working
        }
//else if for when the input is deleted
      } 
    
    );  */
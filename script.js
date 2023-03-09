const grid = document.querySelector("#grid");
const inner = document.querySelectorAll("#inner");
const shake = document.querySelector(".shake");
const right = document.querySelector(".right-controller");
const left = document.querySelector(".left-controller");
 const change = document.querySelector(".change"); 



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
  
makeRows(16)

function changeColor(){
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

console.log(changeColor);

 change.addEventListener('click', () => {
      
        let newSize = document.querySelector(".new-size").innerHTML;
        if(newSize>80){
          window.alert("Try a smaller number!");//not working
        }
      
        else{
        makeRows(newSize);
        let currentSize = document.querySelector("current-size");
        currentSize.appendChild(newSize);
        }
//else if for when the input is deleted
      } 
    
    ); 
console.log(changeSize(input));

/* right.addEventListener('click', () => {
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

}); */

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


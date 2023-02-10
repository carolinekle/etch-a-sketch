const grid = document.querySelector("#grid");
const inner = document.querySelectorAll("#inner");


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
     
      grid.appendChild(cell).className = "pixel";
      setListener(pixel);
    };
  };
  
  makeRows(16, 16);

    grid.addEventListener("click", function(e) {

    if(e.target.contains('pixel')){
 
    alert("clicked");
    }
   });

let grid = document.getElementById("grid");


    for(i = 0; i < 250; i++){
    let pixel = document.createElement('pixel');
    pixel.classList = 'pixel';
    grid.appendChild(pixel);
    console.log(pixel);
    }

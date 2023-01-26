  
  gridadjust(16,16);
  checkifhovered();
  
  
  
  function gridadjust(rowvalue,colvalue){
      
      var container = document.getElementById("sketcharea");
      var container = document.getElementById("sketcharea");
      const specificDivs = document.querySelectorAll('.grid-item');
      specificDivs.forEach(div => div.remove());


      // Get the container width and height
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;

      // Determine the number of rows and columns needed
      var rows = rowvalue;
      var cols = colvalue;

      // Calculate the width and height of each grid item
      var itemWidth = containerWidth / cols;
      var itemHeight = containerHeight / rows;
      console.log("client height is "+containerHeight);

      for (var row = 0; row < (rows); row++) {
        for (var col = 0; col < (cols); col++) {
          var div = document.createElement("div");
          div.classList.add("grid-item");
          div.style.width = `${itemWidth}px`;
          div.style.height = `${itemHeight}px`;
          
          container.appendChild(div);
        }
      }
  }

  var slider = document.getElementById("toggle");
  var output = document.getElementById("gridvalue");
  // output.textContent = slider.value;

  slider.oninput = function() {

  if(this.value==6){
      output.textContent = "60x60";
      gridadjust(60,60);
      checkifhovered();
      }
  if(this.value==5){
    output.textContent = "45x45";
    gridadjust(45,45);
    checkifhovered();
    }

  if(this.value==4){
    output.textContent = "30x30";
    gridadjust(30,30);
    checkifhovered();
    }
  if(this.value==3){
    output.textContent = "16x16";
    gridadjust(16,16);
    checkifhovered();
  }
  if(this.value==2){
  output.textContent = "10x10";
  gridadjust(10,10);
  checkifhovered();
  }
  if(this.value==1){
    output.textContent = "5x5";
    gridadjust(5,5);
    checkifhovered();
    }
  if(this.value==0){
      output.textContent = "1x1";
      gridadjust(1,1);
      checkifhovered();
      
      }
}
  
var colorPicker = document.getElementById("color-picker");
var currentColor;
colorPicker.addEventListener("input", function(){
  currentColor = colorPicker.value;
});

// var button = document.getElementById("Marker");
// button.addEventListener("click", function(){
//   button.style.color = "lightgrey";
//   button.style.backgroundColor = "red";
// });

function checkifhovered(){
  let mouseOver = false;
  let mouseDown = false;
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    item.addEventListener("mouseover", function() {
      mouseOver = true;
      if (mouseDown === true) {
        this.style.backgroundColor = currentColor;
      }
    });
    // item.addEventListener("mouseout", function() {
    //   mouseOver = false;
    // });
    item.addEventListener("mousedown", function() {
      mouseDown = true;
      this.style.backgroundColor = currentColor;
    });
    item.addEventListener("mouseup", function() {
      mouseDown = false;
    });
  })};

    let clear = document.getElementById("clear");
    clear.addEventListener("click", function(){
    const gridItemsclear = document.querySelectorAll('.grid-item');
    gridItemsclear.forEach(item =>{
      item.style.backgroundColor="white";
    })});

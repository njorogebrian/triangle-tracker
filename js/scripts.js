  function myFunction() {
    var base = parseInt(document.getElementById("base").value);
    var height = parseInt(document.getElementById("height").value);
    var width = parseInt(document.getElementById("width").value);

    var array = [base, height, width];

    if (base === height && height === width && width === base) {
      alert("this is an equilateral triangle");
    } else if (base == height || height == width || width == base) {
      alert("this is an isosceles triangle")
    } else if (base + height < width || width + base < height || width + height < base) {
      alert("its not a triangle")
    } else if (base + height > width || width + base > height || widht + height > base) {
      alert("scalene triangle")
    }
  }

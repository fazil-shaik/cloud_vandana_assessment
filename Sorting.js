function bubbleSortDescending(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap elements if they are in the wrong order (descending order)
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

var array = [2, 3, 4, 12, 4, 5, 6];
bubbleSortDescending(array);
console.log("Descending order is: " + array);

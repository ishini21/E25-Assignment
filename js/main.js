
// gallery.js
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.grid');
  const leftColumns = document.getElementById('left-columns');
  const rightColumns = document.getElementById('right-columns');
  const centerArea = document.querySelector('.center-area');
  
  // Remove these elements temporarily
  grid.removeChild(leftColumns);
  grid.removeChild(centerArea);
  grid.removeChild(rightColumns);
  
  // Create 19×13 = 247 squares for the full grid
  for (let i = 1; i <= 247; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    grid.appendChild(square);
  }
  
  // Remove squares where the left columns, center area, and right columns will go
  const squaresToRemove = [];
  for (let row = 4; row <= 10; row++) {
    for (let col = 1; col <= 19; col++) {
      const index = (row - 1) * 19 + col;
      squaresToRemove.push(index);
    }
  }
  squaresToRemove.sort((a, b) => b - a).forEach(index => {
    grid.removeChild(grid.children[index - 1]);
  });
  
  // Create left columns (3 columns × 7 rows = 21 squares)
  for (let i = 1; i <= 21; i++) {
    const square = document.createElement('div');
    square.className = 'left-square';
    leftColumns.appendChild(square);
  }
  
  // Add images to left columns
  const leftImages = [
    [9, "assets/images/section_1/image3.png"],
    [11, "assets/images/section_1/image2.png"],
    [13, "assets/images/section_1/image1.png"],
    [15, "assets/images/section_1/image4.png"],
    [17, "assets/images/section_1/image5.png"]
  ];
  
  leftImages.forEach(([squareNum, imgSrc]) => {
    if (squareNum > 0 && squareNum <= 21) {
      const img = document.createElement('img');
      img.src = imgSrc;
      leftColumns.children[squareNum - 1].appendChild(img);
    }
  });
  
  // Create right columns (3 columns × 7 rows = 21 squares)
  for (let i = 1; i <= 21; i++) {
    const square = document.createElement('div');
    square.className = 'right-square';
    rightColumns.appendChild(square);
  }
  
  // Add images to right columns
  const rightImages = [
    [8, "assets/images/section_1/image7.png"],
    [10, "assets/images/section_1/image6.png"],
    [14, "assets/images/section_1/image8.png"],
    [15, "assets/images/section_1/image9.png"],
    [18, "assets/images/section_1/image10.png"]
  ];
  
  rightImages.forEach(([squareNum, imgSrc]) => {
    if (squareNum > 0 && squareNum <= 21) {
      const img = document.createElement('img');
      img.src = imgSrc;
      rightColumns.children[squareNum - 1].appendChild(img);
    }
  });
  
  // Reinsert the columns and center area
  const fourthRow = (4-1) * 19 + 1;
  const insertPosition = grid.children[fourthRow - 1] || null;
  grid.insertBefore(leftColumns, insertPosition);
  grid.insertBefore(centerArea, insertPosition);
  grid.insertBefore(rightColumns, insertPosition);
});
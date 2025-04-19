document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('imageUrl');
    const pieces = urlParams.get('pieces');
  
    // 1. Set the image
    const puzzleImg = document.querySelector('#puzzleImg');
    if (puzzleImg && imageUrl) {
      puzzleImg.src = decodeURIComponent(imageUrl);
    }
  
    // 2. Select puzzle piece count
    if (pieces) {
      setTimeout(() => {
        const pieceItems = document.querySelectorAll('#menu li');
        const piecesOptions = [12, 25, 50, 100, 200, 500, 1000];
        const targetPieces = parseInt(pieces);
        const closestPieces = piecesOptions.reduce((prev, curr) =>
          Math.abs(curr - targetPieces) < Math.abs(prev - targetPieces) ? curr : prev
        );
  
        pieceItems.forEach(item => {
          if (item.textContent.includes(closestPieces + ' pieces')) {
            item.classList.add('active'); // highlight selection
            item.click(); // simulate user click
          }
        });
      }, 500);
    }
  });
// click listeners to the piece menu 
document.addEventListener('DOMContentLoaded', () => {
    const pieceMenuItems = document.querySelectorAll('#menu li');
  
    pieceMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove 'active' from all
        pieceMenuItems.forEach(i => i.classList.remove('active'));
        // Add to clicked one
        item.classList.add('active');
  
        // Log for debugging
        console.log('Selected pieces:', item.textContent);
      });
    });
  });
  
  // Helper: Parse URL parameters manually (if needed elsewhere)
  function getUrlParams() {
    const params = {};
    window.location.search
      .substring(1)
      .split("&")
      .forEach(pair => {
        const [key, value] = pair.split("=");
        if (key) params[decodeURIComponent(key)] = decodeURIComponent(value || "");
      });
    return params;
  }
  
  // fallback loader if the image doesn't load 
  const puzzleImg = document.querySelector('#puzzleImg');
  if (puzzleImg) {
    puzzleImg.onerror = () => {
      console.warn("Image failed to load, replacing with fallback.");
      puzzleImg.src = './fallback.jpg'; 
    };
  }  
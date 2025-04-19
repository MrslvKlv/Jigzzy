/* const puzzleData = [
    { name: 'City Lights', image: 'city.jpg', pieces: 100 },
    { name: 'Ocean Waves', image: 'ocean.jpg', pieces: 500 },
    { name: 'Preslav', image: 'preslav.jpg', pieces: 1000 },
    
  ];*/
  
  window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.map-grid');
  
    puzzleData.forEach(puzzle => {
      const item = document.createElement('a');
      item.href = `Jiggzy.html?imageUrl=./${encodeURIComponent(puzzle.image)}&pieces=${puzzle.pieces}`;
      item.className = 'map-item button';
      item.innerHTML = `
        <img src="./${puzzle.image}" alt="${puzzle.name}">
        <p>${puzzle.name}</p>
      `;
      grid.appendChild(item);
    });
  });
  
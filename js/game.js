// Game state init (used across pages)
function setInventory(items) {
    localStorage.setItem('inventory', JSON.stringify(items));
  }
  
  function setMusic(type) {
    localStorage.setItem('music', type);
  }
  
  function setHasSaidYes(value) {
    localStorage.setItem('hasSaidYes', value);
  }
  
  function incrementLoop() {
    const count = parseInt(localStorage.getItem('loopCount') || '0');
    localStorage.setItem('loopCount', count + 1);
  }
  
  function resetGame() {
    localStorage.setItem('inventory', JSON.stringify([]));
    localStorage.setItem('hasSaidYes', 'false');
  }
  
const listItems = document.querySelectorAll('#list li');

function filterItems(searchQuery) {
  searchQuery = searchQuery.toLowerCase();
  
  listItems.forEach(function(item) {
    const itemText = item.innerText.toLowerCase();
    
    if (itemText.includes(searchQuery)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

document.getElementById('searchInput').addEventListener('keyup', function(event) {
  const searchQuery = event.target.value;
  filterItems(searchQuery);
});

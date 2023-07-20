const listItems = Array.from(document.querySelectorAll('#list li'));

function filterItems(searchQuery) {
  searchQuery = searchQuery.toLowerCase();

  const filteredItems = listItems.filter(function(item) {
    const itemText = item.innerText.toLowerCase();
    return itemText.includes(searchQuery);
  });

  listItems.forEach(function(item) {
    if (filteredItems.includes(item)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
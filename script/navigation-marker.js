const marker = document.getElementById('marker-menu');
const items = document.querySelectorAll('.menu-list__item');


function fitMarker(event) {
  const clickedItem = event.target;

  marker.style.left = clickedItem.offsetLeft + 'px';
  marker.style.width = clickedItem.offsetWidth + 'px';

}

items.forEach(item => {
  item.addEventListener('click', fitMarker);
});


const draggables = document.querySelectorAll('.draggable');

draggables.forEach(item => {
  item.addEventListener('mousedown', dragStart);
});  

function dragStart(e) {
  const element = e.target;
  let shiftX = e.clientX - element.getBoundingClientRect().left;
  let shiftY = e.clientY - element.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    element.style.left = pageX - shiftX + 'px';
    element.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
 
  element.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  };
}  
let active = document.querySelector('.toggle-container').children[0];

toggleClick(active);

let citeContainer = document.getElementById('all-cites');

Array.from(document.getElementsByTagName('cite')).forEach((cite) => {
  let copy = cite.cloneNode(true);
  citeContainer.appendChild(copy);
});

function toggleClick(e) {

  active = e;
  let container = e.parentElement;

  Array.from(container.children).forEach(child => {
    child.classList.remove('active');
  });

  e.classList.add('active');
  
  let selector = document.getElementById('tgs');

  let rect = e.getBoundingClientRect();

  selector.style.left = `${rect.left}px`;
  selector.style.top = `${rect.top}px`;

  selector.style.width = `${rect.width - 2}px`;
  selector.style.height = `${rect.height - 2}px`;

  Array.from(document.getElementsByClassName('content')).forEach(content => {
    content.classList.add('hidden');
  });

  let id = e.id.split('-')[0];
  document.getElementById(id).classList.remove('hidden');
}

window.addEventListener('resize', () => {
  let selector = document.getElementById('tgs');
  let transition = selector.style.transition;
  selector.style.transition = 'none';
  toggleClick(active);
  setTimeout(() => {
    selector.style.transition = transition;
  }, 500);
});

function toggleModal(e) {
  document.getElementsByTagName('body')[0].classList.toggle('modal-open');
  e.classList.toggle('modal');
  document.getElementById('modal-blur').classList.toggle('modal-blur');
}
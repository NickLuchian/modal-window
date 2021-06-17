'use strict';
//selecting the elements and store them in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // in case of querry selector it finds only the first element of this class, id, etc. so we use querrySelectorAll
console.log(btnsOpenModal); //NodeList that we can iterate through

const openModal = function () {
  modal.classList.remove('hidden'); //select class but  whitout .(dot), . is only for selectors
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//key pressing events (global)
document.addEventListener('keydown', function (e) {
  //every time the key was pressed it will generate an object about the info of event
  //for all keys
  console.log(e.key); // we access key property from KeyboardEvent object
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

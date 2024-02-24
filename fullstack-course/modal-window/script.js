'use strict';


// using querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent);
}

// add even listener
// remove the hidden class
// add function to close the file when click on the close button
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const openModal = function() {
    console.log('Button click!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

// handle keyPress
document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
})

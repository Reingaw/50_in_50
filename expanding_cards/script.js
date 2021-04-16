const panels = document.querySelectorAll('.panel');
let counter = 0;

panels.forEach((panel, index)=>{
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        counter = index;
        panel.classList.add('active');
    })
});

window.setInterval(autoExpand, 5000);

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function autoExpand() {    
    removeActiveClasses();
    panels[counter].classList.add('active');

    (counter == 4) ? counter = 0 : counter++;
}
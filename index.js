const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

 buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        const color = e.target.id; // get the id to click button
        
        // check which color was clicked and change the bachground accordingly
        if ( color === 'grey') {
            body.style.backgroundColor = 'grey';
            
        }
        if ( color === 'white') {
            body.style.backgroundColor = 'white';
            
        }
        if ( color === 'blue') {
            body.style.backgroundColor = 'blue';
            
        }
        if ( color === 'yellow') {
            body.style.backgroundColor = 'yellow';
            
        }
    });
 });

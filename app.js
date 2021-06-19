var left = 2;
window.onkeydown = function (event){
    var character = document.getElementById('ryu')
    console.log(event.keyCode)
    if(event.keyCode === 39){
        left = left + 2;
        character.style.left = left + 'px'
        character.src = 'images/ryu-cfe-run.gif';
        
    }
}
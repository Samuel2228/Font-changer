let textsArea = document.getElementById('texts-area');
let number = document.getElementById('number');
let change = document.getElementById('change');
// let paragraph = document.getElementById('paragraph');

change.addEventListener('click', function(){
   let fed = number.value;
    textsArea.style.fontSize = fed + "px";
})

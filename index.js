const value= document.querySelector('#counter');
function decrement(){
    let val=parseInt(value.textContent);
    val=val-1;
    value.textContent=val;
}
function increment(){
    let val=parseInt(value.textContent);
    val=val+1;
    value.textContent=val;
}
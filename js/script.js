function init(){
//add your javascrip between these two lines of code
  function myEventFunction(){
    var input=document.getElementById('entryinput').value;
    var output=document.getElementById('textoutput');
    result.innerHTML=input;
    alert('Sebastian Sandoval: '+input);
  }
  var button=document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);
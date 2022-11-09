function init(){
//add your javascrip between these two lines of code
  function showalert(){
    var input=document.getElementById('entryinput').value;
    var output=document.getElementById('textoutput');
    output.innerHTML=input;
    alert('Sebastian Sandoval: '+input);
  }
  var button=document.getElementById('entrybutton');
  button.addEventListener('click', showalert);
}
window.addEventListener('load', init);
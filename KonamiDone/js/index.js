// set var and return input value
function getInput() {
  command = commandInput.value;
  return command;
}

// construct the html+text of the input command
function attachCommand() {
  // the command you entered
  var li = document.createElement('li');
  li.textContent = getInput();
  
  // the path
  var span = document.createElement('span');
  span.className = 'path';
  span.textContent = path;
  
  // attach path before command
  li.insertBefore(span,li.firstChild);
  
  // and attach to window
  result.appendChild(li);
}

// construct the html+text of the response
function returnResponse() {
  var li = document.createElement('li');
  
  // plain command vs starting with sudo
  var answer = getInput();
  var answer2 = " Sorry Didn't have the time to think about this, To have all the commands available write \'help\'";
  if(answer=="help") answer2="Commands lists : help, win, sudo, sources, more, ls, credits'";
  if(answer=="more") answer2="Use more to load a file";
  if(answer=="win") answer2="Haha It would be too easy";
  if(answer=="ls") answer2="Answer, useless, ..,";
  if(answer==":(") answer2="Don't be sad";
  if(answer==":)") answer2="=)"; 
  if(answer=="clear") answer2="Nope that don't work sorry"; 
  if(answer=="more Answer") answer2="You found the answer, write \"Nuit2info2017\"";
  if(answer=="more useless") answer2="Nope that's really useless.";
  if(answer=="sudo") answer2="You already have all the rights";
  if(answer=="sources") answer2="Thanks to Giana  for these scripts, you can find it here : https://codepen.io/giana/pen/XXzQOW"; 
  if(answer=="Nuit2info2017") window.location.href = "../victory/index.html";
  if(answer=="credits") answer2="Maxime Yonnet - Damien Robert - Intouchable";
  
  li.textContent = answer2;

  
  
  // and attach to window
  result.appendChild(li);
}

// set input to last command on up key (see event listener below)
function repeatInput() {
  commandInput.value = command;
}

// scroll to bottom...
function scrollToBottom() {
  result.scrollTop = result.scrollHeight;
}

// run all functions on enter (see event listener below)
function doTheThing() {
  if(getInput().trim() !== '') { // trim whitespace and check if empty
    attachCommand();
    returnResponse();
    scrollToBottom();
  }
  
  commandInput.value = ''; // clear input value 
}

// var hoisting transports this to the top
var commandInput = document.getElementById('command-input'),
    result = document.querySelector('.result'),
    command = '',
    path = '/root/home/$-: ';

// whenever you press a key
commandInput.addEventListener('keydown',function(e){
  if(e.keyCode === 13) doTheThing(); // enter key
  if(e.keyCode === 38) repeatInput(); // up key
});
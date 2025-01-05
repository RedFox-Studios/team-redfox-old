const terminal = document.querySelector('#terminal');
const output = document.querySelector('.output');
const input = document.querySelector('.input input');

function processCommand() {
  const command = input.value.trim();
  if (command === 'help') {
    output.innerHTML += '<div>$ help<br>echo [text]: prints the specified text to the console<br>clear or cls: clears the console<br>about: displays information about this terminal<br>spam [text] [number]: prints the specified text the specified number of times (please dont use space, use this instead: spam hello.world 5) <br> get.admin: give you admin commands <br> pause: pause terminal <br> exit: exit terminal <br> start [url]: opens the specified URL in a new tab</div>';
  } else if (command.startsWith('echo ')) {
    output.innerHTML += '<div>$ ' + command + '<br>' + command.substring(5) + '</div>';
  } else if (command === 'clear') {
    output.innerHTML = '';
  } else if (command === 'cls') {
    output.innerHTML = '';
  } else if (command === 'about') {
    output.innerHTML += '<div>$ about<br>This is a simple terminal created using HTML, CSS, and JavaScript.</div>';
  } else if (command === 'bomb') {
    output.innerHTML += '<div>$ bomb</div>';
  } else if (command === '') {
    output.innerHTML += '<div>$ [server] <br>This terminal doesnt support break lines</div>';
  } else if (command === 'pause') {
    output.innerHTML += '<div>$ This is not Windows CMD!</div>';
  } else if (command === 'exit') {
    output.innerHTML += '<div>$ This is not Windows CMD!</div>';
  } else if (command === 'get.admin') {
    output.innerHTML += '<div>$ get.admin<br>[server] Access Denied! Command available for owner only!</div>';
  } else if (command.startsWith('spam ')) {
  } else if (command.startsWith('spam ')) {
    const args = command.split(' ');
    if (args.length !== 3) {
      output.innerHTML += '<div>$ ' + command + '<br>Incorrect number of arguments. Usage: spam [text] [number]</div>';
      input.value = '';
      return;
    }
    const text = args[1];
    const count = parseInt(args[2]);
    if (isNaN(count)) {
      output.innerHTML += '<div>$ ' + command + '<br>Invalid number. Usage: spam [text] [number]</div>';
      input.value = '';
      return;
    }
    for (let i = 0; i < count; i++) {
      output.innerHTML += '<div>$ ' + command + '<br>' + text + '</div>';
    }
  } else if (command.startsWith('start ')) {
    const url = command.substring(6);
    if (url === '') {
      output.innerHTML += '<div>$ ' + command + '<br>No URL specified. Usage: start [url]</div>';
      input.value = '';
      return;
    }
    window.open('http://' + url, '_blank');
    output.innerHTML += '<div>$ ' + command + '<br>Opening ' + url + '...</div>';
  } else {
    output.innerHTML += '<div>$ ' + command + '<br>Unknown command. Type "help" for a list of commands.</div>';
  }
  input.value = '';
  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    processCommand();
  }
});



// This program is half-coded by ChatGPT and other half by Pilot2254 (copyright included!)
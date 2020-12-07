import {Component, primaryIdentifier, attribute, method, expose} from '@layr/component';
import {ComponentHTTPServer} from '@layr/component-http-server';
import {spawn} from 'child_process';

class spawnCommand extends Component {
  // We need a primary identifier
  @expose({get: true, set: true}) @primaryIdentifier() id;

  // Exposing the cmd value
  @expose({get: true, set: true}) @attribute('string') cmd = '';

  // The business logic
  @expose({call: true}) @method() spawnCMD() {
    let execute = this.cmd.split(' ');
    let command = execute[0];
    let args = exec.splice(1,-1);
    let youtubedl = spawn(command, args);
    youtubedl.on("close", code => {
      console.log(`child process exited with code ${code}`);
    });
  }
  @expose({call: true}) @method() setCmd(input) {
    this.cmd = input;
  }
}

// We serve the Counter through a ComponentHTTPServer
const server = new ComponentHTTPServer(spawnCMD, {port: 3000});
server.start();
import {Component, primaryIdentifier, attribute, method, expose} from '@layr/component';
import {ComponentHTTPServer} from '@layr/component-http-server';
import {spawn} from 'child_process';

class spawnCMD extends Component {
  // We need a primary identifier
  @expose({get: true, set: true}) @primaryIdentifier() id;

  // Exposing the cmd value
  @expose({get: true, set: true}) @attribute('string') cmd = '';

  // The business logic
  @expose({call: true}) @method() spawnCMD() {
    execute = this.cmd.split(' ');
    command = execute[0];
    args = exec.splice(1,-1);
    youtubedl = spawn(command, args);
    // youtubedl.on("close", code => {
    //   console.log(`child process exited with code ${code}`);
    // });
  }
}

// We serve the Counter through a ComponentHTTPServer
const server = new ComponentHTTPServer(spawnCMD, {port: 3000});
server.start();
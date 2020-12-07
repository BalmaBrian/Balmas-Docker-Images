import {ComponentHTTPClient} from '@layr/component-http-client';
import url from './youtube-url.js';

(async () => {
  // We create a client that is connected to the backend's server
  const client = new ComponentHTTPClient('http://localhost:3000');

  // We get the backend's component
  const BackendCommand = await client.getComponent();

  class spawnCMD extends BackendCommand {
    async spawnCMD() {
      await super.spawnCMD();
    }

    async setCmd(input) {
      await super.setCmd(input);
    }
  }

  const spawnCMD = new spawnCMD();
  await spawnCMD.setCmd(url.url);
  await spawnCMD.spawnCMD();
})();
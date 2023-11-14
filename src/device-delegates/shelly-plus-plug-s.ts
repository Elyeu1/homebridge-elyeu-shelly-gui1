import { ShellyPlusPlugS } from 'homebridge-elyeu-shelly-node-gui1';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Plus Plug S devices.
 */
export class ShellyPlusPlugSDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyPlusPlugS;

    this.addSwitch(d.switch0, { single: true });
  }
}

DeviceDelegate.registerDelegate(ShellyPlusPlugSDelegate, ShellyPlusPlugS);

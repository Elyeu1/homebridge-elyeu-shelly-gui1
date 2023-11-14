"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlusPlugUsDelegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Plus Plug US devices.
 */
class ShellyPlusPlugUsDelegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPlusPlugUsDelegate = ShellyPlusPlugUsDelegate;
base_1.DeviceDelegate.registerDelegate(ShellyPlusPlugUsDelegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPlusPlugUs);
//# sourceMappingURL=shelly-plus-plug-us.js.map
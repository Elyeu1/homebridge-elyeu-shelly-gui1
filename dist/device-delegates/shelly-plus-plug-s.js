"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlusPlugSDelegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Plus Plug S devices.
 */
class ShellyPlusPlugSDelegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPlusPlugSDelegate = ShellyPlusPlugSDelegate;
base_1.DeviceDelegate.registerDelegate(ShellyPlusPlugSDelegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPlusPlugS);
//# sourceMappingURL=shelly-plus-plug-s.js.map
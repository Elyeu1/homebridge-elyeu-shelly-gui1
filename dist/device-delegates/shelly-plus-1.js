"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlus1Delegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Plus 1 devices.
 */
class ShellyPlus1Delegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPlus1Delegate = ShellyPlus1Delegate;
base_1.DeviceDelegate.registerDelegate(ShellyPlus1Delegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPlus1, homebridge_elyeu_shelly_node_gui1_1.ShellyPlus1Ul);
//# sourceMappingURL=shelly-plus-1.js.map
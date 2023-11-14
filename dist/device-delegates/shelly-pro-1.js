"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPro1Delegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Pro 1 devices.
 */
class ShellyPro1Delegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPro1Delegate = ShellyPro1Delegate;
base_1.DeviceDelegate.registerDelegate(ShellyPro1Delegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPro1, homebridge_elyeu_shelly_node_gui1_1.ShellyPro1Rev1, homebridge_elyeu_shelly_node_gui1_1.ShellyPro1Rev2);
//# sourceMappingURL=shelly-pro-1.js.map
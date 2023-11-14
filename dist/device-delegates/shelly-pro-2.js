"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPro2Delegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Pro 2 devices.
 */
class ShellyPro2Delegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0);
        this.addSwitch(d.switch1);
    }
}
exports.ShellyPro2Delegate = ShellyPro2Delegate;
base_1.DeviceDelegate.registerDelegate(ShellyPro2Delegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPro2, homebridge_elyeu_shelly_node_gui1_1.ShellyPro2Rev1, homebridge_elyeu_shelly_node_gui1_1.ShellyPro2Rev2);
//# sourceMappingURL=shelly-pro-2.js.map
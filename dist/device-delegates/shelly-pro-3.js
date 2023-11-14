"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPro3Delegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Pro 3 devices.
 */
class ShellyPro3Delegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0);
        this.addSwitch(d.switch1);
        this.addSwitch(d.switch2);
    }
}
exports.ShellyPro3Delegate = ShellyPro3Delegate;
base_1.DeviceDelegate.registerDelegate(ShellyPro3Delegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPro3);
//# sourceMappingURL=shelly-pro-3.js.map
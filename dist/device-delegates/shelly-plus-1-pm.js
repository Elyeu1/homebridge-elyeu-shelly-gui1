"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlus1PmDelegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Plus 1PM devices.
 */
class ShellyPlus1PmDelegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPlus1PmDelegate = ShellyPlus1PmDelegate;
base_1.DeviceDelegate.registerDelegate(ShellyPlus1PmDelegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPlus1Pm, homebridge_elyeu_shelly_node_gui1_1.ShellyPlus1PmUl);
//# sourceMappingURL=shelly-plus-1-pm.js.map
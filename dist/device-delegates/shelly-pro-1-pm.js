"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPro1PmDelegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Pro 1 PM devices.
 */
class ShellyPro1PmDelegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPro1PmDelegate = ShellyPro1PmDelegate;
base_1.DeviceDelegate.registerDelegate(ShellyPro1PmDelegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPro1Pm, homebridge_elyeu_shelly_node_gui1_1.ShellyPro1PmRev1, homebridge_elyeu_shelly_node_gui1_1.ShellyPro1PmRev2);
//# sourceMappingURL=shelly-pro-1-pm.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlus2PmDelegate = void 0;
const homebridge_elyeu_shelly_node_gui1_1 = require("homebridge-elyeu-shelly-node-gui1");
const base_1 = require("./base");
/**
 * Handles Shelly Plus 2 PM devices.
 */
class ShellyPlus2PmDelegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        const isCover = d.profile === 'cover';
        this.addCover(d.cover0, { active: isCover });
        this.addSwitch(d.switch0, { active: !isCover });
        this.addSwitch(d.switch1, { active: !isCover });
    }
}
exports.ShellyPlus2PmDelegate = ShellyPlus2PmDelegate;
base_1.DeviceDelegate.registerDelegate(ShellyPlus2PmDelegate, homebridge_elyeu_shelly_node_gui1_1.ShellyPlus2Pm, homebridge_elyeu_shelly_node_gui1_1.ShellyPlus2PmRev1);
//# sourceMappingURL=shelly-plus-2-pm.js.map
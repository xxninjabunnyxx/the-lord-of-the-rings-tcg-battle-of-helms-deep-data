"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var js_yaml_1 = __importDefault(require("js-yaml"));
var _5C106_1 = __importDefault(require("./cards/5C106"));
var _5C108_1 = __importDefault(require("./cards/5C108"));
var _5C109_1 = __importDefault(require("./cards/5C109"));
var _5C117_1 = __importDefault(require("./cards/5C117"));
var _5C14_1 = __importDefault(require("./cards/5C14"));
var _5C17_1 = __importDefault(require("./cards/5C17"));
var _5C24_1 = __importDefault(require("./cards/5C24"));
var _5C27_1 = __importDefault(require("./cards/5C27"));
var _5C28_1 = __importDefault(require("./cards/5C28"));
var _5C30_1 = __importDefault(require("./cards/5C30"));
var _5C32_1 = __importDefault(require("./cards/5C32"));
var _5C33_1 = __importDefault(require("./cards/5C33"));
var _5C35_1 = __importDefault(require("./cards/5C35"));
var _5C36_1 = __importDefault(require("./cards/5C36"));
var _5C37_1 = __importDefault(require("./cards/5C37"));
var _5C40_1 = __importDefault(require("./cards/5C40"));
var _5C43_1 = __importDefault(require("./cards/5C43"));
var _5C52_1 = __importDefault(require("./cards/5C52"));
var _5C53_1 = __importDefault(require("./cards/5C53"));
var _5C61_1 = __importDefault(require("./cards/5C61"));
var _5C62_1 = __importDefault(require("./cards/5C62"));
var _5C65_1 = __importDefault(require("./cards/5C65"));
var _5C66_1 = __importDefault(require("./cards/5C66"));
var _5C67_1 = __importDefault(require("./cards/5C67"));
var _5C68_1 = __importDefault(require("./cards/5C68"));
var _5C6_1 = __importDefault(require("./cards/5C6"));
var _5C73_1 = __importDefault(require("./cards/5C73"));
var _5C74_1 = __importDefault(require("./cards/5C74"));
var _5C75_1 = __importDefault(require("./cards/5C75"));
var _5C76_1 = __importDefault(require("./cards/5C76"));
var _5C81_1 = __importDefault(require("./cards/5C81"));
var _5C83_1 = __importDefault(require("./cards/5C83"));
var _5C85_1 = __importDefault(require("./cards/5C85"));
var _5C88_1 = __importDefault(require("./cards/5C88"));
var _5C90_1 = __importDefault(require("./cards/5C90"));
var _5C91_1 = __importDefault(require("./cards/5C91"));
var _5C93_1 = __importDefault(require("./cards/5C93"));
var _5C97_1 = __importDefault(require("./cards/5C97"));
var _5C98_1 = __importDefault(require("./cards/5C98"));
var _5C99_1 = __importDefault(require("./cards/5C99"));
var _5M1_1 = __importDefault(require("./cards/5M1"));
var _5M2_1 = __importDefault(require("./cards/5M2"));
var _5P121_1 = __importDefault(require("./cards/5P121"));
var _5P122_1 = __importDefault(require("./cards/5P122"));
var _5R100_1 = __importDefault(require("./cards/5R100"));
var _5R100T_1 = __importDefault(require("./cards/5R100T"));
var _5R102_1 = __importDefault(require("./cards/5R102"));
var _5R103_1 = __importDefault(require("./cards/5R103"));
var _5R112_1 = __importDefault(require("./cards/5R112"));
var _5R113_1 = __importDefault(require("./cards/5R113"));
var _5R116_1 = __importDefault(require("./cards/5R116"));
var _5R116T_1 = __importDefault(require("./cards/5R116T"));
var _5R11_1 = __importDefault(require("./cards/5R11"));
var _5R123_1 = __importDefault(require("./cards/5R123"));
var _5R124_1 = __importDefault(require("./cards/5R124"));
var _5R125_1 = __importDefault(require("./cards/5R125"));
var _5R126_1 = __importDefault(require("./cards/5R126"));
var _5R127_1 = __importDefault(require("./cards/5R127"));
var _5R128_1 = __importDefault(require("./cards/5R128"));
var _5R16_1 = __importDefault(require("./cards/5R16"));
var _5R18_1 = __importDefault(require("./cards/5R18"));
var _5R19_1 = __importDefault(require("./cards/5R19"));
var _5R21_1 = __importDefault(require("./cards/5R21"));
var _5R25_1 = __importDefault(require("./cards/5R25"));
var _5R25T_1 = __importDefault(require("./cards/5R25T"));
var _5R29_1 = __importDefault(require("./cards/5R29"));
var _5R29T_1 = __importDefault(require("./cards/5R29T"));
var _5R31_1 = __importDefault(require("./cards/5R31"));
var _5R39_1 = __importDefault(require("./cards/5R39"));
var _5R3_1 = __importDefault(require("./cards/5R3"));
var _5R41_1 = __importDefault(require("./cards/5R41"));
var _5R46_1 = __importDefault(require("./cards/5R46"));
var _5R47_1 = __importDefault(require("./cards/5R47"));
var _5R49_1 = __importDefault(require("./cards/5R49"));
var _5R4_1 = __importDefault(require("./cards/5R4"));
var _5R50_1 = __importDefault(require("./cards/5R50"));
var _5R51_1 = __importDefault(require("./cards/5R51"));
var _5R56_1 = __importDefault(require("./cards/5R56"));
var _5R58_1 = __importDefault(require("./cards/5R58"));
var _5R59_1 = __importDefault(require("./cards/5R59"));
var _5R5_1 = __importDefault(require("./cards/5R5"));
var _5R69_1 = __importDefault(require("./cards/5R69"));
var _5R70_1 = __importDefault(require("./cards/5R70"));
var _5R71_1 = __importDefault(require("./cards/5R71"));
var _5R72_1 = __importDefault(require("./cards/5R72"));
var _5R78_1 = __importDefault(require("./cards/5R78"));
var _5R7_1 = __importDefault(require("./cards/5R7"));
var _5R82_1 = __importDefault(require("./cards/5R82"));
var _5R84_1 = __importDefault(require("./cards/5R84"));
var _5R86_1 = __importDefault(require("./cards/5R86"));
var _5R89_1 = __importDefault(require("./cards/5R89"));
var _5R94_1 = __importDefault(require("./cards/5R94"));
var _5R95_1 = __importDefault(require("./cards/5R95"));
var _5R96_1 = __importDefault(require("./cards/5R96"));
var _5U101_1 = __importDefault(require("./cards/5U101"));
var _5U104_1 = __importDefault(require("./cards/5U104"));
var _5U105_1 = __importDefault(require("./cards/5U105"));
var _5U107_1 = __importDefault(require("./cards/5U107"));
var _5U10_1 = __importDefault(require("./cards/5U10"));
var _5U110_1 = __importDefault(require("./cards/5U110"));
var _5U111_1 = __importDefault(require("./cards/5U111"));
var _5U114_1 = __importDefault(require("./cards/5U114"));
var _5U115_1 = __importDefault(require("./cards/5U115"));
var _5U118_1 = __importDefault(require("./cards/5U118"));
var _5U119_1 = __importDefault(require("./cards/5U119"));
var _5U120_1 = __importDefault(require("./cards/5U120"));
var _5U12_1 = __importDefault(require("./cards/5U12"));
var _5U13_1 = __importDefault(require("./cards/5U13"));
var _5U15_1 = __importDefault(require("./cards/5U15"));
var _5U1_1 = __importDefault(require("./cards/5U1"));
var _5U20_1 = __importDefault(require("./cards/5U20"));
var _5U22_1 = __importDefault(require("./cards/5U22"));
var _5U23_1 = __importDefault(require("./cards/5U23"));
var _5U26_1 = __importDefault(require("./cards/5U26"));
var _5U2_1 = __importDefault(require("./cards/5U2"));
var _5U34_1 = __importDefault(require("./cards/5U34"));
var _5U38_1 = __importDefault(require("./cards/5U38"));
var _5U42_1 = __importDefault(require("./cards/5U42"));
var _5U44_1 = __importDefault(require("./cards/5U44"));
var _5U45_1 = __importDefault(require("./cards/5U45"));
var _5U48_1 = __importDefault(require("./cards/5U48"));
var _5U54_1 = __importDefault(require("./cards/5U54"));
var _5U55_1 = __importDefault(require("./cards/5U55"));
var _5U57_1 = __importDefault(require("./cards/5U57"));
var _5U60_1 = __importDefault(require("./cards/5U60"));
var _5U63_1 = __importDefault(require("./cards/5U63"));
var _5U64_1 = __importDefault(require("./cards/5U64"));
var _5U77_1 = __importDefault(require("./cards/5U77"));
var _5U79_1 = __importDefault(require("./cards/5U79"));
var _5U80_1 = __importDefault(require("./cards/5U80"));
var _5U87_1 = __importDefault(require("./cards/5U87"));
var _5U8_1 = __importDefault(require("./cards/5U8"));
var _5U92_1 = __importDefault(require("./cards/5U92"));
var _5U9_1 = __importDefault(require("./cards/5U9"));
var cards = [
  _5C106_1.default,
  _5C108_1.default,
  _5C109_1.default,
  _5C117_1.default,
  _5C14_1.default,
  _5C17_1.default,
  _5C24_1.default,
  _5C27_1.default,
  _5C28_1.default,
  _5C30_1.default,
  _5C32_1.default,
  _5C33_1.default,
  _5C35_1.default,
  _5C36_1.default,
  _5C37_1.default,
  _5C40_1.default,
  _5C43_1.default,
  _5C52_1.default,
  _5C53_1.default,
  _5C61_1.default,
  _5C62_1.default,
  _5C65_1.default,
  _5C66_1.default,
  _5C67_1.default,
  _5C68_1.default,
  _5C6_1.default,
  _5C73_1.default,
  _5C74_1.default,
  _5C75_1.default,
  _5C76_1.default,
  _5C81_1.default,
  _5C83_1.default,
  _5C85_1.default,
  _5C88_1.default,
  _5C90_1.default,
  _5C91_1.default,
  _5C93_1.default,
  _5C97_1.default,
  _5C98_1.default,
  _5C99_1.default,
  _5M1_1.default,
  _5M2_1.default,
  _5P121_1.default,
  _5P122_1.default,
  _5R100_1.default,
  _5R100T_1.default,
  _5R102_1.default,
  _5R103_1.default,
  _5R112_1.default,
  _5R113_1.default,
  _5R116_1.default,
  _5R116T_1.default,
  _5R11_1.default,
  _5R123_1.default,
  _5R124_1.default,
  _5R125_1.default,
  _5R126_1.default,
  _5R127_1.default,
  _5R128_1.default,
  _5R16_1.default,
  _5R18_1.default,
  _5R19_1.default,
  _5R21_1.default,
  _5R25_1.default,
  _5R25T_1.default,
  _5R29_1.default,
  _5R29T_1.default,
  _5R31_1.default,
  _5R39_1.default,
  _5R3_1.default,
  _5R41_1.default,
  _5R46_1.default,
  _5R47_1.default,
  _5R49_1.default,
  _5R4_1.default,
  _5R50_1.default,
  _5R51_1.default,
  _5R56_1.default,
  _5R58_1.default,
  _5R59_1.default,
  _5R5_1.default,
  _5R69_1.default,
  _5R70_1.default,
  _5R71_1.default,
  _5R72_1.default,
  _5R78_1.default,
  _5R7_1.default,
  _5R82_1.default,
  _5R84_1.default,
  _5R86_1.default,
  _5R89_1.default,
  _5R94_1.default,
  _5R95_1.default,
  _5R96_1.default,
  _5U101_1.default,
  _5U104_1.default,
  _5U105_1.default,
  _5U107_1.default,
  _5U10_1.default,
  _5U110_1.default,
  _5U111_1.default,
  _5U114_1.default,
  _5U115_1.default,
  _5U118_1.default,
  _5U119_1.default,
  _5U120_1.default,
  _5U12_1.default,
  _5U13_1.default,
  _5U15_1.default,
  _5U1_1.default,
  _5U20_1.default,
  _5U22_1.default,
  _5U23_1.default,
  _5U26_1.default,
  _5U2_1.default,
  _5U34_1.default,
  _5U38_1.default,
  _5U42_1.default,
  _5U44_1.default,
  _5U45_1.default,
  _5U48_1.default,
  _5U54_1.default,
  _5U55_1.default,
  _5U57_1.default,
  _5U60_1.default,
  _5U63_1.default,
  _5U64_1.default,
  _5U77_1.default,
  _5U79_1.default,
  _5U80_1.default,
  _5U87_1.default,
  _5U8_1.default,
  _5U92_1.default,
  _5U9_1.default,
];
var main = function () {
  cards.map(function (card) {
    fs_1.promises.writeFile(
      "./data/json/".concat(card.number, ".json"),
      JSON.stringify(card, null, 1)
    );
    fs_1.promises.writeFile(
      "./data/yml/".concat(card.number, ".yml"),
      js_yaml_1.default.dump(card)
    );
  });
};
main();
//# sourceMappingURL=index.js.map

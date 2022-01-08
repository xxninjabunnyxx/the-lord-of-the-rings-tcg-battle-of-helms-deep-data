import { promises as fs } from "fs";
import yaml from "js-yaml";

import _5C106 from "./cards/5C106";
import _5C108 from "./cards/5C108";
import _5C109 from "./cards/5C109";
import _5C117 from "./cards/5C117";
import _5C14 from "./cards/5C14";
import _5C17 from "./cards/5C17";
import _5C24 from "./cards/5C24";
import _5C27 from "./cards/5C27";
import _5C28 from "./cards/5C28";
import _5C30 from "./cards/5C30";
import _5C32 from "./cards/5C32";
import _5C33 from "./cards/5C33";
import _5C35 from "./cards/5C35";
import _5C36 from "./cards/5C36";
import _5C37 from "./cards/5C37";
import _5C40 from "./cards/5C40";
import _5C43 from "./cards/5C43";
import _5C52 from "./cards/5C52";
import _5C53 from "./cards/5C53";
import _5C61 from "./cards/5C61";
import _5C62 from "./cards/5C62";
import _5C65 from "./cards/5C65";
import _5C66 from "./cards/5C66";
import _5C67 from "./cards/5C67";
import _5C68 from "./cards/5C68";
import _5C6 from "./cards/5C6";
import _5C73 from "./cards/5C73";
import _5C74 from "./cards/5C74";
import _5C75 from "./cards/5C75";
import _5C76 from "./cards/5C76";
import _5C81 from "./cards/5C81";
import _5C83 from "./cards/5C83";
import _5C85 from "./cards/5C85";
import _5C88 from "./cards/5C88";
import _5C90 from "./cards/5C90";
import _5C91 from "./cards/5C91";
import _5C93 from "./cards/5C93";
import _5C97 from "./cards/5C97";
import _5C98 from "./cards/5C98";
import _5C99 from "./cards/5C99";
import _5M1 from "./cards/5M1";
import _5M2 from "./cards/5M2";
import _5P121 from "./cards/5P121";
import _5P122 from "./cards/5P122";
import _5R100 from "./cards/5R100";
import _5R100T from "./cards/5R100T";
import _5R102 from "./cards/5R102";
import _5R103 from "./cards/5R103";
import _5R112 from "./cards/5R112";
import _5R113 from "./cards/5R113";
import _5R116 from "./cards/5R116";
import _5R116T from "./cards/5R116T";
import _5R11 from "./cards/5R11";
import _5R123 from "./cards/5R123";
import _5R124 from "./cards/5R124";
import _5R125 from "./cards/5R125";
import _5R126 from "./cards/5R126";
import _5R127 from "./cards/5R127";
import _5R128 from "./cards/5R128";
import _5R16 from "./cards/5R16";
import _5R18 from "./cards/5R18";
import _5R19 from "./cards/5R19";
import _5R21 from "./cards/5R21";
import _5R25 from "./cards/5R25";
import _5R25T from "./cards/5R25T";
import _5R29 from "./cards/5R29";
import _5R29T from "./cards/5R29T";
import _5R31 from "./cards/5R31";
import _5R39 from "./cards/5R39";
import _5R3 from "./cards/5R3";
import _5R41 from "./cards/5R41";
import _5R46 from "./cards/5R46";
import _5R47 from "./cards/5R47";
import _5R49 from "./cards/5R49";
import _5R4 from "./cards/5R4";
import _5R50 from "./cards/5R50";
import _5R51 from "./cards/5R51";
import _5R56 from "./cards/5R56";
import _5R58 from "./cards/5R58";
import _5R59 from "./cards/5R59";
import _5R5 from "./cards/5R5";
import _5R69 from "./cards/5R69";
import _5R70 from "./cards/5R70";
import _5R71 from "./cards/5R71";
import _5R72 from "./cards/5R72";
import _5R78 from "./cards/5R78";
import _5R7 from "./cards/5R7";
import _5R82 from "./cards/5R82";
import _5R84 from "./cards/5R84";
import _5R86 from "./cards/5R86";
import _5R89 from "./cards/5R89";
import _5R94 from "./cards/5R94";
import _5R95 from "./cards/5R95";
import _5R96 from "./cards/5R96";
import _5U101 from "./cards/5U101";
import _5U104 from "./cards/5U104";
import _5U105 from "./cards/5U105";
import _5U107 from "./cards/5U107";
import _5U10 from "./cards/5U10";
import _5U110 from "./cards/5U110";
import _5U111 from "./cards/5U111";
import _5U114 from "./cards/5U114";
import _5U115 from "./cards/5U115";
import _5U118 from "./cards/5U118";
import _5U119 from "./cards/5U119";
import _5U120 from "./cards/5U120";
import _5U12 from "./cards/5U12";
import _5U13 from "./cards/5U13";
import _5U15 from "./cards/5U15";
import _5U1 from "./cards/5U1";
import _5U20 from "./cards/5U20";
import _5U22 from "./cards/5U22";
import _5U23 from "./cards/5U23";
import _5U26 from "./cards/5U26";
import _5U2 from "./cards/5U2";
import _5U34 from "./cards/5U34";
import _5U38 from "./cards/5U38";
import _5U42 from "./cards/5U42";
import _5U44 from "./cards/5U44";
import _5U45 from "./cards/5U45";
import _5U48 from "./cards/5U48";
import _5U54 from "./cards/5U54";
import _5U55 from "./cards/5U55";
import _5U57 from "./cards/5U57";
import _5U60 from "./cards/5U60";
import _5U63 from "./cards/5U63";
import _5U64 from "./cards/5U64";
import _5U77 from "./cards/5U77";
import _5U79 from "./cards/5U79";
import _5U80 from "./cards/5U80";
import _5U87 from "./cards/5U87";
import _5U8 from "./cards/5U8";
import _5U92 from "./cards/5U92";
import _5U9 from "./cards/5U9";

const cards = [
  _5C106,
  _5C108,
  _5C109,
  _5C117,
  _5C14,
  _5C17,
  _5C24,
  _5C27,
  _5C28,
  _5C30,
  _5C32,
  _5C33,
  _5C35,
  _5C36,
  _5C37,
  _5C40,
  _5C43,
  _5C52,
  _5C53,
  _5C61,
  _5C62,
  _5C65,
  _5C66,
  _5C67,
  _5C68,
  _5C6,
  _5C73,
  _5C74,
  _5C75,
  _5C76,
  _5C81,
  _5C83,
  _5C85,
  _5C88,
  _5C90,
  _5C91,
  _5C93,
  _5C97,
  _5C98,
  _5C99,
  _5M1,
  _5M2,
  _5P121,
  _5P122,
  _5R100,
  _5R100T,
  _5R102,
  _5R103,
  _5R112,
  _5R113,
  _5R116,
  _5R116T,
  _5R11,
  _5R123,
  _5R124,
  _5R125,
  _5R126,
  _5R127,
  _5R128,
  _5R16,
  _5R18,
  _5R19,
  _5R21,
  _5R25,
  _5R25T,
  _5R29,
  _5R29T,
  _5R31,
  _5R39,
  _5R3,
  _5R41,
  _5R46,
  _5R47,
  _5R49,
  _5R4,
  _5R50,
  _5R51,
  _5R56,
  _5R58,
  _5R59,
  _5R5,
  _5R69,
  _5R70,
  _5R71,
  _5R72,
  _5R78,
  _5R7,
  _5R82,
  _5R84,
  _5R86,
  _5R89,
  _5R94,
  _5R95,
  _5R96,
  _5U101,
  _5U104,
  _5U105,
  _5U107,
  _5U10,
  _5U110,
  _5U111,
  _5U114,
  _5U115,
  _5U118,
  _5U119,
  _5U120,
  _5U12,
  _5U13,
  _5U15,
  _5U1,
  _5U20,
  _5U22,
  _5U23,
  _5U26,
  _5U2,
  _5U34,
  _5U38,
  _5U42,
  _5U44,
  _5U45,
  _5U48,
  _5U54,
  _5U55,
  _5U57,
  _5U60,
  _5U63,
  _5U64,
  _5U77,
  _5U79,
  _5U80,
  _5U87,
  _5U8,
  _5U92,
  _5U9,
];

const main = () => {
  cards.map((card) => {
    fs.writeFile(
      `./data/json/${card.number}.json`,
      JSON.stringify(card, null, 1)
    );
    fs.writeFile(`./data/yml/${card.number}.yml`, yaml.dump(card));
  });
};

main();

import { Space } from "./Space";
import * as utils from "./utils";

export { Space } from "./Space";
export { checkCrossLines } from "./utils";
export { checkIsCoordsInArc } from "./utils";
export { drawFpc } from "./utils";
export { drawRound } from "./utils";
export { getCursorCoords } from "./utils";
export { getHypotenuse } from "./utils";
export { getRandomCoords } from "./utils";

const Dharmas = {
  Space,
  ...utils,
};
export default Dharmas;

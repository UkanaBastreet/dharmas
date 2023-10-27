import { Space } from "./Space";
import * as utils from "./utils";

const Dharmas = {
  Space,
  ...utils,
};

export { checkCrossLines } from "./utils";
export { checkIsCoordsInArc } from "./utils";
export { drawFpc } from "./utils";
export { drawRound } from "./utils";
export { getCursorCoords } from "./utils";
export { getHypotenuse } from "./utils";
export { getRandomCoordsBySizes } from "./utils";

export default Dharmas;

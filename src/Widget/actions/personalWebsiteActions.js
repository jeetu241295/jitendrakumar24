import { COUNT, DIALOG } from "../_helpers/constants";
import { createAction } from "../../Global/redux";

export const setCount = createAction(COUNT, "id");
export const dialogOpen = createAction(DIALOG, "index", "image");

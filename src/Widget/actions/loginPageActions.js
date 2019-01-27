import { COUNT } from "../_helpers/constants";
import { createAction } from "../../Global/redux";

export const setCount = createAction(COUNT, "id");

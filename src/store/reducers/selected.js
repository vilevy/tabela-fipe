import {
  SET_VEHICLE,
  SET_BRAND,
  SET_MODEL,
  SET_YEAR,
  CHANGE_STEP,
  RESET_ALL,
} from "../actions/actionsType";

import { steps } from "../../helpers/steps";

const initialState = {
  vehicle: null,
  brand: null,
  model: null,
  year: null,
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      };
    case SET_BRAND:
      return {
        ...state,
        brand: action.payload,
      };
    case SET_MODEL:
      return {
        ...state,
        model: action.payload,
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case CHANGE_STEP: {
      const resetedPreviousSteps = steps.reduce((acc, step, index) => {
        if (index >= steps.indexOf(action.payload)) {
          acc[step] = null;
        }
        return acc;
      }, {});
      return {
        ...state,
        ...{ ...resetedPreviousSteps },
      };
    }
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

const getSelectedVehicle = (state) => state.vehicle;
const getSelectedBrand = (state) => state.brand;
const getSelectedModel = (state) => state.model;
const getSelectedYear = (state) => state.year;

export {
  getSelectedVehicle,
  getSelectedBrand,
  getSelectedModel,
  getSelectedYear,
};
export default selectedReducer;

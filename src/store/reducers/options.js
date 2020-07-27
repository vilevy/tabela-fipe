import {
  FETCH_BRAND_SUCCESS,
  FETCH_MODEL_SUCCESS,
  FETCH_YEAR_SUCCESS,
  RESET_ALL,
} from "../actions/actionsType";

const initialState = {
  vehicle: [
    {
      nome: "Carros",
      codigo: "carros",
    },
    {
      nome: "Motos",
      codigo: "motos",
    },
    {
      nome: "Caminhões",
      codigo: "caminhoes",
    },
  ],
  brand: null,
  model: null,
  year: null,
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRAND_SUCCESS:
      return {
        ...state,
        brand: action.payload.data,
      };
    case FETCH_MODEL_SUCCESS:
      return {
        ...state,
        model: action.payload.data.modelos,
      };
    case FETCH_YEAR_SUCCESS:
      return {
        ...state,
        year: action.payload.data,
      };
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

const getVehicles = (state) => state.vehicle;
const getBrands = (state) => state.brand;
const getModels = (state) => state.model;
const getYears = (state) => state.year;

export { getVehicles, getBrands, getModels, getYears };
export default optionsReducer;

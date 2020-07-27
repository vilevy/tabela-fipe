import {
  FETCH_PENDING,
  FETCH_ERROR,
  CHANGE_STEP,
  FETCH_RESULT_SUCCESS,
  RESET_ALL,
  FETCH_BRAND_SUCCESS,
  FETCH_MODEL_SUCCESS,
  FETCH_YEAR_SUCCESS,
} from "../actions/actionsType";

const initialState = {
  isFetching: false,
  error: null,
  step: "vehicle",
  result: null,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_BRAND_SUCCESS:
      return {
        ...state,
        isFetching: false,
        step: action.payload.nextStep,
      };
    case FETCH_MODEL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        step: action.payload.nextStep,
      };
    case FETCH_YEAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        step: action.payload.nextStep,
      };
    case FETCH_RESULT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.payload.data,
      };
    case CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

const getBrands = (state) => state.brands;

const getIsFetching = (state) => state.isFetching;

const getError = (state) => state.error;

const getStep = (state) => state.step;

const getResult = (state) => state.result;

export { getBrands, getIsFetching, getError, getStep, getResult };
export default generalReducer;

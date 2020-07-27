import { FETCH_PENDING, FETCH_ERROR, CHANGE_STEP, RESET_ALL } from "./actionsType";
import api from "../../services/index";

import { setFetchURL } from "../../helpers/services";
import { steps } from "../../helpers/steps";

const setStep = (type) => {
  return `SET_${type.toUpperCase()}`;
};

const fetchStep = (type) => {
  return `FETCH_${type.toUpperCase()}_SUCCESS`;
};

const updateStep = (step) => {
  return steps[steps.indexOf(step) + 1];
};

export const resetStep = (step) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_STEP, payload: step });
  };
};

export const fetch = (step, selected, userSelection) => {
  return async (dispatch) => {
    const nextStep = updateStep(step);
    dispatch({ type: setStep(step), payload: userSelection });
    dispatch({ type: FETCH_PENDING });
    try {
      const { data } = await api.get(
        `/${setFetchURL(step, selected, userSelection)}`
      );
      if (!data) {
        throw new Error(
          "Erro ao carregar as informações. Tente novamente mais tarde."
        );
      }
      dispatch({ type: fetchStep(nextStep), payload: { data, nextStep } });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error });
    }
  };
};

export const resetAll = () => {
  return { type: RESET_ALL };
};

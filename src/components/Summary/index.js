import React from "react";
import PropTypes from "prop-types";

import { translateSteps } from "../../helpers/steps";

import arrow from "../../images/left-arrow.svg";

import "./summary.scss";

const Summary = ({ selected, handleOnClick }) => {
  const keys = Object.keys(selected);
  const values = Object.values(selected);

  return (
    <div className="summary">
      {values.map((item, index) => {
        const step = keys[index];
        return (
          item && (
            <div
              className="summary__item"
              key={`${step}-item.codigo`}
              onClick={() => handleOnClick(step)}
            >
              <img className="summary__item__icon" src={arrow} alt="edit"/>
              <span className="summary__item__title">{`${translateSteps(
                step
              )}: `}</span>
              <span className="summary__item__selected">{item.nome}</span>
            </div>
          )
        );
      })}
    </div>
  );
};

Summary.propTypes = {
  selected: PropTypes.shape({
    vehicle: PropTypes.shape({
      nome: PropTypes.string,
      codigo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    brand: PropTypes.shape({
      nome: PropTypes.string,
      codigo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    model: PropTypes.shape({
      nome: PropTypes.string,
      codigo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    year: PropTypes.shape({
      nome: PropTypes.string,
      codigo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
  handleOnClick: PropTypes.func.isRequired,
};

export default Summary;

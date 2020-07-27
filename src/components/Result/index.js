import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { resetAll } from "../../store/actions";

import "./results.scss";

const Result = ({ result }) => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(resetAll());
  });

  return (
    <div className="result">
      <span className="result__value">{result.Valor}</span>
      <div className="result__main">
        <span className="result__main__brand">{result.Marca}</span>
        <span className="result__main__model">{result.Modelo}</span>
        <span className="result__main__year">{result.AnoModelo}</span>
      </div>
      <div className="result__extra-info">
        <span className="result__extra-info__fuel">
          Combustível: {result.Combustivel}
        </span>
        <span className="result__extra-info__fipe-code">
          Código Fipe: {result.CodigoFipe}
        </span>
        <span className="result__extra-info__ref-month">
          Mês de referência: {result.MesReferencia}
        </span>
      </div>
      <button className="result__button" onClick={() => handleButtonClick()}>
        Nova consulta
      </button>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.shape({
    Valor: PropTypes.string,
    Marca: PropTypes.string,
    Modelo: PropTypes.string,
    AnoModelo: PropTypes.number,
    Combustivel: PropTypes.string,
    CodigoFipe: PropTypes.string,
    MesReferencia: PropTypes.string,
    TipoVeiculo: PropTypes.number,
    SiglaCombustivel: PropTypes.string,
  }).isRequired,
};

export default Result;

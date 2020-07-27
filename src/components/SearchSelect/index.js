import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";

import "./search-select.scss";

const SearchSelect = ({ onInputChange, onOptionSelection, options, step }) => {
  const [showOptions, setShowOptions] = useState(false);

  const input = useRef();

  const handleChevronClick = useCallback(() => {
    if (showOptions) {
      input.current.blur();
    } else {
      input.current.focus();
    }
    setShowOptions(!showOptions);
  });

  return (
    <form
      className="search-select"
      onSubmit={(e) => onOptionSelection(e, options[0])}
    >
      <label htmlFor="search-select-input" className="search-select__label">
        {step}
      </label>
      <input
        placeholder="Selecione"
        id="search-select-input"
        className="search-select__input"
        type="text"
        onChange={(e) => onInputChange(e)}
        ref={input}
        autoComplete="off"
        onClick={() => handleChevronClick()}
      />
      <label
        className="search-select__chevron"
        onClick={() => handleChevronClick()}
      />
      {showOptions && (
        <ul className="search-select__list">
          {options.length ? (
            options.map((item) => (
              <li
                className="search-select__list__item"
                key={item.codigo}
                onMouseDown={(e) => onOptionSelection(e, item)}
              >
                {item.nome}
              </li>
            ))
          ) : (
            <li className="search-select__list__item--no-results">Nenhum resultado...</li>
          )}
        </ul>
      )}
    </form>
  );
};

SearchSelect.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onOptionSelection: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string,
    codigo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })),
  step: PropTypes.string.isRequired,
};

export default React.memo(SearchSelect);

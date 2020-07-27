import React from "react";
import PropTypes from "prop-types";

import "./fipe-layout.scss";

const FipeLayout = ({ children }) => {
  return (
    <main className="fipe">
      <h1 className="fipe__title">Tabela Fipe</h1>
      {children}
    </main>
  );
};

FipeLayout.propTypes = {
  children: PropTypes.node
}

export default FipeLayout;

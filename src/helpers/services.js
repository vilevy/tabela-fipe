export const setFetchURL = (step, selected, userSelection) => {
  const { vehicle, brand, model } = selected;
  switch (step) {
    case "vehicle":
      return `${userSelection.codigo}/marcas`;
    case "brand":
      return `${vehicle.codigo}/marcas/${userSelection.codigo}/modelos`;
    case "model":
      return `${vehicle.codigo}/marcas/${brand.codigo}/modelos/${userSelection.codigo}/anos`;
    case "year":
      return `${vehicle.codigo}/marcas/${brand.codigo}/modelos/${model.codigo}/anos/${userSelection.codigo}`;
    default:
      return;
  }
};

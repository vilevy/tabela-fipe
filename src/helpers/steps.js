export const steps = ['vehicle', 'brand', 'model', 'year', 'result'];

export const translateSteps = step => {
  switch (step) {
    case 'vehicle':
      return 'Tipo';
    case 'brand':
      return 'Marca';
    case 'model':
      return 'Modelo';
    case 'year':
      return 'Ano';
    default:
      break;
  }
};
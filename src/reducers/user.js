export default function user(state = {}, action) {
  const { type, data } = action;
  
  switch (type) {
    case 'SAVE_BRANDS':
      let brands = [];
      
      data.forEach(brand => {
        brands.push({ value: brand.codigo, label: brand.nome });
      });

      return { brands };
    case 'SAVE_MODELS':
      let models = [];

      data.forEach(model => {
        models.push({ value: model.codigo, label: model.nome });
      });

      return {
        brands: state.brands,
        models,
        filter: { brand: state.filter.brand }
      };
    case 'SAVE_YEARS':
      let years = [];

      data.forEach(year => {
        years.push({ value: year.codigo, label: year.nome });
      });

      return { ...state, years };
    case 'SAVE_FILTER':
      return {
        ...state,
        filter: { ...data },
      };
    case 'SAVE_VEHICLE_DATA':
      return {
        ...state,
        vehicle: data
      };
    default:
      return state;
  }
}

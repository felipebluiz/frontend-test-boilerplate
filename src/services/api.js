export const getBrands = callback => fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas',
  {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  .then(response => response.json())
  .then((list) => callback(list));

export const getModels = (brandId, callback) => fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  .then(response => response.json())
  .then((list) => callback(list.modelos));

export const getYears = (brandId, modelId, callback) => fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  .then(response => response.json())
  .then((list) => callback(list));

export const getValue = (brandId, modelId, yearId, callback) => fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  .then(response => response.json())
  .then((value) => callback(value));


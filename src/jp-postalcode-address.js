import 'isomorphic-fetch';
import 'es6-promise';

import Consts from './consts';

export default (postalCode, onSuccess, onFailed) => {
  fetch(`${Consts.API_URL}?zipcode=${postalCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(json => onSuccess(json))
    .catch(error => {
      onFailed(error);
    });
}

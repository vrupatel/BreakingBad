import axios from 'axios';
import Constant from '../../CommonFiles/Constant';

export default async ({method, endpoint, isFormData, data} = {}) => {
  // console.log('data', data);

  return axios({
    method,
    url: Constant.KBaseURL + endpoint,
    data,
    headers: {},
    responseType: 'json',
  })
    .then(res => {
      console.log('RESPONSE', res);
      return res;
    })
    .catch(error => {
      throw error;
    });
};

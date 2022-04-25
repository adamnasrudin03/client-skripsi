/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { RequestPengajuanType, ResponsePengajuanTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

// Action Create Data Resor
export async function createPengajuan(data: RequestPengajuanType, onSuccess: any, onError: any) {
  const URL = 'pengajuan-skripsi/create';

  await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, data,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
    .then((result: ResponsePengajuanTypes) => {
      console.log('Success : ', result);
      onSuccess && onSuccess(result);
    })
    .catch((err: any) => {
      console.log('Errror : ', err);
      if (err.response) {
        onError && onError(err.response.message);
      } else {
        onError && onError('Server Error');
      }
    });
}

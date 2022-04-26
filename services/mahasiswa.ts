/* eslint-disable import/prefer-default-export */
import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setPengajuan(data: any) {
  const url = `${ROOT_API}/${API_VERSION}/pengajuan-skripsi/create`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

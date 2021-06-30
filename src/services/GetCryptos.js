import { Login } from "./Login";

export async function GetCryptos(token) {
  const url = process.env.REACT_APP_API_URL_COINS;
  let _token = token;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${_token}`,
    },
  });
  // caso o token tenha expirado pega um novo
  if (response.status === 401) {
    _token = await Login();
    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    });
  }
  const data = await response.json();
  return data;
}

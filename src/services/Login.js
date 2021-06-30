export async function Login() {
  const user = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const url = process.env.REACT_APP_API_URL_LOGIN;

  const data = new FormData();

  data.append("email", user);
  data.append("password", password);

  const response = await fetch(url, {
    method: "POST",
    body: data,
  });
  const dataJson = await response.json();
  // armazenei um token no navegador somente para não ficar gerando um token
  // toda a vez que atualiza a página.
  window.localStorage.setItem("tokenCapittal", dataJson.token);
  return dataJson.token;
}

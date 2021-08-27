const base_url = "https://coding-challenge-api.aerolab.co";

export default function getProducts() {
  return fetch(`${base_url}/products`, {
    headers: {
      Authorization: process.env.REACT_APP_TOKEN,
    },
  });
}

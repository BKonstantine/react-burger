import { URL_ADDRESS } from "./variables";

export default function getIngridients() {
  return fetch(`${URL_ADDRESS}`);
}

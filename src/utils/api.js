import { INGREDIENTS_URL } from "./variables";

export default function getIngridients() {
  return fetch(`${INGREDIENTS_URL}`);
}

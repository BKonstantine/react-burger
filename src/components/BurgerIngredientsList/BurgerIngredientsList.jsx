import Card from "../Card/Card";
import { data } from "../../utils/data";
import style from "./BurgerIngredientsList.module.css";

export default function BurgerIngredientsList(props) {

  function filterData(data, type) {
    if (data.type === type) {
      return <Card key={data._id} {...data} />;
    }
  }

  return (
    <ul className={`${style.container} pl-4 pr-4`}>
      <p id={props.id} className="text text_type_main-medium pb-6">
        Булки
      </p>
      {data.map((item) => filterData(item, "bun"))}
    </ul>
  );
}

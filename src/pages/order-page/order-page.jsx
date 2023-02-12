import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  wsConnectionStart,
  wsConnectionClose,
} from "../../services/actions/socketAction";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import BurgerDetails from "../../components/burger-details/burger-details";
import style from "./order-page.module.css";
import { WS_URL_ALL, WS_URL_PROFILE } from "../../utils/variables";

export default function OrderPage({ isAuth }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngridients());
    isAuth
      ? dispatch(wsConnectionStart(WS_URL_PROFILE))
      : dispatch(wsConnectionStart(WS_URL_ALL));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, []);

  const orders = useSelector((store) => store.socketReducer.orders);
  const { id } = useParams();
  const order = orders.find((item) => item._id === id);

  return (
    order && (
      <main className={style.main}>
        <BurgerDetails titleClassName={style.title} />
      </main>
    )
  );
}

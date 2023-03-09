import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  wsConnectionStart,
  wsConnectionClose,
} from "../../services/actions/socketAction";
import { checkUserAccess } from "../../services/actions/userAction";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import { WS_URL_PROFILE } from "../../utils/variables";

const UserOrderPage: FC = () => {
  const dispatch = useDispatch();
  const { orders, errorState } = useSelector((store) => store.socketReducer);

  useEffect(() => {
    dispatch(wsConnectionStart(WS_URL_PROFILE));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, []);

  useEffect(() => {
    if (errorState) {
      dispatch(wsConnectionClose());
      dispatch(checkUserAccess())
        .then(() => dispatch(wsConnectionStart(WS_URL_PROFILE)))
        .catch(() => dispatch(wsConnectionClose()));
    }
  }, [errorState]);

  return orders && <OrderFeedList orders={orders} isFeedList={true} />;
};

export default UserOrderPage;

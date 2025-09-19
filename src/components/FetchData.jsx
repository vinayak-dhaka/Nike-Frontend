import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemactions } from "../store/itemsSlice";
import { fetchSliceActions } from "../store/fetchStatusSlice";

const FetchData = () => {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchstatus.fetchingdone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchSliceActions.markfetchingstarted());
    fetch("http://localhost:8085/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(itemactions.addInitialItems(data));
        dispatch(fetchSliceActions.markfetchingdone());
      });
    return () => {
      controller.abort();
    };
  });
  return <></>;
};
export default FetchData;

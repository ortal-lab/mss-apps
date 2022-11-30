import ImageserMethods from "../services/imagesService";
import actions from "../redux/actions";

export default fetch = (store) => (next) => async (action) => {
  if (action.type === "GET_IMAGES") {
    const state = store.getState();
    const response = await ImageserMethods.GetImages(
      action.payload.page,
      state.limit,
      action.payload.category
    );
    console.log(response);
    console.log(response.data);
    store.dispatch(actions.setImages(response.data));
  }
  return next(action);
};

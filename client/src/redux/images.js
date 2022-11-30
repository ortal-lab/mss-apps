import produce from "immer";
import createReducer from "./utilsReducer";
const initialState = {
  page: 1,
  limit: 9,
  category: "flowers",
  images: [],
  previous: null,
  next: null,
};
const imagesHandeling = {
  next(state, action) {
    console.log(action.payload);
    state.page = action.payload;
  },
  previous(state, action) {
    state.page = action.payload.previous.page;
  },
  setCategory(state, action) {
    state.category = action.payload;
    state.page=1;
  },
  setImages(state, action) {
    console.log(action.payload);
    state.images = action.payload.results;
    state.next = action.payload?.next;
    state.previous = action.payload?.previous;
  },
};
export default produce(
  (state, action) => createReducer(state, action, imagesHandeling),
  initialState
);

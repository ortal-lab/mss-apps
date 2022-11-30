import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImagesList from "./components/ImagesList";
import actions from "./redux/actions";

function App() {
  const category= useSelector((state) => state.category);
  const page= useSelector((state) => state.page);

  // const next = useSelector((state)=>state.next.page)
  // const previous = useSelector((state)=>state.previous.page)

 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getImages({page,category}));
}, [category,page]);
  return <ImagesList> </ImagesList>;
}

export default App;

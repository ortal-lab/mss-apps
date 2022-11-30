import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions";
function SelectBox() {
  const dispatch = useDispatch();
  const handleChangeCategory = (e) => {
    dispatch(actions.setCategory(e.target.value));
  };
  const categories = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
    "flowers",
  ];
  return (
    <Form.Select
      defaultValue="flowers"
      aria-label="Category"
      onChange={(e) => {
        handleChangeCategory(e);
      }}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Form.Select>
  );
}

export default SelectBox;

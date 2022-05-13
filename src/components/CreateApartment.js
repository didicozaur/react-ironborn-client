import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateApartment.css";

function CreateAparment() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApt = { title: title, pricePerDay: price, img: img };

    axios
      .post(process.env.REACT_APP_API_URL + "/apartments", newApt)

      .then((response) => {
        setTitle("");
        setPrice("");
        setImg("");

        navigate("/apartments");
      });
  };

  return (
    <section className="CreateApartment">
      <h1>Create a new Apartment</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Image URL
          <input
            type="text"
            name="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>

        <label>
          Price per Day
          <input
            type="number"
            min={0}
            name="pricePerDay"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <button type="submit">Create Apartment</button>
      </form>
    </section>
  );
}

export default CreateAparment;

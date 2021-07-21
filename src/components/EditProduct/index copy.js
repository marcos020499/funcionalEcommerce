import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import { useParams } from "react-router-dom";
import { Title, ContainerContact, Input, Button } from "./style";
import { toast } from "react-toastify";
toast.configure();
const Show = () => {
  const [loading, setLoading] = useState(true);
  const [speakers, setSpeakers] = useState({});
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firebase
          .firestore()
          .collection("product")
          .doc(id)
          .get();
        console.log("response", response);
        let data = { title: "not found" };
        if (response.exists) {
          data = response.data();
        }
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
        setQuantity(data.quantity);
        setImages(data.images);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("product")
      .doc(id)
      .update({
        title,
        description,
        price,
        images,
        quantity,
      })
      .then(
        () => setTitle(""),
        setDescription(""),
        setPrice(""),
        setQuantity(""),
        setImages([])
      ),
      toast.success(`the info was send`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Title>EDIT PRODUCT</Title>
        <ContainerContact>
          <h3>Title</h3>
          <Input
            type="text"
            placeholder="title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <h3>Description</h3>
          <Input
            type="text"
            placeholder="description"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <h3>Price</h3>
          <Input
            type="number"
            placeholder="price"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <h3>Images</h3>
          <Input
            type="text"
            placeholder="images"
            value={images}
            name="images"
            onChange={(e) => setImages(e.target.value)}
            required
          />
          <h3>Quantity</h3>
          <Input
            type="number"
            placeholder="quantity"
            value={quantity}
            name="images"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </ContainerContact>
      </form>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Show;

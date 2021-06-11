import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { Link } from "react-router-dom";
import { Title, ContainerContact, Input, Button, InputMessage } from "./style";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [images, setImages] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"]; // image types

  const ImagesHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImages(selectedFile);
      setError("");
    } else {
      setImages(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  // add product
  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = firebase
      .storage()
      .ref(`images/${images.name}`)
      .put(images);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => setError(err.message),
      () => {
        firebase
          .storage()
          .ref("images")
          .child(images.name)
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection("product")
              .add({
                title: title,
                price: Number(price),
                description: description,
                quantity: Number(quantity),
                images: url,
              })
              .then(() => {
                setTitle("");
                setPrice(0);
                setImages("");
                setQuantity(0);
                setDescription("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div>
      <form onSubmit={addProduct}>
        <Title>ADD PRODUCT</Title>
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
            type="file"
            placeholder="images"
            name="images"
            onChange={ImagesHandler}
            required
          />
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
export default AddProducts;

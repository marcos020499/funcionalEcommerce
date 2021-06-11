import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviews, Title, Preview } from "./style";
const CollectionPreview = ({ title, items }) => (
  <CollectionPreviews>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviews>
);

export default CollectionPreview;

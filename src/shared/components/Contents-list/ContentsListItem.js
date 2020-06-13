import React from "react";
import { Link } from "react-router-dom";

const ContentsListItem = ({ content }) => (
  <article className="contents-list-item">
    <Link to={`${content.type}/${content.id}`} className="contents-list-item__link">
      <img
        className="contents-list-item__image"
        src={content.images.artwork}
      />
    </Link>
  </article>
);

export default React.memo(ContentsListItem);

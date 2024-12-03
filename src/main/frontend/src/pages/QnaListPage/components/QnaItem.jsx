import PropTypes from "prop-types";
import { mainContainerItem } from "./QnaList.module.css";

const QnaItem = ({ id, title, author, createdAt, views }) => {
  return (
    <div className={mainContainerItem}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{author}</span>
      <span>{createdAt.toLocaleString()}</span>
      <span>{views}</span>
    </div>
  );
};

QnaItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  views: PropTypes.number.isRequired,
};

export default QnaItem;

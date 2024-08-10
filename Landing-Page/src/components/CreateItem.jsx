import PropTypes from "prop-types";
const CreationItem = ({ title, image }) => {
  return (
    <div className="creation-item">
      <img src={image} alt={title} className="creation-img" />
      <div className="creation-title">
        {title[0]}
        <br />
        {title[1]}
      </div>
    </div>
  );
};

CreationItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CreationItem;

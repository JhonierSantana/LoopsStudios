import PropTypes from "prop-types";
const CreationItem = ({ title, imageDesktop, imageMobile }) => {
  return (
    <div className="creation-item">
      <picture>
        <source srcSet={imageMobile} media="(max-width: 768px)" />
        <source srcSet={imageDesktop} media="(min-width: 769px)" />
        <img
          className="creation-img"
          src={imageDesktop}
          alt={title.join(" ")}
        />
      </picture>
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
  imageDesktop: PropTypes.string.isRequired,
  imageMobile: PropTypes.string.isRequired,
};

export default CreationItem;

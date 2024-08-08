import vrImage from "../assets/desktop/image-interactive.jpg";
const Section = () => {
  return (
    <section className="section-vr">
      <div className="section-vr__image">
        <img src={vrImage} alt="VR Experience" />
      </div>
      <div className="section-vr__content">
        <h2>THE LEADER IN<br />INTERACTIVE VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Section;

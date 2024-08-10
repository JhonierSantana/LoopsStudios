import CreationItem from "./CreateItem";
import deepEarthImg from "../assets/desktop/image-deep-earth.jpg";
import nightArcadeImg from "../assets/desktop/image-night-arcade.jpg";
import soccerTeamVrImg from "../assets/desktop/image-soccer-team.jpg";
import gridImageImg from "../assets/desktop/image-grid.jpg";
import fromAboveImageImg from "../assets/desktop/image-from-above.jpg";
import pocketBorealisImg from "../assets/desktop/image-pocket-borealis.jpg";
import theCuriosityImg from "../assets/desktop/image-curiosity.jpg";
import fisheyeImg from "../assets/desktop/image-fisheye.jpg";

const ourCreations = () => {
  const creations = [
    { title: ["DEEP", "EARTH"], image: deepEarthImg },
    { title: ["NIGHT", "ARCADE"], image: nightArcadeImg },
    { title: ["SOCCER", "TEAM VR"], image: soccerTeamVrImg },
    { title: ["THE", "GRID"], image: gridImageImg },
    { title: ["FROM UP", "ABOVE VR"], image: fromAboveImageImg },
    { title: ["POCKET", "BOREALIS"], image: pocketBorealisImg },
    { title: ["THE", "CURIOSITY"], image: theCuriosityImg },
    { title: ["MAKE IT", "FISHEYE"], image: fisheyeImg },
  ];

  return (
    <div className="our-creations">
      <div className="our-Title">
        <h2>OUR CREATIONS</h2>
        <button>SEE ALL</button>
      </div>
      <div className="creations-grid">
        {creations.map((creation, index) => (
          <CreationItem
            key={index}
            title={creation.title}
            image={creation.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ourCreations;

import CreationItem from "./CreateItem";
// Img Desktop
import deepEarthImg from "../assets/desktop/image-deep-earth.jpg";
import nightArcadeImg from "../assets/desktop/image-night-arcade.jpg";
import soccerTeamVrImg from "../assets/desktop/image-soccer-team.jpg";
import gridImageImg from "../assets/desktop/image-grid.jpg";
import fromAboveImageImg from "../assets/desktop/image-from-above.jpg";
import pocketBorealisImg from "../assets/desktop/image-pocket-borealis.jpg";
import theCuriosityImg from "../assets/desktop/image-curiosity.jpg";
import fisheyeImg from "../assets/desktop/image-fisheye.jpg";
// Imag Mobile
import deepEarthMobile from "../assets/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../assets/mobile/image-night-arcade.jpg";
import soccerTeamVrMobile from "../assets/mobile/image-soccer-team.jpg";
import gridMobile from "../assets/mobile/image-grid.jpg";
import fromAboveMobile from "../assets/mobile/image-from-above.jpg";
import pocketBorealisMobile from "../assets/mobile/image-pocket-borealis.jpg";
import theCuriosityMobile from "../assets/mobile/image-curiosity.jpg";
import fisheyeMobile from "../assets/mobile/image-fisheye.jpg";

const ourCreations = () => {
  const creations = [
    {
      title: ["DEEP", "EARTH"],
      imageDesktop: deepEarthImg,
      imageMobile: deepEarthMobile,
    },
    {
      title: ["NIGHT", "ARCADE"],
      imageDesktop: nightArcadeImg,
      imageMobile: nightArcadeMobile,
    },
    {
      title: ["SOCCER", "TEAM VR"],
      imageDesktop: soccerTeamVrImg,
      imageMobile: soccerTeamVrMobile,
    },
    {
      title: ["THE", "GRID"],
      imageDesktop: gridImageImg,
      imageMobile: gridMobile,
    },
    {
      title: ["FROM UP", "ABOVE VR"],
      imageDesktop: fromAboveImageImg,
      imageMobile: fromAboveMobile,
    },
    {
      title: ["POCKET", "BOREALIS"],
      imageDesktop: pocketBorealisImg,
      imageMobile: pocketBorealisMobile,
    },
    {
      title: ["THE", "CURIOSITY"],
      imageDesktop: theCuriosityImg,
      imageMobile: theCuriosityMobile,
    },
    {
      title: ["MAKE IT", "FISHEYE"],
      imageDesktop: fisheyeImg,
      imageMobile: fisheyeMobile,
    },
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
            imageDesktop={creation.imageDesktop}
            imageMobile={creation.imageMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default ourCreations;

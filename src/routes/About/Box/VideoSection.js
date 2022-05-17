import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Background, Parallax } from "react-parallax";

const VideoSection = () => {
  return (
    <Parallax className="bg-video" strength={100}>
      <Background className="custom-bg">
        <img src={require(`${"../media/bg-video.jpg"}`)} alt="fill murray" />
        <div className="container"></div>
      </Background>
      <div className="content-section">
        <a
          // For Fading on Scrolling
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-offset="200"
          href="https://www.Youtube.com"
          className="icon-container"
        >
          <FontAwesomeIcon icon={faPlay} />
        </a>
        <div className="description">
          <h1 data-aos="fade-up" data-aos-duration="600" data-aos-offset="80">
            Make the thing Anything is Possible
          </h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-offset="100">
            Enjoy our luscious dishes wherever you want
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="200"
          >
            Order Now
          </button>
        </div>
      </div>
    </Parallax>
  );
}

export default VideoSection
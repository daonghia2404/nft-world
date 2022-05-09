import React, { useEffect } from 'react'
import Parallax from 'parallax-js';

import Introduction from 'containers/Introduction';
import Mint from 'containers/Mint';
import Video from 'containers/Video';
import Map from 'containers/Map';
import Join from 'containers/Join';
import Build from 'containers/Build';
import Card from 'containers/Card';

const HomePage = () => {
  const configBackground = () => {
    const scence = document.querySelectorAll(".scence");

    scence.forEach((item) => {
      const parallax = new Parallax(item, {
        relativeInput: true,
      });
    });
  }

  useEffect(() => {
    configBackground()
  }, []);

  return (
    <div className="HomePage">
      <Introduction />
      <Mint />
      <Video />
      <Map />
      <Join />
      <Build />
      <Card />
    </div>
  )
}

export default HomePage;
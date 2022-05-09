import React from "react";

const Video = ({ src }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${src}"
        />,
      `,
      }}
    ></div>
  );
};

export default Video;

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSQ-2TUSm0yqVfuotzZB44vTTHDQkeUNA&callback=initMap"
    />,
  ]);
};

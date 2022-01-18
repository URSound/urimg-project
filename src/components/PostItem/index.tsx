import axios from 'axios';
import React, { ReactElement, useEffect } from 'react';

console.log(process.env.HOST);
console.log(process.env.REACT_APP_CLIENT_CODE);

export function PostItem(): ReactElement {
  const fetchGallery = async () => {
    try {
      const response = await axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
        headers: { Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_CODE}` },
      });
      console.log(response);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchGallery();
  });

  return <div>1</div>;
}

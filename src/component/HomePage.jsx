import React from "react";
import Image from "react-bootstrap/Image";
import banner from './CRUD.jpeg';

function HomePage() {
  return   <Image src={banner} className="w-100 vh-100" fluid />;
  
}

export default HomePage;

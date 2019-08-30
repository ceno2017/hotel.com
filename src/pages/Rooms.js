import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero>
        <Banner title="our roomx">
          <Link to="/" className="btn-primary">
            Get back home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;

import React from "react";
import { Link } from "react-router-dom";

import { RoomContext } from "../context";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import defaultImg from "../images/room-10.jpeg";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          No such room was found
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      price,
      capacity,
      size,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [myMainImg, ...secondaryImg] = images;
    return (
      <>
        <StyledHero img={myMainImg || this.state.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {secondaryImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size}SQFT</h6>
              <h6>
                Available capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "Pets allowed" : "Pets not allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> ** {item} **</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

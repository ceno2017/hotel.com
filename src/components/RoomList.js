import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  // const { rooms } = props.rooms;
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h2>Unfortunately no rooms matched your search</h2>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={rooms.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;

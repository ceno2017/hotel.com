import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
//import {withConsumer} from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, rooms, sortedRooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}

//using HOC
// function RoomsContainer({ context }) {
//   const { loading, rooms, filteredRooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <RoomList rooms={filteredRooms} />
//     </>
//   );
// }
// export default withConsumer(RoomContainer){

// }

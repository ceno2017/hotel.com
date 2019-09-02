import React from "react";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  getRoom = slug => {
    const tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  //getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "hotelApp",
        order: "-fields.price"
      });

      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      const maxPrice = Math.max(...rooms.map(item => item.price));
      const minPrice = Math.min(...rooms.map(item => item.price));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        minPrice
      });
    } catch (error) {
      console.log(error);
    }
  };
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  componentDidMount() {
    this.getData();
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //get initial rooms
    let tempRooms = [...rooms];
    //transform value
    capacity = parseInt(capacity, 10);
    price = parseInt(price, 10);
    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    //filter by price
    if (price) {
      tempRooms = tempRooms.filter(room => room.price <= price);
    }
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    //change state
    this.setState({
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

//using HOC...useful if you want to use it all over the page

// export function withConsumer(Component) {
//   return function consumerWrapper(props) {
//     return (
//       <RoomConsumer>
//         {value => <Component {...props} context={value} />}
//       </RoomConsumer>
//     );
//   };
// }
export { RoomProvider, RoomConsumer, RoomContext };

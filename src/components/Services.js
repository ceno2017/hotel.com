import React from "react";
import { FaCode, FaPaypal, FaReact, FaWhatsapp } from "react-icons/fa";
import Title from "./Title";

export default class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCode />,
        id: 1,
        title: "Code Camp",
        info:
          "We teach you how to code in React,PHP-in all we deliver into your hands the fullstack skillset you need to land a job."
      },
      {
        icon: <FaPaypal />,
        id: 2,
        title: "Integrate PayPal",
        info:
          "We build Ecommerce web applications in React complete with a PayPal checkout for your business."
      },
      {
        icon: <FaReact />,
        id: 3,
        title: "Do you need React App?",
        info:
          "We can build your websites in React or turn your existing websites into a single page application all with the power of React."
      },
      {
        icon: <FaWhatsapp />,
        id: 4,
        title: "Get us on WhatsApp",
        info:
          "You can reach us,all the time, on whatsApp using the mobile number,07012585759 to discuss any business needs you may have."
      }
    ]
  };
  render() {
    const { services } = this.state;
    return (
      <section className="services">
        <Title
          title="Services"
          subtitle="...other things we do..."
          className="section-title"
        />
        <div className="services-center">
          {services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

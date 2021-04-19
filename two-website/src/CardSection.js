import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card
              cardTitle="The Mediocre Coder"
              buttonText="YouTube Link"
              subText="ReactJS Course"
            />
          </div>
          <div className="col-4">
            <Card
              cardTitle="@themediocrecoder"
              buttonText="Instagram Link"
              subText="ReactJS Course"
            />
          </div>
          <div className="col-4">
            <Card
              cardTitle="@kushaldesai1990"
              buttonText="Twitter Link"
              subText="ReactJS Course"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;

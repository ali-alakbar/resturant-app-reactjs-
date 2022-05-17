import React from "react";
import "./style/style.css";
import PageTitle from "../../helper/PageTitle/PageTitle";
import AboutFood from "./Box/AboutFood/AboutFood";
import ItemBox from "./Box/Boxes/ItemBox";
import Data from "../../Data/Data.json";
const History = () => {
  const { history } = Data;
  return (
    <section className="section history-section">
      <PageTitle title="Our History" />
      <div className="container">
        <AboutFood />
      </div>

      <span className="line line-right"></span>
      <span className="line line-left"></span>
      <div className="history-content">
        <h1 className="history-title">Our History</h1>

        {history.map((item, id) => {
          return (
            <>
              <ItemBox
                key={id}
                year={item.year}
                direction={item.direction}
                padding={item.padding}
                img={require(`${item.img}`)}
                title={item.title}
                description={item.description}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default History;

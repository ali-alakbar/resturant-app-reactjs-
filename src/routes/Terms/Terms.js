import React, { useEffect } from "react";
import "./style/style.css";
import PageTitle from "../../helper/PageTitle/PageTitle";
import Data from "../../Data/Data.json";
import Team from "../../components/Team/Team";
import "aos/dist/aos.css";
import Aos from "aos";
const Terms = () => {
  const { terms } = Data;
    useEffect(() => {
      Aos.init({
        delay: 200,
      });
    }, []);

  return (
    <section className="section terms-section">
      <PageTitle title="Our terms" />

      <div className="components">
        {terms.map((element) => {
          return (
            <>
              <Team
                name={element.name}
                img={require(`${element.img}`)}
                description={element.description}
                jobTitle={element.jobTitle}
                aosDuration={element.aosDuration}
                aos={"190"}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Terms;

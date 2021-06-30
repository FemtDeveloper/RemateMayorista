import React from "react";
import "./hombres.css";
import manPhotos from "../../enums/photos";

const Hombres = () => {
  return (
    <>
      <section className="container-man">
        {manPhotos.map((man) => {
          return (
            <figure className="man-photos" key={man.id}>
              <img
                src={man.foto}
                alt="foto jean hombre"
                id="main"
                className="main-photo"
              />
              <label htmlFor="main">{man.title}</label>
            </figure>
          );
        })}
      </section>
    </>
  );
};

export default Hombres;

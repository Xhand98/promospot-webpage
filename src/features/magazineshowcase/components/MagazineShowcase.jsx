import React from "react";
import "./MagazineShowcase.css";
import img1 from "../assets/1.png";
import img11 from "../assets/11.jpg";
import img4 from "../assets/4.jpg";
import img6 from "../assets/6.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import CoolModal from "../../modal/Modal";

const ShowCase = () => {
  return (
    <div className="container-all">
      <div className="style-text">
        <h2>Apartado para revistas</h2>
        <br />
      </div>
      <div className="img-all">
        <div className="revistas-left">
          <img src={img8} />
          <p>Jumbo</p>
          <CoolModal>
            <p>Proximamente...</p>
          </CoolModal>
          <br />
          <a href="https://heyzine.com/flip-book/03edbe1bf0.html">
            <img src={img9} />
            <p>La Sirena</p>
          </a>
          <CoolModal>
            <p>Proximamente...</p>
          </CoolModal>
        </div>

        <div className="revistas-center">
          <a>
            <img src={img4} />
            <p>El Bravo</p>{" "}
          </a>
          <CoolModal>
            <iframe
              title="Cool Iframe"
              allowFullScreen
              style={{
                border: "1px solid lightgray",
                width: "600px",
                height: "600px",
              }}
              src="https://heyzine.com/flip-book/f80cc85f97.html"
            />
          </CoolModal>
          <br />
          <a>
            <img src={img1} />
            <p>Carrefour</p>{" "}
          </a>
          <CoolModal>
            <iframe
              title="Cool Iframe"
              allowFullScreen
              scrolling="no"
              className="fp-iframe"
              style={{
                border: "1px solid lightgray",
                width: "600px",
                height: "600px",
              }}
              src="https://heyzine.com/flip-book/03edbe1bf0.html"
            />
          </CoolModal>
        </div>
        <div className="revistas-right">
          <img src={img6} />
          <p>El SuperPola</p>
          <CoolModal>
            <p>Proximamente...</p>
          </CoolModal>
          <img src={img11} width="70px" heigth="85px" />

          <p>El Nacional</p>
          <CoolModal>
          <iframe
              title="Cool Iframe"
              allowFullScreen
              scrolling="no"
              className="fp-iframe"
              style={{
                border: "1px solid lightgray",
                width: "600px",
                height: "600px",
              }}
              src="https://heyzine.com/flip-book/4a689cdafe.html"
            />
          </CoolModal>
        </div>
      </div>
    </div>
  );
};
export default ShowCase;

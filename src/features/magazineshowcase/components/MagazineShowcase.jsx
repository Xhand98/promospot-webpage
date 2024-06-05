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
      </div>
      <div className="img-all">
        <div className="revistas-left">
          <img src={img8} alt="Jumbo" />
          <CoolModal magTitle="Jumbo">
            <p>Proximamente...</p>
          </CoolModal>
          <br />
          <img src={img9} alt="La Sirena" />
          <CoolModal magTitle="La Sirena">
          <iframe
              title="Cool Iframe"
              allowFullScreen
              style={{
                border: "1px solid lightgray",
                width: "600px",
                height: "600px",
              }}
              src="https://heyzine.com/flip-book/217fc689ca.html"
            ></iframe>
          </CoolModal>
        </div>

        <div className="revistas-center">
          <a>
            <img src={img4} alt="El Bravo" />
          </a>
          <CoolModal magTitle="El Bravo">
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
            <img src={img1} alt="Carrefour" />
          </a>
          <CoolModal magTitle="Carrefour">
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
          <img src={img6} alt="El SuperPola" />
          <CoolModal magTitle="SuperPola">
          <iframe
              title="Cool Iframe"
              allowFullScreen
              style={{
                border: "1px solid lightgray",
                width: "600px",
                height: "600px",
              }}
              src="https://heyzine.com/flip-book/bb5e685b5e.html"
            ></iframe>
          </CoolModal>
          <img src={img11} alt="El Nacional" className="nacional" />
          <CoolModal magTitle="El Nacional">
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
              src="https://heyzine.com/flip-book/d196b9d2d8.html"
            />
          </CoolModal>
        </div>
      </div>
      <br />
    </div>
  );
};
export default ShowCase;

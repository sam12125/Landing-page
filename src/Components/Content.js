import React from "react";
import "./Content.css";

function Content() {
  return (
    <div
      style={{
        height: "105vh",
        width: "100%",
        backgroundColor: "rgb(18,19,23)",
      }}
    >
      <img
        src="https://1wrcna.life/v3/aviator-fortune-wheel/img/logo/logo.svg"
        style={{
          width: "180px",
          height: "50px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "30px",
        }}
      >
        <div class="wheel">
          <div class="section">FREE SPINS</div>
          <div class="section">TRY AGAIN</div>
          <div class="section">500%</div>
          <div class="section">50</div>
          <div class="section">FREE SPINS</div>
          <div class="section">TRY AGAIN</div>
          <div class="section">70</div>
          <div class="section">300% BONUS</div>
          <div class="center">
            <div class="wheel-button">
              <button class="spin-button">SPIN</button>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "2px solid #D42E40",
            width: "8%",
            height: "80px",
            borderRadius: "15px",
          }}
        >
          <p
            style={{
              font: "bold",
              textAlign: "center",
              color: "white",
              fontSize: "30px",
              marginTop: "5px",
              marginBottom: "0",
            }}
          >
            2
          </p>
          <p
            style={{
              font: "bold",
              textAlign: "center",
              color: "white",
              fontSize: "14px",
              marginTop: "0px",
              marginBottom: "0",
            }}
          >
            Free Spins
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#b4b4b5" }}>© 2024 1win</p>
            <br></br>
            <p style={{ color: "#b4b4b5", marginTop: "-30px" }}>
              Alle Rechte vorbehalten und rechtlich geschützt
            </p>
          </div>

          <div>
            <select
              style={{
                padding: "10px",
                backgroundColor: "#2f3033 ",
                color: "white",
                marginTop: "15px",
                borderRadius: "10px",
              }}
            >
              <option>English (ENG)</option>
              <option>Italiano (ITA)</option>
              <option>Deutch (DEU)</option>
              <option>Francais (FRA)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

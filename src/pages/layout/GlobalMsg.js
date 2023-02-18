import React from "react";
import Container from "react-bootstrap/esm/Container";

const GlobalMsg = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="d-flex justify-content-between p-1">
        <div>
          <i class="fa-solid fa-phone-volume"></i> 1300 MYSHOP
        </div>
        <div>
          <a href="#!">
            <i class="fa-brands fa-facebook"></i>
          </a>{" "}
          <a href="#!">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMsg;

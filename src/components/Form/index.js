import React from "react";

import { Container, Inputs } from "./styles";

export default function Form() {
  return (
    <Container>
      <header>
        <h1>Registration Form</h1>
      </header>

      <Inputs>
        <form>
          <div className="input-group two-inputs">
            <label htmlFor="f-name">Name</label>
            <div className="input-wrapper">
              <input type="text" id="f-name" autoFocus />
              <small className="helper-text">First Name</small>
            </div>
            <div className="input-wrapper">
              <input type="text" id="l-name" />
              <small className="helper-text">Last Name</small>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input type="text" id="email" />
              <small className="helper-text">example@email.com</small>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input type="password" id="password" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password-confirm">Confirm</label>
            <div className="input-wrapper">
              <input type="password" id="password-confirm" />
              <small className="helper-text">Confirm your password</small>
            </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </Inputs>
    </Container>
  );
}

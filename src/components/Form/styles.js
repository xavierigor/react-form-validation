import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: fit-content;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);

  header {
    width: 100%;
    height: 60px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 10px 10px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 20px;
      margin: 0;
      letter-spacing: 0.5px;
      font-weight: 600;
    }
  }

  @media (max-width: 770px) {
    width: 90%;
    height: fit-content;
  }
`;

export const Inputs = styled.div`
  padding: 45px 60px;

  .input-group {
    display: grid;
    grid-template-columns: 20% 80%;
    margin-bottom: 30px;
  }

  .input-group.two-inputs {
    grid-template-columns: 20% 40% 40%;
  }

  .input-group.two-inputs .input-wrapper:first-of-type {
    margin-right: 13px;
  }

  .input-group.two-inputs .input-wrapper:last-of-type {
    margin-left: 13px;
  }

  @media (max-width: 770px) {
    padding: 35px;
  }

  @media (max-width: 600px) {
    padding: 20px 25px;
    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
    .input-group.two-inputs .input-wrapper:first-of-type {
      margin: 0 0 15px 0 !important;
    }
    .input-group.two-inputs .input-wrapper:last-of-type {
      margin: 0 !important;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 700;
    padding: 9px 0;
    color: rgba(0, 0, 0, 0.8);
  }

  input {
    padding: 10px 13px;
    height: 40px;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    transition: background-color 0.5s;
  }

  input:focus,
  input:active {
    background: rgba(0, 0, 0, 0.16);
  }

  .helper-text {
    color: rgba(0, 0, 0, 0.6);
    margin-top: 5px;
  }

  button[type="submit"] {
    background: #fd4c58;
    border: none;
    padding: 13px;
    margin-top: 20px;
    color: #fff;
    width: 150px;
    border-radius: 4px;
    font-size: 1em;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.5s;
  }

  button[type="submit"]:active,
  button[type="submit"]:focus {
    background: #f0303c;
  }
`;

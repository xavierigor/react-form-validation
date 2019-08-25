import React from "react";
import useForm from "react-hook-form";
import validator from "validator";
import { FaGithub } from "react-icons/fa";

import InlineError from "../InlineError";
import SocialLink from "../SocialLink";

import { Container, Inputs } from "./styles";

export default function Form() {
  const { register, handleSubmit, errors, getValues } = useForm();

  function onSubmit() {
    if (Object.keys(errors).length === 0) {
      alert("You have passed the registration rules!");
    }
  }

  return (
    <Container>
      <header>
        <h1>Registration Form</h1>
      </header>

      <Inputs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group two-inputs">
            <label htmlFor="firstname">Name</label>
            <div className="input-wrapper">
              <input
                style={
                  errors.firstname && {
                    borderWidth: 1,
                    borderColor: "#ff0000",
                    borderStyle: "solid"
                  }
                }
                ref={register({ required: "First Name is required." })}
                type="text"
                name="firstname"
                id="firstname"
                autoFocus
                autoComplete="off"
              />
              {errors.firstname && (
                <InlineError message={errors.firstname.message} />
              )}
              <small className="helper-text">First Name</small>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="off"
              />
              <small className="helper-text">Last Name (optional)</small>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                style={
                  errors.email && {
                    borderWidth: 1,
                    borderColor: "#ff0000",
                    borderStyle: "solid"
                  }
                }
                ref={register({
                  required: "Email is required.",
                  validate: value =>
                    validator.isEmail(value) || "Invalid email address."
                })}
                type="text"
                id="email"
                name="email"
                autoComplete="off"
              />
              {errors.email && <InlineError message={errors.email.message} />}
              <small className="helper-text">example@email.com</small>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                style={
                  errors.password && {
                    borderWidth: 1,
                    borderColor: "#ff0000",
                    borderStyle: "solid"
                  }
                }
                ref={register({
                  required: "Password is required.",
                  validate: value =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
                      value
                    ) || "The Password does not match the requirements."
                })}
                type="password"
                id="password"
                name="password"
                autoComplete="off"
              />
              {errors.password && (
                <InlineError message={errors.password.message} />
              )}
              <small className="helper-text">
                <ul>
                  <li>
                    <strong>Eight</strong> characters or longer
                  </li>
                  <li>
                    One <strong>lowercase</strong> alphabetical character
                  </li>
                  <li>
                    One <strong>uppercase</strong> alphabetical character
                  </li>
                  <li>
                    One <strong>numeric</strong> character
                  </li>
                  <li>
                    One <strong>special</strong> character
                  </li>
                </ul>
              </small>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="confirm">Confirm</label>
            <div className="input-wrapper">
              <input
                style={
                  errors.confirm && {
                    borderWidth: 1,
                    borderColor: "#ff0000",
                    borderStyle: "solid"
                  }
                }
                ref={register({
                  required: "Password Confirmation is required.",
                  validate: value =>
                    value === getValues().password ||
                    "Password Confirmation does not match."
                })}
                type="password"
                id="confirm"
                name="confirm"
                autoComplete="off"
              />
              {errors.confirm && (
                <InlineError message={errors.confirm.message} />
              )}
              <small className="helper-text">Confirm your password</small>
            </div>
          </div>

          <footer>
            <button type="submit">Register</button>
            <SocialLink
              name="GitHub"
              link="https://github.com/xavierigor/react-form-validation"
              icon={<FaGithub size={20} />}
            />
          </footer>
        </form>
      </Inputs>
    </Container>
  );
}

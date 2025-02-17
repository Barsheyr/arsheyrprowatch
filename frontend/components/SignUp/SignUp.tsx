"use client";

import { FC, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface SignupProps {
  isSignupFormOpen: boolean;
  toggleForm: () => void;
}

const Signup: FC<SignupProps> = (props) => {
  const { isSignupFormOpen, toggleForm } = props;

  return isSignupFormOpen ? (
    <div className="">
      <div className="">
        <h2 className="">Sign up</h2>

        <form>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              className={classNames.input}
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className={classNames.input}
              id="password"
              placeholder="Enter your Password"
            />
          </div>

          <div className="">
            <span onClick={() => toggleForm()} className="">
              Cancel
            </span>
            <button
              disabled={isFormSubmitting}
              onClick={signupHandler}
              className={classNames.confirm}
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

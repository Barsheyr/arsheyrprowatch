"use client";

import { FC, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface SignupProps {
  isSignupFormOpen: boolean;
  toggleForm: () => void;
}

const Signup: FC<SignupProps> = (props) => {
  return <div>SignUp</div>;
};

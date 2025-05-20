import axios from "axios";

export const verifyEmail = async (email) => {
  const API_KEY = import.meta.env.VITE_ABSTRACT_API_KEY;
  const URL = `https://emailvalidation.abstractapi.com/v1/?api_key=a6d8b6d66da04ceb819222b4c52e8764&email=${email}`;

  try {
    const { data } = await axios.get(URL);

    if (data.deliverability === "DELIVERABLE") {
      return "DELI";
    } else {
      return "UNDELI";
    }
  } catch (err) {
    console.error("Email validation failed", err);
    return "FAIL";
  }
};





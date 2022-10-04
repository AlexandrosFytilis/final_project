import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

const useSignUp = () => {
  const navigate = useNavigate();

  return useCallback(async (userInfo) => {
    const response = await fetch("/users", {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        userName: userInfo.userName,
        email: userInfo.email,
        password: userInfo.password,
        gardens: []
      })
    });
    const json = await response.json();
    if (response.ok) {
      navigate("/login");
    } else {
      alert(json.message);
    }
  }, [navigate]);
};

export default useSignUp;

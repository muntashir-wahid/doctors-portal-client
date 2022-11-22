import { useEffect, useState } from "react";

const useGetAccessToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/v1/jwt?email=${email}`)
        .then((res) => res.json())
        .then(({ data, status }) => {
          if (status === "success") {
            localStorage.setItem("access-token", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);

  return [token];
};

export default useGetAccessToken;

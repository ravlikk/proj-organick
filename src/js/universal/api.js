import axios from "axios";

export const url = "https://test-nest-api-iqy9.onrender.com/api";

export async function registerUser(email, password, url) {
  try {
    const res = await axios.post(url, { email, password });
    const data = res.data;

    if (
      url !== "https://test-nest-api-iqy9.onrender.com/api/users" &&
      data.token
    ) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", "true");
    }

    return data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.message);
    } else {
      console.error(err.message);
      throw err;
    }
  }
}
import axios from "axios";

const axiosService = axios.create({
  baseURL:
    "https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits",
});

// function registerUser() {
//   console.log("registerUser");
//   return axiosService.get("");
// }

const registerUser = async () => {
  try {
    return await axios.get(
      "https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits"
    );
  } catch (error) {
    console.error(error);
  }
};

export { registerUser };

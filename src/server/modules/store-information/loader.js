import axios from "axios";

export default {
  loadRandomUser: () =>
    axios
      .get("https://randomuser.me/api/")
      .then(response => response.data.results[0])
};

import { config } from "./config.js";
const { SERVER_API } = config;
export const client = {
  send: async function (url, method = "GET", body = null) {
    url = `${SERVER_API}${url}`;
    //tác vụ call api
    const headers = {
      "content-Type": "application/json",
    };
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return { response, data };
    } catch (e) {
      throw new Error(e);
    }
  },
  get: function (url) {
    //call api với get method
    return this.send(url);
  },
  post: function (url, body) {
    //call api với get method
    return this.send(url, "POST", body);
  },
  put: function (url, body) {
    //call api với get method
    return this.send(url, "PUT", body);
  },
  patch: function (url, body) {
    //call api với get method
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    //call api với get method
    return this.send(url, "DELETE");
  },
};

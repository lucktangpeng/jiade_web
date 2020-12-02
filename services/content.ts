import request from "../src/utils/request";

export const getContent = () => {
  return request({
    method: "GET",
    url: "/"
  });
};

import getData from "./lib/service.js";

getData(5).then((data) => {
  return console.log(data);
});

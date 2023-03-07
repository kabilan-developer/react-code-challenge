// images
export const Images = {
  spacex_logo: require("../assets/images/SpaceX-Logo1.png"),
  ham_menu: require("../assets/images/hamburger.png"),
  up_arrow: require("../assets/images/up-arrow.png"),
  search_menu: require("../assets/images/search.png"),
  placeholder:require("../assets/images/share.jpg"),
};

//unix to date formatter
export const DateConverter = (unixdate) => {
  const dateVal = new Date(unixdate).toLocaleDateString("en-IN");
  return dateVal;
};

export const timeconvertdays = (unix_timestamp) => {
  var a = new Date(unix_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + "-" + month + "-" + year;
  return time;
};

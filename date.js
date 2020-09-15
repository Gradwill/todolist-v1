
//exports is a JS Object

module.exports.getDate = getDate;
module.exports.getDay = getDay;


function getDate() {
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let today = new Date();

  // Format the date string
  let day = today.toLocaleDateString("en-US", options);

  return day;
}

function getDay() {
  let options = {
    weekday: 'long',
  };
  let today = new Date();

  // Format the date string
  let day = today.toLocaleDateString("en-US", options);

  return day;
}

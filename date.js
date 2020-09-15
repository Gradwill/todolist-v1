
//exports is a JS Object

module.exports = getDate;

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

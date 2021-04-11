// This version includes returning availableSlots with `this` and awaits getDataForDays

const axios = require('axios');

const numberOfDays = [0, 1, 2, 3, 4, 5, 6, 7];
const availableSlots = [];

async function getDataForDays() {
  for (let day in numberOfDays) {
    await getData(day);
  }
  console.log(availableSlots);
}

async function getData(day) {
  let today = new Date();
  let dateToLookFor = today.setDate(today.getDate() + Number(day));

  const url = `https://camh.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?day=${new Date(
    dateToLookFor
  ).toISOString()}&location_id=CMH&slot_type=CONGREGATE&key=e9ae7abf-1c88-479b-9c1a-2e81a21da988`;

  await axios(url)
    .then((response) => {
      const data = response.data;
      if (data.slots_left !== 0) {
        availableSlots.push(new Date(dateToLookFor).toDateString());
      }
    })
    .catch(console.error);
}

getDataForDays().then(() => {
  if (!availableSlots.length) {
    // Don't run anymore workflow steps
    return;
  } else {
    // Format the available dates into lists for slack message
    return this.availableSlots;
  }
});

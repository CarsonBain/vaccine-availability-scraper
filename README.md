# vaccine-availability-scraper

## Quick start

1. Install the required packages: `npm install`
2. Run the script: `node index`

## More information

This script pulls the next 7 days of vaccine availability information for CAMH for the priority group of high risk areas. To change the group, change the `slot_type` query param in the `url`.

`index-pipedream.js` is slightly modified to be used in [Pipedream](https://pipedream.com/) and run as a scheduled job. The output is formatted to be used as a bulletted list with the Slack integration.

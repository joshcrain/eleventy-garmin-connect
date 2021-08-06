const fetch = require("node-fetch");

module.exports = async function() {
    console.log( "Fetching Garmin Connect Data…" );

  // Garmin Connect public activity list JSON feed
    return fetch("https://connect.garmin.com/proxy/activitylist-service/activities/[YOUR-GARMIN-CONNECT-ID]?limit=100")
        .then(res => res.json()) // node-fetch option to transform to json
        .then(json => {
        // return the data
        return {
            garmin: json
        };
    });
};
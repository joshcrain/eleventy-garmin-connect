const moment = require("moment");

module.exports = function(eleventyConfig) {

  // duration filter
  eleventyConfig.addNunjucksFilter("duration", function (duration, format) {
    return moment('1900-01-01 00:00:00').seconds(duration).format(format);
  });

  // date filter
  eleventyConfig.addNunjucksFilter("date", function (date, format) {
    return moment(date).format(format);
  });
  // miles filter
  eleventyConfig.addNunjucksFilter("miles", function (miles) {
    return parseFloat(miles/1609).toFixed(2);
  });

};
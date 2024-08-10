const RemoveDots = require("../../decorators/remove-dots.js");

module.exports = {
  id: "aws-api-gateway-postprocess",
  decorators: {
    oas3: {
      "remove-dots": RemoveDots,
    },
  },
};

const apiResponse = (res, response) => {
  return res
    .status(response.statusCode || 200)
    .send({ data: {}, statusCode: 200, error: "", message: "", ...response });
};
module.exports = apiResponse

const ResponseHandler = require("../responseHandler");
const {
  createModel,
  getall,
  delUser,
  updateUser,
  getOneUser,
} = require("../models/usermodel");


module.exports = {
  CreateUser: async (req, res) => {
    try {
      const response = await createModel(req.body);
      return ResponseHandler(res, response);
    } catch (error) {
      return ResponseHandler(res, {error:error});
    }
  },
  GetUsers: async (req, res) => {
    try {
      console.log("Check");
      const response = await getall();
      console.log("Check");
      return ResponseHandler(res, response);
    } catch (error) {
      return ResponseHandler(res, {error:error});
    }
  },
  GetUser: async (req, res) => {
    try {
      const response = await getOneUser(req.query);
      return ResponseHandler(res, response);
    } catch (error) {
      return ResponseHandler(res, {error:error});
    }
  },
  UpdateUser: async (req, res) => {
    try {
      const response = await updateUser(req.body);
      return ResponseHandler(res, response);
    } catch (error) {
      return ResponseHandler(res, {error:error});
    }
  },
  DeleteUser: async (req, res) => {
    try {
      const response = await delUser(req.query);
      return ResponseHandler(res, response);
    } catch (error) {
      return ResponseHandler(res, {error:error});
    }
  },
};

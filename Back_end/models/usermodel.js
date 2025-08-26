const { response } = require("express");
const { models } = require("./Index");
const { where } = require("sequelize");

module.exports = {
  createModel: async (body) => {
    try {
      const createUser = await models.USERS.create({ ...body });
      return {
        response: createUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getall: async () => {
    try {
      const users = await models.USERS.findAll({
        attributes: ["userId", "name", "username"],
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },
  getOneUser:async({username}) => {
    try {
      const getOne = await models.USERS.findOne({where:{username : username}}, {
        attributes:["userId", "name", "username"]
      })
      return {
        response : getOne
      }
    } catch (error) {
      return {
        error: error
      };
    }
  },
  updateUser: ({ username, ...body }) => {
    try {
      const newUpdate = models.USERS.update(
        { ...body },
        {
          where: {
            username: username,
          },
        }
      );
      return {
        response: newUpdate,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  delUser: ({ username }) => {
    try {
      const delUser = models.USERS.destroy({ where: { username: username } });
      return {
        response: delUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};

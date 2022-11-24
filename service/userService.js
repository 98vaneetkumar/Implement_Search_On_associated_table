const Model = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
exports.addUser = (data) => {
  return Model.userModel.create(data);
};

exports.getuser = (data) => {
  return Model.userModel.findAll();
};

Model.userModel.hasMany(Model.gameModel, {
  foreignKey: "userID",
});

Model.gameModel.hasMany(Model.groundModel, { foreignKey: "gameID" });
Model.groundModel.hasMany(Model.locationModel, { foreignKey: "groundID" });

// exports.getuserall = (data) => {

//   return Model.userModel.findAll({
//     include: [
//       {
//         model: Model.gameModel,
//         include: [
//           {
//             model: Model.groundModel,
//             include: [{ model: Model.locationModel }],
//           },
//         ],
//       },
//     ],
//   });
// };

exports.getuserall = (criteria, limit, offset) => {
  return new Promise((resolve, reject) => {
    let where = {};
    console.log(criteria, "cccccc");

    let order = [["userId", "ASC"]];
    if (criteria.sortBy && criteria.orderBy) {
      order = [[criteria.sortBy, criteria.orderBy]];
    }
    if (criteria && criteria.search) {
      where = {
        [Op.or]: {
          userId: {
            [Op.or]: {
              [Op.in]: Sequelize.literal(
                `(  Select userID from game where gamename LIKE '%${criteria.search}%' OR gameLevel LIKE '%${criteria.search}%'
                UNION ALL
                 select distinct game.userID from game inner join ground on game.gameId=
                       ( select ground.gameId from ground inner join
                       location on ground.groundId=location.groundID where locationName LIKE '%${criteria.search}%')
                UNION ALL
                Select userID from game as game INNER JOIN ground as ground ON game.gameId=ground.gameID where   groundName LIKE '%${criteria.search}%' 
                UNION ALL
                SELECT userId FROM user WHERE (CONCAT(firstName, ' ', lastName)) LIKE '%${criteria.search}%')
                `
              ),
            },
          },
        },
      };
    }
    console.log(where, "cccccc");
    Model.userModel
      .findAll({
        limit,
        offset,
        where: where,
        order: order,
        include: [
          {
            model: Model.gameModel,
            include: [
              {
                model: Model.groundModel,
                include: [
                  {
                    model: Model.locationModel,
                  },
                ],
              },
            ],
          },
        ],
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

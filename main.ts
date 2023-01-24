import { Sequelize, Model, DataTypes, Op } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    age: { type: DataTypes.INTEGER, allowNull: true },
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

async function main() {
  await sequelize.sync();

  const user = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });

  console.log(user.toJSON());

  const users = await User.findAll({
    where: {
      age: {
        [Op.ne]: null,
      },
    },
  });

  console.log(users.map((u) => u.toJSON()));
}

main().catch(console.error);

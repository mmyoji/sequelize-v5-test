import { Sequelize, Model, DataTypes, Op } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {
  readonly id: number;
  username: string;
  age: number | null;
  birthday: Date;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

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

  const users: User[] = await User.findAll({
    where: {
      // @ts-ignore
      age: {
        [Op.not]: null,
      },
    },
  });

  console.log(users.map((u) => u.toJSON()));
}

main().catch(console.error);

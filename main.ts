import {
  Sequelize,
  Model,
  DataTypes,
  Op,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare readonly id: CreationOptional<number>;
  declare username: string;
  declare age: number | null;
  declare birthday: Date;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    age: { type: DataTypes.INTEGER, allowNull: true },
    birthday: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
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
      age: {
        [Op.not]: null,
      },
    },
  });

  console.log(users.map((u) => u.toJSON()));
}

main().catch(console.error);

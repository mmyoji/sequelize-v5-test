import { QueryInterface, DataTypes } from "sequelize";

export async function up(queryInterface: QueryInterface) {
  return queryInterface.createTable(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        allowNull: false,
        type: new DataTypes.STRING(128),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      uniqueKeys: {
        name_uniq: {
          fields: ["name"],
        },
      },
    }
  );
}

export async function down(queryInterface: QueryInterface) {
  return queryInterface.dropTable("users");
}

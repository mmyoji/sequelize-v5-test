import { sequelize } from "./models/index";
import { User } from "./models/user";

async function yourTestScript() {
  const user = await User.create({
    name: "John",
  });
  console.log(user.toJSON());

  const users: User[] = await User.findAll({
    where: {
      name: "John",
    },
  });
  console.log(users.map((u) => u.toJSON()));
}

async function main() {
  // test connection
  await sequelize.authenticate();

  await yourTestScript();
}

main()
  .then(() => {
    process.nextTick(() => {
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error(err);

    sequelize.close().catch((closeErr) => {
      console.error(`Error happens when closing connection`, closeErr);
    });
  });

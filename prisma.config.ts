import { defineConfig, env } from "prisma/config";

export default defineConfig({

  schema: "app/prisma/schema.prisma", 
  migrations: {

    path: "app/prisma/migrations",
  },
  engine: "classic",
  datasource: {

    url: "file:./app/prisma/dev.db",
  },
});
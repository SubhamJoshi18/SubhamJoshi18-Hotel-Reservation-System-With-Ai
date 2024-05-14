import * as dotenv from "dotenv";
import path from "node:path";

const result = dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const envConfig = {
  serverPort: process.env.SERVER_PORT,
  mongoConnectionString: process.env.MONGO_URL,
};

export default envConfig;

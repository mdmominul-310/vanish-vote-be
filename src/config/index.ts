import * as dotenv from "dotenv";
import path from "path";

// dotenv.config({
//     path: path.join(process.cwd(), '.env')
// });

// Load environment variables based on the current environment
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.join(process.cwd(), ".env") });
} else if (process.env.NODE_ENV === "development") {
  console.log("Loading local environment variables");
  dotenv.config({ path: path.join(process.cwd(), ".env.local") });
} else {
  dotenv.config({ path: path.join(process.cwd(), ".env") });
}

export default {
  project_name: process.env.PROJECT_NAME,
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  // mongo database configuration
  mongodb_host: process.env.mongodb_host || "localhost",
  mongodb_database: process.env.mongodb_database || "captake",
  mongodb_user: process.env.user,
  mongodb_password: process.env.password,
  auth_api_key: process.env.AUTH_API_KEY || "admin",
};

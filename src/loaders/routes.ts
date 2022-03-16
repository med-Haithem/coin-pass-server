// Routes
import authModule from "../features/auth/auth.module";
const { authRoute } = authModule;
export const getRoutes = (app: any) => {
  app.use("/api/auth", authRoute);
};

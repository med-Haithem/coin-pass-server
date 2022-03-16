// Routes
import authModule from "../features/auth/auth.module";
import currencyConverterRoutes from "../features/currency-converter/currency-converter.route";
const { authRoute } = authModule;
export const getRoutes = (app: any) => {
  app.use("/api/auth", authRoute);
  app.use("/api/currency/", currencyConverterRoutes);
};

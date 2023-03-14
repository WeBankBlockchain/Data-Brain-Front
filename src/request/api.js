import service from "./service";

export const RegisterApi = (params) =>
  service.post("/account/register", params);

export const LoginApi = (params) => service.post("account/login", params);

export const LogoutApi = (params) => service.post("account/logout", params);

export const SearchCompany = (params) =>
  service.post("account/searchCompany", params);

export const ApproveAccount = (params) =>
  service.post("account/approveAccount", params);

export const PageQuerySchemaApi = (params) =>
  service.post("schema/pageQuerySchema", params);

export const PageQueryCompanyApi = (params) =>
  service.post("schema/pageQueryCompany", params);

export const GetHotCompaniesApi = (params) =>
  service.post("account/getHotCompanies", params);

export const QueryCompanyByUsernameApi = (params) =>
  service.post("account/queryCompanyByUsername", params);

export const GetHotProductsApi = (params) =>
  service.post("product/getHotProducts", params);

export const pageQueryProductApi = (params) =>
  service.post("product/pageQueryProduct", params);

export const queryProductByIdApi = (params) =>
  service.post("product/queryProductById", params);

export const createProductApi = (params) =>
  service.post("product/createProduct", params);

export const GetHotTagsApi = (params) => service.post("tag/getHotTags", params);

export const QueryDataSchemeDetailApi = (params) => service.post("schema/querySchemaById", params);

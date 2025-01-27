import { Page } from "./Page";

export interface ResponseModel<T> {
  content: T[];
  page: Page;
}

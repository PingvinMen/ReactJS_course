import { REQUEST_STATUS } from "../../constants";

export const selectArticales = (state) => state.articles.data;
export const selectArticalesLoading = (state) => 
    state.articles.request.status === REQUEST_STATUS.PENDING;
export const selectArticalesError = (state) => 
    state.articles.request.error;
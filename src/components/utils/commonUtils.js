export const getUser = () =>
JSON.parse(sessionStorage.getItem("user_details") || "{}");

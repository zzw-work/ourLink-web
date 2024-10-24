export function setToken(days?: number) {
  let expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = "token" + "=" + "true" + expires + "; path=/";
}

export const getToken = () => {
  return document?.cookie?.split("; ")?.find((row) => row.startsWith("token="));
};

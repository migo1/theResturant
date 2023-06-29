const setupAppId = () => {
  let appId = localStorage.getItem("app_id");
  if (!appId) {
    appId = "sLEAEJ02bZKmKMNcbWN3";
  }

  localStorage.setItem("app_id", appId);
};

export default setupAppId;

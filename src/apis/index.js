export const getMethod = async (item) => {
  try {
    const response = await fetch(process.env.REACT_APP_BASEURL + item.url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return false;
  }
};

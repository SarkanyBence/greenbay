const fetchData = async (
  method: string,
  suburl: string,
  data?: any
): Promise<any> => {
  const token: string = localStorage.getItem("token") as string;
  let url: string = process.env.REACT_APP_BACKEND_URL + suburl;

  let init: { [k: string]: any } = {
    method: method,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  if (method !== "GET") init.body = JSON.stringify({ data });
  console.log("url", url);

  try {
    const response = await fetch(url, init);
    const result = await response.json();
    console.log("result", result);

    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
      throw { status: response.status, message: result.error };
    } else {
      return result;
    }
  } catch (error: any) {
    throw error;
  }
};

export default fetchData;

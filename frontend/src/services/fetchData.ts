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

  try {
    const response = await fetch(url, init);
    const result = await response.json();

    if (!response.ok) {
      throw { status: response.status, message: result.error };
    } else {
      return result;
    }
  } catch (error: any) {
    throw error;
  }
};

export default fetchData;

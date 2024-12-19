const extractDataFromInputs = () => ({
  text: document.getElementById("text-value").value,
  number: Number(document.getElementById("number-value").value),
});

const fetchData = (baseUrl = "http://localhost:5000") => {
  const getData = async (additionUrl = "") => {
    const response = await fetch(`${baseUrl}/${additionUrl}`);
    const data = await response.json();
    return data;
  };

  const postData = async (additionUrl = "", body = {}) => {
    const response = await fetch(`${baseUrl}/${additionUrl}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

  return {
    getData,
    postData,
  };
};

const submitData = async () => {
  const { getData, postData } = fetchData();
  console.log(postData);
  const submitData = extractDataFromInputs();
  const result = await postData("submit", submitData);
  console.log(result);
  // use this in order to change the url
  //   location.href = "http://localhost:5000/enosh";
};

class Request {
  xhrGet() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000");
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log(xhr.response);
    };
    xhr.send();
  }
  fetchGet() {
    fetch("http://localhost:3000")
      .then(
        (response) => {
          if (response.ok) {
            response.json();
          } else {
            throw new Error("接口出错");
          }
        },
        (err) => {
          console.log("err", err);
        }
      )
      .then((data) => console.log(data));
  }
  fetchPost() {
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify({ name: "ace0220" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            response.json();
          } else {
            throw new Error("接口出错");
          }
        },
        (err) => {
          console.log("err", err);
        }
      )
      .then((data) => console.log(data));
  }
}

import React, { useState } from "react";
import axios from "axios";
function App() {
  const [news, setNews] = useState([]);


  
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=keyword&apiKey=0e2d21ee3e054aeeb531e901c45d635d"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };

  const postNews = () => {
    axios
      .get(
        "http://localhost:3033/postNews"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <div className="navbar bg-light">
              <div className="container-fluid justify-content-start">
                <button
                  className="btn btn-outline-success me-2"
                  onClick={fetchNews}
                >
                  FetchNews
                </button>
                <br />
                <a href="/" className="btn btn-outline-success me-2">
                  Main
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>

                    <button className="btn btn-primary" onClick={postNews}>
                      Read news later on
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

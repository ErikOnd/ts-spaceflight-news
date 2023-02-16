import { useState, useEffect } from "react";
import ArticleComponent from "./ArticleComponent";
import { IArticles } from "./interfaces/IArticles";
import { Row } from "react-bootstrap";

const MainComponent = () => {
  useEffect(() => {
    fetchArticles();
  }, []);

  const [articles, setArticles] = useState<IArticles[]>([]);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let articlesFromApi = await response.json();
        console.log(articlesFromApi);
        setArticles(articlesFromApi);
      } else {
        console.log("Error! :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="justify-content-center mb-3">
        <h1>Spaceflight News Daily</h1>
      </Row>
      <Row xs={1} sm={2} md={3}>
        {articles.map((article) => {
          return <ArticleComponent article={article}></ArticleComponent>;
        })}
      </Row>
    </>
  );
};

export default MainComponent;

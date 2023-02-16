import { Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IArticles } from "./interfaces/IArticles";

const DetailsComponent = () => {
  const [detail, setDetail] = useState<IArticles>();
  useEffect(() => {
    fetchDetail();
  }, []);

  const params = useParams();

  const fetchDetail = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.passedID}`
      );
      if (response.ok) {
        let detail = await response.json();
        setDetail(detail);
      } else {
        console.log("Error! :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {console.log(detail?.id)}
      <Row className="justify-content-center mb-3">
        <h1>{detail?.title}</h1>
      </Row>
      <Link to="/">
        <span className="back-btn">Back to overview</span>
      </Link>

      <Row className="justify-content-center mb-5">
        <img
          src={detail?.imageUrl}
          className="img-fluid article-img"
          alt="article-img"
        ></img>
      </Row>

      <p>{detail?.summary}</p>
    </>
  );
};

export default DetailsComponent;

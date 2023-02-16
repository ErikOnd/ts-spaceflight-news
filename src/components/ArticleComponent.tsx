import { IArticles } from "./interfaces/IArticles";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ArticleComponentProps {
  article: IArticles;
}

const ArticleComponent = (props: ArticleComponentProps) => {
  return (
    <Col className="mb-4" key={props.article.id}>
      <Link
        to={`/details/${props.article.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card className="card-col">
          <Card.Img variant="top" src={props.article.imageUrl} />
          <Card.Body>
            <Card.Title id="card-title">{props.article.title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ArticleComponent;

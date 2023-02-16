import { IArticles } from "./interfaces/IArticles";
import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface ArticleComponentProps {
  article: IArticles;
}

const ArticleComponent = (props: ArticleComponentProps) => {
  return (
    <Col className="mb-4" key={props.article.id}>
      <Card className="card-col">
        <Link
          to={`/details/${props.article.id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img variant="top" src={props.article.imageUrl} />
          <Card.Body>
            <Card.Title id="card-title">{props.article.title}</Card.Title>
            <Badge className="time-badge">
              {format(
                new Date(Date.parse(props.article.publishedAt)),
                "dd.MM.yyyy"
              )}
            </Badge>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default ArticleComponent;

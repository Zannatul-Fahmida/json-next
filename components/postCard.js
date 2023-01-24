import Link from "next/link";
import { Button, Card } from "react-bootstrap";

const PostCard = (post) => {
  const { id, title } = post.post;
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Link href={`/details/${id}`}><Button>Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;

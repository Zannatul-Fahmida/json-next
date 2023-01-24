import { Col, Container, Row } from "react-bootstrap";
import PostCard from "../components/postCard";

const Home = ({ posts }) => {
  return (
    <Container className="text-center">
      <h1 className="my-4">All posts</h1>
      <Row xs={1} md={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

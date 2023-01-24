import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Container } from "react-bootstrap";

const PostDetail = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Container className="my-4 d-flex justify-content-center align-items-center">
      <Card className="h-100 w-50">
        <Card.Body>
          <h3 style={{color: 'brown'}}>{post.id} - {post.title}</h3>
          <p>{post.body}</p>
          <Link href="/">
            <Button>Back To Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
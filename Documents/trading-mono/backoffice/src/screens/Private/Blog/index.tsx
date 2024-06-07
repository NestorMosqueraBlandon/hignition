import { Breadcrumbs, Button, Loader, Menus, Title } from "@/components";
import { Container, ScreenHeader, Table } from "@/containers";
import { useDeletePost, usePosts } from "@/hooks";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/create-post");
  };
  const { isLoading, posts } = usePosts();
  const { isDeleting, deletePost } = useDeletePost();
  if (isLoading) return <Loader />;
  return (
    <Container>
      <ScreenHeader>
        <div>
          <Breadcrumbs items={["Home", "Blog", "List"]} />
          <Title text="Blog" />
        </div>
        <Button onClick={handleRedirect}>Crear Post</Button>
      </ScreenHeader>
      <Menus>
        <Table
          isDeleting={isDeleting}
          deleteHandler={deletePost}
          items={posts.items}
          keys={["title", "category", "company", "createdAt"]}
          headers={["Title", "Category", "Company", "Created At"]}
          count={posts.count}
          pageInfo={posts.pageInfo}
        />
      </Menus>
    </Container>
  );
};

export default Blog;

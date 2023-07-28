import { useFindManyPost, useMutatePost } from "~/lib/hooks";
import { AuthUser } from "~/lib/types/AuthUser";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";

const Posts = ({ user }: { user: AuthUser }) => {
  const { createPost, updatePost, deletePost } = useMutatePost();

  const { data: posts } = useFindManyPost({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });

  async function onCreatePost() {
    const title = prompt("Title");
    if (!title) return;

    await createPost({ data: { title, authorId: user.id } });
  }

  async function onTogglePublished(post: any) {
    await updatePost({
      where: { id: post.id },
      data: { published: !post.published },
    });
  }

  async function onDelete(post: any) {
    if (confirm("Are you sure?")) {
      await deletePost({ where: { id: post.id } });
    }
  }

  return (
    <div className="flex w-full flex-col">
      <Button onClick={() => void onCreatePost()}>+ Create Post</Button>

      <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {posts?.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="mb-2 font-bold">{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.image!} />
                  <AvatarFallback>
                    {post.author.email?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {post.author.email}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content.</p>
              <p className="darK:text-zinc-400 mb-6">
                {post.published ? "Published" : "Not published"}
              </p>
            </CardContent>
            <CardFooter>
              {post.authorId === user.id && (
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    onClick={() => void onTogglePublished(post)}
                  >
                    Publish
                  </Button>
                  <Button variant="ghost" onClick={() => void onDelete(post)}>
                    Delete
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;

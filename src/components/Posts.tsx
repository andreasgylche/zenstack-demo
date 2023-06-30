import { useFindManyPost, useMutatePost } from "~/lib/hooks";
import { AuthUser } from "~/lib/types/AuthUser";

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
    <div className="container flex flex-col">
      <button
        className="rounded border border-black p-2 text-lg"
        onClick={() => void onCreatePost()}
      >
        + Create Post
      </button>

      <ul className="container mt-8 flex flex-col gap-2">
        {posts?.map((post) => (
          <li key={post.id} className="flex items-end justify-between gap-4">
            <div className="mb-4 w-full max-w-md rounded-lg bg-white px-6 py-8 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">{post.title}</h2>
              <p className="mb-2 text-gray-600">Author: {post.author.email}</p>
              <p className="mb-6 text-gray-600">
                {post.published ? "Published" : "Not published"}
              </p>
              <button
                className="w-full rounded-md bg-red-500 py-2 font-bold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => void onDelete(post)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

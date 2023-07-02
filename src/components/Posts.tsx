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
    <div className="flex w-full flex-col">
      <button
        className="rounded border border-zinc-600 p-2 text-lg"
        onClick={() => void onCreatePost()}
      >
        + Create Post
      </button>

      <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {posts?.map((post) => (
          <div key={post.id} className="flex items-end justify-between gap-4">
            <div className="w-full rounded-lg bg-zinc-800 px-6 py-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
              <p className="mb-2 text-zinc-400">Author: {post.author.email}</p>
              <p className="mb-6 text-zinc-400">
                {post.published ? "Published" : "Not published"}
              </p>
              <div className="flex gap-2">
                <button
                  className="w-full rounded-md bg-zinc-900 py-2 font-bold text-zinc-100 transition-colors hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50"
                  onClick={() => void onTogglePublished(post)}
                >
                  Publish
                </button>
                <button
                  className="w-full rounded-md bg-red-500 py-2 font-bold text-zinc-100 transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  onClick={() => void onDelete(post)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

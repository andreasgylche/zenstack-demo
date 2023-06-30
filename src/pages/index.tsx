import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Posts from "~/components/Posts";
import Welcome from "~/components/Welcome";
import AuthWidget from "~/components/AuthWidget";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="px-4 py-20">
      {session?.user ? (
        // welcome & blog posts
        <div className="flex flex-col">
          <Welcome user={session.user} />
          <section className="mt-10">
            <Posts user={session.user} />
          </section>
        </div>
      ) : (
        // if not logged in
        <AuthWidget />
      )}
    </div>
  );
};

export default Home;

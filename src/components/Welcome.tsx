import { signOut } from "next-auth/react";
import { AuthUser } from "~/lib/types/AuthUser";

const Welcome = ({ user }: { user: AuthUser }) => {
  async function onSignout() {
    await signOut({ redirect: false, callbackUrl: "/signin" });
  }

  return (
    <div className="flex gap-4">
      <h3 className="text-lg">Welcome back, {user.email}</h3>
      <button className="text-black underline" onClick={() => void onSignout()}>
        Signout
      </button>
    </div>
  );
};

export default Welcome;

import { signOut } from "next-auth/react";
import { AuthUser } from "~/lib/types/AuthUser";

const UserButton = ({ user }: { user: AuthUser }) => {
  return (
    <div className="ml-auto flex gap-4">
      <button
        className="underline"
        onClick={() =>
          void signOut({ redirect: false, callbackUrl: "/signin" })
        }
      >
        Signout
      </button>
    </div>
  );
};

export default UserButton;

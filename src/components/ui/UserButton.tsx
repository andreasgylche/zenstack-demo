import { signOut } from "next-auth/react";

const UserButton = () => {
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

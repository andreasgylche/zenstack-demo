import type { AuthUser } from "~/lib/types/AuthUser";

const Welcome = ({ user }: { user: AuthUser }) => {
  return (
    <div className="flex gap-4">
      <h3 className="text-lg">Welcome back, {user.email}</h3>
    </div>
  );
};

export default Welcome;

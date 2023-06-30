import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AuthUser } from "~/lib/types/AuthUser";
import UserButton from "./UserButton";

const Navigation = () => {
  const { data: session, status } = useSession();

  async function onSignout() {
    await signOut({ redirect: false, callbackUrl: "/signin" });
  }

  return (
    <ul className="flex gap-4">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/items"}>Items</Link>
      </li>
      <li>
        <Link href={"/rma"}>RMA</Link>
      </li>
      <li>
        <UserButton user={session?.user!} />
      </li>
    </ul>
  );
};

export default Navigation;

import { useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";

const Navigation = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link
        href={"/signin"}
        className="rounded-md bg-violet-500 p-2 text-sm font-bold text-zinc-100 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
      >
        Sign in
      </Link>
    );
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
        <UserButton user={session.user!} />
      </li>
    </ul>
  );
};

export default Navigation;

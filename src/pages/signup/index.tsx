/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useState, type FormEvent } from "react";
import { useMutateUser } from "~/lib/hooks";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser: signup } = useMutateUser();

  async function onSignup(e: FormEvent) {
    e.preventDefault();

    try {
      await signup({ data: { email, password } });
    } catch (err: any) {
      if (err.info.prisma && err.info.prisma.code === "P2002") {
        alert("Email already exists");
      } else {
        alert(err.message);
      }
      return;
    }

    await signIn("credentials", { email, password, redirect: false });
    await Router.push("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-zinc-800 px-6 py-8 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={(e) => void onSignup(e)}>
          <div className="mb-4">
            <label className="mb-2 block text-sm text-zinc-100" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm text-zinc-100"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full rounded-md bg-violet-500 py-2 font-bold text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

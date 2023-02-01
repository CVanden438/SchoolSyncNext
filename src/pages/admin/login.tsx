import { signIn, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
export default function SignIn({}) {
  const { data } = useSession();
  const router = useRouter();
  if (data) {
    router.push({ pathname: "/" });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const test = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(test);
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="m-auto mt-20 flex w-5/6 flex-col gap-4 md:mt-40 md:w-1/2"
      >
        <label htmlFor="email" className="text-xl font-bold text-neutral">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <label htmlFor="password" className="text-xl font-bold text-neutral">
          Password
        </label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
        <button type="submit" className="btn mt-2">
          Sign in
        </button>
      </form>
    </>
  );
}

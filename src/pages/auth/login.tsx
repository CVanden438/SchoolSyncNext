import { signIn, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { api } from "../../utils/api";
import Modal from "../../components/modal";
export default function SignIn({}) {
  const { data } = useSession();
  const router = useRouter();
  if (data) {
    router.push({ pathname: "/" });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      role,
      redirect: false,
    });
  };
  return (
    <>
      <section className="m-auto mt-20 flex w-5/6 flex-col justify-between gap-4 md:mt-40 md:w-1/2">
        <p className=" text-center text-2xl text-neutral">Are you a....</p>
        <div className="w-full">
          <button
            className={`btn w-1/2 ${
              role === "STUDENT" ? "bg-primary" : "bg-accent"
            }`}
            onClick={() => setRole("STUDENT")}
          >
            Student
          </button>
          <button
            className={`btn w-1/2 ${
              role === "TEACHER" ? "bg-primary" : "bg-accent"
            }`}
            onClick={() => setRole("TEACHER")}
          >
            Teacher
          </button>
        </div>
      </section>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="m-auto flex w-5/6 flex-col gap-4 md:w-1/2"
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
      <div className="m-auto mt-2 w-5/6 text-center text-neutral md:w-1/2">
        <p>
          Don't have an account yet? Head over to the register page:
          <span className="ml-4">
            <Link className="link" href={"/auth/register"}>
              Register
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}

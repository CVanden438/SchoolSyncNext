import Link from "next/link";
import React, { useState } from "react";
import { api } from "../../utils/api";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<role>("STUDENT");
  const [school, setSchool] = useState<string>("");
  const register = api.auth.registerUser.useMutation({});
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register.mutateAsync({
      userName,
      email,
      passwordHash: password,
      role,
      schoolId: "cldl3k4sa0000tqx4e6r49vey",
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
        className="m-auto mt-8 flex w-5/6 flex-col gap-4 md:w-1/2"
      >
        <label htmlFor="username" className="text-xl font-bold text-neutral">
          Username
        </label>
        <input
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="h-12 rounded-lg bg-neutral-content pl-2 pr-2 pt-1 pb-1 text-lg"
        />
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
        <label htmlFor="school" className="text-xl font-bold text-neutral">
          School
        </label>
        <select
          id="school"
          className="select-bordered select-accent select w-full bg-neutral-content"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        >
          <option disabled selected>
            Select your school
          </option>
          <option value="test" className="">
            Homer
          </option>
          <option value="test" className="">
            Marge
          </option>
          <option value="test" className="">
            Bart
          </option>
          <option value="test" className="">
            Lisa
          </option>
          <option value="test" className="">
            Maggie
          </option>
        </select>
        <button type="submit" className="btn mt-2">
          Register
        </button>
      </form>
      <div className="m-auto mt-2 w-5/6 text-center text-neutral md:w-1/2">
        <p>
          Already have an account? Head over to the login page:
          <span className="ml-4">
            <Link className="link" href={"/auth/login"}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;

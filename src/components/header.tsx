import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: sesh } = useSession();
  return (
    <header className="navbar fixed top-0 z-50 justify-between bg-accent-content text-neutral-content">
      <p>SchoolSync</p>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href={"/auth/login"}>
        SignIn
      </Link>
      {sesh && (
        <button onClick={() => signOut()} className="btn">
          Sign Out
        </button>
      )}
    </header>
  );
};

export default Header;

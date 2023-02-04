import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";
import Hero from "../components/home/hero";
import Footer from "../components/home/footer";
import Features from "../components/home/features";
import Pricing from "../components/home/pricing";
import Testemonials from "../components/home/testemonials";
const Home: NextPage = () => {
  const hello = api.example.hello.useQuery(
    { text: "from tRPC" },
    { refetchOnWindowFocus: false }
  );
  const { data: sesh } = useSession();
  console.log(sesh);
  return (
    <>
      <Head>
        <title>School Sync</title>
        <meta name="description" content="School Sync" />
        <link rel="icon" href="/haticon.png" />
      </Head>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testemonials />
        <Footer />
      </main>
    </>
  );
};

export default Home;

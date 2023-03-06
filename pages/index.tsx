import type { NextPage } from "next";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Client from "../components/Client";
import EpisodeCard from "../components/EpisodeCard";
import Articles from "../components/Articles";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div className="bg-white   text-left text-base text-black font-see-more">
      <Layout>
        <div className="w-[90%]  mx-auto space-y-32  ">
          <Hero />
          <Client />
          <EpisodeCard />
          <Articles />
        </div>
      </Layout>
    </div>
  );
};

export default Home;

import Head from "next/head";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio | Home</title>
        <meta name="description" content="Portfolio of a modern web developer" />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of a modern web developer"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-background dark:bg-background text-text dark:text-text"
        >
          <h2 className="text-3xl font-bold mb-8 text-accent">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {repos && repos.length > 0 ? (
              repos.map((repo) => (
                <ProjectCard
                  key={repo.id}
                  title={repo.name}
                  description={repo.description || "No description"}
                  image="/next.svg"
                  url={repo.html_url}
                />
              ))
            ) : (
              <p className="text-text-light dark:text-text-light">
                Loading projects...
              </p>
            )}
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

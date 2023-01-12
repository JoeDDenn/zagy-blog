import { type NextPage } from "next";
import Head from "next/head";
import { SearchPosts } from "../components/searchPosts";
// will create context to flow the data between search, tags box, and featred posts to outputPosts without passing props
//Idk
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zagy-Blog</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto py-20 flex gap-12 flex-col items-center justify-center p-4">
        <h1 className="text-2xl">Wanna write or edit a post? open a pull request <a href="https://github.com/The-Zagy/zagy-blog/tree/main/content/blog" className="dark:text-dark-secondary-500 text-dark-primary-700">here!</a></h1>
        <SearchPosts />
      </div>

    </>
  );
};

export default Home;

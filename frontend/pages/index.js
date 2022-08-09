//  used for seo purpose. like metadata or tags and stuff like this
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import { server } from "../config/index";

export default function Home({ articles }) {
  return (
    <div>
      <Meta title={"Home"}></Meta>
      <ArticleList articles={articles} />
    </div>
  );
}

// There are three methods to fetch data
// getStaticProps: allows us to fetch data at build time
// getServerSideProps: fetches data on every request
// getStaticPaths: it allows us to create dynamic paths bases on the fetched data

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// Calling api route
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

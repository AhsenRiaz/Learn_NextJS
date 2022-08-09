//  used for seo purpose. like metadata or tags and stuff like this
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="Bored Ape Nft Marketplace"
          content="web development, programming"
        ></meta>
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

// There are three methods to fetch data
// getStaticProps: allows us to fetch data at build time
// getServerSideProps: fetches data on every request
// getStaticPaths: it allows us to create dynamic paths bases on the fetched data

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

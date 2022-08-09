import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  // getStaticSide props methods for rendering an article
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.body}></Meta>
      <h1> {article.title} </h1>
      <p>{article.body}</p>
      <br />
      <Link href={"/"}>Go Back</Link>
    </>
  );
};

export default article;

// getserversideprops method for rendering an article
// it has a drawback that it runs the api on each request which slows down the site
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// We can use getStaticPaths which generated dynamic ssg pages during the build time. As the dynamic pages are already build the is much faster

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();
//   const ids = articles.map((article, i) => article.id);

//   const paths = ids.map((id, i) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// for api route
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();
  const ids = articles.map((article, i) => article.id);

  const paths = ids.map((id, i) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

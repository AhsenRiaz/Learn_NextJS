import { useRouter } from "next/router";

const article = ({ article }) => {
  // getStaticSide props methods for rendering an article
  // const router = useRouter();
  // const { id } = router.query;

  return <div>This is article 1</div>;
};

export default article;

// getserversideprops method for rendering an article
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

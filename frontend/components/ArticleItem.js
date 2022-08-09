import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    // you can also do it llike this href={`article/${article.id}`} and remove as prop
    <Link href={`article/[id]`} as={`article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3> {article.title} </h3>
        <p> {article.body} </p>
      </a>
    </Link>
  );
};

export default ArticleItem;

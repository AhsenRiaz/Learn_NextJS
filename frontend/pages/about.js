//  used for seo purpose. like metadata or tags and stuff like this
import Head from "next/head";
import Meta from "../components/Meta";

const About = () => {
  return (
    <div>
      <Meta title={"About"} />

      <h1>This is the About Page</h1>
    </div>
  );
};

export default About;

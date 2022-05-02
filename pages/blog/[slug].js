import { useRouter } from "next/router";
import db from "../../utils/db";
import Post from "../../components/post";

const PostComp = (props) => {
  const { entry } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading</div>;
  } else {
    if (entry) {
      return <Post data={entry} />;
    } else {
      return <div>not found</div>;
    }
  }
};

export const getStaticPaths = async () => {
  const member = await db.collection("posts").get();
  const paths = member.docs.map((entry) => ({
    params: {
      slug: entry.data().slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("posts").where("slug", "==", slug).get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default PostComp;

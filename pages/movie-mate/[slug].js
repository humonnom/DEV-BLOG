import { useRouter } from "next/router";
import { MovieMate } from "../../layouts/MovieMate";
import db from "../../utils/db";

const Post = (props) => {
  const { entry } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading</div>;
  } else {
    if (entry) {
      return <MovieMate member={entry} />;
    } else {
      return <div>not found</div>;
    }
  }
};

export const getStaticPaths = async () => {
  const member = await db.collection("members").get();
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
  const res = await db.collection("members").where("slug", "==", slug).get();
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

export default Post;

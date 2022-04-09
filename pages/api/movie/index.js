import db from "../../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { slug } = req.body;
    const movies = await db.collection("movies").get();
    const moviesData = movies.docs.map((movie) => movie.data());
    if (moviesData.some((movie) => movie.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("movies").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};

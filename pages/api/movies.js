import db from "../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const movies = await db.collection("movies").orderBy("created").get();
    const moviesData = movies.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ moviesData });
  } catch (e) {
    res.status(400).end();
  }
};

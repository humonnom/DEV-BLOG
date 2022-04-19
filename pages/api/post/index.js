import db from "../../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { slug } = req.body;
    const websites = await db.collection("posts").get();
    const websitesData = websites.docs.map((movie) => movie.data());
    if (websitesData.some((movie) => movie.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("posts").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};

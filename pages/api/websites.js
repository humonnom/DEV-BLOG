import db from "../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const website = await db.collection("websites").orderBy("created").get();
    const websiteData = website.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ websiteData });
  } catch (e) {
    res.status(400).end();
  }
};

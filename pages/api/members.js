import db from "../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const members = await db.collection("members").orderBy("created").get();
    const membersData = members.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ membersData });
  } catch (e) {
    res.status(400).end();
  }
};

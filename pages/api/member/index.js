import db from "../../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { slug } = req.body;
    const members = await db.collection("members").get();
    const membersData = members.docs.map((member) => member.data());
    if (membersData.some((member) => member.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("members").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};

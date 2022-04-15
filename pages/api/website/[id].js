import db from "../../../utils/db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { id } = req.query;
  try {
    if (req.method === "PUT") {
      await db
        .collection("websites")
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString(),
        });
    } else if (req.method === "GET") {
      const doc = await db.collection("websites").doc(id).get();
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === "DELETE") {
      await db.collection("websites").doc(id).delete();
    } else if (req.method === "POST") {
      await db
        .collection("websites")
        .doc(id)
        .set({
          ...req.body,
          created: new Date().toISOString(),
        });
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

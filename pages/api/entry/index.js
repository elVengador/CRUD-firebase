import db from "../../../utils/db";

const addEntry = async (req, res) => {
  try {
    const { slug } = req.body;
    const entries = await db.collection("entries").get();
    const entriesData = entries.docs.map((entry) => entry.data());

    if (entriesData.some((entry) => entry.slug === slug)) {
      return res.status(400).end();
    }
    const {id} = await db.collection("entries").add({
      ...req.body,
      created: new Date().toISOString(),
    });
    res.status(200).json({id})
  } catch (err) {
    res.status(400).end();
  }
};

export default addEntry
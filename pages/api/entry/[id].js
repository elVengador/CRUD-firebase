import db from "../../../utils/db";

const entryOperations = async (req, res) => {
  try {
    const { id } = req.query;
    if(req.method==='GET'){
        const doc = await db.collection('entries').doc(id).get()
        if(!doc){return res.status(400).end();}
        return res.status(200).json(doc.data())
    }

    if(req.method==='PUT'){
        await db.collection('entries').doc(id).update({
            ...req.body,
            updated:new Date().toISOString()
        })
    }

    if(req.method==='DELETE'){
        await db.collection.doc(id).delete()
    }

    return res.status(200).end()

  } catch (err) {
    res.status(400).end();
  }
};

export default entryOperations
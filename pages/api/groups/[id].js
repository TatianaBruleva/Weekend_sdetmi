import connectDB from "../../../src/middlewares/mongodb";
import Group from "../../../src/models/groups";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const { id } = req.query;
        const groups = await Group.findById(id);

        res.status(200).json(groups);
    } else {
        res.status(422).send("req_method_not_supported");
    }
};

export default connectDB(handler);

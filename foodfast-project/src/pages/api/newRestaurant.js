// /api/newRestaurant

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const { name, description, workingHours, address, telephoneNumber } = data;

        res = await fetch(req);

        if (res.status === 200) {
            res.status(200).json({ message: "Restaurant added" });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }

    } else {
        res.status(400).json({ message: "Something went wrong" });
    }
}
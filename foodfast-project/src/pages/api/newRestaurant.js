// /api/newRestaurant

export default function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const { id, name, description, workingHours, address, telephoneNumber, isHidden } = data;

        res.status(201).json({ message: "Restaurant added" });
    }
}
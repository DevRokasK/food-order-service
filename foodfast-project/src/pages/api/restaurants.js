// /api/restaurants

export default function handler(req, res) {
    if (req.method === "GET") {
        const data = req.body;

        const { id, name, description, workingHours, address, telephoneNumber } = data;

        res.status(201).json({ message: "Restaurants got" });
    }
}
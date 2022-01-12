
export const getUsers = async (req, res) => {
    try {
       res.status(200).json([]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
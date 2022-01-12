import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
    try {
        const postMessages = PostMessage.find();
        res.status(200).json({
            status: 200,
            channel: []
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPosts = (req, res) => {
    try {
        const postMessages = PostMessage.find();
        res.status(200).json({
            status: 200,
            channel: []
        });
       //  res.send("Post Creattion");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
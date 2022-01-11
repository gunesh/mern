import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
         const postMessages = await PostMessage.find();
       // console.log(postMessages);
        res.status(200).json({});
        // res.send("This Works");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPosts = (req, res) => {
    res.send("Post Creattion");
}
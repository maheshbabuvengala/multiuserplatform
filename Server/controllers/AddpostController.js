const addPost = require("../model/AddPost");
const College = require("../model/signup");

const collegePosts = async (req, res) => {
  const { Organization, Branch, Experience, Designation, Nofopenings, Salary } =
    req.body;

  try {
    const college = await College.findById(req.UserId);

    if (!college) {
      return res.status(400).json({ message: "College ID not found" });
    }

    if (!Array.isArray(college.collegePosts)) {
      college.collegePosts = [];
    }

    const Post = new addPost({
      Organization: college.name,
      Branch,
      Experience,
      Designation,
      Nofopenings,
      Salary,
      College: college._id,
    });

    const savedPost = await Post.save();

    college.collegePosts.push(savedPost._id); // Push only the ID
    await college.save();

    res.status(200).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { collegePosts };

// module.exports = { collegePosts };

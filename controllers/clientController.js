const clientService = require("../services/clientService");

exports.getApi = async (req, res) => {
  console.log('hellow world')
  try {
    const client = await clientService.getApi();
    res.json({ data: client, status: "success" });
    // const blogs = "hellow world";
    // res.send({ data : blogs});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.createClient = async (req, res) => {
  try {
    const blog = await clientService.createClient(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getBlogById = async (req, res) => {
//   try {
//     const blog = await clientService.getBlogById(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateBlog = async (req, res) => {
//   try {
//     const blog = await clientService.updateBlog(req.params.id, req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteBlog = async (req, res) => {
//   try {
//     const blog = await clientService.deleteBlog(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

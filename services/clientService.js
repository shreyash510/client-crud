const clientSchema = require("../models/clientModel");

exports.getApi = async () => {
  return await clientSchema.find();
};

// exports.createBlog = async (blog) => {
//   return await BlogModel.create(blog);
// };
// exports.getBlogById = async (id) => {
//   return await BlogModel.findById(id);
// };

// exports.updateBlog = async (id, blog) => {
//   return await BlogModel.findByIdAndUpdate(id, blog);
// };

// exports.deleteBlog = async (id) => {
//   return await BlogModel.findByIdAndDelete(id);
// };

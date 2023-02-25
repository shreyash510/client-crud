const clientModel = require("../models/clientModel");

exports.getApi = async () => {
  return await clientModel.find();
};

exports.createClient = async (client) => {
  return await clientModel.create(client);
};
exports.getClientById = async (id) => {
  return await clientModel.findById(id);
};

exports.updateClient = async (id, client) => {
  return await clientModel.findByIdAndUpdate(id, client);
};

exports.deleteClient = async (id) => {
  console.log(id)
  return await clientModel.findByIdAndDelete(id);
};

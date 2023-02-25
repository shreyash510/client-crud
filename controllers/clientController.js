const clientService = require("../services/clientService");

exports.getApi = async (req, res) => {
  try {
    const client = await clientService.getApi();
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.createClient = async (req, res) => {
  try {
    const client = await clientService.createClient(req.body);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const client = await clientService.getClientById(req.params.id);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const client = await clientService.updateClient(req.params.id, req.body);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const client = await clientService.deleteClient(req.params.id);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

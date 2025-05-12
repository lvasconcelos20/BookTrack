module.exports = {
  get: (req, res) => {
    return res.send("[GET] Usuários");
  },

  create: (req, res) => {
    return res.send("[POST] Usuários");
  },

  delete: (req, res) => {
    return res.send("[DELETE] Usuários");
  },
};

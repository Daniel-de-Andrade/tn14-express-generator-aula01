const usersPlaceholder = [
  {
    id: 0,
    nome: "Fulano",
    sobrenome: "da Silva",
    avatar: "/images/fulano.jpg",
  },
  {
    id: 1,
    nome: "Beltrano",
    sobrenome: "da Silva",
    avatar: "/images/beltrano.jpg",
  },
  {
    id: 2,
    nome: "Ciclana",
    sobrenome: "da Silva",
    avatar: "/images/ciclana.jpg",
  },
  {
    id: 3,
    nome: "Abirosvaldo",
    sobrenome: "da Silva",
    avatar: "/images/abirosvaldo.jpg",
  },
];

const controller = {
  index: (req, res, next) =>
    res.render("users", {
      title: "Usuários",
      subtitle: "Página Usuários | Método index",
      users: usersPlaceholder,
      id: null,
    }),
  show: (req, res, next) => {
    const { id } = req.params;
    res.render("users", {
      title: `Usuário ${usersPlaceholder[id].nome} ${usersPlaceholder[id].sobrenome}`,
      subtitle: `Página do Usuário de id ${id} | Método show`,
      users: usersPlaceholder,
      id,
    });
  },
};

module.exports = controller;

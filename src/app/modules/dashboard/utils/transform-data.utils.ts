const states = ['Aprobado', 'Rechazado', 'En proceso'];

export const transformData= (data: any) => {

  const { results, info: pagination } = data;
  const users = results.map((user: any) => {
    return {
      user: user.name,
      status: states[Math.floor(Math.random() * 3)],
      date: new Date(Date.now() - Math.floor(Math.random() * 100000000000)),
      requestedCards: Math.floor(Math.random() * 500),
    };
  });
  return {
    users,
    pagination,

  }
};

const SpaData = [];

for (let i = 1; i <= 20; i++) {
  const spa = {
    name: `Spa ${i}`,
    username: `654132${i}`,
    phoneno: Math.floor(Math.random() * 9000000000) + 1000000000,
    city: i % 2 === 0 ? "Gandhinagar" : "Ahmedabad",
    area: i % 2 === 0 ? "Kudasan" : "alpha one mall",
    status: true,
    verified: "no",
    spaAcademy: "no",
    premium: "no",
    image: 'user.png'
  };

  SpaData.push(spa);
}

export { SpaData };
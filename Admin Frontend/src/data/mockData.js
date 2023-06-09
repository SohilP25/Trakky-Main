const SpaData = [];

for (let i = 1; i <= 43; i++) {
  const spa = {
    name: `Spa ${i}`,
    phoneno: Math.floor(Math.random() * 9000000000) + 1000000000,
    city: i % 2 === 0 ? "Gandhinagar" : "Ahmedabad",
    area: i % 2 === 0 ? "Kudasan" : "alpha one mall",
    status: true,
    verified: "no",
    spaAcademy: "no",
    premium: "no",
    luxurious: "no",
    image: "user.png",
  };

  SpaData.push(spa);
}

const TherapyData = [];

for (let i = 1; i <= 20; i++) {
  const therapy = {
    name: `Therapy ${i}`,
    priority: i,
    slug: i % 2 === 0 ? "Swedish" : "Oil massage",
    gender: i % 3 === 0 ? "Male" : i % 2 === 0 ? "Female" : "Both",
    image: "user.png",
  };

  TherapyData.push(therapy);
}

const OfferData = [];

for (let i = 1; i <= 20; i++) {
  const offer = {
    name: `Offer ${i}`,
    discount: i % 2 === 0 ? "60%" : "50%",
  };

  OfferData.push(offer);
}

const InquiryData = [];

for (let i = 1; i <= 17; i++) {
  const inquiry = {
    spaname: `spa ${i}`,
    username: `654132${i}`,
    urlslug: "swedish therapy",
    time: "00:00:00",
    date: "1/1/2023",
    service: "offer",
    category: "category",
  };

  InquiryData.push(inquiry);
}

const CitiesData = [];

for (let i = 1; i <= 5; i++) {
  const city = {
    name: `City ${i}`,
    priority: i,
    date: "1/1/2023",
  };

  CitiesData.push(city);
}

const AreasData = [];

for (let i = 1; i <= 20; i++) {
  const area = {
    areaname: `Area ${i}`,
    city: `City`,
    priority: i,
    date: "1/1/2023",
  };

  AreasData.push(area);
}

export { InquiryData, OfferData, TherapyData, SpaData, CitiesData, AreasData };

const restaurant = [
  {
    name: "mcD",
    dishes: ["burger", "pizza", "sandwhich"],
  },
  {
    name: "Star Bucks",
    dishes: ["cold coffee", "Hot coffee", "shakes"],
  },
];



const filterItems = (restaurant, query) => {
  return restaurant.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
};

const add = (search) => {
  const result = filterItems(restaurant, search);

  const wrapper = document.getElementById("myHTMLSearch");

  let myHTML = "";

  for (let i = 0; i < result.length; i++) {
    myHTML += '<li class="test"> name: ' + result[i].name + "</li><br/><br/>";
  }
  wrapper.innerHTML = myHTML;
};


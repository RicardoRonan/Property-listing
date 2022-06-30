let houses = JSON.parse(localStorage.getItem("houses"))
  ? JSON.parse(localStorage.getItem("houses"))
  : [
      {
        title: "Light and Modern Apartment",
        location: "Indonesia",
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        area: "1200 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/7PBFVCz7/apartment-406901.jpg",
        price: "R11000/mo",
        listing: "For Rent",
      },
      {
        title: "Design Apartment",
        location: "China",
        bedrooms: 2,
        bathrooms: 1,
        garage: 1,
        area: "1500 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/PrXmtxV6/apartment-1851201.jpg",
        price: "R5500/mo",
        listing: "For Rent",
      },
      {
        title: "Studio",
        location: "Malaysia",
        bedrooms: 3,
        bathrooms: 1,
        garage: 1,
        area: "1250 Sq Ft",
        type: "Studio",
        img: "https://i.postimg.cc/257k8zKw/living-room-1032732.jpg",
        price: "R1200/mo",
        listing: "For Rent",
      },
      {
        title: "Open plan Studio",
        location: "China",
        bedrooms: 1,
        bathrooms: 2,
        garage: 1,
        area: "1000 Sq Ft",
        type: "Studio",
        img: "https://i.postimg.cc/vZQM2RBx/window-3065340.jpg",
        price: "R6500/mo",
        listing: "For Rent",
      },
      {
        title: "Apartment Nice View",
        location: "Philippines",
        bedrooms: 3,
        bathrooms: 1,
        garage: 1,
        area: "1300 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/jSNNc7DS/interior-design-3564955.jpg",
        price: "R2300/mo",
        listing: "For Rent",
      },
      {
        title: "White and Gold styled Apartment",
        location: "Indonesia",
        bedrooms: 4,
        bathrooms: 2,
        garage: 2,
        area: "2550 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/SKRBHCMc/pexels-vecislavas-popa-1571460.jpg",
        price: "R155000",
        listing: "For Sale",
      },
      {
        title: "Retro Styled Apartment",
        location: "India",
        bedrooms: 1,
        bathrooms: 1,
        garage: 0,
        area: "950 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/0QjrS09H/pexels-maria-orlova-4916282.jpg",
        price: "R1500/mo",
        listing: "For Rent ",
      },
      {
        title: "Spacious Apartment",
        location: "China",
        bedrooms: 4,
        bathrooms: 3,
        garage: 2,
        area: "2560 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/L8tW7v5q/pexels-vecislavas-popa-1571470.jpg",
        price: "R110000/mo",
        listing: "For Sale",
      },
      {
        title: "Open Planned Aesthetic Apartment ",
        location: "Syria",
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        area: "1550 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/GhqKsN4x/pexels-pixabay-276528.jpg",
        price: "R1510000",
        listing: "For Sale",
      },
      {
        title: " Modern Simplistic Apartment",
        location: "Philippines",
        bedrooms: 2,
        bathrooms: 1,
        garage: 0,
        area: "1200 Sq Ft",
        type: "Apartment",
        img: "https://i.postimg.cc/05HrM08J/pexels-houzlook-com-3797991.jpg",
        price: "R1100/mo",
        listing: "For Rent",
      },
    ];

function showHouses(houses) {
  document.querySelector("#houses-listing").innerHTML = "";
  houses.forEach((home, i) => {
    document.querySelector("#houses-listing").innerHTML += `
    <div class="col-6">
    <div id="listing-card" class="card bg-dark text-light p-2 m-1 mb-4 text-center shadow">
    <div class="img-container">
    <img class="img-fluid" src=${home.img} id="img">
    </div>
    <h1>${home.title}</h1>
    <p class="fs-3"><i class="fa-solid fa-hand-holding-dollar p-1"></i>${home.price}</p>
    <div class="row" id="row">
    <div class="col-4">
    <p><i class="fa-solid fa-shower p-1"></i>${home.bathrooms}</p>
    </div>
       <div class="col-4">
    <p><i class="fa-solid fa-bed p-1"></i>${home.bedrooms}</p>
  </div>
       <div class="col-4">
    <p><i class="fa-solid fa-warehouse p-1"></i></i>${home.garage}</p>
  </div>
  <p><i class="fa-solid fa-chart-area p-1"></i>${home.area}</p>
    </div>
    <div class="row" id="row-2">
    <div class="col-4">
    <p><i class="fa-solid fa-location-dot p-1"></i>${home.location}</p>
</div>
    <div class="col-4">
    <p><i class="fa-solid fa-comment-dollar p-1"></i>${home.listing}</p>
</div>
    <div class="col-4">
    <p> <i class="fa-solid fa-building p-1"></i>${home.type}</p>
    </div>
    </div>
    </div>
        `;
  });
}
console.log(houses);

localStorage.setItem("houses-listing", JSON.stringify(houses));
// document.write(houses-listing);
showHouses(houses);

// Filter

// Filter All
function allCities() {
  showHouses(houses);
}

// Filter City
function displayIndonesia() {
  const display = houses.filter((house) => {
    return house.location === "Indonesia";
  });
  showHouses(display);
}
function displayChina() {
  const display = houses.filter((house) => {
    return house.location === "China";
  });
  showHouses(display);
}
function displayMalaysia() {
  const display = houses.filter((house) => {
    return house.location === "Malaysia";
  });
  showHouses(display);
}
function displayPhilippines() {
  const display = houses.filter((house) => {
    return house.location === "Philippines";
  });
  showHouses(display);
}

function allTypes() {
  showHouses(houses);
}
// Filter Type
function displayStudio() {
  const show = houses.filter((house) => {
    return house.type === "Studio";
  });
  showHouses(show);
}
function displayApartment() {
  const show = houses.filter((house) => {
    return house.type === "Apartment";
  });
  showHouses(show);
}

// Filter Bedrooms
function allBedrooms() {
  showHouses(houses);
}
function displayBedroom1() {
  const display = houses.filter((house) => {
    return house.bedrooms === 1;
  });
  showHouses(display);
}
function displayBedroom2() {
  const display = houses.filter((house) => {
    return house.bedrooms === 2;
  });
  showHouses(display);
}
function displayBedroom3() {
  const display = houses.filter((house) => {
    return house.bedrooms === 3;
  });
  showHouses(display);
}
function displayBedroom4() {
  const display = houses.filter((house) => {
    return house.bedrooms === 4;
  });
  showHouses(display);
}
// Filter Garages
function allgarages() {
  showHouses(houses);
}

function displayGarage1() {
  const display = houses.filter((house) => {
    return house.garage === 1;
  });
  showHouses(display);
}
function displayGarage2() {
  const display = houses.filter((house) => {
    return house.garage === 2;
  });
  showHouses(display);
}
function displayGarage3() {
  const display = houses.filter((house) => {
    return house.garage === 3;
  });
  showHouses(display);
}
// function sortList() {
//   let list, i, switching, b, shouldSwitch;
//   list = document.getElementById("houses-listing");
//   switching = true;
//   while (switching) {
//     switching = false;
//     b = list.getElementsByTagName("div");
//     for (i = 0; i < b.length - 1; i++) {
//       shouldSwitch = false;
//       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// }

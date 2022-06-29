let houses = JSON.parse(localStorage.getItem("houses"))
  ? JSON.parse(localStorage.getItem("houses"))
  : [
      {
        id: 1,
        title: "Light and Modern Apartment",
        location:
          "Gg. Ceroring, Tibubiu, Kec. Kerambitan, Kabupaten Tabanan, Bali 82161, Indonesia",
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
        id: 2,
        title: "Design Apartment",
        location: "Binzhou, Shaanxi, Xianyang, Shaanxi, China",
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
        id: 3,
        title: "Studio",
        location: "Kampung Gubah, 85000 Segamat District, Johor, Malaysia",
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
        id: 4,
        title: "Open plan Studio",
        location: "Wugong County, Xianyang, Shaanxi, China",
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
        id: 5,
        title: "Apartment Nice View",
        location:
          "Saint Francis de Assisi Church, City of Naga, Cebu, Philippines",
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
        id: 6,
        title: "White and Gold styled Apartment",
        location:
          "Mandalaguna, Salopa, Tasikmalaya Regency, West Java, Indonesia",
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
        id: 7,
        title: "Retro Styled Apartment",
        location: "Sant Nagar, Saharsa, Bihar 852201, India",
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
        id: 8,
        title: "Spacious Apartment",
        location: "Changjiang District, Jingdezhen, Jiangxi, China",
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
        id: 9,
        title: "Open Planned Aesthetic Apartment ",
        location: "Al Busayrah, Syria",
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
        id: 10,
        title: " Modern Simplistic Apartment",
        location: "Manuel del Valle Sr., Quezon, Philippines",
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
function showTable(houses) {
  document.querySelector("#displayTable").innerHTML = "";
  houses.forEach((home, i) => {
    document.querySelector("#displayTable").innerHTML += `
    <tr>
    <td><input id="${home.id}"${home.id} value=${home.id} disabled/></td>
    <td><input id="Title${home.id}"${home.title}  value=${home.title} disabled/></td>
    <td><input id="Location${home.id}"${home.location}  value=${home.location} disabled/></td>
    <td><input id="Bedrooms${home.id}"${home.bedrooms}  value=${home.bedrooms} disabled/></td>
    <td><input id="Bathrooms${home.id}"${home.bathrooms}  value=${home.bathrooms} disabled/></td>
    <td><input id="Garage${home.id}"${home.garage}  value=${home.garage} disabled/></td>
    <td><input id="Area${home.id}"${home.area}  value=${home.area} disabled/></td>
    <td><input id="Type${home.id}"${home.type}  value=${home.type} disabled/></td>
    <td><input id="Img${home.id}" value=${home.img} disabled <img src=${home.img} id="img"/></td>
    <td><input id="Price${home.id}"${home.price}  value=${home.price} disabled/></td>
    <td><input id="Listing${home.id}"${home.listing}  value=${home.listing} disabled/></td>
    <td><i class="fa-solid fa-delete-left"  onclick="delItem(${home.id})"></i></td>
    <td><i class="fa-solid fa-pen-to-square" id="edit${home.id}" onclick="editItem(${home.id})"></i></td>
    <td><i class="fa-solid fa-floppy-disk" id="save${home.id}" onclick="saveItem(${home.id})"></i></td>
    </tr>
    `;
  });
  console.log(houses);
}

showTable(houses);

// ADD FUNCTION
function addItem() {
  let home = {
    id: houses.length + 1,
    title: document.querySelector("#Title").value,
    location: document.querySelector("#Location").value,
    bedrooms: document.querySelector("#Bedrooms").value,
    bathrooms: document.querySelector("#Bathrooms").value,
    garage: document.querySelector("#Garage").value,
    area: document.querySelector("#Area").value,
    type: document.querySelector("#Type").value,
    img: document.querySelector("#Img").value,
    price: document.querySelector("#Price").value,
    listing: document.querySelector("#Listing").value,
  };
  houses.push(home);
  localStorage.setItem("houses", JSON.stringify(houses));
  showTable(houses);
  console.log(houses);
}
// Edit Function
function editItem(id) {
  document.querySelector(`#Title${id}`).disabled = false;
  document.querySelector(`#Location${id}`).disabled = false;
  document.querySelector(`#Bedrooms${id}`).disabled = false;
  document.querySelector(`#Bathrooms${id}`).disabled = false;
  document.querySelector(`#Garage${id}`).disabled = false;
  document.querySelector(`#Area${id}`).disabled = false;
  document.querySelector(`#Type${id}`).disabled = false;
  document.querySelector(`#Img${id}`).disabled = false;
  document.querySelector(`#Price${id}`).disabled = false;
  document.querySelector(`#Listing${id}`).disabled = false;
}
function saveItem(id) {
  document.querySelector(`#Title${id}`).disabled = true;
  document.querySelector(`#Location${id}`).disabled = true;
  document.querySelector(`#Bedrooms${id}`).disabled = true;
  document.querySelector(`#Bathrooms${id}`).disabled = true;
  document.querySelector(`#Garage${id}`).disabled = true;
  document.querySelector(`#Area${id}`).disabled = true;
  document.querySelector(`#Type${id}`).disabled = true;
  document.querySelector(`#Img${id}`).disabled = true;
  document.querySelector(`#Price${id}`).disabled = true;
  document.querySelector(`#Listing${id}`).disabled = true;
  localStorage.setItem("houses", JSON.stringify(houses));
}

// Delete Function
function delItem(id) {
  houses = houses.filter((home) => {
    return home.id != id;
  });
  localStorage.setItem("houses", JSON.stringify(houses));
  showTable(houses);
}

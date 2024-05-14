const loadPhone = async (searchText = 'Samsung', isShowall) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);  
    displayPhones(phones);
}

const displayPhones = phones =>{

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';


// console.log(phones)
phones.forEach(phone =>{
    // console.log(phone)

    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-base-100 p-4 shadow-l m-4`
    phoneCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <h2 class="card-title">${phone.brand}</h2>
      
        <div class="card-actions justify-center">
        <button class="btn btn-primary">Show Details</button>
        </div>
    </div>
    </div>
    `
    phoneContainer.appendChild(phoneCard);
})
}

// handle search
const handleSearch = () =>{
    // console.log('ksk')
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    console.log('hjkjsdfjh')
    loadPhone(searchText)
}
// handle search

loadPhone();
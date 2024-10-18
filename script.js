// Services array for details of cards
const services = [
    {
        title: "Emergency Plumbing Services",
        description: "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.",
        image: "assets/EmergencyPlumbingServices.png"
    },
    {
        title: "Plumbing and Drains",
        description: "As the largest plumbing and drain service company, we make thousands of repairs every day.",
        image: "assets/PlumbingAndDrains.png"
    },
    {
        title: "Water Damage",
        description: "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
        image: "assets/WaterDamage.png"
    },
    {
        title: "Water Heaters",
        description: "Trust Roto-Rooter for repair and replacement of gas, electric, and tankless water heaters.",
        image: "assets/WaterHeaters.png"
    }
];

const serviceCardsContainer = document.getElementById('service-cards');

// Script for dynamic content loading in cards
services.forEach(service => {
    const cardHTML = `
    <div class="card bg-white text-gray-800 p-5 w-[16rem] shadow-md text-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
    <img src="${service.image}" alt="${service.title}" class="card-logo w-16 h-16 border-2 border-solid rounded-full relative bottom-12 mx-auto">
    <h4 class="text-lg mb-2">${service.title}</h4>
    <p class="text-sm mb-4">${service.description}</p>
    <a href="#" class="text-[#3A2E75] font-bold mt-2 cursor-pointer">EXPLORE THIS SERVICE ></a>
    </div>
    `;
    serviceCardsContainer.innerHTML += cardHTML;
});


// Script for card-icon rotation animation
document.querySelectorAll('.card').forEach(card => {
    const image = card.querySelector('.card-logo');
    card.addEventListener('mouseenter', () => {
        console.log("mouseenter")
        gsap.to(image, { rotation: 360, duration: 1 });
    });
    card.addEventListener('mouseleave', () => {
        console.log("mouseleave")
        gsap.to(image, { rotation: 0, duration: 1 });
    });
});
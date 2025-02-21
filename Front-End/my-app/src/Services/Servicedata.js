import boy from '../Assets/Add Restaurant/Deliverboy.jpg';
import Restaurantes from '../Assets/Add Restaurant/Restaurantes.jpg';
import Chef from '../Assets/Add Restaurant/Chef.jpg';



const Servicedata = [
    {
        id: 1,
        name: "Fast Deliver System",
        image: boy,
        description: "Our fast delivery system ensures that your food reaches you in the shortest time possible, hot and fresh.",
        button: "Book your Food",
        link: "/Menu"
    },
    {
        id: 2,
        name: "Restaurant Ambiance",
        image: Restaurantes,
        description: "Experience a cozy and welcoming atmosphere in our restaurant, designed to enhance your dining experience.",
        button: "Add your Restaurant",
        link: "/Restaurant"
    },
    {
        id: 3,
        name: "Expert Chefs",
        image: Chef,
        description: "Our team of skilled chefs prepares mouthwatering dishes with the finest ingredients to satisfy your cravings.",
        button: "Experienced chef",
        link: "/Restaurant"
    }
];

export default Servicedata;

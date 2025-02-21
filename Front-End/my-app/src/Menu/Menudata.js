import AlooGobiImage from '../Assets/Menu/Veg/Dic/Aloogobi.jpg';
import ChaapImage from '../Assets/Menu/Veg/Dic/Chaap.jpg';
import ChilliPaneerImage from '../Assets/Menu/Veg/Dic/Chillipaneer.jpg';
import CholeImage from '../Assets/Menu/Veg/Dic/Chole.jpg';
import DalMakhaniImage from '../Assets/Menu/Veg/Dic/Dalmakhani.jpg';
import JeeraRiceImage from '../Assets/Menu/Veg/Dic/Jeerarice.jpg';
import MatarPaneerImage from '../Assets/Menu/Veg/Dic/Matarpaneer.jpg';
import PaneerMasalaImage from '../Assets/Menu/Veg/Dic/Paneermasala.jpg';
import VegBiryaniImage from '../Assets/Menu/Veg/Dic/Vegbiryani.jpg';
import AmboliImage from '../Assets/Menu/Roti/Amboli.jpg';
import BhakriImage from '../Assets/Menu/Roti/Bhakri.jpg';
import ChapatiImage from '../Assets/Menu/Roti/Chapati.jpg';
import PurisImage from '../Assets/Menu/Roti/Puris.jpg';
import RumaliRotiImage from '../Assets/Menu/Roti/Rumaliroti.jpg';
import TandooriRotiImage from '../Assets/Menu/Roti/Tandooriroti.jpg';
import BiriyaniImage from '../Assets/Menu/Non-veg/Chicken dic/Biriyani.jpg';
import ButterChickenImage from '../Assets/Menu/Non-veg/Chicken dic/Butterchicken.jpg';
import ChickenKormaImage from '../Assets/Menu/Non-veg/Chicken dic/Chickenkorma.jpg';
import ChickenLollipopImage from '../Assets/Menu/Non-veg/Chicken dic/Chlollipop.jpg';
import ChickenShawarmaImage from '../Assets/Menu/Non-veg/Chicken dic/Chshawa.jpg';
import MuttonCurryImage from '../Assets/Menu/Non-veg/Mutton dic/Muttoncurry.jpg';
import MuttonKormaImage from '../Assets/Menu/Non-veg/Mutton dic/Muttonkorma.jpg';
import MuttonNihariImage from '../Assets/Menu/Non-veg/Mutton dic/Muttonnihari.jpg';
import MuttonSeekhKababImage from '../Assets/Menu/Non-veg/Mutton dic/Muttonseekhkabab.jpg';
import RoganJoshImage from '../Assets/Menu/Non-veg/Mutton dic/Roganjosh.jpg';
import FishCurryImage from '../Assets/Menu/Non-veg/Fish dic/Fishcurry.jpg';
import FishFingersImage from '../Assets/Menu/Non-veg/Fish dic/Fishfingers.jpg';
import FishFryImage from '../Assets/Menu/Non-veg/Fish dic/Fishfry.jpg';
import MalabarCurryImage from '../Assets/Menu/Non-veg/Fish dic/Malabarcurry.jpg';
import TandooriFishImage from '../Assets/Menu/Non-veg/Fish dic/Tandoorifish.jpg';
import BurgerImage from '../Assets/Menu/Fast Food/burger.jpg';
import MomosImage from '../Assets/Menu/Fast Food/Momos.jpg';
import FrenchFriesImage from '../Assets/Menu/Fast Food/Frenchfries.jpg';
import PizzaImage from '../Assets/Menu/Fast Food/Pizza.jpg';
import PastaImage from '../Assets/Menu/Fast Food/pasta.jpg';
import NoodlesImage from '../Assets/Menu/Fast Food/Noodles.jpg';
import SandwichesImage from '../Assets/Menu/Fast Food/Sandwiches.jpg';
import SamosaImage from '../Assets/Menu/Fast Food/Samosa.jpg';
import FalafelImage from '../Assets/Menu/Fast Food/Falafel.jpg';
import QuesadillasImage from '../Assets/Menu/Fast Food/quesadillas.jpg';
import GulabjamunImage from '../Assets/Menu/sweets/Gulabjamun.jpg';
import JalebiImage from '../Assets/Menu/sweets/Jalebi.jpg';
import KajuKatliImage from '../Assets/Menu/sweets/KajuKatli.jpg';
import BarfiImage from '../Assets/Menu/sweets/Barfi.jpg';
import GajarHalwaImage from '../Assets/Menu/sweets/GajarHalwa.jpg';
import MysorePakImage from '../Assets/Menu/sweets/MysorePak.jpg';
import ChamchamImage from '../Assets/Menu/sweets/Chamcham.jpg';
import PedaImage from '../Assets/Menu/sweets/Peda.jpg';
import RasgullaImage from '../Assets/Menu/sweets/Rasgulla.jpg';
import BlackCoffeeImage from '../Assets/Menu/Tea/Blackcoffee.jpg';
import BlackTeaImage from '../Assets/Menu/Tea/Blacktea.jpg';
import ChaiLatteImage from '../Assets/Menu/Tea/Chailatte.jpg';
import ColdBrewImage from '../Assets/Menu/Tea/Coldbrew.jpg';
import EspressoImage from '../Assets/Menu/Tea/Espresso.jpg';
import IcedCoffeeImage from '../Assets/Menu/Tea/Icedcoffee.jpg';
import MasalaChaiImage from '../Assets/Menu/Tea/Masalachai.jpg';
import MochaImage from '../Assets/Menu/Tea/Mocha.jpg';
import OolongTeaImage from '../Assets/Menu/Tea/Oolongtea.jpg';
import VanillaImage from '../Assets/Menu/ice cream/Vanilla.jpg';
import StrawberryImage from '../Assets/Menu/ice cream/Strawberry.jpg';
import ChocolateImage from '../Assets/Menu/ice cream/Chocolate.jpg';
import CinnamonImage from '../Assets/Menu/ice cream/cinnamonice.jpg';
import CookiesAndCreamImage from '../Assets/Menu/ice cream/Cookiescream.jpg';
import CaramelIceCreamImage from '../Assets/Menu/ice cream/Caramelicecream.jpg';
import PistachioImage from '../Assets/Menu/ice cream/Pistachio.jpg';
import MintChocolateChipImage from '../Assets/Menu/ice cream/Mintchocolatechip.jpg';

const Menudata = [
    // Vegetarian items
        {
            id: 1,
            name: "Aloo Gobi",
            price: 100,
            image: AlooGobiImage,
            description: "A traditional dish made with spiced potatoes and cauliflower, perfect for a comforting meal.",
            category: "Vegetarian"
        },
        {
            id: 2,
            name: "Chaap",
            price: 100,
            image: ChaapImage,
            description: "Deliciously marinated and grilled vegetarian chaap made from soy protein.",
            category: "Vegetarian"
        },
        {
            id: 3,
            name: "Chilli Paneer",
            price: 150,
            image: ChilliPaneerImage,
            description: "Crispy paneer tossed in a spicy and tangy sauce, perfect as an appetizer or main course.",
            category: "Vegetarian"
        },
        {
            id: 4,
            name: "Chole",
            price: 70,
            image: CholeImage,
            description: "A flavorful chickpea curry, cooked with a blend of aromatic spices.",
            category: "Vegetarian"
        },
        {
            id: 5,
            name: "Daal Makhani",
            price: 100,
            image: DalMakhaniImage,
            description: "A rich, creamy lentil dish made with black lentils and kidney beans, slow-cooked to perfection.",
            category: "Vegetarian"
        },
        {
            id: 6,
            name: "Jeera Rice",
            price: 60,
            image: JeeraRiceImage,
            description: "Steamed rice flavored with cumin seeds, a perfect accompaniment to curries.",
            category: "Vegetarian"
        },
        {
            id: 7,
            name: "Matar Paneer",
            price: 150,
            image: MatarPaneerImage,
            description: "A classic curry made with peas and cottage cheese in a rich, spicy tomato gravy.",
            category: "Vegetarian"
        },
        {
            id: 8,
            name: "Paneer Masala",
            price: 150,
            image: PaneerMasalaImage,
            description: "Soft cubes of paneer cooked in a spicy and flavorful gravy.",
            category: "Vegetarian"
        },
        {
            id: 9,
            name: "Veg Biryani",
            price: 100,
            image: VegBiryaniImage,
            description: "A fragrant and spiced rice dish made with mixed vegetables, served with raita.",
            category: "Vegetarian"
        },
        {
            id: 10,
            name: "Amboli",
            price: 10,
            image: AmboliImage,
            description: "A traditional Maharashtrian flatbread, soft and slightly sour, often served with chutney.",
            category: "Bread"
        },
        {
            id: 11,
            name: "Bhakri",
            price: 10,
            image: BhakriImage,
            description: "A rustic, whole wheat flatbread, typically served with curries or chutney.",
            category: "Bread"
        },
        {
            id: 12,
            name: "Chapati",
            price: 10,
            image: ChapatiImage,
            description: "Soft, thin whole wheat flatbread, perfect to scoop up any curry.",
            category: "Bread"
        },
        {
            id: 13,
            name: "Puris",
            price: 5,
            image: PurisImage,
            description: "Fried wheat bread that puffs up when cooked, served with a variety of curries.",
            category: "Bread"
        },
        {
            id: 14,
            name: "Rumali Roti",
            price: 10,
            image: RumaliRotiImage,
            description: "Thin, soft, and light flatbread, folded like a handkerchief, typically served with rich curries.",
            category: "Bread"
        },
        {
            id: 15,
            name: "Tandoor Roti",
            price: 10,
            image: TandooriRotiImage,
            description: "Fluffy, soft bread cooked in a tandoor (clay oven), offering a smoky flavor.",
            category: "Bread"
        },
        // Non-Veg items
        {
            id: 16,
            name: "Biriyani",
            price: 150,
            image: BiriyaniImage,
            description: "A flavorful rice dish with marinated meat, infused with aromatic spices and herbs.",
            category: "Non-Vegetarian"
        },
        {
            id: 17,
            name: "Butter Chicken",
            price: 200,
            image: ButterChickenImage,
            description: "A rich and creamy curry made with tender chicken in a buttery tomato gravy.",
            category: "Non-Vegetarian"
        },
        {
            id: 18,
            name: "Chicken Korma",
            price: 200,
            image: ChickenKormaImage,
            description: "A mild, creamy curry made with chicken, yogurt, and ground nuts for a rich texture.",
            category: "Non-Vegetarian"
        },
        {
            id: 19,
            name: "Chicken Lollipop",
            price: 150,
            image: ChickenLollipopImage,
            description: "Crispy, juicy chicken wings shaped like lollipops, coated in a spicy marinade.",
            category: "Non-Vegetarian"
        },
        {
            id: 20,
            name: "Chicken Shawarma",
            price: 200,
            image: ChickenShawarmaImage,
            description: "Tender chicken slices marinated and cooked on a vertical grill, wrapped in flatbread.",
            category: "Non-Vegetarian"
        },
        {
            id: 21,
            name: "Mutton Curry",
            price: 600,
            image: MuttonCurryImage,
            description: "Slow-cooked mutton in a rich, spicy curry, served with rice or bread.",
            category: "Non-Vegetarian"
        },
        {
            id: 22,
            name: "Mutton Korma",
            price: 500,
            image: MuttonKormaImage,
            description: "A royal dish of tender mutton cooked in a creamy, mildly spiced gravy.",
            category: "Non-Vegetarian"
        },
        {
            id: 23,
            name: "Mutton Nihari",
            price: 600,
            image: MuttonNihariImage,
            description: "A slow-cooked stew of mutton in a flavorful and spicy gravy.",
            category: "Non-Vegetarian"
        },
        {
            id: 24,
            name: "Mutton Seekh Kabab",
            price: 200,
            image: MuttonSeekhKababImage,
            description: "Minced mutton skewers, flavored with spices and grilled to perfection.",
            category: "Non-Vegetarian"
        },
        {
            id: 25,
            name: "Rogan Josh",
            price: 500,
            image: RoganJoshImage,
            description: "A traditional Kashmiri dish of tender mutton cooked in a rich, spiced gravy.",
            category: "Non-Vegetarian"
        },
        {
            id: 26,
            name: "Fish Curry",
            price: 300,
            image: FishCurryImage,
            description: "A tangy, spicy curry made with fresh fish and a variety of aromatic spices.",
            category: "Non-Vegetarian"
        },
        {
            id: 27,
            name: "Fish Fingers",
            price: 300,
            image: FishFingersImage,
            description: "Golden, crispy fish fillets, perfect for a snack or appetizer.",
            category: "Non-Vegetarian"
        },
        {
            id: 28,
            name: "Fish Fry",
            price: 400,
            image: FishFryImage,
            description: "Spicy, marinated fish fried to crispy perfection.",
            category: "Non-Vegetarian"
        },
        {
            id: 29,
            name: "Malabar Curry",
            price: 400,
            image: MalabarCurryImage,
            description: "A coconut-based curry from Kerala, made with fish or meat and aromatic spices.",
            category: "Non-Vegetarian"
        },
        {
            id: 30,
            name: "Tandoori Fish",
            price: 400,
            image: TandooriFishImage,
            description: "Fish marinated in a blend of yogurt and spices, then grilled in a tandoor.",
            category: "Non-Vegetarian"
        },
    // Snacks & Fast Food items
    {
        id: 31,
        name: "Burger",
        price: 90,
        image: BurgerImage,
        description: "A juicy burger made with a perfectly grilled patty, fresh vegetables, and soft buns.",
        category: "Snacks"
    },
    {
        id: 32,
        name: "Momos",
        price: 80,
        image: MomosImage,
        description: "Steamed dumplings filled with your choice of vegetables or meat, served with spicy chutney.",
        category: "Snacks"
    },
    {
        id: 33,
        name: "French Fries",
        price: 60,
        image: FrenchFriesImage,
        description: "Crispy, golden fries, the perfect accompaniment to any meal or enjoyed on their own.",
        category: "Snacks"
    },
    {
        id: 34,
        name: "Pizza",
        price: 250,
        image: PizzaImage,
        description: "A cheesy, flavorful pizza with a crispy crust, topped with your favorite toppings.",
        category: "Snacks"
    },
    {
        id: 35,
        name: "Pasta",
        price: 180,
        image: PastaImage,
        description: "Pasta served in a creamy, tangy sauce with your choice of vegetables or meat.",
        category: "Snacks"
    },
    {
        id: 36,
        name: "Noodles",
        price: 120,
        image: NoodlesImage,
        description: "Stir-fried noodles with vegetables and a savory sauce, packed with flavor.",
        category: "Snacks"
    },
    {
        id: 37,
        name: "Sandwiches",
        price: 70,
        image: SandwichesImage,
        description: "Grilled sandwiches filled with fresh vegetables, cheese, or your choice of fillings.",
        category: "Snacks"
    },
    {
        id: 38,
        name: "Samosa",
        price: 40,
        image: SamosaImage,
        description: "Crispy pastry pockets filled with spiced potatoes, peas, and other vegetables.",
        category: "Snacks"
    },
    {
        id: 39,
        name: "Falafel",
        price: 70,
        image: FalafelImage,
        description: "Deep-fried balls made from ground chickpeas, herbs, and spices, served with tahini sauce.",
        category: "Snacks"
    },
    {
        id: 40,
        name: "Quesadillas",
        price: 140,
        image: QuesadillasImage,
        description: "Flour tortillas filled with melted cheese, vegetables, or meat, then grilled until crispy.",
        category: "Snacks"
    },
    // Desserts
    {
        id: 41,
        name: "Gulabjamun",
        price: 50,
        image: GulabjamunImage,
        description: "Soft, round dumplings made of milk solids, soaked in sweet syrup.",
        category: "Dessert"
    },
    {
        id: 42,
        name: "Jalebi",
        price: 60,
        image: JalebiImage,
        description: "Deep-fried sweet spirals soaked in saffron syrup, crispy on the outside and soft on the inside.",
        category: "Dessert"
    },
    {
        id: 43,
        name: "Kaju Katli",
        price: 150,
        image: KajuKatliImage,
        description: "Sweet cashew nut fudge, delicately flavored with cardamom and topped with edible silver.",
        category: "Dessert"
    },
    {
        id: 44,
        name: "Barfi",
        price: 100,
        image: BarfiImage,
        description: "Rich, milk-based sweet flavored with cardamom, shaped into squares.",
        category: "Dessert"
    },
    {
        id: 45,
        name: "Gajar ka Halwa",
        price: 80,
        image: GajarHalwaImage,
        description: "A traditional dessert made from grated carrots, milk, sugar, and ghee.",
        category: "Dessert"
    },
    {
        id: 46,
        name: "Mysore Pak",
        price: 70,
        image: MysorePakImage,
        description: "A rich, buttery sweet made with chickpea flour, ghee, and sugar.",
        category: "Dessert"
    },
    {
        id: 47,
        name: "Chamcham",
        price: 90,
        image: ChamchamImage,
        description: "Syrup-soaked, sweet, chewy Indian dessert made with milk and sugar.",
        category: "Dessert"
    },
    {
        id: 48,
        name: "Peda",
        price: 60,
        image: PedaImage,
        description: "Sweet, dense milk-based dessert, flavored with cardamom and garnished with nuts.",
        category: "Dessert"
    },
    {
        id: 49,
        name: "Rasgulla",
        price: 70,
        image: RasgullaImage,
        description: "Soft, spongy balls made from cottage cheese, soaked in a sweet syrup.",
        category: "Dessert"
    },

    // Beverages
    {
        id: 50,
        name: "Black Coffee",
        price: 60,
        image: BlackCoffeeImage,
        description: "A strong and bold cup of black coffee, perfect for coffee lovers.",
        category: "Beverage"
    },
    {
        id: 51,
        name: "Black Tea",
        price: 40,
        image: BlackTeaImage,
        description: "A robust and flavorful cup of traditional black tea.",
        category: "Beverage"
    },
    {
        id: 52,
        name: "Chai Latte",
        price: 90,
        image: ChaiLatteImage,
        description: "A creamy spiced tea latte, offering a perfect balance of warmth and comfort.",
        category: "Beverage"
    },
    {
        id: 53,
        name: "Cold Brew",
        price: 110,
        image: ColdBrewImage,
        description: "Smooth and refreshing cold-brewed coffee, perfect for a chilled caffeine fix.",
        category: "Beverage"
    },
    {
        id: 54,
        name: "Espresso",
        price: 80,
        image: EspressoImage,
        description: "A strong, concentrated shot of coffee that delivers pure coffee flavor.",
        category: "Beverage"
    },
    {
        id: 55,
        name: "Iced Coffee",
        price: 90,
        image: IcedCoffeeImage,
        description: "Cold brewed coffee served over ice, offering a cool pick-me-up.",
        category: "Beverage"
    },
    {
        id: 56,
        name: "Masala Chai",
        price: 50,
        image: MasalaChaiImage,
        description: "A spiced tea made with ginger, cardamom, and other aromatic spices.",
        category: "Beverage"
    },
    {
        id: 57,
        name: "Mocha",
        price: 100,
        image: MochaImage,
        description: "A rich blend of espresso and chocolate, topped with whipped cream.",
        category: "Beverage"
    },
    {
        id: 58,
        name: "Oolong Tea",
        price: 60,
        image: OolongTeaImage,
        description: "A fragrant and smooth tea, offering a blend of floral and fruity flavors.",
        category: "Beverage"
    },
    // Ice Creams
    {
        id: 59,
        name: "Vanilla",
        price: 100,
        image: VanillaImage,
        description: "A classic ice cream made with real vanilla beans for a smooth, creamy texture.",
        category: "Ice Cream"
    },
    {
        id: 60,
        name: "Strawberry",
        price: 100,
        image: StrawberryImage,
        description: "A refreshing ice cream made with real strawberries for a fruity, tangy taste.",
        category: "Ice Cream"
    },
    {
        id: 61,
        name: "Chocolate",
        price: 200,
        image: ChocolateImage,
        description: "Rich and creamy chocolate ice cream, made with the finest cocoa.",
        category: "Ice Cream"
    },
    {
        id: 62,
        name: "Cinnamon",
        price: 100,
        image: CinnamonImage,
        description: "A spiced ice cream with the warm, comforting flavor of cinnamon.",
        category: "Ice Cream"
    },
    {
        id: 63,
        name: "Cookies and Cream",
        price: 60,
        image: CookiesAndCreamImage,
        description: "Creamy vanilla ice cream mixed with crunchy cookie crumbs for a delightful treat.",
        category: "Ice Cream"
    },
    {
        id: 64,
        name: "Caramel Ice Cream",
        price: 70,
        image: CaramelIceCreamImage,
        description: "Smooth and indulgent caramel ice cream, with a rich, buttery flavor.",
        category: "Ice Cream"
    },
    {
        id: 65,
        name: "Pistachio",
        price: 80,
        image: PistachioImage,
        description: "A nutty, creamy ice cream made with real pistachios for a rich flavor.",
        category: "Ice Cream"
    },
    {
        id: 66,
        name: "Mint Chocolate Chip",
        price: 85,
        image: MintChocolateChipImage,
        description: "A refreshing mint-flavored ice cream with crunchy chocolate chips.",
        category: "Ice Cream"
    }
];

export default Menudata;

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  bixoom,
  cosmetic,
  cylinder,
  tool,
  turrent,
  vertical,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: turrent,
    name: "TURRET",
    price: "$200.20",
  },
  {
    imgURL: vertical,
    name: "VERTICAL CLIMBER",
    price: "$210.20",
  },
  {
    imgURL: cylinder,
    name: "HOT WATER CYLINDER",
    price: "$220.20",
  },
  {
    imgURL: cosmetic,
    name: "R2D2",
    price: "$230.20",
  },
  {
    imgURL: tool,
    name: "COSMETIC TOOL",
    price: "$230.20",
  },
  {
    imgURL: bixoom,
    name: "BIXOOM",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "RESEARCH",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "PRODUCT DESIGN",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "PROTOTYPING",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
  {
    imgURL: support,
    label: "REVERSE ENGINEERING & SUPPORT",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
  {
    imgURL: support,
    label: "MANUFACTURING SUPPORT",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  
 
  {
    imgURL: customer1,
    customerName: "Abhishek, Smartdrip",
    rating: 4.5,
    feedback:
      "Beliveinn team is very talented and was a great help in building the enclosures for our automated plant watering systems - Smartdrip controller. Customer design is never one and done, and I am glad that team have put in the hard work over multiple rounds of discussions and iteration to transform our vision and requirements into reality. We will most certainly be repeat customers in the future.",
  },
  {
    imgURL: customer2,
    customerName: "Mehak Abbas Zaidi, NUST Islamabad Pakistan",
    rating: 4.5,
    feedback:
      "I am pleased to share that during my Bachelors Beliveinn helped me in my project on Design and Manufacturing of portable lifesaving water filters. While I was stuck with my limited software abilities in the design phase of my project they guided me and helped me in developing 2 prototypes. Their dimensions was so accurate that resulted in an unblemished 3D printing.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

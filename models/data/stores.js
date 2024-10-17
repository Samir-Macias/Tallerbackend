import "dotenv/config.js"
import '../../config/database.js'
import Store from '../Stores.js'

let stores = [
    {name: "Tech World", address: "123 Innovation Drive, Silicon Valley", phone: 5551237890},
    {name: "Fashion Hub", address: "456 Style Street, New York City", phone: 5552348901},
    {name: "Grocery Mart", address: "789 Fresh Lane, Seattle", phone: 5553459012},
    {name: "Home Essentials", address: "101 Comfort Blvd, Chicago", phone: 5554560123},
    {name: "Book Haven", address: "202 Knowledge Avenue, Boston", phone: 5555671234},
    {name: "Sports Arena", address: "303 Victory Road, Dallas", phone: 5556782345},
    {name: "Pet Paradise", address: "404 Furry Friend Street, Miami", phone: 5557893456},
    {name: "Gadget World", address: "505 Tech Park, San Francisco", phone: 5558904567}
];

Store.insertMany(stores)
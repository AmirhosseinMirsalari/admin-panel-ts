import avt from "../assets/images/avt.jpg"
import iphone from "../assets/images/iphone.png"
import airpod from "../assets/images/airpod.png"
import perfume from "../assets/images/perfume.png"

const data = {
  topCustomers: {
    head: ["customer", "totalOrders", "totalSpending"],
    body: [
      {
        username: "john doe",
        order: 490,
        price: "$15,870",
      },
      {
        username: "frank iva",
        order: 250,
        price: "$12,251",
      },
      {
        username: "anthony baker",
        order: 120,
        price: "$10,840",
      },
      {
        username: "frank iva",
        order: 110,
        price: "$9,251",
      },
      {
        username: "anthony baker",
        order: 80,
        price: "$8,840",
      },
    ],
  },
  latestOrders: {
    header: ["orderID", "customer", "totalPrice", "date", "status"],
    body: [
      {
        orderId: "#OD1711",
        customer: "john doe",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      },
      {
        orderId: "#OD1767",
        customer: "Amirhossein",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      }, {
        orderId: "#OD1311",
        customer: "Reza asadi",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "rejected",
      }, {
        orderId: "#OD1651",
        customer: "Hoda Rezaei",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      }, {
        orderId: "#OD1781",
        customer: "Kazem karami",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "pending",
      }, {
        orderId: "#OC3711",
        customer: "Negin salari",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "rejected",
      }, {
        orderId: "#OD1651",
        customer: "Hamid Hamedi",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      }, {
        orderId: "#OD1333",
        customer: "Kiarash saadi",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "pending",
      }, {
        orderId: "#OD4851",
        customer: "Sahar soulati",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "rejected",
      }, {
        orderId: "#OD1873",
        customer: "Maryam molavi",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      }, {
        orderId: "#OD1551",
        customer: "Meysam rohani",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "pending",
      }, {
        orderId: "#OD3871",
        customer: "Parisa Savari",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "rejected",
      }, {
        orderId: "#OD1111",
        customer: "Ali mohammadi",
        totalPrice: "$900",
        date: "17 Jun 2022",
        status: "approved",
      },
      {
        orderId: "#OD1712",
        customer: "frank iva",
        totalPrice: "$400",
        date: "1 Jun 2022",
        status: "pending",
      },
      {
        orderId: "#OD1713",
        customer: "anthony baker",
        totalPrice: "$200",
        date: "27 Jun 2021",
        status: "approved",
      },
      {
        orderId: "#OD1712",
        customer: "frank iva",
        totalPrice: "$400",
        date: "1 Jun 2022",
        status: "rejected",
      },
      {
        orderId: "#OD1713",
        customer: "anthony baker",
        totalPrice: "$200",
        date: "27 Jun 2022",
        status: "approved",
      },
    ],
  },
  customersHeader: [
    "ID",
    "userName",
    "email",
    "phoneNumber",
    "totalOrders",
    "totalSpending",
    "location",
    "actions",
  ],
  customers: [
    {
      ID: 0,
      avatar: `${avt}`,
      userName: "Amirhossein Mirsalari",
      email: "amir.tk7@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 804,
      totalSpend: "$120.00",
      location: "UK",
    },
    {
      ID: 1,
      avatar:
        "https://i.pravatar.cc/60?img=69",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 230,
      totalSpend: "$120.00",
      location: "UK",
    },
    {
      ID: 2,
      avatar: "https://i.pravatar.cc/60?img=68",
      userName: "Kyle Simpson",
      email: "Kyle_simpson@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 120,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 3,
      avatar:
        "https://i.pravatar.cc/60?img=61",
      userName: "	Maximilian Doe",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 15,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 4,
      avatar: "https://i.pravatar.cc/60?img=59",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 270,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 5,
      avatar:
        "https://i.pravatar.cc/60?img=22",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 310,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 6,
      avatar: "https://i.pravatar.cc/60?img=42",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 804,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 7,
      avatar: "https://i.pravatar.cc/60?img=44",
      userName: "Andrei Neagoie",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 803,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 8,
      avatar: "https://i.pravatar.cc/60?img=11",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 110,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 9,
      avatar: "https://i.pravatar.cc/60?img=51",
      userName: "John Smith",
      email: "john_smith@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 804,
      totalSpend: "$120.00",
      location: "USA",
    },
    {
      ID: 10,
      avatar: "https://i.pravatar.cc/60?img=21",
      userName: "Jason Bourne",
      email: "test@gmail.com",
      phoneNumber: "+98 918 123 45 67",
      totalOrders: 460,
      totalSpend: "$260.00",
      location: "UK",
    },
  ],
  productsHeader: [
    "ID",
    "product",
    "inventory",
    "price",
    "category",
    "actions",
  ],
  products: [
    {
      ID: 0,
      pic: `${airpod}`,
      product: "Apple AirPods",
      inventory: 30,
      price: "$200.00",
      category: "digital",
    },
    {
      ID: 1,
      pic: `${iphone}`,
      product: "NUBWO G06",
      inventory: 28,
      price: "$120.00",
      category: "digital",
    },
    {
      ID: 2,
      pic: `${perfume}`,
      product: "Hooded Sweatshirt",
      inventory: 10,
      price: "$10.00",
      category: "clothing",
    },
    {
      ID: 3,
      pic: `${airpod}`,
      product: "Keyboard",
      inventory: 50,
      price: "$50.00",
      category: "digital",
    },
    {
      ID: 4,
      pic: `${perfume}`,
      product: "T-Shirt",
      inventory: 20,
      price: "$75.00",
      category: "clothing",
    },
    {
      ID: 5,
      pic: `${iphone}`,
      product: "LED Monitor",
      inventory: 31,
      price: "$510.00",
      category: "digital",
    },
    {
      ID: 6,
      pic: `${airpod}`,
      product: "Socks",
      inventory: 5,
      price: "$10.00",
      category: "clothing",
    },
    {
      ID: 7,
      pic: `${perfume}`,
      product: "Mouse",
      inventory: 3,
      price: "$16.00",
      category: "digital",
    },
    {
      ID: 8,
      pic: `${iphone}`,
      product: "Mielle",
      inventory: 36,
      price: "$170.00",
      category: "beauty",
    },
    {
      ID: 9,
      pic: `${airpod}`,
      product: "hat cap",
      inventory: 17,
      price: "$25.00",
      category: "clothing",
    },
    {
      ID: 10,
      pic: `${perfume}`,
      product: "CeraVe",
      inventory: 7,
      price: "$220.00",
      category: "beauty",
    },
    {
      ID: 11,
      pic: `${iphone}`,
      product: "Neutrogena",
      inventory: 30,
      price: "$205.00",
      category: "beauty",
    },
  ],
  coupons: {
    head: ["discount", "percentDiscount", "expireDate", "createdDate", "status", "actions"],
    body: [
      {
        discount: "tab20",
        percent: "20",
        expireDate: "exd1",
        createdDate: "crd1",
        status: "inactive",
      },

      {
        discount: "code10",
        percent: "10",
        expireDate: "exd2",
        createdDate: "crd2",
        status: "inactive",
      },
    ],
  },
};

export default data;

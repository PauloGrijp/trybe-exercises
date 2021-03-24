const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let delPerson = order.order.delivery.deliveryPerson;
  let client = order.name;
  let phone = order.phoneNumber;
  let fullAdrres = order.address;

  return `Olá ${delPerson}, entrega para: ${client}, Telefone: ${phone}, ${fullAdrres.street}, Nº${fullAdrres.number}, AP: ${fullAdrres.apartment}.`
}

console.log(customerInfo(order))


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}


orderModifier(order);
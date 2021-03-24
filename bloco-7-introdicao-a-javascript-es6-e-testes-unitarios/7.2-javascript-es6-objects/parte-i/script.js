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

  const delPerson = order.order.delivery.deliveryPerson;
  const client = order.name;
  const phone = order.phoneNumber;
  const fullAdrres = order.address;

  return `Olá ${delPerson}, entrega para: ${client}, Telefone: ${phone}, ${fullAdrres.street}, Nº${fullAdrres.number}, AP: ${fullAdrres.apartment}.`
}

customerInfo(order)


const orderModifier = (order) => {
  const newClient = order.name = 'Luiz Silva';
  const pizza1 = order.order.pizza = 'Muzzarela'
  const pizza2 = order.order.pizza = 'Calabresa'
  const drink = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';  


  return console.log(`Olá ${newClient}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$ ${newTotal},00.`);
}


orderModifier(order);
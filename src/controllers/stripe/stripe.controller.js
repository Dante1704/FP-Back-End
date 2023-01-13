const { Stripe } = require("stripe");

// Esto es TERRIBLE PRACTICA, cambiar a una variable de entorno

const stripe = new Stripe(process.env.STRIPE_SECRET);

checkout = async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Esta es una descripcion del producto comprado o del pago",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    return res.status(200).send("Pago realizado con exito");
  } catch (error) {
    console.log({ "error.message": error });
    return res.status(404).send({ message: error });
  }
};

module.exports = checkout;

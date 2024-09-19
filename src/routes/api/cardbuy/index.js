import express from "express";

const routercard = express.Router();


routercard.get("/", (req, res) => {
    res.send("hola")

})

routercard.post('/cart', async (req, res) => {
    const { productId, quantity } = req.body;
    // Lógica para agregar el producto al carrito
    res.status(201).send({
      message: 'Producto agregado al carrito',
      cart: {
        items: [{ productId, quantity }]
      }
    });
  });




export default routercard
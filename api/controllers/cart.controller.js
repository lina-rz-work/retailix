import Cart from "../models/cart.model.js";

export const migrateCart = async (req, res) => {
  const userId = req.user.id;
  const items = req.body;
  
  try {
    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({ userId, items });
    } else {
      items.forEach(item => {
        const existingItem = cart.items.find(i => i.id === item.id && i.size === item.size);
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          cart.items = [ item, ...cart.items ];
        }
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error migrating cart', error });
  }
};


export const getCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.id');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error });
  }
};


export const increaseItemQuantity = async (req, res) => {
  const userId = req.user.id;
  const { id, size } = req.body;

  if (!id || !size) {
    return res.status(400).json({ message: 'It is necessary to specify product id and size' });
  }
  if (!userId) {
    return res.status(401).json({ message: 'User ID not provided' });
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const item = cart.items.find(item => item.id === id && item.size === size);
      if (item) {
        item.quantity++;
      } else {
        cart.items.push({ id, size, quantity: 1 });
      }

      cart = await cart.save();
      const addedProduct = cart.items.find(item => item.id === id && item.size === size);
      res.status(200).json({ message: 'Product added to cart', addedProduct });
    } else {
      const newCart = new Cart({
        userId,
        items: [{ id, size, quantity: 1 }]
      });

      cart = await newCart.save();
      res.status(200).json({ message: 'Product added to cart', addedProduct: cart.items[0] });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart' });
  }
};



export const decreaseItemQuantity = async (req, res) => {
  const userId = req.user.id;
  const { id, size } = req.body;

  if (!userId) {
    return res.status(401).json({ message: 'User ID not provided' });
  }

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for user' });
    }

    const item = cart.items.find(item => item.id === id && item.size === size);

    if (item) {
      if (item.quantity === 1) {
        cart.items = cart.items.filter(item => !(item.id === id && item.size === size));
      } else {
        item.quantity--;
      }

      await cart.save();
      res.status(200).json({ message: 'Product quantity decreased in cart', decreasedProduct: item });
    } else {
      return res.status(404).json({ message: 'Product not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error decreasing product quantity in cart' });
  }
};




export const removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { id, size } = req.body;

  if (!userId || !id) {
    return res.status(400).json({ error: 'You must specify user id and product id' });
  }

  try {
    const cart = await Cart.findOne({ userId });

    if (cart) {
      const item = cart.items.find(item => item.id === id && item.size === size);
      const itemIndex = cart.items.findIndex(item => item.id === id && item.size === size);
      
      if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
        await cart.save();
        res.status(200).json({ message: 'Product removed from cart', removedProduct: item });
      } else {
        res.status(404).json({ error: 'Product not found in cart' });
      }
    } else {
      res.status(404).json({ error: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error when removing product from cart' });
  }
};






export const clearCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = [];
      await cart.save();
      res.status(200).json({ message: 'Cart cleared successfully' });
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error });
  }
};
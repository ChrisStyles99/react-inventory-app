const itemsController = {};
const Item = require('../models/Item');

itemsController.getItems = async(req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json(error);
  }
}

itemsController.getItem = async(req, res) => {
  const {id} = req.params;
  try {
    const singleItem = await Item.findById(id);
    return res.status(200).json(singleItem);
  } catch (error) {
    return res.status(500).json(error);
  }
}

itemsController.newItem = async(req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    image: req.body.image,
    category: req.body.category
  });

  try {
    const item = await newItem.save();
    return res.status(201).json({msg: 'Added item', item});
  } catch (error) {
    return res.status(500).json(error);
  }
};

itemsController.updateItem = async(req, res) => {
  const {id} = req.params;

  const data = {
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    image: req.body.image,
    category: req.body.category
  }

  try {
    const updItem = await Item.findByIdAndUpdate(id, {$set: data}, {new: true});
    return res.status(201).json({msg: 'Updated item', updItem});
  } catch (error) {
    return res.status(500).json(error);
  }
}

itemsController.deleteItem = async(req, res) => {
  const {id} = req.params;

  try {
    await Item.findByIdAndDelete(id);
    return res.status(200).json({msg: 'Item deleted successfully'});
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = itemsController;
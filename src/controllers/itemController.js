const Item = require('../models/Item');

// Get all items
exports.getAllItems = (req, res) => {
  try {
    const items = Item.getAll();
    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get single item
exports.getItemById = (req, res) => {
  try {
    const item = Item.getById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new item
exports.createItem = (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        error: 'Name is required'
      });
    }

    const newItem = Item.create({ name, description });
    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update item
exports.updateItem = (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedItem = Item.update(req.params.id, { name, description });
    
    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    res.json({
      success: true,
      data: updatedItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete item
exports.deleteItem = (req, res) => {
  try {
    const deleted = Item.delete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    res.json({
      success: true,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

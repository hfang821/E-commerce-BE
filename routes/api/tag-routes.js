const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        //It's doing two JOIN statements here by joining
        //1. Tag with ProductTag referenced to tag_id
        //2. ProductTag with Product referenced to product.id
        //Through productTag because it is the middleman that both has tag_id and product_id.
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: { id: req.params.id },
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        //Helped needed here
        through: ProductTag,
      },
    ],
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "No tag found with this id" });
      }
      res.json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "No tag found with this id" });
      }
      res.json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "No tag found with this id" });
      }
      res.json(tag);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

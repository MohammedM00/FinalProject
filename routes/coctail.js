const express = require("express");
const Coctail = require("../models/Coctail");
const router = express.Router();
// Route 1 : Fetch all coctails of user using : GET "/api/coctail/fetchallcoctails"
router.get("/fetchallcocktails", async (req, res) => {
  try {
    const coctail_items = await Coctail.find();
    res.json(coctail_items);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Route 2 : Fetch coctailitems category wise using : GET "/api/coctail/fetchallcoctails/category/category"
router.get(`/fetchallcocktails/category/:category`, async (req, res) => {
  try {
    const coctail_items = await Coctail.find();
    const user_category = req.params.category
    // console.log(user_category)
    const categorized_coctail = coctail_items.filter(function(element){
        return element.category === user_category
    })
    res.json(categorized_coctail)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Route 3 : Fetch recipe of specific coctail using : GET "/api/coctail/fetchallcoctails/recipe/:id".Login Required
router.get("/fetchallcocktails/recipe/:id", async (req, res) => {
  try {
    const coctail_id = req.params.id
    let coctail_details =  await Coctail.findById(req.params.id)
    if(!coctail_details){
        res.status(404).send("Recipe Not Found")
    }
    else{
    res.json(coctail_details)
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

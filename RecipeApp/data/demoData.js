import Category from "../models/Category";
import Meal from "../models/Meal";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f5428d"),
  new Category("c3", "Hamburgers", "#f5428d"),
  new Category("c4", "German", "#f5428d"),
  new Category("c5", "Light & Lovely", "#f5428d"),
  new Category("c6", "Exotic", "#f5428d"),
  new Category("c7", "Breakfast", "#f5428d"),
  new Category("c8", "Asian", "#f5428d"),
  new Category("c9", "French", "#f5428d"),
  new Category("c10", "Summer", "#f5428d"),
];

export const MEALS = [
  new Meal(
    "1",
    ["c1", "c2", "c3"],
    "Egg",
    true,
    "high",
    "https://natashaskitchen.com/wp-content/uploads/2017/04/Easter-Egg-Chicks-5-500x500.jpg",
    30,
    ["water", "olie", "fire"],
    ["Fire", "Put Eggs", "Close Fire"],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "2",
    ["c2", "c4", "c5", "c9"],
    "Egg",
    true,
    "high",
    "https://natashaskitchen.com/wp-content/uploads/2017/04/Easter-Egg-Chicks-5-500x500.jpg",
    30,
    ["water", "olie", "fire"],
    ["Fire", "Put Eggs", "Close Fire"],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "3",
    ["c1", "c2", "c4"],
    "Egg",
    true,
    "high",
    "https://natashaskitchen.com/wp-content/uploads/2017/04/Easter-Egg-Chicks-5-500x500.jpg",
    30,
    ["water", "olie", "fire"],
    ["Fire", "Put Eggs", "Close Fire"],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "5",
    ["c1"],
    "Egg",
    true,
    "high",
    "https://natashaskitchen.com/wp-content/uploads/2017/04/Easter-Egg-Chicks-5-500x500.jpg",
    30,
    ["water", "olie", "fire"],
    ["Fire", "Put Eggs", "Close Fire"],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "6",
    ["c1", "c5", "c8", "c9", "c10"],
    "Egg",
    true,
    "high",
    "https://natashaskitchen.com/wp-content/uploads/2017/04/Easter-Egg-Chicks-5-500x500.jpg",
    30,
    ["water", "olie", "fire"],
    ["Fire", "Put Eggs", "Close Fire"],
    true,
    false,
    true,
    false
  ),
];

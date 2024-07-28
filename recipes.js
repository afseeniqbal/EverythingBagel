const recipes = [
    { id: 1, name: 'Ciambotta', type: 'cuisine1', description: 'Also known as Italian Vegetable Stew which can be customized based on the vegetables available to you. ', time: 'Total of Prep and Cook Time: 1 hour and 20 minutes', calories: 'Calories: 264 cal', servings:'4 Servings', image: 'Foods/ciammotta.jpg', ingredients: ['2 tbsp Olive Oil', '1 Red Onion, diced', '6 Garlic Cloves, minced','1 pinch of Chili Flakes','1 Aubergine/Eggplant, diced','1 Courgette/Zucchini, diced', '1/2 Red Pepper, diced', '1/2 Yellow Paper,diced','2 Potatoes, peeled and dice','1 15oz can of crushed Tomatoes','1 bunch of Basil','Any Stock (Chicken/Beef/Vegetable) - optional','Salt and Pepper'], instructions: ['Heat the Olive Oil in a large saucepan,then add the onion, garlic and chili flakes.', 'Sweat on a medium heat until the onions are translucent and keep stirring to prevent the garlic from burning.', 'Add the chopped vegetables along with the tomatoes and leave to simmer for 1 hour.','If the liquid reduces too much, top up with a little stock or water.','Taste and season with salt and pepper','Garnish with chopped basil and serve.'] },
 
    { id: 2, name: 'Penne all Arrabbiata', type: 'cuisine1', description: 'A quick and simple dish served with a delicious spicy tomato sauce.', time: 'Total of Prep and Cook Time: 30 minutes', calories: 'Calories: 293 cal', servings:'6 Servings', image: 'Foods/arrabbiata.jpg', ingredients: ['2 garlic cloves, minced', 'Olive Oil', '1 tsp Dried Chili Flakes','400g of Tomatoes (crushed or canned)','400g of Penne Pasta','Basil Leaves,torn or chopped'], instructions: ['To begin, heat a tablespoon of olive oil on a low heat in a pan and gently soften the minced garlic. Note that you do not want any color on the garlic or it will be bitter', 'Add the chili flakes to the oil, temper for 10 seconds, then add the tomatoes', 'Cook down over a low heat for 10-15 minutes until the sauce has thickened. Taste and add salt and little sugar if necessary','Cook the penne in a pan of heavily salted boiling water for 8-10 minutes or as per packet instructions','Once the pasta is al dente, drain and add it to the sauce, tossing to make sure the pasta is evenly coated.', 'Garnish with Basil and serve'] },
 
    { id: 3, name: 'Caprese Salad', type: 'cuisine1', description: 'The salad is refreshing, light and nutritious.', time: 'Total of Prep and Cook Time: 15 minutes', calories: 'Calories: 261 cal', image: 'Foods/caprese.jpg', servings:'3 Servings', ingredients: ['1 1/2 lbs Ripe Tomatoes - sliced 1/4" thick', '12-16 oz Fresh Mozzarella, sliced', '1 bunch Fresh Basil','3 tbsp Olive Oil','1/2 tsp salt, to taste','1/4 Black Pepper, to taste','2 tbsp Balsamic Glaze'], instructions: ['Start by layering slices of tomatoes on a serving platter. Tuck slices of cheese between each tomato so both are visible then tuck whole basil leaves between the cheese and tomatoes.', 'Season generously with salt and pepper, drizzle all over with olive oil - preferably Extra Virgin Olive Oil', 'Drizzle with 2 tbsp balsamic glaze or add it to taste.'] },
 
    { id: 4, name: 'Gamberi alla Busara', type: 'cuisine1', description: 'Beautiful prawns cooked in a rich cherry tomato sauce,', time: 'Total of Prep and Cook Time: 45 minutes', calories: 'Calories: 450 cal', servings:'2 Servings', image: 'Foods/gamberi.jpg', ingredients: ['3 tbsp of extra virgin olive oil', '1 garlic clove, crushed and peeled', '1kg medium prawns, deveined','1 small onion, golden, peeled and finely chopped','1 dried chili, crushed', 'Salt and Pepper, to taste','1 handful Pasley Leaves, minced'], instructions: ['Heat the olive oil in a very large skillet set over a medium heat.', 'Add the garlic and fry for a couple of minutes, until fragrant. Stir in the onion and cook until soft and translucent, stirring often so it doesn’t colour', 'Add the prawns and cook for about two minutes per side, ensuring that they don’t overlap. Pour in the wine, increase the heat to medium-high and allow it to evaporate.','Remove the prawns; transfer them to a plate while you carry on with the sauce. Remove the garlic and add the tomatoes and crushed chilli. Lower the heat, cover and cook until the tomatoes have fallen apart and look saucy; add a splash of water if needed to help the sauce come together. Taste and season','Now, put the prawns back into the skillet and stir to coat in the sauce. Increase the heat and sautée for about five more minutes, then remove from the heat and sprinkle with parsley','Serve immediately with plenty of crusty bread.'] },
 
    { id: 5, name: 'Eggplant Parmesan', type: 'cuisine1', description: 'A classic Italian dish, that can be made with other vegetables', time: 'Total of Prep and Cook Time: 1 hour 10 minutes', calories: 'Calories: 312 cal', servings:'4 Servings',  image: 'Foods/eggplant.jpg', ingredients: ['700 g Eggplants, sliced', '250 g Tomato Sauce', '250g Sliced Mozzarella', '80g grated Grana Padano or Parmigiano Cheese', '1 1/2 cup Flour', 'Extra-virgin Olive Oil','Salt and Pepper'], instructions: ['Slice and salt the eggplants. Leave them in a colander, covered with a weight, to extract excess liquid for 30 minutes. Then dry the eggplants slices with a clean paper towel and dip them in flour. ', 'Fry in hot oil and drain on paper towels once cooked on both sides.', 'Spread 2 tablespoons of tomato sauce on an ovenproof baking dish. Add a layer of fried eggplant, a handful of Grana (or Parmigiano) cheese, a pinch of salt, slices of mozzarella, and chopped basil leaves. Sprinkle with more tomato sauce.','Keep alternating layers of ingredients: First the eggplants followed by grana cheese, mozzarella, basil, and finally tomato sauce. Finish with a layer of mozzarella, and add a sprinkle of grana cheese with a pinch of pepper. Bake at 375°F (190°C) for about 25 minutes. Serve hot.'] },
 
    { id: 6, name: 'Huevos Rancheros', type: 'cuisine2', description: 'A classic Mexican breakfast, translated "ranch eggs" are fried eggs served on a lightly fried corn tortillas and smothered in cooked salsa.', time: 'Total of Prep and Cook Time: 40 minutes', calories: 'Calories: 325 cal', servings:'8 servings', image: 'Foods/huevos.jpg', ingredients: ['8 large whole eggs', '6 tbsp olive oil', '24 oz Tomatoes','1 1/2 medium white onion','2 jalapeños or serranos ','4 garlic gloves, minced','1/2 cup Water','Salt, to taste','2 cups pinto beans, cooked','1 cup bean broth'], instructions: ['Remove the skin from the onion and cut into 3 wedges. Roast the onion, tomatoes, jalapeños and unpeeled garlic cloves on a comal or cast iron skillet, over medium high heat. Turn on all side so they can char evenly.', 'When done, transfer all the roasted ingredients to a blender plus the water. Remove the stems from the peppers and peel from the garlic. Blend until smooth and set aside for later.', 'Dice the tomatoes and onion into small bite size pieces. Next, peel the garlic and finely mince it. Heat the oil in a large pan and over medium low heat. Sauté the onions until slightly softened, then add the minced garlic and stir as needed. When the onions are translucent, stir in the diced tomatoes and mix to combine. Allow them to cook through and soften until all the juices release. ','Next, pour the salsa into the pan and carefully mix to combine. Allow it to simmer on medium low heat for about 5 minutes. Finally, add salt to taste; I added 3/4 tsp of kosher salt. Mix well and remove from the heat.', 'For the fried eggs: Heat about 2 TBSP of oil in a large pan. Crack 2 eggs into the pan making sure the yolk does not break, then, season with salt to taste. Carefully spoon the oil over the whites. Cook the eggs until the whites are set and you have reached your desired yolk doneness. Cook the remainder of the eggs following the previous steps. ', 'Refried beans: Heat the oil over medium low heat and sauté the diced onions until translucent. Then, add the minced garlic and continue to cook until the onion is caramelized. You will need to stir as needed throughout the cooking process. Add in the pinto beans and the broth. Now mash them with a potato masher until they are all creamy and broken down. Lastly, season to taste and stir to combine. Set to the side until needed.'] },
 
    { id: 7, name: 'Calabacitas', type: 'cuisine2', description: 'A beloved vegetable dish that provides comfort and satisfaction.', time: 'Total of Prep and Cook Time: 30 minutes', calories: 'Calories: 323 cal',  servings:'6 servings', image: 'Foods/calabacitas.jpg', ingredients: ['1 tablespoon olive oil','1 small onion, diced','1 poblano pepper, diced','1 jalapeno pepper, diced (seeds removed if you do not want it spicy)','1 15-ounce can whole kernel corn, drained','2 plum tomatoes, diced','1 large zucchini, sliced into half moons','1 large yellow squash, sliced into half moons', '3 cloves garlic, minced','2 teaspoons kosher salt', '1/4 teaspoon freshly ground black pepper','1/4 teaspoon dried oregano','1/4 teaspoon ground cumin','1/4 cup water', '1/2 cup shredded cheddar cheese', '1/4 cup milk'], instructions: ['Heat olive oil in a large nonstick skillet over medium-high heat.','Add onions, poblanos, and jalapenos. Cook for 5 minutes, stirring occasionally, until vegetables begin to soften.','Add corn and tomatoes. Cook for 5 more minutes, stirring occasionally.', 'Add zucchini, yellow squash, garlic, salt, black pepper, oregano and ground cumin. Stir to combine and cook for 5 minutes, stirring every minute or so.', 'Add water to skillet, reduce heat to low, cover and simmer for 5 minutes.','Uncover the skillet, add the shredded cheese and milk, and stir together until the cheese has fully melted.','Remove from heat, garnish with chopped cilantro and cotija cheese, and serve.'] },
 
    { id: 8, name: 'Camarones a la Diabla', type: 'cuisine2', description: 'Also known as Diablo shrimp, are juicy shrimp covered in red chile pepper sauce', time: 'Total of Prep and Cook Time: 30 minutes', calories: 'Calories: 279 cal', servings:'4 servings', image: 'Foods/camarones.jpg', ingredients: ['1.5 lb large raw shrimp (peeled, deveined, and with tails left on)', '3-4 chile de árbol (stems and seeds removed','4 guajillo chilies (stems and seeds removed)','2 medium tomatoes','½ small onion','2 garlic cloves (peeled)','¼ tsp cumin seeds (optional)','3 Tbsp butter (or olive oil)','salt and pepper'], instructions: ['Place tomatoes on a pot and add enough water to cover them. Boil until tomatoes are tender (about 10 minutes).', 'Turn off the heat, add chilies and push them down with a spoon to soak them in the hot water. Allow to rest for 10 minutes or until the chilies are soft and everything has cooled down.', 'Add tomatoes and chilies to a blender with garlic, and onion. Add one cup of water and blend until you will have a smooth sauce. Set aside.','Melt butter in a sautéing pan over medium heat. Add shrimp and season with salt and pepper. Sauté until shrimp change color, about 1 minute.',' Pour over the diabla sauce and add a pinch of salt. Allow simmering for about 5 minutes while stirring. Adjust seasonings to taste and serve.'] },
 
    { id: 9, name: 'Enchiladas Suizas Verdes', type: 'cuisine2', description: 'A creamy tomatillo sauce and mounds of cheese is the perfect easy and mouthwatering Mexican dinner', time: 'Total of Prep and Cook Time: 40 minutes', calories: 'Calories: 247 cal', servings:'4-5 servings', image: 'Foods/verdes.jpg', ingredients: ['8 Corn Tortillas', '1 ½ cups shredded chicken', '1 cup Mexican crema (or sour cream)','1 ½ cups melty cheese, shredded ','1 cup tomatillo sauce','1 cup chicken stock','½ medium white onion, cut in quarters','¼ cup jalapeno or serrano peppers,seeded and diced','1 garlic clove, peeled','cilantro, a small bunch','frying oil','1 Tbsp butter','salt & pepper'], instructions: ['Place tomatillos or tomatillo sauce in a blender. Add onion, jalapeno, cilantro, garlic, and cream. Add 1 cup of chicken stock and blend until smooth. Heat the butter in a pan over medium heat. Pour the sauce, season with salt and pepper, stir and let it cook until it thickens (about 2 minutes). Turn off the heat and set aside.', 'In a frying pan heat some oil over medium heat. Fry tortillas until softened, just about 5 seconds on each side. Repeat this with one tortilla at a time and place them on a plate lined with paper towels to absorb the excess of oil. Set aside and let them cool slightly. Next, add 2-3 tablespoons of shredded chicken in the middle of a tortilla, and roll it like a burrito. Repeat the step until all chicken and tortillas are gone.', 'Lightly oil a baking dish. Pour half of the sauce and spread it all over the bottom. Place all tortillas filled with chicken onto the baking dish, making sure the seam side is down. Pour over the remaining sauce spreading it very well on top of the enchiladas. Then add the cheese on top.','Heat the oven to 350°F (175°C) and bake for about 20 minutes or until the cheese is melted and bubbling. Serve immediately on its own or garnish with jalapeño, cilantro, onion, and more cheese.'] },
 
    { id: 10, name: 'Caldo de Res', type: 'cuisine2', description: 'These are delicious, cheesy, and the perfect comfort food for any day of the week.', time: 'Total of Prep and Cook Time: 3 hours 10 minutes', calories: 'Calories: 275 cal', servings:'7 servings', image: 'Foods/caldo.jpg', ingredients: ['12 cups water','2 ½-3 pounds bone-in beef shank','4 cloves garlic','2 bay leaves','1 tablespoon kosher salt','4 medium carrots, sliced into thick coins','3 medium ears of corn, shucked and halved','2 medium potatoes, cut into eighths','2 medium zucchini, cut into thick chunks','¼ head green cabbage, cut into chunks','1 handful cilantro,','1 tablespoon tomato paste','4 limes halved','hot sauce'], instructions: ['In a large Dutch oven or pot, add the water, beef shanks, garlic, bay leaves, and salt. Bring to a boil, cover, reduce heat to a low simmer, and cook for 1 ½ to 2 hours, until the meat is tender.','Skim off and discard any white or brown foam floating at the top of the pot as well as the bay leaves and garlic cloves. Transfer the cooked bone-in beef shank to a bowl and set aside to cool slightly.','Add the carrots, corn, potatoes, zucchini, cabbage, cilantro, and tomato paste to the pot. Stir until the tomato paste has fully dissolved. Bring the soup to a boil, reduce heat to a low simmer, and cook for 15-20 minutes, until all the vegetables are tender and cooked through.','While the vegetables are cooking, remove the bones and any tough sinewy pieces from the beef shank and discard. Cut the tender meat into small bite-sized chunks and add them back into the pot when the vegetables are fully cooked.','Stir everything together and taste. Season with more salt if necessary.','Serve soup in large bowls, making sure that each bowl gets a little bit of everything. Top each bowl with more fresh cilantro, freshly squeezed lime juice, and a few dashes of hot sauce if desired.'] },
 
    { id: 11, name: 'Bibimbap', type: 'cuisine3', description: 'It means mixed-rice where it has a lot of variants with each ingredients coming together beautifully.', time: 'Total of Prep and Cook Time: 55 minutes', calories: 'Calories: 450 cal', servings:'4 servings', image: 'Foods/bibimbap.jpg', ingredients: ['5 cups cooked short-grain rice', '12 oz soy bean sprouts, washed and drained', '8 oz of blanched spinach','1 large carrot','1 red bell pepper','1 large zucchini','1 English cucumber','3-4 gree onions, chopped','1/2 lb beef (ground beef or flank steak)','4 eggs','salt and pepper','vegetable oil','toasted sesame oil','toasted sesame seeds','garlic','soy sauce','honey or sugar','gochujang - korean hot pepper paste'], instructions: ['Put the soy bean sprouts in a pot and add 4 cups water and 2 or 3 teaspoons salt. Cover and cook for 20 minutes over medium high heat. Take out the sprouts with tongs and put them into a bowl. In a bowl, mix the sprouts by hand with ½ teaspoons salt, 1 teaspoon minced garlic, and 2 teaspoons toasted sesame oil. Put them on the large platter.', 'Cut up the blanched spinach a few times and put it in a bowl. Mix by hand with 1 teaspoon garlic, 1 teaspoon toasted sesame oil, ½ teaspoon kosher salt, and 1 teaspoon sesame seeds. Cover and put it next to the soy bean sprouts on the platter.', 'Cut the carrot into matchsticks, put them in a bowl, and mix with a pinch of salt. Let stand for 5 to 10 minutes until sweating. Cut the red bell pepper into halves, deseed, and slice into strips. Put them in a bowl. Cut the zucchini into matchsticks and mix with ½ teaspoon kosher salt. Cut the cucumber into halves lengthwise and slice thinly crosswise. Mix with ¼ teaspoon kosher salt.','Cut the beef into matchsticks and put them in a bowl. Mix with 1 tablespoon minced garlic, 1 tablespoon soy sauce, 1 tablespoon honey, 2 teaspoons toasted sesame oil, and 1 teaspoon sesame seeds with a spoon.','Heat up a pan over medium high heat. Squeeze out excess water from the carrot. Add a few drops of cooking oil to the pan and sauté the carrot for 1 minute. Put it on the platter next to the soy bean sprouts and spinach. Clean the pan with wet paper towel or wash it.','Heat a few drops of cooking oil in the pan and squeeze out the excess water from the cucumber. Sauté with ½ teaspoon minced garlic and a few drops of toasted sesame oil for 30 seconds. Put it on the platter. Clean the pan.','Heat up the pan with a few drops of cooking oil. Add the red bell pepper and sprinkle a pinch of salt over top. Sauté for 30 seconds. Put it on the platter. Clean the pan.','Heat up the pan and squeeze out excess water from the zucchini. Add a few drops of cooking oil and sauté with 1 teaspoon minced garlic, 1 tablespoon chopped green onion, a drop of toasted sesame oil for 1 minute until slightly softened. Put it on the platter. Clean the pan.','Heat up the pan with a few drops of cooking oil. Add the bellflower roots and sauté for 2 to 3 minutes. Lower the heat to medium so as not to brown them. Add 1 teaspoon minced garlic and a drop of toasted sesame oil. Stir for another minute until a little softened. Put it on the platter. Clean the pan.','Heat up the pan. Add a few drops of cooking oil. Stir the gosari for 2 minutes until a little softened. Add ½  teaspoon of minced garlic, 2 teaspoons soy sauce, and 2 teaspoons sugar, and keep stirring for another minute. Put it on the platter.','Assemble into a shallow bowl or earthenware bowl and Serve.'] },
 
    { id: 12, name: 'Japchae', type: 'cuisine3', description: 'One of the best-beloved noodle dish that is healthy and delicious', time: 'Total of Prep and Cook Time: 35 minutes', calories: 'Calories: 300 cal', servings:'4 servings', image: 'Foods/japchae.jpg', ingredients: ['4 ounces beef, filet mignon (or pork shoulder), cut into ¼ inch wide and 2½ inch long strips','2 garlic cloves, minced','1 tablespoons plus 2 teaspoons sugar','2 tablespoons plus 1 teaspoon soy sauce','2 tablespoons toasted sesame oil','1 tablespoon toasted sesame seeds','1 large egg','4 ounces spinach, washed and drained','4 ounces of dangmyeon (sweet potato starch noodles)','2 to 3 green onions, cut crosswise into 2 inch long pieces','1 medium onion (1 cup), sliced thinly','4 to 5 white mushrooms, sliced thinly','1 medium carrot (¾ cup), cut into matchsticks', '½ red bell pepper, cut into thin strips (optional)','salt and pepper','vegetable oil'], instructions: ['Put the beef into a bowl and mix with 1 clove of minced garlic, 1 teaspoon sugar, ¼ teaspoon ground black pepper, 2 teaspoons soy sauce, and 1 teaspoon of toasted sesame oil with a wooden spoon or by hand. Cover and keep it in the fridge.','Crack the egg and separate the egg yolk from the egg white. Remove the white stringy stuff (chalaza) from the yolk. Beat in a pinch of salt with a fork. Add 1 teaspoon of vegetable oil to a heated nonstick pan. Swirl the oil around so it covers the pan, and then wipe off the excess heated oil with a kitchen towel so only a thin layer remains on the pan. To keep the jidan as yellow as possible, turn off the heat and pour the egg yolk mixture into the pan. Tilt it around so the mixture spreads thinly. Let it cook using the remaining heat in the pan for about 1 minute. Flip it over and let it sit on the pan for 1 more minute. Let it cool and slice it into thin strips.','Bring a large pot of water to a boil. Add the spinach and blanch for 30 seconds to 1 minute, then take it out with a slotted spoon or strainer. Let the water keep boiling to cook the noodles. Rinse the spinach in cold water to stop it from cooking. Squeeze it with your hands to remove any excess water. Cut it a few times and put it into a bowl. Mix with 1 teaspoon soy sauce and 1 teaspoon toasted sesame oil. Put it into a large mixing bowl.', 'Put the noodles into the boiling water, cover and cook for 1 minute. Stir them with a wooden spoon so they don’t stick together. Cover and keep cooking for another 7 minutes until the noodles are soft and chewy. Strain and cut them a few times with kitchen scissors. Put the noodles into the large bowl next to the spinach.','Add 2 teaspoons toasted sesame oil, 1 teaspoon soy sauce, and 1 teaspoon sugar. Mix well by hand or a wooden spoon. This process will season the noodles and also keep the noodles from sticking to each other.','Heat up a skillet over medium high heat. Add 2 teaspoons vegetable oil with the onion, the green onion, and a pinch of salt. Stir-fry about 2 minutes until the onion looks a little translucent. Transfer to the noodle bowl.','Heat up the skillet again and add 2 teaspoons vegetable oil. Add the white mushrooms and a pinch of salt. Stir-fry for 2 minutes until softened and a little juicy. Transfer to the noodle bowl. Heat up the skillet and add 1 teaspoon vegetable oil. Add the carrot and stir-fry for 20 seconds. Add the red bell pepper strips and stir-fry another 20 seconds. Transfer to the noodle bowl.','Heat up the skillet and add 2 teaspoons vegetable oil. Add the beef and mushroom mixture and stir fry for a few minutes until the beef is no longer pink and the mushrooms are softened and shiny. Transfer to the noodle bowl.','Add 1 minced garlic clove, 1 tablespoon soy sauce, 1 tablespoon sugar, ½ teaspoon ground black pepper, and 2 teaspoons of toasted sesame oil to the mixing bowl full of ingredients. Mix all together by hand. Add the egg garnish and 1 tablespoon sesame seeds. Mix it and transfer it to a large plate and serve.'] },
 
    { id: 13, name: 'Kalguksu', type: 'cuisine3', description: 'It is a warming, soothing noodle soup that is made with knife-cut noddles', time: 'Total of Prep and Cook Time: 1 hour and 15 minutes', calories: 'Calories: 610 cal', servings:'4 servings', image: 'Foods/kalguksu.jpg', ingredients: ['1.2kg whole chicken, cleaned', '10 cups filtered water (enough to cover the chicken in a pot)','300g kalguksu noodles / or udon noodles', '3 stalks green onion (white part only)','5 cloves garlic','5 whole black peppers','15g peeled ginger','3 Tbsp green onion,thinly sliced','1 Tbsp minced garlic','1/2 Tbsp fine sea salt','1 Tbsp roasted sesame seeds','1/4 tsp ground black pepper','1 1/2 Tbsp Korean chili flakes (gochugaru)','1/2 Tbsp soy sauce','1 Tbsp rice wine','1/2 Tbsp Korean fish sauce','1 Tbsp filtered water','2 Tbsp green onion, thinly sliced','1/2 Tbsp minced garlic','1/4 Tbsp brown sugar'], instructions: ['Rinse the chicken thoroughly in cold water.','Put the chicken into a pot and add the spice vegetables and the water. Boil it over medium low heat until the chicken is cooked (about 50 mins to 1 hour). While cooking, scoop out  floating oil and debris from the boiling broth as required.','Once the chicken is cooked take out the chicken and separate the meat from the bones and skin (keep the broth for later). Tear the chicken meat into bite size pieces. Put it into a mixing bowl and add the chicken seasoning then mix them well.','In a separate pot, boil some water and add the noodles once it is boiling. Drain the noodles once they are 3/4 cooked.','Add the partly cooked noodles into the chicken broth and boil it until the noodles are cooked completely (about 3 mins). Put the noodles and broth into a bowl, add the seasoned chicken on top. Add the red seasoning sauce on top of the chicken and serve.'] },
 
    { id: 14, name: 'Yachaejeon', type: 'cuisine3', description: 'A flavorful and healthy pancake packed with Vegetables', time: 'Total of Prep and Cook Time: 45 minutes', calories: 'Calories: 184 cal', servings:'2 servings', image: 'Foods/yachaejeon.jpg', ingredients: ['4 green onions, cut into 1 inch long','⅓ cup leek (optional), sliced thinly 1 inch long','3 ounces zucchini matchsticks','1 green chili pepper, sliced','3 ounces onion, sliced','⅓ cup sweet potato','1 fresh mushroom','¾ cup all purpose flour','½ teaspoon kosher salt','¾ cup water','vegetable oil','1 tablespoon soy sauce','2 teaspoons white vinegar','1 teaspoon Korean hot pepper flakes (gochugaru), optional'], instructions: ['Make dipping sauce: Combine soy sauce, vinegar, hot pepper flakes (if using), and sesame seeds in a bowl and mix it well with a spoon. Transfer it to a small bowl.','Make batter: Combine green onion, leek (if using), zucchini, green chili pepper (if using), onion, and sweet potato in a bowl. Add flour salt, and ¾ cup water. Mix it well with a wooden spoon.', 'Make a pancake:Heat up a large non-stick skillet over medium high heat.','Add about 2 tablespoons vegetable oil and swirl it around to coat the skillet evenly. Add the batter to the skillet and spread it out evenly. Turn down the heat to medium and put the sliced mushroom on top. Gently press them in with a wooden spoon or spatula.ook for 4 to 5 minutes until the bottom turns crunchy light golden brown. Grab the handle of the skillet and twirl it around so the pancake moves and is cooked evenly underneath. Flip and Cook.'] },
 
    { id: 15, name: 'Kimchi Jjigae', type: 'cuisine3', description: 'One of the most common Korean stew and is loaded with rich and comforting flavors ', time: 'Total of Prep and Cook Time: 55 minutes', calories: 'Calories: 375 cal', servings:'2 servings', image: 'Foods/kimchi.jpg', ingredients: ['1 pound kimchi, cut into bite size pieces','¼ cup kimchi brine','½ pound pork shoulder (or pork belly)','½ package of tofu, sliced into ½ inch thick bite size pieces','3 green onions','1 medium onion, sliced (1 cup)','1 teaspoon kosher salt','2 teaspoons sugar','2 teaspoons gochugaru (Korean hot pepper flakes)','1 tablespoon gochujang (hot pepper paste)','1 teaspoon toasted sesame oil','2 cups of anchovy stock (or chicken or beef broth)'], instructions: ['Place the kimchi and kimchi brine in a shallow pot. Add pork and onion. Slice 2 green onions diagonally and add them to the pot.', 'Add salt, sugar, hot pepper flakes, and hot pepper paste. Drizzle sesame oil over top and add the anchovy stock. Cover and cook for 10 minutes over medium high heat. Open and mix in the seasonings with a spoon. Lay the tofu over top. Cover and cook another 10 to 15 minutes over medium heat.', 'Chop 1 green onion and put it on the top of the stew. Remove from the heat and serve right away with rice.'] },
  ];

  function filterRecipes(type) {
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = ''; 

    const filteredRecipes = type === 'all' ? recipes : recipes.filter(recipe => recipe.type === type);

    filteredRecipes.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipeItem');
      recipeItem.innerHTML = `
        <img src="${recipe.image}">
        <div class="recipeItemContent">
          <h3>${recipe.name}</h3>
          <p><em>${recipe.description}</em></p>
          <button onclick="showRecipeDetails(${recipe.id})">See Recipe</button>
        </div>
      `;
      recipesContainer.appendChild(recipeItem);
    });
  }

  function showRecipeDetails(id) {
    const recipe = recipes.find(item => item.id === id);

    if (recipe) {
      const recipeDetailsHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <title class="titleRecipe">${recipe.name} Details </title>
          <link rel="stylesheet" type="text/css" href="recipes.css"> 
          <h1 class="nameRecipe">${recipe.name}</h1>
          <img class="tabImage" src="${recipe.image}" width=330px height=500px>
          <p class="cookTime"> <strong> ${recipe.time}</strong></p>
          <p class="foodCalories"> <strong> ${recipe.calories}</strong></p>
          <p class="servingSize"><strong>${recipe.servings}</strong></p>
          <h3>Ingredients:</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
        </body>
        </html>
      `;
      
      const newTab = window.open();
      newTab.document.open();
      newTab.document.write(recipeDetailsHTML);
      newTab.document.close();

    }
  }
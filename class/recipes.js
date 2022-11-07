class recipesClass{
  name=""
  origin=""
  time=0
  description=""

  // added later
  ingredients = []
    
  constructor(name, origin,time,description, [ingredients]){
    this.name = name
    this.origin = origin
    this.time = time
    this.description = description
    
    // added later
    this.ingredients.push(ingredients)

  }
}

module.exports = recipesClass
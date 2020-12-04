var recipes = {cake:"eggs", bread: "flour"}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {key: value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}

console.log(updateObjectWithKeyAndValue(recipes, soup, "water"))
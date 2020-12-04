var recipes = {cake:"eggs", bread: "flour"}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]: value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var object.key = [value]
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = 
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}

console.log(updateObjectWithKeyAndValue(recipes, soup, "water"))
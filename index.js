var updateObjectWithKeyAndValue = (object,key,value) =>{
  return Object.assign({},object,{[key]:value})
}

var destructivelyUpdateObjectWithKeyAndValue = (object,key,value) => {
  return Object.assign(object,{[key]:value})
}

var deleteFromObjectByKey = (object,key) => {
 var object2 = object;
 delete object2[key];
}

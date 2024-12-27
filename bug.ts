function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (!obj1 && !obj2) {
    return true;
  }

  // Check if one object is null or undefined
  if (!obj1 || !obj2) {
    return false;
  }

  // Check if both objects are of different types
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Check if both objects are arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!compareObjects(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }

  // Check if both objects are objects
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!compareObjects(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

  // If both objects are primitive types
  return obj1 === obj2;
}
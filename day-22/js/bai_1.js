var Arr = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var categories = [];

function findChildren(parentId) {
  // new array
  // console.log(parentId);
  var children = [];
  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i].parent === parentId) {
      var child = {
        id: Arr[i].id,
        name: Arr[i].name,
      };
      var subChildren = findChildren(Arr[i].id);
      if (subChildren.length > 0) {
        child.children = subChildren;
      }
      children.push(child);
    }
  }
  return children;
}
// console.log(findChildren(5));
for (var i = 0; i < Arr.length; i++) {
  if (Arr[i].parent === 0) {
    var category = {
      id: Arr[i].id,
      name: Arr[i].name,
    };
    var children = findChildren(Arr[i].id);
    if (children.length > 0) {
      category.children = children;
    }
    categories.push(category);
  }
}

console.log(categories);

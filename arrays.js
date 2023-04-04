function findFamousCats(cats) {
    const newArraysCats = cats.map(item => {
        return  {
            name: item.name,
            followers: item.followers.reduce((sum, item) => sum + item, 0)
        }
    }).sort((a, b) => b.followers - a.followers);
    const maxFollowers = newArraysCats[0].followers;
    return newArraysCats.filter(item => item.followers === maxFollowers).map(item => item.name);

  }
  
console.log(
    findFamousCats([
        {
          name: "Mimi",
          followers: [320, 120, 70]
        },
        {
          name: "Milo",
          followers: [400, 300, 100, 200]
        },
        {
          name: "Gizmo",
          followers: [250, 750]
        }
      ])
);

const array1 = [1,2,3,4,5,6,7,8];
const array2 = [...array1];

array2[1] = 24;

console.log('Array 1', array1);;
console.log('Array 2', array2);

// 605. Can Place Flowers
/*Q4:You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true*/
var canPlaceFlowers = function(flowerbed, n) {
    let res = 0;
  const length = flowerbed.length;

  for (let i = 0; i < length; i += 2) {
    if (flowerbed[i] === 0) {
      if (i === 0 || flowerbed[i - 1] === 0) {
        if (i === length - 1 || flowerbed[i + 1] === 0) {
          res++;
          if (res >= n) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
const flowerbed = [1,0,0,0,1];
const n = 1;
const placeFlower = canPlaceFlowers(flowerbed,n);

console.log(placeFlower);


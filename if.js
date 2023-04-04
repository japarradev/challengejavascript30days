function isLeapYear(year)
{
  if(year < 0)
  {
    return false
  }
  else if (year % 4 === 0 && year % 100 !== 0)
  {
    return true;
  } 
  else if (year % 100 === 0 && year % 400 === 0)
  {
    return true
  }
  else
  {
    return false
  }
}

console.log('2000', isLeapYear(2000));
console.log('-2024', isLeapYear(-2024));
console.log('1984.25;', isLeapYear(1984.25));
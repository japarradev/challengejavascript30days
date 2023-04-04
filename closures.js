function createCalculator() {
    let total = 0;
    return{
        add: function(number)
        {
            total += number;
            return total;
        },
        subtract: function(number)
        {
            total -= number;
            return total;
        },
        multiply: function(number)
        {
            total *= number;
            return total;
        },
        divide: function(number)
        {
            total /= number;
            return total; 
        },
        clear: function(number)
        {
            total = 0;
            return total;
        },
        getTotal: function(number)
        {
            return total;
        }
    }
  }


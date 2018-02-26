
module.exports = function makeExchange(currency) {
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else if (currency == 0) {
        return {}
    } else {
        var change = {}
        var names = ["H","Q","D","N","P"]
        var values = [50,25,10,5,1]
        
        for (i = 0; i < values.length; i++){            
            let quantity = Math.floor(currency/(values[i]))
            if(quantity > 0){
                change[names[i]] = quantity;
                currency -= quantity * values[i] 
            }
        }
        return change
    }
}
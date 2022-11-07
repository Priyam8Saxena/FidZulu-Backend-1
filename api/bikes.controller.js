var bikes = require('../utils/bikes.json')

exports.findPricesOfBikes = (req,res) => {
    try{
        console.log(req.params.location)
        const location = req.params.location
        let tax = 0;
        if(location === "US-NC")
        {
            tax = 0.08;
        }
        else if(location === "IE")
        {
            tax=0.23;
        }
        else if(location === "IN")
        {
            tax=0.18;
        }
        if(tax==0)
        {
            throw new Error(e)
        }    
        bikes_update = bikes.map(b => {
            let price = (b.price + b.price*tax).toFixed(2)
            return{
                name:b.name,
                brand:b.brand,
                color:b.color,
                price:price
            }
        })
        res.status(200).json({
            bikes: bikes_update
        })
    }
    catch(e)
    {
        res.status(500).json({
            message: "Location not found"
        })
    }
}


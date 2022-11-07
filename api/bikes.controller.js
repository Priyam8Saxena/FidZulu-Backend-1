var bikes = require('../utils/bikes.json')

exports.findPricesOfBikes = (req,res) => {
    try{
        console.log(req.params.location)
        const location = req.params.location.toLowerCase()
        let tax = 0;
        let conversion_rate;
        let symbol;
        if(location === "us-nc")
        {
            tax = 0.08;
            conversion_rate = 0.88
            symbol = "£";
        }
        else if(location === "ie")
        {
            tax=0.23;
            conversion_rate = 1
            symbol = "€";
        }
        else if(location === "in")
        {
            tax=0.18;
            conversion_rate = 82.15
            symbol = "₹";
        }
        if(tax==0)
        {
            throw new Error(e)
        }    
        bikes_update = bikes.map(b => {
            let converted_price = b.price * conversion_rate
            let price = (converted_price + converted_price*tax).toFixed(2)
            return{
                name:b.name,
                brand:b.brand,
                color:b.color,
                price:symbol + "" + price
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


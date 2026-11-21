function orderFood(customer) {
    new Promise((resolve, reject) => {
        console.log("Order placed by " + customer);

        setTimeout(() => {
            console.log("Restaurant accepted your order!!");

            setTimeout(() => {
                console.log("Food is being prepared!");

                setTimeout(() => {
                    console.log("Your food is out for delivery!");
                    resolve("Food Delivered!! You can enjoy your meal.")
                    reject("Delivered Failed!!")
                }, 2000)
            }, 2000)
        }, 2000)
    })
}

let value = 0;
let totalValue = 0

function handleClick(cardNumber) {
    const cardId = `card-0${cardNumber}`;
    const priceId = `${cardId}-price`;

    document.getElementById(cardId).addEventListener('click', function () {
    //    adding item into the cart

    
       
       
    //    princing calucaltion
        let val = getValueById(priceId);
        value += val;

        if (value > 0) {
            const valueString = value.toFixed(2);
            setTextElementById('total-price', valueString);
            const purchaseBtn = document.getElementById('purchase-btn');
            purchaseBtn.classList.remove('btn-disabled');
            setTextElementById('total', valueString);

            if (value >= 200) {
                const purchaseBtn = document.getElementById('apply-btn');
                purchaseBtn.classList.remove('btn-disabled');
                let discountPrice = (20 / 100) * value;
                discountPrice = discountPrice.toFixed(2);
                setTextElementById('discount', discountPrice);
                totalValue = value - discountPrice;
                totalValue = totalValue.toFixed(2);
                setTextElementById('total', totalValue);
            }
        }
    });
}


for (let i = 1; i <= 6; i++) {
    handleClick(i);
}

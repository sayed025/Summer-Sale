function getValueById(elementId) {
    const priceItem = document.getElementById(elementId);
    const price =  parseFloat(priceItem.innerText);
    return price
}

function setTextElementById(elementId, totalprice) {
    const item = document.getElementById(elementId);
    item.innerText = totalprice;
}
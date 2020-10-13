const priceHT = [100,200,55];

function sumTTC( p1, p2, p3, tva = 0.2){
    if (isNaN(parseFloat(p1)) ||isNaN(parseFloat(p2)) || isNaN(parseFloat(p3))) return "Error Type";

    return Math.floor((p1+p2+p3) * (1+tva) * 100) /100 )
    
}

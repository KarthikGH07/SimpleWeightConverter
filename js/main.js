
// Grams to other units
document.getElementById('gramsOutput').addEventListener('input', function(e){
    let g = e.target.value;
    document.getElementById('gramsOutput').value = g;
    document.getElementById('kgOutput').value = g/1000;
    document.getElementById('ozOutput').value = g*0.0353;
    document.getElementById('lbsOutput').value = g*0.0022;
});

//KiloGram to other units
document.getElementById('kgOutput').addEventListener('input', function(e){
    let kg = e.target.value;
    document.getElementById('gramsOutput').value = kg*1000;
    document.getElementById('kgOutput').value = kg;
    document.getElementById('ozOutput').value = kg*35.3;
    document.getElementById('lbsOutput').value = kg*2.20462;
});

// ounces to other units
document.getElementById('ozOutput').addEventListener('input', function(e){
    let oz = e.target.value;
    document.getElementById('gramsOutput').value = oz/0.0353;
    document.getElementById('kgOutput').value = oz/35.3;
    document.getElementById('ozOutput').value = oz;
    document.getElementById('lbsOutput').value = oz*0.0625;
});

//Pounds to Other units
document.getElementById('lbsOutput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('gramsOutput').value = lbs/0.0022046;
    document.getElementById('kgOutput').value = lbs/2.2046;
    document.getElementById('ozOutput').value = lbs*16;
    document.getElementById('lbsOutput').value = lbs;
});
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};


const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);

const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join );

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some );

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse );

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread );

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce );

function push() { //Strings einem Array hinzufügen
    const i1= eval(input1.value);
    const i2 =input2.value;
    const i3 =input3.value;
    i1.push(i2,i3);
    output.publish(i1);

}

function indexof() { //Zeigt die Stelle an dem I2 in I1 vorkommt wenn I2 nicht vorkommt => -1
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.indexOf(i2);
    output.publish(result);
}

function includes() { // returns true oder false wenn I2 in I1 vorkommt
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.includes(i2);
    output.publish(result);
}

function slice() { //returned ausgewählte Elemente in neuem Array
    const i1 = input1.value;
    const i2 = parseInt(input2.value);
    const i3 = parseInt(input3.value);
    const result = i1.slice(i2, i3);
    output.publish(result);
}

function splice() { // ersetzt ein Array bestandteil an einer Stelle
    const i1 = eval(input1.value);
    const i2 = parseInt(input2.value);
    const i3 = parseInt(input3.value);
    i1.splice(i2, i3);
    output.publish(i1);
}


function of() { // eingegebene Strings werden in gemeinsames Array gegeben
    const result = Array.of(input1.value, input2.value, input3.value);
    output.publish(result);
}

function map() {// i1 ist array und I2 eine mathematische funktion z.B (x)=> x*2 alles im Array wird *2 gerechnet
        const i1 = eval(input1.value);
        const i2 = eval(input2.value);
            const result = i1.map(i2);
            output.publish(result);
}

function filter() { //i1= array i2= filter funktion z.B (x)=> x<3 alle Zahlen unter 3 aus dem Array werden ausgegeben
    const i1 = eval(input1.value);
    const i2 = input2.value; 
    const result = i1.filter(eval(i2));
    output.publish(result);
}

    
function split() {// i1 ein String mit Trennungszeichen i2= ein Trennungszeichen i1 wird bei Trennungszeichen getrennt und Array gemacht
    const i1 = input1.value;
    const i2 = input2.value;
    const result = i1.split(i2);
    output.publish(result);
}

function join() {// i1=array i2=string zwischen jedem array wird zu string und zwischen jedem element ist der i2
    const i1 = eval(input1.value);
    const i2 = input2.value;
        const result = i1.join(i2);
        output.publish(result);
}


function some() { // i1= array i2= Bedingung wenn Bendinung auf eines der Elemente im array zutrifft => true
    const i1 = eval(input1.value);
    const result = i1.some(eval(input2.value));
    output.publish(result);
}

function reverse() { //array umgekehrt ausgegeben
    const i1 = eval(input1.value);
    i1.reverse();
    output.publish(i1);
}

function spread() {// Eigenschaften eines Arrays werden aufgespaltet und in anderes Objekt übertragen
    const i1 = eval(input1.value);
    const result = [...i1];
    output.publish(result);
}

function reduce() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.reduce(i2); // Assuming i2 is a valid callback function
    output.publish(result);
}



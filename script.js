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

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    output.publish(result);
}

function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.indexOf(i2);
    output.publish(result);
}

function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.includes(i2);
    output.publish(result);
}

function slice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const result = i1.slice(i2, i3);
    output.publish(result);
}

function splice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    i1.splice(i2, i3);
    output.publish(i1);
}

function of() {
    const result = Array.of(input1.value, input2.value, input3.value);
    output.publish(result);
}

function map() {
    const i1 = eval(input1.value);
    const result = i1.map(eval(input2.value));
    output.publish(result);
}

function filter() {
    const i1 = eval(input1.value);
    const result = i1.filter(eval(input2.value));
    output.publish(result);
}

function split() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.split(i2);
    output.publish(result);
}

function join() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.join(i2);
    output.publish(result);
}

function some() {
    const i1 = eval(input1.value);
    const result = i1.some(eval(input2.value));
    output.publish(result);
}

function reverse() {
    const i1 = eval(input1.value);
    i1.reverse();
    output.publish(i1);
}

function spread() {
    const i1 = eval(input1.value);
    const result = [...i1];
    output.publish(result);
}

function reduce() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const result = i1.reduce(eval(i2.value));
    output.publish(result);
}

# Homework 3
## 1. Explain what is prototype and what is prototype chain in your own words
In JavaScript, prototype is used for objects to inherit properties and methods. Each object has a prototype that references another object, and that object may also have a prototype. When JavaScript looks for a property or method of an object, it first checks if the object itself has that property/method, if not, it moves on to its prototype, and so on. This is referred to as a prototype chain. The end of a prototype chain is null.

## 2. Implement your versions of the following Array methods (choose 6).
### map
```js
Array.prototype.myMap = function(callbackFunc, thisArg) {
    let res = [];
    if (thisArg) {
        callbackFunc = callbackFunc.bind(thisArg);
    }
    for (let i = 0; i < this.length; i++) {
        res.push(callbackFunc(this[i], i, this));
    }
    return res;
}
```
### filter
```js
Array.prototype.myFilter = function(callbackFunc, thisArg) {
    let res = [];
    if (thisArg) {
        callbackFunc = callbackFunc.bind(thisArg);
    }
    for (let i = 0; i < this.length; i++) {
        if (callbackFunc(this[i], i, this)){
            res.push(this[i]);;
        }
    }
    return res;
}
```
### reduce
```js
Array.prototype.myReduce = function(callbackFunc, initialValue) {
    if (initialValue === undefined && this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
    }
    let res = null;
    for (let i = 0; i < this.length; i++) {
        if (i === 0) {
            if (!initialValue === undefined) {
                res = callbackFunc(initialValue, this[i], i, this);
            }
            else {
                res = this[i];
            }
        }
        else {
            res = callbackFunc(res, this[i], i, this);
        }
    }
    return res;
}
```
### every
```js
Array.prototype.myEvery = function(callbackFunc, thisArg) {
    if (thisArg) {
        callbackFunc = callbackFunc.bind(thisArg);
    }
    for (let i = 0; i < this.length; i++) {
        if (!callbackFunc(this[i], i, this)) return false;
    }
    return true;
}
```
### find
```js
Array.prototype.myFind = function(callbackFunc, thisArg) {
    if (thisArg) {
        callbackFunc = callbackFunc.bind(thisArg);
    }
    for (let i = 0; i < this.length; i++) {
        if (callbackFunc(this[i], i, this)) return this[i];
    }
    return undefined;
}
```
### includes
```js
Array.prototype.myIncludes = function(searchElement, fromIndex=0) {
    for (; fromIndex < this.length; fromIndex++) {
        if (this[fromIndex] === searchElement) return true;
    }
    return false;
}
```
### join
```js
Array.prototype.myJoin = function(separator=",") {
    let res = "";
    for (let i = 0; i < this.length; i++) {
        res += this[i];
        if (i < this.length - 1) {
            res += separator;
        }
    }
    return res;
}
```
### pop
```js
Array.prototype.myPop = function() {
    if (this.length === 0) return undefined;
    const poped = this[this.length - 1];
    this.length = this.length - 1;
    return poped;
}
```
### push
```js
Array.prototype.myPush = function(...args) {
    const oldLength = this.length;
    this.length += args.length;
    for (let i = oldLength; i < this.length; i++) {
        this[i] = args[i - oldLength];
    }
    return this.length;
}
```
### reverse
```js
Array.prototype.myReverse = function() {
    let [l, r] = [0, this.length - 1];
    while (l < r) {
        [this[l], this[r]] = [this[r], this[l]];
        l++;
        r--;
    }
    return this
}
```
### slice
```js
Array.prototype.mySlice = function(start=0, end=this.length) {
    if (start < -this.length) start = 0;
    else if (-this.length <= start && start < 0) start += this.length;
    
    if (end < -this.length) end = 0;
    else if (-this.length <= end && end < 0) end += this.length;
    else if (end >= this.length) end = this.length;
    
    let res = [];
    while (start < end) {
        res.push(this[start]);
        start++;
    }
    return res;
}
```

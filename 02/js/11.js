// 11. break 和 continue 的不同
console.log(document.title);

var i;
for(i=1; i<11; i++) {
    //console.log(i);
}

for(i=1; i<11; i++) {
    if(i === 5) break;
    //console.log(i);
}

for(i=1; i<11; i++) {
    if(i === 5) continue;
    //console.log(i);
}

for(i=1; i<11; i++) {
    if(i !==5)
        console.log(i);
}

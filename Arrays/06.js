function solve(data){

    data.sort((a,b) => a.length - b.length || a.localeCompare(b));

    return data.join('\n');
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));
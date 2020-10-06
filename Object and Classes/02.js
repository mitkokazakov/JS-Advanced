function solve(data) {

    let HTMLTable = [];

    HTMLTable.push('<table>');

    for (const line of data) {
        const currentObject = JSON.parse(line);
        const currentName = currentObject.name;
        const currentPosition = currentObject.position;
        const currentSalary = currentObject.salary;

        HTMLTable.push('\t<tr>');
        HTMLTable.push(`\t\t<td>${currentName}</td>`)
        HTMLTable.push(`\t\t<td>${currentPosition}</td>`)
        HTMLTable.push(`\t\t<td>${currentSalary}</td>`)
        HTMLTable.push('\t</tr>');

        
    }

    HTMLTable.push('</table>');

    return HTMLTable.join('\n')

}


let test1 = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'];

console.log(solve(test1));
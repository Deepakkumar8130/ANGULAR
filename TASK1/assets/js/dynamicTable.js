
let rows = parseInt(prompt("Enter no. of rows : ","ENTER ROWS"));
let cols = parseInt(prompt("Enter no. of columns : ","ENTER COLS"));

// console.log(rows);
// console.log(cols);


function generateTable(){
    let table = "";
    for(let i=1; i<=rows; i++){
        table += "<tr>";
        for(let j=1; j<=cols; j++){
            table +=`<td>${j}</td>`;
        }
        table +="</tr>";
    }
    return table;
}

document.write(`

    <div class='container-fluid m-5'>
        <div class='card'>
            <div class='card-body'>
                <table class='table table-bordered'>
                    <tbody>
                        ${generateTable()}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

`);
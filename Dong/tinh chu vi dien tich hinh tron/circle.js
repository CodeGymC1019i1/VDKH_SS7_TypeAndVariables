let radius = parseInt(prompt("Input radius "));
function acr() {
    let area = Math.PI * Math.pow(radius,2);
    document.write(area.toString() + "<br>");
}
function perimeter() {
    let per  = 3.14 * radius * Math.PI;
    document.write(per.toString() + "<br>" );
}
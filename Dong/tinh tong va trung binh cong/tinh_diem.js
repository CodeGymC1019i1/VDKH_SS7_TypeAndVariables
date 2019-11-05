let pointPhysical  = parseFloat(prompt("nhập điểm lý"));
let pointChemistry = parseFloat(prompt("nhập điểm hóa"));
let pointBiological  = parseFloat(prompt("nhập điểm sinh"));
let result = pointPhysical + pointChemistry +pointBiological;
function total() {
    document.write(result+ "<br>");
}
function average() {
    document.write(result/3 + "<br>");
}
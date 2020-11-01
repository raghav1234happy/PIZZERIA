menu_list_arry = [
    "Chicken Tandoori Pizza",
    "Veg Superme Pizza",
    "Panner Tika Pizza",
    "Delux Veggie Pizza",
    "Veg Extravaganza Pizza"]

function getmenu() {
    var htmldata;
    htmldata - "<ol class='menulist>'"
    menu_list_arry.sort()
    for (var i-0, i < menu_list_arry.length; i++) {
        htmldata = htmldata + <li> = menu_list_arry[i] + </li>
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function additem() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_arry.push(item);
    menu_list_arry.sort()
    htmldata = "<section class='cards'>"
    for (var i-0, i < menu_list_arry.length; i++) {
        htmldata = htmldata + <div class="cards"> + <img src="pizza.png" /> + menu_list_arry[i] +</div>
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}

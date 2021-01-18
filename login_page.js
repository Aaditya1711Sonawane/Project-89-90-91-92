function add_user(){
    player1_name = document.getElementById("input_pla_1").value;
    player2_name = document.getElementById("input_pla_2").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    if (player1_name != "" && player2_name != "")
    {
        window.location.replace("game_page.html");
    }
    else
{
    window.alert("Please enter both the user name")
}
}

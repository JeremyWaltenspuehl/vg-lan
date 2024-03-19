const rpl_players = nodecg.Replicant('smash_players')

rpl_players.on('change', () =>{
    document.getElementById('in_p0_clan').value = rpl_players.value.Player0.Tag
    document.getElementById('in_p0_name').value = rpl_players.value.Player0.Name
    document.getElementById('in_p1_clan').value = rpl_players.value.Player1.Tag
    document.getElementById('in_p1_name').value = rpl_players.value.Player1.Name
    document.getElementById('in_p2_clan').value = rpl_players.value.Player2.Tag
    document.getElementById('in_p2_name').value = rpl_players.value.Player2.Name
    document.getElementById('in_p3_clan').value = rpl_players.value.Player3.Tag
    document.getElementById('in_p3_name').value = rpl_players.value.Player3.Name
})

function update_p0(){
    rpl_players.value.Player0.Tag = document.getElementById('in_p0_clan').value
    rpl_players.value.Player0.Name = document.getElementById('in_p0_name').value
}

function update_p1(){
    rpl_players.value.Player1.Tag = document.getElementById('in_p1_clan').value
    rpl_players.value.Player1.Name = document.getElementById('in_p1_name').value
}

function update_p2(){
    rpl_players.value.Player2.Tag = document.getElementById('in_p2_clan').value
    rpl_players.value.Player2.Name = document.getElementById('in_p2_name').value
}

function update_p3(){
    rpl_players.value.Player3.Tag = document.getElementById('in_p3_clan').value
    rpl_players.value.Player3.Name = document.getElementById('in_p3_name').value
}

function update_all(){
    update_p0()
    update_p1()
    update_p2()
    update_p3()
}
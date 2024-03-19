const rpl_apex_teams = nodecg.Replicant('apex_teams');

rpl_apex_teams.on('change', () =>{
    for (let i = 0; i < rpl_apex_teams.value.length; i++) {
        let id = 'in_t' + (i + 1) + '_name';
        document.getElementById(id).value = rpl_apex_teams.value[i]
    }
})

function update_single(id) {
    let id_2 = 'in_t' + (id + 1) + '_name';
    rpl_apex_teams.value[id] = document.getElementById(id_2).value
}
function update_all(nr){
    for (let i = 0; i < nr; i++){
        let id = 'in_t' + (i + 1) + '_name';
        rpl_apex_teams.value[i] = document.getElementById(id).value
    }
}
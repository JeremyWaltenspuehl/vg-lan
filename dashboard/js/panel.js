const commentatordata = nodecg.Replicant('commentatordata');
NodeCG.waitForReplicants(commentatordata).then(() => {
    commentatordata.on('change', (value) => {
        document.getElementById('in_c0_clan').value = value.commentator1.Tag
        document.getElementById('in_c0_name').value = value.commentator1.Name
        document.getElementById('in_c1_clan').value = value.commentator2.Tag
        document.getElementById('in_c1_name').value = value.commentator2.Name
        if (value.second === true){
            document.getElementById('chk_visible').checked = true
        }
        else if (value.second === false) {
            document.getElementById('chk_visible').checked = false
        }
    })

})

document.getElementById('chk_visible').addEventListener('change', () => {
    if( document.getElementById('chk_visible').checked === true){
        commentatordata.value.second = true
    }
    else if (document.getElementById('chk_visible').checked === false) {
        commentatordata.value.second = false
    }
})

/*
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
*/
function update_p0(){
    commentatordata.value.commentator1.Tag = document.getElementById('in_c0_clan').value
    commentatordata.value.commentator1.Name = document.getElementById('in_c0_name').value
}

function update_p1(){
    commentatordata.value.commentator2.Tag = document.getElementById('in_c1_clan').value
    commentatordata.value.commentator2.Name = document.getElementById('in_c1_name').value
}


function update_all(){
    update_p0()
    update_p1()
}
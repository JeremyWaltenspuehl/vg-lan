const rpl_obs_connection = nodecg.Replicant('ObsConnection', 'rl-master')
const rpl_SceneNames = nodecg.Replicant('SceneNames')

function connect_to_obs() {
    nodecg.sendMessageToBundle('connect-obs', 'rl-master')
}
nodecg.listenFor('obs_event', 'rl-master', (obs_event) =>{
    document.getElementById('obs_logs').value += "\n" + obs_event;
})
rpl_obs_connection.on('change', ()=>{
    if (rpl_obs_connection.value.status === true) {
        document.getElementById('obs_status').innerHTML = "Connected"
    }
    else if (rpl_obs_connection.value.status === false) {
        document.getElementById('obs_status').innerHTML = "Disconnected"
    }
})
function switch_to_break(break_scene_name){
    nodecg.sendMessageToBundle('SetScene', 'rl-master', break_scene_name);
}
rpl_SceneNames.on('change', () => {
    document.getElementById('break_scene').value = rpl_SceneNames.value.BreakScene;
    document.getElementById('rl_scoreboard').value = rpl_SceneNames.value.RlScoreBoard;
});

function update_scene_names(break_scene_name, rl_scoreboard_scene_name){
    rpl_SceneNames.value.BreakScene = break_scene_name;
    rpl_SceneNames.value.RlScoreBoard = rl_scoreboard_scene_name;
}
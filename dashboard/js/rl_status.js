const rpl_rl_host = nodecg.Replicant('rpl_rl_host', 'rl-master')

rpl_rl_host.on('change', () =>{
    document.getElementById('rl_host').value = rpl_rl_host.value
})
function connect_to_rl() {
    nodecg.sendMessageToBundle('rl_master_connect_rl_ws', 'rl-master', document.getElementById('rl_host').value)
}
nodecg.listenFor('rl-master_new_rl_event', 'rl-master', (messageData) =>{
    document.getElementById('rl_host_log').value += '\n' + messageData
})
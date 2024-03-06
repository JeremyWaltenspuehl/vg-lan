function connect_to_obs() {
    nodecg.sendMessageToBundle('connect-obs', 'rl-master')
}
nodecg.listenFor('obs_event', 'rl-master', (obs_event) =>{
    document.getElementById('obs_logs').value += "\n" + obs_event;
})
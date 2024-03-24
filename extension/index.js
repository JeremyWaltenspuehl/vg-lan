module.exports = function (nodecg) {
    nodecg.Replicant('smash_players', {defaultValue: {
        Player0:{
            Tag: "TAG1",
            Name: "Peiass1"
        },
        Player1:{
            Tag: "TAG2",
            Name: "Peiass2"
        },
        Player2:{
            Tag: "TAG3",
            Name: "Peiass3"
        },
        Player3:{
            Tag: "TAG4",
            Name: "Peiass4"
        }
        }
    });
    nodecg.Replicant('SceneNames', {defaultValue:
        {
            BreakScene: "break",
            RlScoreBoard: "rl_scoreboard"
        }
    })
};

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
    nodecg.Replicant('apex_teams', {defaultValue: 
        ["Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7", "Team8", "Team9", "Team10", "Team11", "Team12", "Team13", "Team14", "Team15", "Team16", "Team17", "Team18", "Team19", "Team20",]
});
    nodecg.Replicant('SceneNames', {defaultValue:
        {
            BreakScene: "break",
            RlScoreBoard: "rl_scoreboard"
        }
    })
};

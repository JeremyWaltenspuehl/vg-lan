module.exports = function (nodecg) {
    nodecg.Replicant('commentatordata', {defaultValue: {
        commentator1:{
            Tag: "TAG1",
            Name: "Peiass1"
        },
        commentator2:{
            Tag: "TAG2",
            Name: "Peiass2"
        },
        second: true
        }
    });
    nodecg.Replicant('SceneNames', {defaultValue:
        {
            BreakScene: "break",
            RlScoreBoard: "rl_scoreboard"
        }
    })
};

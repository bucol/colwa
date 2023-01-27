module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    use: "<query>",
    desc: "Twitter Comment Maker",
    type: "creator",
    example: "Contoh %prefix%command gausah sok asik bgst",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/maketweet", {
            text: text, 
            text2: m.pushName
        }, "apikey"), "", m)
    },
    isQuery: true
}

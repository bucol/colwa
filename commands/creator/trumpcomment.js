module.exports = {
    name: "trumpcomment",
    alias: ["trc","trumptweet"],
    use: "<query>",
    desc: "Trump Twitter Comment Maker",
    type: "creator",
    example: "Contoh %prefix%command gausah sok asik bgst",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/trump", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}

module.exports = {
    name: "kannagen",
    alias: ["kannagenerator"],
    use: "<query>",
    desc: "Kanna Comment Maker",
    type: "creator",
    example: "Contoh %prefix%command bucol",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/kannagen", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}

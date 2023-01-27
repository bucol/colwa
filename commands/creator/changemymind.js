module.exports = {
    name: "changemymind",
    alias: ["cmm"],
    use: "<query>",
    desc: "Change my mind Maker",
    type: "creator",
    example: "Contoh %prefix%command bucol ganteng",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/changemymind", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}

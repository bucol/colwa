const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nhentai",
    alias: ["nh"],
    use: "<query>",
    desc: "Search Anime From Nhentai",
    type: "animeweb",
    example: `Contoh\n%prefix%command 114512`,
    start: async(killua, m, { text }) => {
        try {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nhentai", { query: text }, "apikey"))
            let caption = `Nhentai Search :\n\n`
            let i = fetch.result
            caption += `⭔ Title : ${i.title ?? ""}\n`
            caption += `⭔ Native Title : ${i.nativeTitle ?? ""}\n`
            caption += `⭔ Pages Length : ${i.pages.length}\n`
            caption += `⭔ Upload Date : ${i.upload_date}\n`
            caption += `⭔ Link : ${i.link}\n`
            let buttons = [
                {buttonId: `nhpdf ${text}`, buttonText: { displayText: 'Download PDF'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: i.thumbnails[0] },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        } catch {
            global.mess("error", m)
        }
    },
    isQuery: true
}
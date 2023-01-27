module.exports = {
    name: "menu",
    alias: ["help","?"],
    desc: "List all command",
    type: "main",
    start: async(killua, m, { commands, args, prefix, text, toUpper }) => {
        const { pushName, sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`)
            if (cmd.use) data.push(`*Use:* ${cmd.use}`);
            if (cmd.desc) data.push(`*Deskripsi :* ${cmd.desc}\n`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            return m.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")}`)
        } else {
            let teks = `Halo, ${pushName === undefined ? sender.split("@")[0] : pushName}\nberikut Command Listnya\n\n`

            for (let type of commands.type) {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `│⭔ ${prefix + cmd.name} ${cmd.use ? " " + cmd.use : ""}`).join("\n")}\n`
                teks += `│\n`
                teks += `└───────⭓\n\n`
            }

            teks += `Send ${prefix}help followed by a command name to get detail of command, contoh: ${prefix}help sticker`;
            
            let templateButtons = [
                {index: 1, urlButton: { displayText: "Donasi", url: "https://saweria.co/bucol" }},
                {index: 2, urlButton: { displayText: "Instagram Owner", url: "https://instagram.com/buc0l" }},
                {index: 3, urlButton: { displayText: 'Official Grup WA', url: "https://chat.whatsapp.com/LkZJPWvD2WzGO4F9b12lV3" }},
            ]

            let templateMessage = {
                image: { url: 'https://user-images.githubusercontent.com/37924597/215045253-03d936dc-f727-4ff0-83d2-aac4a1046170.jpg' },
                caption: teks,
                footer: config.footer,
                templateButtons: templateButtons
            }

            killua.sendMessage(m.from, templateMessage, { quoted: m })
        }
    },
    noLimit: true,
}

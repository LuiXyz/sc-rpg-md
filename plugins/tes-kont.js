const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + `N:;Lui;;;`
                    + `FN:AhmdLui ルイ\n` // full name
                    + 'item1.X-ABLabel:Mau masukin bot ke gc Lu chat Gw\n'
                    + 'URL;Web gwejh: doujindesu.xxx\n'
                    + 'EMAIL;Email Owner: njircoeg397@gmail.com\n'
                    + 'ORG:Lord Lui ルイ;\n' // the organization of the contact
                    + `TEL;type=CELL;type=VOICE;waid=6282146092695:+6282146092695\n` // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lol Animals', contacts: [{ vcard }] } }, { quoted: m })
}

handler.command = /^(tes)$/i

module.exports = handler
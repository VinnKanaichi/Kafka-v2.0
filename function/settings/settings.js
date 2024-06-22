import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // pembersih sampah sessions 
 clearTmp: true, // pembersih sampah tmp
 addReply: true, // buat with thumbnail di pesan
 idgc: '-' // id gc buat join only
 }

global.info = {
 nomerbot : '62887082208184',
 pairingNumber : '62887082208184',
 figlet: 'KAFKA - MD ', // buat tampilan konsole start
 nomorwa : '6288708220818',
 nameown : 'ᴘᴜᴛʀᴀᴏғᴄ 汉 」',
 nomerown : '6288708220818',
 packname : 'sticker by ',
 author : 'ᴘᴜᴛʀᴀᴏғᴄ 汉 」',
 namebot : '𝙆𝘼𝙁𝙆𝘼 - 𝙈𝘿',
 wm : 'ᴘᴜᴛʀᴀᴏғᴄ 汉 」',
 stickpack : 'Whatsapp',
 stickauth : '𝙆𝘼𝙁𝙆𝘼 - 𝙈𝘿',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 didyou : 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
 rulesBot : 'https://telegra.ph/file/c90e57ccb9b671b19ad41.png',
 thumbnail : 'https://telegra.ph/file/68f606e9d694706b433c1.png',
 thumb : 'https://telegra.ph/file/68f606e9d694706b433c1.png',
 logo : 'https://telegra.ph/file/68f606e9d694706b433c1.png',
 unReg : 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi : 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess : 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 access : 'https://telegra.ph/file/ae70651c7939aad1478bf.jpg',
 tqto : 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg',
 spotify : 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
 weather : 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg',
 gempaUrl : 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg',
 akses : 'https://telegra.ph/file/ae70651c7939aad1478bf.jpg',
 wel : 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4',
 good : 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Sosmed
global.url = {
 sig: 'https://instagram.com/p.u.t8',
 sgh:  'https://github.com/Tiooxy',
 sgc: 'https://chat.whatsapp.com/FCU5y0ZLt8WDaKUSh4saSY'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/tiooxy',
 ptrakterr: '-',
 pdana: '088708220818'
}
// Info Wait
global.msg = {
 wait: '⏱️ *Mohon bersabar*\n\> Sedang menjalankan perintah dari *User*!',
 eror: '🤖 *Information Bot*\n\> Mohon maaf atas ketidaknyamanan dalam menggunakan *Nightmare Bot* . Ada kesalahan dalam sistem saat menjalankan perintah.'
}
 
// api_id web suntik
global.apiId = {
 smm: '-',
 lapak: '-'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw klo abis ganti sendiri 
 uptime: '-',
 xyro: '-',
 lol: '-',
 smm: '-',
 lapak: '-',
 bing: '-'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.night-team.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "-"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
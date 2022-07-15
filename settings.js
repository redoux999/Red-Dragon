//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is APUUSY BOT🔥
My Creator is Kumuthu Prabhasha😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+212776573954'] //Owner number in aive msg
global.premium = ['+212776573954'] //Owner Number info
global.ownernomer = '+212776573954' //Owner Number <<<

global.ownername = 'ᴏᴠᴇʀᴢᴀ²²' //Owner Name
global.botname = ' ☬𝔞𝔭𝔲𝔰𝔶 𝔟𝔬𝔱' //Bot Name
global.button = 'instagram📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://instagram.com/ab6y._/'//Change Your Button's URL

global.region = 'Morocco casablanca' //Country Region

global.packname = '☬𝔞𝔭𝔲𝔰𝔶 𝔟𝔬𝔱' //Bot Pacage Name
global.author = 'ᴏᴠᴇʀᴢᴀ²²' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'Session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🥲' // Menu emoji
global.footer = '©_ᴏᴠᴇʀᴢᴀ.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'gha ladmin li9ad idirha!😉',
    botAdmin: 'khassni nwelli admin😥',
    owner: 'gha mol lgroup li9ad idirha!😉',
    group: 'had l3aybate kidaro gha flgroupe!',
    private: 'had l3aybate kidaro gha fprivate chat!',
    bot: 'kaydirha gha lboot a2bi😝',
    wait: '🤬tssna aw9',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

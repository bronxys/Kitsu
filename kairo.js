/*｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼
💙⃤𝙀𝙐 𝙎𝘼𝙉𝘿𝙍𝙊 𝘽𝙊𝙏 𝙉𝘼𝙊 𝙋𝙀𝙍𝙈𝙄𝙏𝙊 𝙍𝙀𝙑𝙀𝙉𝘿𝙀𝙍 𝙊𝙐 𝙍𝙀𝙋𝘼𝙎𝙎𝘼𝙍 𝙀𝙎𝙎𝘼 𝙑𝙀𝙍𝙎𝘼𝙊.💙⃤
｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼*/

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, prepareWAMessageMedia, makeInMemoryStore, downloadMediaMessage} = require('@whiskeysockets/baileys');

// ========[ MÓDULOS E FUNÇÕES ]======= \\

const { fs, Boom, chalk, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, vip, getBase64, createExif, writeExifImg, addLimit, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, upload, getGroupAdmins, getMembros, sendPoll, getRandom, banner, banner2, banner3, temporizador, chyt, rgtake, kyun, TimeCount, simih, botoff, advices, colors, RSM_FUNC, infoSystem, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, rmLetras, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, AssemblyAI, level2, chaves, grupos, aluguel, obeso, countDays, timeDate, path, Limit_CMD, capitalizeFirstLetter, shuffle } = require('./exports.js');

// ======[ JS-MENUS/INFORMAÇÕES ]====== \\

const { linguagem, mess, getInfo, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, ftmenu, premium, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, votacao, antispam, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, sabrpg, autorpg, bcbet, minerar, rg_pescaria, pescaria, cavalosrpg, elitepasse, coderpg, galosrpg, roubosrpg } = require('./exports.js');

//_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_--_-_-_-_-_-_-_-\\

var { antipv, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./settings/nescessario.json");

const music = JSON.parse(fs.readFileSync("./database/data/music.json"))

const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail } = require("./settings/links_img.json");

//api zero
const API_KEY_ZEROTWO = "SANDRO2025L";

const PNSPUXADA = "suakey";

const API_SANDRO_MD = "SANDRO_BOT2025vv";

const API_KEY_BLACK = "SANDROMD_2025_LUANA";

var downoff = 'Sistema apresenta instabilidades... Pfvr, volte mais tarde.'

var downon = 'Sistema cancelou a operação, devido a demora na resposta...'

const { NomeDoBot, NickDono, prefix, API_KEY_sandro, channel, fotobot, zerosite, blacksite} = require("./settings/settings.json");

const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./settings/media/audios.json')

const { Aki } = require('aki-api')
const jogo = {jogador: "", now: true}
const II = "```"; // Efeito para o texto, ou seja, usando 2 vezes a definição ${II} ocorre uma mudança em seu design.

const sendVideo = (id, link, desc, info) => {
    return sandro.sendMessage(id, {video: {url: link}, caption: desc, mimetype: 'video/mp4'}, {quoted: info})
}
  
const sendAudio = (id, link, tipo, info) => {
    return sandro.sendMessage(id, {audio: {url: link}, mimetype: tipo}, {quoted: info})
}
  
const sendImage = (id, ytb, cap) => {
    sandro.sendMessage(from, {image: {url: ytb}, caption: cap}, {quoted:info})
}

const sendSticker = (from, filename, info) => {
    sandro.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

async function sendUrlText(id, texto, title, desc, foto, link, info) {
    sandro.sendMessage(id, {text: texto, contextInfo: {externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(foto), mediaType: 1, showAdAttribution: true, sourceUrl: link}}}, {quoted: info})
}

const alerandom = (nmr) => {
    return Math.floor(Math.random()*nmr)
}

const { mensagens, enviar, sortear } = require("./settings/message.js") // Mensagens do bot 

var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciarSAB() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function startConnect() {

module.exports = sandro = async(sandro, folderUserAuth) => {
module.exports = upsert = async(upsert, sandro) => {
async function startFunctionSab() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(sandro, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

const VRF_JSON_GRUPO = fs.existsSync(`./database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
sandro.sendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
case 30:
await delay(1000);
sandro.sendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await sandro.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {var prefix = setting.prefix} else if(!isGroup) {var prefix = setting.prefix};

var isCmd = body.trim().startsWith(prefix);

const sender = isGroup ? info.key.participant: from

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");


//======================================\\
try {var groupMetadata = isGroup ?  await sandro.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';
// Verifique se está em um grupo e se a variável groupMetadata está definida

let groupDesc = '';

if (isGroup) {
  if (typeof groupMetadata !== 'undefined' && groupMetadata !== null) {
    groupDesc = groupMetadata.desc || ''; // Define a descrição se existir, senão vazio
  }
}

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await sandro.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//=====================================\\

//=================> Funções de Grupo 🥋

const dirGroup = `./database/grupos/activation_gp/${from}.json`

const nescj = "./settings/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
    name: groupName,
    groupId: from, 
    x9: false, 
    antiimg: false, 
    antivideo: false,
    antiaudio: false, 
    antisticker: false,
    antidoc: false,
    antictt: false,
    antiloc: false, 
    antilinkgp: false,
    antilinkhard: false, 
    antifake: false, 
    antiporno: false,
    Odelete: false, 
    antispam: false, 
    antinotas: false, 
    anticatalogo: false, 
    visuUnica: false, 
    registrarFIGUS: false, 
    soadm: false, 
    listanegra: [], 
    advertir: [], 
    prefixos: [`${setting.prefix}`],
    advertir2: [], 
    legenda_estrangeiro: "0",
    legenda_documento: "0", 
    legenda_video: "0",
    legenda_imagem: "0", 
    multiprefix: false, 
    forca_ofc: [{
        acertos: 0, 
        erros: 0, 
        palavra: [], 
        escreveu: [], 
        palavra_ofc: 0, 
        dica: 0, 
        tema: 0
      }], 
    ausentes: [], 
    forca_inc: false,  
    antipalavrao: {
        active: false,
        palavras: []
     },
     limitec: {
        active: false,
        quantidade: null
     },
    wellcome: [{
        bemvindo1: false,
        legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
        legendasaiu: 0
      },
      {
        bemvindo2: false,
        legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
        legendasaiu: 0
      }],
    simi1: false, 
    simi2: false,
    autosticker: false, 
    autoresposta: false,
    jogos: false, 
    level: false,
    bangp: false, 
    nsfw: false,
    aluguel: true
}]
    fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}


function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

function sets(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

function ses(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(ADMS/DONO/ETC..CONST)=======\\
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.numerodono+"@s.whatsapp.net"

const isVip = vip.map(i => i.id).includes(sender) || SoDono

const DonoOficial = dfndofc.includes(sender) 

const isPremium = premium.map(i => i.id).includes(sender) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isBanned = ban.includes(sender)

const isConsole = nescessario.consoleoff

const isVisualizar = nescessario.visualizarmsg

const isVerificado = nescessario.verificado

const isWelcomePrivate = nescessario.welcomepv

const isAudioMenu = nescessario.menu_audio

const isAntiPv = nescessario.antipv 

const isAntiPv3 = nescessario.antipv3

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const isAnticall = nescessario.anticall

const TOKEN_GPT = nescessario.TOKEN_GPT

const isCmdPremium = nescessario.cmd_premium

const isBlockCmdG = nescessario.blockCmdG

const isChVip = isVip ? "✓": "X"

//============(FUNÇÕES)============\\

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm : undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined

const isSabCityOFF = !JSON.stringify(autorpg).includes(from) || autorpg[autorpg.map(i => i.id).indexOf(from)].rpg

//============(VERIFICADOS)============\\

//QUOTED DA META AI
//KAIRO BOT
const selinho = { 
"key": {
"participant": "13135550002@s.whatsapp.net",
"remoteJid": "status@broadcast", 
"fromMe": false, 
},
"message": {
"contactMessage": {
"displayName": "𝐒𝐀𝐍𝐃𝐑𝐎 𝐌𝐃 𝐕9", 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Meta AI;;;\nFN:Meta AI\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, 
"contextInfo": {
"forwardingScore": 1,
"isForwarded": true
}
}
}
}

const sabLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Usuário: ${pushname}`}}} 

const sabPhoto = {key: {participant : '0@s.whatsapp.net'}, message: {imageMessage: {caption: pushname}}}

const sabVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}

const sabContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}

const sabDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}} 

if(!isVerificado) {var selo = sabLive} else {var selo = info} 

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////

global.gabolehtoxic = ("./gabolehtoxic.mp3")
//CRIPTOGRAFIA DE PONTA A PONTA 

////////////////////////////////////////////




var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return

const reply = (texto) => {
sandro.sendMessage(from, { text: texto, contextInfo: {
forwardingScore: 100000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363418414776231@newsletter", newsletterName: 'KX API'}
}, 
mentions: [menc_os2],
mentions: [sender]
});
}

const similarityCmd = (txt) => {
cmd = rmLetras(txt)
data = [
{
comando: `"não encontrado"`,
porcentagem: 0
}
]
separar = [{maior: []}, {menor: []}]
for(a of allCases) {
corte = a
if(corte.length >= cmd.length) {
separar[0].maior.push(corte)
} else {
separar[1].menor.push(corte)
}
}
primeiro = []
total = 0
for(b = 0; b < cmd.length; b++) {
for(c of separar[0].maior) {
if(cmd[b] == c[b]) {
contadorcmd = 0
for(d of primeiro) {
if(c == d.cmd) {
d.quantidade += 1
contadorcmd += 1
total += 1
}
}
if(contadorcmd <= 0) primeiro.push({cmd: c, quantidade: 1})
}
}
}
for(e of separar[1].menor) {
for(f = 0; f < e.length; f++) {
if(cmd[f] == e[f]) {
zero = 0
for(d of primeiro) {
if(e == d.cmd) {
c.quantidade += 1
zero += 1
total += 1
}
}
if(contadorcmd <= 0) primeiro.push({cmd: e, quantidade: 1})
}
}
}
if(primeiro.length <= 0) return data
mapa = primeiro.map(i => i)
rank = mapa.sort((a, b) => (a.quantidade < b.quantidade) ? 0 : -1)
segundo = []
for(g of primeiro) {
if(g.quantidade == rank[0].quantidade) segundo.push(g.cmd)
}
por1 = ((total + rank.length) / allCases.length) * 100
por2 = (1 / segundo.length) * 100
final = porCentPorCent(por1, por2) * rank[0].quantidade
data[0].comando = prefix + segundo[alerandom(segundo.length)]
data[0].porcentagem = Number(final > 100 ? 100 : final).toFixed(1)
return data
}

const identifyAtSign = (number) => {
return number.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const divisores = (base) => {
  nmr = Number(base)
  caixa = []
  for(a = 0; a < nmr; a++) {
    for(b = 0; b < nmr; b++) {
      if(((a + 1) * (b + 1)) == nmr) caixa.push(a + 1)
    }
  }
  return caixa
}

const raiz = (base) => {
  nmr = Number(base)
  meta = nmr / 2
  total = 0
  for(i = 1; i < (meta + 1); i++) {
    if((i*i) == nmr) total += 1
  }
  if(total > 0) return true
  return false
}

const findRaiz = (base) => {
  nmr = Number(base)
  if(raiz(nmr)) {
    meta = nmr / 2
    caixa = []
    for(i = 1; i < (meta + 1); i++) {
      if((i*i) == nmr) caixa.push(i)
    }
    return caixa[0]
  } else return "O número não tem raiz"
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
sandro.sendMessage(from, { text: texto }, { quoted: info }).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return sandro.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}


const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
    var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
    var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
    var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
    var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
sandro.sendMessage(from, {sticker: {url: fileName}}, {quoted: selo})
}

const sendImage = (ytb) => {
sandro.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (idGroup, textINFO) => {
sandro.sendMessage(idGroup, {text: textINFO})
}

const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? sandro.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sandro.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sandro.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sandro.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sandro.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
sandro.sendMessage(idgp, {react: {text: emj, key: info.key}} )
}

const verificarN = async(sla) => {
const [result] = await sandro.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
sandro.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
sandro.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
sandro.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n↧ [☁️] Grupo:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(sandro, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n↧ [☁️] Grupo:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(sandro, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`));  
sandro.sendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: selo})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-sab") || info.key.fromMe && budy.includes("reiniciar-sab")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

if(!isPremium && nescessario.cmd_premium.includes(command)) return reply(enviar.msg.premium)


//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
sandro.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: selo}).catch(e => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('O comando foi bloqueado, entre em contato com a administração.')

///BLOCK CMD GLOBAL///
///(CRÉDITOS AO @KAIRO MD)///
if(isBlockCmdG.includes(command) && !SoDono) return reply('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')

////FIMMMMMMMMM/////

///// SISTEMA DE DINHEIRO /////
const { AdicionarGold, RemoverGold } = require("./arquivos/js/dinheiro.js")

///// FIMMMMMMMMMMMMM /////

const { color, bgcolor } = require('./arquivos/js/color.js')
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'

 if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));  

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));

if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

if(isGroup && info.message?.reactionMessage?.text) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REAÇÃO \x1b[1;37m]', color(`Emoji: " ${info.message.reactionMessage.text} "`, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

//menus
const { menu } = require("./menus/menu.js")
const { menu2 } = require("./menus/menu.js")
const { menudono } = require("./menus/menu.js")
const { adms } = require("./menus/menu.js")
const { menulogos } = require("./menus/menu.js")
const { brincadeiras } = require("./menus/menu.js")
const { figurinhas } = require("./menus/menu.js")
const { nsfw } = require("./menus/menu.js")
const { infodono } = require("./menus/menu.js")
const { menuprem } = require("./menus/menu.js")
const { efeitos } = require("./menus/menu.js")
const { semprefixo } = require("./menus/menu.js")
const { animes } = require("./menus/menu.js")
const { menulink } = require("./menus/menu.js")
const { rpgmenu } = require("./menus/menu.js")
const { downloads } = require("./menus/menu.js")
const { menubasico } = require("./menus/menu.js")
const { menupx } = require("./menus/menu.js")
const { menuff } = require("./menus/menu.js")
///

// ========= || Jogo da Velha || ======== \\
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo da velha termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

sandro.sendMessage(from, {text: chatWon}, {quoted: selo,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}

// ==========[ NAMORO ]==========\\
const namoro1 = JSON.parse(fs.readFileSync("./database/func/namoro1.json"))

const namoro2 = JSON.parse(fs.readFileSync("./database/func/namoro2.json"))

//aceitar namoro
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

//recusar namoro
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
}
}

//início do akinator

const akinator = JSON.parse(fs.readFileSync("./database/grupos/games/akinator.json"))

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish > 0) {
  if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Eu sabia cara, eu sou demais!`)
  } else if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Poxa não foi dessa vez... Quem sabe na próxima!️`)
  }
}



if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish <= 0 && Number(akinator[akinator.map(i => i.id).indexOf(from)].dia) === Number(moment.tz('America/Sao_Paulo').format('DD')) && isGroup) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(aki.progress <= 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[▒▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 20) per = `〔 *${aki.progress.toFixed(1)}%* 〕[██▒▒▒▒▒▒▒▒]`
  if(aki.progress > 30) per = `〔 *${aki.progress.toFixed(1)}%* 〕[███▒▒▒▒▒▒▒]`
  if(aki.progress > 40) per = `〔 *${aki.progress.toFixed(1)}%* 〕[████▒▒▒▒▒▒]`
  if(aki.progress > 50) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█████▒▒▒▒▒]`
  if(aki.progress > 60) per = `[██████▒▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 70) per = `[███████▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 80) per = `[████████▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 90) per = `[█████████▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress >= 90 || aki.currentStep >= 90) {
      await aki.win()
      jogo.now = true
      akinator[AB].finish += 1
      fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
      sandro.sendMessage(from, {image: {url: aki.answers[0].absolute_picture_path }, caption: `〔 ${aki.answers[0].name}: ${aki.answers[0].description} 〕\n–\n🧙🏻‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei?\n• ${II}Observação:{II} _Responda com "sim" ou "não", sem as aspas._`}, {quoted: info})
    } else {
      if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
        await aki.step("0")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
        await aki.step("1")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao sei" || budy2.toLowerCase() === "nsei" || budy2.toLowerCase() === "n sei") {
        await aki.step("2")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente sim" || budy2.toLowerCase() === "provavelmente s") {
        await aki.step("3")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente nao" || budy2.toLowerCase() === "provavelmente n") {
        await aki.step("4")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
    }
}

//
// LOADING

async function carregamento() {
txt1 = `𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`
var carre = [
`${txt1}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`@${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`]
let { key } = await sandro.sendMessage(from, {text: `Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: selo})
for (let i = 0; i < carre.length; i++) {
await sandro.sendMessage(from, {text: carre[i], mentions: [sender], edit: key });
}
}
// ==========[ ANAGRAMA ]==========\\

if(isGroup && fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)){
let dataA = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataA.palavraOriginal.slice(0,4).toUpperCase() && budy.toUpperCase() != dataA.palavraOriginal) return reply('Está perto...')
if(budy.toUpperCase() == dataA.palavraOriginal) { sandro.sendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado.\nA palavra original era: *${dataA.resposta}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
dataAB = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
sandro.sendMessage(from, {text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta?\n—\n• Anagrama: *${shuffle(dataAB.palavraOriginal)}*\n• Dica para ajudar a resolver o anagrama: *${dataAB.dica}*`}, {quoted: selo})
}, 5000)
}}

if(isGroup && fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)){
let dQ = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dQ.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dQ.original) return reply('está perto')
if(budy.toUpperCase() == dQ.original) { 
sandro.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou! O animal era: *${dQ.resposta}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}); fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
dataQA = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
wew = await getBuffer(dataQA.foto)
await sandro.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${dataQA.question}`}, {quoted: info})
}, 5000)
}
}

function gerarnum() {
  return Math.floor(Math.random() * 100) + 1;
  }

if(isGroup && fs.existsSync(`./database/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
sandro.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}); fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await sandro.sendMessage(from, {image: wew, caption: garticText}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
sandro.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)	
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
enigmaD = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:\n–\n${enigmaD.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://i.imgur.com/OqeFhHP.jpeg`)
await sandro.sendMessage(from, {image: wew, caption: enigmaTezt}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply('Tá perto hein! Tente novamente...')
if(budy.toUpperCase() == whatMusic.resposta) { 
sandro.sendMessage(from,{text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${wmusic.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${wmusic.dica}`
await sandro.sendMessage(from, {text: textM}, {quoted: selo})
}, 5000)
}
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

// Objeto para armazenar as advertências dos usuários
global.warnedUsers = global.warnedUsers || {};

if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
    if (Procurar_String.includes("chat.whatsapp.com/") || Procurar_String.includes("whatsapp.com/channel")) {
        if (isBot) return;

        link_dgp = await sandro.groupInviteCode(from);
        if (Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover..');

        // Apagar a mensagem do usuário
        await sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }});

        // Verificar se o usuário já foi advertido antes
        if (!global.warnedUsers[sender]) {
            global.warnedUsers[sender] = true; // Registrar advertência
            return sandro.sendMessage(from, { text: `⚠️ @${sender.split("@")[0]}, links e divulgação não são permitidos! Esta é sua única advertência. Caso envie novamente, será removido do grupo.`, mentions: [sender] });
        }

        // Se o usuário já foi advertido, ele será removido
        delete global.warnedUsers[sender]; // Remover advertência após remoção

        if (!JSON.stringify(groupMembers).includes(sender)) return;

        // Remover o usuário do grupo
        setTimeout(() => {
            sandro.groupParticipantsUpdate(from, [sender], 'remove');
        }, 1000);
    }
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}

//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

// PARA LIMPAR OS DADOS DOS USUÁRIOS QUE JÁ SAIU DO GRUPO...
async function ClearMembersInactive() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage, null, 2))
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const sendVideo = (id, link, desc, zero) => {
return sandro.sendMessage(id, {video: {url: link}, caption: desc, mentions: [sender], mimetype: 'video/mp4'}, {quoted: info})
}

const sendAudio = (id, link, tipo, zero) => {
return sandro.sendMessage(id, {audio: {url: link}, mimetype: tipo, ptt: true}, {quoted: info})
}

//=========(EVAL-EXECUÇÕES)=========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.blue('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return sandro.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return sandro.sendMessage(from, {text: bang}, {quoted: selo})
}

sandro.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return sandro.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
sandro.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sandro.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return sandro.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
sandro.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sandro.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return sandro.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
sandro.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sandro.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if (isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
  if (Procurar_String.includes("chat.whatsapp.com")) {
    link_dgp = await sandro.groupInviteCode(from)
    if (Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')
  }

  if (isCmd && isTrueFalse) return

  // Apagar a mensagem da pessoa
  try {
    await sandro.sendMessage(from, {
      delete: {
        remoteJid: from,
        fromMe: false,
        id: info.key.id,
        participant: sender
      }
    })
  } catch (e) {
    console.log("Erro ao apagar a mensagem:", e)
  }

  // Fechar grupo
  await sandro.groupSettingUpdate(from, 'announcement')
  setTimeout(() => {
    sandro.groupSettingUpdate(from, 'not_announcement')
  }, 1200)

  // Remover membro
  if (!JSON.stringify(groupMembers).includes(sender)) return
  await sandro.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ==================>

if (
  isAntiNotas &&
  budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) &&
  isBotGroupAdmins &&
  !isGroupAdmins &&
  !SoDono &&
  !info.message?.reactionMessage?.text &&
  budy2.length > 20
) {
  const verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
  if (verificar && budy.length < 100) return;

  if (IS_DELETE) {
    setTimeout(async () => {
      try {
        await sandro.sendMessage(from, {
          delete: {
            remoteJid: from,
            fromMe: false,
            id: info.key.id,
            participant: sender
          }
        });
      } catch (e) {
        console.log("Erro ao apagar a mensagem:", e);
      }
    }, 500);
  }

  if (!JSON.stringify(groupMembers).includes(sender)) return;
  
  sandro.groupParticipantsUpdate(from, [sender], 'remove');
}

//FINALZIN ===========================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return sandro.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
sandro.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
} else {
sandro.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sandro.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return sandro.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
sandro.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sandro.groupParticipantsUpdate(from, [sender], 'remove')
}

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 

//========(ANTI_LIGAR)========\\

if(!isGroup && isAnticall) {
sandro.ws.on('CB:call', async (B) => {
var msgcallblock = `./database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
sandro.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
sandro.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}

//====================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
sandro.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

const tempo2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')

if(tempo2 < "23:59:00"){
var dizendoTempo = 'Boa noite'
}
if(tempo2 < "19:00:00"){
var dizendoTempo = 'Boa noite'
}
if(tempo2 < "18:00:00"){
var dizendoTempo = 'Boa tarde'
}
if(tempo2 < "15:00:00"){
var dizendoTempo = 'Boa tarde'
}
if(tempo2 < "10:00:00"){
var dizendoTempo = 'Bom dia'
}
if(tempo2 < "05:00:00"){
var dizendoTempo = 'Bom Amanhecer'
}
if(tempo2 < "03:00:00"){
var dizendoTempo = 'Boa Madrugada'
}

/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
sandro.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 


/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user premium e o proprietário atual do bot. */
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {return}

//====================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && level2[level2.map(i => i.id).indexOf(sender)].block == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I 🥉"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II 🥉"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III 🥉"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I 🥈"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II 🥈"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III 🥈"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I 🥇"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II 🥇"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III 🥇"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV 🥇"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I 🌀"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II 🌀"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III 🌀"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV 🌀"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I 💎"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II 💎"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III 💎"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV 💎"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I 🔮"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II 🔮"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III 🔮"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV 🔮"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I 💙‍🔥"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II 💙‍🔥"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III 💙‍🔥"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV 💙‍🔥"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V 💙‍🔥"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I 👑"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II 👑"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III 👑"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV 👑"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V 👑"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I 🎓"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II 🎓"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I 🪄"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II 🪄"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III 🪄"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I ⚒️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II ⚒️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III ⚒️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I 🛰️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II 🛰️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III 🛰️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I 🪩"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II 🪩"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III 🪩"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X ⚜️"
if(newlevel >= 10000000) newpatente = "Veterano 🎩"
level2[AB].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
sandro.sendMessage(from, {text: `*🎉 LEVEL UP! 🎖️*\nParabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• O novo level foi alcançado por completar *${level2[AB].contador} XP.*\n• Sua nova patente foi desbloqueada, você agora é *${newpatente}*`, mentions: [sender]}, {quoted: selo})
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`🎉 Parabéns ${pushname}, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`)
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
sandro.sendMessage(from, {text: `*🎉 SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, mentions: [sender]}, {quoted: selo})
break
}
}

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
sandro.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
sandro.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

const isVotoDuelo = isGroup ? votacao.includes(from) : false

const AdicionarVoto = async(IDGRUPO, R1, R2, R3, R4, mention) => {
votacao.push(IDGRUPO)
fs.writeFileSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync('./database/func/votacao/voting.json', JSON.stringify(votacao))
await sleep(2000)
const otos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`))
otos.push({razao: R1 ? R1 : '-', votos: R2.trim() + '@s.whatsapp.net', votos2: R3.trim() + '@s.whatsapp.net', duracao: R4})
fs.writeFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`, JSON.stringify(otos))
setTimeout(async function() {
let voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`))
let verdade = voto.filter(V1 => V1.votacao == '01')
let falso = voto.filter(V2 => V2.votacao == '02')
if(verdade.length == falso.length) return mention(`*😱🗳️ VOTAÇÃO EMPATADA! 🗳️😱*\n• Os 2 usuários terminaram em empate, com a mesma pontuação de votos.\nEntão a decisão está na mão dos adms, se vai refazer a votação, ou decidir o ganhador de alguma forma.\n—\n• [1] Total de Votos do Usuário da Cor Vermelha ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• [2] Total de Votos do Usuário da Cor Azul ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*`)
mention(`*❌ VOTAÇÃO ENCERRADA! 🗳️*\n• Soma total de todos os membros que realizaram seus votos: *${verdade.length + falso.length}*\n—\n• Quantidade de Votos que Usuário Vermelho recebeu ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• Quantidade de Votos que o Usuário Azul recebeu ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*\n—\n🎉🌟 *@${verdade.length > falso.length ? otos[0].votos.split('@')[0] : otos[0].votos2.split('@')[0]}* acaba de ganhar a votação! Parabéns ao ganhador e aos ambos participantes... Se você não ganhou, não fique com raiva um dia você ganha! Confie em si próprio!`)
fs.unlinkSync(`./database/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
fs.writeFileSync("./database/func/votacao/voting.json", JSON.stringify(votacao)) /* Modificar.. */
}, R4*60*1000)
}

const DeletarVotos = (IDGRUPO) => {
processo = votacao.indexOf(IDGRUPO)
while(processo >= 0) {
votacao.splice(processo, 1)
processo = votacao.indexOf(IDGRUPO)
}
fs.writeFileSync(`./database/func/votacao/voting.json`, JSON.stringify(votacao)) /* Adicionar.. */
fs.unlinkSync(`./database/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
}

if(fs.existsSync(`./database/func/votacao/p_votos/${from}.json`)) {
if (budy2 === '1'){
let voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '01'})
fs.writeFileSync(`./database/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n—\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n—\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto +=  `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy2 === '2'){
const voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '02'})
fs.writeFileSync(`./database/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n–\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n–\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto += `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}}}	

if (isx9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await sandro.sendMessage(from, {text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./database/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))

var palavrasfr = JSON.parse(fs.readFileSync("./database/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []; 
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' ') {
blue.push(' ')
} else {
blue.push('_')
}
} 
dataGp[0].forca_ofc = [{
    acertos: 0, 
    erros: 0, 
    palavra: blue, 
    escreveu: [], 
    palavra_ofc: ALT_FR, 
    dica: palavrasfrc.dica, 
    tema: palavrasfrc.tema
}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isPremium && dataGp[0]?.Limitar_CMD) {
  
var TEMPO_A = Math.floor(Date.now() / 1000) 
 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)

if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

var TEMPO_M = TEMPO_A - TEMPO_D

var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60

if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

sandro.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await sandro.sendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

//====

sandro.sendImageMentions = (photo, text, mem, ids) => {(ids == null || ids == undefined || ids == false) ? sandro.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: { "mentionedJid": mem}}) : sandro.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: {"mentionedJid": mem}})
}

sandro.sendInteractiveTXT = async(idChat, mainText = '', footerText = '', quotedMessage = {}, buttonsParams = {}) => {
    try {
        await sandro.relayMessage(idChat, {interactiveMessage: {body: {text: mainText}, footer: {text: footerText}, contextInfo: quotedMessage, nativeFlowMessage: buttonsParams}}, {});
    } catch(errorMessage) {
        await reply(String(errorMessage));
    }
}

sandro.sendInteractiveIMG = async(imageDir, ChatID, definedText = '', footer = '', contextMessageInfo = {}, buttonsParams = {}) => {
    try {
        create = await prepareWAMessageMedia({image: fs.readFileSync(imageDir)}, {upload: sandro.waUploadToServer});
        imageCreate = create.imageMessage;
        await sandro.relayMessage(ChatID, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: imageCreate}, headerType: 'IMAGE', body: {text: definedText}, footer: {text: footer}, contextInfo: contextMessageInfo, nativeFlowMessage: buttonsParams}}, {});
     } catch(errorMessage) {
         return reply(String(errorMessage));
    }
 }
 
 //==


let isCodeKey = Array('aluguel', 'alugueis', 'alugar', 'alugarbot', 'lojinha', 'dono').some(i => i === command)

if(isModoAluguel && isCmd && !SoDono && !isCodeKey) {
if(!JSON.stringify(grupos).includes("sandrobot")) {
grupos.push({id: "sandrobot", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))}
if(!JSON.stringify(grupos).includes(from)) {
grupos.push({id: from, limite: 5, validado: false})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
AB = grupos.map(i => i.id).indexOf(from)
if(grupos[AB].validado == false) {
if(grupos[AB].limite <= 1) {
grupos.splice(AB, 1)
fs.writeFileSync("./database/grupos/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Visto que os senhores não se vêem interessados em adquirir uma chave, estou saindo do grupo...`)
await sleep(3000)
return sandro.groupLeave(from)
} else {
grupos[AB].limite -= 1
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
return mention(`Ops, esse grupo não está registrado no meu Banco de Dados.\n Por favor, caso esteja alugado ou deseja adquirir uma chave de ativação, entre em contato com o meu dono: *@${nmrdn.split('@')[0]}*`)
}}}

if(chaves.length > 0) {caixa = []
for(k of chaves) {
if(budy2.toUpperCase() === k.key) {
caixa.push(k.key)
}
}
if(VerificarJSON(chaves, caixa[0])) {
AD = chaves.map(i => i.key).indexOf(caixa[0])
timeday = chaves[AD].dias
pessoa = chaves[AD].cliente
infinity = chaves[AD].dias > 0 ? false : true
if(!VerificarJSON(grupos, "sandrobot")) {
grupos.push({id: "sandrobot", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(infinity == false) {
if(chaves[AD].tipo == 1 && isGroup) {
if(!VerificarJSON(aluguel, from)) {
aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`🌟🛒 O grupo foi registrado com sucesso ao aluguel! *Qualquer dúvida entre em contato com meu dono.*`)
await sleep(2000)
sandro.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else {
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + timeday
aluguel[AB].tempo += timeday
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para o grupo em meu banco de dados.`)
await sleep(2000)
sandro.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
}
}
        
if(chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map(i => i.id).indexOf("sandrobot")
if(!VerificarJSON(grupos[CD].gps, from)) {
if(!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({id: from})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`✅️🌟 Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`)
await sleep(2000)              
sandro.sendMessage(nmrdn, {text: `⚠️🌟️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split('@')[0]}*.\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else reply("[!] Este grupo já está registrado em meu banco de dados.")
} else reply("[!] Já foi validado neste mês uma cortesia neste grupo.")
}
} else {
if(chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O grupo foi salvo no meu banco de dados com sucesso!`)
}}}}

// Função para carregar os dados do Tinder do arquivo
function loadTinderData() {
    try {
        if (!fs.existsSync('./tinder.json')) {
            return {}; // Retorna um objeto vazio caso o arquivo não exista
        }

        const data = fs.readFileSync('./tinder.json', 'utf8');
        return JSON.parse(data); // Retorna os dados como objeto
    } catch (error) {
        console.error('Erro ao carregar os dados do Tinder:', error);
        return {}; // Retorna um objeto vazio em caso de erro
    }
}

// Função para salvar os dados do Tinder no arquivo
function saveTinderData(data) {
    try {
        fs.writeFileSync('./tinder.json', JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Erro ao salvar os dados do Tinder:', error);
    }
}

const resptinder = (txt) => {
  return txt.replace("#p#", prefix).replace("#p#", prefix).replace("#pc#", prefix+command).replace("#pc#", prefix+command)
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const { exec } = require('child_process');

async function mediaToWebp(inputPath, outputPath, isVideo = false) {
  return new Promise((resolve, reject) => {
    let cmd;
    if (isVideo) {
      cmd = `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease,fps=15" -ss 0 -t 10 -loop 0 -an -vsync 0 ${outputPath}`;
    } else {
      cmd = `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -loop 0 -an -vsync 0 ${outputPath}`;
    }

    exec(cmd, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

const { isFiltered, addFilter } = require('./arquivos/antiflood.js');

// Supondo que você já tem as variáveis:
if (isCmd) {
  if (isFiltered(sender)) {
    return mention(`Eii @${sender.split("@")[0]} espere 5 segundos para usar o próximo comando.`)
  } else {
    addFilter(sender);
  }
}

async function vipFunctionTempo() {
if(premium.length > 0) {
for (y of premium) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
if(y.infinito == false) {
if(y.dias > 1) {y.dias -= 1
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
} else {
sandro.sendMessage(y.id, {text: `⚠️ *ATENÇÃO!* Seus dias como usuário premium acabam de terminar, para realizar a renovação entre em contato com o número abaixo:\n• Contato: *http://wa.me/+55 31 9559-5444 *\n––\n• Desde já muito obrigado pela atenção, desculpe-me o incômodo.\n• *Essa mensagem é automática*, caso seja um engano entre em contato com número acima e saiba mais!`})
AB = premium.map(b => b.id).indexOf(y.id)
premium.splice(AB, 1)
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
}}}}}}

async function tmpCardAluguelFunction() {
if(aluguel.length > 0) {
for(x of aluguel) {if(x.save != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.cortesia == false) {
if(x.tempo > 1) {
if(Number(x.tempo) === 8 || Number(x.tempo) === 4 || Number(x.tempo) === 3 || Number(x.tempo) === 2) {
sandro.sendMessage(x.cliente, {text: `😿⚠️ Olá, acabo de verificar que nosso contrato no grupo *${aluguel[aluguel.map(m => m.id).indexOf(x.id)].nome}* termina em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}...\n• Não deixe de fechar contrato novamente com nossa equipe! *Qualquer dúvida, entre em contato com meu proprietário.*`})
}
x.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
x.tempo -= 1
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
sandro.sendMessage(x.id, {text: `*O tempo limite deste grupo acabou!😿💙* Para a renovação do contrato entre em contato com o meu dono: *wa.me/${nmrdn.split('@')[0]}*`})
sandro.sendMessage(nmrdn, {text: `🤓🗑️ Só passando pra avisar que o tempo limite do grupo *${x.nome}* expirou agora... Visto que o(a) *@${x.cliente.split('@')[0]}* não renovou o contrato, eu saí do grupo dele(a) e apaguei os registros! 🌟`, mentions: [x.cliente]})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
RT = aluguel.map(i => i.id).indexOf(x.id)
grupo = x.id
aluguel.splice(RT, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
sandro.groupLeave(grupo)
}}}}}

async function tmpCardCortesiaAluguel() {
if(aluguel.length > 0) {
for( x of aluguel ) {
if(x.save != Number(moment.tz('America/Sao_Paulo').format('HH')) && x.cortesia == true) {
if(x.tempo > 0) {
x.save = Number(moment.tz('America/Sao_Paulo').format('HH'))
x.tempo -= 1
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
sandro.sendMessage(x.id, {text: `🌟💳 *O cartão cortesia 24h deste grupo expirou!* Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono: *wa.me/${nmrdn.split('@')[0]}*`})
sandro.sendMessage(nmrdn, {text: `🤓🗑️Só passando pra avisar que o cartão cortesia do grupo *${x.nome}* expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados! 🌟`})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(aluguel.map(i => i.id).indexOf(x.id), 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
sandro.groupLeave(x.id)
}}}}}

vipFunctionTempo(); // Executar a função do premium temporário, quando os dias zerar.
tmpCardAluguelFunction(); // Quando o aluguel oficial do grupo (assinado), sem ser o teste.
tmpCardCortesiaAluguel(); // Quando o cartão cortesia do grupo acabar, ele irá notificar.

const { Sticker } = require("./arquivos/sticker.js");

async function renameContextSticker(pack, autor, txt = ``, info) {
  try {
    getfile = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    var _sticker = new Sticker()
    _sticker.addFile(getfile); 
    _sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
    resultadoSt = await _sticker.start();
    await sandro.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)})
    await fs.unlinkSync(resultadoSt[0].value)
  } catch(e) {console.log(e)}
}

// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){

case 'lgbt': {
    reagir(from, "🏳️‍🌈");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/lgbt?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🏳️‍🌈'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /lgbt:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'pixelate': {
    reagir(from, "🧊");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/pixelate?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🧊 Sua foto pixelada!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /pixelate:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'rip': {
    reagir(from, "🪦");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/rip?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🪦 Descanse em paz...'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /rip:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'jail': {
    reagir(from, "🚓");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/jail?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🚨 Preso em flagrante! Tá na cadeia agora, parceiro!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /jail:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'comunismo': {
    reagir(from, "🌟");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        // Usa sempre linkImagem
        const apiURL = `${zerosite}/api/canvas/comunismo?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const resultBuffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: resultBuffer,
            caption: '☭ Viva a revolução, camarada!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /comunismo:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'bolsonaro': {
    reagir(from, "🇧🇷");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        // Monta a URL da API com a imagem final
        const apiURL = `${zerosite}/api/canvas/bolsonaro?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🇧🇷 Toma aí, patriota!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /bolsonaro:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'gura':
    reagir(from, "🦈");

    try {
        // Pega o número do autor da mensagem
        const senderNumber = info.key.participant || info.key.remoteJid;
        const userPPUrl = await sandro.profilePictureUrl(senderNumber, 'image').catch(() => null);

        if (!userPPUrl) {
            return reply('❌ Não foi possível obter a foto de perfil.');
        }

        // Monta a URL da API com a foto de perfil do usuário
        const apiURL = `${zerosite}/gura-sticker?url=${encodeURIComponent(userPPUrl)}&apikey=${API_KEY_ZEROTWO}`;

        // Faz o fetch da imagem transformada pela API
        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar figurinha: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        // Envia como figurinha
        await sandro.sendMessage(from, {
            sticker: buffer
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /gura:', e);
        reply('❌ Ocorreu um erro ao tentar gerar a figurinha.');
    }
    break;

case 'take':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isQuotedSticker) return reply('Marque uma figurinha...')
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return reply(`Você ainda não definiu a sua marca ďágua personalizada para o uso desse comando.\n• Por favor, use o comando *rgtake sandro|md* para registrar sua marca ďagua personalizada de seus stickers.`)
renameContextSticker(rgtake[i8].mcdagua1, rgtake[i8].mcdagua2, `RENOMEADA COM SUCESSO`, info)
.catch((err) => {
reply(`❌ Erro, tente mais tarde`); 
})
break

case 'rgtake':
var [TP, TP2] = q.split("|")
rgtakergtake = []
for (i of rgtake) {rgtakergtake.push(i.usuario)}
if(rgtakergtake.indexOf(sender) >= 0) return reply(`Você já registrou sua marca ďagua, se deseja substituir use ${prefix}*rntake name|autor*`)
if(!q.includes("|")) return reply(`🔹 Uso correto: *${prefix + command} sandro|md*`)
if(!TP) return reply(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sandro|md*`)
if(!TP2) return reply(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sandro|md*`)
rgtake.push({usuario: sender, mcdagua1: TP, mcdagua2: TP2})
fs.writeFileSync("./arquivos/take.json", JSON.stringify(rgtake, null, 2))
reply(`Sucesso ao concluir o registro... Agora você pode usar o comando: *${prefix}take*`)
break

case 'rntake':
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return enviar(`Como você quer renomear algo que você não tem registro?`)
if(!q.includes("|")) return reply(`🔹 Uso correto: *${prefix + command} sandro|md*`)
var [MARCAD1, MARCAD2] = q.split("|")
if(!MARCAD1) return reply(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sandro|md*`)
if(!MARCAD2) return reply(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sandro|md*`)
rgtake[i8].mcdagua1 = MARCAD1
rgtake[i8].mcdagua2 = MARCAD2
fs.writeFileSync("./arquivos/take.json", JSON.stringify(rgtake, null, 2) + '\n')
reply(`Sua marca ďágua foi alterada para *"${MARCAD1}|${MARCAD2}"* com sucesso.`)
break


case 'tohd':
case 'hd':
case 'tornarhd':
    reagir(from, "🖼️");
    try {
    reply("Aguarde Um momento...")
        const imgbbApiKey = '99f4d15c4b7a31066c5d52546b0613de'; // Sua chave do ImgBB

        let media;
        if (isQuotedImage) {
            media = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
        } else if (isImage) {
            media = info.message.imageMessage;
        } else {
            return reply('❌ Marque ou envie uma imagem para torná-la HD.');
        }

        const mimetype = media.mimetype;
        const ext = mimetype.split('/').pop();
        const tempFile = `temp_tohd_${Date.now()}.${ext}`;

        const fileBuffer = await getFileBuffer(media, 'image');
        fs.writeFileSync(tempFile, fileBuffer);

        const base64Image = fs.readFileSync(tempFile, { encoding: 'base64' });

        const fetch = require('node-fetch');
        const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ image: base64Image })
        });

        const uploadJson = await uploadRes.json();

        if (!uploadJson.success) {
            throw new Error('Erro ao fazer upload no ImgBB');
        }

        const imageUrl = uploadJson.data.url;

        // Agora trata como imagem diretamente
        const apiUrl = `${zerosite}/api/ia/tohd?url=${imageUrl}&apikey=${API_KEY_ZEROTWO}`;
        const hdRes = await fetch(apiUrl);

        if (!hdRes.ok) {
            throw new Error(`Erro na API Zero-Two: ${hdRes.status} ${hdRes.statusText}`);
        }

        const hdBuffer = await hdRes.buffer();

        await sandro.sendMessage(from, {
            image: hdBuffer,
            caption: `✨ *IMAGEM EM HD COM SUCESSO!*`
        }, { quoted: info });

        fs.unlinkSync(tempFile);

    } catch (e) {
        console.error('Erro no comando tohd:', e);
        await sandro.sendMessage(from, {
            text: '❌ Erro ao tornar a imagem em HD.\n' + e.message
        }, { quoted: info });
    }
    break;

case 'rfundo':
case 'removebg':
case 'rbg':
reagir(from, "🖼️");
    try {
        // Verifica se tem imagem (direta ou marcada)
        let media;
        if (isQuotedImage) {
            media = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
        } else if (isImage) {
            media = info.message.imageMessage;
        } else {
            return reply('❌ Marque ou envie uma imagem para remover o fundo.');
        }

        const mimetype = media.mimetype;
        const ext = mimetype.split('/').pop();
        const tempFile = `temp_removebg_${Date.now()}.${ext}`;

        // Pega buffer da imagem do WhatsApp
        const fileBuffer = await getFileBuffer(media, 'image');

        // Salva a imagem temporariamente para enviar na API
        fs.writeFileSync(tempFile, fileBuffer);

        // Faz a requisição POST para remove.bg
        const FormData = require('form-data');
        const form = new FormData();

        form.append('image_file', fs.createReadStream(tempFile));
        form.append('size', 'auto');

        const fetch = require('node-fetch');

        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': 'Sg7pQZoiscPFcW3LyreM7Kpm',
                ...form.getHeaders()
            },
            body: form
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`Erro na API remove.bg: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
        }

        // A resposta é a imagem PNG com fundo removido
        const imageBuffer = await response.buffer();

        // Envia a imagem processada de volta no WhatsApp
        await sandro.sendMessage(from, {
            image: imageBuffer,
            caption: `*FUNDO REMOVIDO COM SUCESSO* ${NomeDoBot}`
        }, { quoted: info });

        // Remove o arquivo temporário
        fs.unlinkSync(tempFile);

    } catch (e) {
        console.error('Erro no comando removebg:', e);
        await sandro.sendMessage(from, {
            text: '❌ Ocorreu um erro ao remover o fundo da imagem.'
        }, { quoted: info });
    }
    break;

case 'zerotwo':
case 'zeroai':
  try {
    if (!q) return reply(`❌ Envie uma pergunta!\nEx: ${prefix + command} como você está?`);

    const axios = require('axios');
    const url = `${zerosite}/api/ia/zerotwo?query=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;

    const { data } = await axios.get(url);

    if (data.status && data.resposta) {
      reply(`🩷 *Zero Two respondeu:*\n\n${data.resposta}`);
    } else {
      reply("Desculpe, darling... não consegui pensar em uma resposta agora. 😢");
    }
  } catch (e) {
    console.log("Erro Zero Two GPT:", e);
    reply("Tive um erro técnico, meu amor... tenta de novo em alguns segundos! 🥺");
  }
  break;

case 'getpp':
case 'getperfil': {
    try {
        if (!isGroup) return reply("❌ Esse comando só pode ser usado em grupos.");
        if (!menc_os2) return reply("❌ Marque a pessoa com @.\nExemplo: /getperfil @usuario");

        let jid = menc_jid2[0]; // ID da pessoa marcada
        let fotoPerfil;

        try {
            fotoPerfil = await sandro.profilePictureUrl(jid, 'image');
        } catch (e) {
            fotoPerfil = "https://telegra.ph/file/265c672094dfa87caea19.jpg"; // Foto padrão
        }

        await sandro.sendMessage(from, {
            image: { url: fotoPerfil }
        }, { quoted: info });

    } catch (e) {
        console.log(e);
        reply("❌ Erro ao tentar obter a foto de perfil.");
    }
}
break;

case 'me':
  try {
    const nome = pushname || "Usuário";
    const numero = sender.split("@")[0];
    const menção = [sender];
    const imagemPerfil = await sandro.profilePictureUrl(sender, 'image').catch(_ => 'https://i.imgur.com/LbZ94A3.png'); // fallback

    await sandro.sendMessage(from, {
      product: {
        productImage: { url: imagemPerfil },
        productId: 'meu-catalogo',
        title: `👤 ${nome}`,
        description: `📞 Número: wa.me/${numero}\n\nClique no botão abaixo para salvar o contato.`,
        currencyCode: 'BRL',
        priceAmount1000: 999,
        retailerId: `@${numero}`,
        productImageCount: 1
      },
      businessOwnerJid: sender // isso simula que o catálogo é do próprio usuário
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando /me:", e);
    reply("❌ Erro ao montar seu cartão de visita.");
  }
  break;

case 'ffban':
if (!args[0]) {
  reply("❗Por favor, informe o ID da conta para consultar se está banida.");
  break;
}
try {
  const id = args[0];
  reply(`💙 *Buscando por ID ${id}. Aguarde...* 💙`);

  const res = await fetch(`${zerosite}/api/get/ff-banned-account?id=${id}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("❌ Não foi possível consultar a conta. Verifique o ID ou a API.");

  const r = json.resultados;

  const texto = `🚨 *Consulta de Banimento - Free Fire*

*ID:* ${r.id}
*Data da Consulta:* ${r.data_consulta}
*Banido:* ${r.esta_banido ? "✅ Sim" : "❌ Não"}
*Mensagem:* ${r.mensagem}
*Motivo:* ${r.motivo_banimento || "Nenhum motivo encontrado ou conta não está banida."}`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ffban:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Verifique o console.");
}
break;

case 'ffbios':
try {
  const res = await fetch(`${zerosite}/api/get/ff-bios?limit=30&apikey=${API_KEY_ZEROTWO}`);
  reply(`💙 *Buscando Aguarde...* 💙`);
  const json = await res.json();

  if (!json.status) return reply("❌ Não foi possível obter as bios. Tente novamente mais tarde.");

  const bios = json.resultados;

  let texto = `*30 Bios para usar no Free Fire:*\n\n`;

  for (let i = 0; i < bios.length; i++) {
    texto += `*${i + 1}.* ${bios[i].bio}\n\n`;
  }

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ff-bios:", e);
  reply("❌ Ocorreu um erro ao buscar as bios. Verifique o console.");
}
break;

case 'ffprime':
if (!args[0]) {
  reply("❗Você precisa informar o ID do jogador!");
  break;
}
try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
  const res = await fetch(`${zerosite}/api/get/ff-prime-level?id=${q}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("Falta O ID do jogador😒");

  const r = json.resultados;

  const texto = `💠 *Sistema Prime - Free Fire*

*ID:* ${r.id}
*Último Registro:* ${r.ultima_vez}
*Conta:* ${r.conta}
*Privilégios:* ${r.privilegios.join(", ")}
*Sobre o Sistema Prime:*

${r.descrição}`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ff-prime:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Verifique o console.");
}
break;

case 'ffdata':
if (!args[0]) {
  reply("❗Você precisa informar o ID do jogador!");
  break;
}

try {
  const q = args[0];
  reply(`💙 *Buscando por ID ${q}. Aguarde...* 💙`);

  const res = await fetch(`${zerosite}/api/get/ff-data-criacao?id=${q}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("❌ Não foi possível obter os dados. Verifique o ID informado.");

  const r = json.resultados;

  const texto = `📅*Dados da Conta Free Fire*

*ID:* ${r.id}
*Nome:* ${r.nome}
*Data de Criação:* ${r.data_criacao}
*Raridade:* ${r.raridade}
*Status da Conta:* ${r.status_conta}`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ffdata:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Verifique o console.");
}
break;

case 'ffinfo':
case 'ffstalk':
if (!args[0]) {
  reply("❗Você precisa informar o ID do jogador!");
  break;
}
try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
  const res = await fetch(`${zerosite}/api/get/ff-stalk?id=${q}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("❌ ID inválido ou API fora do ar.");

  const r = json.resultados;

  const texto = `📄 *Resultado*

*ID:* ${r.id}
*Apelido:* ${r.apelido}
*Nível:* ${r.nivel}
*Conta Criada:* ${r.dataCriacao}
*Último Login:* ${r.ultimoLogin}
*Versão do Jogo:* ${r.versaoJogo}
*Experiência:* ${r.experiencia.formatada}
*Curtidas:* ${r.curtidas}
*Região:* ${r.regiao}
*Bio:* ${r.biografia}
*Passe Booyah:* ${r.passeBooyah}
*Guilda:* ${r.guilda.nome} (Lvl ${r.guilda.nivel}, ${r.guilda.membros} membros)`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ff-stalk:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Veja o console.");
}
break;

case 'rg': {
    if (!isPremium) return reply("❌ *COMANDO RESTRITO*\n\nEste comando é exclusivo para usuários *VIPs*.\n\n🔐 Ele permite puxar a *foto da pessoa* e *informações detalhadas pelo RG*.");

    const query = body.split(' ')[1];
    if (!query) return sandro.sendMessage(from, { text: '❌ Informe um CPF para consultar o RG. Exemplo: /rg 11852345780' }, { quoted });

    try {
        reply(`💙 *Buscando RG para o CPF ${query}... Aguarde...* 💙`);

        const response = await fetch(`${zerosite}/consultas/fotorj?query=${query}&apikey=${API_KEY_ZEROTWO}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ Nenhum resultado encontrado para este CPF.' }, { quoted });
        }

        const resultado = data.resultado;
        const dados = resultado.DADOS_PESSOAIS || {};
        const filiacao = resultado.FILIACAO || {};
        const documentos = resultado.DOCUMENTOS || {};
        const foto = resultado.FOTO;

        const mensagem = `
*CONSULTA DE RG - ${NomeDoBot}*

- Nome: ${dados.NOME || 'Não encontrado'}
- Nascimento: ${dados.NASCIMENTO || 'Não encontrado'}
- Óbito: ${dados.OBITO || 'Não encontrado'}

- Mãe: ${filiacao.MAE || 'Não encontrado'}
- Pai: ${filiacao.PAI || 'Não encontrado'}

- RG: ${documentos.RG || 'Não encontrado'}

🔎 Fonte: ${NomeDoBot}`;

        // Se houver foto, envia a imagem com o texto como legenda
        if (foto) {
            await sandro.sendMessage(from, { image: { url: foto }, caption: mensagem }, { quoted });
        } else {
            // Se não tiver foto, envia só o texto
            sandro.sendMessage(from, { text: mensagem }, { quoted });
        }

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Ocorreu um erro ao realizar a consulta.' }, { quoted });
    }
    break;
}

case 'imgpralink2': {
  reagir(from, "💾");
  try {
    let media, mimetype, type;

    if (isQuotedImage || isImage) {
      media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
      mimetype = media.mimetype;
      type = 'image';
    } else {
      return reply('❌ Marque ou envie uma *imagem* para usar este comando.');
    }

    // Extensão da imagem (jpg, png, gif etc)
    const ext = mimetype.split('/').pop();

    if (!['jpg', 'jpeg', 'png', 'gif'].includes(ext)) {
      return reply('❌ Por favor, envie uma imagem válida (jpg, jpeg, png ou gif).');
    }

    const tempFile = `temp_${Date.now()}.${ext}`;

    // Função que baixa o buffer da mídia (você deve ter essa função)
    const fileBuffer = await getFileBuffer(media, type);

    // Salva temporariamente
    fs.writeFileSync(tempFile, fileBuffer);

    // Converte para base64 (ImgBB precisa da imagem em base64)
    const base64Image = fs.readFileSync(tempFile, { encoding: 'base64' });

    // Sua API Key do ImgBB
    const apiKey = '3e302a6710b86729c0072dc0597b4e59';

    // Faz upload para ImgBB
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, 
      new URLSearchParams({
        image: base64Image,
        name: `sandrobot_${Date.now()}`
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (!response.data || !response.data.data || !response.data.data.url) {
      throw new Error('❌ Sem resposta válida da API ImgBB.');
    }

    const fileUrl = response.data.data.url;

    // Responde com o link da imagem jpg/png/gif direto
    reply(`${fileUrl}`);

    // Remove o arquivo temporário
    fs.unlinkSync(tempFile);

  } catch (error) {
    console.error('❌ Erro no upload ImgBB:', error);
    reply('❌ Ocorreu um erro durante o upload da imagem no ImgBB.');
  }
  break;
}

case 'play2': {
    try {
        if (!q) return reply("❌ Por favor, digite o nome da música.\nExemplo: `/play DJ malam pagi slowed`");

    reply(`💙 *Buscando por ${q} Aguarde...* 💙`);

        const res = await fetchJson(`https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(q)}`);
        if (!res || !res.result || !res.result.status) return reply("❌ Música não encontrada. Tente outro nome.");

        const m = res.result.metadata;
        const d = res.result.download;

        const texto = `╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨💙𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
╚♡∞♡♡∞:｡.｡💙｡.｡:∞♡♡:∞♡╝\n\n` +
                      `📌 *Título:* ${m.title}\n` +
                      `👤 *Canal:* ${m.author.name}\n` +
                      `📈 *Visualizações:* ${m.views.toLocaleString()}\n` +
                      `⏱️ *Duração:* ${m.duration.timestamp}\n` +
                      `🕒 *Publicado:* ${m.ago}\n\n` +
                      `📝 *Descrição:* ${m.description}\n\n` +
                      `🔗 *Link do Vídeo:* ${m.url}\n` +
                      `👨‍💻 *Canal YouTube:* ${m.author.url}\n\n` +
                      `🎧 *Qualidade:* ${d.quality}kbps\n` +
                      `📊 *Qualidades Disponíveis:* ${d.availableQuality.join(", ")}kbps`;

        // Envia thumb + informações
        await sandro.sendMessage(from, {
            image: { url: m.thumbnail },
            caption: texto
        }, { quoted: info });

        // Envia o áudio em seguida
        await sandro.sendMessage(from, {
            audio: { url: d.url },
            mimetype: 'audio/mpeg',
            fileName: d.filename
        }, { quoted: info });

    } catch (e) {
        console.error(e);
        reply("❌ Erro ao buscar a música. Tente novamente mais tarde.");
    }
    break;
}

case 'ship':
    if (!isGroup) return reply(enviar.msg.grupo);

    async function shippar() {
        if (somembros.length < 2) return reply('❌ Não há membros suficientes para formar um casal.');

        // Sorteia dois membros diferentes
        let index1 = Math.floor(Math.random() * somembros.length);
        let index2;

        do {
            index2 = Math.floor(Math.random() * somembros.length);
        } while (index2 === index1);

        let membro1 = somembros[index1];
        let membro2 = somembros[index2];

        let texto = `💖 *SHIP DO DIA* 💖\n\n@${membro1.split('@')[0]} 💙‍🔥 @${membro2.split('@')[0]}\n\nPerfeitos juntos! 😍💍`;

        mentions(texto, [membro1, membro2], true);
    }

    shippar().catch(e => {
        console.log(e);
    });
    break;

case 'teach':
case 'ensina':
    reagir(from, "🧠");
    if (!q) return reply('❌ Envie um tema ou pergunta para eu ensinar.\n\nExemplo: sandro teach o que é inteligência artificial');

    try {
        const res = await fetch(`https://api.siputzx.my.id/api/ai/teachanything?content=${encodeURIComponent(q)}`);
        const json = await res.json();

        if (!json.status || !json.data) {
            return reply('❌ Não consegui obter uma explicação.');
        }

        reply(`📚 *Explicação:*\n${json.data}`);
    } catch (e) {
        console.error("Erro no comando 'teach':", e);
        reply('❌ Ocorreu um erro ao tentar buscar a explicação.');
    }
    break;

case 'pergunta3':
case 'openai3':
case 'gpt3':
case 'chatgpt3':
    reagir(from, "💭");
    if (!q) return reply('❌ Envie uma mensagem para eu responder.\n\nExemplo: sandro gemini quem é você');

    try {
        const res = await fetch(`https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(q)}`);
        const json = await res.json();

        if (!json.status || !json.data) {
            return reply('❌ Não consegui obter uma resposta.');
        }

        reply(`🤖 *Resposta:*\n${json.data}`);
    } catch (e) {
        console.error("Erro no comando 'gemini':", e);
        reply('❌ Ocorreu um erro ao tentar responder.');
    }
    break;
    
    
case 'modapk':
case 'happymod':
    reagir(from, "📦");
    if (!q) return reply('❌ Digite o nome de um app para buscar.');

    try {
        const res = await fetch(`https://api.siputzx.my.id/api/apk/happymod?search=${encodeURIComponent(q)}`);
        const json = await res.json();

        if (!json.status || !json.data || json.data.length === 0) {
            return reply('❌ Nenhum resultado encontrado.');
        }

        const top = json.data.slice(0, 5);

        for (let apk of top) {
            let texto = `📲 *${apk.title}*\n\n` +
                        `📦 *Versão:* ${apk.version}\n` +
                        `💸 *Mod:* ${apk.modFeatures || 'N/A'}\n` +
                        `⭐ *Avaliação:* ${apk.rating.value} (${apk.rating.percentage}%)\n` +
                        `🔗 *Link:* ${apk.link}`;

            await sandro.sendMessage(from, {
                image: { url: apk.image },
                caption: texto
            }, { quoted: info });
        }

    } catch (e) {
        console.error("Erro no comando 'happymod':", e);
        reply('❌ Ocorreu um erro ao buscar o app.');
    }
    break;

case 'mangatoon': {
  try {
    if (!q.trim()) return reply(`Use: ${prefix + command} nome do manga`);

    const searchQuery = encodeURIComponent(q.trim());
    const url = `https://api.siputzx.my.id/api/s/mangatoon?query=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.status || !data.data.komik || data.data.komik.length === 0) {
      return reply("Não foram encontrados mangas com o termo informado.");
    }

    let message = `*Resultados encontrados para:* ${q.trim()}\n\n`;

    // Mostra os primeiros 5 mangas encontrados
    for (let i = 0; i < Math.min(5, data.data.komik[0].items.length); i++) {
      const manga = data.data.komik[0].items[i];

      // Envia a imagem como mídia
      await sandro.sendMessage(from, {
        image: { url: manga.image },
        caption: `${i + 1}. *${manga.title}*\nLink para o manga: ${manga.link}`
      }, { quoted: info });
    }

  } catch (e) {
    console.error("Erro ao buscar mangas:", e);
    return reply("Erro ao buscar os mangas. Tente novamente mais tarde.");
  }
  break;
}

case 'otakotaku': {
  if (!args.length) {
    await sandro.sendMessage(from, { text: 'Digite o nome para pesquisar. Ex: /otakotaku Naruto' }, { quoted: info });
    return;
  }

  const termo = encodeURIComponent(args.join(" "));
  const url = `https://api.siputzx.my.id/api/s/otakotaku?query=${termo}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.status) {
      await sandro.sendMessage(from, { text: 'Nenhum resultado encontrado.' }, { quoted: info });
      return;
    }

    let resultText = `Resultados para: *${termo}*:\n\n`;

    // Exibindo Animes
    if (data.data.anime && data.data.anime.length > 0) {
      resultText += 'Animes encontrados:\n';
      data.data.anime.forEach((anime) => {
        resultText += `• [${anime.title}](${anime.url})\n`;
      });
    }

    // Exibindo Personagens
    if (data.data.karakter && data.data.karakter.length > 0) {
      resultText += '\nPersonagens encontrados:\n';
      data.data.karakter.forEach((karakter) => {
        resultText += `• [${karakter.title}](${karakter.url})\n`;
      });
    }

    // Exibindo Artigos
    if (data.data.artikel && data.data.artikel.length > 0) {
      resultText += '\nArtigos encontrados:\n';
      data.data.artikel.forEach((artikel) => {
        resultText += `• [${artikel.title}](${artikel.url})\n`;
      });
    }

    await sandro.sendMessage(from, { text: resultText }, { quoted: info });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar informações.' }, { quoted: info });
  }

  break;
}

case 'twstalk':
case 'twitter':
case 'stalktwitter':
    try {
        if (!q) return reply("Por favor, envie o nome de usuário do Twitter. Ex: /twitter siputzx");

        reply("Buscando informações do perfil...");

        let res = await fetchJson(`https://api.siputzx.my.id/api/stalk/twitter?user=${encodeURIComponent(q)}`);
        if (!res || !res.status) return reply("Usuário não encontrado. Verifique o nome e tente novamente.");

        let u = res.data;
        let stats = u.stats;

        let texto = `*Informações do Twitter:*\n\n` +
                    `*Nome:* ${u.name}\n` +
                    `*Usuário:* @${u.username}\n` +
                    `*Verificado:* ${u.verified ? 'Sim' : 'Não'}\n` +
                    `*Bio:* ${u.description || 'Sem descrição'}\n` +
                    `*Criado em:* ${u.created_at}\n\n` +
                    `*Tweets:* ${stats.tweets}\n` +
                    `*Seguidores:* ${stats.followers}\n` +
                    `*Seguindo:* ${stats.following}\n` +
                    `*Curtidas:* ${stats.likes}`;

        sandro.sendMessage(from, { image: { url: u.profile.image }, caption: texto }, { quoted: info });
    } catch (e) {
        console.error(e);
        reply("Erro ao buscar informações do perfil. Tente novamente mais tarde.");
    }
    break;

case 'ytstalk':
case 'yt':
case 'youtubetalk':
    try {
        if (!q) return reply("Por favor, envie o nome de usuário do canal. Ex: /yt SANDRO-BOT");

        reply("Buscando informações do canal...");

        let res = await fetchJson(`https://api.siputzx.my.id/api/stalk/youtube?username=${encodeURIComponent(q)}`);
        if (!res || !res.status) return reply("Canal não encontrado. Verifique o nome e tente novamente.");

        let c = res.data.channel;
        let texto = `*Informações do Canal:*\n\n` +
                    `*Nome de Usuário:* ${c.username}\n` +
                    `*Inscritos:* ${c.subscriberCount || 'Indisponível'}\n` +
                    `*Descrição:* ${c.description || 'Sem descrição.'}\n` +
                    `*Canal:* ${c.channelUrl}`;

        sandro.sendMessage(from, { image: { url: c.avatarUrl }, caption: texto }, { quoted: info });
    } catch (e) {
        console.error(e);
        reply("Erro ao buscar informações do canal. Tente novamente mais tarde.");
    }
    break;

case 'pais':
case 'country':
    try {
        if (!q) return reply("Por favor, envie o nome de um país. Ex: /pais Brasil");

        reply("Buscando informações sobre o país...");

        let res = await fetchJson(`https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(q)}`);
        if (!res || !res.status) return reply("País não encontrado. Verifique o nome e tente novamente.");

        let d = res.data;
        let texto = `*Informações sobre ${d.name}:*\n\n` +
                    `*Capital:* ${d.capital}\n` +
                    `*Continente:* ${d.continent.name} ${d.continent.emoji}\n` +
                    `*Código Telefônico:* ${d.phoneCode}\n` +
                    `*Coordenadas:* Latitude ${d.coordinates.latitude}, Longitude ${d.coordinates.longitude}\n` +
                    `*Área:* ${d.area.squareKilometers.toLocaleString()} km²\n` +
                    `*Idioma(s):* ${d.languages.native.join(', ')}\n` +
                    `*Moeda:* ${d.currency}\n` +
                    `*Forma Constitucional:* ${d.constitutionalForm}\n` +
                    `*Famoso por:* ${d.famousFor}\n` +
                    `*Lado da direção:* ${d.drivingSide === 'left' ? 'Esquerdo' : 'Direito'}\n` +
                    `*Proibição de Álcool:* ${d.alcoholProhibition}\n` +
                    `*Domínio da Internet:* ${d.internetTLD}\n` +
                    `*Código ISO:* ${d.isoCode.alpha2.toUpperCase()} (${d.isoCode.alpha3.toUpperCase()})\n` +
                    `*Google Maps:* ${d.googleMapsLink}`;

        sandro.sendMessage(from, { image: { url: d.flag }, caption: texto }, { quoted: info});
    } catch (e) {
        console.error(e);
        reply("Erro ao buscar informações sobre o país. Tente novamente mais tarde.");
    }
    break;

case 'telefone':
case 'tell': {
    const numero = body.split(' ')[1];
    if (!numero) {
        return sandro.sendMessage(from, { text: '❌ Informe um número. Exemplo: /telefone 61981287778' }, { quoted: info });
    }

    try {
        const response = await fetch(`http://br1.bronxyshost.com:4170/api/busca/telefone?apitoken=${PNSPUXADA}&query=${numero}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ Número não encontrado ou inválido.' }, { quoted: info });
        }

        const resultado = `*🔍 RESULTADOS DA CONSULTA POR TELEFONE:*\n\n${data.resultado.trim()}`;
        sandro.sendMessage(from, { text: resultado }, { quoted: info });

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Erro ao buscar dados pelo telefone.' }, { quoted: info });
    }
    break;
}

case 'videoporn': {
  if (!args[0]) {
    await sandro.sendMessage(from, { text: 'Por favor, envie o link do vídeo.\nExemplo: /videoporn https://www.xvideos.com/video.kotblmh3a79/thot_blowjob' }, { quoted: selo });
    return;
  }
  
reply(`Enviando No seu pv.👍`)

  const link = args[0];
  const api = `${zerosite}/api/xvideos?url=${encodeURIComponent(link)}&apikey=${API_KEY_ZEROTWO}`;

  try {
      reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
    const fetch = require('node-fetch');
    const res = await fetch(api);
    const json = await res.json();

    if (!json.resultado || !json.resultado.download) {
      await sandro.sendMessage(sender, { text: 'Não foi possível obter o vídeo. Verifique o link.' }, { quoted: selo });
      return;
    }

    const legenda = `*Título:* ${json.resultado.titulo}\n*Descrição:* ${json.resultado.desc}`;

    await sandro.sendMessage(sender, {
      video: { url: json.resultado.download },
      caption: legenda
    }, { quoted: selo });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(sender, { text: 'Erro ao processar o vídeo.' }, { quoted: selo });
  }
}
break;

case "mae":
    {
        let textoMsg = "";

        if (info.message?.conversation) {
            textoMsg = info.message.conversation;
        } else if (info.message?.extendedTextMessage?.text) {
            textoMsg = info.message.extendedTextMessage.text;
        } else if (info.message?.imageMessage?.caption) {
            textoMsg = info.message.imageMessage.caption;
        } else if (info.message?.buttonsResponseMessage?.selectedButtonId) {
            textoMsg = info.message.buttonsResponseMessage.selectedButtonId;
        } else {
            return reply("❌ Não consegui ler o comando corretamente.");
        }

        const args = textoMsg.trim().split(" ");
        args.shift(); // remove o /mae
        const nomeMae = args.join(" ");

        if (!nomeMae) return reply("❌ Informe o nome da mãe. Exemplo: /mae GERALDA MARIA CONCEICAO INACIO");

        try {
            reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
            const url = `${zerosite}/consultas/bigdata/nome_mae?query=${encodeURIComponent(nomeMae)}&apikey=${API_KEY_ZEROTWO}`;
            const res = await fetch(url);
            const json = await res.json();

            if (!json?.status || !json?.resultado) {
                return reply("❌ Nenhum resultado encontrado para esse nome.");
            }

            const r = json.resultado;
            let texto = `*_🔍 CONSULTA POR NOME DA MÃE - ${NomeDoBot}_* 🔎\n\n`;
            texto += `*Nome:* ${r.NOME || "Não informado"}\n`;
            texto += `*CPF:* ${r.CPF || "Não informado"}\n`;
            texto += `*Sexo:* ${r.SEXO || "Não informado"}\n`;
            texto += `*Nascimento:* ${r.DT_NASCIMENTO || "Não informado"}\n`;
            texto += `*Idade:* ${r.IDADE || "Não informado"}\n`;
            texto += `*Estado Civil:* ${r.ESTADO_CIVIL || "Não informado"}\n`;
            texto += `*Nome da Mãe:* ${r.NOME_MAE || "Não informado"}\n`;
            texto += `*Nome do Pai:* ${r.NOME_PAI || "Não informado"}\n`;
            texto += `*Título de Eleitor:* ${r.TITULO_ELEITOR || "Não informado"}\n\n`;

            if (r?.dados_aquisitivos) {
                texto += `*Poder Aquisitivo:* ${r.dados_aquisitivos.PODER_AQUISITIVO || "-"} (R$ ${r.dados_aquisitivos.BASE_RENDA || "-"})\n`;
                texto += `*Faixa de Renda:* ${r.dados_aquisitivos.FX_PODER_AQUISITIVO || "-"}\n`;
                texto += `*Score CSB8:* ${r.dados_aquisitivos.SCORE_CSB8 || "-"} (${r.dados_aquisitivos.CSB8_FAIXA || "-"})\n`;
                texto += `*Score CSBA:* ${r.dados_aquisitivos.SCORE_CSBA || "-"} (${r.dados_aquisitivos.CSBA_FAIXA || "-"})\n\n`;
            }

            if (r?.telefones?.length > 0) {
                texto += "*Telefones:*\n";
                for (const tel of r.telefones) {
                    texto += `- ${tel}\n`;
                }
                texto += "\n";
            }

            if (r?.emails?.length > 0) {
                texto += "*Emails:*\n";
                for (const email of r.emails) {
                    texto += `- ${email.EMAIL} (Score: ${email.SCORE})\n`;
                }
                texto += "\n";
            }

            if (r?.enderecos?.length > 0) {
                texto += "*Endereços:*\n";
                for (const end of r.enderecos) {
                    texto += `- ${end.NOME}, ${end.NUMERO} - ${end.BAIRRO}, ${end.CIDADE} - ${end.ESTADO} (${end.CEP})\n`;
                }
            }

            reply(texto.trim());
        } catch (e) {
            console.error(e);
            reply("❌ Erro ao consultar nome da mãe.");
        }
    }
    break;
    
case "nome2":
    {
        let textoMsg = "";

        if (info.message?.conversation) {
            textoMsg = info.message.conversation;
        } else if (info.message?.extendedTextMessage?.text) {
            textoMsg = info.message.extendedTextMessage.text;
        } else if (info.message?.imageMessage?.caption) {
            textoMsg = info.message.imageMessage.caption;
        } else if (info.message?.buttonsResponseMessage?.selectedButtonId) {
            textoMsg = info.message.buttonsResponseMessage.selectedButtonId;
        } else {
            return reply("❌ Não consegui ler o comando corretamente.");
        }

        const args = textoMsg.trim().split(/\s+/);
        args.shift(); // Remove o /nome2
        const nomePesquisado = args.join(" ");
        if (!nomePesquisado) return reply("❌ Informe um nome! Exemplo: /nome2 JOAO DA SILVA");

        try {
            reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
            const query = encodeURIComponent(nomePesquisado);
            const url = `${zerosite}/consultas/bigdata/nome2?query=${query}&apikey=${API_KEY_ZEROTWO}`;
            const res = await fetch(url);
            const json = await res.json();

            if (!json.resultado || json.resultado.length === 0) return reply("❌ Nenhum resultado encontrado.");

            let texto = `*_🔍 CONSULTA NOME2 - ${NomeDoBot}_* 🔎\n\n`;

            json.resultado.slice(0, 5).forEach((r, i) => {
                texto += `*${i + 1}. ${r.NOME || "Desconhecido"}*\n`;
                texto += `CPF: ${r.CPF || "Não informado"}\n`;
                texto += `Nascimento: ${r.DT_NASCIMENTO || "Não informado"}\n`;
                texto += `Idade: ${r.IDADE || "N/A"}\n`;
                texto += `Sexo: ${r.SEXO || "N/A"}\n`;
                texto += `Mãe: ${r.NOME_MAE || "Não informado"}\n`;
                texto += `Pai: ${r.NOME_PAI || "Não informado"}\n`;
                texto += `Título Eleitor: ${r.TITULO_ELEITOR || "Não informado"}\n`;
                texto += `Óbito: ${r.DT_OBITO || "Não informado"}\n\n`;
            });

            reply(texto.trim());
        } catch (e) {
            console.error(e);
            reply("❌ Ocorreu um erro ao buscar as informações.");
        }
    }
    break;
    
case 'nome': {
    const nome = body.split(' ').slice(1).join(' ');
    if (!nome) return sandro.sendMessage(from, { text: '❌ Informe um nome. Exemplo: /nome2 VENERANDA ROSA' }, { quoted });

    try {
        reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
        const response = await fetch(`http://br1.bronxyshost.com:4170/api/busca/nome?apitoken=${PNSPUXADA}&query=${encodeURIComponent(nome)}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ Nome não encontrado ou inválido.' }, { quoted });
        }

        const resultado = `*🔍 RESULTADOS DA CONSULTA POR NOME:*\n\n${data.resultado.trim()}`;
        sandro.sendMessage(from, { text: resultado }, { quoted });

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Erro ao buscar dados pelo nome.' }, { quoted });
    }
    break;
}

/*case "nome":
    {
        let textoMsg = "";

        if (info.message?.conversation) {
            textoMsg = info.message.conversation;
        } else if (info.message?.extendedTextMessage?.text) {
            textoMsg = info.message.extendedTextMessage.text;
        } else if (info.message?.imageMessage?.caption) {
            textoMsg = info.message.imageMessage.caption;
        } else if (info.message?.buttonsResponseMessage?.selectedButtonId) {
            textoMsg = info.message.buttonsResponseMessage.selectedButtonId;
        } else {
            return reply("❌ Não consegui ler o comando corretamente.");
        }

        const args = textoMsg.trim().split(/\s+/);
        args.shift(); // Remove o /nome do início
        const nomePesquisado = args.join(" ");
        if (!nomePesquisado) return reply("❌ Informe um nome! Exemplo: /nome JOAO DA SILVA");

        try {
            const query = encodeURIComponent(nomePesquisado);
            const url = `${zerosite}/consultas/bigdata/nome?query=${query}&apikey=${API_KEY_ZEROTWO}`;
            const res = await fetch(url);
            const json = await res.json();

            if (!json.status || !json.resultado) return reply("❌ Nome não encontrado ou inválido.");

            const r = json.resultado;

            let texto = `*_🔎 CONSULTA NOME - ${NomeDoBot} 🔍_*\n\n`;
            texto += `*Nome:* ${r.NOME || "Não informado"}\n`;
            texto += `*CPF:* ${r.CPF || "Não informado"}\n`;
            texto += `*Sexo:* ${r.SEXO || "Não informado"}\n`;
            texto += `*Nascimento:* ${r.DT_NASCIMENTO || "Não informado"}\n`;
            texto += `*Idade:* ${r.IDADE || "Não informado"} anos\n`;
            texto += `*Estado Civil:* ${r.ESTADO_CIVIL || "Não informado"}\n`;
            texto += `*Nome da Mãe:* ${r.NOME_MAE || "Não informado"}\n`;
            texto += `*Nome do Pai:* ${r.NOME_PAI || "Não informado"}\n`;
            texto += `*Título de Eleitor:* ${r.TITULO_ELEITOR || "Não informado"}\n`;
            texto += `*PIS:* ${r.PIS || "Não informado"}\n`;
            texto += `*Data de Óbito:* ${r.DT_OBITO || "Não informado"}\n\n`;

            if (r.dados_aquisitivos) {
                texto += `*📊 Dados Aquisitivos:*\n`;
                texto += `• Renda: R$ ${r.dados_aquisitivos.BASE_RENDA || "Não informado"}\n`;
                texto += `• Poder Aquisitivo: ${r.dados_aquisitivos.PODER_AQUISITIVO || "Não informado"}\n`;
                texto += `• Faixa: ${r.dados_aquisitivos.FX_PODER_AQUISITIVO || "Não informado"}\n`;
                texto += `• Score CSB8: ${r.dados_aquisitivos.SCORE_CSB8 || "N/A"} (${r.dados_aquisitivos.CSB8_FAIXA || ""})\n`;
                texto += `• Score CSBA: ${r.dados_aquisitivos.SCORE_CSBA || "N/A"} (${r.dados_aquisitivos.CSBA_FAIXA || ""})\n\n`;
            }

            if (r.telefones?.length) {
                texto += `*📱 Telefones:*\n${r.telefones.join("\n")}\n\n`;
            }

            if (r.emails?.length) {
                texto += `*📧 Emails:*\n${r.emails.map(e => `• ${e.EMAIL}`).join("\n")}\n\n`;
            }

            if (r.enderecos?.length) {
                texto += `*📍 Endereços:*\n`;
                r.enderecos.forEach((e) => {
                    texto += `• ${e.NOME || "Rua não informada"}, ${e.NUMERO || "S/N"} - ${e.BAIRRO || "Bairro não informado"}, ${e.CIDADE || ""} - CEP: ${e.CEP || ""}\n`;
                });
            }

            reply(texto);
        } catch (e) {
            console.error(e);
            reply("❌ Erro ao consultar o nome.");
        }
    }
    break;*/

case 'placa': {
    const placa = body.split(' ')[1];
    if (!placa) return sandro.sendMessage(from, { text: '❌ Informe a placa. Exemplo: /placa2 ABC1234' }, { quoted });

    try {
        reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
        const response = await fetch(`http://br1.bronxyshost.com:4170/api/busca/placa?apitoken=${PNSPUXADA}&query=${placa}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ Placa não encontrada ou inválida.' }, { quoted });
        }

        let resultado = `*CONSULTA POR PLACA ${NomeDoBot}*${data.resultado}`;
        sandro.sendMessage(from, { text: resultado }, { quoted });

    } catch (e) {
        console.error(e);
        sandro.sendMessage(from, { text: '❌ Erro ao buscar informações da placa.' }, { quoted });
    }
    break;
}

case 'cpf4': {
    const cpf = body.split(' ')[1];
    if (!cpf) return sandro.sendMessage(from, { text: '❌ Informe um CPF. Exemplo: /cpf4 12345678' }, { quoted });

    try {
    reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
        const response = await fetch(`http://br1.bronxyshost.com:4170/api/busca/cpf3?apitoken=${PNSPUXADA}&query=${cpf}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ CPF não encontrado ou inválido.' }, { quoted });
        }

        const resultado = `*CONSULTA CPF COMPLETA ${NomeDoBot}*\n${data.resultado}`;
        sandro.sendMessage(from, { text: resultado }, { quoted });

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Erro ao buscar dados do CPF.' }, { quoted });
    }
    break;
}

case 'cpf':
case 'cpf3': {
    const cpf = body.split(' ')[1];
    if (!cpf) return sandro.sendMessage(from, { text: '❌ Informe um CPF. Exemplo: /cpf3 1234567' }, { quoted });

    try {
        reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
        const response = await fetch(`http://br1.bronxyshost.com:4170/api/busca/cpf2?apitoken=${PNSPUXADA}&query=${cpf}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ CPF não encontrado ou inválido.' }, { quoted });
        }

        let resultado = `*CONSULTA CPF COMPLETA ${NomeDoBot}*${data.resultado}`;
        sandro.sendMessage(from, { text: resultado }, { quoted });

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Erro ao buscar dados do CPF.' }, { quoted });
    }
    break;
}
    case 'cpf2': {
    const query = body.split(' ')[1];
    if (!query) return sandro.sendMessage(from, { text: '❌ Informe um CPF. Exemplo: /cpf2 1234567' }, { quoted: info });

    try {
        reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
        const response = await fetch(`http://br1.bronxyshost.com:4170/api/busca/cpf?apitoken=${PNSPUXADA}&query=${query}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ CPF não encontrado ou inválido.' }, { quoted: info });
        }

        let resultadoFormatado = `*CPF ENCONTRADO ${NomeDoBot}*${data.resultado}`;
        
        sandro.sendMessage(from, { text: resultadoFormatado }, { quoted: info });

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Erro ao buscar informações do CPF.' }, { quoted: info });
    }
    break;
}
    
case 'yumeko':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/yumeko?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'yumeko']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'tejina':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/tejina?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'tejina']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'chiho':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/chiho?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'chiho']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'boruto':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/boruto?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'boruto']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'kaori':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/kaori?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'kaori']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'shizuka':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/shizuka?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'shizuka']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'kaga':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/kaga?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'kaga']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'kotori':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/kotori?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'kotori']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'mikasa':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/mikasa?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'mikasa']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'akiyama':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/akiyama?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'akiyama']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'gremory':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/gremory?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'gremory']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'izuku':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/izuku?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'izuku']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'shina':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/shina?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'shina']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'kagura':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/kagura?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'kagura']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'shinka':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/shinka?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'shinka']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'eba':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/eba?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'eba']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'yuri':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/yuri?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'yuri']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'erza':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/erza?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'erza']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'elaina':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/elaina?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'elaina']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'hinata':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/hinata?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'hinata']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'naruto':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/naruto?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'naruto']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'minato':
try {
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
  const res = await fetch(`${zerosite}/random/minato?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'minato']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'yotsuba':
try {
    reply("🟢 Enviando imagem de *Yotsuba*...");

    const response = await fetch(`${zerosite}/random/yotsuba?apikey=${API_KEY_ZEROTWO}`);
    const buffer = await response.buffer();

    await sandro.sendMessage(from, {
        image: buffer,
        caption: '✨ Imagem de *Yotsuba* recebida com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'yotsuba']:", e);
    reply("❌ Erro ao buscar a imagem de Yotsuba.");
}
break;

case 'shinomiya':
try {
  const res = await fetch(`${zerosite}/random/shinomiya?apikey=${API_KEY_ZEROTWO}`);
  const buffer = await res.buffer();
  await sandro.sendMessage(from, { image: buffer }, { quoted: info });
} catch (e) {
  console.log(`[ERRO NA CASE 'shinomiya']:`, e);
  reply("❌ Não consegui pegar a imagem, tente novamente mais tarde.");
}
break;

case 'chainsaw':
try {
    reply("🪚 Enviando conteúdo aleatório de *Chainsaw Man*...");

    const url = `${zerosite}/random/chainsaw?apikey=${API_KEY_ZEROTWO}&categoria=chainsaw`;

    await sandro.sendMessage(from, {
        video: { url: url }, // Se for imagem, troque por: image: { url: url }
        caption: '🪓 Conteúdo de *Chainsaw Man* enviado com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'chainsaw']:", e);
    reply("❌ Ocorreu um erro ao tentar enviar o conteúdo de Chainsaw Man.");
}
break;

case 'demonslayer':
try {
    reply("⚔️ Enviando conteúdo aleatório de *Demon Slayer*...");

    const url = `${zerosite}/random/demon_slayer?apikey=${API_KEY_ZEROTWO}&categoria=demon_slayer`;

    await sandro.sendMessage(from, {
        video: { url: url }, // Troque por image: { url: url } se o conteúdo for imagem
        caption: '💙 Conteúdo de *Demon Slayer* enviado com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'demonslayer']:", e);
    reply("❌ Ocorreu um erro ao tentar enviar o conteúdo de Demon Slayer.");
}
break;

case 'dragonball':
try {
    reply("💙 Enviando conteúdo aleatório de *Dragon Ball*...");

    const url = `${zerosite}/random/dragonball?apikey=${API_KEY_ZEROTWO}&categoria=dragonball`;

    await sandro.sendMessage(from, {
        video: { url: url }, // Use image: { url: url } se for imagem
        caption: '🔥 Conteúdo de *Dragon Ball* enviado com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'dragonball']:", e);
    reply("❌ Ocorreu um erro ao tentar enviar o conteúdo de Dragon Ball.");
}
break;

case 'hunter':
try {
    reply("🎯 Enviando conteúdo editado de *Hunter x Hunter*...");

    const url = `${zerosite}/random/hunter_edit?apikey=${API_KEY_ZEROTWO}&categoria=hunter_edit`;

    await sandro.sendMessage(from, {
        video: { url: url },
        caption: '🎥 Edit de *Hunter x Hunter* enviado!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'hunter']:", e);
    reply("❌ Não foi possível enviar o conteúdo de Hunter x Hunter.");
}
break;

case 'jujutsu':
try {
    reply("🔮 Enviando edit de *Jujutsu Kaisen*...");

    const url = `${zerosite}/random/jujutsu_kaisen?apikey=${API_KEY_ZEROTWO}&categoria=jujutsu_kaisen`;

    await sandro.sendMessage(from, {
        video: { url: url },
        caption: '🔥 Edit de *Jujutsu Kaisen* enviado!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'jujutsu']:", e);
    reply("❌ Não foi possível enviar o conteúdo de Jujutsu Kaisen.");
}
break;

case 'narutoedit':
try {
    reply("🍥 Enviando edit de *Naruto*...");

    const url = `${zerosite}/random/narutoedit?apikey=${API_KEY_ZEROTWO}&categoria=narutoedit`;

    await sandro.sendMessage(from, {
        video: { url: url },
        caption: '🔥 Edit de *Naruto* enviado com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'narutoedit']:", e);
    reply("❌ Não foi possível enviar o conteúdo de Naruto.");
}
break;

case 'bleach':
try {
    reply("🎥 Enviando vídeo aleatório de Bleach...");

    const url = `${zerosite}/random/bleach?apikey=${API_KEY_ZEROTWO}&categoria=bleach`;

    await sandro.sendMessage(from, {
        video: { url: url },
        caption: '🌀 Vídeo de *Bleach* enviado com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'bleach']:", e);
    reply("❌ Ocorreu um erro ao tentar enviar o vídeo de Bleach.");
}
break;

case 'editaleatorio':
try {
    reply("🎥 Enviando vídeo aleatório...");

    const url = `${zerosite}/random/aleatorios?apikey=${API_KEY_ZEROTWO}&categoria=aleatorios`;

    await sandro.sendMessage(from, {
        video: { url: url },
        caption: '🎲 Vídeo aleatório enviado com sucesso!'
    }, { quoted: info });

} catch (e) {
    console.error("[ERRO NA CASE 'aleatorio']:", e);
    reply("❌ Ocorreu um erro ao tentar enviar o vídeo.");
}
break;

case 'pix': {
  if (!q || isNaN(q)) {
    return reply("Envie o valor após o comando. Exemplo: /pix 10");
  }

  const valor = parseFloat(q);
  const MP_TOKEN = 'SEU_ACCESS_TOKEN'; // Substitua pelo seu token do Mercado Pago

  try {
    reply("Gerando pagamento, aguarde...");

    const pagamento = await axios.post(
      'https://api.mercadopago.com/v1/payments',
      {
        transaction_amount: valor,
        description: `Pagamento PIX de R$${valor.toFixed(2)}`,
        payment_method_id: "pix",
        payer: {
          email: "pagador@email.com"
        }
      },
      {
        headers: {
          Authorization: `Bearer ${MP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const { point_of_interaction } = pagamento.data;
    const qr_base64 = point_of_interaction.transaction_data.qr_code_base64;
    const qr_link = point_of_interaction.transaction_data.ticket_url;
    const codigo_copiavel = point_of_interaction.transaction_data.qr_code;

    await sandro.sendMessage(from, {
      image: { url: `data:image/jpeg;base64,${qr_base64}` },
      caption: `*Pagamento via PIX*\n\nValor: R$${valor.toFixed(2)}\n\nCopie o código abaixo ou escaneie o QR Code:\n\n*${codigo_copiavel}*\n\nOu clique aqui: ${qr_link}`
    }, { quoted: info });

    // Exemplo fictício de resposta após confirmação
    setTimeout(() => {
      sandro.sendMessage(from, {
        text: '✅ Pagamento efetuado com sucesso!',
      }, { quoted: info });
    }, 15000); // Simula retorno em 15 segundos

  } catch (e) {
    console.error(e.response?.data || e);
    reply("Erro ao gerar o pagamento. Verifique o token ou tente novamente.");
  }

  break;
}

case 'phsearch':
  try {
    if (!q) {
      reply('Digite o termo da busca. Exemplo: /phsearch novinha lesbian fight');
      break;
    }

    const searchTerm = encodeURIComponent(q);
    const apiUrl = `${zerosite}/api/phsearch?q=${searchTerm}&apikey=${API_KEY_ZEROTWO}`;

    const res = await axios.get(apiUrl);
    const data = res.data;

    if (!data.status || !data.resultado || data.resultado.length === 0) {
      reply('Nenhum resultado encontrado.');
      break;
    }

    const resultados = data.resultado.slice(0, 5);
    let texto = '*Resultados encontrados:*\n\n';

    for (let i = 0; i < resultados.length; i++) {
      texto += `*${i + 1}. ${resultados[i].title}*\n`;
      texto += `Duração: ${resultados[i].duration}\n`;
      texto += `Link: ${resultados[i].url}\n\n`;
    }

    // Enviar só o link da imagem na legenda para evitar erro de path
    texto += `\n*Thumb:* ${resultados[0].preview}`;

    await sandro.sendMessage(sender, {
      text: texto.trim()
    }, { quoted: info });

  } catch (e) {
    console.error('Erro na case phsearch:', e.message);
    reply('Erro ao buscar ou enviar os dados. Tente novamente mais tarde.');
  }
  break;
  
case 'gimage': {
  if (!q) {
    await sandro.sendMessage(from, { text: 'Envie o termo para buscar uma imagem no Google.\n\nExemplo: /gimage gato' }, { quoted: info });
    break;
  }

  try {
    const response = await fetch(`${zerosite}/api/gimage?txt=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    if (!response.ok) {
      console.error("Erro na resposta da API:", response.statusText);
      return reply("Erro ao acessar a API de imagem.");
    }

    const data = await response.json();

    if (!data.result || !Array.isArray(data.result) || data.result.length === 0) {
      return reply("Nenhuma imagem encontrada.");
    }

    const img = data.result[Math.floor(Math.random() * data.result.length)];

    if (!img?.url || !img.url.startsWith("http")) {
      return reply("Erro: URL da imagem inválida.");
    }

    await sandro.sendMessage(from, {
      image: { url: img.url },
      caption: `*Resultado da pesquisa:* ${data.search || q}\n*Título:* ${img.title || "Sem título"}`
    }, {
      quoted: info,
      ephemeralExpiration: 0 // Evita erro em grupo com mensagens temporárias
    });

  } catch (e) {
    console.error("Erro ao buscar imagem:", e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar imagem no Google.' }, { quoted: info });
  }

  break;
}

case 'stalkerzap':
case 'stalkerchannel':
  if (!q) {
    await sandro.sendMessage(from, { text: 'Envie o link do canal do WhatsApp.\n\nExemplo: /channel https://whatsapp.com/channel/0029Va6riekH5JLwLUFI7P2B' }, { quoted: info });
    break;
  }

  try {
    const res = await fetch(`${zerosite}/api/stalker/whatsapp-channel?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const data = await res.json();

    if (!data.status || !data.resultado) {
      await sandro.sendMessage(from, { text: "Não consegui encontrar informações sobre o canal. Verifique o link." }, { quoted: info });
      break;
    }

    const r = data.resultado;
    const legenda = `*Nome:* ${r.channelName}
*Seguidores:* ${r.followersCount}
*Descrição:*\n${r.description}`;

    await sandro.sendMessage(from, {
      image: { url: r.imageUrl },
      caption: legenda
    }, { quoted: info });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(from, { text: "Erro ao buscar informações do canal." }, { quoted: info });
  }
  break;
  
case 'pinterestvideo': {
  if (!q.includes('pin.it') && !q.includes('pinterest')) {
    return reply(`Envie um link válido do Pinterest.\n\nExemplo: ${prefix}pinterestvideo https://pin.it/45sNgpIig`);
  }

  try {
    const res = await fetch(`${zerosite}/api/pinterest_mp4?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const json = await res.json();

    if (!json.status || !json.resultados?.videoLinks?.length) {
      return reply("Erro ao obter vídeo. Verifique se o link está correto.");
    }

    const video = json.resultados.videoLinks[0]?.link || json.resultados.videoLinks[1]?.link;

    if (!video) {
      return reply("Não foi possível obter o vídeo. Tente outro link.");
    }

    await sandro.sendMessage(from, {
      video: { url: video },
      caption: `*Pinterest Video*  
- Criador: sandro
- Qualidade: 720p`
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando pinterestvideo:", e);
    return reply("Erro ao baixar o vídeo. Tente novamente mais tarde.");
  }

  break;
}

case 'pinterest': {
  if (!args.length) {
    await sandro.sendMessage(from, { text: 'Digite o nome para pesquisar. Ex: /pinterest anime' }, { quoted: m });
    return;
  }

  const termo = encodeURIComponent(args.join(" "));
  const url = `${zerosite}/api/pinterest?text=${termo}&apikey=${API_KEY_ZEROTWO}`;

  try {
    await sandro.sendMessage(from, {
      image: { url: url },
      caption: `Resultado do Pinterest para: *${args.join(" ")}*`
    }, { quoted: info });
  } catch (e) {
    console.error(e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar imagem do Pinterest.' }, { quoted: info });
  }

  break;
}

case 'operadora': {
  if (!args[0]) {
    await sandro.sendMessage(from, { text: 'Digite o número com DDD. Ex: /operadora 559491569380' }, { quoted: m });
    return;
  }

  const numero = args[0].replace(/\D/g, '');
  const url = `${zerosite}/api/operadora?numero=${numero}&apikey=${API_KEY_ZEROTWO}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || data.status !== 200 || !data.resultado) {
      await sandro.sendMessage(from, { text: 'Não foi possível obter informações desse número.' }, { quoted: info });
      return;
    }

    const { telefone, operadora, dispositivo, estado } = data.resultado;

    const texto = `*Informações do Número:*\n\n` +
                  `*Telefone:* ${telefone}\n` +
                  `*Operadora:* ${operadora}\n` +
                  `*Tipo:* ${dispositivo}\n` +
                  `*Estado:* ${estado}`;

    await sandro.sendMessage(from, { text: texto }, { quoted: info });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(from, { text: 'Erro ao consultar a operadora. Tente novamente mais tarde.' }, { quoted: info });
  }
  break;
}

case 'xvsearch': {
  try {
    if (!q) return reply(`Digite o que deseja pesquisar.\nEx: ${prefix}xvsearch lesbian fight`);

    const apiUrl = `${zerosite}/api/xvsearch?q=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json?.status || !json.resultado?.length) {
      return reply("Nenhum resultado encontrado.");
    }

    let resposta = `*『 XVideos Search 』*\n\n`;

    json.resultado.slice(0, 10).forEach((vid, i) => {
      resposta += `*${i + 1}. ${vid.title}*\n⏱️ ${vid.duration}\n🔗 ${vid.link}\n\n`;
    });

    resposta += `_Criador: SANDRO BOT_`;

    reply(resposta);

  } catch (e) {
    console.error("Erro no xvsearch:", e);
    reply("Erro ao buscar os vídeos. Tente novamente mais tarde.");
  }
}
break;

case 'dorama': {
  try {
    if (!q.includes('https://')) {
      return reply(`Envie o link do dorama. Ex:\n${prefix}dorama https://doramasonline.org/br/filmes/along-with-the-gods-the-two-worlds`);
    }

    const apiUrl = `${zerosite}/api/doramas/info-filme?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json?.status || !json.resultado) {
      return reply("Não foi possível encontrar o dorama. Verifique o link e tente novamente.");
    }

    const r = json.resultado;
    const texto = `*『 DORAMA INFO 』*

*🎬 Título:* ${r.title}
*📅 Lançamento:* ${r.releaseDate}
*🌎 País:* ${r.country}
*⏱️ Duração:* ${r.duration}
*⭐ Avaliação:* ${r.rating.value} (${r.rating.count} votos)
*📚 Gêneros:* ${r.genres.join(', ')}

*📖 Sinopse:*
${r.synopsis}

*👥 Elenco:*
${r.cast.slice(0, 5).map(actor => `• ${actor.name} como ${actor.character}`).join('\n')}

_By: ${json.criador}_`;

    // Envia a foto do primeiro ator como thumb + info
    await sandro.sendMessage(from, {
      image: { url: r.cast[0]?.imageUrl || 'https://telegra.ph/file/8375f93454e84be79da71.jpg' },
      caption: texto
    }, { quoted: info });

  } catch (e) {
    console.error("Erro ao buscar dorama:", e);
    reply("Erro ao buscar informações. Verifique o link e tente novamente.");
  }
}
break;
/*
case 's': {
  try {
    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    var boij2 = RSM?.imageMessage || info.message?.imageMessage;
    var boij = RSM?.videoMessage || info.message?.videoMessage;

    const isImage = !!boij2;
    const isVideo = !!boij && boij.seconds < 11;

    if (!isImage && !isVideo) {
      reply(`Marque uma imagem ou vídeo de até 10s para transformar em figurinha.`);
      break;
    }

    const buffer = await getFileBuffer(isImage ? boij2 : boij, isImage ? 'image' : 'video');
    const input = `./tmp/input.${isImage ? 'jpg' : 'mp4'}`;
    const output = `./tmp/output.webp`;
    fs.writeFileSync(input, buffer);

    await mediaToWebp(input, output, isVideo);

    const webpBuffer = fs.readFileSync(output);
    await sandro.sendMessage(from, { sticker: webpBuffer }, { quoted: info });

    fs.unlinkSync(input);
    fs.unlinkSync(output);

  } catch (e) {
    console.error(e);
    reply("Erro ao criar figurinha. Verifique se a mídia está correta.");
  }

  break;
}*/

//

case 'githubstalk':
case 'ghstalk':
  reagir(from, "🐙");
  reply(`Buscando informações do GitHub...`);
  if (!q) return reply(`Exemplo: ${command} nome_de_usuario`);
  try {
    const response = await fetch(`${zerosite}/api/stalker/github?usuario=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const data = await response.json();

    if (!data.status || !data.resultado) {
      return reply("❌ Não encontrei esse usuário no GitHub.");
    }

    const gh = data.resultado;
    const caption = `👨‍💻 *GitHub Info*

⚝ *Usuário:* ${gh.login}
⚝ *Nome:* ${gh.name || 'Não disponível'}
⚝ *Bio:* ${gh.bio || 'Nenhuma'}
⚝ *Empresa:* ${gh.company || 'Não informado'}
⚝ *Repositórios Públicos:* ${gh.public_repos}
⚝ *Seguidores:* ${gh.followers}
⚝ *Seguindo:* ${gh.following}
⚝ *Contratável:* ${gh.hireable ? 'Sim' : 'Não'}
⚝ *Criado em:* ${gh.created_at.split('T')[0]}
⚝ *Última atualização:* ${gh.updated_at.split('T')[0]}
⚝ *Perfil:* ${gh.html_url}
⚝ *Blog:* ${gh.blog || 'Nenhum'}
`;

    await sandro.sendMessage(from, {
      image: { url: gh.avatar_url },
      caption: caption
    }, { quoted: info });

  } catch (e) {
    console.log(`[ERRO NA CASE 'githubstalk']:`, e);
    reply("❌ Ocorreu um erro ao buscar os dados. Tente novamente.");
  }
  break;
  
case 'tiktokstalk': case 'tikstalk':
case 'tiktokstalk':
case 'ttstalk':
  reagir(from, "🔍");
  reply(`Enviando informações do perfil...`);
  if (!q) return reply(`Exemplo: ${command} nome_de_usuario`);
  try {
    const response = await fetch(`${zerosite}/api/tiktokStalk?username=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const data = await response.json();

    if (!data.status || !data.resultado) {
      return reply("❌ Não encontrei esse perfil no TikTok.");
    }

    const tt = data.resultado;
    const legenda = `⚝ *USUÁRIO:* ${tt.username}
⚝ *NOME:* ${tt.nickname}
⚝ *BIO:* ${tt.description || 'Nenhuma'}
⚝ *SEGUIDORES:* ${tt.seguidores}
⚝ *SEGUINDO:* ${tt.seguindo}
⚝ *AMIGOS:* ${tt.amigos}
⚝ *LIKES:* ${tt.likes}
⚝ *VÍDEOS:* ${tt.videos}
⚝ *VERIFICADO:* ${tt.verificado ? 'Sim' : 'Não'}
⚝ *CONTA PRIVADA:* ${tt.contaPriv ? 'Sim' : 'Não'}
⚝ *CONTA COMERCIAL:* ${tt.contaComercial ? 'Sim' : 'Não'}
⚝ *REGIÃO:* ${tt.região}`;

    await sandro.sendMessage(from, {
      image: { url: tt.profilePicture },
      caption: legenda
    }, { quoted: info });

  } catch (e) {
    console.log(`[ERRO NA CASE 'tiktokstalk']:`, e);
    reply("❌ Ocorreu um erro ao buscar os dados. Tente novamente.");
  }
  break;

case 'igstalk':
case 'instastalk':
  reagir(from, "🕜");
  reply(`Enviando... Caso demore demais, não consegui te enviar.`);
  if (!q) return reply(`Exemplo: ${command} nome_de_usuario`);
  try {
    const response = await fetch(`${zerosite}/api/instagram/user?username=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const data = await response.json();

    if (!data.status || !data.resultado) {
      return reply("❌ Usuário não encontrado ou erro ao acessar os dados.");
    }

    const user = data.resultado;
    const perfil = `⚝ *USERNAME:* ${user.username}
⚝ *NOME:* ${user.fullname}
⚝ *BIO:* ${user.biography || 'Nenhuma'}
⚝ *SEGUIDORES:* ${user.followers}
⚝ *SEGUINDO:* ${user.following}
⚝ *POSTS:* ${user.post_count}
⚝ *CONTA PRIVADA:* ${user.is_private ? 'Sim' : 'Não'}
⚝ *VERIFICADO:* ${user.is_verified ? 'Sim' : 'Não'}`;

    await sandro.sendMessage(from, {
      image: { url: user.hd_profile_pic_url_info.url },
      caption: perfil
    }, { quoted: info });

  } catch (e) {
    console.log(`[ERRO NA CASE 'igstalk']:`, e);
    reply("❌ Ocorreu um erro ao buscar os dados. Tente novamente.");
  }
  break;

case 'personagem':
    reagir(from, "🧙‍♂️");
    try {
        const termo = body.trim().split(' ').slice(1).join(' ');
        if (!termo) return reply("❌ Envie o nome de um personagem. Ex: personagem naruto");

        const query = `
            query ($search: String) {
                Character(search: $search) {
                    name {
                        full
                        native
                    }
                    image {
                        large
                    }
                    description
                    siteUrl
                }
            }
        `;

        const variables = { search: termo };
        const response = await fetch("https://graphql.anilist.co", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables }),
        });

        const json = await response.json();
        const personagem = json.data.Character;

        if (!personagem) return reply(`❌ Nenhum personagem encontrado com o nome "${termo}".`);

        const nome = personagem.name.full;
        const nomeJap = personagem.name.native;
        const descricao = personagem.description?.replace(/<[^>]*>?/gm, '').substring(0, 300) + "...";
        const imagem = personagem.image.large;
        const link = personagem.siteUrl;

        await sandro.sendMessage(from, {
            image: { url: imagem },
            caption: `🧍 *${nome}* (${nomeJap})\n\n📖 ${descricao}\n\n🔗 ${link}`,
        }, { quoted: info });

    } catch (e) {
        console.error("Erro no comando 'personagem':", e);
        await sandro.sendMessage(from, {
            text: "❌ Erro ao buscar personagem.",
        }, { quoted: info });
    }
    break;

case 'anime2':
    reagir(from, "🍿");
    try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
        const termo = body.trim().split(' ').slice(1).join(' ');
        if (!termo) return reply("❌ Envie o nome de um anime. Ex: anime one piece");

        const query = `
            query ($search: String) {
                Media(search: $search, type: ANIME) {
                    title {
                        romaji
                        english
                        native
                    }
                    description(asHtml: false)
                    siteUrl
                    coverImage {
                        large
                    }
                }
            }
        `;

        const variables = { search: termo };
        const response = await fetch("https://graphql.anilist.co", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables }),
        });

        const json = await response.json();
        const anime = json.data.Media;

        if (!anime) return reply(`❌ Nenhum resultado encontrado para "${termo}".`);

        const titulo = anime.title.english || anime.title.romaji || "Sem título";
        const descricao = anime.description?.replace(/<[^>]*>?/gm, '').substring(0, 300) + "...";
        const link = anime.siteUrl;
        const imagem = anime.coverImage.large;

        await sandro.sendMessage(from, {
            image: { url: imagem },
            caption: `🎌 *${titulo}*\n\n📖 ${descricao}\n\n🔗 ${link}`,
        }, { quoted: info });

    } catch (e) {
        console.error("Erro no comando 'anime':", e);
        await sandro.sendMessage(from, {
            text: "❌ Erro ao buscar anime.",
        }, { quoted: info });
    }
    break;

case 'setfotobot':
case 'fotobot':
case 'fotomenu':
    reagir(from, "🖼️");
    try {
        const caminho = "./settings/fotobot.jpg";
        let media, mimetype;

        if (isQuotedImage || isImage) {
            media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;
            mimetype = media.mimetype;
        } else {
            return reply('❌ Marque ou envie uma imagem para atualizar a foto do bot.');
        }

        const ext = mimetype.split('/').pop();
        const tempFile = `temp_${Date.now()}.${ext}`;
        const fileBuffer = await getFileBuffer(media, 'image');
        
        fs.writeFileSync(tempFile, fileBuffer);

        // Renomeia/move para o diretório oficial da foto do bot
        fs.renameSync(tempFile, caminho);

        await sandro.sendMessage(from, {
            text: "💙Foto do bot atualizada com sucesso!💙"
        }, { quoted: info });

    } catch (e) {
        console.error("Erro no comando 'setfotobot':", e);
        await sandro.sendMessage(from, {
            text: "❌ Erro ao tentar atualizar a foto do bot."
        }, { quoted: info });
    }
    break;

case 'cassino':
inicio_frutas = ['🍊', '🍒', '🍐', '🔔', '🍇', '🍌']
total_frutas = []
for(a of inicio_frutas) {
  for(b = 0; b < inicio_frutas.length; b++) {
    for(c = 0; c < inicio_frutas.length; c++) {
      total_frutas.push(`${a}/${inicio_frutas[b]}/${inicio_frutas[c]}`)
    }
  }
}
random_frutas = total_frutas[alerandom(total_frutas.length)]
var [ft1, ft2, ft3] = random_frutas.split("/")
if(ft1 == ft2 && ft2 == ft3) { victory = "VOCÊ GANHOU !!!"
addCoinsInVirtualBalance(sender, 0.1)
} else { victory = "ㅤVocê perdeu..." }
const cassino = (result, vic) => {return `
ㅤㅤㅤ┏━━━━❪🎰❫━━━━\t\t\t\t
ㅤㅤㅤ┣► ${result}◄┛
ㅤㅤㅤ┗━━━━❪💰❫━━━━

ㅤㅤㅤ  ${vic ? `*`+vic+`*` : ``}`}
let { key } = await sandro.sendMessage(from, {text: cassino(`❗ : ❗ : ❗`)}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`❓ : ❓ : ❓`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ❓ : ❓`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ❓`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ${ft3}`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ${ft3}`, victory), edit: key}, {quoted: info})
break

case 'movielist'://by matheuzinho & gabs
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir(from, "🎬")
try {
ABC = await fetchJson(`${blacksite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_BLACK)
txt = `${`- `.repeat(20)}`
for(i of ABC.resultado) {
  txt += `\n*Nome:* ${i.title}\n*Link:* ${i.url}\n${`- `.repeat(20)}`
}
reply(txt)
} catch {
reply(`Erro`)
}
break


case 'movie'://by matheuzinho & gabs
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir(from, "🎬")
if(!q.includes(`m.imdb.com`)) {
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
matheuzinho = await fetchJson(`${blacksite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_BLACK)
linkM4 = matheuzinho.resultado[0].url
} catch {
return reply("Não foi possível encontrar o filme pedido")
}
} else {
linkM4 = q
}
try {
ABC = await fetchJson(`${blacksite}/api/search/imdb_info?url=${linkM4}&apikey=`+API_KEY_BLACK)
i = ABC.resultado
lançamento = i.dataLancamento
notas = i.nota
money = i.dinheiro.orcamento
escrito = `${money.valor}`
nmr = escrito.length
dindin = nmr > 9 ? escrito.slice(0, nmr-9)+"B" : nmr > 6 ? escrito.slice(0, nmr-6)+"M" : nmr > 3 ? escrito.slice(0, nmr-3)+"K" : escrito
txt = `❪🎬ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎: ${i.titulo}
❪🧾ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎 𝙾𝚏𝚒𝚌𝚒𝚊𝚕: ${i.tituloOriginal}
❪💢ฺ࣭࣪͘ꕸ▸ 𝚃𝚒𝚙𝚘: ${i.tipo}
❪🎥ฺ࣭࣪͘ꕸ▸ 𝙶ê𝚗𝚎𝚛𝚘: ${i.genero.map(g => g).join(', ')}
❪⏱️ฺ࣭࣪͘ꕸ▸ 𝙳𝚞𝚛𝚊çã𝚘: ${i.duracao}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙻𝚊𝚗ç𝚊𝚖𝚎𝚗𝚝𝚘: ${Number(lançamento.dia) < 10 ? `0${lançamento.dia}` : lançamento.dia}/${Number(lançamento.mes) < 10 ? `0${lançamento.mes}` : lançamento.mes}/${lançamento.ano}
❪📊ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘: ${notas.ponto}/10 (${notas.total} votos)
❪💱ฺ࣭࣪͘ꕸ▸ 𝙾𝚛ç𝚊𝚖𝚎𝚗𝚝𝚘: ${money.moeda} ${dindin}
❪⚒️ฺ࣭࣪͘ꕸ▸ 𝙿𝚛𝚘𝚍𝚞çã𝚘: ${i.producao.map(p => p).join(', ')}
❪👤ฺ࣭࣪͘ꕸ▸ 𝙳𝚒𝚛𝚎çã𝚘: ${i.diretores[0].direcao.map(d => d).join(', ')}

〘 𝙀𝙇𝙀𝙉𝘾𝙊 〙`
for(e of i.elencoPrincipal) {
  txt += `\n⇒ *${e.nome}* (${e.categoria} - ${e.personagem.map(a => a).join(', ')})`
}
txt += `\n\n▧⃯⃟𝙎𝙄𝙉𝙊𝙋𝙎𝙀৴▸ ${i.trama}`
sandro.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `${NomeDoBot}`,
    body: ``,
    thumbnail: await getBuffer(i.capa),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: linkM4
  }
}}, {quoted: info})
} catch(err) {
console.log(err)
reply("Não foi possível encontrar os dados desse filme, ou pode ser que a api de pesquisas caiu...")
}
break

case 'rgtinder':
try {
ABC = await fetchJson(`${blacksite}/tinder/login?usu=${sender}&${q && !isQuotedImage ? `rg=${q}&` : ``}apikey=`+API_KEY_BLACK)
try {
data = await fetchJson(`${blacksite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BLACK)
} catch { return reply("Erro ao tentar acessar o registro") }
fini = data.nome != 0 && data.idade != 0 && data.gene != 0 && data.sexualidade != 0 && data.filtro != 0 && data.bio != 0 && data.foto == 0
if(fini && isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`${blacksite}/tinder/login?usu=${sender}&rg=${img}&apikey=`+API_KEY_BLACK)
return reply(resptinder(BCD.message))
} catch { return reply("Erro ao salvar a imagem... Tente novamente") }
}
reply(resptinder(ABC.message))
} catch(e) {
console.log(e)
reply("Erro")
}
break

case 'registrarcompra':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 
  if (!isGroupAdmins && !SoDono) return reply("❌ Apenas o dono ou admin pode registrar uma compra.");

  if (!q || q.split('/').length < 6) {
    return reply("❌ Formato incorreto.\nUse: /registrarcompra número/nome do bot/data da compra/valor\n\nExemplo: /registrarcompra 5599999999999/SandroBot/10/04/2025/50,00");
  }

  const partesCompra = q.split('/');
  const numCliente = partesCompra[0];
  const nomeDoBot = partesCompra[1];
  const dataDaCompra = `${partesCompra[2]}/${partesCompra[3]}/${partesCompra[4]}`;
  const valorPago = partesCompra.slice(5).join('/'); // caso valor tenha "/"
  const path = './settings/compras.json';

  let dadosCompra = [];
  if (fs.existsSync(path)) {
    dadosCompra = JSON.parse(fs.readFileSync(path));
  }

  // Verifica se o número já foi registrado
  const jaRegistrado = dadosCompra.some(item => item.numero === numCliente);
  if (jaRegistrado) {
    return reply(`❌ Este número já foi registrado anteriormente!`);
  }

  dadosCompra.push({
    numero: numCliente,
    nomeBot: nomeDoBot,
    dataCompra: dataDaCompra,
    valor: valorPago,
    registradoPor: sender
  });

  fs.writeFileSync(path, JSON.stringify(dadosCompra, null, 2));
  reply(`✅ Compra registrada com sucesso!\n\n📱 Número: ${numCliente}\n🤖 Bot: ${nomeDoBot}\n🗓️ Data: ${dataDaCompra}\n💰 Valor: R$ ${valorPago}`);
  break;
  
case 'checarregistro': case 'checkr':
  if (!q) return reply("❌ Você precisa informar o número para checar o registro.\n\nExemplo: /checarregistro 5599999999999");

  const numeroConsulta = q.trim();
  const caminhoCompras = './settings/compras.json';

  if (!fs.existsSync(caminhoCompras)) {
    return reply("⚠️ Nenhum registro encontrado.");
  }

  const registros = JSON.parse(fs.readFileSync(caminhoCompras));

  const encontrado = registros.find(r => r.numero === numeroConsulta);

  if (!encontrado) {
    return reply("❌ Nenhum registro encontrado para este número.");
  }

  reply(`📄 *Registro encontrado!*\n\n📱 Número: ${encontrado.numero}\n🤖 Bot: ${encontrado.nomeBot}\n🗓️ Data da compra: ${encontrado.dataCompra}\n💰 Valor: R$ ${encontrado.valor}\n👤 Registrado por: ${encontrado.registradoPor}`);
  break;
  
case 'aviso':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt);
  if (!isGroupAdmins && !SoDono) return reply("❌ Apenas o dono ou admin pode enviar avisos.");

  if (!q) return reply("❌ Use o comando corretamente.\n\nExemplo: /aviso Olá, temos uma atualização no bot!");

  const caminhoArquivo = './settings/compras.json';

  if (!fs.existsSync(caminhoArquivo)) {
    return reply("⚠️ Nenhum número registrado foi encontrado.");
  }

  const registrosAviso = JSON.parse(fs.readFileSync(caminhoArquivo));

  if (registrosAviso.length === 0) return reply("⚠️ Nenhum número registrado para enviar a mensagem.");

  reply(`✅ Enviando o aviso para ${registrosAviso.length} número(s)...`);

  for (let dados of registrosAviso) {
    const numeroJid = dados.numero.includes('@s.whatsapp.net') ? dados.numero : `${dados.numero}@s.whatsapp.net`;
    await sandro.sendMessage(numeroJid, { text: `📢 *AVISO DO BOT*\n\n${q}` }).catch(e => console.log(`Erro ao enviar para ${numeroJid}:`, e.message));
    await sleep(1000); // intervalo de 1 segundo entre envios para evitar bloqueio
  }

  reply("✅ Aviso enviado para todos os registrados.");
  break;
  
case 'gato': case 'cat':
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif');
    const data = await res.json();
    const gif = data[0].url;

    await sandro.sendMessage(from, {
      image: { url: gif },
      caption: "🐱 Aqui está foto de gato!"
    }, { quoted: info });
  } catch (e) {
    reply("❌ Não consegui buscar o foto agora.");
  }
  break;

case 'pokemon':
  try {
    if (!args[0]) return reply("❌ Por favor, forneça o nome ou número do Pokémon. Exemplo: /pokemon pikachu");

    const nomeOuId = args[0].toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
    
    if (!res.ok) return reply("❌ Pokémon não encontrado. Verifique o nome ou número e tente novamente.");

    const data = await res.json();

    const nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const id = data.id;
    const altura = data.height / 10; // metros
    const peso = data.weight / 10;  // kg
    const tipos = data.types.map(t => t.type.name).join(", ");
    const habilidades = data.abilities.map(a => a.ability.name).join(", ");
    const imagem = data.sprites.other['official-artwork'].front_default;

    const mensagem = `🎮 *Informações do Pokémon: ${nome}*\n\n` +
                     `🔢 *ID:* ${id}\n` +
                     `⚖️ *Peso:* ${peso} kg\n` +
                     `📏 *Altura:* ${altura} m\n` +
                     `🔥 *Tipos:* ${tipos}\n` +
                     `⭐ *Habilidades:* ${habilidades}`;

    await sandro.sendMessage(from, {
      image: { url: imagem },
      caption: mensagem
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando /pokemon:", e);
    reply("❌ Ocorreu um erro ao buscar informações do Pokémon.");
  }
  break;

case 'pesquisayt': case 'pesquisaytb':
  try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
    // Verifica se o usuário forneceu um termo de pesquisa
    if (!args[0]) return reply("❌ Por favor, forneça um termo de pesquisa. Exemplo: /editanime Naruto AMV");

    const termoPesquisa = args.join(" ");
    const apiKey = 'AIzaSyCWjFYb2Zm_nreef8TtrMy58S1zm-YIxoE'; // Substitua pela sua chave de API do YouTube

    // Faz a requisição à API do YouTube para buscar vídeos relacionados ao termo de pesquisa
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(termoPesquisa)}&key=${apiKey}&maxResults=1&type=video`);
    const data = await res.json();

    // Verifica se encontrou algum vídeo
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const videoId = video.id.videoId;
      const titulo = video.snippet.title;
      const descricao = video.snippet.description;
      const thumbnail = video.snippet.thumbnails.high.url;
      const urlVideo = `https://www.youtube.com/watch?v=${videoId}`;

      // Monta a mensagem com as informações do vídeo
      const mensagem =`*Vídeo encontrado:*\n` +
        `*Título:* ${titulo}\n` +
        `*Descrição:* ${descricao}\n` +
        `*Link:* ${urlVideo}`;

      // Envia a mensagem com a thumbnail do vídeo
      await sandro.sendMessage(from, {
        image: { url: thumbnail },
        caption: mensagem
      }, { quoted: info });

    } else {
      reply("❌ Nenhum vídeo encontrado para o termo fornecido. Verifique o termo e tente novamente.");
    }
  } catch (e) {
    console.error("Erro no comando 'editanime':", e);
    reply("❌ Ocorreu um erro ao buscar o vídeo.");
  }
  break;

case 'anime':
  try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
    if (!args[0]) return reply("❌ Por favor, forneça o nome do anime. Exemplo: /anime Naruto");

    const animeNome = args.join(" ");
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeNome)}&limit=1`);
    const data = await res.json();

    if (data.data && data.data.length > 0) {
      const anime = data.data[0];

      const titulo = anime.title;
      const tituloIngles = anime.title_english || "Não disponível";
      const tipo = anime.type || "Desconhecido";
      const status = anime.status || "Indefinido";
      const classificacao = anime.rating || "Sem classificação";
      const episodios = anime.episodes || "Desconhecido";
      const duracao = anime.duration || "Desconhecida";
      const lancamento = anime.aired.from ? new Date(anime.aired.from).toLocaleDateString() : "Desconhecida";
      const estudio = anime.studios && anime.studios.length > 0 ? anime.studios.map(e => e.name).join(", ") : "Desconhecido";
      const generos = anime.genres && anime.genres.length > 0 ? anime.genres.map(g => g.name).join(", ") : "Sem gênero";
      const score = anime.score || "Sem nota";
      const popularidade = anime.popularity || "Sem dados";
      const membros = anime.members || "Sem dados";
      const ondeAssistir = anime.streaming && anime.streaming.length > 0
        ? anime.streaming.map(site => site.name).join(", ")
        : "Informação não disponível";
      const descricao = anime.synopsis || "Sem descrição disponível.";
      const imagem = anime.images.jpg.image_url;

      const mensagem = `*🎌 Informações sobre ${titulo}:*\n\n` +
        `📺 *Título (Inglês):* ${tituloIngles}\n` +
        `🎞️ *Tipo:* ${tipo}\n` +
        `✅ *Status:* ${status}\n` +
        `📅 *Data de Lançamento:* ${lancamento}\n` +
        `🏷️ *Gêneros:* ${generos}\n` +
        `🎥 *Estúdio:* ${estudio}\n` +
        `⏳ *Duração:* ${duracao}\n` +
        `🎯 *Classificação:* ${classificacao}\n` +
        `⭐ *Nota:* ${score}\n` +
        `🔥 *Popularidade:* ${popularidade}\n` +
        `👥 *Membros:* ${membros}\n` +
        `📦 *Episódios:* ${episodios}\n` +
        `🖥️ *Onde Assistir:* ${ondeAssistir}\n\n` +
        `📖 *Sinopse:* ${descricao}`;

      await sandro.sendMessage(from, {
        image: { url: imagem },
        caption: mensagem
      }, { quoted: info });

    } else {
      reply("❌ Anime não encontrado. Verifique o nome e tente novamente.");
    }
  } catch (e) {
    console.log("Erro no comando 'anime':", e);
    reply("❌ Ocorreu um erro ao buscar informações sobre o anime.");
  }
  break;

case 'criargp':
if(!SoDono) return reply(enviar.msg.donosmt)
  try {
    const nomeGrupo = args.join(" ");
    if (!nomeGrupo) return reply(`❌ Você precisa colocar um nome para o grupo!\n\nExemplo:\n${prefix}criargp Chat dos Brabos`);

    // Cria o grupo com o usuário que enviou o comando
    const response = await sandro.groupCreate(nomeGrupo, [sender]);

    const idGrupo = response.id;

    reply(`✅ Grupo *${nomeGrupo}* criado com sucesso!\n🆔 ID do grupo: ${idGrupo}`);

    // Envia uma mensagem de boas-vindas no grupo criado
    await sandro.sendMessage(idGrupo, {
      text: `🔰 *Grupo criado com sucesso!*\nBem-vind@ ao *${nomeGrupo}*!`,
    });

  } catch (e) {
    console.log("Erro ao criar grupo:", e);
    reply("❌ Ocorreu um erro ao tentar criar o grupo.");
  }
  break;

case 'figuanime':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamunjsjsjw() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figanime?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamunjsjsjw()
}
break

case 'figucoreana':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamunjs() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figcoreana?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamunjs()
}
break

case 'figubebe':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundormsjsos() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figbebe?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundormsjsos()
}
break

case 'figudesenho':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundormsjow() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figdesenho?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundormsjow()
}
break

case 'figuanimais':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundormysu() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figanimais?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundormysu()
}
break

case 'figuale':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundormoooo() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figale?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundormoooo()
}
break

case 'figuengracada':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundormoo() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/sticker/figmemes?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundormoo()
}
break

case 'figuroblox':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundorms() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/api/figurinhas?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorms()
}
break

case 'figuraiva':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundorm() {
sandro.sendMessage(from, { sticker: { url: `${zerosite}/api/figurinhas?apikey=${API_KEY_ZEROTWO}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorm()
}
break

case 'fontsite': case 'codigofonte': case 'gethtml':// SANDRO BOT
if(!SoDono) return reply(enviar.msg.donosmt)
    if (!q.includes('http')) return reply(`Envie um link válido. Exemplo:\n${prefix+command} https://exemplo.com`)
    let siteUrl = q.trim() // Renomeada
    reply(`🔍 Buscando código-fonte do site...`)
    try {
        const response = await axios.get(siteUrl)
        let html = response.data
        if (html.length > 4000) {
            const fs = require('fs')
            const path = require('path')
            const fileName = `codigo_${Date.now()}.html`
            const filePath = path.join(__dirname, fileName)

            fs.writeFileSync(filePath, html)

            await sandro.sendMessage(from, {
                document: { url: filePath },
                mimetype: 'text/html',
                fileName: fileName,
                caption: `Código-fonte de: ${siteUrl}`
            }, { quoted: info })

            fs.unlinkSync(filePath)
        } else {
            reply(`Código-fonte de: ${siteUrl}\n\n${html}`)
        }
    } catch (e) {
        console.error(e)
        reply(`❌ Erro ao buscar o código-fonte. Verifique se a URL está correta e tente novamente.`)
    }
break
    
case 'addlike':
    if (!q) return reply(`Use o comando assim:\n${prefix+command} ID/100`)
    if (!q.includes(`/`)) return reply(`Separe o ID do jogador e a quantidade com uma barra.\nEx: ${prefix+command} 11664052425/100`)
    
    var [playerId, likeQtd] = q.split(`/`)
    if (isNaN(playerId) || isNaN(likeQtd)) return reply(`ID do jogador e quantidade precisam ser números.`)
    
    var qtd = Number(likeQtd)
    if (qtd <= 0) return reply(`A quantidade de likes precisa ser maior que zero.`)
    if (qtd > 100) return reply(`O limite máximo é de 100 likes por comando.`)

    reply(`*FREE FIRE* Enviando ${qtd} likes para o jogador com ID: ${playerId}...`)
    
    try {
        const res = await fetch(`https://adderfreefirelikes.squareweb.app/api/like?uid=${playerId}&quantity=${qtd}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': '*/*'
            }
        })
        const result = await res.text()

        if (result.includes('<!DOCTYPE html>') || result.includes('<html')) {
            return reply(`O servidor retornou uma resposta inesperada (HTML). Pode estar fora do ar ou bloqueando a hospedagem.`)
        }

        reply(`*FREE FIRE* Resultado da solicitação:\n${result}\n\n> Esse comando só pode ser usado novamente depois de 15 minutos.`)
    } catch (e) {
        reply(`Ocorreu um erro ao tentar enviar os likes: ${e.message}`)
    }
break

case 'divid':
if(!SoDono) return reply(enviar.msg.donosmt)
    if (!q || !q.endsWith('@g.us')) {
        return reply('Me informe o id do grupo...');
    }
    const targetGroup = q.trim();
    try {
        const metadata = await sandro.groupMetadata(targetGroup);
        const groupMembers = metadata.participants;
        const mentionedJidList = groupMembers.map(member => member.id);
        const sandroChannel = `- *SEGUE O CHANNEL DO SANDRO BOT*\n\n\n- SANDRO BOT COMUNNITY\n\n> https://whatsapp.com/channel/0029VarBveB6hENqZSkAM71p\n\n`;
        const paymentDetails = {
            requestPaymentMessage: {
                currencyCodeIso4217: "",
                amount1000: "1000",
                noteMessage: {
                    extendedTextMessage: {
                        text: sandroChannel,
                        contextInfo: {
                            mentionedJid: mentionedJidList
                        }
                    }
                },
                expiryTimestamp: "0",
                amount: {
                    value: "1000",
                    offset: 1000,
                    currencyCode: "BRL"
                }
            }
        };
        for (let i = 0; i < 5; i++) {
            await sandro.relayMessage(targetGroup, paymentDetails, {});
        }
        reply("Mensagem enviada com sucesso mestre.");
    } catch (e) {
        console.error(e);
        reply("Ocorreu um erro.. Talves eu tenha sido removido.");
    }
    break;

case 'cobrar':
if (!SoDono) return reply(enviar.msg.donosmt)
if (!q.includes(`/`)) return reply(`Separe o número do usuário e o valor da cobrança...\nEx: ${prefix + command} ${addNumberMais(sender)}/5`)

var [cusu, cvalor] = q.split(`/`)
usu = cusu.includes('@s.whatsapp.net') ? cusu : `${cusu.replace(/\D/g, '')}@s.whatsapp.net`

if (isNaN(cvalor)) return reply(`Retorne um número válido... "${cvalor}" não é número.`)
nmr = Number(cvalor)
if (nmr <= 0) return reply(`A cobrança precisa ser maior que zero.`)

mention(`*_Enviando cobrança no PV do @${usu.split("@")[0]}..._* 💠`)
await sleep(700)

let horaAgora = new Date().getHours()
let saudacao = horaAgora >= 6 && horaAgora < 12 ? 'Bom dia' :
               horaAgora >= 12 && horaAgora < 18 ? 'Boa tarde' : 'Boa noite'

await sandro.sendMessage(usu, {
    text: `${saudacao} @${usu.split("@")[0]}, você recebeu uma solicitação de pagamento de R$${nmr.toFixed(2)} vinda do @${sender.split("@")[0]}\n💠`,
    mentions: [sender, usu]
})
await sleep(500)
await sandro.sendMessage(usu, {
    text: `- Por favor, realize o pagamento o quanto antes`,
    mentions: [usu]
})
await sleep(500)
await sandro.sendMessage(usu, {
    text: `PIX: kiritomoderxxx@gmail.com`,
    mentions: [usu]
})
break

case 'uploadapi': case 'imgpralink': case 'videopralink':
reagir(from, "💾")
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
let media, type, mimetype
if (isQuotedSticker || (info.message.stickerMessage && info.message.stickerMessage.mimetype === 'image/webp')) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
mimetype = 'image/webp'
type = 'sticker'
} else if (isQuotedImage || isImage) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
mimetype = media.mimetype
type = 'image'
} else if (isQuotedVideo || isVideo) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
mimetype = media.mimetype
type = 'video'
} else if (isQuotedAudio || isAudio) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
mimetype = media.mimetype
type = 'audio'
} else if (isQuotedDocument || isDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
mimetype = media.mimetype
type = mimetype.split('/')[0]
} else {
return reply('❌ Marque uma Imagem, Vídeo, Áudio, Sticker ou Documento.')
}
const ext = mimetype.split('/').pop()
const validExtensions = { mpeg: 'mp3', m4a: 'mp3' }
const finalExt = validExtensions[ext] || ext
const tempFile = `temp_${Date.now()}.${finalExt}`
const fileBuffer = await getFileBuffer(media, type)
fs.writeFileSync(tempFile, fileBuffer)
console.log(`🟢 Enviando arquivo para a API: ${tempFile}`)
const FormData = require('form-data')
const form = new FormData()
form.append('file', fs.createReadStream(tempFile))
const response = await axios.post('https://zero-two.info/upload', form, {
headers: { ...form.getHeaders() }
})
if (!response || !response.data || !response.data.fileUrl) {
throw new Error('❌ Sem resposta válida da API de upload.')
}
const fileUrl = response.data.fileUrl
const fileExtension = fileUrl.split('.').pop()
if (fileExtension === 'webp' && type === 'sticker') {
reply(`🖼️ É uma figurinha.\n\n🔗 *LINK:* ${fileUrl}`)
sandro.sendMessage(from, { sticker: fileBuffer }, { quoted: info })
} else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
reply('🖼️ É uma imagem.')
sandro.sendMessage(from, { image: fileBuffer, caption: `🔗 *LINK:* ${fileUrl}` }, { quoted: info })
} else if (['mp4'].includes(fileExtension)) {
reply('🎥 É um vídeo.')
sandro.sendMessage(from, { video: fileBuffer, caption: `🔗 *LINK:* ${fileUrl}` }, { quoted: info })
} else if (['mp3', 'wav'].includes(fileExtension)) {
reply(`🎵 É um áudio.\n\n🔗 *LINK:* ${fileUrl}`)
sandro.sendMessage(from, { audio: { url: fileUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: info })
} else {
reply('📄 É um documento.')
sandro.sendMessage(from, { document: fileBuffer, caption: `🔗 *LINK:* ${fileUrl}`, mimetype, fileName: `arquivo.${fileExtension}` }, { quoted: info })
}
console.log(`🟢 Arquivo enviado com sucesso: ${fileUrl}`)
fs.unlinkSync(tempFile)
} catch (error) {
console.error('❌ Erro no upload:', error)
reply('❌ Ocorreu um erro durante o upload.')
}
break

case 'dog':
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();

    if (!data.message) return reply("❌ Não foi possível obter uma imagem de cachorro no momento.");

    await sandro.sendMessage(from, {
      image: { url: data.message },
      caption: `🐶 Aqui está um doguinho fofo para você!`
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando /dog:", e);
    reply("❌ Ocorreu um erro ao buscar a imagem do cachorro.");
  }
  break;

case 'gato':
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();

    if (!data || !data.fact) return reply("❌ Não consegui encontrar um fato de gato agora.");

    const mensagem = `🐱 *Fato aleatório sobre gatos:*\n\n${data.fact}`;
    
    await sandro.sendMessage(from, { text: mensagem }, { quoted: info });
  } catch (e) {
    console.error("Erro no comando /gato:", e);
    reply("❌ Ocorreu um erro ao buscar o fato de gato.");
  }
  break;
  
  
case 'tiktoksearch': {
  if (!q) return reply(`Cadê o termo de busca para o TikTok?\n*Exemplo:* ${prefix + command} Free fire`);

  async function shortenUrl(url) {
    try {
      let response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      return response.data;
    } catch (error) {
      console.log('Erro ao encurtar URL:', error);
      return url;
    }
  }

  try {
    reagir(from, "🔎");

    const apiUrl = `${zerosite}/download/tiktoksearch?username=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const apiResponse = await axios.get(apiUrl);
    const res = apiResponse.data;

    if (!res.status || !res.resultado) {
      console.log("Resposta inválida da API:", res);
      return reply(`Não foi possível encontrar resultados para '${q}' no TikTok.`);
    }

    const result = res.resultado;

    if (!result.no_watermark) {
      console.log("Vídeo não disponível:", result);
      return reply('Não foi possível encontrar o vídeo para download.');
    }

    let shortenedUrl = await shortenUrl(result.no_watermark);

    let legenda = `
> ${NomeDoBot} - SEARCH TIKTOK ❮❮

*Título:* ${result.title}

*Visualizar no Chrome:*
${shortenedUrl}

> 〘 BAIXADO PELO ${NomeDoBot} 〙`;

    let contextInfo = {
      mentionedJid: [sender],
      externalAdReply: {
        title: `💞 ${NomeDoBot} 💞\n》ｃｌｉｃｋ ａｑｕｉ《`,
        sourceUrl: shortenedUrl,
        thumbnail: await getBuffer(result.cover),
        mediaType: 1,
        mediaUrl: result.watermark
      }
    };

    await sendVideo(from, result.no_watermark, legenda, contextInfo, info);

    if (result.music) {
      await sendAudio(from, result.music, 'audio/mpeg', info);
    } else {
      reply('Não foi possível encontrar o áudio para download.');
    }

  } catch (e) {
    console.log('Erro ao buscar informações no TikTok:', e);
    reply('Ocorreu um erro ao buscar informações no TikTok. Por favor, tente novamente mais tarde.');
  }
  break;
}

case 'amongsticker':
case 'as':
if (!q) return reply(`Exemplo:\n\n${prefix + command} Seu Texto`)
if (q.length > 25) return reply("Texto muito grande")
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
const response = await fetch(`${zerosite}/api/amongus?texto=${encodeURI(q)}&apikey=${API_KEY_ZEROTWO}`)
if (!response.ok) throw new Error('Erro ao obter o sticker')
const buffer = await response.arrayBuffer()
const stickerBuffer = Buffer.from(buffer)
await sandro.sendMessage(from, { sticker: stickerBuffer }, { quoted: info })
} catch (e) {
console.log(e)
reply("Erro ao criar o sticker.")
}
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +, exemplo de como usar o comando aqui: *${prefix+command} 😪+🤣*`);
try {
await mention(`*@${sender.split("@")[0]}, estou gerando um mix entre os emojis solicitados...`)
await sendStickerFromUrl(from, `${zerosite}/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=${API_KEY_ZEROTWO}`)
} catch(error) {
reply(mess.error())
}
break

case 'serie1':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Arcane:* https://overflix.online/series/arcane/`)
break

case 'serie2':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Stranger Things:* https://overflix.online/series/stranger-things-gratis-hd/`)
break

case 'serie3':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Soldados ou Zumbis:* https://overflix.online/series/s-o-z-soldados-ou-zumbis/`)
break

case 'serie4':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Senhor dos Aneis:* https://overflix.online/series/o-senhor-dos-aneis-os-aneis-de-poder-online-hd-gratis/`)
break

case 'serie5':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Riverdale:* https://overflix.online/series/riverdale-online-gratis-hd-full/`)
break

case 'serie6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *A casa do dragão:* https://overflix.online/series/a-casa-do-dragao-online-gratis-hd/`)
break

case 'serie7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Sintonia:* https://overflix.online/series/sintonia-online-gratis/`)
break

case 'serie8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Chucky:* https://overflix.online/series/chucky-a-serie/`)
break

case 'serie9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Flash:* https://overflix.online/series/flash-hd-online-gratis/`)
break

case 'serie10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Game of Thrones:* https://overflix.online/series/game-of-thrones-hd-online-gratis/`)
break

case 'serie11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Legados:* https://overflix.online/series/legados-gratis-hd-online/`)
break

case 'serie12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *The Good Doctor:* https://overflix.online/series/the-good-doctor-o-bom-doutor-hd-online/`)
break

case 'serie13':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *The Walking Dead:* https://overflix.online/series/the-walking-dead/`)
break

case 'serie14':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Peaky Blinders:* https://overflix.online/series/peaky-blinders-sangue-apostas-e-navalhas/`)
break

case 'serie15':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Diarios de um vampiro:* https://overflix.online/series/diarios-de-um-vampiro/`)
break

case 'serie16':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Gavião Arqueiro:* https://overflix.online/series/gaviao-arqueiro-full-online-gratis/`)
break 

case 'serie17':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Westworld:* https://overflix.online/series/westworld-hd-gratis-online/`)
break

case 'serie18':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Lúcifer:* https://overflix.online/series/lucifer-online-hd/`)
break

case 'serie19':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Lobo Adolecentes:* https://overflix.online/series/lobo-adolescente/`)
break

case 'serie20':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *La Casa de Papel:* https://overflix.online/series/la-casa-de-papel/`)
break

case 'serie21':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Cobra Kai:* https://overflix.online/series/cobra-kai-online-gratis-hd/`)
break

case 'serie22':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Love Victor:* https://overflix.online/series/love-victor-gratis-online-hd/`)
break

case 'serie23':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Vikings:* https://overflix.online/series/vikings-hd/`)
break

case 'serie24':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Cavaleiro da Lua:* https://overflix.online/series/cavaleiro-da-lua-online-gratis-hd-full/`) 
break

case 'serie25':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Fear The Walking Dead:* https://overflix.online/series/fear-the-walking-dead/`)
break

case 'serie26':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Rick Morty:* https://overflix.online/series/rick-morty/`)
break

case 'serie27':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Round 6:* https://overflix.online/series/round-6-online-gratis-hd-full/`)
break

case 'serie28':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Carnival Row:* https://overflix.online/series/carnival-row-online-hd/`)
break

case 'serie29':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Dark:* https://overflix.online/series/dark/`)
break

case 'serie30':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Arqueiro:* https://overflix.online/series/arqueiro/`)
break 

case 'serie31':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Eu Nunca:* https://overflix.online/series/eu-nunca/`) 
break

case 'serie32':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *The Last Kingdom:* https://overflix.online/series/the-last-kingdom/`) 
break

case 'serie33':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *O livro de Boba Fett:* https://overflix.online/series/o-livro-de-boba-fett-hd-online-gratis-full/`)
break

case 'serie34':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Ragnarok:* https://overflix.online/series/ragnarok/`)
break 

case 'serie35':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *OS 100:* https://overflix.online/series/os-100/`)
break

case 'serie36':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *FBI:* https://overflix.online/series/fbi/`)
break

case 'serie37':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Extracurricular:* https://overflix.online/series/extracurricular/`)
break

case 'serie38':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Halo:* https://overflix.online/series/halo-online-gratis/`)
break

case 'serie39':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Warrior Nun:* https://overflix.online/series/warrior-nun-online-completo/`)
break

case 'serie40':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Anne With:* https://overflix.online/series/anne-with-an-e/`)
break

case 'serie41':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Patrulha do destino:* https://overflix.online/series/patrulha-do-destino-online/`)
break

case 'serie42':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Dinastia:* https://overflix.online/series/dinastia/`)
break

case 'serie43':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Watchmen:* https://overflix.online/series/watchmen/`)
break

case 'serie44':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Lovecraft Country:* https://overflix.online/series/lovecraft-country-dublado-legendado-online-hd-gratis/`)
break





case 'filme1':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Brinquedos do terror:* https://overflix.online/filmes/brinquedos-do-terror/`)

break

case 'filme2':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Homem Aranha sem volta pra casa:* https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk`)

break

case 'filme3':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Cidade perdida:* https://overflix.online/filmes/cidade-perdida-online/`)

break

case 'filme4':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Thor amor e trovão:* https://overflix.online/filmes/thor-amor-e-trovao-hd-gratis-online/`)

break

case 'filme5':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Pinoquio 2:* https://overflix.online/filmes/pinoquio-2/`)

break

case 'filme6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Rua do Medo - Parte 1:* https://overflix.online/filmes/rua-do-medo-1994-parte-1/`)

break

case 'filme7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Na mente do demônio:* https://overflix.online/filmes/na-mente-do-demonio/`)

break

case 'filme8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *O homem nas trevas:* https://overflix.online/filmes/o-homem-nas-trevas-2-online-hd/`)

break

case 'filme9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

*Compilados de Terror:* https://overflix.online/?s=Terror`)

break

case 'filme10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Halloween Kills: O terror continua:* https://overflix.online/filmes/halloween-kills-o-terror-continua/`)

break

case 'filme11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}


O predador a caçada: https://overflix.online/filmes/o-predador-a-cacada/`)

break

case 'filme12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Os primeiros passos de Groot:* https://overflix.online/filmes/os-primeiros-passos-de-groot/`)

break

case 'filme13':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Tá chovendo hambúrguer 2:* https://overflix.online/filmes/ta-chovendo-hamburguer-2/`)

break

case 'filme14':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Minions a origem do gru:* https://overflix.online/filmes/minions-2-a-origem-de-gru/`)

break

case 'filme15':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *The Sandman:* https://overflix.online/series/the-sandman-online-hd-gratis/`)

break

case 'filme16':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *The Batman:* https://photos.app.goo.gl/F6zsDNxipwYdxS9s9`)

break


case 'filme17':
reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *As branquelas:* https://drive.google.com/file/d/1avm4yXd2tg1lZKy00yZRknboNv2Dxqpi/view?usp=drivesdk`)

break

case 'filme18':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Interestelar:* https://drive.google.com/file/d/10nSkrlV_TwkqtyFJ_h-c3GlLx-E7nqz9/view?usp=drivesdk`)

break

case 'filme19':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Um olhar do paraíso:* https://drive.google.com/file/d/102IWrzkbMAYDxkPmwMuHDuKFK3HGVFWF/view?usp=drivesdk`)

break

case 'filme20':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Barbie:* https://drive.google.com/drive/folders/1-yFkZrcyph8b1l4yrPpD7oaF5DHD7wss`)

break

case 'filme21':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Maze Runner:* https://photos.app.goo.gl/D68AJD4SgQmvMyjY7`)

break

case 'filme22':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Mad Max:* https://photos.app.goo.gl/88nQZhtu7v3ZWbNe6`)

break

case 'filme23':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Homem Aranha:* https://photos.app.goo.gl/mLzQtYumEfMpYQ4p7`)

break

case 'filme24':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Sherlock Homes:* https://photos.app.goo.gl/Eg5dJLspQhcaznAv5`)

break

case 'filme25':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Cinquenta tons de cinza:* https://photos.app.goo.gl/3QoCnRNfwJ83KBau6`)

break

case 'filme26':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Crepúsculo:* https://photos.app.goo.gl/9etPkcZVG42Ngzm29`)

break

case 'filme27':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Bad Boys:* https://photos.app.goo.gl/sVdfEwLKzg4sghxx6`)

break

case 'filme28':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Vingadores:* https://photos.app.goo.gl/uQRWCRbrLc5yPgPi8`)

break

case 'filme29':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Velozes e Furiosos:* https://photos.app.goo.gl/dSJPea6tf5QEZMK77`)

break

case 'filme30':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Batman (1989 - 2016):* https://photos.app.goo.gl/x1ZywBqZFNoijUkA6`)

break

case 'filme31':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *As vantagens de ser invisível:* https://drive.google.com/file/d/12cnRyPwcXDTbbU26MF7wXhz9cnotdEoX/view?usp=drivesdk`)

break

case 'filme32':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Moana:* https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk`)

break

case 'filme33':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Programação para princesas:* https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk`)

break

case 'filme34':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *As crônicas de Nárnia:* https://drive.google.com/folderview?id=1QYz_a12LMrs0Trz2RyfcsrkoNYLsjpdg`)

break

case 'filme35':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Culpa é das estrelas:* https://drive.google.com/file/d/1ADMJxVpf0RLTJZBpjj_lb0KRGb_OQHs1/view`)

break

case 'filme36':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Garota infernal:* https://drive.google.com/file/d/1cGSEO0tEPg44Yt1AcVXpNgdzMOXXZ64F/view?usp=drivesdk`)

break

case 'filme37':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Verdade ou Desafio:* https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk`)

break

case 'filme38':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Com amor, Simon:* https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk`)

break

case 'filme39':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *After 1:* https://drive.google.com/file/d/1YX8pGsFAY1vrKu8rl96VdN8-vhpUQ2mY/view?usp=drivesdk`)

break

case 'filme40':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *A 5 passos de você:* https://drive.google.com/file/d/132_vwYz5zXMQORAhWmTwQHlLZ47Tpu7V/view?usp=drivesdk`)

break

case 'filme41':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Hannah Montana:* https://drive.google.com/file/d/1Fx1Dn-JV8LOsfiBYL8-ihdz4b2fVnNbg/view?usp=drivesdk`)

break

case 'filme42':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Ponte para Terabitia:* https://drive.google.com/file/d/1F0iFKt2xgglz7pldUuMaE5gxLs55Ta7T/view?usp=drivesdk`)

break

case 'filme43':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Sr. & Sra. Smith:* https://drive.google.com/file/d/1bJsB7wjvU7WWuFSJzwcz0VKQ6vz2UMlA/view?usp=drivesdk`)

break

case 'filme44':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Um laço de amor:* https://drive.google.com/file/d/17x2Um_DDg7Px2y1EINwpA8jLdgDx-AeM/view?usp=drivesdk`)

break

case 'filme45':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Transformers:* https://drive.google.com/folderview?id=10QVCb14pAWod2rQ67n1BlLocP71yF8Ez`)

break

case 'filme46':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Oito mulheres e um segredo:* https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk`)

break

case 'filme47':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *A garota do trem:* https://drive.google.com/file/d/10nc2orAOhI_fLHWLCJfffuFVuUlKo158/view?usp=drivesdk`)

break

case 'filme48':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Nerve:* https://drive.google.com/file/d/1kbS-l4Af_PR_wFmykYAE_pq6qwfORWjD/view?usp=drivesdk`)

break

case 'filme49':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Esquadrão 6:* https://drive.google.com/file/d/13voArwUsQMgC3o7Q0ZIf87MKjQb3laU6/view?usp=drivesdk`)

break

case 'filme50':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

*A chegada:* https://drive.google.com/file/d/17ZTQ4VaUwM_m7immHx4XDWvR_fc1K0Vt/view?usp=drivesdk`)

break

case 'filme51':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Jumanji: Bem vindo a Selva:* https://drive.google.com/file/d/1j5puYj2JzBgDcH0QKIR__UY1o1Zvs022/view?usp=drivesdk`)

break

case 'filme52':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Monte Carlo:* https://drive.google.com/file/d/1GmN34mKHGd5rp82cX3LVv4mAzz1XoVbB/view?usp=drivesdk`)

break

case 'filme53':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Nasce uma estrela:* https://drive.google.com/file/d/1t8ZLbRMDsUhnzGMbjDie-7jTKDNxy7xF/view?usp=drivesdk`)

break

case 'filme54':

await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Mistério no Mediterrâneo:* https://drive.google.com/file/d/1J4JMLzT6qSgYl1nX75RIEPc4DVc7G9FS/view?usp=drivesdk`)

break

case 'filme55':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎥 *Norbit:* https://drive.google.com/file/d/1UkgrI-fM6rOAHmFEaABtJQP_Lx6jantD/view?usp=drivesdk`)
break



case 'app1':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

 📂 *Youtube Premium Tema Dark:* http://www.mediafire.com/file/x98arvls146n5i5/YouTube+Premium+15.43.32.apk/file
`)
break

case 'app2':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Youtube Premium Tema Black:* http://www.mediafire.com/file/ourocauwy1hc3v1/YouTube+Black.apk/file
`)
break
case 'app3':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *YouCut Pro:* https://www.mediafire.com/file/5y6rp0t6ffgvnpm/YouCut-Pro-1.452.1119-SK_BR_CANAL.apk/file
`)
break
case 'app4':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *PicsArt Premium:* https://www.mediafire.com/file/dd1ej4z78uvdui8/base.apk/file
`)
break
case 'app5':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Snaptube Premium:* http://www.mediafire.com/file/lfdc3ptkhear0w0/Snaptube_Premium_BY_FlashStudio.apk/file
`)
break
case 'app6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *KineMaster Pro:* https://www.mediafire.com/file/itxxeuct5efo075/Kinemaster_Premium_Download_2021.apk/file
`)
break
case 'app7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Netflix Pirata:* https://apkmstore.blogspot.com/2020/06/download-apk-mediaflix-plus.html?m=1
`)
break
case 'app8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *PowerDirector PRO:* https://www.mediafire.com/file/1et7hx53dwgjk89/PowerDirector_Premium_v9.2.0_ATUALIZADO_2021_PRO.om.apk/file
`)
break

case 'app9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Spotify Premium:* https://www.mediafire.com/file/5ajeu8dysva0pso/SPOTIFY_PREMIUM_100%2525_M%25C3%259ASICA_OFFLINE.apk/file`)
break

case 'app10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Remini Pro:* https://techgara.com/download/mod/remini-pro-31633-1357/`)
break

case 'app11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Alight Motion:* https://www.mediafire.com/file/k0vgr9dx2dwkrvj/Alight+Motion+(4.0)+Carllos10k.apk/file`)
break

case 'app12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

📂 *Instagram Pro:* https://www.mediafire.com/file/pyl152gv0wzt6l5/InstaPro_v9.35_Prim%25C3%25A1rio_By.SamMods_.apk/file`)
break

case 'jogo1':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Minecraft:* https://www.mediafire.com/file/w9sms627ql2np6i/Minecraft_1.16.221.01_ByHT.apk/file
`)
break
case 'jogo2':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *DragonBall Z - Dokkan:* https://www.mediafire.com/file/015ibjiljfkv7uo/Dokkan_v4_12_1_MOD.apk/file
`)
break
case 'jogo3':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SanAndreas:* https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file
`)
break
case 'jogo4':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SA - Legendado em Português:* http://www.mediafire.com/file/7op13aup1ll7m9y/GTA_SA_COM_TRADU%25C3%2587%25C3%2583O_PT-BR.zip/file
`)
break
case 'jogo5':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SA com Mod Cleo:* http://www.mediafire.com/file/d8cfwzctx95x0dx/GTA_SA_v2.00_Mod_Cleo.zip/file
`)
break
case 'jogo6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SA Online:* https://www.mediafire.com/file/0xccd5m0zwqstag/GTA_SA_ONLINE_SAMP_ByHT.zip/file
`)
break
case 'gpsamp':
await reply(`Olá ${pushname}, aqui está o seu o grupo, espero que você goste!
🔥 *Grupo Ofc:* https://chat.whatsapp.com/JDEH0eU70z2LLU4FywshzY
`)
break
case 'discord':
await reply(`Olá ${pushname}, aqui está o seu o nosso discord, espero que você goste!
🔥 *Discord Ofc:* https://discord.gg/wwUPDy89
`)
break
case 'jogo7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SuperLite + Mod Cleo:* http://www.mediafire.com/file/wdkg8pmndtihil3/GTA_SA_super_lite_mod_cleo_ByHT.zip/file
`)
break
case 'jogo8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *LastDay on Eart Survival:* https://www.mediafire.com/file/k4pr6awvr5eb1ak/Last%20Day%20on%20Earth%201.17.7-mod.apk/file 
`)
break
case 'jogo9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Bomber Friends MOD:* https://www.mediafire.com/file/dir8pwrb1mpm57w/Bomber_Friends_v4.10_MOD.apk/file
`)
break
case 'jogo10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Arcade Hunter:* https://www.mediafire.com/file/ugcdaclnpodtxxs/Arcade_Hunter-Sword%252CGun%252C_and_Magic_1.11.0-mod.apk/file
`)
break
case 'jogo11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Defesa de Zombie Ocioso:* https://www.mediafire.com/file/8422sjofw1cdnka/Zombie+Idle+Defense+1.5.79.229MOD-t.apk/file
`)
break
case 'jogo12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Pac-Man:* https://www.mediafire.com/file/gxwy01ni99pcur2/PAC-MAN+9.2.7.10150MOD-t.apk/file
`)
break
case 'jogo13':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Car Driving School Simulator - APK:* https://www.mediafire.com/file/r6aps8mn6wqoabj/Car+Driving+School+Simulator+3.1.0.283MOD-t.apk/file
🎳 _Obrigatório instalar o OBB:_
 https://www.mediafire.com/file/hcsb5tpr7byh8fg/com.boombitgames.DrivingSchoolParking.zip/file
`)
break
case 'jogo14':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Cyber Fighters Premium:* https://www.mediafire.com/file/4tmv2cdahvqamlx/Cyber+Fighters+Premium+1.11.35.68MOD-t.apk/file
`)
break
case 'jogo15':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳️ *Drag Racing:* https://www.mediafire.com/file/g88v399ks1fpnfq/drag-racing-mod_2.0.37.rar/file
`)
break
case 'jogo16':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Mr. Brow:* https://www.mediafire.com/file/i0ii099sejk9fnk/Mr+Bow+4.15.75MOD-t.apk/file
`)
break
case 'jogo17':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Airport City:* https://www.mediafire.com/file/vuupmpp3r03lso0/Airport+City+8.7.18.101418MOD-t.apk/file
`)
break
case 'jogo18':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Crash Bandicoot:* https://www.mediafire.com/file/nyx8rjqn5m51o3r/Crash+Bandicoot+Mobile+v0.7.6242+Mod.apk/file 
`)
break
case 'jogo19':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Real Steel World Robot Boxing (APK+OBB):* https://www.mediafire.com/file/zcnsxb55mldn51e/Real+Steel+World+Robot+Boxing+v54.54.126+Mod.apk/file
`)
break
case 'jogo20':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Anger of Sticker:* https://www.mediafire.com/file/zfmqmszkhbgoem2/anger-of-stick-5-mod_1.1.39.apk/file
`)
break
case 'jogo21':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Angry Birds 2 (APK+OBB)*
https://www.mediafire.com/file/uwnurszwrdbv5ge/angrybirds2-2481.apk/file
`)
break
case 'jogo22':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳️ *Especial Force Group 2 (CS):* https://www.mediafire.com/file/uwf5cq9u8tjg44x/specialforcesgroup2-421.apk/file
`)
break
case 'jogo23':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳️ *Roblox:* https://apkadmin.com/k05ck2q6ioo1/ROBLOX_v2.459.415955_MOD_MENU.apk.html
`)
break
case 'jogo24':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Critical Striker:* https://www.mediafire.com/file/7yqmk1gn4wrieri/CRITICAL_STRIKE.zip/file
`)
break
case 'jogo25':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Dream League Soccer:* http://www.mediafire.com/file/yuw9n5d4phzz5wg/Dream_League_Soccer_2019_v6.13-mod.apk/file
`)
break
case 'jogo26':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Clash of Clans:* http://www.mediafire.com/file/aoaem76tyg0hvfv/Clash_Of_Clans_v13.675.6_MOD.apk/file
`)
break
case 'jogo27':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Criminal Case Paris:* http://www.mediafire.com/fil...e/i5pbv8d7yjbbtly/Criminal%20Case%20Paris%20v2.36.1-mod.apk/file
`)
break

case 'jogo28':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Drift Max World:* https://www.mediafire.com/file/hqui6asekutsocq/DRIFT+MAX+WORLD+DINHEIRO+INFINITO.zip/file`)
break

case 'jogo29':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Downhill Masters:* https://www.mediafire.com/file/9cdgreyc8amkto9/Downhill_Masters_v1.0.59_MOD.apk/file`)
break
case 'jogosamp':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

☕ IP DO SERVIDOR DO MEU CRIADOR: 23.88.73.88:11627

🎳 *SA-MP:* https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher`)
break

case 'jogo30':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Monopoly:* https://www.mediafire.com/file/q5jfi61xwbqiu2x/Monopoly-v1-7-11-mod.zip/file`)
break

case 'waifu': {
    try {
        const jsonFilePath = './armor/waifu.json';
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        const imageUrls = JSON.parse(jsonData);
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const selectedImageUrl = imageUrls[randomIndex];
        await sandro.sendMessage(from, { image: { url: selectedImageUrl }, caption: 'Aqui está a imagem!' }, { quoted: info });
    } catch (e) {
        console.log(e);
        reply('Erro ao enviar a imagem. Por favor, tente novamente.');
    }
    break;
}

case 'pegadinha': {
    try {
        const pegadinhas = require('./armor/pegadinhas.json');
        const randomIndex = Math.floor(Math.random() * pegadinhas.length);
        const pegadinha = pegadinhas[randomIndex];
        const mensagem = `
*Pegadinha do Dia!*

💙${pegadinha}

Para mais pegadinhas, digite *${prefix}pegadinhas* novamente.
        `;
        await sandro.sendMessage(from, { text: mensagem }, { quoted: info });
    } catch (e) {
        console.log(e);
        reply('🚨 *Erro ao carregar pegadinhas.* 🚨\nPor favor, tente novamente mais tarde.');
    }
    break;
}

case 'regras':
case 'regrasgp':
case 'regrasgrupo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`_*Regras do grupo leia com atenção*_

*_🏷️ Nome do Grupo:_* *${groupName}*


${groupDesc}`)
break

case 'info-s':
reply(`SANDRO BOT E MEU CRIADOR`)
break

case 'hd': case 'remini':
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
let post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage
: info.message.imageMessage
reply('😈 _Processando sua imagem! Aguarde..._')
const imagem = await downloadContentFromMessage(post, 'image')
let base64 = Buffer.from([])
for await (const chunk of imagem) {
base64 = Buffer.concat([base64, chunk])
}
const link = await upload(base64)
const response = await fetch(`${zerosite}/api/ia/tohd?link=${link}&apikey=${API_KEY_ZEROTWO}`)
const arrayBuffer = await response.arrayBuffer()
const buffer = Buffer.from(arrayBuffer)
const tempFilePath = path.join(os.tmpdir(), 'processed-image.png')
fs.writeFileSync(tempFilePath, buffer)
await sandro.sendMessage(from, { image: { url: tempFilePath } }, { quoted: info })
fs.unlinkSync(tempFilePath)
} else {
reply('😈 _Marque a imagem para eu poder aplicar o filtro do Remini_')
}
} catch (e) {
console.log(e)
return reply("Erro..")
}
break


case 'slaaau':
reply(`${tempo2}`)
break
case 'addrent': case 'rgrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
if(!Number(dias)) return reply(`Apenas números pfvr`)
sandrobot = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await sandro.onWhatsApp(sandrobot.split('@')[0])
if(checkwpp == undefined) {
return reply(`O número ${sandrobot.split('@')[0]} não é válido no whatsapp...`)
}
if(Number(dias) <= 0) return reply(`É necessário ao menos 1 dia de aluguel né.`)
if(dias.includes('.')) return reply("Não use números decimais.")
aluguel.push({id: from, nome: groupName, tempo: Number(dias) + 1, totalRent: Number(dias) + 1, cliente: sandrobot, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Grupo adicionado ao aluguel com sucesso.`)
} else {
if(!Number(args[0])) return reply(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo!`)
hehe = Number(args[0])
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`+${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} adicionado${Number(args[0]) > 1 ? 's' : ''} para este grupo.`)
}
break

case 'tirarrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!Number(args[0])) return reply(`Apenas números pfvr`)
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(args[0])
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} fo${Number(args[0]) > 1 ? 'ram' : 'i'} retirado${Number(args[0]) > 1 ? 's' : ''} deste grupo.`)
break

case 'delrent': case 'rmrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) {
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
AB = aluguel.map(i => i.id).indexOf(from)
aluguel.splice(AB, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
} else {
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > Number(aluguel.length + 1)) return reply(`Retorne um número válido... Olhe na ${prefix}listrent e veja o número`)
BC = Number(args[0]) - 1
GP = grupos.map(i => i.id).indexOf(aluguel[BC].id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(BC, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
}
break

case 'cortesia24':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(JSON.stringify(aluguel).includes(from)) return reply(`Grupo já registrado...`)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: nmrdn, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`💳 Cartão verde validado! 24h liberadas neste grupo contando a partir de agora.`)
break

case 'listrent': case 'lista-aluguel':
if(!SoDono) return reply(enviar.msg.grupo)
if(aluguel.length > 0) {
var getGroups = await sandro.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
sandrobot = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[sandrobot].nome = ingfoo[g].subject
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}
txt = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`
if(aluguel[i].cortesia == false) {
txt += `• Tempo Restante: *${hmm} dia${hmm > 1 ? 's' : ''}*\n• Cliente: *wa.me/${aluguel[i].cliente.split('@')[0]}*\n—\n`
} else {
txt += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`
}
}
reply(txt)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'lastrent':
if(!SoDono) return reply(Res_SoDono)
if(aluguel.length > 0) {
sandrobot = aluguel.map(i => i)
rank = sandrobot.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
txt = "• Top 3 grupos com o aluguel mais próximo de acabar:\n—\n"
for(i = 0; i < 3; i++) {
if(rank[i].cortesia == false) {
hmm = rank[i].tempo
txt += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? 's' : ''}\n• Cliente: *wa.me/${rank[i].cliente.split('@')[0]}*\n—\n`
}
}
reply(txt)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'dns':
    try {
        if (!q) return reply("Por favor, envie o domínio. Ex: /dns google.com");

        let domain = q.toLowerCase().replace(/^https?:\/\//, '');
        reply("Consultando DNS...");

        let res = await fetchJson(`https://api.siputzx.my.id/api/tools/dns?domain=${domain}`);
        if (!res || !res.status) return reply("Não foi possível consultar o domínio. Verifique se ele está correto.");

        let records = res.data.records;
        let a = records.a.response.answer || [];
        let aaaa = records.aaaa.response.answer || [];
        let txt = records.txt.response.answer || [];

        let text = `*Resultados DNS de:* ${domain}\n`;

        if (a.length > 0) {
            text += `\n*Registros A:*\n`;
            for (let r of a) {
                let ip = r.record.ipv4;
                let org = r.ipInfo?.org || 'Desconhecida';
                let country = r.ipInfo?.country || 'Desconhecido';
                text += `• ${ip} (${org}, ${country})\n`;
            }
        }

        if (aaaa.length > 0) {
            text += `\n*Registros AAAA:*\n`;
            for (let r of aaaa) {
                let ip = r.record.ipv6;
                let org = r.ipInfo?.org || 'Desconhecida';
                let country = r.ipInfo?.country || 'Desconhecido';
                text += `• ${ip} (${org}, ${country})\n`;
            }
        }

        if (txt.length > 0) {
            text += `\n*Registros TXT:*\n`;
            for (let r of txt) {
                text += `• ${r.record.strings.join(' ')}\n`;
            }
        }

        reply(text.trim());
    } catch (e) {
        console.error(e);
        reply("Erro ao consultar DNS. Tente novamente mais tarde.");
    }
    break;

case 'print2':
case 'ssweb':
case 'screenshot':
    try {
        if (!q) return reply("Por favor, envie o link do site que deseja capturar.");
        reply("Gerando print do site...");
        let res = await fetchJson(`https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(q)}&theme=light&device=desktop`);
        if (!res || !res.result) return reply("Não foi possível gerar o print. Verifique o link e tente novamente.");
        sandro.sendMessage(from, { image: { url: res.result }, caption: "Aqui está o print do site solicitado." }, { quoted: m });
    } catch (e) {
        reply("Erro ao gerar o print. Tente novamente mais tarde.");
    }
    break;

case 'print': case 'printdesite':
    if (!q.trim()) {
        return reply(`Faltando a URL do site que quer tirar print. Exemplo: ${prefix + command} https://google.com\n\nNão esqueça do https se o site tiver, ou http se não for um site com SSL.`);
    }

    // Validação de URL
    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (!urlRegex.test(q.trim())) {
        return reply("Por favor, forneça uma URL válida começando com http ou https.");
    }

    try {
        reply(`Enviando no PV, por motivo de segurança...`);
        sandro.sendMessage(sender, { 
            image: { 
                url: `https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${q.trim()}&apikey=${API_SANDRO_MD}` 
            } 
        }, { quoted: info });
    } catch (error) {
        return reply("Erro ao processar o comando.");
    }
    break;

case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await sandro.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:MM:SS')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
day = `${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${tempo2}*\n• Nome do Bot: *${NomeDoBot}*\n• Proprietário: *${NickDono}*\n• Estou operando atualmente em *${ingfoo.length}* grupos.`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) sandrobot = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) sandrobot = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) sandrobot = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) sandrobot = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) sandrobot = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) sandrobot = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) sandrobot = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) sandrobot = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) sandrobot = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) sandrobot = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) sandrobot = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  matheusSabe = `• `
  if(aluguel[AB].cortesia == false) {
matheusSabe += `${hmm} dia${hmm > 1 ? 's' : ''} restantes`} else {matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`}
matheusSabe += ` até o fim do contrato.`
} else {matheusSabe = ``}
day += `\n——\n🔋 *Bateria restante para uso:*\n${sandrobot} ${matheusSabe}`}
reply(`${day}`)
break

case 'lojinha':
fs.readFile('./sandro.js', 'utf8', (err, data) => { 
 if (err) throw err;
 let regex = /case\s'(\w+)'/g;
 let match;
 let caseNames = [];
 while ((match = regex.exec(data)) !== null) {
 caseNames.push(match[1]);
 }
 let output = '' + caseNames.join('\n• ');
 let totalCount = caseNames.length;
reply(`Opa tranquilo eai ${pushname}

Ta afim de comprar meu arquivo *DESCRIPTOGRAFADO* ? Ok vou te passar algumas informações sobre mim (bot)🥰

Atualmente estou com ${totalCount} comandos posso baixar músicas e videos de forma rapida e segura baixo videos e audios do *Tiktok* *Youtube* *spotify* *Instagram* tambem posso cuidar do seu grupo, tenho muitos comandos nao consigo falar tudo aqui 😄 bom se tiver interesse so chamar meu criador no pv basta mandar\n\n${prefix}criador

> ${NomeDoBot}`)})
break

case 'aluguel': 
case 'alugueis': 
case 'alugar': 
case 'alugarbot': 
case 'loja':
reply(`Digite *${prefix}lojinha* para entrar em contato com meu proprietário e liberar o acesso em seu grupo.\n• Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.`)
break

case 'mycoderent': //by sandrobot
txt = `🔑 Suas chaves de ativação:\n—\n`
nmr = 0
for(i of chaves) {if(i.cliente == sender) {txt += `\n• ${i.key}`; nmr += 1}}
if(nmr <= 0) return reply("Você não possui nenhuma chave de ativação.")
reply(isGroup ? "Por segurança lhe enviei em seu privado o que foi solicitado." : "Aguarde, estou enviando o que foi solicitado...")
sendMess(sender, txt)
break

case 'codelistrent'://by sandrobot
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`
caixa = []
for(i of chaves) {
txt += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split('@')[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? 's' : ''}` : `Não contém dias para a expiração, é infinito.`}`
caixa.push(i.cliente)
}
if(caixa <= 0) return reply("Não existe nenhuma chave registrada em meu banco de dados.")
reply(isGroup ? "Por motivos de segurança, enviei em seu privado..." : "Aguarde, estou enviando o que foi solicitado!")
sandro.sendMessage(sender, {text: txt, mentions: caixa})
break

case 'gerarcoderent':
if(!SoDono) return reply(enviar.msg.donosmt)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n• Exemplo: *${prefix+command} ${nmrdn.split('@')[0]}/30*`)
sandrobot = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkkeygp] = await sandro.onWhatsApp(sandrobot.split('@')[0])
if(checkkeygp == undefined) {
return reply(`O número *${sandrobot.split('@')[0]}* não é válido no whatsapp.`)
}
nmr = Number(v2) > 0 ? Number(v2) : 0
idks = `G${v2}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sandrobot.slice(2, 8))}`
idks += `M${nmr}H-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}B`
chaves.push({key: idks, tipo: 1, dias: nmr, cliente: sandrobot, valor: 0})//tipo 1 = aluguel de grupo
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
mention(`🔑🌟 Código de ativação do serviço gerado com sucesso! Segue abaixo a chave:\n-> *${idks}*\n——\n• Quantidade de dias: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}*\n• Usuário(a) que alugou: *@${sandrobot.split('@')[0]}*`)
break

case 'gerarcodecort'://by sandrobot
if(!SoDono) return reply(enviar.msg.donosmt)
cort = 24 
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`🛒🌟 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`)
break

case 'delcoderent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(chaves).includes("sandrobot")) return reply(`Não há keys registradas`)
if(!q) return reply(`Cadê o código de aluguel que você deseja apagar?`)
if(!JSON.stringify(chaves).includes(q)) return reply("O código não foi encontrado em nosso banco de dados, é inexistente!")
AD = chaves.map(i => i.key).indexOf(q)
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O código *${q}* foi deletado do sistema com sucesso.`)
break
 
case 'duelo':
case 'votacao':
case 'voting':
  if (!isGroupAdmins) return reply(enviar.msg.adm)
  if (!isGroup) return reply('❌ Este comando só pode ser usado em grupos.')

  if (args.length === 0) {
    return reply(`📘 Exemplo de uso:\n${prefix+command} @tag1/@tag2/1\n\n🔹 Onde:\n- @tag1 = jogador 1\n- @tag2 = jogador 2\n- 1 = tempo da votação em minutos`)
  }

  let txt = args.join(' ')
  let partes = txt.split('/')

  if (partes.length < 3) return reply('❌ Faltam argumentos! Exemplo: @user1/@user2/1')

  let nmrttt = partes[0].replace(/[@\s]/g, '')
  let nmr2 = partes[1].replace(/[@\s]/g, '')
  let tempo = partes[2]

  if (!Number(tempo)) return reply('⏱️ O tempo precisa ser um número (em minutos).')

  // Mensagem simulada de duelo
  const legenda = `
*🗳️ VOTAÇÃO INICIADA!*
────────────────────
👤 *1 - @${nmrttt}*
👤 *2 - @${nmr2}*
────────────────────
✅ Para votar envie:
*1* para @${nmrttt}
*2* para @${nmr2}

⚠️ Cada membro só pode votar uma única vez!

⏳ Tempo para votar: *${tempo} minuto(s)*
────────────────────
‼️ Não atrapalhe a votação. Mensagens fora do contexto serão removidas.

🎯 Vote com consciência!
`.trim()

  // Envia a mensagem sem imagem, só com texto e menções
  sandro.sendMessage(from, {
    text: legenda,
    mentions: [`${nmrttt}@s.whatsapp.net`, `${nmr2}@s.whatsapp.net`]
  }, { quoted: selo })

  // Inicia o sistema de voto (ajuste com sua lógica de contagem)
  AdicionarVoto(from, "-", nmrttt, nmr2, tempo, mention)
break

case 'zerar_votacao': 
case 'cancel_voting':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply("Apenas o administrador do grupo pode realizar a ação..")
if(!fs.existsSync(`./database/func/votacao/p_votos/${from}.json`)) return reply(`Não existe nenhuma arquivo de votação com id do grupo.`)
DeletarVotos(from) /* Deletar os arquivos */
reply("• Votação resetada / cancelada com sucesso, como foi solicitado!")
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(mess.noWarning(prefix))
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.warningRemoved())
break

case 'rg_aviso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(mess.warningSyntax(prefix))
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(mess.sucessDeleteWarning(prefix))
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
}
break

case "idgp":
reply(`ID DO GRUPO: ${from}`)
break

case 'iddogrupo':
if(!SoDono) return reply(enviar.msg.donosmt)
reply(from)
break

//=========== [ ÍNICIO JOGOS ] ========= //

case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return reply(enviar.msg.donosmt)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(mess.FormWrong_AddWordsForca1(prefix))
if(q.lastIndexOf("|") < 0) return reply(mess.FormWrong_AddWordsForca2(prefix))
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply(mess.inUseWords_Forca())
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply(mess.sucessAddWord_Forca())
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(enviar.msg.donosmt) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply(mess.sucessRemWord_Forca())
break

case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].forca_inc == false) return reply(mess.gameForcaNotStarted(prefix))
rv_forca()
reply(mess.sucessResetForca(prefix))
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
case 'jogodaforca':  
if(!isGroup) return reply(enviar.msg.grupo)
try {
if(dataGp[0].forca_inc) return reply(mess.forcaInProgress(prefix))
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
reply(mess.forcaStarted(DM_FR, linha_fr, prefix)) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!dataGp[0].forca_inc) return reply(mess.gameForcaNotStarted(prefix))
if(!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
if(q.length > 2) {reply("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou bom menino(a), irei resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} > irei resetar o jogo..`:`Você acertou uma letra e ganhou continue assim..`}`)
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(mess.forcaStartedRespond(DM_FR, ERROS, ERRQ, linha_fr, letra_ut))
} else {
reply(`${q2.length > 2 ? `Infelizmente você perdeu, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu irei resetar o jogo..` : `Você Errou, e perdeu 😥..`}`)
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break

case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'adivinha': case 'divinhar':
if(!isModobn) return reply(mess.warningMB(prefix))
    if (args.length < 1) return reply('Digite um número entre 1 e 10!');
    
    const numero = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    const tentativa = parseInt(args[0], 10); // Número digitado pelo usuário

    let resposta; // Alteramos o nome da variável para evitar conflito
    if (tentativa < 1 || tentativa > 10 || isNaN(tentativa)) {
        resposta = 'Por favor, digite um número válido entre 1 e 10.';
    } else if (tentativa === numero) {
        resposta = `✅Parabéns! Você adivinhou o número: ${numero}!`;
    } else {
        resposta = `❌Errado! O número era: ${numero}. Tente novamente!`;
    }

    reply(resposta);
    break;
    
//=========== [ FINAL JOGOS ] ========= //

case 'listaddi': case 'ddilist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
if(q.length < 1) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
if(isNaN(q))return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
tekyushff = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
tekyushffff = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
tekyushff += `⇒ @${mem.id.split('@')[0]}\n`
tekyushffff.push(mem.id)
}
}
if(tekyushff.indexOf('⇒') < 0) return reply(`Nenhum número com o ddi *+${args[0]}* foi encontrado.`)
sandro.sendMessage(from, {text: tekyushff, mentions: tekyushffff}, {quoted: selo}).catch((error) => {
   reply(mess.error())
})
break

case 'listabr': case 'brlist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
tekyuuu = `[Total: *${groupMembers.length}*] Lista de números brasileiros presentes neste grupo:\n–\n`
tekyushfff = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55)) {
tekyuuu += `⇒ @${mem.id.split('@')[0]}\n`
tekyushfff.push(mem.id);
}
}
if(tekyuuu.indexOf('⇒') < 0) return reply('Nenhum número brasileiro foi encontrado no grupo.')
sandro.sendMessage(from, {text: tekyuuu, mentions: tekyushfff}, {quoted: selo}).catch((error) => {
   reply(mess.error())
})
break

case 'listaddd': case 'dddlist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
if(q.length < 1) return reply(`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`)
if(isNaN(q))return reply(`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`)
tekiiuu = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`
tekiiuuii = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
tekiiuu += `⇒ @${mem.id.split('@')[0]}\n`
tekiiuuii.push(mem.id);
}
}
if(tekiiuu.indexOf('⇒') < 0) return reply('Nenhum *número brasileiro* com ddd fornecido foi encontrado no grupo.')
sandro.sendMessage(from, {text: tekiiuu, mentions: tekiiuuii}, {quoted: selo}).catch((error) => {
   reply(mess.error())
})
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(enviar.msg.donosmt)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
sandro.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: selo}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
sandro.sendMessage(from, {image: {url: q}}, {quoted: selo}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
try {
if(!q.trim()) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=${API_SANDRO_MD}`)
sandro.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'verificado-global': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case 'audio-menu': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`)
}
break

case 'comunidade':
reply(`*Faça parte da comunidade e fique por dentro de todas as atualizações dos bots do sandro* 💙

https://whatsapp.com/channel/0029VarBveB6hENqZSkAM71p`)
break

case 'infodono':  
templateMassage = {
image: {url:"./settings/fotobot.jpg",
quoted: info},
caption: infodono(prefix, pushname, NickDono, NomeDoBot, isChVip, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.reagir1,
mediaType:2,
//templateButtons: templateButtons
}}
}
sandro.sendMessage(from, templateMassage)
break

case 'menupx':
case 'puxada':
case 'puxadas':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menupx(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menuadm':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = adms(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;
    
case 'menu':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menu(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menuff':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotoff.jpg"; // Substitua pelo caminho correto
const menuTexto = menuff(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menubasico':
reagir(from, "💙");
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menubasico(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menulink':
case 'menulinks':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menulink(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menudono':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menudono(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menuadm':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
        const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = adms(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;
                       
case 'canalbot':
reply(`_aqui o canal do meu criador_

https://youtube.com/@sandro_mg1?si=DN_gv6NZDBp-x-t7`)
break


case 'logos':
case 'menulogo':
case 'menulogos':  
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menulogos(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menusemprefixo':  
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = semprefixo(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
try {
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = efeitos(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'comprarpv':
reply(`
🎉 *BEM-VINDO AO VIP DO PV DO BOT!* 🎉

🔒 *Privacidade Exclusiva*: Para acessar o PV do bot com total privacidade e conteúdos especiais, é necessário ser adicionado à lista *VIP*. Além disso, você terá acesso a todos os conteúdos exclusivos do *VIP*! 🎁

📜 *VALORES VIP* 📜
💰 1 Semana: R$15  
💰 2 Semanas: R$20  
💰 3 Semanas: R$25  
💰 1 Mês: R$30

👑 *Deseja garantir o seu acesso VIP?*  
Use o comando ${prefix}criador e fale diretamente comigo para adquirir!

🔓 *Conteúdos VIP*: Não esqueça de conferir os conteúdos disponíveis usando ${prefix}menuprem.

🚀 *Seja VIP agora e aproveite os benefícios exclusivos!*
`)
break

case 'menufig':
case 'menufigu':
case 'menufigurinhas':
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = figurinhas(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'downloads':
case 'down':
case 'download':
case 'menudownloads':
case 'menudownload':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = downloads(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'infobot':
    return sandro.sendMessage(from, {
      audio: { url: './arquivos/audio/infobot.mp3' },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: info });
break 

case 'comprarbot':
case 'criador': 
case 'suporte-dono': 
    await sleep(1500);
    
    let vcard = 
        `BEGIN:VCARD\n`
        + `VERSION:3.0\n`
        + `N:;${NomeDoBot};;;\n`
        + `FN:${NomeDoBot}\n`
        + `item1.TEL;waid=557582599462:557582599462\n`
        + `item1.X-ABLabel:📱 Celular\n`
        + `END:VCARD`;
    
    await sandro.sendMessage(from, { 
        contacts: { 
            displayName: '👑 ${NomeDoBot}', 
            contacts: [{vcard}]
        }
    });

    await sandro.sendMessage(from, {
        text: `- Fale diretamente com o criador!\n*Contato*: wa.me/+557582599462\n ele está à disposição!`
    }, { quoted: info });
    
    break;

case 'alteradores':
sandro.sendMessage(from, {image: {url: fotobot}, caption: linguagem.alteradores(prefix, sender), mentions: [sender]}, {quoted: selo})
break 

case 'brincadeiras':
case 'brincadeira':
reagir(from, "💙")
try {
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = brincadeiras(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'menuprem':
case 'menuvip':
case 'menupremium':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = menuprem(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'animes':
case 'menuanimes':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = animes(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;


case 'menu18':
case 'pornoo':
reagir(from, "💙")
try {
if(isAudioMenu) {
sandro.sendMessage(from, {audio: {url: "./arquivos/audio/menu.mp3"}, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
sleep(6000)
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = nsfw(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'alugar': {
    const moneybot = `*_»⟩ Tabela de Preços para Alugar o Bot ⟨«_*

⧽ *R$ 10,00* - 10 dias
⧽ *R$ 15,00* - 20 dias
⧽ *R$ 25,00* - 30 dias
⧽ *COMPRAR ARQUIVO DO BOT*: *R$ 90,00*

❪⛄ _Digite *${prefix}criador* para mais informações_`;

    const download = [
        `ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`,
        `ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
        `ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
        `ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
        `ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
        `ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
        `ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
        `𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
    ];

    let { key } = await sandro.sendMessage(from, {text: `${tempo} ${pushname}`}, {quoted: selo});
    await sleep(2000);

    for (let i = 0; i < download.length; i++) {
        await sandro.sendMessage(from, {text: download[i], edit: key}, {quoted: selo});
    }

    sandro.sendMessage(from, {
        text: moneybot,
        contextInfo: {
            externalAdReply: {
                title: `⟩ ${NickDono} ⟨`,
                body: `⟩ ${NomeDoBot} ⟨`,
                thumbnail: await getBuffer(`https://i.imgur.com/OqeFhHP.jpeg`),
                mediaType: 1,
                showAdAttribution: true,
                sourceUrl: `https://wa.me/557582599462`
            }
        }
    }, {quoted: selo});
}
break;

case 'amador':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { amador } = require("./Sandro18/AmadorVideo/Amador.js")
var Sandro18 = amador[Math.floor(Math.random()*amador.length)]
sandro.sendMessage(sender, {video: {url: Sandro18}, caption: `*🔞Vídeo Amador🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'porno':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { PornoVid } = require("./Sandro18/PornoVideo/PornoVid.js")
var Sandro18 = PornoVid[Math.floor(Math.random()*PornoVid.length)]
sandro.sendMessage(sender, {video: {url: Sandro18}, caption: `*🔞Pornô Vídeo🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'egirlvideo':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { EgirlVid } = require("./Sandro18/EgirlVideo/EgirlVid.js")
var Sandro18 = EgirlVid[Math.floor(Math.random()*EgirlVid.length)]
sandro.sendMessage(sender, {video: {url: Sandro18}, caption: `*🔞Egirl Vídeo🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'aline':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Aline } = require("./Sandro18/AlineFaria/Aline.js")
var Sandro18 = Aline[Math.floor(Math.random()*Aline.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Aline Faria🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'alifox':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { AlineFx } = require("./Sandro18/AlineFox/AlineFx.js")
var Sandro18 = AlineFx[Math.floor(Math.random()*AlineFx.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Aline Fox🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
    
case 'alycia':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Alycia } = require("./Sandro18/AlyciaRibeiro/Alycia.js")
var Sandro18 = Alycia[Math.floor(Math.random()*Alycia.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Alycia Ribeiro🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'amichan':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Amiichan } = require("./Sandro18/Amiichan/Amiichan.js")
var Sandro18 = Amiichan[Math.floor(Math.random()*Amiichan.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Amiichan🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'aninha':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)

reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Aninha } = require("./Sandro18/AninhaLopes/Aninha.js")
var Sandro18 = Aninha[Math.floor(Math.random()*Aninha.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Aninha Lopes🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
  
case 'victoria':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)

reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Victoria } = require("./Sandro18/VictoriaMatoso/Victoria.js")
var Sandro18 = Victoria[Math.floor(Math.random()*Victoria.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Victoria Matoso🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'belle':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)

reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Belle } = require("./Sandro18/BelleDelphine/Belle.js")
var Sandro18 = Belle[Math.floor(Math.random()*Belle.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Belle Delphine🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'brenda':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Brenda } = require("./Sandro18/BrendaTrindade/Brenda.js")
var Sandro18 = Brenda[Math.floor(Math.random()*Brenda.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Brenda Trindade🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
  
case 'cami':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Cami } = require("./Sandro18/CamiBrito/Cami.js")
var Sandro18 = Cami[Math.floor(Math.random()*Cami.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Cami Brito🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
   
case 'clowniac':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Clowniac } = require("./Sandro18/Clowniac/Clowniac.js")
var Sandro18 = Clowniac[Math.floor(Math.random()*Clowniac.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Clowniac🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'feh':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Feh } = require("./Sandro18/FehGalvao/Feh.js")
var Sandro18 = Feh[Math.floor(Math.random()*Feh.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Feh Galvão🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
  
case 'giovanna':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Giovanna } = require("./Sandro18/GiovannaCampomar/Giovanna.js")
var Sandro18 = Giovanna[Math.floor(Math.random()*Giovanna.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Giovanna Campomar🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'isadora':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Isadora } = require("./Sandro18/IsadoraMartinez/Isadora.js")
var Sandro18 = Isadora[Math.floor(Math.random()*Isadora.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Isadora Martinez🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'isa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Isa } = require("./Sandro18/IsaWaifu/Isa.js")
var Sandro18 = Isa[Math.floor(Math.random()*Isa.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Isa Waifu🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'lay':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Lay } = require("./Sandro18/LayMuniz/Lay.js")
var Sandro18 = Lay[Math.floor(Math.random()*Lay.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Lay Muniz🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'leticia':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Leticia } = require("./Sandro18/LeticiaShirayuki/Leticia.js")
var Sandro18 = Leticia[Math.floor(Math.random()*Leticia.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Letícia Shirayuki🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'marina':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Marina } = require("./Sandro18/MarinaMui/Marina.js")
var Sandro18 = Marina[Math.floor(Math.random()*Marina.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Marina Mui🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
     
case 'maru':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Maru } = require("./Sandro18/MaruKarv/Maru.js")
var Sandro18 = Maru[Math.floor(Math.random()*Maru.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Maru Karv🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
    
case 'princesa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Princesa } = require("./Sandro18/McPrincesa/Princesa.js")
var Sandro18 = Princesa[Math.floor(Math.random()*Princesa.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Mc Princesa🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break   
     
case 'meladinha':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Me1adinha } = require("./Sandro18/Meladinha/Meladinha.js")
var Sandro18 = Me1adinha[Math.floor(Math.random()*Me1adinha.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Me1adinha🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'nath':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Nath } = require("./Sandro18/NathBister/Nath.js")
var Sandro18 = Nath[Math.floor(Math.random()*Nath.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Nath🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'nega':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Nega } = require("./Sandro18/NegaBarbie/Nega.js")
var Sandro18 = Nega[Math.floor(Math.random()*Nega.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Nega Barbie🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
       
case 'polonesa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Polonesa } = require("./Sandro18/PolonesaDoHype/Polonesa.js")
var Sandro18 = Polonesa[Math.floor(Math.random()*Polonesa.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Polonesa Do Hype🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'rute':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Rute } = require("./Sandro18/RuteRocha/Rute.js")
var Sandro18 = Rute[Math.floor(Math.random()*Rute.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Rute Rocha🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'celestine':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Celestine } = require("./Sandro18/VitaCelestine/Celestine.js")
var Sandro18 = Celestine[Math.floor(Math.random()*Celestine.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Vita Celestine🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
     
case 'carnie':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { Carniello } = require("./Sandro18/Carniello/Carniello.js")
var Sandro18 = Carniello[Math.floor(Math.random()*Carniello.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Carniello🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'gotica':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "😈")
reply(`${isGroup ? "*ENVIANDO NO Privado...😈*" : "Enviando"} `)
const { GoticaFT } = require("./Sandro18/GoticaFoto/Gotica.js")
var Sandro18 = GoticaFT[Math.floor(Math.random()*GoticaFT.length)]
sandro.sendMessage(sender, {image: {url: Sandro18}, caption: `*🔞Gótica Foto🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'ranklixo':
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeiras 1`)
if (!isGroup) return reply('*Isso parece um grupo animal?*')
try{
d = [] 
tekssyer = '🏔Rank dos mais lixos do gp\n'
for(i = 0; i < 7; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
tekssyer += `🚮 ⪼ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}mentions(tekssyer, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente')
}
break

          case "arma": {
            bancoDeDados = {
              "M1887": {
                "nome": "M1887",
                "descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AK47": {
                "nome": "AK47",
                "descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "AWM": {
                "nome": "AWM",
                "descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "Groza": {
                "nome": "Groza",
                "descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "UMP45": {
                "nome": "UMP45",
                "descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 25
              },
              "M1014": {
                "nome": "M1014",
                "descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
                "dano": "Muito alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "M60": {
                "nome": "M60",
                "descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 60
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SCAR": {
                "nome": "SCAR",
                "descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "M4A1": {
                "nome": "M4A1",
                "descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "SVD": {
                "nome": "SVD",
                "descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "MP5": {
                "nome": "MP5",
                "descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SPAS12": {
                "nome": "SPAS12",
                "descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M249": {
                "nome": "M249",
                "descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 100
              },
              "Thompson": {
                "nome": "Thompson",
                "descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "VSS": {
                "nome": "VSS",
                "descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 15
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "AUG": {
                "nome": "AUG",
                "descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "G18": {
                "nome": "G18",
                "descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 20
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "Vector": {
                "nome": "Vector",
                "descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M82B": {
                "nome": "M82B",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "M1887": {
                "nome": "M1887",
                "descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
                "dano": "Extremo",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              }
            }


            const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
            let resultado = null;

            for (const arma in bancoDeDados) {
              if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
                resultado = bancoDeDados[arma];
                break;
              }
            }

            if (resultado) {
              reply(`*${resultado.nome}*\n*${resultado.descrição}*\n\n*Dano: ${resultado.dano}*\n\n*Alcance: ${resultado.alcance}*\n\n*Taxa de Disparo: ${resultado.taxa_de_disparo}*\n\n*Capacidade do Pente: ${resultado.capacidade_do_pente}*`);
            } else {
              reply('Erro: Arma não encontrada no banco de dados.');
            }
          } break
          
case 'rankzueiros': case 'rankzueiro':
if (!isGroup) return reply(`So em grupo`);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  

  reagir(from, "🤪");

  membrosZueiros = [];
  
  const zueiro1 = groupMembers;
  const zueiro2 = groupMembers;
  const zueiro3 = groupMembers;
  const zueiro4 = groupMembers;
  const zueiro5 = groupMembers;

  const zueiroMem1 = zueiro1[Math.floor(Math.random() * zueiro1.length)];
  const zueiroMem2 = zueiro2[Math.floor(Math.random() * zueiro2.length)];
  const zueiroMem3 = zueiro3[Math.floor(Math.random() * zueiro3.length)];
  const zueiroMem4 = zueiro4[Math.floor(Math.random() * zueiro4.length)];
  const zueiroMem5 = zueiro5[Math.floor(Math.random() * zueiro5.length)];

  const TMPZUEIRO = [
    "O rei da zoeira! 👑",
    "Mestre na arte do deboche. 😎",
    "Provocador nato. 🤣",
    "Conquistador de risadas. 🎉",
    "Doutor em piadas sem graça. 🎓",
    "Especialista em memes. 🚀",
    "Destruidor de momentos sérios. 💣",
    "Arquiteto da palhaçada. 🏰",
    "O zueiro mais querido do grupo. 💙",
    "Sorriso contagiante, zueira constante. 😄",
    "O palhaço oficial. 🤡",
    "Mestre do sarcasmo. 😏",
    "Sabe tudo de trollagem. 😜",
    "Alegria em forma de zueira. 🎈",
    "Faz piada até com sombra. 🌚",
    "Riso garantido com esse zueiro. 😂",
    "O mestre das pegadinhas. 🤪",
    "Transforma qualquer situação em comédia. 🎭",
    "Pai da zoeira, filho do riso. 🤣",
    "Zueiro 24 horas por dia. ⏰",
  ];

  rankZueiroImg = "https://telegra.ph/file/8de9823d4d2af40b530df.jpg";
  rankZueiro = `*_Os Zueiros do Grupo estão prontos para zoar:_*
*╭────────────*
*│* 🤪 @${zueiroMem1.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem2.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem3.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem4.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem5.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*╰────────────*`;

  membrosZueiros.push(zueiroMem1.id);
  membrosZueiros.push(zueiroMem2.id);
  membrosZueiros.push(zueiroMem3.id);
  membrosZueiros.push(zueiroMem4.id);
  membrosZueiros.push(zueiroMem5.id);

  mencionarIMG(rankZueiro, rankZueiroImg);
  break;

case "transcrever": {
if((isMedia && !info.message.imageMessage && info.message.videoMessage || isQuotedVideo || isQuotedAudio)) {
reply("Aguarde.. transcrevendo seu áudio..")
muk = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage

let base64String = await getFileBuffer(muk, isQuotedAudio ? 'audio': 'video');
let buffer = Buffer.from(base64String, 'base64');

let formData = new FormData();
formData.append('file', buffer, {filename: isQuotedAudio ? 'audiofile': 'videofile', contentType: muk.mimetype });

fetch(`https://api.bronxyshost.com.br/transcrever?apikey=${API_SANDRO_MD}`, {
method: 'POST',
body: formData
}).then(response => response.json())
.then(data => {
reply(data.texto);
}).catch((Err) => {
console.log(Err);
reply("Sinto muito, alguns formatos de áudio/vídeo, eu não consigo transcrever, em caso de dúvidas, tente novamente...");
});
} else {
return reply("Marque um audio ou um vídeo.")
}
}
break;

case 'dono':
  try {
    const imagemPath = './settings/fotobot.jpg'; // Substitua pelo caminho correto da imagem

    const dptr = `MEU DONO: ${NickDono}😍😁
> ${NomeDoBot}`;

    // Lê a imagem do diretório e envia como buffer
    const imagemBuffer = fs.readFileSync(imagemPath);
    sandro.sendMessage(from, { image: imagemBuffer, caption: dptr }, { quoted: selo });
  } catch (e) {
    console.log("Erro no comando 'dono':", e);
  }
  break;

//Textos
case 'recado'://BY:GILLIARDI CONTEÚDOS 
case 'recadowhatsapp':

                    rate = body.slice(6)
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var gilli = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${gilli} `)
					break

case 'frasecriativas':
                    rate = body.slice(6)
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. 🌎','Fazendo dos meus sonhos, um objetivo. 💭']
					var gilli = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${gilli} `)
					break

case 'frasebonita':
                    rate = body.slice(6)
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃','Só faz sentido o que te faz sentir.']
					var gilli = foda[Math.floor(Math.random() * foda.length)]
					reply(` ${gilli} `)
					break
					
case 'frasedeamor':
case 'frasesdeamor':
rate = body.slice(6)
var amor =['Me perguntaram qual era o meu lugar favorito e eu respondi: Você!','Amar alguém profundamente te dá forças. Ser amado profundamente por alguém te dá coragem.','Eu orei por você sem te conhecer. E agora tenho você aqui, muito mais do que eu pedi.','Acordar com você no meu pensamento é a forma mais doce de começar meu dia.','Não quero a ilusão de um amor perfeito, quero a felicidade de um amor verdadeiro.','O verdadeiro amor nunca se desgasta. Quanto mais se dá, mais se tem.','Meu bem, eu que nunca me lembro de nada não me esqueço de você.','Não procure alguém que te complete. Complete a si mesmo e procure alguém que te transborde.']
var gilliardi = amor[Math.floor(Math.random() * amor.length)]
reply(` ${gilliardi} `)
break					

case 'motivacional':
rate = body.slice(6)
var motivacional = [
    'O único lugar onde o sucesso vem antes do trabalho é no dicionário.', 
    'Acredite em você e tudo será possível.', 
    'O que você faz hoje pode melhorar todos os seus amanhãs.', 
    'Cada passo, por menor que seja, te aproxima do seu objetivo.', 
    'Desistir não é uma opção. Tudo o que você precisa está dentro de você.', 
    'A vida te coloca desafios, mas é você quem decide se vai vencê-los.', 
    'O caminho pode ser difícil, mas a vista no topo vai valer a pena.', 
    'O fracasso é só uma oportunidade para começar de novo com mais sabedoria.', 
    'Se você pode sonhar, você pode realizar.', 
    'Não espere o momento perfeito. Faça de agora o momento certo.', 
    'Grandes conquistas começam com pequenas atitudes.', 
    'Cada dificuldade é uma oportunidade disfarçada de desafio.', 
    'Acredite no processo. Grandes coisas levam tempo para acontecer.', 
    'Não importa o quão devagar você vá, desde que você não pare.', 
    'A única pessoa que pode te impedir de alcançar seus sonhos é você mesmo.', 
    'Seja a sua própria motivação. Não dependa de ninguém para acreditar no seu potencial.', 
    'Coragem é saber que pode falhar e ainda assim seguir em frente.', 
    'Você não está onde quer estar ainda, mas cada dia é um passo mais perto.', 
    'Confie no seu esforço. O resultado virá no tempo certo.', 
    'O importante não é vencer, mas nunca desistir de tentar.', 
    'Lembre-se: a única batalha perdida é aquela que você desiste de lutar.', 
    'A jornada pode ser longa, mas as recompensas são sempre maiores do que os obstáculos.', 
    'Nunca é tarde para recomeçar e construir a vida que você sempre sonhou.', 
    'O que define seu sucesso é a determinação em continuar, não as quedas que você enfrenta.'
]
var gilliardi = motivacional[Math.floor(Math.random() * motivacional.length)]
reply(` ${gilliardi} `)
break

case 'safadeza':
rate = body.slice(6)
var safadeza = [
    'Gata, se beleza fosse tempo, você seria eternidade.', 
    'Já pensou se a gente faz besteira junto e ainda chama de destino?', 
    'Deixa eu ser o motivo desse sorriso malicioso aí?', 
    'Teu corpo tem mais curva que estrada de serra, e eu tô doido pra me perder nele.', 
    'Não sou GPS, mas aposto que posso te levar a lugares incríveis.', 
    'Você deve ser cansativa, porque só de olhar já me deixou sem fôlego.', 
    'Eu não sou praia, mas sei bem como fazer suas ondas subirem.', 
    'Se você acha que chocolate é bom, é porque ainda não me provou.', 
    'Minha cama é pequena, mas o suficiente pra nós dois.', 
    'Tem algo em você que me dá vontade de quebrar todas as regras.', 
    'Seu olhar tá me chamando mais do que qualquer palavra.', 
    'Se fosse um pecado te querer, já teria reservado um lugar no inferno.', 
    'Com você, até ficar perdido parece um ótimo plano.', 
    'Posso não ser o amor da sua vida, mas aposto que sou o melhor erro que você vai cometer.', 
    'Se sua intenção era me provocar, parabéns, missão cumprida.', 
    'Você tem um jeito que bagunça minha cabeça... e o resto do corpo também.', 
    'Posso te confessar uma coisa? Já pensei em você de jeitos que não dá pra falar em público.', 
    'Quero ser aquela risada boba no meio da sua noite.', 
    'Entre nós dois, só falta uma coisa: você aceitar o convite.'
]
var gilliardi = safadeza[Math.floor(Math.random() * safadeza.length)]
reply(` ${gilliardi} `)
break

case 'raiva':
rate = body.slice(6)
var raiva = [
    'Eu poderia perder a paciência com você, mas seria perda de tempo.', 
    'Engraçado como você é bom em tirar as pessoas do sério, é um dom?', 
    'O problema não é nem você, é o tanto de tempo que eu perdi te ouvindo.', 
    'Falar com você é como jogar xadrez com um pombo: não importa o que eu faça, você vai derrubar as peças e sair se achando.', 
    'Se burrice fosse crime, você estaria no corredor da morte.', 
    'Tô começando a achar que você é um teste de paciência... e eu tô reprovando.', 
    'Você fala como se soubesse de alguma coisa, mas o vazio do que você diz é ensurdecedor.', 
    'A vantagem de discutir com você é que pelo menos eu ganho experiência em lidar com idiotice.', 
    'Nem o silêncio te salva, porque até calado você me irrita.', 
    'Você é aquele tipo de pessoa que cansa a mente e a paciência.', 
    'Você já tentou fazer um favor pro mundo e ficar quieto?', 
    'Conversar com você me faz perder a fé na humanidade... e no futuro.', 
    'Eu poderia te explicar o erro, mas sei que você não entenderia.', 
    'Você devia ser uma pegadinha do universo pra testar minha paciência, só pode.', 
    'Se a ignorância fosse uma ciência, você seria o maior especialista.', 
    'A sorte é que respiração é automática, porque com o tanto de burrice, você esqueceria como fazer.', 
    'Não adianta nem desenhar pra você entender, você ignora até as figuras.', 
    'Se incompetência fosse uma carreira, você já seria CEO.', 
    'Você me lembra um quebra-cabeça... só que com várias peças faltando.'
]
var gilliardi = raiva[Math.floor(Math.random() * raiva.length)]
reply(` ${gilliardi} `)
break

case 'deboche':
rate = body.slice(6)
var deboche =[
    'Essa frente fria está demorando pra chegar e esfriar teu ego, né?', 
    'Interessante como eu lembro de coisas que nem deveriam ter acontecido...', 
    'O bom do passado é que ele ficou lá. Pena que nem tudo que ficou era tão bom assim.', 
    'Aplausos para você! Não pelo talento, mas pela coragem de achar que engana alguém. 👏👏👏', 
    'Meu cupido é o estagiário do amor... sempre faz besteira e você foi o maior erro.', 
    'Julgando realidade que nem a Netflix conseguiria inventar? Curioso.', 
    'Às vezes, a gente acha que encontrou alguém especial. Depois descobre que o especial era só um erro de avaliação.', 
    'Eu ainda me explicando? Desculpa, só explico quando sou paga ou quando tenho paciência – o que não é o caso.', 
    'Se for para dar moral, eu dou para alguém que sabe o que fazer com ela.', 
    'Se você é aquilo que come, já entendi o motivo da sua amargura.', 
    'A cara de pau de algumas pessoas deveria ser esculpida em mármore.', 
    'Você fala como se fizesse diferença, mas o mundo continua o mesmo com ou sem suas opiniões.', 
    'Já me perguntaram se você é sério, e eu sempre digo: sério, só se for no deboche.', 
    'Tem gente que se acha um prêmio, mas se eu ganhasse você na loteria, eu devolveria.', 
    'Sua sorte é que burrice não dói, senão você viveria no pronto-socorro.']
var gilliardi = deboche[Math.floor(Math.random() * deboche.length)]
reply(` ${gilliardi} `)
break

case 'cantadas':
case 'cantada':
rate = body.slice(6)
var cantada =['Existe um vazio no meu coração que tem as suas medidas. Quer entrar?','Não existe amor à primeira vista. O que existe é a pessoa certa, no momento certo. Você por acaso estava lá!','O seu sorriso é o vírus que infectou o meu coração. ','Se o mar fosse um sentimento... seria tão grande quanto o amor que sinto por você. ',' Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra dessa frase.','O Ministério da Saúde adverte: te ver longe de mim me faz sentir saudades. ','Quem te conhece deve ter que tomar calmante pro resto da vida, não estou certo? Você deixa qualquer um doido por você! ',' Amar você é loucura? Então não tem psiquiatra que me cure.']
var gilliardi = cantada[Math.floor(Math.random() * cantada.length)]
reply(` ${gilliardi} `)
break				

case 'ansiedade':
case 'ansiedades':
rate = body.slice(6)
var ansiedade =['Quanto mais medo eu sinto, mais trêmulo fico de ansiedade. Eu me fortaleço nas dificuldades.','A ansiedade me acompanha mundo afora, mas sei que para ser feliz preciso dela como precaução, como freio para meus sonhos infinitos....','Já não me importa o tempo perdido, eu sinto uma ansiedade imensa de mergulhar no que ainda não vivi. ','Ansiedade é o desejo para que o futuro se transforme logo no seu maior presente. ','De repente nos vemos sofrendo antecipadamente por causa de algo que talvez jamais aconteça, é a agulha da ansiedade a nos espetar... ','A ansiedade é o acelerador que ganhamos de brinde por não sabermos esperar nosso próprio tempo. ','Não me sinto bem em parte nenhuma e ando cheio de ansiedade de coisas que não posso nem sei realizar. ','De repente nos vemos nus diante da ansiedade que nos deixa cegos e indefesos, porém dentro de nós estão as armas para nos livrar de suas garras. ']
var gilliardi = ansiedade[Math.floor(Math.random() * ansiedade.length)]
reply(` ${gilliardi} `)
break				

case 'indiretas':
case 'indireta':
rate = body.slice(6)
var indireta =['Que essa frente fria consiga amenizar esse seu fogo.','Por que eu ainda fico lembrando de tudo aquilo que você já esqueceu?','Não olho para o passado, pois tudo de bom que tive nele está no meu presente, o que ficou pra trás foi só o que não servia pra nada. ','Algumas pessoas merecem um grande aplauso pelo teatro que fazem! 👏👏👏 ',' Meu cupido é gari, só me traz lixo e você é a prova disso...',' Não lhe compete julgar a realidade que você não vive. 💥',' Às vezes, sem querer, a gente esbarra em alguém que vale a pena.',' Não sei porque ainda me explico. Não devo explicações. Só para os meus pais, e somente até aos 18.']
var gilliardi = indireta[Math.floor(Math.random() * indireta.length)]
reply(` ${gilliardi} `)
break				

case 'piadas':
case 'piada':
rate = body.slice(6)
var piada =['O que é um pontinho brilhando no jardim? Uma formiga de aparelho!','O que é um pontinho marrom cantando? Carlinhos Brown.',' Como o Batman faz para abrir a bat-caverna? Ele bat-palma.',' O que é um pontinho verde em Pernambuco? É um frevo de 4 folhas.',' Por que as loiras entram no banco rebolando? Para movimentar a poupança.',' Qual a semelhança entre uma loira e uma garrafa de cerveja? Do pescoço pra cima elas não tem nada.','Qual é a diferença entre a bicicleta e o vaso sanitário? Resp: a bicicleta você senta pra correr e o vaso sanitário você corre pra sentar! ','- Joãozinho você bebe 3 vinhos, depois bebe + 4 vinhos e depois + 7. Quantos vinhos voce bebeu? - Puxa!! Isto já é sacanagem, a esta hora, eu já estou bêbado! ']
var gilliardi = piada[Math.floor(Math.random() * piada.length)]
reply(` ${gilliardi} `)
break
////				

case 'emoji-mix':
case 'emojimix':
var [emj1, emj2] = q.trim().split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reply(Res_Aguarde)
sendStickerFromUrl(from, `https://api.bronxyshost.com.br/api-bronxys/emojimix?emoj=${encodeURI(emj1)}&emoj2=${encodeURI(emj2)}&apikey=${API_SANDRO_MD}`)
} catch (e) {
if(JSON.stringify(e).includes(API_SANDRO_MD)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
} else {
reply('*Ops não foi possivel fazer esse mix de emoji / Ou ocorreu algum problema no sistema..*')
}
}
break

case 'hentai': { // Sandro bot
    try {
        if (!isNsfw && isGroup) 
            return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`);
        
        reply(`Enviando a imagem no pv...`);

        // Importa o módulo para manipular arquivos
        const fs = require('fs');

        // Lê o arquivo JSON
        const jsonData = JSON.parse(fs.readFileSync('arquivos/hentai.json', 'utf8'));

        // Verifica se existem links no JSON
        if (!jsonData.links || jsonData.links.length === 0) {
            return reply("Nenhum link de imagem encontrado no arquivo JSON.");
        }

        // Seleciona um link aleatório
        const randomIndex = Math.floor(Math.random() * jsonData.links.length);
        const imageUrl = jsonData.links[randomIndex];

        // Faz o download da imagem
        const response = await fetch(imageUrl);
        const imageBuffer = await response.buffer();

        if (!imageBuffer) {
            return reply("Erro ao obter a imagem. Tente novamente mais tarde.");
        }

        // Gera informações aleatórias
        const randomName = `Nome_${Math.floor(Math.random() * 100)}`;
        const randomLikes = Math.floor(Math.random() * 1000);
        const randomEmail = `sandromd${Math.floor(Math.random() * 100)}@exemplo.com`;

        // Monta o texto com as informações
        const infoText = `Nome: ${randomName}\nLikes: ${randomLikes}\nEmail: ${randomEmail}`;

        // Envia a imagem com o texto
        await sandro.sendMessage(sender, { 
            image: imageBuffer, 
            caption: `${infoText}\n\nAqui está a sua imagem.` 
        }, { quoted: info });

    } catch (e) {
        console.log(e);
        return reply("Erro ao enviar a imagem.");
    }
}
break;
        
case 'plaq': 
case 'plaq1': 
case 'plaq2': 
case 'plaq3': 
case 'plaq4': 
case 'plaq5': 
case 'plaq6': 
case 'plaq7':
case 'plaq8':  
try {
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`http://br1.bronxyshost.com:4360/api/${command}?texto=${q}&apikey=${SANDRO_MD}`)
sandro.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈`}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq9':
try {
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply('*Estou fazendo... *')
buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${q}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
sandro.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈`}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq10':
try {
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply('*Estou fazendo... *')
buffer = await getBuffer(`https://api.nexfuture.com.br/api/plaq5?q=Carisys`)
sandro.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈`}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'configurar-bot':
sandro.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: selo})
break


case 'destrava':
sandro.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
break 

case 'perfil':
try {
ppimg = await sandro.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
}
try {
var status = (await sandro.fetchStatus(sender)).status
} catch {
var status = "Não foi possível obter a biografia."
}
var conselho = advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
await sandro.sendMessage(from, {text: mess.profileInformation(pushname, sender, info, isChVip, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, status, conselho), contextInfo: {externalAdReply: {title: `〘💌〙𝐒𝐄𝐔 𝐏𝐄𝐑𝐅𝐈𝐋〘💌〙`, body: `• Confira algumas informações sobre seu perfil..`, thumbnail: await getBuffer(ppimg), mediaType: 2, sourceUrl: `https://wa.me/${sender.split("@")[0]}`}}}, {quoted: info})
break

case 'perfilff':
  try {
    // Definindo os valores de informações aleatórias
    const patentes = ['Bronze', 'Prata', 'Ouro', 'Platina', 'Diamante', 'Mestre', 'Desafiante'];
    const tiposDeJogador = ['Rusher', 'Camper', 'Suporte', 'Estratégico', 'Aleatório'];
    const armasFavoritas = ['AK-47', 'M4A1', 'AWM', 'Desert Eagle', 'MP40', 'SPAS-12', 'Groza', 'SCAR', 'Famas', 'XM8'];
    const modosFavoritos = ['Clássico', 'Ranqueado', 'Contra Squad', 'Modo Zombie', 'Modo Treinamento', 'Torneios', 'Modo Casual'];
    const skinsFavoritas = ['Panda', 'Anjo', 'Caveira', 'Dino', 'Palhaço', 'Samurai', 'Rei das Sombras', 'Coelhinho', 'Inferno', 'Vampiro'];
    const mapasFavoritos = ['Bermuda', 'Kalahari', 'Purgatório', 'Alpine', 'Gravado'];
    const personagensFavoritos = ['Chrono', 'Kelly', 'Hayato', 'Alok', 'Moco', 'Wukong', 'Skyler', 'Steffie', 'Nikita', 'Maxim'];
    const petsFavoritos = ['Pantera Noturna', 'Shiba', 'Poring', 'Falcão', 'Robô', 'Dragãozinho', 'Ottero', 'Cobra Ninja'];
    const emotesFavoritos = ['Booyah!', 'Coração', 'Faz o Gelo', 'Cadeira de Mestre', 'Mão de Fogo', 'Socos de Punho', 'Magia'];
    const habilidadesEspeciais = ['Velocidade', 'Precisão', 'Cura Rápida', 'Redução de Dano', 'Aumento de Defesa', 'Mira Automática'];
    const nivelDeJogo = ['Noob', 'Intermediário', 'Profissional', 'Insano'];
    const horasDeJogoPorSemana = ['1-5 horas', '6-10 horas', '11-20 horas', '21-40 horas', 'Mais de 40 horas'];
    const estilosDeJogo = ['Agressivo', 'Defensivo', 'Tático', 'Criativo', 'Imprevisível'];
    const clãs = ['Sem clã', 'Matadores de Elite', 'Os Invencíveis', 'Força Suprema', 'Booyah Team', 'Anjos do Fogo', 'Os Dominantes'];
    const conquistas = ['100 Booyahs', '500 Abates', 'Top 10 Global', 'Campeão de Torneio', 'Melhor do Clã', 'Recorde Pessoal'];
    const frasesDeGuerra = [
      "Booyah ou nada!",
      "Aqui quem manda sou eu!",
      "Não há escapatória!",
      "Minha mira nunca falha.",
      "Você pode correr, mas não pode se esconder!"
    ];

    // Seleção aleatória de valores
    const patente = patentes[Math.floor(Math.random() * patentes.length)];
    const tipoDeJogador = tiposDeJogador[Math.floor(Math.random() * tiposDeJogador.length)];
    const armaFavorita = armasFavoritas[Math.floor(Math.random() * armasFavoritas.length)];
    const modoFavorito = modosFavoritos[Math.floor(Math.random() * modosFavoritos.length)];
    const skinFavorita = skinsFavoritas[Math.floor(Math.random() * skinsFavoritas.length)];
    const mapaFavorito = mapasFavoritos[Math.floor(Math.random() * mapasFavoritos.length)];
    const personagemFavorito = personagensFavoritos[Math.floor(Math.random() * personagensFavoritos.length)];
    const petFavorito = petsFavoritos[Math.floor(Math.random() * petsFavoritos.length)];
    const emoteFavorito = emotesFavoritos[Math.floor(Math.random() * emotesFavoritos.length)];
    const habilidadeEspecial = habilidadesEspeciais[Math.floor(Math.random() * habilidadesEspeciais.length)];
    const nivel = nivelDeJogo[Math.floor(Math.random() * nivelDeJogo.length)];
    const horasDeJogo = horasDeJogoPorSemana[Math.floor(Math.random() * horasDeJogoPorSemana.length)];
    const estiloDeJogo = estilosDeJogo[Math.floor(Math.random() * estilosDeJogo.length)];
    const clã = clãs[Math.floor(Math.random() * clãs.length)];
    const conquista = conquistas[Math.floor(Math.random() * conquistas.length)];
    const fraseDeGuerra = frasesDeGuerra[Math.floor(Math.random() * frasesDeGuerra.length)];

    // Mensagem motivacional
    const mensagensMotivacionais = [
      "Você é um verdadeiro sobrevivente!",
      "Nunca desista até o Booyah!",
      "A prática leva à perfeição!",
      "Confie na sua equipe e na sua mira!",
      "Hoje é dia de Booyah, continue jogando!"
    ];
    const mensagemMotivacional = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];

    // Montagem do texto do perfil
    const perfilFF = `🎮 *SEU PERFIL NO FREE FIRE* 🎮

🏆 *Patente:* ${patente}
💥 *Tipo de jogador:* ${tipoDeJogador}
🔫 *Arma favorita:* ${armaFavorita}
🎯 *Modo favorito:* ${modoFavorito}
👕 *Skin favorita:* ${skinFavorita}
🗺️ *Mapa favorito:* ${mapaFavorito}
🧑‍🎤 *Personagem favorito:* ${personagemFavorito}
🐾 *Pet favorito:* ${petFavorito}
🎭 *Emote favorito:* ${emoteFavorito}
✨ *Habilidade especial:* ${habilidadeEspecial}
🔥 *Nível de habilidade:* ${nivel}
⏳ *Horas de jogo por semana:* ${horasDeJogo}
🎮 *Estilo de jogo:* ${estiloDeJogo}
🤝 *Clã:* ${clã}
🏅 *Conquista mais marcante:* ${conquista}
📢 *Frase de guerra:* "${fraseDeGuerra}"

✨ *Mensagem motivacional:* ${mensagemMotivacional}

> ${NomeDoBot}`;

    // Envio do texto com a imagem (substitua `sandro` pela função de envio do seu bot)
    sandro.sendMessage(from, { text: perfilFF }, { quoted: selo });
    
  } catch (e) {
    console.log("Erro no comando 'perfil':", e);
  }
  break;
  
case 'perfil':
  try {
    // Definindo as variáveis para o jogo de futebol
    const times = ['Flamengo', 'Vasco', 'Palmeiras', 'São Paulo', 'Corinthians', 'Atlético Mineiro', 'Grêmio', 'Internacional'];
    const posicoes = ['Atacante', 'Meio-Campo', 'Defensor', 'Goleiro'];
    const habilidades = ['Chute', 'Passe', 'Drible', 'Cabeceio', 'Defesa', 'Visão de Jogo', 'Finalização'];
    const estiloDeJogo = ['Ofensivo', 'Defensivo', 'Equilibrado'];
    const ligas = ['Brasileirão', 'La Liga', 'Premier League', 'Serie A', 'Bundesliga', 'Campeonato Francês'];
    const horasDeTreinamento = ['1-2 horas', '3-4 horas', '5-6 horas', 'Mais de 6 horas'];

    // Seleção aleatória de valores
    const timeFavorito = times[Math.floor(Math.random() * times.length)];
    const posicaoFavorita = posicoes[Math.floor(Math.random() * posicoes.length)];
    const habilidadeMelhor = habilidades[Math.floor(Math.random() * habilidades.length)];
    const estiloDeJogoPreferido = estiloDeJogo[Math.floor(Math.random() * estiloDeJogo.length)];
    const ligaPreferida = ligas[Math.floor(Math.random() * ligas.length)];
    const horasTreinamento = horasDeTreinamento[Math.floor(Math.random() * horasDeTreinamento.length)];

    // Mensagem motivacional de futebol
    const mensagensMotivacionais = [
      "O futebol é paixão, a vitória é consequência!",
      "O jogo não termina até o apito final!",
      "Nunca desista, a vitória vem para quem persevera!",
      "A cada drible, a cada passe, o futebol te ensina a lutar.",
      "No futebol, quem tem garra conquista!"
    ];
    const mensagemMotivacional = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];

    // Montagem do texto do perfil com informações de futebol
    const dptr = `💙️*SEU PERFIL DE FUTEBOL*💙️

🏆 *Time Favorito:* ${timeFavorito}
💙️ *Posição Preferida:* ${posicaoFavorita}
🦵 *Melhor Habilidade:* ${habilidadeMelhor}
🎮 *Estilo de Jogo:* ${estiloDeJogoPreferido}
🏟️ *Liga Preferida:* ${ligaPreferida}
⏳ *Horas de Treinamento por Semana:* ${horasTreinamento}

✨ *Mensagem Motivacional:* ${mensagemMotivacional}

> ${NomeDoBot}`;

    // Envio do texto com as informações de futebol
    sandro.sendMessage(from, { text: dptr }, { quoted: selo });
    
  } catch (e) {
    console.log("Erro no comando 'perfil':", e);
  }
  break;

case 'perfiljogo':
  try {
    // Definindo as variáveis para o jogo de futebol
    const times = ['Flamengo', 'Vasco', 'Palmeiras', 'São Paulo', 'Corinthians', 'Atlético Mineiro', 'Grêmio', 'Internacional'];
    const posicoes = ['Atacante', 'Meio-Campo', 'Defensor', 'Goleiro'];
    const habilidades = ['Chute', 'Passe', 'Drible', 'Cabeceio', 'Defesa', 'Visão de Jogo', 'Finalização'];
    const estiloDeJogo = ['Ofensivo', 'Defensivo', 'Equilibrado'];
    const ligas = ['Brasileirão', 'La Liga', 'Premier League', 'Serie A', 'Bundesliga', 'Campeonato Francês'];
    const horasDeTreinamento = ['1-2 horas', '3-4 horas', '5-6 horas', 'Mais de 6 horas'];
    const estatisticasJogador = {
      gols: Math.floor(Math.random() * 200), // Gols marcados
      assistencias: Math.floor(Math.random() * 100), // Assistências
      jogos: Math.floor(Math.random() * 500), // Jogos disputados
      cartõesAmarelos: Math.floor(Math.random() * 50), // Cartões amarelos
      cartõesVermelhos: Math.floor(Math.random() * 10), // Cartões vermelhos
    };
    const jogosImportantes = ['Final da Copa do Brasil', 'Final da Libertadores', 'Clássico Paulista', 'Campeonato Mundial', 'Amistoso Internacional'];
    const jogoImportante = jogosImportantes[Math.floor(Math.random() * jogosImportantes.length)];

    // Seleção aleatória de valores
    const timeFavorito = times[Math.floor(Math.random() * times.length)];
    const posicaoFavorita = posicoes[Math.floor(Math.random() * posicoes.length)];
    const habilidadeMelhor = habilidades[Math.floor(Math.random() * habilidades.length)];
    const estiloDeJogoPreferido = estiloDeJogo[Math.floor(Math.random() * estiloDeJogo.length)];
    const ligaPreferida = ligas[Math.floor(Math.random() * ligas.length)];
    const horasTreinamento = horasDeTreinamento[Math.floor(Math.random() * horasDeTreinamento.length)];

    // Mensagem motivacional de futebol
    const mensagensMotivacionais = [
      "O futebol é paixão, a vitória é consequência!",
      "O jogo não termina até o apito final!",
      "Nunca desista, a vitória vem para quem persevera!",
      "A cada drible, a cada passe, o futebol te ensina a lutar.",
      "No futebol, quem tem garra conquista!"
    ];
    const mensagemMotivacional = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];

    // Montagem do texto do perfil com informações de futebol
    const dptr = `💙️ *SEU PERFIL DE FUTEBOL* 💙️

🏆 *Time Favorito:* ${timeFavorito}
💙️ *Posição Preferida:* ${posicaoFavorita}
🦵 *Melhor Habilidade:* ${habilidadeMelhor}
🎮 *Estilo de Jogo:* ${estiloDeJogoPreferido}
🏟️ *Liga Preferida:* ${ligaPreferida}
⏳ *Horas de Treinamento por Semana:* ${horasTreinamento}

📊 *Estatísticas do Jogador:*
💙 *Gols Marcados:* ${estatisticasJogador.gols}
🎯 *Assistências:* ${estatisticasJogador.assistencias}
🕹️ *Jogos Disputados:* ${estatisticasJogador.jogos}
🟨 *Cartões Amarelos:* ${estatisticasJogador.cartõesAmarelos}
🟥 *Cartões Vermelhos:* ${estatisticasJogador.cartõesVermelhos}

🏆 *Jogo Importante:* ${jogoImportante}

✨ *Mensagem Motivacional:* ${mensagemMotivacional}

> ${NomeDoBot}`;

    // Envio do texto com as informações de futebol
    sandro.sendMessage(from, { text: dptr }, { quoted: selo });
    
  } catch (e) {
    console.log("Erro no comando 'perfiljogo':", e);
  }
  break;
  
case 'desafio':
  try {
if(!isModobn) return reply(mess.warningMB(prefix))
reply(`👉 Não vale desistir! Prepare-se!`)
    // Definindo uma lista de desafios pesados e engraçados
    const desafiosPesados = [
      'Desafio: Fique 1 minuto de pé com uma perna só! Você consegue?',
      'Desafio: Beba um copo de água gelada enquanto segura o ar por 10 segundos!',
      'Desafio: Coloque o pé na sua cabeça e fique assim por 30 segundos!',
      'Desafio: Fique 2 minutos fazendo caretas enquanto segura a respiração!',
      'Desafio: Diga "Eu sou o mestre do universo" em voz alta 5 vezes seguidas!',
      'Desafio: Balançar sua cabeça de um lado para o outro por 1 minuto, sem parar!',
      'Desafio: Fala para seu 5° contato que vc e gay',
      'Desafio: Imite o som de um animal aleatório (galo, vaca, porquinho, etc.) por 30 segundos!',
      'Desafio: Faça 50 abdominais em menos de 1 minuto!',
      'Desafio: Faça um "selfie" com a expressão mais feia que conseguir e envie para o grupo!',
      'Desafio: Segure o ar por 10 segundos! Você consegue?',
      'Desafio: Fique 30 segundos sem rir! Vai conseguir?',
      'Desafio: Tente fazer 10 flexões sem parar!',
      'Desafio: Diga a palavra "paralelepípedo" 5 vezes sem errar!',
      'Desafio: Tente ficar 10 segundos olhando para a tela sem piscar!',
      'Desafio: Faça uma careta bem feia e mantenha por 10 segundos!',
      'Desafio: Diga seu nome ao contrário 3 vezes!',
      'Desafio: Tente adivinhar o enigma: "O que é, o que é? Tem cabeça, mas não tem corpo!"',
      'Desafio: Faça 20 pulos no lugar! Vai encarar?',
      'Desafio: Tente tocar o seu nariz com a língua!'      
    ];

    // Gerando um desafio pesado aleatório
    const desafioPesadoSelecionado = desafiosPesados[Math.floor(Math.random() * desafiosPesados.length)];

    // URL da imagem para o desafio (pode ser uma URL de qualquer imagem da web)
    const imagemUrl = fotobot; // Altere para o link da imagem desejada

    // Enviar a resposta com o desafio pesado e imagem
    const dptr = `🔥 *DESAFIO PESADO* 🔥

💥 *Seu desafio é:* 
${desafioPesadoSelecionado}

> ${NomeDoBot}`;

    // Envia o desafio com a imagem para o usuário
    sandro.sendMessage(from, { image: { url: imagemUrl }, caption: dptr }, { quoted: selo });
  } catch (e) {
    console.log("Erro no comando 'desafio':", e);
  }
  break;
  
case 'tabela':
sandro.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
sandro.sendMessage(from, {text: destrava2 (prefix)}, {quoted: selo})
break 

case 'traduzir':
case 'translate':
case 'tradutor':
    try {
        if (!q) return reply("Por favor, envie o texto que deseja traduzir.");
        reply("Traduzindo...");
        let res = await fetchJson(`https://api.siputzx.my.id/api/tools/translate?text=${encodeURIComponent(q)}&source=auto&target=pt`);
        reply(`Tradução:\n\n${res.translatedText}`);
    } catch (e) {
        reply("Erro ao traduzir. Tente novamente mais tarde.");
    }
    break;

case 'idiomas':
case 'idioma':
sandro.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: selo})
break

case 'infobv':
reply(`Este comando é para informar, como você deve ativar o bem vindo, e lembrando, esse bemvindo, contém uma legenda diferente, a cada grupo que for colocado.

vou ensinar rápido (*ATENÇÃO*)

#hora# (Mosta a hora)
#numerobot# (manda o número do bot)
#prefixo# (manda o prefixo do bot)
#nomedogp# (manda o nome do grupo)
#numerodele# (manda o numero da pessoa)

Exemplo: Ola #numerodele# seja bem-vindo(a) ao grupo #nomedogp# voce entrou as #hora# meu prefixo e (#prefixo#) meu numero e #numerobot#

entendeu? bem simples pra sair a mesma coisa so que e 


${prefix}legendasaiu ate mais #numerodele# e bla bla bla

entendeu🥰 ate mais *SANDRO-BOT*`)
break

case 'getquoted':
case 'getinfo':  
case 'get':  
case 'mek':
reply(JSON.stringify(info, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
sandro.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: selo})
break

case 'ddd':
  if (args.length < 1) return reply(`Uso correto: ${prefix + command} <DDD>`);
  const ddd = args[0];

  try {
    // Fazendo a requisição para obter informações do DDD
    const response = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);

    if (response.data.error) {
      return reply(`Não encontrei informações para o DDD ${ddd}. Tente novamente.`);
    }

    // Inicializando a lista de cidades
    let dddList = `📍 Lista de Cidades com o DDD ${ddd} (${response.data.state})\n\n`;

    // Percorrendo as cidades e formatando a lista
    response.data.cities.forEach((city, index) => {
      dddList += `${index + 1} ⪧ *${city}*\n`;
    });

    // Enviando a lista de cidades para o usuário
    sandro.sendMessage(from, { text: dddList }, { quoted: selo });
  } catch (error) {
    console.error(error);
    reply('Ocorreu um erro ao buscar as informações do DDD. Tente novamente mais tarde.');
  }
  break;
  
//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'raizq': case 'raizquadrada':
if(!Number(q.replace("√", ""))) return reply("Retorne após o comando o número que você quer encontrar a raiz quadrada")
radical = Number(q.replace("√", ""))
if(!raiz(radical)) {
  divi = divisores(radical)
  if(divi.length <= 0) return reply("Nenhum divisor encontrado...")
  primeiro = []
  for(a of divi) {
    if(raiz(a)) primeiro.push({search: a, resultado: findRaiz(a)})
  }
  if(primeiro.length <= 0) return reply("Nenhuma raiz encontrada...")
  result_x = primeiro[primeiro.length - 1].resultado
  resto = radical / primeiro[primeiro.length - 1].search
  dividir = divisores(resto)
  if(divisores.length > 0) {
    segundo = []
    for(b of dividir) {
      if(raiz(b)) segundo.push({search: b, resultado: findRaiz(b)})
    }
    if(segundo.length > 0) {
      result_x *= segundo[segundo.length - 1].resultado
      result_x += `√` + (resto / segundo[segundo.length - 1].search)
    } else result_x += `√` + resto
  } else result_x += `√` + resto
} else result_x = findRaiz(radical)
reply(`🧮 _Segundo meus cálculos, a √${q.replace("√", "")} é -> *"${result_x}"*_ ヅ`)
break

case 'bhaskara':
if(!q) return reply(`Retorne a equação quadrática após o comando (use a variável "x", exemplo: ${prefix+command} 2x²+4x+2 = 0)`)
a = Number(q.replace("x²", "x2").split("x2")[0])
b = Number(q.replace("x²", "x2").split("x2")[1].split("x")[0])
c = Number(q.split("x")[2].split("=")[0])
txt = `∆ = b² - 4 • a • c
∆ = ${b}² - 4 • ${a} • ${c}
∆ = ${b*b} ${Number(-4*a*c) >= 0 ? `+${-4*a*c}` : -4*a*c}
∆ = ${Number(b*b) + Number(-4*a*c)}
`
delta = Number(b*b) + Number(-4*a*c)
if(delta < 0) return reply("A equação não possui raiz")
raiz = []
for(i = 0; i < Number(delta/2); i++) {
if(Number(i*i) === delta) {
raiz.push(i)
}
}
if(delta != 0 && raiz.length <= 0) return reply(`√${delta} não encontrada`)
txt += `
x = -b ±√∆
         2 • a
x = -(${b}) ±√${delta}
         2 • ${a}
`
if(delta > 0) {
txt += `
x = ${b*Number(-1)} ±${raiz[0]}
         ${a*2}
x' = ${b*Number(-1)} + ${raiz[0]}
         ${a*2}
x' = ${Number(b*Number(-1)) + Number(raiz[0])}
         ${a*2}
x' = ${Number(Number(b*Number(-1)) + Number(raiz[0])) / Number(a*2)}

x'' = ${b*Number(-1)} - ${raiz[0]}
         ${a*2}
x'' = ${Number(b*Number(-1)) - Number(raiz[0])}
         ${a*2}
x'' = ${Number(Number(b*Number(-1)) - Number(raiz[0])) / Number(a*2)}

$ = {${Number(Number(b*Number(-1)) + Number(raiz[0])) / Number(a*2)}, ${Number(Number(b*Number(-1)) - Number(raiz[0])) / Number(a*2)}}`
} else {
txt += `x = ${b*Number(-1)}
       ${a*2}
x = ${Number(b*Number(-1)) / Number(a*2)}
`
}
reply(txt)
break

case 'calculadora':
case 'calcular':  
case 'calc':
  try {
    let rsp = q.replace("x", "*")
               .replace('"', ":")
               .replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "")
               .replace("÷", "/");
    const resultado = eval(rsp);
    const mensagem = `🧮 *Cálculo Realizado* 🧮  
    
🔢 *Expressão:* ${q}
    
➗ *Resultado:* ${resultado}

🎯 *Fórmula calculada com sucesso!*

💙 Se precisar de mais cálculos, é só chamar! 💙`;
    return reply(mensagem);
  } catch (error) {
    return reply("❌ *Erro no cálculo!*❌\nPor favor, verifique a expressão e tente novamente.");
  }
  break;

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
sandro.groupUpdateSubject(from, `${blat}`)
sandro.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: selo})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
sandro.groupUpdateDescription(from, `${blabla}`)
sandro.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: selo})
break

case 'requestgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(mess.syntaxRequestProhibited(prefix))
const req = await sandro.groupRequestParticipantsList(from)
if (args[0] === '-r') {
await sandro.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "reject")
} else if (args[0] === '-a') {
mentionSemQuoted(`Seja bem-vindo(a) ao grupo @${args[1].split(' ')[0]}, sua aprovação foi aceita pelo administrador(a).`)
await sandro.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "approve")
} else if (args[0] === '-list') {
let totalRequest = req.length
if (req == 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`)
ABC = `( Total: ${totalRequest} ) - Lista de pessoas que desejam entrar no grupo:\n-\n`
for (var i of req) {
ABC += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\n• Número solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
ABC += `–\n`
}
mention(ABC)
}
break;

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
sandro.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroup) return reply('so em grupo')
if(!isGroupAdmins) return reply('vc nao e adm')
if(!isBotGroupAdmins) return reply('bot precisa ser adm')
linkgc = await sandro.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
try {
photoG = await sandro.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await sandro.groupInviteCode(from)
sandro.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return reply(enviar.msg.donosmt)
var rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
sandro.sendMessage(rgp[i].id, DFC)}
break

case 'grupo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'a') {
setTimeout(() => {reagir(from, "🔓")}, 300)
await reply(`- Certo vou abrir o grupo...`)
sandro.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
setTimeout(() => {reagir(from, "🔐")}, 300)
await reply(`- Certo vou fechar o grupo...`)
sandro.groupSettingUpdate(from, 'announcement')
}				 
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
try {
var ppUrl = await sandro.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await sandro.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`
await sandro.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: selo})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm.conversation : info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)

if (pink && !aud_d && !purple) {
    var DFC = pink
    pink.caption = q.length > 1 
        ? `Marcação do(a) Adm: ${q}` 
        : pink.caption.replace(new RegExp(`${prefix}${command}`, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
    pink.image = { url: pink.url }
    pink.mentions = MRC_TD
} else if (blue && !aud_d && !purple) {
    var DFC = blue  
    blue.caption = q.length > 1 
        ? `Marcação do(a) Adm: ${q.trim()}` 
        : blue.caption.replace(new RegExp(`${prefix}${command}`, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
    blue.video = { url: blue.url }
    blue.mentions = MRC_TD
} else if (red && !aud_d && !purple) {
    black = {}
    black.text = red.replace(new RegExp(`${prefix}${command}`, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
    black.mentions = MRC_TD
    var DFC = black
} else if (!aud_d && !figu_d && green && !purple) {
    brown = {}
    brown.text = green.replace(new RegExp(`${prefix}${command}`, "gi"), `Marcação do(a) Adm: ${NickDono}\n\n`).trim()
    brown.mentions = MRC_TD
    var DFC = brown
} else if (purple) {
    var DFC = purple
    purple.document = { url: purple.url }
    purple.mentions = MRC_TD
} else if (yellow && !aud_d) {
    var DFC = yellow 
    yellow.caption = q.length > 1 
        ? `Marcação do(a) Adm: ${q.trim()}` 
        : yellow.caption.replace(new RegExp(`${prefix}${command}`, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
    yellow.document = { url: yellow.url }
    yellow.mentions = MRC_TD
} else if (figu_d && !aud_d) {
    var DFC = figu_d
    figu_d.sticker = { url: figu_d.url }
    figu_d.mentions = MRC_TD
} else if (aud_d) {
    var DFC = aud_d
    aud_d.audio = { url: aud_d.url }
    aud_d.mentions = MRC_TD
    aud_d.ptt = true
}

sandro.sendMessage(from, DFC).catch(e => {
    console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨💙𝐀𝐂𝐎𝐑𝐃𝐀⟩
╚♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╝
» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'rankddd':
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isGroupAdmins) return reply(enviar.msg.adm);
    if (!isBotGroupAdmins) return reply(enviar.msg.Badmin);

    async function rankddd() {
        let dddMap = {}; // Mapa para agrupar por DDD
        let lista = [];  // Lista de todos os membros que serão mencionados

        for (let i of somembros) {
            let num = i.split('@')[0];
            let ddd = num.length >= 13 ? num.substring(4, 6) : num.substring(2, 4); // captura o DDD dependendo do formato
            if (!dddMap[ddd]) {
                dddMap[ddd] = [];
            }
            dddMap[ddd].push(i);
        }

        let rankTexto = `🏆 *Ranking por DDD - Membros do Grupo* 🏆\n\n`;
        let pos = 1;

        for (let ddd in dddMap) {
            let grupo = dddMap[ddd];
            rankTexto += `*${pos}º Lugar* - 💙️ DDD ${ddd}\n`;
            for (let membro of grupo) {
                rankTexto += `➤ @${membro.split('@')[0]}\n`;
                lista.push(membro);
            }
            rankTexto += `\n`;
            pos++;
        }

        if (lista.length == 0) return reply(`❌ Olá *${pushname}* - Não contém nenhum membro comum no grupo, apenas administradores.`);

        mentions(rankTexto, lista, true);
    }

    rankddd().catch(e => {
        console.log(e);
    });
    break;

case 'personalidade': { //Criado por Lm
    try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
        /** Pega a menção */
        const mentionMessage = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || info.message?.extendedTextMessage?.contextInfo?.participant || null;
        
        if (mentionMessage) {
        
            await reply("*Gerando um personalidade aleatória dessa pessoa, aguarde um momento... 🤗*");
            
            /** Função para pegar palavras aleatoriamente */
            const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];
            
            /** Pega a imagem */
            const getProfileUrl = await sandro.profilePictureUrl(mentionMessage, 'image').catch(() => "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg");
            
            /** Pode add mais... */
            const types = {
                genders: ["Gay 🏳️‍🌈", "Masculino 💪", "Feminino 🦋", "Trans 🏳️‍⚧️", "Lésbica 👩‍💙‍👩"],
                hobbies: ["Cozinhar 🍜", "Ler livros 📚", "Estudar 🎒", "Praticar esportes ⛹️", "Correr 🏃", "Ouvir música 🎧", "Dançar 💃", "Cantar 🎤", "Viajar 🛫", "Joagar video-gamer 🎮"],
                professions: ["Médico", "Engenheiro", "Professor", "Artista", "Designer", "Programador", "Músico", "Escritor", "Puta"],
                favoriteTimesOfDay: ["Manhã 🌤", "Tarde 🌅", "Noite 🌌", "Madrugada 🌃"],
                favoriteMusicGenres: ["Rock", "Pop", "Jazz", "Sertanejo", "Funk", "Clássica", "Eletrônica"],
                favoriteTemperatura: ["Frio 🥶", "Quente 🥵", "Morno 🙂‍↕"]
            };
            
            /** Função para criar um resultado da personalidade */
            function getResults() {
                return {
                    genero: randomFromArray(types.genders),
                    hobbie: randomFromArray(types.hobbies),
                    job: randomFromArray(types.professions),
                    clima: randomFromArray(types.favoriteTimesOfDay),
                    estilo_musical: randomFromArray(types.favoriteMusicGenres),
                    temperatura: randomFromArray(types.favoriteTemperatura)
                }
            }
            
            /** Retonarndo resultado akkaka */
            const b = getResults();
            await sandro.sendMessage(from, {
                image: {
                    url: getProfileUrl,
                }, 
                caption: `   • Resultados da personalidade de @${mentionMessage.split("@")[0]} ✨ ↴\n-\n ░⃟⃛ ➮ Está pessoa provavelmente é *${b.genero}*\n ░⃟⃛ ➮ Gosta de *${b.hobbie}*\n ░⃟⃛ ➮ Sua profissão é ser *${b.job}*\n ░⃟⃛ ➮ A hora do dia preferida é de *${b.clima}*\n ░⃟⃛ ➮ Seu estilo de música é: *${b.estilo_musical}*\n ░⃟⃛ ➮ Temperatura favorita é *${b.temperatura}*\n-\n\n  • Espero ter acertado pelo menos uma hein!!  @${mentionMessage.split("@")[0]} 👀\n\n${NomeDoBot}`,
                mentions: [mentionMessage, sender]
            }, {
                quoted: info
            });
        }
        else {
            reply("Mencione o '@' ou a mensagem de alguém...");
        }
    } catch (err) {
        console.error(err);
        reply("*Ops! Algo inesperado aconteceu. ❌*");
    }
    break;
}

case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
tekssyerr = (args.length > 1) ? body.slice(8).trim() : ''
tekssyerr += ''
for (let mem of groupMembers) {
tekssyerr += `╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨💙𝐀𝐂𝐎𝐑𝐃𝐀⟩
╚♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╝
╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(tekssyerr)
} catch {
reply('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
tekssyerrtr = (args.length > 1) ? body.slice(10).trim() : ''
tekssyerrtr += ''
for (let mem of groupMembers) {
tekssyerrtr += `╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨💙𝐀𝐂𝐎𝐑𝐃𝐀⟩
╚♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╝
╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
sandro.sendMessage(from, {text: tekssyerrtr}, {quoted: selo})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
sandro.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await sandro.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'saibot':
case 'saigp':
case 'sairgp':
if(!SoDono && !isnit) return reply("⚒️ Só o dono pode executar este comando.")
reply(`Ok ${pushname} 

Olá, pessoal! Estou saindo do grupo, Agradeço a todos e até mais!`)
await delay(1000)
try {
await sandro.groupLeave(from)
} catch(e) {
console.log(e)
reply(`Erro`)
}
break

 
case 'seradm':
if(!SoDono && !isnit) return reply("⚒️ Só o dono pode executar este comando.")
await sleep(1000)
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador...`, [sender], true)
sandro.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("⚒️ Só o dono pode executar este comando.")
await sleep(1000)
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
sandro.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertidos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (ADVT.length === 0) return reply("Nenhum membro foi advertido ainda neste grupo.")

let advertidosNoGrupo = ADVT.filter(id => JSON.stringify(groupMembers).includes(id))
if (advertidosNoGrupo.length === 0) return reply("Não há membros advertidos atualmente no grupo.")

let contagemAdvertencias = {}
advertidosNoGrupo.forEach(id => {
  contagemAdvertencias[id] = (contagemAdvertencias[id] || 0) + 1
})

let listaAdvertidos = Object.entries(contagemAdvertencias)
  .map(([id, count]) => `@${id.split("@")[0]} - ${count}/3 advertências`)
  .join('\n')

mentions(`Membros advertidos:\n\n${listaAdvertidos}`, Object.keys(contagemAdvertencias))
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {sandro.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
sandro.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!marc_tds) return reply("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("A advertência do usuário neste grupo foi retirada com sucesso!")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await sandro.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
sandro.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
sandro.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case "aptoide":
if(!q.trim()) return reply("Exemplo: WhatsApp")
try {
abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/aptoide_pesquisa?pesquisa=${q.trim()}&apikey=${API_SANDRO_MD}`)
reply(abc.aptoide)
} catch (e) {
console.log(e)
return reply("Erro...")
}
break;

case "aptoidelink":
if(!q.trim().includes("aptoide.com")) return reply(`Exemplo: ${prefix+command} link do aptoide.`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
try {
abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/aptoide?url=${q.trim()}&apikey=${API_SANDRO_MD}`)
sandro.sendMessage(from, {document: {url: abc.link}, mimetype: "application/vnd.android.package-archive", fileName: abc.titulo}, {quoted: info}).catch((e) => console.log(e))
} catch (e) {
console.log(e)
return reply("Erro...")
}
break;

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await sandro.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `LISTA DE GRUPOS / COMUNIDADES\n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await sandro.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await sandro.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n-\n`
}
reply(teks1)
break

case 'data_saida':
    if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```');

    // Verifica se o usuário enviou a mensagem com a data
    if (!args.length) return reply('Você precisa fornecer a data de saída. Exemplo: !data_saida 15/11/2024');

    // Obtemos a data que o usuário informou
    const dataSaida = args.join(' ');  // Une os argumentos em uma string
    const dataAtual = moment().tz('America/Sao_Paulo').format('DD/MM/YYYY');

    // Verifica se a data informada é válida
    if (!moment(dataSaida, 'DD/MM/YYYY', true).isValid()) {
        return reply('Data inválida. Use o formato DD/MM/YYYY.');
    }

    // Define o aviso de saída
    const avisoSaida = `O usuário ${info.key.fromMe ? 'você' : info.pushName} deve sair do grupo em: ${dataSaida}.`;

    // Aqui você pode salvar essa informação em um banco de dados ou variável para referência futura
    // Exemplo: Salvar em um arquivo ou banco de dados
    // database.set(info.key.remoteJid, { dataSaida: dataSaida });

    reply(avisoSaida);
    break;
    
case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
tekskkyre = `*Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
tekskkyre += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Quantidade de comandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`
}
mention(tekskkyre)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
await ClearMembersInactive()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply(enviar.msg.donosmt)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
sandro.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
txt = args.join(" ")
if(!txt) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('*Cadê o número do destinatário?*')
if(!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await sandro.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
setTimeout(() => {reagir(from, "💌️")}, 50)
reply(mess.sucessAnonymousMail())
sandro.sendMessage(result.jid, {text: mess.anonymousMail(txt2)}).catch((error) => {
return reply("Error ao encaminhar a mensagem, tente novamente mais tarde!")
})
break
    
case 'numero-dono':
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.numerodono = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
        reply(`O número dono foi configurado com sucesso para: ${q}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;
    
case 'prefixo-bot': case 'setprefix':
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.prefix = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
        reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;
    
    
case 'nome-bot':
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.NomeDoBot = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
        reply(`O nome do bot foi configurado para: ${q}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;
    
case 'channel':
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.channel = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
        reply(`O channel foi mudado para: ${q}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;
    
case 'nome-bot':
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.NomeDoBot = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
        reply(`O nome do bot foi configurado para: ${q}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;


case 'nick-dono':
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.NickDono = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
        reply(`O nick do dono foi configurado para: ${q}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;

case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivatePhotoBot(prefix))
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await sandro.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await sandro.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await sandro.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivAddGroup(prefix))
if (args[0] === 'all') {
reply(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await sandro.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await sandro.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await sandro.updateGroupsAddPrivacy('none')
}
}
break

case 'wallpaperanimes': {
data = fs.readFileSync('./arquivos/wallpapers/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break


case 'wallpaperdark': {
data = fs.readFileSync('./arquivos/wallpapers/wallpaperdark.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapervermelho': {
data = fs.readFileSync('./arquivos/wallpapers/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapers4k': {
data = fs.readFileSync('./arquivos/wallpapers/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
sandro.groupUpdateSubject(from, `${body.slice(9)}`)
sandro.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: selo})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
sandro.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
sandro.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n-\nGrupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`})
}
reply('A transmissão foi enviada com êxito.')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n-\n• Grupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido.')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono1 = q.trim()
dono1 = nescessario.numero_dono1
sets(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono2 = q.trim()
dono2 = nescessario.numero_dono2
sets(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono3 = q.trim()
dono3 = nescessario.numero_dono3
ses(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono4 = q.trim()
dono4 = nescessario.numero_dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono5 = q.trim()
dono5 = nescessario.numero_dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono6 = q.trim()
dono6 = nescessario.numero_dono6
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
reply(mess.ownersList(NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ativo': 
case 'on': 
case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
if(fs.existsSync("./database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'ausente': 
case 'off': 
case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'addpremium': 
case 'addvip':
case 'addprem':
if(!SoDono) return reply(enviar.msg.donosmt)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return mention(`Você esqueceu de colocar o número do indivíduo e a quantidade de dias que o(a) usuário(a) como premium.\n• Segue o exemplo de uso correto do comando: *${prefix+command} @${nmrdn.split('@')[0]}/30*\n–––\n• Para colocar o usuário sem duração de expiração do premium, você usa o *0* como quantidade de dias.`)
usur = nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(usur)
if(bla) {
AB = premium.map(i => i.id).indexOf(usur)
if(premium[AB].infinito == true) return reply(`Não é possível adicionar + dias ao usuário, por motivos que ele contém o premium infinito.`)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sandro.sendMessage(from, {text: `${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, {quoted: info})
} else {
premium.push({id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sandro.sendMessage(from, {text: `${Number(tempo50) > 0 ? `@${usur.split("@")[0]} foi adicionado à lista premium com sucesso!` : `@${usur.split("@")[0]} foi agraciado com o benefício do premium infinito!`}`, mentions: [usur]}, {quoted: info})
}
break

case 'delpremium':
case 'delvip':
case 'delprem':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply(`Marque o usuário que deseja remover da lista premium.️`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply("Este número não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sandro.sendMessage(from, {text: `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso!`, mentions: [marc_tds]}, {quoted: info})
break

case 'premiumlist':
if(premium.length == 0) return reply(`Existe *0* user(s) premium(ns), ou seja, não existe ninguém.`)
tkks = `[Total: *${premium.length}*] - Lista de usuário(s) premium temporário(s)/infinito(s):\n–\n`
tkks += premium.map((v, index) =>  `*[${index+1}]* - Usuário: @${v.id.split('@')[0]}\n• Expiração: ${v.infinito == false ? `*O premium do usuário expira em ${v.dias} dia${v.dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do premium do usuário.*`}`).join('\n––\n')
mention(tkks)
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
sandro.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./database/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
sandro.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break


case "grupo":
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if (q == "a") {
await loli.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await loli.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'deletar': 
case 'delete': 
case 'del':  
case 'd':
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPremium) return reply("somente membros vip!")
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.")
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
logoslink.fundo1 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
logoslink.fundo2 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv.')
}
break

case 'antipv3':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários premium..")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("Antipv3 desativado com sucesso, agora responderei todos sem preferência!")
}
break

case 'limitarcmd': 
case 'limitarcomando': 
case 'limitecmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break;

case 'tempocmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break;

case 'lyrics':
if(!q) return reply(`Você esqueceu de colocar após o comando o nome da música...`);
try {
data = await fetchJson(`https://yurimodz-apis.xyz/api/search/lyrics?query=${q}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {text: mess.lyrics(data, II), contextInfo: {externalAdReply: {title: data.resultado.name, body: data.resultado.description, thumbnail: await getBuffer(data.resultado.image), mediaType: 2, sourceUrl: data.resultado.url}}}, {quoted: info});
} catch(error) {
return reply(mess.error())
};
break;

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
sandro.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
sandro.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
tekskkyrey = body.slice(7)
exec(tekskkyrey, (err, stdout) => {
if(err) return sandro.sendMessage(from, {text: `sandromdOfc:~ ${err}`}, {quoted: selo})
if(stdout) {
sandro.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
sandro.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'totalcmd2': 
case 'totalcmd':
case 'totalcomando':{ 
if(!SoDono) return reply(enviar.msg.donosmt)
fs.readFile('./sandro.js', 'utf8', (err, data) => { 
 if (err) throw err;
 let regex = /case\s'(\w+)'/g;
 let match;
 let caseNames = [];
 while ((match = regex.exec(data)) !== null) {
 caseNames.push(match[1]);
 }
 let output = '' + caseNames.join('\n• ');
 let totalCount = caseNames.length;
reply(`*Ola ${pushname}*

_EU TENHO UM TOTAL DE: ${totalCount} COMANDOS✅_`);
});
}
break


case 'instagram':
case 'ig':
  if (!args[0]) return reply('❗ Envie o link de um vídeo do Instagram!\nEx: *' + prefix + 'instagram https://www.instagram.com/reel/CZIV8TyBbTA/*');

  const igUrl = args[0];

  try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
    const igApiUrl = `${zerosite}/api/instagram?url=${encodeURIComponent(igUrl)}&apikey=${API_KEY_ZEROTWO}`;

    const res = await axios.get(igApiUrl);
    const data = res.data;

    if (!data || !data.status || !data.resultados || data.resultados.length === 0) {
      return reply('❌ Não consegui baixar esse vídeo. Verifique se o link é válido ou se o vídeo está disponível.');
    }

    const video = data.resultados[0].url;
    const thumbnail = data.resultados[0].thumbnail;

    // Envia o vídeo com thumbnail e legenda
    await sandro.sendMessage(from, {
      video: { url: video },
      caption: `🔗 ${igUrl}`,
      jpegThumbnail: await getBuffer(thumbnail),
      mimetype: 'video/mp4'
    }, { quoted: info });

  } catch (err) {
    console.log('Erro ao baixar vídeo do Instagram:', err);
    reply('❌ Erro ao tentar baixar o vídeo. A API pode estar fora do ar ou o link está inválido.');
  }

  break;

case 'instaaudio': case 'igaudio':
if(q.length < 5) return reply('Por favor, forneça o link de um *reels/video* do Instagram.')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
try {
data = await fetchJson(`${zerosite}/api/instagram?url=${q}&apikey=${API_KEY_ZEROTWO}`) 
audioInsta = await fetch(data.resultado[0]).then(v => v.buffer())
sandro.sendMessage(from, {audio: audioInsta, mimetype: 'audio/mpeg'}, {quoted: info})
} catch(error) {
reply(mess.error())
}
break

case 'ping2':
  try {
    const path = './settings/fotobot.jpg'; // Caminho da imagem local
    const bufferImage = fs.readFileSync(path);

    sendMsg = await sandro.sendMessage(from, { react: { text: `🧸`, key: info.key } });

    const r = (Date.now() / 1000) - info.messageTimestamp;
    const uptime = process.uptime();
    const hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    const bla = `🧠 *Status do Bot:*\n\n` +
                `*⏰ Hora:* ${hora1}\n` +
                `*💙 Velocidade:* ${String(r.toFixed(3))}s\n` +
                `*⏳ Tempo Ativo:* ${kyun(uptime)}`;

    await sandro.sendMessage(from, {
      image: bufferImage,
      caption: bla
    }, { quoted: info });

  } catch (e) {
    console.log(e);
    reply("Ocorreu um erro ao processar o comando.");
  }
  break;

case 'ping': {
    reagir(from, "🏃🏻");
    await sleep(1000);

    let r = (Date.now() / 1000) - info.messageTimestamp;
    let uptime = process.uptime();
    let hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    let respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim();

    try {
        const numero = info.key.participant || sender || info.participant;
        const perfilUser = await sandro.profilePictureUrl(numero, 'image').catch(() => 'https://i.ibb.co/CKXwf3ss/sandrobot-1753455081623.jpg'); // Fallback caso não consiga puxar

        const pingApiUrl = `https://zero-two-apis.com.br/api/pingcanvas?title=SANDRO%20MD&nome=%C2%BB%20${String(r.toFixed(3))}ms%20%C2%AB&hex=%23FF0095&hex2=%23ffffff&perfil=${encodeURIComponent(perfilUser)}&message=A%20melhor%20forma%20de%20prever%20o%20futuro%20%C3%A9%20invent%C3%A1%E2%80%91lo.&fundo=https://i.ibb.co/CKXwf3ss/sandrobot-1753455081623.jpg&apikey=${API_KEY_ZEROTWO}`;

        await sandro.sendMessage(from, {
            image: { url: pingApiUrl },
            caption: respon,
            mentions: [sender]
        }, { quoted: info });

    } catch (e) {
        console.log('Erro ao gerar imagem de ping:', e);
        reply('❌ Ocorreu um erro ao gerar o ping visual.');
    }
}
break;

/*
case 'ping': {
reagir(from, "🏃🏻")
await sleep(1000)
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
await sandro.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20SANDRO&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
}
break*/

case 'gtts':
case 'falar':
case 'fala':
try {
if (args.length < 1) return sandro.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./arquivos/funcoes/gtts')(args[0])
if (args.length < 2) return sandro.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
sandro.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]}`
await mentions(tagme, [sender], true)
break

case 'modoaluguel': 
case 'aluguel': 
case 'modorent':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donomt)
if(args.length < 1) return reply('1 para ativar, 0 para desativar este recurso.')
if(Number(args[0]) === 1) {
if(isModoAluguel) return reply('O modo aluguel já está ativado neste grupo.')
dataGp[0].aluguel = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de modo aluguel no grupo...')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return reply('O modo aluguel não está ativo no grupo atualmente.')
dataGp[0].aluguel = false
setGp(dataGp)
reply('Modo aluguel desativado, _agora o grupo pode usar meus comandos sem restrições._')
} else {
reply('1 para ativar, 0 para desativar este recurso.')
}
break

case 'addcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdPremium.includes(args[0]))return reply('Este comando já está incluso na lista de comandos premium, verifique.')
isCmdPremium.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos premium.`)
break

case 'delcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)  
if(!isCmdPremium.includes(args[0]))return reply('Este comando já está excluído da lista de comandos premium.')
var i = isCmdPremium.indexOf(args[0])
isCmdPremium.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos premium.`)
break

case 'listacmdprem':
tkks = `[Total: *${isCmdPremium.length}*] - Comandos que foram adicionados para uso Premium:\n–\n`
tkks += isCmdPremium.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
sandro.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
sandro.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: selo})
break

case 'blockcmdgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado.')
deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(enviar.msg.grupo);
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
sandro.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blockcmdg':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isBlockCmdG.includes(args[0]))return reply('Este comando já está incluso na lista de *comandos bloqueados global*.')
isBlockCmdG.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)  
if(!isBlockCmdG.includes(args[0]))return reply('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return reply("Não existe nenhum *comando bloqueado* na lista")
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isBlockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
sandro.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'avalie':
case 'avaliar':
qp = args.join(" ")
if(!qp) return reply(`*❕Exemplo:* ${prefix + command} _"Bot muito bom, parabéns!"_.`)
if(args.length >= 400) return sandro.sendMessage(from, {text: '❗Máximo 400 caracteres'}, {quoted: info})
reagir(from, "🔏")
await sleep(1000)
var nomor = info.participant
tdptls = `*_🔏 Avaliação 🔏_*\n-\n*👤 De:* wa.me/${sender.split("@s.whatsapp.net")[0]}\n-\n*📄 Disse isso:* ${qp}`
sandro.sendMessage(nmrdn, {text: tdptls}, {quoted: info})
reply("*_😉 Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia._*")
break

case 'sugestão':
case 'sugestao':
qp = args.join(" ")
if(!qp) return reply(`*❕Exemplo:* ${prefix + command} _"opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom."_`)
if(args.length >= 800) return sandro.sendMessage(from, {text: '❗Máximo 800 caracteres'}, {quoted: info})
reagir(from, "💡")
await sleep(1000)
var nomor = info.participant
sug = `*_📝 Sugestão 📝_*\n-\n*👤 De:* wa.me/${sender.split("@s.whatsapp.net")[0]}\n-\n*💡 Falou isso:* ${qp}`
sandro.sendMessage(nmrdn, {text: sug}, {quoted: info})
reply("*_😉 Mensagem enviada ao meu dono, obrigado pela sugestão, iremos tentar ouvir o máximo possível de sugestões._*")
break

//==========(BAIXAR/PESQUISAS)==========\

case 'saude_geral':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`💪 *Seu estado geral de saúde hoje* 👈\n\nEnergia: ${gerarnum()}%\nDisposição: ${gerarnum()}%\nImunidade: ${gerarnum()}%\nFadiga: ${gerarnum()}%\nNível de estresse: ${gerarnum()}%\nBem-estar emocional: ${gerarnum()}%`);
  break;

// 2. Exercícios diários
case 'saude_exercicios_diarios':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`🏋️‍♂️ *Seus exercícios diários* 👈\n\nCaminhada: ${gerarnum()}%\nCorrida: ${gerarnum()}%\nMusculação: ${gerarnum()}%\nYoga: ${gerarnum()}%\nAlongamento: ${gerarnum()}%\nMeditação: ${gerarnum()}%`);
  break;

// 3. Alimentação saudável
case 'saude_alimentacao_saudavel':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`🍏 *Sua alimentação saudável hoje* 👈\n\nConsumo de frutas: ${gerarnum()}%\nConsumo de vegetais: ${gerarnum()}%\nProteínas: ${gerarnum()}%\nCarboidratos: ${gerarnum()}%\nGorduras boas: ${gerarnum()}%\nAçúcar: ${gerarnum()}%`);
  break;

// 4. Rotina de sono
case 'saude_rotina_sono':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`😴 *Sua rotina de sono* 👈\n\nHoras de sono: ${gerarnum()}%\nQualidade do sono: ${gerarnum()}%\nSonhos: ${gerarnum()}%\nFases do sono profundo: ${gerarnum()}%\nDificuldade para dormir: ${gerarnum()}%\nAcordar descansado: ${gerarnum()}%`);
  break;

// 5. Hidratação
case 'saude_hidratacao':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`💧 *Sua hidratação hoje* 👈\n\nConsumo de água: ${gerarnum()}%\nHidratação corporal: ${gerarnum()}%\nNível de sede: ${gerarnum()}%\nConsumo de líquidos: ${gerarnum()}%\nRetenção de líquidos: ${gerarnum()}%\nEquilíbrio hídrico: ${gerarnum()}%`);
  break;

// 6. Saúde mental
case 'saude_mental':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`🧠 *Sua saúde mental hoje* 👈\n\nNível de estresse: ${gerarnum()}%\nAnsiedade: ${gerarnum()}%\nClareza mental: ${gerarnum()}%\nMotivação: ${gerarnum()}%\nHumor: ${gerarnum()}%\nTranquilidade: ${gerarnum()}%`);
  break;

// 7. Nível de condicionamento físico
case 'saude_condicionamento_fisico':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`🏃‍♂️ *Seu nível de condicionamento físico* 👈\n\nResistência: ${gerarnum()}%\nForça muscular: ${gerarnum()}%\nVelocidade: ${gerarnum()}%\nFlexibilidade: ${gerarnum()}%\nCoordenação: ${gerarnum()}%\nFrequência cardíaca: ${gerarnum()}%`);
  break;

// 8. Saúde cardiovascular
case 'saude_cardiovascular':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`💙 *Sua saúde cardiovascular* 👈\n\nPressão arterial: ${gerarnum()}%\nFrequência cardíaca: ${gerarnum()}%\nColesterol: ${gerarnum()}%\nCirculação sanguínea: ${gerarnum()}%\nSaúde do coração: ${gerarnum()}%\nNível de oxigênio no sangue: ${gerarnum()}%`);
  break;

// 9. Saúde respiratória
case 'saude_respiratoria':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`🌬️ *Sua saúde respiratória* 👈\n\nCapacidade pulmonar: ${gerarnum()}%\nRespiração profunda: ${gerarnum()}%\nFrequência respiratória: ${gerarnum()}%\nQualidade do ar: ${gerarnum()}%\nSaúde dos pulmões: ${gerarnum()}%\nFôlego: ${gerarnum()}%`);
  break;

// 10. Nível de relaxamento
case 'saude_relaxamento':
if(!isModobn) return reply(mess.warningMB(prefix))  
reply(`🧘 *Seu nível de relaxamento* 👈\n\nTranquilidade: ${gerarnum()}%\nRedução de estresse: ${gerarnum()}%\nMeditação: ${gerarnum()}%\nQualidade de descanso: ${gerarnum()}%\nConexão mente-corpo: ${gerarnum()}%\nDesaceleração: ${gerarnum()}%`);
  break;

// 11. Flexibilidade corporal
case 'saude_flexibilidade':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`🤸 *Sua flexibilidade corporal* 👈\n\nAlongamento: ${gerarnum()}%\nAmplitude de movimento: ${gerarnum()}%\nFlexibilidade das pernas: ${gerarnum()}%\nFlexibilidade das costas: ${gerarnum()}%\nMobilidade articular: ${gerarnum()}%\nPostura corporal: ${gerarnum()}%`);
  break;

// 12. Saúde óssea
case 'saude_ossea':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`🦴 *Sua saúde óssea* 👈\n\nDensidade óssea: ${gerarnum()}%\nSaúde das articulações: ${gerarnum()}%\nForça dos ossos: ${gerarnum()}%\nFlexibilidade: ${gerarnum()}%\nEquilíbrio: ${gerarnum()}%\nPostura: ${gerarnum()}%`);
  break;

// 13. Equilíbrio emocional
case 'saude_equilibrio_emocional':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`💖 *Seu equilíbrio emocional* 👈\n\nEstabilidade emocional: ${gerarnum()}%\nHumor: ${gerarnum()}%\nResiliência: ${gerarnum()}%\nNível de felicidade: ${gerarnum()}%\nAutoestima: ${gerarnum()}%\nControle emocional: ${gerarnum()}%`);
  break;

// 14. Saúde digestiva
case 'saude_digestiva':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`🍽️ *Sua saúde digestiva* 👈\n\nDigestão: ${gerarnum()}%\nAbsorção de nutrientes: ${gerarnum()}%\nRegularidade: ${gerarnum()}%\nSaúde intestinal: ${gerarnum()}%\nHidratação: ${gerarnum()}%\nNível de fome: ${gerarnum()}%`);
  break;

// 15. Saúde muscular
case 'saude_muscular':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`💪 *Sua saúde muscular* 👈\n\nForça muscular: ${gerarnum()}%\nRecuperação muscular: ${gerarnum()}%\nResistência: ${gerarnum()}%\nDefinição muscular: ${gerarnum()}%\nDores musculares: ${gerarnum()}%\nFlexibilidade muscular: ${gerarnum()}%`);
  break;

// 16. Saúde mental no trabalho
case 'saude_mental_trabalho':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`🧠 *Sua saúde mental no trabalho* 👈\n\nNível de estresse: ${gerarnum()}%\nFoco: ${gerarnum()}%\nMotivação: ${gerarnum()}%\nNível de exaustão: ${gerarnum()}%\nClareza mental: ${gerarnum()}%\nSatisfação no trabalho: ${gerarnum()}%`);
  break;

// 17. Saúde imunológica
case 'saude_imunologica':
if(!isModobn) return reply(mess.warningMB(prefix)) 
 reply(`🛡️ *Sua saúde imunológica* 👈\n\nNível de imunidade: ${gerarnum()}%\nDefesa contra resfriados: ${gerarnum()}%\nCapacidade de recuperação: ${gerarnum()}%\nExposição a vírus: ${gerarnum()}%\nResistência a doenças: ${gerarnum()}%\nSaúde geral: ${gerarnum()}%`);
  break;

// 18. Nível de energia física
case 'saude_energia_fisica':
if(!isModobn) return reply(mess.warningMB(prefix))  
reply(`💙 *Seu nível de energia física* 👈\n\nResistência: ${gerarnum()}%\nDisposição: ${gerarnum()}%\nCapacidade de manter esforço físico: ${gerarnum()}%\nRecuperação de energia: ${gerarnum()}%\nUso de energia: ${gerarnum()}%\nNível de fadiga: ${gerarnum()}%`);
  break;

// 19. Saúde emocional em relacionamentos
case 'saude_relacionamentos':
if(!isModobn) return reply(mess.warningMB(prefix))
  reply(`💞 *Sua saúde emocional em relacionamentos* 👈\n\nConfiança: ${gerarnum()}%\nEmpatia: ${gerarnum()}%\nRespeito: ${gerarnum()}%\nAmor: ${gerarnum()}%\nComunicação: ${gerarnum()}%\nEstabilidade: ${gerarnum()}%`);
  break;


  case 'interesses_casa':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses em casa* 👈\n\nLavar pratos: ${gerarnum()}%\nDormir: ${gerarnum()}%\nLavar a casa: ${gerarnum()}%\nFazer comida: ${gerarnum()}%\nComer: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nFazer nada: ${gerarnum()}%`);
    break;

  case 'interesses_escola':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses na escola* 👈\n\nEstudar: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%\nCopiar matéria: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nDormir na aula: ${gerarnum()}%\nFazer lição de casa: ${gerarnum()}%`);
    break;

  case 'interesses_curso':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`✅ *Seus interesses no curso* 👈\n\nPrestar atenção: ${gerarnum()}%\nFazer atividades: ${gerarnum()}%\nConversar: ${gerarnum()}%\nIr para casa: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nPedir ajuda ao professor: ${gerarnum()}%`);
    break;

  case 'interesses_rua':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`✅ *Seus interesses na rua* 👈\n\nObservar a paisagem: ${gerarnum()}%\nComprar algo: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nAndar rápido: ${gerarnum()}%\nParar em uma loja: ${gerarnum()}%\nEncontrar amigos: ${gerarnum()}%`);
    break;

  case 'interesses_shopping':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses no shopping* 👈\n\nFazer compras: ${gerarnum()}%\nComer na praça de alimentação: ${gerarnum()}%\nOlhar vitrines: ${gerarnum()}%\nAssistir a um filme: ${gerarnum()}%\nPassear: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%`);
    break;

  case 'interesses_parque':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses no parque* 👈\n\nFazer exercício: ${gerarnum()}%\nPassear: ${gerarnum()}%\nTirar fotos: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nBrincar com animais: ${gerarnum()}%\nComer algo: ${gerarnum()}%`);
    break;

  case 'interesses_praia':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses na praia* 👈\n\nTomar sol: ${gerarnum()}%\nEntrar no mar: ${gerarnum()}%\nBrincar na areia: ${gerarnum()}%\nComer algo: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nObservar o mar: ${gerarnum()}%`);
    break;

  case 'interesses_academia':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses na academia* 👈\n\nFazer exercícios: ${gerarnum()}%\nLevantar pesos: ${gerarnum()}%\nFazer esteira: ${gerarnum()}%\nDescansar: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%`);
    break;
    
case 'dar'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar, a mensagem ou o @')
susp = `Você deu com vontade para @${menc_os2.split('@')[0]}! 😳)` 
jrq = await getBuffer(`https://telegra.ph/file/d72e1d4dba05d2b054fd8.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'dar2'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar, a mensagem ou o @')
susp = `Você deu com tanta vontade para @${menc_os2.split('@')[0]}! 😳)` 
jrq = await getBuffer(`https://telegra.ph/file/d577416360c3e9799f880.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'dar3'://BY: ZERØPHOENIX
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar, a mensagem ou o @')
susp = `Você deu com tanta vontade para @${menc_os2.split('@')[0]}! 😳)` 
jrq = await getBuffer(`https://telegra.ph/file/ccade2471e6371452a021.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'mamar'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `@${menc_os2.split('@')[0]} Você Recebeu um mamada gostoso(a)` 
jrq = await getBuffer(`https://telegra.ph/file/3ad3be6f2ceec10ced5e8.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

//NOVOS CMDS
case 'beijo': case 'beijar': //BY: ZERØPHOENIX 
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: 'https://telegra.ph/file/04b88dcf0195faf4e8900.mp4'}, gifPlayback: true, caption: `Você deu um beijo incrível na(o) @${menc_os2.split('@')[0]} 😳😏💙‍🔥` , mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comergay'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer comer, a mensagem ou o @')
susp = `Você comeu o chocolate branco @${menc_os2.split('@')[0]} com prazer 🥵🍫)` 
jrq = await getBuffer(`https://telegra.ph/file/6804014b0f3b42711b257.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `Você tratou da(o) @${menc_os2.split('@')[0]} com muito cuidado e dedicação 😈🔥` 
jrq = await getBuffer(`https://telegra.ph/file/cd28a1938d70cf025e207.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer1'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `Você cuidou de @${menc_os2.split('@')[0]} com muito carinho e atenção 😈🔥` 
jrq = await getBuffer(`https://telegra.ph/file/594c6ddb8d18f2a7d49e9.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer2'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `A @${menc_os2.split('@')[0]} recebeu um tratamento especial e cheio de dedicação 😈🔥` 
jrq = await getBuffer(`https://telegra.ph/file/edeb2315d9ec5f32179ac.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer3'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `Você tratou @${menc_os2.split('@')[0]} com todo o zelo e energia 😈🔥` 
jrq = await getBuffer(`https://telegra.ph/file/dd55bfd88c1449838f800.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

  case 'interesses_trabalho':
 if(!isModobn) return reply(mess.warningMB(prefix))
    reply(`✅ *Seus interesses no trabalho* 👈\n\nFazer tarefas: ${gerarnum()}%\nConversar com colegas: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nPausar para café: ${gerarnum()}%\nIr embora: ${gerarnum()}%\nOrganizar o local: ${gerarnum()}%`);
    break;

  case 'interesses_cinema':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`✅ *Seus interesses no cinema* 👈\n\nAssistir ao filme: ${gerarnum()}%\nComer pipoca: ${gerarnum()}%\nConversar durante o filme: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nTirar fotos com amigos: ${gerarnum()}%\nAssistir os trailers: ${gerarnum()}%`);
    break;

  case 'interesses_supermercado':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`✅ *Seus interesses no supermercado* 👈\n\nComprar comida: ${gerarnum()}%\nProcurar promoções: ${gerarnum()}%\nEscolher frutas e legumes: ${gerarnum()}%\nConversar com o caixa: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nSair rápido: ${gerarnum()}%`);
    break;

  case 'interesses_livraria':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`✅ *Seus interesses na livraria* 👈\n\nProcurar livros novos: ${gerarnum()}%\nLer trechos de livros: ${gerarnum()}%\nConversar com atendentes: ${gerarnum()}%\nComprar algo: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nOlhar revistas: ${gerarnum()}%`);
    break;

case 'cinema': {
    reply('🎬 Aguarde enquanto busco os novos filmes... 🍿');

    const url = 'https://www.adorocinema.com/filmes/em-cartaz/estreias/';

    axios.get(url)
        .then(response => {
            const data = response.data;
            const $ = cheerio.load(data);

            let movies = [];

            $('.entity-card').each((index, element) => {
                const title = $(element).find('.meta-title-link').text().trim();
                const releaseDate = $(element).find('.meta-body-info .date').text().trim();
                const genre = $(element).find('.meta-body-info .dark-grey-link').text().trim();
                const rating = $(element).find('.rating-star .tooltip-child').first().text().trim() || 'N/A';
                const synopsis = $(element).find('.synopsis .content-txt').text().trim();
                const directors = $(element).find('.meta-body-direction .dark-grey-link').map((i, el) => $(el).text().trim()).get().join(', ');
                const cast = $(element).find('.meta-body-actor .dark-grey-link').map((i, el) => $(el).text().trim()).get().join(', ');

                if (title && releaseDate) {
                    movies.push({ title, releaseDate, genre, rating, synopsis, directors, cast });
                }
            });

            if (movies.length > 0) {
                let movieDetails = '🎬 **Novos Filmes em Cartaz** 🎬\n\n';
                movies.forEach((movie, index) => {
                    movieDetails += `🍿 **${index + 1}. Título:** ${movie.title}\n`;
                    movieDetails += `📅 **Data de Lançamento:** ${movie.releaseDate}\n`;
                    movieDetails += `🎭 **Gênero:** ${movie.genre}\n`;
                    movieDetails += `⭐ **Avaliação:** ${movie.rating}\n`;
                    movieDetails += `📝 **Sinopse:** ${movie.synopsis}\n`;
                    movieDetails += `🎬 **Direção:** ${movie.directors}\n`;
                    movieDetails += `🎭 **Elenco:** ${movie.cast}\n\n`;
                });

                reply(movieDetails);
            } else {
                reply('❌ Não foram encontrados novos filmes.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os novos filmes:', error);
            reply('❌ Desculpe, ocorreu um erro ao buscar os novos filmes.');
        });

    break;
}

  case 'interesses_biblioteca':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`✅ *Seus interesses na biblioteca* 👈\n\nLer livros: ${gerarnum()}%\nEstudar: ${gerarnum()}%\nPesquisar algo: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nFicar em silêncio: ${gerarnum()}%\nEncontrar amigos: ${gerarnum()}%`);
    break;

  case 'interesses_museu':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`✅ *Seus interesses no museu* 👈\n\nObservar exposições: ${gerarnum()}%\nTirar fotos: ${gerarnum()}%\nConversar com guias: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nLer as placas: ${gerarnum()}%\nPassear pelo local: ${gerarnum()}%`);
    break;

  case 'interesses_restaurante':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`✅ *Seus interesses no restaurante* 👈\n\nComer a comida: ${gerarnum()}%\nConversar: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nTirar fotos dos pratos: ${gerarnum()}%\nPedir sobremesa: ${gerarnum()}%\nOlhar o cardápio: ${gerarnum()}%`);
    break;

  case 'interesses_festa':
if(!isModobn) return reply(mess.warningMB(prefix))    
reply(`✅ *Seus interesses na festa* 👈\n\nDançar: ${gerarnum()}%\nComer: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%\nFicar no celular: ${gerarnum()}%\nTirar fotos: ${gerarnum()}%\nCantar parabéns: ${gerarnum()}%`);
    break;

  case 'interesses_estadio':
if(!isModobn) return reply(mess.warningMB(prefix))    
reply(`✅ *Seus interesses no estádio* 👈\n\nAssistir ao jogo: ${gerarnum()}%\nTorcer: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%\nComer algo: ${gerarnum()}%\nGritar gol: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%`);
    break;

  case 'interesses_aeroporto':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`✅ *Seus interesses no aeroporto* 👈\n\nEsperar o voo: ${gerarnum()}%\nComprar no duty-free: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nComer algo: ${gerarnum()}%\nObservar aviões: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%`);
    break;

  case 'interesses_onibus':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`✅ *Seus interesses no ônibus* 👈\n\nMexer no celular: ${gerarnum()}%\nDormir: ${gerarnum()}%\nObservar a paisagem: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%\nLer um livro: ${gerarnum()}%\nOuvir música: ${gerarnum()}%`);
    break;

  case 'interesses_hospital':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`✅ *Seus interesses no hospital* 👈\n\nEsperar o atendimento: ${gerarnum()}%\nConversar com amigos: ${gerarnum()}%\nMexer no celular: ${gerarnum()}%\nLer algo: ${gerarnum()}%\nFalar com o médico: ${gerarnum()}%\nSair rápido: ${gerarnum()}%`);
    break;

  case 'euamor_cachorro':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por cachorro* 👈\n\n Você ama cachorro!`);
    break;
  
  case 'euamor_mae':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por sua mãe* 👈\n\n Você ama muito sua mãe!`);
    break;
  
  case 'euamor_pai':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por seu pai* 👈\n\n Você ama muito seu pai!`);
    break;
  
  case 'euamor_gato':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por gato* 👈\n\n Você ama muito os gatos!`);
    break;
  
  case 'euamor_cavalo':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por cavalos* 👈\n\n Você ama muito os cavalos!`);
    break;
  
  case 'euamor_carro':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por carros* 👈\n\n Você ama muito os carros!`);
    break;

  case 'euamor_natureza':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor pela natureza* 👈\n\n Você ama muito a natureza!`);
    break;

  case 'euamor_comida':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`💖 *${gerarnum()}% de amor por comida* 👈\n\n Você ama muito comer!`);
    break;

  case 'euamor_viagens':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`💖 *${gerarnum()}% de amor por viajar* 👈\n\n Você ama muito viajar!`);
    break;

  case 'euamor_musica':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`💖 *${gerarnum()}% de amor por música* 👈\n\n Você ama muito a música!`);
    break;

  case 'euamor_futebol':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por futebol* 👈\n\n Você ama muito o futebol!`);
    break;

  case 'euamor_tecnologia':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por tecnologia* 👈\n\n Você ama muito a tecnologia!`);
    break;

  case 'euamor_esporte':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por esportes* 👈\n\n Você ama muito os esportes!`);
    break;

  case 'euamor_ciencia':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por ciência* 👈\n\n Você ama muito a ciência!`);
    break;

  case 'euamor_filmes':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por filmes* 👈\n\n Você ama muito os filmes!`);
    break;

  case 'euamor_series':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por séries* 👈\n\n Você ama muito as séries!`);
    break;

  case 'euamor_amigos':
if(!isModobn) return reply(mess.warningMB(prefix)) 
   reply(`💖 *${gerarnum()}% de amor por amigos* 👈\n\n Você ama muito seus amigos!`);
    break;

  case 'euamor_livros':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por livros* 👈\n\n Você ama muito ler livros!`);
    break;

  case 'euamor_chocolate':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por chocolate* 👈\n\n Você ama muito o chocolate!`);
    break;

  case 'euamor_pizza':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por pizza* 👈\n\n Você ama muito pizza!`);
    break;

  case 'euamor_sol':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor pelo sol* 👈\n\n Você ama muito o sol!`);
    break;

  case 'euamor_chuva':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor pela chuva* 👈\n\n Você ama muito a chuva!`);
    break;

  case 'euamor_festas':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por festas* 👈\n\n Você ama muito festas!`);
    break;

  case 'euamor_artes':
if(!isModobn) return reply(mess.warningMB(prefix))   
 reply(`💖 *${gerarnum()}% de amor por artes* 👈\n\n Você ama muito as artes!`);
    break;

  case 'euamor_novelas':
if(!isModobn) return reply(mess.warningMB(prefix))    
reply(`💖 *${gerarnum()}% de amor por novelas* 👈\n\n Você ama muito as novelas!`);
    break;

  case 'euamor_aventura':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por aventura* 👈\n\n Você ama muito a aventura!`);
    break;

  case 'euamor_teatro':
 if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor pelo teatro* 👈\n\n Você ama muito o teatro!`);
    break;

  case 'euamor_cozinhar':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por cozinhar* 👈\n\n Você ama muito cozinhar!`);
    break;

  case 'euamor_animais':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por animais* 👈\n\n Você ama muito os animais!`);
    break;

  case 'euamor_familia':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor pela família* 👈\n\n Você ama muito sua família!`);
    break;

  case 'euamor_flor':
if(!isModobn) return reply(mess.warningMB(prefix))  
  reply(`💖 *${gerarnum()}% de amor por flores* 👈\n\n Você ama muito as flores!`);
    break;

case 'google': case 'googlesrc': 
if(!q) return reply(`Você esqueceu de colocar o que você deseja pesquisar após o comando.`);
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
data = await fetchJson(`${zerosite}/api/search/google?query=${q}&apikey=${API_KEY_ZEROTWO}`);
await sandro.sendMessage(from, {text: data.resultado.map(v =>`★ Título: *${v.title}*\n★ Descrição: *${v.snippet}*\n★ Link: *${v.link}*`).join('\n–\n'), contextInfo: {externalAdReply: {title: data.resultado[0].title, body: data.resultado[0].snippet, mediaType: 2, sourceUrl: data.resultado[0].link}}}, {quoted: info});
} catch(error) {
return reply(mess.error())
}
break

case 'screenshotweb': case 'printsite': case 'ssweb':
reply('Aguarde um pouco, entrando no site solicitado...')
if(!q) return reply(`Cadê o link do site o qual você deseja visualizar?`)
try {
img = await getBuffer(`https://yurimodz-apis.xyz/api/ssweb?link=${q}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: img, caption: `• *Site:* ${q}`}, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️️ Erro ao entrar no site desejado. Tente novamente mais tarde!')
}
}
break

case 'only1': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only1 = `
Luiz russo (mans茫o maromba)
> https://t.me/+8cJ7yGnq5fI2YjYx
`
sandro.sendMessage(sender, {text: only1}, {quoted: selo})
break

case 'only2': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only2 = `
Luiza blue 
> https://t.me/+JaX8wY_45843ZTBh
`
sandro.sendMessage(sender, {text: only2}, {quoted: selo})
break

case 'only3': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only3 = `
Isadora vale 
> https://t.me/+smb4i0bxRl41ZjRh
`
sandro.sendMessage(sender, {text: only3}, {quoted: selo})
break

case 'only4': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only4 = `
Ingrid bianchi
> https://t.me/+RJtf2TqTQ8NjZjlh
`
sandro.sendMessage(sender, {text: only4}, {quoted: selo})
break

case 'only5'://by Natsumi 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only5 = `
Lizy Donato 
> https://t.me/+gmSjm2WZnb41OGEx
`
sandro.sendMessage(sender, {text: only5}, {quoted: selo})
break

case 'only6': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only6 = ` 
Feh Galv茫o
> https://t.me/+naeQ1pp8ajswMjgx
`
sandro.sendMessage(sender, {text: only6}, {quoted: selo})
break

case 'only7': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only7 = `
Tatyzack
> https://t.me/+NvglGFhOLSY5NmZ
`
sandro.sendMessage(sender, {text: only7}, {quoted: selo})
break

case 'only8'://by Natsumi 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only8 = `
Ayrla Souza 
> https://t.me/+XLziPd47MWo2N2Y
`
sandro.sendMessage(sender, {text: only8}, {quoted: selo})
break

case 'only9'://by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only9 = `
ALINE FARIA
> https://t.me/+j1xp_hmXrx5lZWMx
`
sandro.sendMessage(sender, {text: only9}, {quoted: selo})
break

case 'only10'://by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only10 = `
KINE CHAN 
> https://t.me/+YIVax4IQ9aFlMDgx
`
sandro.sendMessage(sender, {text: only10}, {quoted: selo})
break

case 'only11': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado no seu pv`)
only11 = `
DJ NATHI
> https://t.me/+6Z5vuVApT-1lYjEx
`
sandro.sendMessage(sender, {text: only11}, {quoted: selo})
break

case 'only12': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviando no seu pv`)
only12 = `
BELE KAFFER
> https://t.me/+70DMw3iTzb0yMzEx
`
sandro.sendMessage(sender, {text: only12}, {quoted: selo})
break

case 'memes': 
case 'memedroid':
try {
reply(enviar.espere)
res = await axios.get(`https://yurimodz-apis.xyz/api/memes?apikey=${SANDRO_MD_BOT}`);
teks = pickRandom(res.data.pesquisa.resultado)
await sandro.sendMessage(from, {image: await getBuffer(teks.imagem), caption: mess.memesImages(teks)}, {quoted: selo}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'memesvid': 
case 'ifunnyvideo':
try {
reply(enviar.espere)
res = await axios.get(`https://yurimodz-apis.xyz/api/memesvid?apikey=${SANDRO_MD_BOT}`);
teks = pickRandom(res.data.videos)
await sandro.sendMessage(from, {video: await getBuffer(teks.video), caption: mess.iFunnyVideo(teks)}, {quoted: selo}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`🧙‍♀Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
d = await pickRandom(theNews.data.articles)

reply(`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n★ Descrição: *${d.description}*\n★ Postagem: *${d.publishedAt.split('T').join(' - ').split('Z')[0]}*\n★ URL: *${d.url}*`)
} catch (error) {
return reply(mess.error())
}
break
           
case 'cases':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("sandro.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
sandro.sendMessage(from, { text: listCases() }, { quoted: selo });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'opag':
reply("*Aguarde um momento.*") 
try {
if(!q) return reply(`Exemplo: ${prefix+command} Thais Carla`)
reply(`*Aguarde enviando* _SANDRO API_`)
await sandro.sendMessage(from, {image: {url: (`http://br1.bronxyshost.com:4360/ias/animeai?apikey=${SANDRO_MD}&img=https://telegra.ph/file/7200048b9363d0532d0fe.jpg`)}, caption: 'Aqui esta sua imagem.'}, {quoted:info})
} catch (e) {
return reply(`${e}`);
}
break

case 'pinterest2': {
  if (!args.length) {
    await sandro.sendMessage(from, { text: 'Digite o nome para pesquisar. Ex: /pinterest2 anime' }, { quoted: m });
    return;
  }

  const termo = encodeURIComponent(args.join(" "));
  const url = `${zerosite}/api/pinterest2?text=${termo}&apikey=${API_KEY_ZEROTWO}`;

  try {
    const response = await fetch(url);
    const res = await response.json();

    if (!res.status || !res.resultado || res.resultado.length === 0) {
      await sandro.sendMessage(from, { text: 'Nenhuma imagem encontrada no Pinterest.' }, { quoted: info });
      return;
    }

    const random = res.resultado[Math.floor(Math.random() * res.resultado.length)];

    await sandro.sendMessage(from, {
      image: { url: random.image },
      caption: `📌 *Pinterest*\n\n*Autor:* ${random.fullname}\n*Seguidores:* ${random.followers}\n*Descrição:* ${random.caption || 'Sem legenda'}\n🔗 *Fonte:* ${random.source}`
    }, { quoted: info });

  } catch (e) {
    console.error('Erro no pinterest2:', e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar imagem do Pinterest.' }, { quoted: info });
  }

  break;
}

/*
case 'pinterest':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pinterest?nome=${q}&apikey=${API_SANDRO_MD}`);
sandro.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)]}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;
*/

case 'akinator':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) return reply("Volte mais tarde...")
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
jogo.now = true
akinator.splice(0, 1)
fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
}
if(!JSON.stringify(akinator).includes(from)) {
reply(`Atenção ${pushname}, irei iniciar o jogo do akinator, _siga as instruções abaixo:_\n• Responda os questionamentos com: _"Sim", "Não", "Não sei", "Provavelmente sim" ou "Provavelmente não"_...\n• ${II}Observação:${II} Não use as aspas, utilize sem as aspas por favor.`)
dateAKI = moment.tz('America/Sao_Paulo').format('DD')
var region = 'pt'
var childMode = false;
var proxy = undefined;
let startAki = async () => {
aki = new Aki({region, childMode, proxy});
await aki.start()
}
await startAki()
jogo.now = false
jogo.jogador = sender
akinator.push({id: from, jogador: sender, finish: 0, dia: dateAKI})
fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: *${aki.question}*`)
} else return mention(`@${akinator[akinator.map(i => i.id).indexOf(from)].jogador.split('@')[0]} já iniciou uma partida, espere ele(a) finalizar a atual para iniciar outra...`)
break

case 'resetaki':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && !SoDono) return reply("Não existe nenhuma sessão ainda em andamento no grupo.")
nosei = SoDono ? 0 : akinator.map(i => i.id).indexOf(from)
if(akinator[nosei].jogador == sender || isGroupAdmins || SoDono) {
jogo.now = true
akinator.splice(nosei, 1)
  fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
reply(`O akinator foi resetado com sucesso, a sessão foi deletada.`)
} else {
reply("Somente o(s) adm(s) ou a pessoa que iniciou o jogo podem resetar.")
}
break

          case 'videopralink':
          case 'gerarvideo':
            try {
              if (isQuotedVideo) {
                boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
                  : info.message.videoMessage;
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadVideoToTelegraph(videoBuffer) {
                  const form = new FormData();
                  form.append('file', videoBuffer, { filename: 'media' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "video");
                const imageUrl = await uploadVideoToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque o video')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
            
case 'gerarlink2':
  try {
    if (isQuotedImage) {
      boij = isQuotedImage || isQuotedVideo 
        ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage 
        : info;
      const fetch = require('node-fetch');
      const FormData = require('form-data');
      async function uploadImageToImgur(imageBuffer) {
        const form = new FormData();
        form.append('image', imageBuffer, { filename: 'image.jpg' });
        const response = await fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          body: form,
          headers: {
            'Authorization': 'Client-ID 400116076ba4b73'
          }
        });
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers.raw());
        const data = await response.json();
        console.log('Response data:', data); 
        if (response.ok && data.data && data.data.link) {
          return data.data.link;
        } else {
          throw new Error('Failed to retrieve the image URL from the response.');
        }
      }
      const owgi = await getFileBuffer(boij, "image");
      const imageUrl = await uploadImageToImgur(owgi);
      reply(imageUrl);
    } else {
      reply('Marque a foto.');
    }
  } catch (e) {
    console.log('Error details:', e); 
    reply('Erro...');
  }
  break;

case 'fazernick':
case 'gerarnick':
case 'nick':
case 'gerarnick2':
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
if (!q) return reply(`*Exemplo:* ${prefix}${command} sandro md`)
const response = await fetch(`${zerosite}/api/fazernick?nome=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`)
if (!response.ok) throw new Error('Erro ao acessar a API.')
const nicks = await response.json()
if (!Array.isArray(nicks) || nicks.length === 0) {
return reply('😔 _Nenhum nickname gerado._')
}
let formattedNicks = '✨ *Nicknames Gerados:* ✨\n\n'
nicks.forEach((nick, index) => {
formattedNicks += `🌟 ${index + 1}. *${nick}*\n`
})
formattedNicks += '\n👉 _Escolha o seu favorito!_'
reply(formattedNicks)
} catch (e) {
console.log(e)
return reply("🚨 Erro ao gerar nicknames.")
}
break

case 'pubg':
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Faltando a / para separar o texto1 e o texto2, exemplo: ${prefix + command} yoshino/Bot`)
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
data = await fetchJson(`${zerosite}/api/photooxy/pubg?texto=${texto1}&texto2=${texto2}&apikey=${API_KEY_ZEROTWO}`)
await sandro.sendMessage(from, {image: {url: data.resultado.imageUrl}, caption: `✏️ By ${NomeDoBot} 🖼️`}, {quoted: info})
} catch(error) {
return reply(mess.error())
}
break

case 'glitch':
case 'write':
case 'advancedglow':
case 'typography':
case 'pixelglitch':
case 'neonglitch':
case 'flag':
case 'flag3d':
case 'deleting':
case 'blackpink':
case 'glowing':
case 'underwater':
case 'logomaker':
case 'cartoon':
case 'papercut':
case 'watercolor':
case 'effectclouds':
case 'blackpinklogo':
case 'gradient':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917':
case 'makingneon':
case 'royal':
case 'freecreate':
case 'galaxy':
case 'darkgreen':
case 'lighteffects': 
case 'dragonball':
case 'neondevil':
case 'frozen':
case 'wooden3d':
case 'metal3d':
case 'ligatures':
case '3druby':
case 'sunset':
case 'cemetery':
case 'halloween':
case 'horror':
case 'blood':
case 'joker':
case 'clouds':
textin = args.join(" ") 
if(!textin) return reply("Você precisa acrescentar um texto!")
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
let logos = await getBuffer(`https://api.nexfuture.com.br/api/logos/${command}?texto=${textin}`)
await sandro.sendMessage(from, 
{image: logos}, 
{quoted: info})
} catch (error) {
console.log(error)
reply(" deu erro na solicitação ")
}
break

case 'cria': 
if (args.length < 1) return reply(mess.syntaxLogos())
tekskkyruu = body.slice(7)
if (tekskkyruu.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${q}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break

case 'anime1':
if (args.length < 1) return reply(mess.syntaxLogos())
tekskkyruuu = body.slice(7)
if (tekskkyruuu.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break

case 'ff1':
if (args.length < 1) return reply(mess.syntaxLogos())
teksh = body.slice(7)
if (teksh.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
sandro.sendMessage(from, { image: venomk }, {quoted: selo })
break	

case 'game':
if (args.length < 1) return reply(mess.syntaxLogos())
tekskkyruuuu = body.slice(7)
if (tekskkyruuuu.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break

case 'ff2':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssq = body.slice(7)
if (tekssq.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break	

case 'anime22':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssqq = body.slice(7)
if (tekssqq.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break

case 'entardecer':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssqqq = body.slice(7)
if (tekssqqq.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break

case 'indian':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssop = body.slice(7)
if (tekssop.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break 

case 'ffrose':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssopp = body.slice(7)
if (tekssopp.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break	

case 'ffgren':
if (args.length < 1) return reply(mess.syntaxLogos())
teksheo = body.slice(7)
if (teksheo.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break		

case 'chufuyu':
if (args.length < 1) return reply(mess.syntaxLogos())
teksbb = body.slice(7)
if (teksbb.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break	

case 'wolf':
if (args.length < 1) return reply(mess.syntaxLogos())
teksbbb = body.slice(7)
if (teksbbb.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break	

case 'dragonred':
if (args.length < 1) return reply(mess.syntaxLogos())
teksyyy = body.slice(7)
if (teksyyy.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
sandro.sendMessage(from, { image: venomk }, { quoted: selo })
break	

case "gruposwhatsapp":
reply("Enviando lista de grupos..")

var abcd = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gruposwhatsapp?apikey=${API_SANDRO_MD}`)

let gps = "Lista de Grupos:\n\n"

for ( i = 0; i < abcd.length; i++) {

gps += `${abcd[i].titulo}\n\nRegras: ${abcd[i].regras}\nLink: ${abcd[i].link}\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
}
reply(gps)
break

case 'grupos': {
reply("[❗] aguarde uns minutinho estou processado")
blue = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/grupos?q=${q}&apikey=${API_SANDRO_MD}`)
let red = "Listagem de grupos para você:\n\n"
blue.forEach(function(ab) {
red += ` - Url do Grupo: ${ab.link}\n\n - Descrição: ${ab.desc}\n\n${"-".repeat(20)}\n\n`
})
reply(red)
}
break;

case "orangejuice":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`https://yurimodz-apis.xyz/api/textpro/3d-orange-juice?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
dllink = await getBuffer(bla.resultado)
sandro.sendMessage(from, {image: dllink}, {quoted: selo}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")   
})
break

case "neonlight":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`https://yurimodz-apis.xyz/api/textpro/3d-neon-light?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
dllink = await getBuffer(bla.resultado)
sandro.sendMessage(from, {image: dllink}, {quoted: selo}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "brilhante":
case "vietnam":
case "seta":
case "grafite":
case "goldt":
case "tela":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`https://yurimodz-apis.xyz/api/ephoto/${command}?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: bla}, {quoted: selo}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "desfocado":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`https://yurimodz-apis.xyz/api/ephoto/blur?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: bla}, {quoted: selo}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'pubgv': 
case 'natalmsg': 
case 'anonovo': 
case 'trigrev':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`https://yurimodz-apis.xyz/api/ephoto/${command}?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {video: bla}, {quoted: selo}).catch(e =>{
reply("Erro ao criar sua logo em vídeo! Tente novamente mais tarde.")  
})
break

case 'qc':
if(!q) return reply(`Para usar este comando é nescessário adicionar algo após o comando.`)
reply(enviar.espere)
try {
ppimg = await sandro.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'}
const json = {"type": "quote", "format": "png", "backgroundColor": "#FFFFFF", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": ppimg}}, "text": q, "replyMessage": {}}]};
axios.post('https://quote.btch.bz/generate', json, {headers: {'Content-Type': 'application/json'}}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
sandro.sendImageAsSticker(from, buffer, {author: `📌 Criado(a) por: ${NomeDoBot}`})
}).catch((e) => {
return reply(mess.error())
})
break

case 'figuweb':
verificartext = args.join(" ")
if(!verificartext) return reply(mess.syntaxWebSticker(prefix));
let text, colorNumber;
if (q.includes('/')) {[text, colorNumber] = q.split('/')} else {text = q; colorNumber = '1'}
reply("• Aguarde, estou gerando a figurinha de acordo o que você solicitou!");
setTimeout(() => { reagir(from, "💬"); }, 500);
const colorC = {'1': '#000000', '2': '#FFFFFF','3': '#FF0000', '4': '#0000FF'};
const backgroundColor = colorC[colorNumber] || '#000000';
try {ppimg = await sandro.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://i.imgur.com/OqeFhHP.jpeg'}
const avatar = `${ppimg}`
const jsonNew = {"type": "quote", "format": "png", "backgroundColor": backgroundColor, "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": avatar}}, "text": text, "replyMessage": {}}]};
axios.post('https://bot.lyo.su/quote/generate', jsonNew, {headers: {'Content-Type': 'application/json'}}).then((reesult) => {
const bufferE = Buffer.from(reesult.data.result.image, 'base64')
sandro.sendImageAsSticker(from, bufferE, {author: `📌 Criado(a) por: ${NomeDoBot}`})
}).catch((e) => {
return reply(mess.error())
})
break


case 'amazon': 
case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
reply(enviar.espere);
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/amazon?nome=${q}&apikey=${SANDRO_MD_BOT}`);
RST = "🛒 *𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 - 𝐀𝐌𝐀𝐙𝐎𝐍 𝐒𝐓𝐎𝐑𝐄:*\n–\n"
RST += ABC.resultado.map((v, index) => `*${index+1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`).join('\n–\n')
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;
/*
case 'brasileirao':
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/brasileirao?apikey=${SANDRO_MD_BOT}`);
RST = "💙️📊 *Tabela Brasileirão:*\n–\n"
RST += ABC.resultado.map((v, index) => `${index+1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;
*/

case 'receita':
  try {
    if (!args[0]) return reply("❌ Por favor, envie o nome da receita. Exemplo: /receita bolo de cenoura");

    const nomeReceita = args.join(" ");
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(nomeReceita)}`);
    const data = await res.json();

    if (!data.meals || data.meals.length === 0) {
      return reply("❌ Receita não encontrada. Verifique o nome e tente novamente.");
    }

    const receita = data.meals[0];

    const titulo = receita.strMeal;
    const categoria = receita.strCategory || "Categoria desconhecida";
    const area = receita.strArea || "Origem desconhecida";
    const imagem = receita.strMealThumb;
    const instrucoes = receita.strInstructions || "Modo de preparo não disponível.";
    const video = receita.strYoutube || "Sem vídeo";

    // Pega ingredientes e medidas
    let ingredientes = "";
    for (let i = 1; i <= 20; i++) {
      const ing = receita[`strIngredient${i}`];
      const medida = receita[`strMeasure${i}`];
      if (ing && ing.trim() !== "") {
        ingredientes += `- ${medida} ${ing}\n`;
      }
    }

    const mensagem = `🍽️ *Receita: ${titulo}*\n\n` +
      `🍴 *Categoria:* ${categoria}\n` +
      `🌍 *Origem:* ${area}\n\n` +
      `🧂 *Ingredientes:*\n${ingredientes}\n` +
      `📖 *Modo de Preparo:*\n${instrucoes}\n\n` +
      `🎥 *Vídeo:* ${video}`;

    await sandro.sendMessage(from, {
      image: { url: imagem },
      caption: mensagem
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando /receita:", e);
    reply("❌ Ocorreu um erro ao buscar a receita.");
  }
  break;

case 'ps':
case 'playstore':
if(!q) return reply(`KD o nome do app ?`)
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
ABC = await fetchJson(`${zerosite}/api/playstore?nome=${encodeURI(q)}&apikey=${API_KEY_ZEROTWO}`)
i = ABC.pesquisa.resultado[0]
txt = `
❪🏷️ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎৴▸ ${i.nome}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙳𝚎𝚜𝚎𝚗𝚟𝚘𝚕𝚟𝚎𝚍𝚘𝚛৴▸ ${i.desenvolvedor}
❪⭐ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘৴▸ ${i.estrelas}
𖡋ꦿ𝙻𝚒𝚗𝚔ฺ࣭࣪͘ꕸ▸ ${i.link}
`
sandro.sendMessage(from, {text: txt, contextInfo: {
externalAdReply: {
title: `🎮 𝙋𝙇𝘼𝙔 𝙎𝙏𝙊𝙍𝙀 🎮`,
body: ``,
thumbnail: await getBuffer(i.imagem),
mediaType: 1,
sourceUrl: i.link
}, forwardingScore: 1000000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel }}}, {quoted: info})
} catch {
reply(`Não encontrei nenhum app, ou pode ser que a api caiu`)
}
break


case 'playstore2':
if(!q) return reply(`KD o nome do app ?`)
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
ABC = await fetchJson(`${blacksite}/api/playstore?nome=${encodeURI(q)}&apikey=`+API_KEY_BLACK)
i = ABC.pesquisa.resultado[0]
txt = `
❪🏷️ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎৴▸ ${i.nome}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙳𝚎𝚜𝚎𝚗𝚟𝚘𝚕𝚟𝚎𝚍𝚘𝚛৴▸ ${i.desenvolvedor}
❪⭐ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘৴▸ ${i.estrelas}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔ฺ࣭࣪͘ꕸ▸ ${i.link}
`
sandro.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `ㅤㅤㅤ🎮 𝙋𝙇𝘼𝙔 𝙎𝙏𝙊𝙍𝙀 🎮`,
    body: ``,
    thumbnail: await getBuffer(i.imagem),
    mediaType: 1,
    sourceUrl: i.link
  }
}}, {quoted: info})
} catch {
reply(`Não encontrei nenhum app, ou pode ser que a api caiu`)
}
break


case 'rastrear':
if (!q) return reply(mess.syntaxTrackParcels(prefix))
if (q.length < 13 || q.length > 13) return reply(mess.invalidCodeRastrear())
data = await fetchJson(`https://yurimodz-apis.xyz/api/rastreio?code=${q}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted:info}).catch(e => {
return reply(mess.error())
})
break

case 'e-sportnews': 
case 'gamesnews': 
case 'gamenews':
if(!q) return reply(mess.syntaxNewsGame(prefix))
if (args[0] === '-cod') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=cod&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-csgo') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=csgo&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fifa') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=fifa&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fortnite') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=fortnite&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-gamexp') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=gamexp&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pes') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=pes&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-lol') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=lol&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pokemon') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=pokemon&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-rainbow-6') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=rainbow-6&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-valorant') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=valorant&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tcg') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=tcg&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
}
break



case 'esporte_news': 
case 'esportenoticias': 
case 'esportenews':
if(!q) return reply(mess.syntaxNewsEsportes(prefix))
if (args[0] === '-all') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futebol') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=futebol&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futsal') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=futsal&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-skate') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=skate&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-surfe') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=surfe&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-basquete') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=basquete&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-volei') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=volei&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tenis') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=tenis&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-atletismo') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=atletismo&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-natacao') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=natacao&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-ciclismo') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=ciclismo&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-boxe') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=boxe&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-beisebol') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=beisebol&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futebol-eua') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=futebol-americano&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-judo') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=judo&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-ginastica') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=ginastica-artistica&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-golfe') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=golfe&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-formula-1') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/esporte_noticias?esporte=formula-1&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: "https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg"}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
}
break
/*
case 'prox_jogo':
case 'proximojogo':
if (!q) return reply("Você esqueceu de colocar o nome do time, o qual você deseja saber informações sobre os próximos jogos!")
timeMap = {"São Paulo": "sao-paulo", "América-MG": "america-mg", "Atlético-MG": "atletico-mg"};
qModified = Object.keys(timeMap).reduce((acc, word) => acc.replace(new RegExp(word, "ig"), timeMap[word]), q.toLowerCase());
encModified = encodeURIComponent(qModified);
try {
setTimeout(() => {reagir(from, "💙")}, 50)
data = await fetchJson(`http://api.baddeveloper.space:25572/api/prox_jogo?time=${encModified}`);
if(data.jogos.length == 0) return reply("Não tem nenhuma *resposta do servidor*, ou seja, _não existe nenhum jogo confirmado ainda pelo time._")
reply(`• Dia(s) do(s) jogo(s) confirmado(s) a serem jogados:\n\t• Time: *${q}*\n–\n${data.jogos.map((v, index) => `*${index+1}.* ${v.liga} › *${v.data}* | ${v.timeCasa} x ${v.timeVisitante}`).join("\n––\n")}`)
} catch(error) {
setTimeout(() => {reagir(from, "❌️")}, 50)
reply(mess.error())
}
break


case 'meutime':
if (!q) return reply('Informe o nome do time.');
try {
setTimeout(() => {reagir(from, "💙")}, 50)
data = await fetchJson(`http://api.baddeveloper.space:25572/api/meutime?q=${q}`);
if (data.resultado.length === 0) return reply('Nenhum time encontrado.');
reply(`💙 | 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 𝐓𝐈𝐌𝐄:\n–\n› Time informado: *${q}*\n› Colocação/posição atual do time: *${data.resultado[0].position}°*\n› Quantidade de Pontos no time: *${data.resultado[0].points}*\n› Quantidade de jogo(s) disputado(s) pelo time: *${data.resultado[0].gamesPlayed}*\n› Quantidade de jogo(s) empatado(s) pelo time: *${data.resultado[0].draws}*\n› Quantidade de jogo(s) de perdidos/derrota do time: *${data.resultado[0].losses}*\n—\n› Quantidade de gols sofridos pelos time(s) adversário(s): *${data.resultado[0].goalsFor}*\n› Quantidade de gols feitos: *${data.resultado[0].goalsAgainst}*\n› Quantidade total de saldo de gols feito pelo time: *${data.resultado[0].goalDifference}*\n—\n› Aproveitamento (%): *${data.resultado[0].approval}%*`);
} catch(error) {
setTimeout(() => {reagir(from, "❌️")}, 50)
reply(mess.error());
}
break;
*/
case 'imdb':
if (!q) return reply(`• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n      • Exemplo: *${prefix}imdb Ação*\n–\n🔍 Saber mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n      • Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n          • Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`)
AB = await fetchJson(`https://yurimodz-apis.xyz/api/search/imdb?query=${q}&apikey=${SANDRO_MD_BOT}`)
ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 - *( ${date} ${hora} )*\n     • *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n         Exemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n`
ABC += AB.resultado.map((v, index) => `*1.* Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join('\n–\n')
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'imdbinfo':
if(!q.includes("m.imdb.com")) return reply("Coloque o link do filme que você deseja puxar informações.")
try {
RST = await fetchJson(`https://yurimodz-apis.xyz/api/search/imdb_info?url=${q}&apikey=${SANDRO_MD_BOT}`)
ABC = `• 𝐈𝐌𝐃𝐛 𝐈𝐍𝐅𝐎 - *( ${date} ${hora} )*\n–\n• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Trama/Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Números de certificados: *${RST.resultado.certificado}*\n–\n• Avaliação total de usuários: *${RST.resultado.avaliacaoTotalUsers}*\n• Total de críticas: *${RST.resultado.criticaTotal}*\n–\n• Valor orçamentário: *$ ${RST.resultado.dinheiro.orcamento.valor}*\n• Valor bruto por países: *$ ${RST.resultado.dinheiro.brutoPaises.valor}*\n• Valor semanal: *$ ${RST.resultado.dinheiro.semana.valor}*\n• Valor bruto pelo mundo: *$ ${RST.resultado.dinheiro.brutoMundial.valor}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `     • Nome: ${v.nome} - ( ${v.categoria} )\n     • Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `     • ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'movie2':
if(!q) return reply("Coloque o nome do filme que você deseja puxar informações.")
try {
AB = await fetchJson(`https://yurimodz-apis.xyz/api/search/imdb?query=${q}&apikey=${SANDRO_MD_BOT}`)
RST = await fetchJson(`https://yurimodz-apis.xyz/api/search/imdb_info?url=${AB.resultado[0].url}&apikey=${SANDRO_MD_BOT}`)
ABC = `• 𝐈𝐌𝐃𝐛 𝐈𝐍𝐅𝐎 - *( ${date} ${hora} )*\n–\n• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Trama/Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Números de certificados: *${RST.resultado.certificado}*\n–\n• Avaliação total de usuários: *${RST.resultado.avaliacaoTotalUsers}*\n• Total de críticas: *${RST.resultado.criticaTotal}*\n–\n• Valor orçamentário: *$ ${RST.resultado.dinheiro.orcamento.valor}*\n• Valor bruto por países: *$ ${RST.resultado.dinheiro.brutoPaises.valor}*\n• Valor semanal: *$ ${RST.resultado.dinheiro.semana.valor}*\n• Valor bruto pelo mundo: *$ ${RST.resultado.dinheiro.brutoMundial.valor}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `     • Nome: ${v.nome} - ( ${v.categoria} )\n     • Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `     • ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'sanime': case 'animetv':
if(!q) return reply("Você não digitou nenhuma palavra ao lado do comando.")
try {
RST = await fetchJson(`https://yurimodz-apis.xyz/api/animetv_search?query=${q}&apikey=${SANDRO_MD_BOT}`)
ABC = `${RST.resultado.map(v => `• Título: *${v.title}* | *${v.type}*\n• Foto: *${v.thumb}*\n• Link: *${v.url}*`).join('\n–\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'frases': case 'pensador':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Amor`);
AB = await fetchJson(`https://yurimodz-apis.xyz/search/pensador?query=${q}&apikey=${SANDRO_MD_BOT}`)
ABC = ""
ABC += `${AB.resultado.map(v => `“${v.frase}”`).join('\n–\n')}`
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'negativo':
if(!q) return reply("Você esqueceu de colocar o nome do aplicativo após o comando.")
data = await fetch()
break;

case 'megadl':
if (!q.includes("mega.nz")) return reply(`Você esqueceu de colocar um link do *mega.nz* após o comando.`);
try {
const { File } = require("megajs");
const fileListINFO = File.fromURL(q);
await fileListINFO.loadAttributes(); // Rodar a função para executar o resultado.
if (fileListINFO.size >= 300000000) return reply(`😿 Infelizmente, não foi possível concluir a ação, *pois o tamanho do arquivo excede o limite máximo de 300MB.*`);
function formatSize(bytes){if(bytes >= 1073741824) {bytes = (bytes / 1073741824).toFixed(2) + " GB"} else if (bytes >= 1048576) {bytes = (bytes / 1048576).toFixed(2) + " MB"} else if(bytes >= 1024) {bytes = (bytes / 1024).toFixed(2) + " KB"} else if(bytes > 1) {bytes = bytes + " bytes"} else if(bytes == 1) {bytes = bytes + " byte"} else {bytes = "0 bytes"} return bytes};
sandro.sendMessage(from, {text: `🤖💫 Por favor, aguarde alguns minutos! O arquivo está sendo baixado!\n• Arquivo: *${fileListINFO.name}* - [${formatSize(fileListINFO.size)}]`, contextInfo: {forwardingScore: 1000000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel}}}, {quoted: info});
const dataFileBuffer = await fileListINFO.downloadBuffer();
// Adicionadas extensões suportadas (zip, rar, 7z, jpg, png, zip) à lista.
if (/mp4/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: fileListINFO.name, mimetype: "video/mp4", fileName: `Download Completo! Obrigado por esperar *${pushname}*...`}, {quoted: selo});
} else if (/mp3|mpeg/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: fileListINFO.name, mimetype: "audio/mpeg", fileName: `Download Completo! Obrigado por esperar *${pushname}*...`}, {quoted: selo});
} else if (/pdf/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo: *100%* - ${fileListINFO.name}`, mimetype: "application/pdf", fileName: fileListINFO.name}, {quoted: selo});
} else if (/txt/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "text/plain", fileName: fileListINFO.name}, {quoted: selo});
} else if (/zip/.test(fileListINFO.name)) {
await sandro.sendMessage(from, { document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/zip", fileName: fileListINFO.name}, {quoted: selo});
} else if (/rar/.test(fileListINFO.name)) {
await sandro.sendMessage(from, { document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/x-rar-compressed", fileName: fileListINFO.name }, {quoted: selo});
} else if (/7z/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/x-7z-compressed", fileName: `${fileListINFO.name}` }, {quoted: selo});
} else if (/jpg|jpeg/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "image/jpeg", fileName: fileListINFO.name}, {quoted: selo});
} else if (/png/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "image/png", fileName: fileListINFO.name}, {quoted: selo});
} else if (/apk/.test(fileListINFO.name)) {
await sandro.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: "application/vnd.android.package-archive", fileName: fileListINFO.name}, {quoted: selo});
} else {
return reply('- Desculpe-me, ocorreu um erro ao encaminhar o arquivo!😿 O formato de arquivo apresentado não é suportado.');
}
} catch (error) {
  return console.log(`Error: ${error.message}`);
}
break;

case 'dicionario': 
if (!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} [palavra]*`)
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/dicionario?q=${q}&apikey=${SANDRO_MD_BOT}`)
reply(`${ABC.significado}`).catch(e => {
reply(mess.error());
})
break;

case 'encurtar2':
  try {
    if (!args[0]) return reply("❌ Por favor, envie um link para encurtar.\n\nExemplo: /encurtar https://exemplo.com");

    const url = args[0];
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
    const data = await res.json();

    if (data.ok) {
      const encurtado = data.result.full_short_link;
      reply(`✅ *Link encurtado com sucesso:*\n🔗 ${encurtado}`);
    } else {
      reply("❌ Ocorreu um erro ao encurtar o link. Verifique se o link está correto.");
    }

  } catch (e) {
    console.error("Erro no comando 'encurtar':", e);
    reply("❌ Ocorreu um erro ao tentar encurtar o link.");
  }
  break;

case 'encurtar':
case 'tinyurl':
  try {
    if (!args[0]) return reply("❌ Por favor, envie um link para encurtar.\n\nExemplo: /encurtar https://exemplo.com");

    const urlOriginal = args[0];

    const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlOriginal)}`);
    const urlEncurtado = await res.text();

    if (!urlEncurtado.startsWith("http")) {
      return reply("❌ Erro ao encurtar o link. Verifique se o link é válido.");
    }

    reply(`✅ *Link encurtado com sucesso!*\n\n🔗 ${urlEncurtado}`);

  } catch (e) {
    console.error("Erro no comando 'encurtar':", e);
    reply("❌ Ocorreu um erro ao tentar encurtar o link.");
  }
  break;

case 'biografia':
case 'bio':
try {
status = (await sandro.fetchStatus(sender_ou_n)).status
} catch {
status = "🔒 Privada 🔒"
}
reply(status)
break

case 'encurtarlink3': 
case 'bitly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/sandrobot.wpp`)
anu = await axios.get(`https://yurimodz-apis.xyz/api/linkshort/bitly?link=${q}&apikey=${SANDRO_MD_BOT}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(e => {
reply(mess.error())
})
break

case 'bitcoin':
case 'btc':
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd');
    const data = await res.json();

    const precoBRL = data.bitcoin.brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const precoUSD = data.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    const mensagem = `💰 *Cotação Atual do Bitcoin (BTC)*\n\n` +
                     `🇧🇷 Real (BRL): *${precoBRL}*\n` +
                     `🇺🇸 Dólar (USD): *${precoUSD}*\n\n` +
                     `_Fonte: CoinGecko_`;

    reply(mensagem);
  } catch (e) {
    console.error("Erro ao buscar valor do Bitcoin:", e);
    reply("❌ Ocorreu um erro ao buscar o valor do Bitcoin.");
  }
  break;

case 'jogo': 
case 'jogos': 
case 'game': 
case 'games': 
// @Darkzy7
if (!q) return reply(`Você esqueceu de colocar o nome do jogo após o comando.`)
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await reply("Sem resultados para sua pesquisa, tente novamente mais tarde...");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
sandro.sendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: info})
}
break;

case 'celular':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply("[❗] aguarde uns minutinho estou processado");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info_celular?celular=${q}&apikey=${API_SANDRO_MD}`);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply("Erro...");
}
break;

case 'threads':
if(!q.includes("threads.net")) return reply("Por favor, adicione um link válido do threads. (foto ou vídeo)");
try {
data = await fetchJson(`https://yurimodz-apis.xyz/api/dl/threads?url=${q}&apikey=${SANDRO_MD_BOT}`);
for (let i = 0; i < data.resultado.image_urls.length; i++) {
photos = await fetch(data.resultado.image_urls[i]).then(v => v.buffer())
sandro.sendMessage(from, {image: photos})
}
} finally {
for (let i = 0; i < data.resultado.video_urls.length; i++) {
videoUrl = await fetch(data.resultado.video_urls[i].download_url).then(v => v.buffer())
sandro.sendMessage(from, {video: videoUrl})
}
}
break

case 'spotify': {
if(!q.trim().includes("spotify")) return reply(`Cadê a url do spotiy? exemplo: ${prefix+command} https://open.spotify.com/intl-pt/track/4m3mrHuttXhK58f6Tenai1\nNão baixo playlist, quiser pegar o link da música, acessa o site: https://open.spotify.com/search e pesquisa lá.`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
try {
sandro.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/spotify?url=${q.trim()}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(() => reply("Erro!"))
} catch (e) {
console.log(e);
return reply("Erro...");
}
}
break;
       
case 'reagir':
const reactionMessage = {
react: {
text: "🥰",
key: info.key
}
}
sendMsg = await sandro.sendMessage(from, reactionMessage)
break

case "ytsearch":
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\npublicado`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`Erro....`)
}
break

case 'googlesearch': case 'pesquisa': case 'pesquisar':
if(!q) return reply("Pergunte algo e eu retornarei alguns resultados de pesquisas...")
try {
ABC = await fetchJson(`${zerosite}/api/googlesrc?query=${encodeURI(q)}&apikey=${API_KEY_ZEROTWO}`)
rr = ABC.result.length
txt = `\`\`\`Fo${rr > 1 ? "ram" : "i"} encontrado${rr > 1 ? "s" : ""} ${rr} resultado${rr > 1 ? "s" : ""} para a sua pesquisa\`\`\` 🔎`
for(i of ABC.result) {
txt += `\n• *Título:* ${i.title}\n• *Link:* ${i.originalUrl}\n`
}
reply(txt)
} catch {
reply("Erro ao obter detalhes da pesquisa")
}
break

case 'pesquisa_yt': case 'ytsearch':
case 'pesquisa':
try {
if(!q.trim()) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`Erro....`)
}
break;

case 'playdoc':
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
await carregamento()
await sleep(3000)
if(!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `
> Titulo: ${data[0]?.titulo||N_E}
> Tempo: ${data[0]?.tempo||N_E}
> Postado: ${data[0]?.postado||N_E}
> Descrição: ${data[0]?.desc||N_E}`
sandro.sendMessage(from, {image: {url: data[0]?.thumb || logoslink.logo}, caption: bla}, {quoted: info})
sandro.sendMessage(from, {document: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg", fileName: data[0]?.titulo || "play.mp3"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply(`Deu erro na api Aguarde ela voltar caso nao voltar em 5 minutos reporte ao criador com ${prefix}bug erro no (nome do comando)`);
}
break;

case 'ytmp4': 
if(!q) return reply(`Cada o link do video para eu baixar?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
sandro.sendMessage(from, {video: {url: (`https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_SANDRO_MD}`)}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
})
break

case 'console':   
if(!SoDono) return reply(Res_SoDono)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- O comando de tirar o console foi ativado _- COM SUCESSO - _ Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi Desativado  _- COM SUCESSO - _ Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break;

/*case 'play99':
reply(`erro mn`)
if(!q) return reply(mess.syntaxDownloadMusic());
try {
data = await fetchJson(`http://br1.bronxyshost.com:4360/youtube/play?query=${q}&apikey=${SANDRO_MD}`);
sandro.sendInteractiveIMG('./database/data/media/images/play-thumb.jpg', from, mess.playResult(data), "© sandro Supremacy", {participant: sender, quotedMessage: info.message}, {buttons: [{name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: "「 💙 」𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎「 💙 」", id: `${prefix}ytdoc ${data.resultado[0].url}`})}, {name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: "「 💙 」𝐀𝐔𝐃𝐈𝐎「 💙 」", id: `${prefix}ytmp3 ${data.resultado[0].url}`})}, {name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: "「 💙 」𝐕𝐈𝐃𝐄𝐎「 💙 」", id: `${prefix}ytmp4 ${data.resultado[0].url}`})}]});
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break*/

case 'soundcloud':
if(!q.trim().includes("soundcloud")) return reply("Cadê o link do soundcloud?")
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
try {
sandro.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/soundcloud?url=${q.trim()}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg"}, {quoted: info})
} catch (e) {
console.log(e)
reply("Erro...")
}
break;

case 'play4': {
  try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
    if (!q.trim()) {
      return reply(`- Exemplo: ${prefix}play4 nome da música`);
    }

    // Busca informações da música na API
    const ABC = await fetchJson(`${zerosite}/api/ytsrc?q=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`)
    const data = ABC.resultado[0];

    if (!data) {
      return reply("Música não encontrada.");
    }

    const titulo = data.title || "Não encontrado";
    const tempo = data.timestamp || "indefinido";
    const canal = data.author?.name || "indefinido";
    const postado = data.ago || "indefinido";
    const descricao = data.description || "indefinida";

    const bla = `> ╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
> ╠═⪩⟨💙𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╝

> Ola: ${pushname}
> ╭──〔 *${NomeDoBot}* 〕──╮
> Titulo: ${titulo}
> Tempo: ${tempo}
> Canal: ${canal}
> Postado: ${postado}
> Descrição: ${descricao}
> Bot: ${NomeDoBot}
> ╰───〘 @${sender.split("@")[0]} 〙

> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`;

    // Envia a thumbnail da música
    await sandro.sendMessage(from, {
      image: { url: data.thumbnail },
      caption: bla
    }, { quoted: info });

    // Envia o áudio
    await sandro.sendMessage(from, {
      audio: {
        url: `${zerosite}/api/dl/ytaudio?url=${encodeURIComponent(data.url)}&apikey=${API_KEY_ZEROTWO}`
      },
      mimetype: "audio/mpeg",
      fileName: `${titulo}.mp3`
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no play4:", e);
    return reply(`Erro ao executar o comando. Se persistir, reporte com ${prefix}bug play4`);
  }
}
break;

case 'playmix':
case 'pm': {
  try {
  reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
    reagir(from, "🎵")

    if (!q.trim()) {
      return reply(`${prefix + command} link ou nome`);
    }

    const url = `${zerosite}/api/ytsrc?q=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const ABC = await fetchJson(url);

    if (!ABC.resultado || !Array.isArray(ABC.resultado) || ABC.resultado.length === 0) {
      return reply("Nenhum resultado encontrado.");
    }

    const maxResults = Math.min(5, ABC.resultado.length);

    let bla = `
༒W̷E̷L̷C̷O̷M̷E̷༒     ♬
⏤͟͟͞͞ ꦿ@${sender.split('@')[0]}      ♪  
`.trim();

    for (let i = 0; i < maxResults; i++) {
      const music = ABC.resultado[i];
      bla += `

🎙️⃤ Título: ${music.title || "indefinido"}
⏰⃤ Tempo: ${music.timestamp || "indefinido"}
📹⃤ Postado: ${music.ago || "indefinido"}
`;
    }

    bla += `

ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`;

    await sandro.sendMessage(from, {
      image: { url: ABC.resultado[0].thumbnail },
      caption: bla,
      mentions: [sender]
    }, { quoted: info });

    // Envia áudios direto da nova API
    for (let m = 0; m < maxResults; m++) {
      const musicUrl = encodeURIComponent(ABC.resultado[m].url);
      const audioApiUrl = `${zerosite}/api/dl/ytaudio2?url=${musicUrl}&apikey=${API_KEY_ZEROTWO}`;

      await sleep(1000);
      await sandro.sendMessage(from, {
        audio: { url: audioApiUrl },
        mimetype: "audio/mpeg",
        fileName: `${ABC.resultado[m].title}.mp3`
      }, { quoted: info });
    }

  } catch (e) {
    console.error("Erro no comando playmix:", e);
    return reply(downoff);
  }
}
break;

case 'play3':
case 'play': {
try {
  if (!q.trim()) {
    return sandro.sendMessage(from, {
      audio: { url: './arquivos/audio/playerro.mp3' },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: info });
  }
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `> ╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
> ╠═⪩⟨💙𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞♡♡∞:｡.｡💙｡.｡:∞♡♡:∞♡╝

> Ola: ${pushname}
> ╭──〔 ${NomeDoBot} 〕──╮
> Titulo: ${data[0]?.titulo||N_E}
> Tempo: ${data[0]?.tempo||N_E}
> Postado: ${data[0]?.postado||N_E}
> Descrição: ${data[0]?.desc||N_E}
> ╰───〘 @${sender.split("@")[0]} 〙

> © ${NomeDoBot}

> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`
sandro.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info})
sandro.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg", fileName: data[0]?.titulo || "play.mp3"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
}
}
break;

case "letra": case "liryc": case "letram": case "letramusic": case "letramusica": {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Cansei de me apegar`)
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
const abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/letra_musica?letra=${q.trim()}&apikey=${API_SANDRO_MD}`)
reply(` - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply("Erro...")
}
}
break;

case 'facebook':
case 'fb':
case 'face':
    try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
        if (!q) return reply("Envie o link do vídeo do Facebook. Ex: /face https://www.facebook.com/...");
        if (!q.includes("facebook.com")) return reply("Link inválido. Envie um link válido do Facebook.");

        const videoUrl = `https://api.nexfuture.com.br/api/downloads/facebook/mp4?url=${encodeURIComponent(q)}`;

        await sandro.sendMessage(from, {
            video: { url: videoUrl },
            caption: "✅ Vídeo baixado do Facebook com sucesso!"
        }, { quoted: info });

    } catch (e) {
        console.log("Erro ao baixar vídeo do Facebook:", e.message);
        reply("Erro ao tentar baixar o vídeo. Tente novamente mais tarde.");
    }
    break;

/*
case 'p22':
if(!q) return reply(mess.syntaxDownloadMusic());
try {
data = await fetchJson(`https://yurimodz-apis.xyz/api/ytsrc/videos?q=${q}&apikey=${SANDRO_MD_BOT}`);
Lrows = []
for(let v of data.resultado) {
Lrows.push({title: v.title, description: `${v.description}`, id: `${prefix}play ${v.title}`, header: `Tipo: Áudio > Canal: ${v.author.name} | Duração: ${v.duration.timestamp}`}, {title: v.title, description: v.description, id: `${prefix}playvid ${v.title}`, header: `Tipo: Vídeo > Canal: ${v.author.name} | Duração: ${v.duration.timestamp}`})
};
await sandro.relayMessage(from, {interactiveMessage: {body: {text: `⸺͟͞ꪶ𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐏𝐋𝐀𝐘 𝐕𝟐ꫂ ♪`}, footer: {text: `${tempo}, ${pushname}! Aqui está o resultado da sua pesquisa, selecione a música a qual você deseja baixar.`}, contextInfo: {participant: sender, quotedMessage: info.message}, nativeFlowMessage: {buttons: [{name: "single_select", buttonParamsJson: JSON.stringify({title: "SELECIONAR", sections: [{title: NomeDoBot, highlight_label: "", rows: Lrows}]})}]}}}, {});
} catch(error) {
return await reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break
*/


case 'ytmp3':
if(!q) return reply(`Cadê o link do vídeo para eu baixar no formato de áudio?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
sandro.sendMessage(from, {audio: {url: (`https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`)}, mimetype: "audio/mpeg"}).catch(err => {
return reply(mess.error())
})
break

case 'ytdoc':
if(!q) return reply(`Por favor, insira um link de um *vídeo do YouTube* após o comando.\n   • Exemplo: *${prefix+command} https://youtube.com/watch?v=JXGpTLg7qoQ*`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
sandro.sendMessage(from, {document: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`}, fileName: '.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
reply(`Alguma coisa deu errado...`)
})
break


case 'ytaudio': 
case 'ytvideo': 
case 'ytdoc1':
if(!q) return reply("Você esqueceu de adicionar um link de um vídeo, após o comando.")
reply(enviar.espere)
if(cmd == "ytmp3" || cmd == "ytaudio") {
try {
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/ytaudio?url=${q}&apikey=${SANDRO_MD_BOT}`}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
} else if(cmd == "ytmp4" || cmd == "ytvideo") {
try {
sandro.sendMessage(from, {video: {url: `https://yurimodz-apis.xyz/api/dl/ytvideo?url=${q}&apikey=${SANDRO_MD_BOT}`}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
} else if(cmd == "ytdoc") {
try {
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/ytaudio?url=${q}&apikey=${SANDRO_MD_BOT}`}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
}
break

case 'audiomeme': 
case 'playmeme':
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
reagir(from, "😸")
try {
bla = await fetchJson(`https://yurimodz-apis.xyz/api/audiomeme?query=${q}&apikey=${SANDRO_MD_BOT}`)
teks = pickRandom(bla.resultado)
sandro.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: selo})
} catch(e) {
reagir(from, "😿")
reply("Sem Resultados.");
}
break;

case 'audiomeme2': 
case 'playmeme2':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
reagir(from, "😸")
try {
bla = await fetchJson(`https://yurimodz-apis.xyz/api/audiomeme?query=${q}&apikey=${SANDRO_MD_BOT}`)
teks = pickRandom(bla.resultado)
sandro.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: selo})
} catch(e) {
reagir(from, "😿")
reply("Sem Resultados.");
}
break;

case 'ringtone': 
case 'meloboom': 
case 'toque':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} iPhone*`);
setTimeout(() => {reagir(from, "🫨")}, 100)
try {
bla = await fetchJson(`https://yurimodz-apis.xyz/api/ringtone?query=${q}&apikey=${SANDRO_MD_BOT}`)
teks = pickRandom(bla.resultado.resultado);
mention(`Olá @${sender.split("@")[0]}, o toque está intitulado como: *${teks.titulo}*.\n• Deseja mais? É só pedir, que eu tô enviando! Você manda e eu obedeço.`)
sandro.sendMessage(from, {audio: {url: teks.audio}, mimetype: "audio/mpeg", ptt:true})
} catch(e) {
return reply(mess.error())
}
break;

case 'imgpraanime': 
case 'animeia': 
case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
data = await fetchJson(`https://yurimodz-apis.xyz/api/ia/toanime?link=${link}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: {url: data.resultado.imagem}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'hack': reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 50));
break;

case 'ler': 
case 'ocr': 
case 'lerfoto':  
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
data = await fetchJson(`https://yurimodz-apis.xyz/api/leitura/ocr?image=${link}&apikey=${SANDRO_MD_BOT}`)
reply(data.resultado).catch(e => {
return reply(mess.error())
})
} else {
reply("Mencione uma imagem, por favor!")
}
break

case 'nofap'://By: MisheruModz 
const datazinha = moment.tz('America/Sao_Paulo')
const MisheruModzNofap = datazinha.format('MM')
const NahidaSupremacyNofap = datazinha.date()
if (MisheruModzNofap !== '09') {
nahida.sendMessage(from, {text: `Não estamos no mês de setembro que é o mês da nofap, mas isso não significa que vc deve ir ver coisas 18+!!`},{quoted:info})
}//By: MisheruModz
const antipunheta = moment('01/09/24', 'DD/MM/YY')
const partiuvencer = NahidaSupremacyNofap - antipunheta.date() + 1
let patente = `Soldado 🇺🇦`
if (partiuvencer >= 30) patente = `Monge ♾️`
else if (partiuvencer === 29) patente = `Rei 👑`
else if (partiuvencer === 28) patente = `General de Exército ⭐⭐⭐⭐⭐`
else if (partiuvencer === 27) patente = `Coronel ⭐`
else if (partiuvencer === 26) patente = `Major 🏅🏅🏅🏅🏅`
else if (partiuvencer === 25) patente = `Capitão 🏅🏅🏅`
else if (partiuvencer === 24) patente = `Primeiro Tenente 🏅🏅`
else if (partiuvencer >= 21 && partiuvencer <= 23) patente = `Segundo Tenente 🏅`
else if (partiuvencer >= 16 && partiuvencer <= 20) patente = `Aspirante a Oficial ⚜️⚜️`
else if (partiuvencer >= 14 && partiuvencer <= 15) patente = `Subtenente ⚜️`
else if (partiuvencer >= 11 && partiuvencer <= 13) patente = `Primeiro Sargento 🥇`
else if (partiuvencer >= 6 && partiuvencer <= 10) patente = `Segundo Sargento 🥈`
else if (partiuvencer >= 3 && partiuvencer <= 5) patente = `Terceiro Sargento 🥉`
else if (partiuvencer === 2) patente = `Cabo 🎗️`
sandro.sendMessage(from, {text: `*_Se você não se masturbou e nem acessou conteúdo 18+ desde 1 de setembro, sua patente agora é:_* \n\n *Patente:* *${patente}*`},{quoted: info})
break

case 'deezer':
if(!q) return reply(`Exemplo: ${prefix+command} Ela não é santa`)
musicFind = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`)).data;
if (musicFind.length == 0) return reply(mess.noresult())
sandro.sendMessage(from, { text: mess.deezerMusic(musicFind.data[0], prefix)})
sandro.sendMessage(from, {audio: {url: musicFind.data[0].preview}, mimetype: 'audio/mpeg'}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
break

case 'movie':
if (args.length == 0) return await reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
sandro.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}, {quoted: selo})
.catch(e => {
return reply(mess.error())
})
break

case 'fakechat': 
case 'fakemsg':
if(!isGroup) return reply(enviar.msg.grupo);
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
sandro.sendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
reply(`Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria enviar e que você responderia a seguinte mensagem, todos usando a *|* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix+command} @vitima|msg1|msg2`);
}
break;

case 'spoiler': 
case 'morechat':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break;

case 'obesidade': 
case 'obeso': // @Crap </>
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
const resultado = obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await sandro.sendMessage(from, {react: {text: `😸`, key: info.key}})
reply(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`)
} else if (resultado <= 18.5 || resultado <= 24.9) {
await sandro.sendMessage(from, {react: {text: `👍`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`)
} else if (resultado <= 25 || resultado <= 29.9) {
await sandro.sendMessage(from, {react: {text: `🫤`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`);
} else if (resultado <= 30 || resultado <= 39.9) {
await sandro.sendMessage(from, {react: {text: `🤨`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade.`);
} else if (resultado > 40) {
await sandro.sendMessage(from, {react: {text: `😵`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`);
}
break;

case 'contardias': 
case 'countdays': 
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
const tempo = timeDate('DD/MM/YYYY')
countDay = countDays(q.split("/"), tempo.split("/"))
reply(`*${countDay}* dia(s).`)
} catch(e) {
return reply(mess.error())
}
break;

case 'serie':
if (args.length == 0) return await reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)
sandro.sendMessage(from, {image: fotoSerie, caption: mess.series(serieInfo)}, {quoted: selo})
.catch(e => {
return reply(mess.error())
})
break

case 'soundcloud': case 'scdl':
if(!q) return reply(`Tá faltando aí! Cadê o link da música no SoundCloud hein?`)
data = await fetchJson(`https://yurimodz-apis.xyz/api/soundcloud?url=${q}&apikey=${SANDRO_MD_BOT}`) 
tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${data.resultado.link_dl}`)
sandro.sendMessage(from, {image: {url: data.resultado.capa}, caption: mess.soundcloud(data, tinyUrl)}, {quoted: selo})
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/scdl?url=${q}&apikey=${SANDRO_MD_BOT}` }, mimetype: 'audio/mpeg'}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
break

case 'tiktok3': {
  try {
    if (!q.trim()) return reply(`Use: ${prefix + command} nome de usuário`);

    const username = encodeURIComponent(q.trim());
    const url = `${zerosite}/download/tiktoksearch?username=${username}&apikey=${API_KEY_ZEROTWO}`;
    const response = await fetch(url);
    const res = await response.json();

    if (!res.resultado || !res.resultado.no_watermark) {
      return reply("Não foi possível obter o vídeo. Verifique o nome de usuário.");
    }

    const video = res.resultado;

    const caption = `*Título:* ${video.title}
*Sem Marca d'água:* ${video.no_watermark ? 'Sim' : 'Não'}
`.trim();

    // Envia a capa
    await sandro.sendMessage(from, {
      image: { url: video.cover },
      caption: caption
    }, { quoted: info });

    // Delay de 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Envia o vídeo sem marca d'água
    await sandro.sendMessage(from, {
      video: { url: video.no_watermark },
      caption: `Vídeo de ${NomeDoBot}`,
      mimetype: 'video/mp4'
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando tiktok3:", e);
    return reply("Erro ao buscar o vídeo. Tente novamente mais tarde.");
  }
}
break;

case 'tiktok2': {
        if (!args[0]) {
          await sandro.sendMessage(from, { text: 'Por favor, envie o link do TikTok.\nExemplo: /tiktok https://vm.tiktok.com/xxxxx/' }, { quoted: selo });
          return;
        }

        const link = args[0];
        const apiUrl = `${zerosite}/api/download/tiktok/v2?url=${encodeURIComponent(link)}&apikey=${API_KEY_ZEROTWO}`;

        try {
          const fetch = require('node-fetch');
          const res = await fetch(apiUrl);
          const json = await res.json();

          if (!json.status || !json.resultado?.video) {
            await sandro.sendMessage(from, { text: 'Não foi possível baixar o vídeo. Verifique o link e tente novamente.' }, { quoted: selo });
            return;
          }

          const legenda = `*Usuário:* ${json.resultado.author.nickname}\n*Descrição:* ${json.resultado.desc}\n*Curtidas:* ${json.resultado.statistics.likeCount}
*CRIADOR*: SANDRO`;

          await sandro.sendMessage(from, {
            video: { url: json.resultado.video },
            caption: legenda
          }, { quoted: selo });
        } catch (e) {
          console.error(e);
          await sandro.sendMessage(from, { text: 'Erro ao processar o vídeo. Tente novamente mais tarde.' }, { quoted: selo });
        }
      }
      break;

/*
case 'tiktok':
case 'tiktokvideo':
  try {
    if (!q.includes("tiktok")) return reply(`❌ Use o comando assim: *${prefix + command} link_do_tiktok*`);

    reply(`⏳ Buscando o vídeo, aguarde...`);

    const axios = require('axios');
    const apiUrl = `${zerosite}/api/download/tiktok/v4?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;

    const { data } = await axios.get(apiUrl);

    if (!data.status || !data.resultado?.video?.playAddr?.[0]) {
      return reply("❌ Não foi possível obter o vídeo. Verifique o link ou tente novamente.");
    }

    const videoUrl = data.resultado.video.playAddr[0];
    const descricao = data.resultado.detalhes?.descrição || '';
    const autor = data.resultado.detalhes?.autor || '';

    await sandro.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: "video/mp4",
      caption: `🎬 Vídeo de *${autor}*\n📝 ${descricao}`
    }, { quoted: info });

  } catch (e) {
    console.log("Erro ao baixar vídeo do TikTok:", e);
    reply("❌ Erro ao buscar o vídeo. Tente novamente mais tarde.");
  }
  break;*/
  
case 'tiktok':
case 'tiktok_video':
try {
if(!q) return reply(`⚠️informe o link do TikTok`);
reagir(from, '😘')
reply(`Baixando o vídeo, aguarde um pouquinho...`)
if(!q.includes("tiktok")) return reply(`⚠️informe somente link do TikTok`);
const searchtk = await fetchJson(zerosite+`/api/download/tiktok?url=${q}&apikey=`+API_KEY_ZEROTWO)
const ABC = searchtk.resultado
const hasil = `> ╭──〔 ${NomeDoBot} 〕──╮
> ┆『🌸』 DESCRIÇÃO: ${ABC.desc}
> ┆『⏱️』 DURAÇÃO: ${ABC.video.duration}
> ┆『💬』 COMENTÁRIOS: ${ABC.statistics.commentCount}
> ┆『💙』 LIKES: ${ABC.statistics.likeCount}
> ┆『🔁』 COMPARTILHAMENTOS: ${ABC.statistics.shareCount}
> ┆『▶️』 PLAY: ${ABC.statistics.playCount}
> ┆『📥』 DOWNLOADS: ${ABC.statistics.downloadCount}
> ┆『👤』 USUÁRIO: ${ABC.author.username}
> ┆『💖』 NOME: ${ABC.author.nickname}
> ┆  ↻ ⊲ Ⅱ ⊳ ↺
> ╰───〘 @${sender.split("@")[0]} 〙
`
await sandro.sendMessage(from, {video: {url: ABC.video.playAddr[0]}, caption: hasil, mimetype: "video/mp4"}, {quoted: selo})
await sandro.sendMessage(from, {audio: {url: ABC.music.playUrl[0]}, mimetype: "audio/mpeg", ptt: true}, {quoted: selo})
} catch (error) {
console.log(error)
return reply(`Deu um pequeno erro ao baixar o vídeo!`)
}
break

case 'tiktok_audio':
case 'tiktokaudio':
try {
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
sandro.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
console.log(e)
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply("Erro...");
}
break;

case 'kwai': {
if(!q.trim().includes("kwai")) return reply(`Exemplo: ${prefix+command} LINK DO KWAI`);
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
try {
sandro.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/kwai?url=${q.trim()}&apikey=${API_SANDRO_MD}`}, mimetype: "video/mp4"}, {quoted: info})
} catch (e) {
console.log(e);
return reply("Erro...");
}
}
break;

case 'spotify': {
if(!q.trim().includes("spotify")) return reply(`Cadê a url do spotiy? exemplo: ${prefix+command} https://open.spotify.com/intl-pt/track/4m3mrHuttXhK58f6Tenai1\nNão baixo playlist, quiser pegar o link da música, acessa o site: https://open.spotify.com/search e pesquisa lá.`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
try {
sandro.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/spotify?url=${q.trim()}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg"}, {quoted: info}).catch(() => reply("Erro!"))
} catch (e) {
console.log(e);
return reply("Erro...");
}
}
break;

case 'tiktokimg': case 'tiktokimage':
await carregamento()
await sleep(3000)
if(!q) return reply('Por favor, adicione um link do tiktok (imagens).')
reagir(from, "😉")
try {
data = await fetchJson(`https://yurimodz-apis.xyz/download/tiktok?url=${q}&apikey=${SANDRO_MD_BOT}`) 
if(data.resultado.photo.length === 0) return reply(`Ocorreu um erro ao abrir o link, por favor tente novamente mais tarde.`)
audioDl = await getBuffer(data.resultado.audio)
sandro.sendMessage(from, {audio: audioDl, mimetype: 'audio/mpeg'}, {quoted: selo})
for (let i = 0; i < data.resultado.photo.length; i++) {
photos = await fetch(data.resultado.photo[i].url).then(v => v.buffer())
sandro.sendMessage(from, {image: photos})
} 
} catch(e) {
reagir(from, "❌️")
reply(mess.error()+`\n–\n*Erro:* Isso não é uma sequência de fotos, para baixar vídeos use: *${prefix}tiktok*`)
}
break

case 'capcut': case 'capcutmodel':
if(!q) return reply('Por favor, adicione um link de um modelo do CapCut.')
reagir(from, "😼")
try {
data = await fetchJson(`https://yurimodz-apis.xyz/api/dl/capcut?url=${q}&apikey=${SANDRO_MD_BOT}`) 
c = await getBuffer(data.resultado.videoOriginal)
sandro.sendMessage(from, {video: c, caption: `• *${data.resultado.title} | ${data.resultado.fullUse}*\n• *Desc:* ${data.resultado.description}`}, {quoted: selo})
} catch(e) {
reply(mess.error())
}
break

//━━COMANDOS +18━━━

case 'ass': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const ass = await getBuffer(`http://br1.bronxyshost.com:4360/nsfw/ahegao?apikey=${SANDRO_MD}`);
sandro.sendMessage(sender, {image: ass}, {quoted: info});
break;

case 'bdsm': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const bdsm = await getBuffer(`http://br1.bronxyshost.com:4360/nsfw/ahegao?apikey=${SANDRO_MD}`);
sandro.sendMessage(sender, {image: bdsm}, {quoted: info});
break;

case 'cuckold': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const cuckold = await getBuffer(`http://br1.bronxyshost.com:4360/nsfw/ahegao?apikey=${SANDRO_MD}`);
sandro.sendMessage(sender, {image: cuckold}, {quoted: info});
break;

case 'blowjob': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const blowjob = await getBuffer(`http://br1.bronxyshost.com:4360/nsfw/ahegao?apikey=${SANDRO_MD}`);
sandro.sendMessage(sender, {image: blowjob}, {quoted: info});
break;

case 'cum': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const cum = await getBuffer(`http://br1.bronxyshost.com:4360/nsfw/cum?apikey=${SANDRO_MD}`);
sandro.sendMessage(sender, {image: cum}, {quoted: info});
break;

case 'insta_audio': case 'instaaudio':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}&apikey=${API_SANDRO_MD}`)
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
let DM_T = ABC.msg[0].type
var A_T = DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "audio/mpeg"
sandro.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'multidl': case 'pocbi':
if(q.length < 5) return reply('Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)');
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await MultiDownload(q)
for (let i = 0; i < data.medias.length; i++) {
let dmt = data.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
sandro.sendMessage(from, {[mimety.split("/")[0]]: {url: data.medias[i].url}, mimetype: mimety}, {quoted: info})
}
} catch(e) {
return reply(mess.error())
}
break

case 'igstory':
case 'instastorys':
case 'instastory':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja baixar os storys?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.\n     • Este comando só baixa storys, *para baixar reels ou entre outras variedades*, use: *${prefix}igdl [link do post/reels]*`);
await reagir(from, "😸");
try {
reply(`Buscando stories do usuário: *${q}*, aguarde o retorno...`)
data = await fetchJson(`https://yurimodz-apis.xyz/api/dl/igstory?usuario=${q.replace("@", "")}&apikey=${SANDRO_MD_BOT}`)
for (let i = 0; i < data.resultado.length; i++) {
let dmt = data.resultado[i].extension
mimety = dmt === ".mp4" ? "video/mp4" : dmt === ".webp" ? "image/webp" : dmt === ".jpg" ? "image/jpeg" : dmt === ".mp3" ? "audio/mpeg" : "video/mp4"
sandro.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado[i].url}, mimetype: mimety}, {quoted: info})
}
} catch (e) {
return reply(mess.error())
}
break

case 'twitter_video': case 'twittervideo':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
sandro.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'twitter_audio': case 'twitteraudio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
sandro.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'igstalk': case 'instastalk': case 'igsh':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
reagir(from, "😸")
reply(`Buscando informações sobre o usuário: *${q}* no Instagram.`)
data = await fetchJson(`https://yurimodz-apis.xyz/api/igstalk?usuario=${q.replace("@", "")}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {text: mess.igstalk(data), contextInfo: {externalAdReply: {title: "Dê um clique aqui e visualize o perfil stalkeado.", thumbnail: await getBuffer(data.resultado.profile_photo), mediaType: 1, sourceUrl: "http://instagram.com/"+data.resultado.username}}}) 
} catch(e) {
return console.log(e)
}
break

case 'instaaudio': case 'igaudio':
if(q.length < 5) return reply('Por favor, forneça o link de um *reels/video* do Instagram.')
reply(enviar.espere)
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await fetchJson(`https://yurimodz-apis.xyz/api/instagram?url=${q}&apikey=${SANDRO_MD_BOT}`) 
audioInsta = await fetch(data.resultado[0]).then(v => v.buffer())
sandro.sendMessage(from, {audio: audioInsta, mimetype: 'audio/mpeg'}, {quoted: selo})
} catch(e) {
reply(mess.error())
}
break

case 'igreels': case 'instareels':
if (!q) return reply('Por favor, forneça o link do vídeo de um *reels do Instagram*.');
reply(enviar.espere);
try {
setTimeout(() => {reagir(from, "😸")}, 100)
result = await fetchJson(`https://yurimodz-apis.xyz/api/instareels?url=${q}&apikey=${SANDRO_MD_BOT}`);
sandro.sendMessage(from, {video: {url: result.url}}, {quoted: selo})
} catch(e) {
reply(mess.error())
}
break;

case 'mediafire2':
if(!isVip) return reply(enviar.msg.vip)
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${API_URL}/api/dl/mediafire?url=${q}&apikey=${SANDRO_MD_BOT}`)
reply(`📂 *Nome:* ${ABC.resultado.filename}\n🧮 *Tamanho:* ${ABC.resultado.size}\n_Criado em ${ABC.resultado.uploadDate}_`)
sandro.sendMessage(from, {document: {url: ABC.resultado.url}, mimetype: "application/"+ABC.resultado.filetype, fileName: ABC.resultado.filename}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break

case 'mediafire': {
  try {
    if (!q || !q.includes("mediafire.com")) {
      return reply(`❌ Envie o link do Mediafire corretamente.\n\nExemplo:\n${prefix}sandromediafire https://www.mediafire.com/file/xxxx`);
    }

    await sandro.sendMessage(from, { text: '⏳ Baixando arquivo, aguarde...' }, { quoted: info });

    const res = await fetch(`https://api.vreden.my.id/api/mediafiredl?url=${encodeURIComponent(q)}`);
    const json = await res.json();

    if (!json.status || !json.result || !json.result[0]?.link) {
      return reply("❌ Erro ao processar o link. Verifique se o link do Mediafire está correto.");
    }

    const file = json.result[0];
    const { nama, size, mime, link } = file;

    await sandro.sendMessage(from, {
      document: { url: link },
      fileName: nama,
      mimetype: 'application/octet-stream',
      caption: `✅ *Arquivo Baixado com Sucesso!*\n\n📄 Nome: ${nama}\n📦 Tamanho: ${size}\n🧩 Tipo: ${mime}\n\n🔗 Link: ${q}`
    }, { quoted: info });

  } catch (err) {
    console.error("Erro no comando mediafire:", err);
    reply("❌ Erro ao baixar o arquivo. Tente novamente mais tarde.");
  }
}
break;


case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("Faltando o link do google drive para download do arquivo, cade?");
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/dl/gdrive?url=${q}&apikey=${SANDRO_MD_BOT}`)
reply("Aguarde, estou encaminhando o arquivo. Pode demorar até *2min* para enviar!")
sandro.sendMessage(from, {document: {url: ABC.resultado.downloadUrl}, mimetype: ABC.resultado.mimetype, fileName: ABC.resultado.fileName}).catch(e => {
return reply(mess.error())  
})
break;

case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!args[0]) reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
reply(enviar.espere)
if (!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
sandro.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: selo }).catch(e => {
return reply(mess.error())  
})
break

case 'editanime':
if(!q) return reply(mess.exeAnimeEdit(prefix))
if (args[0] === 'random') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=aleatorios&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'bleach') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=bleach&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'chainsaw') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=chainsaw&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kimetsu') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=demon_slayer&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'dragonball') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=dragonball&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'jujutsu') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=jujutsu_kaisen&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'naruto') {
reply(enviar.aguarde)
sandro.sendMessage(from, {video: {url:`https://yurimodz-apis.xyz/api/editsvideo?categoria=naruto&apikey=${SANDRO_MD_BOT}`}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
}
break

case 'animesimg': 
case 'animeimg': 
case 'animeimage':
if(!q) return reply(mess.exeAnimeImage(prefix))
if (args[0] === 'cosplay') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/cosplay?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'waifu') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/waifu?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'loli') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/loli?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shota') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shota?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'yotsuba') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/yotsuba?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shinomiya') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shinomiya?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'yumeko') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/yumeko?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'tejina') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/tejina?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'chiho') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/chiho?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'boruto') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/boruto?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kaori') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kaori?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shizuka') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shizuka?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kaga') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kaga?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kotori') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kotori?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'mikasa') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/mikasa?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'akiyama') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/akiyama?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'gremory') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/gremory?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'izuku') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/izuku?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shina') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shina?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kagura') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kagura?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shinka') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shinka?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'eba') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/eba?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'yuri') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/yuri?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'erza') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/erza?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'elaina') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/elaina?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'hinata') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/hinata?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'naruto') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/naruto?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'minato') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/minato?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'sagari') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/sagari?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'nezuko') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/nezuko?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'rize') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/rize?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'anna') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/anna?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'deidara') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/deidara?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'asuna') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/asuna?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'ayuzawa') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/ayuzawa?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'emilia') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/emilia?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'chitoge') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/chitoge?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'hestia') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/hestia?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'inori') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/inori?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'itachi') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/itachi?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'madara') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/madara?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'sakura') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/sakura?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'sasuke') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/sasuke?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'tsunade') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/tsunade?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'onepiece') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/onepiece?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'mobil') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/mobil?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'montor') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/montor?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'keneki') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/keneki?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'megumin') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/megumin?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'toukachan') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/toukachan?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
}
break

case 'bc': 
case 'bcgroup': 
case 'transmitir': 
case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde? Exemplo : ${prefix + command} Hasta la vista baby`)
let getGroups = await sandro.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「TRANSMISSÃO DO BOT」\n\n ${q}`
sandro.sendMessage(anu[i], {text: txt})
}
reply(`Enviado com sucesso...`)
}
break

case "transcrever": {
if((isMedia && !info.message.imageMessage && info.message.videoMessage || isQuotedVideo || isQuotedAudio)) {
reply("Aguarde.. transcrevendo seu áudio..")
muk = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage

let base64String = await getFileBuffer(muk, isQuotedAudio ? 'audio': 'video');
let buffer = Buffer.from(base64String, 'base64');

let formData = new FormData();
formData.append('file', buffer, {filename: isQuotedAudio ? 'audiofile': 'videofile', contentType: muk.mimetype });

fetch(`https://api.bronxyshost.com.br/transcrever?apikey=${API_SANDRO_MD}`, {
method: 'POST',
body: formData
}).then(response => response.json())
.then(data => {
reply(data.texto);
}).catch((Err) => {
console.log(Err);
reply("Sinto muito, alguns formatos de áudio/vídeo, eu não consigo transcrever, em caso de dúvidas, tente novamente...");
});
} else {
return reply("Marque um audio ou um vídeo.")
}
}
break;

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sandro.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

                    case 'loli33':
            {
              json = JSON.parse(fs.readFileSync('./arquivos/loli.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              sandro.sendMessage(from, templateMassage)
            }
            break

case 'aqua33':
    // Lê o arquivo aqua.json
    const aquaData = fs.readFileSync('./arquivos/aqua.json');
    const aquaImages = JSON.parse(aquaData);
reply('olha o pv 😏')
    // Seleciona uma imagem aleatória
    const imageLoli = aquaImages[Math.floor(Math.random() * aquaImages.length)];
    
    // Texto personalizado com nome diferente
    const textoPersonalizadoLoli = `
Fonte: *${NomeDoBot}*
Coleção: SANDRO-MD Oficial 
Curtidas: ${Math.floor(Math.random() * 1000)}
Categoria: 😈`;

    // Envia a imagem com a legenda
    await sandro.sendMessage(sender, {
        image: { url: imageLoli },
        caption: textoPersonalizadoLoli,
        footer: `${NomeDoBot}`,
        contextInfo: { participant: sender, quotedMessage: info.message }
    });
    break;
      
case 'porno33':
const vids22 = fs.readFileSync('./arquivos/sexv.json')
const videos101 = JSON.parse(vids22);
const video101 = videos101[Math.floor(Math.random() * videos101.length)];
const votos = Math.floor(Math.random() * 1000);
const textoPersonalizado = `
Fonte: Instagram 
Coleção: SANDRO-MD Oficial 
Curtidas: ${votos}
Vategoria: 😈`;
const video = await prepareWAMessageMedia({ video: { url: video101, gifPlayback: true } }, { upload: sandro.waUploadToServer });

sandro.relayMessage(
sender,
{
interactiveMessage: {
header: {
hasMediaAttachment: true,
videoMessage: { ...video.videoMessage, gifPlayback: true }
},
headerType: 'VIDEO',
body: { text: textoPersonalizado },
footer: { text: `${NomeDoBot}` },
contextInfo: { participant: sender, quotedMessage: info.message },
nativeFlowMessage: {
buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "PRÓXIMA",
id: `${prefix+command}`,
disabled: false
}),
}
],
messageParamsJson: "",
},
},
},
{}
);
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
reply('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {									
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo + channel.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo + channel já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo + channel.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado/promovido a adm e também quando ouver fixação/desafixação de mensagem do(s) adminstrador(es).')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento ou fixação/desafixação de mensagem do(s) adminstrador(es).')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('O recurso de revelar visu única já está ativado.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de revelar visu única neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O recurso de revelar visu única já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de revelar visu única neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('️Desativou com sucesso o recurso de delete nos grupos.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


            
case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake neste grupo já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antifake neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('O recurso de antifake neste grupo já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antifake neste grupo!')
} else {
reply('1 para ativar, 0 para desativar.')
}
break;

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a mais adicionado neste grupo.")
reply(`Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`)
break

case 'figaleatoria':
reply("Estou gerando sua figurinha, aguarde um pouco amigo(a)...")
try {
bla = await getBuffer(`https://yurimodz-apis.xyz/api/stickera?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {sticker: bla}, {quoted: selo})
} catch(e) {
reply(mess.error())
}
break

case 'add_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': 
case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'ephemeral': 
case 'msgtemp':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
getInfoG = await sandro.groupMetadata(from); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
reply(`As mensagens temporárias no grupo foram ativadas com sucesso.`)
await sandro.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
reply(`As mensagens temporárias no grupo foram desativadas com sucesso.`)
await sandro.sendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'changegroup': 
case 'config_gp': 
case 'config-group': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await sandro.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await sandro.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await sandro.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Já está desativado.')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  case 'bemvindo': case 'bemvindo1':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
dirInfoCmd = "./settings/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./settings/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'legendabv':  
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)
  if (args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
  
  let legendaTeks = body.slice(11).trim()  // <<< Nome exclusivo da variável aqui

  if (isWelkom2) {
    dataGp[0].wellcome[1].legendabv = legendaTeks
    setGp(dataGp)
    reply('*Mensagem de boas-vindas definida com sucesso!*')
  } else {
    reply(`Ative o ${prefix}bemvindo2 1`)
  }
  break

case 'legendasaiu':
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    if (q.length < 1) return reply('Escreva a mensagem de saída ou para desativar, use: 0')

    if (isWelkom2) {
        dataGp[0].wellcome[1].legendasaiu = Number(q) === 0 ? 0 : q
        setGp(dataGp)
        reply('Mensagem de saída definida com sucesso!')
    } else {
        reply(`Ative o ${prefix}bemvindo 1 para o recurso de edição de mensagem.`)
    }
    break;

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'playvid':
case 'playvideo':
case 'playmp4':  case "play_video": {
try {
  if (!q.trim()) {
    return sandro.sendMessage(from, {
      audio: { url: './arquivos/audio/playvideoerro.mp3' },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: info });
  }
reply(`💙 *Buscando por ${q} Aguarde...* 💙`)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
if(data[0]?.tempo?.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
var N_E = " Não encontrado."
var bla = `> ╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
> ╠═⪩⟨💙𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞♡♡∞:｡.｡💙｡.｡:∞♡♡:∞♡╝

> ╔♡∞*♡♡∞:｡.｡💙｡.｡:∞♡*♡:∞♡╗
> Titulo: ${data[0]?.titulo||N_E}
> Tempo: ${data[0]?.tempo||N_E}
> Postado: ${data[0]?.postado||N_E}
> Descrição: ${data[0]?.desc||N_E}
> Dono: Sandro bot
> ╚♡∞♡♡∞:｡.｡💙｡.｡:∞♡♡:∞♡╝`
sandro.sendMessage(from, {image: {url: data[0]?.thumb || logoslink?.logo}, caption: bla}, {quoted: info})
sandro.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "video/mp4", fileName: data[0]?.titulo || "play.mp4"}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} catch (e) {
console.log(e)
return reply(`Deu erro na api Aguarde ela voltar caso nao voltar em 5 minutos reporte ao criador com ${prefix}bug erro no (nome do comando)`);
}
}
break;

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
tekksi = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
tekksi += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
tekksi += '*Esses ai vou descer meu martelo do ban.*'
reply(tekksi)
break

case 'mute':
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    if (!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
    if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja mutar.')

    mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid

    let teksss = '' // <-- Correção aqui: inicialização antes do uso

    if (isMuted) {
        var ind = GroupsMutedActived.indexOf(from)
        for (let _ of mentioned) {
            teksss += `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.\n`
            muted[ind].numbers.push(_)
        }
        fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
        teksss += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
        mentions(teksss, [mentioned, sender], true)
    } else {
        const data = {
            jid: from,
            numbers: mentioned
        }
        muted.push(data)
        fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
        for (let _ of mentioned) {
            teksss += `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.\n`
        }
        teksss += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
        mentions(teksss, [mentioned, sender], true)
    }
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja desmutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
tekssss = `Olá usuário *@${_.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
tekssss += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(tekssss, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
tekssss = `Olá usuário @${_.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
tekssss += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(tekssss, [mentioned, sender], true)
}
break

case 'roletarussa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("Não existe *membros comuns* no grupo, somente admins.")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)		
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
setTimeout(() => { 
mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true) 
}, 5000)	 
setTimeout(() => {
sandro.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'createimg': case 'texttoimage': case 'imagine':
if(!q) return reply(`O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix+command} macaco dirigindo uma bmw`);
try {
await replyWithReaction('Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...', {react: {text: '🎨', key: info.key}});
dataResultAI = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${q}`);
  await sandro.sendMessage(from, {image: {url: dataResultAI.url}}, {quoted: info});
} catch(error) {
await replyWithReaction(mess.error(), {react: {text: '❌', key: info.key}});
}
break


case 'pergunta2':
case 'openai2':
case 'gpt2':
case 'chatgpt2':
case 'pergunta': case 'openai': case 'gpt': case 'chatgpt':
    try {
        if (!q) return reply("Por favor, envie a pergunta após o comando.");
        reply("Aguarde, estou pensando sobre sua pergunta...");
        let res = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=kamu%20adalah%20ai%20yang%20ceria&content=${encodeURIComponent(q)}`);
        reply(`( ${res.data} )`);
    } catch (e) {
        reply("Erro ao buscar resposta. Tente novamente mais tarde.");
    }
    break;

/*case 'pergunta': case 'openai': case 'gpt': case 'chatgpt':
try {
reply("Aguarde, criando / pesquisando sobre o que esta perguntando ou pedindo.");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/PERGUNTE_E_EU_RESPONDO?q=${q.trim()}&apikey=${API_SANDRO_MD}`)
reply(`( ${ABC.msg} )`)
} catch { 
reply("Erro..")
}
break;*/

/*
case 'photoleap': 
try {
if (!q) return reply("O que você deseja criar através de seu questionamento?")
reply("Criando uma imagem a partir de seu questionamento, aguarde...");
data = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${q}`)
sandro.sendMessage(from, {image: {url: data.data}}, {quoted: selo}).catch(() => {
return reply(mess.error())
})
} catch {
reply(mess.error())
}
break
*/
case 'dinextenso': // Invertexto-API com 3.000 requisições mensais, fique atento! [📍]
if(!q.includes(".")) return reply(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(e) {
reply(mess.error())
}
break;

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("Digite um CPF para realizar a verificação se é válido ou inválido...")
if(q.length < 11) return reply("Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(e) {
reply(mess.error())
}
} else if(command === "validarcnpj") {
if(!q) return reply("Digite um CNPJ para realizar a verificação se é válido ou inválido!")
if(q.length < 14) return reply("Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(e) {
reply(mess.error())
}
}
break;

case 'pergunta': 
case 'openai': 
case 'gpt': 
case 'chatgpt10':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await sandro.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${q}`)
await sandro.sendMessage(from, {text: anu1.result, edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break

case 'totext':
try {
if (!isQuotedAudio) return reply(`*_Por favor, mencione um áudio para realizar a transcrição do áudio._*`)
if (info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply(`*_Só realizo a transcrição de áudio de até "2MB", envie um arquivo menor._*`)
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
reply(`_Por favor, aguarde._`)
fs.writeFileSync(`./armor/src/totext-${sender}.mp3`, getBufferAudio)
let client = new AssemblyAI({apiKey: "2bdbb9a9046a4a938677122e7cf2dbd2"}) 
const dataTxt = await client.transcripts.create({audio_url: `./armor/src/totext-${sender}.mp3`, language_code: "pt"})
if (dataTxt.words.length == 0) return reply(`*_Não foi possível transcrever seu áudio. Por favor, tente com outro._*`)
sandro.sendMessage(from, {text: `> ${dataTxt.text}`}, {quoted: info});
fs.unlinkSync(`./armor/src/totext-${sender}.mp3`)
} catch(e) {
console.log(e)
}
break
/*
case 'bard':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await sandro.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
r = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gbard?query=${q}&apikey=${SANDRO_MD_BOT}`)
await sandro.sendMessage(from, {text: mess.respostaBard(r), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break
*/
case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break
/*
case 'gptvoz':
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
reply(`Estou processando sua pergunta. Isso pode levar alguns segundos...`)
nznk = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gpt?query=${q}&apikey=${SANDRO_MD_BOT}`)
const gpts = require('./arquivos/funcoes/gtts')('pt')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nznk.resultado}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
sandro.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: selo})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break
*/
case 'corretor':
if(!q) return reply(`Parece que você esqueceu de adicionar sua frase, *use-o de forma correta*, siga o exemplo:\n— ${prefix+command} `+"```Eu te mamo```")
try {
let { key } = await sandro.sendMessage(from, {text: `Verificando os erros ortográficos em seu texto ou palavra... *Aguarde!*`}, {quoted: info})
promptUser = `Corrija gramaticalmente uma frase para o português brasileiro tradicional: ${q}`
anu1 = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gpt?query=${promptUser}&apikey=${SANDRO_MD_BOT}`)
await sandro.sendMessage(from, {text: mess.corretorOrtografico(anu1), edit: key});
} catch(e) {
return reply(mess.error())
}
break

case 'redacao':
if(!q) return reply(`Você esqueceu de colocar o tema de sua redação ao lado do comando.`)
try {
let { key } = await sandro.sendMessage(from, {text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await sandro.sendMessage(from, {text: mess.respostaRedacao(anu1), edit: key});
} catch(e) {
return reply(mess.error())
}
break
/*
case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await sandro.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gpt?query=${promptUser}&apikey=${SANDRO_MD_BOT}`)
await sandro.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(e) {
return reply(mess.error())
}
break
*/
case 'nasa':
try {
if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
dataSab = await fetchJson(`https://yurimodz-apis.xyz/api/nasaphoto?data=${q}&apikey=${SANDRO_MD_BOT}`)
resultExp = await fetchJson(`https://yurimodz-apis.xyz/api/info/translate?texto=${dataSab.nasa.explanation}&ling=pt&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: {url: dataSab.nasa.hdurl }, caption: mess.result_APOD(dataSab, resultExp)})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error());
}
break;

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
sandro.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}).catch(e => {
reply(mess.error())
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'cotacao': {
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
reply(mess.quoteCurrencies(resposta));
}).catch((response) => {
reply("Erro ao obter informações!️");
});
}
break;

case 'clima2':
  try {
    if (!q) return reply("Digite o nome da cidade. Ex: /clima São Paulo");

    const response = await fetch(`https://wttr.in/${encodeURIComponent(q)}?format=3`);
    const clima = await response.text();

    reply(`☁️ *Previsão do Tempo:*\n${clima}`);
  } catch (e) {
    console.error("Erro no comando clima:", e);
    reply("❌ Não consegui obter o clima. Verifique o nome da cidade e tente novamente.");
  }
  break;

case 'clima':
case 'tempo':
  try {
    if (args.length < 1) return reply(`*Sintaxe correta para uso:* ${prefix + command} cidade\n• Caso tenha algum acento, retire ok?`);
    
    cidade = body.slice(7);
    clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=548b8266f19038cfd1f6d6f007d8bc58&units=metric&lang=pt_br`);
    
    if (clima.error) return reply(clima.error);
    
    hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    jr = `╭━『⛈️ 𝐓𝐄𝐌𝐏𝐎/𝐂𝐋𝐈𝐌𝐀 ⌛』━╮
│ೋ❀🌡️ 𝘈𝘨𝘰𝘳𝘢⧽ ${clima.data.main.temp}ºC
│ೋ❀🏙️ 𝘊𝘪𝘥𝘢𝘥𝘦⧽ ${clima.data.name}
│ೋ❀🔺 𝘛𝘦𝘮𝘱. 𝘔𝘢́𝘹𝘪𝘮𝘢⧽ ${clima.data.main.temp_max}°C
│ೋ❀🔻 𝘛𝘦𝘮𝘱. 𝘔𝘪́𝘯𝘪𝘮𝘢⧽ ${clima.data.main.temp_min}°C
│ೋ❀🌦️ 𝘊𝘭𝘪𝘮𝘢⧽ ${clima.data.weather[0].description}
│ೋ❀💧 𝘜𝘮𝘪𝘥𝘢𝘥𝘦 𝘥𝘰 𝘈𝘳⧽ ${clima.data.main.humidity}%
│ೋ❀🌬️ 𝘝𝘦𝘯𝘵𝘰𝘴⧽ ${clima.data.wind.speed}  
╰━━━━━━━━━━〔 ${hora1} 〕`;

    // Caminho da imagem local (substitua pelo caminho correto)
    const imagemPath = './settings/fotobot.jpg';
    const imagemBuffer = fs.readFileSync(imagemPath);

    // Envia a mensagem com a imagem
    await sandro.sendMessage(from, { image: imagemBuffer, caption: jr }, { quoted: info });

  } catch (e) {
    console.log("Erro no comando 'clima':", e);
  }
  break;

case 'jeff': case 'simi':
setTimeout(() => {reagir(from, "🤓")}, 300)
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if(!q) return reply(`Pergunte algo junto ao comando...`)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto figurinhas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto figurinhas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autorepo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto resposta neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto resposta neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo brincadeira já está ativo.')
dataGp[0].jogos = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo brincadeira já está desativado.')
dataGp[0].jogos = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//esse comando foi alterado por conta de bugs☑️
case 'rename':
case 'roubar':
const { Sticker } = require('./armor/sticker/sticker.js');
if(!isQuotedSticker) return await reply(`Responda um *STICKER* com *${prefix+command}* pack/autor`);
try {
let [pack, autor] = q.split('/');
if(!pack || !autor) return await reply(`Responda um *STICKER* com *${prefix+command}* pack/autor`)
zzbuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
const _sticker = new Sticker()
_sticker.addFile(zzbuffer); 
_sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await _sticker.start();
await sandro.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
await fs.unlinkSync(resultadoSt[0].value)
} catch(e) {
console.log(e)
await reply(`erro`);
}
break


case 'leveling':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Ative pressione 1, desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('O recurso de nível já estava ativo antes nesse grupo.')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('Adicionar parâmetro 1 ou 0.')
}
break

case 'listafake':
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!SoDono) return reply(enviar.msg.donosmt)

    let teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 📋\n\n'
    let men = []
    for (let mem of groupMembers) {
        if (!mem.id.startsWith('55')) { // Se não for número brasileiro
            teks += `➤ @${mem.id.split('@')[0]}\n`
            men.push(mem.id)
        }
    }

    if (men.length === 0) {
        teks += '❌ Nenhum Fake Detectado.'
    }

    try {
        // Buscar a foto do perfil do grupo
        let ppUrl = await sandro.profilePictureUrl(from, 'image').catch(_ => 'https://telegra.ph/file/3fa54e2b3bb9c1e6b61c5.jpg') // Foto padrão se der erro

        // Enviar a foto com o texto (mesmo se não tiver fakes)
        await sandro.sendMessage(from, {
            image: { url: ppUrl },
            caption: teks,
            mentions: men
        })
    } catch (err) {
        console.log(err)
        reply('❌ Ocorreu um erro ao buscar a foto do grupo.')
    }

    break

case 'sairtinder':
case 'rmtinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(command == 'rmtinder') {
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 
  if(!q && !menc_os2) return reply("Retorne após o comando o número ou @ do usuário que você quer deletar do tinder")
  deletar = identArroba(q)
} else { deletar = sender }
try {
ABC = await fetchJson(`${blacksite}/tinder/delete?usu=${deletar}&apikey=`+API_KEY_BLACK)
reply(resptinder(ABC.message))
} catch { reply("Erro") }
break

case 'tinder':
reagir(from, "🔥")
if(!isGroup) return reply(enviar.msg.grupo)
try {
ABC = await fetchJson(`${blacksite}/tinder/find?usu=${sender}&apikey=`+API_KEY_BLACK)
data = await fetchJson(`${blacksite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BLACK)
txt = `
ㅤㅤㅤ🔥 𝒃𝒍𝒂𝒄𝒌 𝒕𝒊𝒏𝒅𝒆𝒓 🔥
╔══════════════════╣
╟ ❪😍ฺ࣭࣪͘ꕸ▸ ɴᴏᴍᴇ: ${ABC.dados[0].nome}
║
╟ ❪😏ฺ࣭࣪͘ꕸ▸ ᴡʜᴀᴛꜱᴀᴩᴩ: wa.me/${ABC.dados[0].nmr}
║
╟ ❪🤫ฺ࣭࣪͘ꕸ▸ ɪᴅᴀᴅᴇ: ${ABC.dados[0].idade} anos
║
╟ ❪🤭ฺ࣭࣪͘ꕸ▸ ꜱᴇxᴜᴀʟɪᴅᴀᴅᴇ: ${ABC.dados[0].sexualidade}
║
╟ ❪🫣ฺ࣭࣪͘ꕸ▸ ɢêɴᴇʀᴏ: ${ABC.dados[0].gene}
║
╩ 𖥨ํ∘̥⃟⸽⃟💌৴▸ ʙɪᴏ: ${ABC.dados[0].bio}

_Exibindo perfil nº${ABC.dados[0].id} de ${ABC.dados[0].total} usuário${ABC.dados[0].total > 1 ? 's' : ''} registrado${ABC.dados[0].total > 1 ? 's' : ''}_
`
sandro.sendMessage(from, {image: {url: ABC.dados[0].foto}, caption: txt}, {quoted: info})
} catch { reply(resptinder(ABC.message || "Erro")) }
break

case 'vertinder': {
    // Carregar os dados do Tinder
    let profileData = {};
    try {
        profileData = loadTinderData();
    } catch (err) {
        return reply("Erro ao carregar os perfis. Tente novamente.");
    }

    // Verificar se existem perfis registrados
    if (Object.keys(profileData).length === 0) {
        return reply("Não há perfis registrados no Tinder ainda.");
    }

    // Definir a foto padrão para todos os perfis
    const fotoPadrao = "https://i.imgur.com/PQXQm7g.jpeg";

    // Preparar a resposta com todos os perfis
    let allProfiles = "Perfis registrados no Tinder:\n\n";
    for (let telefone in profileData) {
        const userProfile = profileData[telefone];
        allProfiles += `Nome: ${userProfile.nome}\nIdade: ${userProfile.idade}\nStatus: ${userProfile.status}\nBio: ${userProfile.bio}\nTelefone: ${userProfile.telefone}\n\n`;
    }

    // Enviar todos os perfis com a foto padrão, apenas uma vez
    try {
        sandro.sendMessage(from, {
            image: { url: fotoPadrao },
            caption: allProfiles
        }, { quoted: info });
    } catch (err) {
        return reply("Erro ao enviar os perfis. Tente novamente.");
    }
}
break;

case 'limpartinder': {
if(!SoDono) return reply(enviar.msg.donosmt)
    try {
        // Salvar um objeto vazio para limpar todos os dados
        saveTinderData({});
        return reply("Todos os perfis do Tinder foram apagados com sucesso.");
    } catch (err) {
        return reply("Erro ao tentar limpar os perfis. Tente novamente.");
    }
}
break;

case 'infotinder':
reply(`Para usar o Tinder de forma correta use o seguinte comando *Exemplo*

${prefix}tinder Sandro/19/namorando/Sou sandro md/5531848××××

Já que aprendeu se registrar agora para usar o tinder e começar a conversar ou até mesmo achar o amor da sua vida 💘 use 

${prefix}vertinder`)
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
    return sandro.sendMessage(from, {
      audio: { url: './arquivos/audio/bangp.mp3' },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: info });
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply(`Desativando funções e parando a execução de comandos do ${NomeDoBot}`)
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do ${NomeDoBot}`)
}
break

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`✓ Ativado com sucesso o modo nsfw +18 no grupo: *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`✓ Modo Nsfw +18 desativado com sucesso no grupo: *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`1/0, Exemplo: ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Exemplo: ${prefix + command} Rapariga`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo.️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
reply(mess.statusBot(isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reiniciar':
if(!SoDono) return reply(mess.onlyOwner())
console.log("Bot reiniciado manualmente pelo dono.");
reply(`💙 *Reiniciando ${NomeDoBot} aguarde* 💙`)
setTimeout(async() => {process.exit()}, 1200)
break

case 'novoqr':
if(!SoDono) return reply(enviar.msg.donosmt);
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;

//==========(Sticker-Stickers)===========\\

case 'emoji': case 'semoji':
if(!q) return reply(`*Exemplo:* ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){ idemot = 0 }
else if(jemot == 'google'){ idemot = 1 }
else if(jemot == 'samsung'){ idemot = 2 }
else if(jemot == 'microsoft'){ idemot = 3 }
else if(jemot == 'whatsapp'){ idemot = 4 }
else if(jemot == 'twitter'){ idemot = 5 }
else if(jemot == 'facebook'){ idemot = 6 }
else if(jemot == 'joypixels'){ idemot = 7 }
else if(jemot == 'openmoji'){ idemot = 8 }
else if(jemot == 'emojidex'){ idemot = 9 }
else if(jemot == 'lg'){ idemot = 10 }
else if(jemot == 'htc'){ idemot = 11 }
else if(!jemot){ idemot = 4 }
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
sendStickerFromUrl(from, emoji.images[idemot].url)
}).catch(e => {
reply("Emoji não encontrado.. Tente com outro emoji para ver está funcionando..")
})
break


case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n• [⛄] A melhor bot do WhatsApp!`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(sandro, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n• [⛄] A melhor bot do WhatsApp!`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(sandro, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'figurinha': case 's': case 'stickergifp': case 'figura': case 'f': case 'figu': case 'st': case 'stk': case 'fgif':
(async function () {
    try {
        var legenda = q ? q?.split("/")[0] : `╼⊳⊰ Solicitado Por:\n╼⊳⊰ Bot:\n╼⊳⊰ Dono:`;
        var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}\n${NomeDoBot}\n${NickDono}`;

        if (isMedia && info.message.imageMessage || isQuotedImage) {
            var encmedia = isQuotedImage 
                ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage 
                : info.message.imageMessage;

            if (!encmedia || !encmedia.mimetype) {
                reply("Erro: Não foi possível encontrar a mídia.");
                return;
            }

            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'image');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                if (err) {
                    reply("Erro ao converter a imagem.");
                    fs.unlinkSync(rane);
                    return;
                }
                fs.unlinkSync(rane);

                var json = {
                    "sticker-pack-name": legenda,
                    "sticker-pack-publisher": autor
                };
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                var nomemeta = `${Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)}.temp.exif`;
                fs.writeFileSync(`./${nomemeta}`, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    sandro.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else if (isMedia && info.message.videoMessage?.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage?.seconds < 11) {
            var encmedia = isQuotedVideo 
                ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage 
                : info.message.videoMessage;

            if (!encmedia || !encmedia.mimetype) {
                reply("Erro: Não foi possível encontrar a mídia.");
                return;
            }

            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'video');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                if (err) {
                    reply("Erro ao converter o vídeo.");
                    fs.unlinkSync(rane);
                    return;
                }
                fs.unlinkSync(rane);

                var json = {
                    "sticker-pack-name": legenda,
                    "sticker-pack-publisher": autor
                };
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                var nomemeta = `${Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)}.temp.exif`;
                fs.writeFileSync(`./${nomemeta}`, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    sandro.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else {
                return sandro.sendMessage(from, {
      audio: { url: './arquivos/audio/figuinfo.mp3' },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: info });
        }
    } catch (e) {
        console.log(e);
        reply("Hmm deu erro");
    }
})();
break;

case 'sperfil':
case 'figuperfil':
(async function () {
    try {
        const userJid = info.key.participant || sender;
        const profilePicUrl = await sandro.profilePictureUrl(userJid, 'image').catch(() => null);

        if (!profilePicUrl) {
            reply("❌ Não foi possível obter a foto de perfil.");
            return;
        }

        const buffer = await getBuffer(profilePicUrl);
        const tempImg = getRandom('.jpg');
        const tempWebp = getRandom('.webp');

        fs.writeFileSync(tempImg, buffer);

        exec(`ffmpeg -i ${tempImg} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${tempWebp}`, async (err) => {
            fs.unlinkSync(tempImg);
            if (err) {
                reply("❌ Erro ao converter a imagem em figurinha.");
                return;
            }

            await sandro.sendMessage(from, { sticker: fs.readFileSync(tempWebp) }, { quoted: info });
            fs.unlinkSync(tempWebp);
        });

    } catch (e) {
        console.error(e);
        reply("❌ Ocorreu um erro ao criar a figurinha da foto de perfil.");
    }
})();
break;

case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var packnameStk = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${NickDono}`
var authorSticker = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ CANAL♥️
𝙎𝘼𝙉𝘿𝙍𝙊 𝙈𝘿`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'image')
let ENC_MEDIA1 = await sendImageAsSticker(sandro, from, owgi, info, {packname: packnameStk, author: authorSticker})
await DLT_FL(ENC_MEDIA1)
} else if(boij2 && boij2?.seconds < 11) {
var packnameStk = `↧ ❪🤖ฺ࣭࣪͘ꕸ▸ 𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ↳ ${NomeDoBot}\n—\n↧ ❪🕵🏻‍♂️ฺ࣭࣪͘ꕸ▸ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ↳ ${NickDono}`
var authorSticker = `↧ ❪👤ฺ࣭࣪͘ꕸ▸ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ↳ ${pushname}\n—\n↧ ❪⛄ฺ࣭࣪͘ꕸ▸ 𝐕𝐢𝐬𝐢𝐭𝐞 𝐧𝐨𝐬𝐬𝐨 𝐬𝐢𝐭𝐞:\n• ↳ https://yurimodz-apis.xyz`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'video')
let ENC_MEDIA2 = await sendVideoAsSticker(sandro, from, owgi, info, {packname: packnameStk, author: authorSticker})
await DLT_FL(ENC_MEDIA2)
} else {
reply(`Envie uma imagem, vídeo ou gif com legenda: ${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'togif': 
if(!isQuotedSticker) return reply('Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif.');
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
const { FiguMp4OuGif } = require('./arquivos/funcoes/togif.js');
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./database/data/media/sticker/convert.webp", getBufferWebP);
outputFile = "./database/data/media/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await sandro.sendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: 'sticker-sb.gif'}, {quoted: info}).catch(async(error) => {
    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
    await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
    console.log(error)
});
}
} catch(error) {
    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
    console.log(error)
};
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sandro.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break

//=====================================\\

case 'metadinha':
reagir(from, "😍")
try {
ABC = await fetchJson(`${zerosite}/random/metadinha?apikey=${API_KEY_ZEROTWO}`);
sandro.sendMessage(from, {image: {url: ABC.masculina}, caption: `🙇🏻‍♂️ *HOMEM* 🙅🏻‍♂️`})
sandro.sendMessage(from, {image: {url: ABC.feminina}, caption: `🙆🏻‍♀️ *MULHER* 💁🏻‍♀️`})
} catch (e) {
return reply("Erro..")
}
break;

case 'comunismo':
case 'bolsonaro':
case 'bnw':
case 'beautiful':
case 'blur':
case 'affect':
case 'del':
case 'circle':
case 'dither':
case 'facepalm':
case 'invert':
case 'magik':
case 'rotate':
case 'rip':
case 'jail':
case 'trash':
case 'pixelate':
case 'sepia':
case 'wanted':
case 'wasted':
case 'lgbt':
case 'karaba':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
sandro.sendMessage(from, {image: {url:`https://yurimodz-apis.xyz/api/canvas/${command}?link=${link}&apikey=${SANDRO_MD_BOT}`}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_sandro)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break
//========(SORTEIO-VOTAR-CASES)=========\\
//
case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
sandro.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'},{quoted: selo})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./sandro.js', doc)
sandro.sendMessage(from, {text: "O arquivo './sandro.js' foi atualizado com sucesso."},{quoted: selo})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(enviar.msg.donosmt)
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./sandro.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break

case 'rvisu': 
case 'revelar':
case 'revelarvisu': 
case 'open':
try {
  reagir(from, "👁️")
  let msgCtx = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message?.viewOnceMessage?.message || info.message?.viewOnceMessageV2?.message || info.message?.viewOnceMessageV2Extension?.message

  if (!msgCtx) return reply("❗Mensagem não encontrada ou não é de visualização única.")

  // IMAGEM
  if (msgCtx.imageMessage) {
    let viewImage = msgCtx.imageMessage
    viewImage.viewOnce = false
    viewImage.image = { url: viewImage.url }
    viewImage.caption = (viewImage.caption || '') + "\n\n👁️ *REVELANDO ONE VISION* 👁️"
    sandro.sendMessage(from, viewImage, { quoted: info })

  // VÍDEO
  } else if (msgCtx.videoMessage) {
    let viewVideo = msgCtx.videoMessage
    viewVideo.viewOnce = false
    viewVideo.video = { url: viewVideo.url }
    viewVideo.caption = (viewVideo.caption || '') + "\n\n👁️ *REVELANDO ONE VISION* 👁️"
    sandro.sendMessage(from, viewVideo, { quoted: info })

  // ÁUDIO
  } else if (msgCtx.audioMessage) {
    let viewAudio = msgCtx.audioMessage
    viewAudio.viewOnce = false
    media = await getFileBuffer(viewAudio, 'audio')
    sandro.sendMessage(from, { audio: media, mimetype: 'audio/mp4', ptt: true }, { quoted: info })

  } else {
    reply("❌ Tipo de mídia não suportado ou não é uma mensagem de visualização única.")
  }

} catch (e) {
  console.log(e)
  reply("❌ Erro ao tentar revelar a mídia.")
}
break

case 'band':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'add':  //esse comando pode dar ban no seu número cuidado.
case 'unkick':
if(!SoDono) return reply(`Somente meu proprietário pode utilizar esse comando!`);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await sandro.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await sandro.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
sandro.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
sandro.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
sandro.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
sandro.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
sandro.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break

case 'ban': 
case 'banir': 
case 'kick': 
case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'ultplv':
case 'ultimas-palavras':{
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
reply("Elx tem 30s para falar suas últimas palavras!")
await delay(30000)
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi Removido (a) 👾`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
tekyy = `🎉 Meus parabéns ao vencedor do sorteio: ${q}\n-\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
tekyy += `• *Mencionando o vencedor:*  @${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
mentions(tekyy, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
tekyyuy =  `🎉 Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n-\n`
for(i = 0; i < 1; i++) {
tekyyuy += `• O número sorteado foi: ${numerossrt}`
d.push(numerossrt)
}
mentions(tekyyuy, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'ttp':
if (!q) return reply(`*_❕Coloque o texto que você quiser!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} sandro`)
reagir(from, "👻")
await sleep(1000)
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `http://br1.bronxyshost.com:4360/api/ttp?texto=${q}&apikey=${SANDRO_MD}`
sendStickerFromUrl(from, post, {quoted: info}).catch(e => {
reply(mess.error())  
})
break

case 'attptt6':
if(!q) return reply("Ei, Cadê o Texto?")
try {
reply(`*Gerando figu com a frase* _"${q.split("\n").join("_\n_")}"_`);
link = `${blacksite}/makerfig/rgb?fig=${command}&texto=${encodeURI(q)}&apikey=`+API_KEY_BLACK
sandro.sendMessage(from, {sticker: {url: link}}, {quoted: info})
} catch {
reply("Erro")
}
break

//==========(TTPS/ATTP)============\\
case 'attp': 
case 'attp1': 
case 'attp2': 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
case 'attp8': 
case 'attp9': 
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} sandro-md`);
reply(enviar.espere)
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
sandro.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_SANDRO_MD}`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'gerarnick':
case 'nick':
reply(`💙 *Buscando por ${q} Aguarde...* 💙`);
try {
nick = args.join(' ')
if(ANT_LTR_MD_EMJ(q)) return reply("Ao realizar a solicita��o de cria��o foi detectada letras modificadas ou emojis, ou seja, n�o se pode conter emojis e letras modificadas.");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas.\n*Exemplo:* ${prefix+command}LB Bot`);
axios.get(`http://br1.bronxyshost.com:4360/api/fazernick?nome=${q}&apikey=${SANDRO_MD}`)
.then(dados => {
var emoji = `〽️`
nicks = dados.data
txt = '] Nicks Gerados Com Sucesso! ]\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n
𝙎𝘼𝙉𝘿𝙍𝙊 𝙈𝘿`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Acho que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou nao foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao gerar as fontes modificadas!") 
}
}
break

case 'chance':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))  
var avb = body.slice(7)
if(args.length < 1) return sandro.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: selo})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)} é de... ${random}%`
sandro.sendMessage(from, {text: hasil, mentions: [sender]}, {quoted: selo})
break

case 'namorar': 
case 'pediremnamoro': 
// @Matheus
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!')
if(botNumber.includes(menc_os2)) return reply("Não é possível pedir o bot em namoro, seu baitola.🙄")
if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito ${pushname} 😕`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`Você já pediu para namorar com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Não brinque com os sentimentos dos outros! Se decida logo ou digite: ${prefix}cancelarpedido`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`Você já está namorando com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}...`)
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🌟🥳 Psiu *@${menc_os2.split('@')[0]}*! Você acaba de ser pedido em namoro por *@${sender.split('@')[0]}*.\nEai você aceita o pedido, *sim ou não?*`);
break

case 'cancelarpedido':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.")
C13 = namoro1.map(i => i.usu1).indexOf(sender)
C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")
if(namoro1[C13].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.")
namoro1.splice(C13, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
reply("Pedido de namoro cancelado com sucesso.")
break

case 'terminar_namoro':
// @Matheus
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
D1 = namoro1.map(i => i.usu1).indexOf(sender)
D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`)
namoro1[D2].namorados = false
reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`)
sandro.sendMessage(`${namoro1[D1].usu2}@s.whatsapp.net`, {text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`}, {quoted: info})
namoro1.splice(D2, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.splice(D1, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
break

case 'minhadupla': case 'dupla':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
reagir(from, "💙‍🩹")
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`)
txt = `@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro é fácil, use o comando: *${prefix}terminar_namoro*`
mention(txt)
break

case 'nazista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imgnazista}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 


case 'gay':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero...'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 41 ) {var bo = 'você é né?'} else if(boiola == 42 ) {var bo = 'você é né?'} else if(boiola == 43 ) {var bo = 'você é né?'} else if(boiola == 44 ) {var bo = 'você é né?'} else if(boiola == 45 ) {var bo = 'você é né?'} else if(boiola == 46 ) {var bo = 'você é né?'} else if(boiola == 47 ) {var bo = 'você é né?'} else if(boiola == 4 ) {var bo = 'você é né?'} else if(boiola == 49 ) {var bo = 'você é né?'} else if(boiola == 50 ) {var bo = 'você é ou não?'} else if(boiola > 51) {var bo = 'você é gay...'
}
sandro.sendMessage(from, {image: {url: imggay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
sandro.sendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imgcorno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break  

case 'vesgo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 


case 'gostosa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
sandro.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
sandro.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'morte': case 'death':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if (args.length == 0) return await reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
death = `@${sender.split('@')[0]} — Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos de idade.`;
sandro.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: selo})
break;				
				
case 'matar': case 'mata':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: selo})
break 

case 'beijo': case 'beijar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: selo})
break

case 'vab':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
psycatgames().then(async (array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(sandro, from, "Você prefere..", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
setTimeout(() => {reagir(from, "🙈")}, 100)
const pergunta_ = JSON.parse(fs.readFileSync('./arquivos/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(sandro, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
reagir(from, "⛪️")
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
sandro.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: selo, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

case 'cantadas': case 'cantada':  
reagir(from, "😼️")
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
sandro.sendMessage(from, {text: cantadasText}, {quoted: selo})
break

case 'fatos': case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
sandro.sendMessage(from, {text: fatosText}, {quoted: selo})
break

case 'teste':
await sandro.sendMessage(from, {
image: { url: fotobot,},
caption: `${NomeDoBot}`,});
break;

case 'mano':
case 'bro':
case 'brother':
case 'toque':
case 'tocar':
setTimeout(() => {reagir(from, "🤝🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um aperto de mão, a mensagem ou o @')
sandro.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
sandro.sendMessage(from, {video: {url: links.bro}, gifPlayback: true, caption: `*VOCÊ DEU UM APERTO DE MÃO NO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🤜🏽🤛🏽

${NomeDoBot} 🤝🏽`, mentions: [menc_os2]})
break

case 'tapa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um tapa, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: selo})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: selo})
break 

case 'dogolpe':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
sandro.sendMessage(from, {text: `🌟☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: selo})
break

case 'aleatorio':
reply(`Enviando...`)
const bdzdbsm = await getBuffer(`${zerosite}/api/wallpapers/random?apikey=${API_KEY_ZEROTWO}`);
sandro.sendMessage(from, {image: bdzdbsm}, {quoted: info});
break;

case 'aleatorio':
reply(`Enviando...`)
const bddbsm = await getBuffer(`${zerosite}/api/wallpapers/random?apikey=${API_KEY_ZEROTWO}`);
sandro.sendMessage(from, {image: bddbsm}, {quoted: info});
break;


case 'shipo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!menc_os2) return reply('Marque uma pessoa do grupo para encontrar o par dela.')
mention(`🌟 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'casal':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
mention(`🌟👩🏼‍💙‍💋‍👨🏻 - Sinto uma química muito forte entre *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}*, com uma chance de dar certo: *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'rankcornos':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
❯  ❒『 ${NomeDoBot} 』❒  ❮


║❯   〘 TOP MAIS CORNOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ CORNO: @${cornos1.id.split('@')[0]}  ❯ ${porcent} ❮
┠❯ ❒ CORNO: @${cornos2.id.split('@')[0]}  ❯ ${porcentag} ❮
┠❯ ❒ CORNO: @${cornos3.id.split('@')[0]}  ❯ ${porcl} ❮
┠❯ ❒ CORNO: @${cornos4.id.split('@')[0]}  ❯ ${porg} ❮
┠❯ ❒ CORNO: @${cornos5.id.split('@')[0]}  ❯ ${prg} ❮

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return reply(enviar.msg.adm)
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `🎖️ Rank Level - [Type: *Global*]\n–`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I 🌀"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II 🌀"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III 🌀"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV 🌀"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I 💎"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II 💎"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III 💎"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV 💎"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Paladino I 🔮"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Paladino II 🔮"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Paladino III 🔮"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Paladino IV 🔮"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Mestre I 💙‍🔥"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Mestre II 💙‍🔥"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Mestre III 💙‍🔥"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Mestre IV 💙‍🔥"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Mestre V 💙‍🔥"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I 👑"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II 👑"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III 👑"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV 👑"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V 👑"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Usuário Superior I 🎓"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Usuário Superior II 🎓"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I 🪄"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II 🪄"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III 🪄"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I ⚒️"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II ⚒️"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III ⚒️"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I 🛰️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II 🛰️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III 🛰️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I 🪩"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II 🪩"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III 🪩"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Supremacy X ⚜️"}; if(newlevel >= 10000000){var newpatente = "Veterano 🎩🏼‍♂️"}
tc += `\n*${i+1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`
}
}
reply(tc)
} else { 
reply(`Nenhum dado(s) foi retornado, tente novamente mais tarde️!`)
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(enviar.msg.adm)
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️‍"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II️‍"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️‍"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️‍"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X"
if(newlevel >= 10000000) newpatente = "Veterano"
// É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
if(newpatente == "Bronze I") {newcont = 100; newtt = 0}
if(newpatente == "Bronze II") {newcont = 200; newtt = 100}
if(newpatente == "Bronze III") {newcont = 300; newtt = 200}
if(newpatente == "Prata I") {newcont = 400; newtt = 300}
if(newpatente == "Prata II") {newcont = 500; newtt = 400}
if(newpatente == "Prata III") {newcont = 600; newtt = 500}
if(newpatente == "Ouro I") {newcont = 700; newtt = 600}
if(newpatente == "Ouro II") {newcont = 800; newtt = 700}
if(newpatente == "Ouro III") {newcont = 900; newtt = 800}
if(newpatente == "Ouro IV") {newcont = 1200; newtt = 900}
if(newpatente == "Platina I") {newcont = 1500; newtt = 1200}
if(newpatente == "Platina II") {newcont = 1800; newtt = 1500}
if(newpatente == "Platina III") {newcont = 2100; newtt = 1800}
if(newpatente == "Platina IV") {newcont = 2700; newtt = 2100}
if(newpatente == "Diamante I") {newcont = 3300; newtt = 2700}
if(newpatente == "Diamante II") {newcont = 3900; newtt = 3300}
if(newpatente == "Diamante III") {newcont = 4500; newtt = 3900}
if(newpatente == "Diamante IV") {newcont = 5000; newtt = 4500}
if(newpatente == "Paladino I") {newcont = 5500; newtt = 5000}
if(newpatente == "Paladino II") {newcont = 6500; newtt = 5500}
if(newpatente == "Paladino III") {newcont = 7500; newtt = 6500}
if(newpatente == "Paladino IV") {newcont = 9000; newtt = 7500}
if(newpatente == "Mestre I️‍") {newcont = 10500; newtt = 9000}
if(newpatente == "Mestre II") {newcont = 12000; newtt = 10500}
if(newpatente == "Mestre III️‍") {newcont = 13500; newtt = 12000}
if(newpatente == "Mestre IV️‍") {newcont = 15000; newtt = 13500}
if(newpatente == "Mestre V️‍") {newcont = 20000; newtt = 15000}
if(newpatente == "Desafiante I") {newcont = 25000; newtt = 20000}
if(newpatente == "Desafiante II") {newcont = 30000; newtt = 25000}
if(newpatente == "Desafiante III") {newcont = 35000; newtt = 30000}
if(newpatente == "Desafiante IV") {newcont = 40000; newtt = 35000}
if(newpatente == "Desafiante V") {newcont = 50000; newtt = 40000}
if(newpatente == "Usuário Superior I") {newcont = 60000; newtt = 50000}
if(newpatente == "Usuário Superior II") {newcont = 70000; newtt = 60000}
if(newpatente == "Mestre Supremo I") {newcont = 80000; newtt = 70000}
if(newpatente == "Mestre Supremo II") {newcont = 90000; newtt = 80000}
if(newpatente == "Mestre Supremo III") {newcont = 100000; newtt = 90000}
if(newpatente == "Conquistador I️") {newcont = 150000; newtt = 100000}
if(newpatente == "Conquistador II") {newcont = 200000; newtt = 150000}
if(newpatente == "Conquistador III️") {newcont = 300000; newtt = 200000}
if(newpatente == "Desbravador I️") {newcont = 400000; newtt = 300000}
if(newpatente == "Desbravador II️") {newcont = 500000; newtt = 400000}
if(newpatente == "Desbravador III️") {newcont = 1000000; newtt = 500000}
if(newpatente == "Grande Mestre I") {newcont = 1500000; newtt = 1000000}
if(newpatente == "Grande Mestre II") {newcont = 2000000; newtt = 1500000}
if(newpatente == "Grande Mestre III") {newcont = 5000000; newtt = 2000000}
if(newpatente == "Supremacy X️") {newcont = 10000000; newtt = 5000000}
// Barra de quanto falta para alcançar o próximo nível.
if(newlevel < 10000000) {
  sabPor = Number(Number(newlevel - newtt) / Number(newcont - newtt) * 100).toFixed(1)
  sabibis = newcont - newlevel
if(sabPor == 100) sabPor = `〘██████████〙${sabPor}%`
if(sabPor < 100) returnP = `〘█████████▒〙${sabPor}%`
if(sabPor < 90) returnP = `〘████████▒▒〙${sabPor}%`
if(sabPor < 80) returnP = `〘███████▒▒▒〙${sabPor}%`
if(sabPor < 70) returnP = `〘██████▒▒▒▒〙${sabPor}%`
if(sabPor < 60) returnP = `〘█████▒▒▒▒▒〙${sabPor}%`
if(sabPor < 50) returnP = `〘████▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${sabPor}%`
} else {
returnP = ``
}
leveltxt = `*LEVELING* - Aqui está a sua situação sobre o mesmo.\n• Usuário: *@${sender.split("@")[0]}*\n• Você está atualmente no level *${level2[levelstts].level}* e no patente *${newpatente}*\n• Sua quantidade atual de XP é: *${level2[levelstts].contador}* ${newlevel < 10000000 ? `para alcançar o próximo falta *${newcont}*.` : ``}\n\t🔋 ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `• Falta${Number(sabibis) > 1 ? `m` : ``} apenas *${sabibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`
mention(`${leveltxt}`)
} else {
reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)
}
break

case 'addlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de level que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que adicionar ao menos 1 level.")
if(q.includes(".")) return reply("Não pode número decimal.")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de level que deseja remover")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que tirar ao menos 1 level")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level -= Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`)
break

case 'addxp':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de XP que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que add ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de XP que deseja retirar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que tirar ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`)
break

case 'blocklevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!menc_os2) return reply("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return reply("O usuário mencionado já está bloqueado no contador.")
level2[AB].block = true
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas!")
break

case 'unblocklevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!menc_os2) return reply("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return reply("O usuário mencionado não está bloqueado atualmente!")
level2[AB].block = false
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Usuário desbloqueado do contador com sucesso! As interações do usuário mencionado voltarão a ser contabilizadas.")
break

case 'blocklevel-list': case 'blocklevellist':
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de XP:\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
  if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`
if(blocklevellist > 0) {
mention(txt)
} else {
reply("Não existe nenhum *usuário bloqueado* do contador XP.")
}
break

case 'rmlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q && !menc_os2) return reply("Marque a pessoa que deseja apagar do contador.")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return reply("O usuário mencionado não está registrado no contador.")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Usuário apagado foi contador com sucesso como o(a) senhor(a) pediu...")
break

case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(enviar.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
await ClearMembersInactive()
bule = []; bule2 = []; mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
case 'check':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]}\n–\n• Quantidade de mensagens enviadas pelo usuário(a): *${RSM_CN.messages}*\n• Quantidade de comandos executados pelo usuário(a): *${RSM_CN.cmd_messages}*\n• Usuário está conectado em um dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
mentions(`Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'rankgay':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${NomeDoBot}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GAYS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🏳️‍🌈 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgados': case 'rankgado':
if(!isModobn) return reply(mess.warningMB(prefix))
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${NomeDoBot}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GADOS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🐮 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'suruba': case 'surubao': 
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply(msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
const quantidadeSafados = args.join(' ')
if(!quantidadeSafados) return reply(`Informe por favor a quantidade de pessoas você deseja em sua suruba... *Exemplo:* ${prefix+command} 4`)
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${quantidadeSafados}, topa?`, `quer que *${quantidadeSafados}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${quantidadeSafados} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${prefix} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < quantidadeSafados; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, suruba);
break;

case 'rankgostosa':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}??🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'rankgostosos': case 'rankgostoso':
case 'rankgostoso':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
❯ 『${NomeDoBot}』 ❮


║❯         〘 TOP MAIS GOSTOSOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ GOSTOSO: @${o01.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o02.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o03.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o04.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o05.id.split('@')[0]}  `
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`)
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`)
if(!isModobn) return reply(mess.warningMB(prefix))
d = []
tekyus = `Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
tekyus += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(tekyus, d, true)
break;

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n—\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n-\n• @${boardnow.X} VS @${boardnow.O}\n—\n• Sua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
sandro.sendMessage(from, {text: chatMove}, {quoted: selo,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n—\n@${sender.replace("@s.whatsapp.net", "")} _está te desafiando para uma partida de jogo da velha..._\n_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n—\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n-\n${tes}`)
break

case 'anagrama':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply('Use 1 para ativar o jogo do anagrama, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)) {
an = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
reply(`• Já existe um registro da ativação do anagrama aqui no grupo, resolva abaixo, caso desejar resetar ou desativar, use: *${prefix}anagrama 1/0*\n—\n⭐️ Qual é a ordem correta da palavra? Resolva: *${an.embaralhada}*\n• Dica: ${an.dica}`)
} else {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
sandro.sendMessage(from, {text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta das letras?\n—\n• Palavra: *${shuffle(palavrasANA[anaaleatorio].palavraOriginal)}*\n• Dica: ${palavrasANA[anaaleatorio].dica}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)) return reply('Não tem como desativar o jogo do anagrama pôs ele não foi ativado...')
fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'quizanimais':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply('Use 1 para ativar o quiz animais, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `• Existe um jogo existente, aqui no grupo! Resolva a pergunta abaixo:\n—\n🤔 Pergunta: ${superrttrr.question}`
wew = await getBuffer(`${superrttrr.foto}`)   
await sandro.sendMessage(from, {image: wew, caption: imagemtexto}, {quoted: selo})
} else {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)  
await sandro.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${quizanimais[animaisquiz].question}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'whatmusic':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const whatMAle = Math.floor(Math.random() * whatMusicAr.length)
if(args.length == 0) return reply('Use 1 para ativar o jogo, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)) {
dataW = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
reply(`Já existe uma partida iniciada aqui no grupo, confira:\n–\n${dataW.trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${dataW.dica}`)} else {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[whatMAle])}`)
textW = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• ${II}Dica:${II} ${whatMusicAr[whatMAle].dica}`
sandro.sendMessage(from, {text: textW}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)) return reply('Não tem como desativar o jogo, pois ele não foi ativado')
fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'gartic':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply('Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"
🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${garticArchives[garticquiz].imagem}`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return reply('Não tem como desativar o gartic pôs ele não foi ativado.')
fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'enigma':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(mess.warningMB(prefix))
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${SAB_SAB_ENI.charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${enigmaArchive[engimaSolu].charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return reply('Não tem como desativar o enigma pôs ele não foi ativado.')
fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)
reply("Desativado com sucesso.")
}
break



case 'revelargartic':  
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return ("Não existe nenhuma partida atual do jogo neste grupo.")
let dataAnagramaa = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${dataAnagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return ("Não existe nenhuma partida atual do jogo neste grupo.")
let eni1 = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'icms':
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [result1, result2] = txt.split("|")
if(!q.includes("|")) return reply(mess.syntaxIcms(prefix))
await fetchJson(`https://yurimodz-apis.xyz/api/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=${SANDRO_MD_BOT}`).then(data => {
sandro.sendMessage(from, {text: mess.icmsResult(data)}, {quoted: selo})
}).catch(e => {
return reply(mess.error())
})
break

case 'add_key': 
if (!SoDono) return reply(enviar.msg.donosmt)
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [akey, limit] = txt.split("|")
if(!q.includes("|")) return reply(`Olá chefinho, parece que você está usando o comando de forma errada!\n  • Exemplo: *${prefix}add_key [apikey|limite]*`)
try {
sb_ = await fetchJson(`https://yurimodz-apis.xyz/db/adicionar-apikey?apikey=${encodeURI(akey)}&request=${Number(limit)}&senha=R23`)
reply(sb_.message)
} catch(e) {
console.error(e)
}
break

case 'rm_key': 
if (!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(`Me fale qual é a apikey que você deseja remover?\n  • Exemplo: *${prefix}rm_key [apikey desejada]*`)
try {
sb_ = await fetchJson(`https://yurimodz-apis.xyz/db/remover-apikey?apikey=${encodeURI(q)}&senha=Yurizinn`)
reply(sb_.message)
} catch(e) {
console.error(e)
}
break

case 'list_key':
if (!SoDono) return reply(enviar.msg.donosmt)
ABC = await fetchJson(`https://yurimodz-apis.xyz/db/lista-apikeys?senha=Yurizinn`)
RST = `• Total de apikeys armazenadas na dabatase: *${ABC.length}*\n• Aqui está a lista detalhadas sobre as apikey criadas pelo meu proprietário.\n—\n`
RST += `${ABC.map(v => `• Apikey: *${v?.apikey}*\n• Limite de Requisições: *${v?.request}*`).join('\n—\n')}`
await sandro.sendMessage(sender, {text: RST}, {quoted: selo})
break

case 'list_ip':
if (!SoDono) return reply(enviar.msg.donosmt)
ABC = await fetchJson(`https://yurimodz-apis.xyz/db/lista-ip?senha=R23`)
RST = `• Total de apikeys armazenadas na dabatase de ip(s): *${ABC.length}*\n• Aqui está a lista detalhadas sobre os ip acessado(s) pelo usuários destinados de cada apikey.\n—\n`
RST += `${ABC.map(v => `• Apikey: *${v?.key}*\n• Endereço(s) IP: *${v.IP}*`).join('\n—\n')}`
await sandro.sendMessage(sender, {text: RST}, {quoted: selo})
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
    return sandro.sendMessage(from, {
      audio: { url: './arquivos/audio/sandro.mp3' },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: info });
break

//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sandro.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sandro.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sandro.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break



//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
sandro.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: selo}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.error())
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sandro.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: info})
break

case 'recusar':
if(!SoDono) return reply(enviar.msg.donosmt)
sandro.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`})
break;

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sandro.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'ip':
  try {
    if (!args[0]) return reply("❌ Por favor, informe um IP. Exemplo: /ip 8.8.8.8");

    const ip = args[0];
    const res = await fetch(`https://ipwho.is/${ip}`);
    const data = await res.json();

    if (!data.success) {
      return reply("❌ IP inválido ou não encontrado.");
    }

    const mensagem = `🌐 *Informações do IP ${ip}:*\n\n` +
      `📍 *Localização:* ${data.city}, ${data.region}, ${data.country}\n` +
      `🌎 *Continente:* ${data.continent}\n` +
      `🕓 *Fuso horário:* ${data.timezone.id} (UTC${data.timezone.utc})\n` +
      `📶 *Provedor:* ${data.connection.isp}\n` +
      `🔢 *Org:* ${data.connection.org}\n` +
      `📡 *Tipo:* ${data.type}\n` +
      `🧭 *Latitude/Longitude:* ${data.latitude}, ${data.longitude}`;

    reply(mensagem);

  } catch (e) {
    console.error("Erro no comando /ip:", e);
    reply("❌ Ocorreu um erro ao consultar o IP.");
  }
  break;

case 'cep':
  try {
    if (!args[0]) return reply("❌ Por favor, forneça um CEP. Exemplo: /cep 01001-000");

    const cep = args[0].replace(/\D/g, "");
    if (cep.length !== 8) return reply("❌ CEP inválido. Certifique-se de informar 8 dígitos.");

    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) return reply("❌ CEP não encontrado.");

    const mensagem = `*🔍 Resultado da busca pelo CEP ${cep}:*\n\n` +
      `📍 *Logradouro:* ${data.logradouro || "Não disponível"}\n` +
      `🏘️ *Bairro:* ${data.bairro || "Não disponível"}\n` +
      `🏙️ *Cidade:* ${data.localidade || "Não disponível"}\n` +
      `🗺️ *Estado:* ${data.uf || "Não disponível"}\n` +
      `📮 *CEP:* ${data.cep}`;

    await sandro.sendMessage(from, { text: mensagem }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando /cep:", e);
    reply("❌ Ocorreu um erro ao buscar o CEP.");
  }
  break;

// RPG //

case 'menurpg': 
case 'menucity':
if(!isGroup) return (enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgc* para se registrar na City.`)
try {
const imagemPath = "./settings/fotobot.jpg"; // Substitua pelo caminho correto
const menuTexto = rpgmenu(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);
await sandro.sendMessage(from, { 
image: { url: imagemPath }, // Se der erro, tente usar { image: { path: imagemPath } }
caption: menuTexto}, { quoted: info });} catch (e) {
console.error("Erro no comando 'menu':", e);}
break;

case 'modorpg': 
case 'modocity': 
case 'modoc': 
case 'cityrpg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply(`Você está usando o comando de forma errada, verifique:\n• Ex: *${prefix+command} 1/0* _(1 para ativar, 0 para desativar)_`)
if(Number(args[0]) === 1) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true) return reply("Sistema *City* - O sistema já está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: true})
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = true
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *City* - Foi efetuado a ativação no grupo com sucesso...")
} else if(Number(args[0]) === 0) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == false) return reply("Sistema *City* - O sistema não está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: false})
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = false
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *City* - Foi desabilitado com sucesso no grupo.")
}
break

case 'rgc':
case 'rgcity':
if(!isGroup) return (enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(JSON.stringify(sabrpg).includes(sender)) return reply(`Seu registro foi encontrado em meu banco de dados! Use *${prefix}meusc* e consulte seu registro/dados`)
if(!q) return reply(`Digite seu nome após o comando, para seu registro ser feito com êxito.`)
if(q.includes('@')) return reply(`O registro foi cancelado na City! Foi detectado um *@* no campo, retire-o e realize o registro novamente.`)
bancos = ["Inter", "NuBank", "PagBank️", "Bradesco", "Next", "Caixa", "Santander️", "Banco do Brasil", "PicPay", "PayPal", "Itaú"]
bank = bancos[Math.floor(Math.random() * bancos.length)]
horarg = moment.tz('America/Sao_Paulo').format('HH:mm');
hora10 = moment.tz('America/Sao_Paulo').format('HH');
datarg = moment.tz('America/Sao_Paulo').format('DD/MM');
dia10 = moment.tz('America/Sao_Paulo').format('DD');
m10 = moment.tz('America/Sao_Paulo').format('MM');
sabrpg.push({id: sender, gpid: from, hrg: horarg, drg: datarg, nome: q, namebank: bank, money: 0, pixD: 5, pixL: 100, limiteC: 15, horaC: hora10, diaC: dia10, mC: m10, limiteTh: 3, hrT: hora10, limiteTd: 24, diaT: dia10, mT: m10, bcbet: true})
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Registro efetuado e concluído com êxito! Seja bem vindo(a) à City, ${q}`)
setTimeout(() => {
sandro.sendMessage(from, {text: `Agora você pode trabalhar e ganhar muito dinheiro jogando e apostando em nossos jogos. Para consultar seu saldo atual, use: *${prefix}minhacarteira*`})
}, 1100)
break


case 'dados_sc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`ID do usuário não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`• ID do usuário: ${sabrpg[AB].id}\n• ID do grupo: ${sabrpg[AB].gpid}\n• Hora de registro: ${sabrpg[AB].hrg}\n• Data de registro: ${sabrpg[AB].drg}\n• Nome de usuário: ${sabrpg[AB].nome}\n• Nome do banco: ${sabrpg[AB].namebank}\n• Dinheiro: ${sabrpg[AB].money}\n• Quantidade de pix diário: ${sabrpg[AB].pixD}\n• Limite de pix: ${sabrpg[AB].pixL}\n• Limite do cassino: ${sabrpg[AB].limiteC}\n• Hora do cassino: ${sabrpg[AB].horaC}\n• Dia do cassino: ${sabrpg[AB].diaC}\n• Mês do cassino: ${sabrpg[AB].mC}\n• Limite de trabalho por hora: ${sabrpg[AB].limiteTh}\n• Hora do trabalho: ${sabrpg[AB].hrT}\n• Limite de trabalho diário: ${sabrpg[AB].limiteTd}\n• Dia de trabalho: ${sabrpg[AB].diaT}\n• Mês de trabalho: ${sabrpg[AB].mT}`)
break

case 'sairdacity':
case 'sairc':
case 'saircity':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`ID do usuário não encontrado ou inexistente...`)
if(Number(args[0]) === 1) {
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(i => i.id).indexOf(sender)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
}
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(i => i.id).indexOf(sender)
galosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
if(JSON.stringify(roubosrpg).includes(sender)) {
AE = roubosrpg.map(i => i.id).indexOf(sender)
roubosrpg.splice(AE, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
AB = sabrpg.map(i => i.id).indexOf(sender)
sabrpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(sabrpg))
reply(`Seu registro na City foi deletado com sucesso... Volte sempre!`)
} else {
reply(`Ao sair da City, você concorda em apagar o seu registro completamente, isto é, todo o seu histórico de jogo.\n• Caso você esteja de acordo com isso, use: *${prefix+command} 1*`)
}
break

case 'delcity':
case 'delc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Digite o número do usuário que deseja remover da City.`)
qp = q + `@s.whatsapp.net`
AB = sabrpg.map(i => i.id).indexOf(qp)
if(AB < 0) return reply(`O ID do usuário não foi localizado, *certifique-se se ele já tem registro.*`)
if(JSON.stringify(cavalosrpg).includes(qp)) {
AC = cavalosrpg.map(i => i.id).indexOf(qp)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
}
if(JSON.stringify(galosrpg).includes(qp)) {
AD = galosrpg.map(i => i.id).indexOf(qp)
galosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
sabrpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`O usuário acaba de ser removido da *City*, por mandato da soberania.`)
break

case 'rpglistgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
membros = `Lista de participantes do *grupo* que estão registrados na *City*:\n–\n`
rpglistgp = 0
for(i = 0; i < groupMembers.length; i++) {
if(JSON.stringify(sabrpg).includes(groupMembers[i].id)) {
membros += `Membro ID ${i+1}. ❪▧⃯⃟ฺ࣭࣪͘ꕸ▸ @${groupMembers[i].id.split('@')[0]}\n`
rpglistgp += 1
}
}
membros += `–\n• Quantidade: *${rpglistgp} participante(s).*`
mention(membros)
break

case 'meuc':
case 'meucity':
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
if(JSON.stringify(cavalosrpg).includes(sender)){
AC = cavalosrpg.map(a => a.id).indexOf(sender)
percentualcavalo = Number(cavalosrpg[AC].countVc)/Number(Number(cavalosrpg[AC].countVc)+Number(cavalosrpg[AC].countDc))*100
if(Number(percentualcavalo) > 0) {
porcemnmr = percentualcavalo
} else {
porcemnmr = 0
}
runcav = `• Quantidade de Cavalos que você possuí atualmente: *${cavalosrpg[AC].cavalos.length}*\n• Quantidade de Vitórias: *${cavalosrpg[AC].countVc}*\n• Porcentagem de Ganhos: *${Number(porcemnmr).toFixed(1)}%*\n• Dinheiro investido: *R$ ${Number(Number(cavalosrpg[AC].capitalVc)+Number(cavalosrpg[AC].capitalDc)).toFixed(2)}*\n• Dinheiro lucrado: (R$): *R$ ${Number(cavalosrpg[AC].capitalVc).toFixed(2)}*`
} else {
runcav = `️Você atualmente não está registrado na *corrida de cavalos*.`
}
if(JSON.stringify(galosrpg).includes(sender)){
AE = galosrpg.map(b => b.id).indexOf(sender)
percentualgalos = Number(galosrpg[AE].countVg)/Number(Number(galosrpg[AE].countVg)+Number(galosrpg[AE].countDg))*100
if(Number(percentualgalos) > 0) {
porcegalos = percentualgalos
} else {
porcegalos = 0
}
brigadegalo = `• Quantidade de Galos que você possuí atualmente: *${galosrpg[AE].galos.length}*\n• Quantidade de Vitórias: *${galosrpg[AE].countVg}*\n• Porcentagem de Ganhos: ${Number(porcegalos).toFixed(1)}%\n• Dinheiro investido: *R$ ${Number(galosrpg[AE].dinVg).toFixed(2)}*\n• Dinheiro lucrado: (R$): ${Number(galosrpg[AE].luckVg). toFixed(2)}`
} else {
brigadegalo = `Você atualmente não está registrado na *briga de galos*...`
}
if(JSON.stringify(roubosrpg).includes(sender)) {
SC = roubosrpg.map(b => b.id).indexOf(sender)
if(roubosrpg[SC].segurança > 20) {
tlvz = roubosrpg[SC].segurança
tlvz -= 20
tlvz /= 20
segurança = `Lv. ${tlvz}`
} else {
segurança = `*Você não possui nenhum level de segurança.*`
}
} else {
segurança = `*Você não possui nenhum level de segurança.*`
}
txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n–\n• User ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Saldo disponível: *R$ ${bctxt}*\n•️ Proteção: ${segurança}\n–\n• [🐴] *Corrida de Cavalo(s):*\n${runcav}\n–\n• [🐓] *Briga de Galo(s):*\n${brigadegalo}`
reply(txt)
break

case 'minhacarteira':
case 'carteira':
case 'meubanco':
case 'saldo':
if(!isSabCityOFF) return reply(`Olá, o modo RPG não esta a`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
caixa = []
for(i = 0; i < sabrpg.length; i++){
caixa.push({idnmr: sabrpg[i].id, nmr: i+1})
}
enc = caixa.map(b => b.idnmr).indexOf(sender)
if(Number(caixa[enc].nmr) < 100) {
if(Number(caixa[enc].nmr) < 10) {
page = `00` + caixa[enc].nmr
} else {
page = `0` + caixa[enc].nmr
}
} else {
page = caixa[enc].nmr
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n—\n• [💵] *Informações Bancárias*\n• Seu banco atual: *${sabrpg[AB].namebank}*\n• Você está atualmente com *R$ ${bctxt}* em sua carteira para uso.\n–\n• [🧾] *Informações de Registro*\n• Seu ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Você realizou o registro na _City_ às *${sabrpg[AB].hrg} hora(s)* no dia *${sabrpg[AB].drg}*.\n–\n• [📖] *Livro de Registro*\n_Com base em meu livro de registros_, você foi registrado na página: *${page}*`
reply(txt)
break

case 'rankcity':
case 'rankc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
setTimeout(() => {reagir(from, "🤑")}, 300)
sandrobot = sabrpg.map(i => i)
rank = sandrobot.sort((a, b) => (a.money < b.money) ? 0 : -1)
if(sabrpg.length > 5) {
var totalR = 5
} else {
var totalR = sabrpg.length
}
txt = `🌟🧾 *Rank City:*\n–\n`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
txt += `${i + 1}º Lugar - Usuário: *${rank[i].nome}*
• Saldo do Usuário: R$ ${Number(rank[i].money).toFixed(2)}\n–\n`
}
}
reply(txt)
break

case 'buscarc':
case 'buscarcity':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`ID não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
bcid = sabrpg[AB].id.split('@')[0]
cort = bcid.slice(5)
reply(`© *City:* | Carteira e informações do Usuário:\n–\n• Nome do Usuário: *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• Saldo disponível: *R$ ${bctxt}*\n—–\n• [🧾] *Informações de Registro:*\n• ID do Usuário: *R${bcid.split(cort)[0]}GP${cort}BC*\n• Registrou-se às *${sabrpg[AB].hrg}* hora(s) do dia *${sabrpg[AB].drg}*.`)
break

case 'addpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
MD = sabrpg[AB].money
addpix = Number(MD) + Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`R$ ${Number(pix).toFixed(2)} foram adicionados a conta ${sabrpg[AB].nome}`)
break

case 'setpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
sabrpg[AB].money = pix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`O saldo da conta ${sabrpg[AB].nome} foi setado em R$ ${Number(pix).toFixed(2)}`)
break

case 'delpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
MD = sabrpg[AB].money
addpix = Number(MD) - Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`R$ ${Number(pix).toFixed(2)} foram retirados da conta ${sabrpg[AB].nome}`)
break

case 'zerarcity':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Falta a chave pix`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(q)) return reply(`${q} não é um número...`)
sabrpg[AB].money = 0
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`A conta ${sabrpg[AB].nome} foi zerada... Seu saldo agora é R$ 00.00`)
break

case 'gerargf':
if(!SoDono) return reply(enviar.msg.donosmt)
var [value, quant] = q.split('/')
if(!value) return reply(`Defina o valor que você desejar adicionar ao giftCard.`)
if(!quant) return reply(`Defina a quantidade de usuários que poderam usar o *código-resgate*.`)
if(!Number(value)) return reply(`${value} não é número!`)
if(!Number(quant)) return reply(`${quant} não é número!`)
dategf = moment.tz('America/Sao_Paulo').format('DDMMYY')
horagf = moment.tz('America/Sao_Paulo').format('HHmmss')
codegf = `P${value}M${quant}BC${dategf+horagf}QC${Number(Number(Number(dategf)+Number(horagf))/Number(quant)).toFixed(0)}RPG`
coderpg.push({codeid: codegf, valor: value,quantmax: Number(quant).toFixed(0), usus: []})
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`Código de *R$ ${Number(value).toFixed(2)}* gerado, válido para ${Number(quant) <= 1 ? `um usuário apenas...` : `os ${quant} primeiros...`}\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf*`)
setTimeout(() => {
sandro.sendMessage(from, {text: codegf})
}, 1000)
break

case 'delgf':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Digite o código que deseja remover do RPG`)
AB = coderpg.map(i => i.codeid).indexOf(q)
if(AB < 0) return reply(`Código não encontrado ou inexistente...`)
coderpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`O código *${q}* foi desabilitado com sucesso, ou seja, o código a partir de agora está inválido.`)
break

case 'resgatargf':
case 'resgatar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = coderpg.map(i => i.codeid).indexOf(q)
BD = sabrpg.map(b => b.id).indexOf(sender)
if(!q) return reply(`Você esqueceu de digitar o código junto ao comando! _Ex: ${prefix+command} ABCD1234_`)
if(!JSON.stringify(coderpg).includes(q)) return reply(`Error *500*: Código Inexistente! ✋🏼`)
if(JSON.stringify(coderpg[AB].usus).includes(sender)) return reply(`Você já usou, ou seja, _o código só pode ser resgatado 1 vez por usuário._`)
if(Number(coderpg[AB].usus.length) < Number(coderpg[AB].quantmax)) {
coderpg[AB].usus.push({id: sender})
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
MD = sabrpg[BD].money
sabrpg[BD].money = Number(MD) + Number(coderpg[AB].valor)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Estou verificando se o código é real, para atribuir o benefício a você!`)
setTimeout(() => {
mention(`✅️💰 *O código informado é válido!* Parabéns *@${sender.split("@")[0]}*, você acaba de resgatar o seu benefício.\n• Foi adicionado à sua carteira, um valor de: *R$ ${Number(coderpg[AB].valor).toFixed(2)}*`)
}, 3000)
} else {
reply(`Sinto muito!😿 O código informado está inválido.\n• Por favor, entre em contato com meu dono, caso seja um engano!`)
}
break

case 'codelist':
case 'listacodigo':
case 'listacodigos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(coderpg.length < 0) return reply(`Sinto muito!😿 Não existe nenhum código disponível no momento.`)
txt = `[Total: *${coderpg.length}*] - Códigos de resgate disponíveis.\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf <code>*`
for(i =0; i < coderpg.length; i++) {
txt += `\n—\n*[${i+1}]* » • Código: *${coderpg[i].codeid}*\n• Valor do Gift Card: *R$ ${Number(coderpg[i].valor).toFixed(2)}*\n• Número de usuário(s) que podem resgatar o mesmo: *${Number(coderpg[i].quantmax) - Number(coderpg[i].usus.length)}*`
}
reply(txt)
break

case 'fazerpix': case 'transferir':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
datepix = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
dateid = moment.tz('America/Sao_Paulo').format('DDMMYY')
horaid = moment.tz('America/Sao_Paulo').format('HHmmss')
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Coloque a chave PIX (número do indivíduo) para fazer a transferência bancária...`)
if(sender.includes(nmr)) return reply(`Não é possível enviar um pix para você mesmo...`)
if(!pix) return reply(`Coloque uma barra ( / ) após a chave, e defina o valor a ser enviado, ex:
${prefix+command} 557582599462/100`)
if(Number(pix) < 0.01) return reply(`Não é possível transferir menos que 1 centavo...`)
if(!Number(pix)) return reply(`${pix} não é número... 😿`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
BC = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(Number(pix) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa transferência...`)
if(sabrpg[AB].namebank == "Inter"){tpb = 0.1}
if(sabrpg[AB].namebank == "NuBank"){tpb = 0.2}
if(sabrpg[AB].namebank == "PagBank"){tpb = 0.3}
if(sabrpg[AB].namebank == "Bradesco"){tpb = 0.4}
if(sabrpg[AB].namebank == "Itaú"){tpb = 0.5}
if(sabrpg[AB].namebank == "Next"){tpb = 0.6}
if(sabrpg[AB].namebank == "Caixa"){tpb = 0.7}
if(sabrpg[AB].namebank == "Santander️"){tpb = 0.8}
if(sabrpg[AB].namebank == "Banco do Brasil"){tpb = 0.9}
if(sabrpg[AB].namebank == "PicPay"){tpb = 1}
if(sabrpg[AB].namebank == "PayPal"){tpb = 1.1}
if(sabrpg[AB].namebank == sabrpg[BC].namebank) {
taxabanco = 0
} else {
taxabanco = tpb
}
taxageral = Number(pix)*Number(taxabanco)/100
addpix = Number(sabrpg[BC].money) + Number(Number(pix) - Number(taxageral))
delpix = Number(sabrpg[AB].money) - Number(pix)
sabrpg[BC].money = addpix
sabrpg[AB].money = delpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
myid = sabrpg[AB].id.split('@')[0].slice(5)
suid = sabrpg[BC].id.split('@')[0].slice(5)
imn = sabrpg[AB].nome.slice(1)
isn = sabrpg[BC].nome.slice(1)
mimn = sabrpg[AB].nome.split(imn)[0]
misn = sabrpg[BC].nome.split(isn)[0]
comprovante = `🧾 *Comprovante:*\n—\n• Pix: *R$ ${Number(Number(pix) - Number(taxageral)).toFixed(2)}*\n• Código ID: *${mimn.toUpperCase()+myid+misn.toUpperCase()+suid}P${dateid}X${horaid}RPG*\n•️ Taxa do Banco: *${taxabanco}%*\n—–\n• A transferência foi realizada às *${hora120}* do dia: *${datepix}*\n——\n• *Envio:* *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n——\n• Recebimento: *${sabrpg[BC].nome}*\n• Banco: *${sabrpg[BC].namebank}*\n• ID: *R${sabrpg[BC].id.split(suid)[0]}GP${suid}BC*`
if(JSON.stringify(sabrpg).includes(nmrdn)) {
setTimeout(() => {
BD = sabrpg.map(d => d.id).indexOf(nmrdn)
pixdono = sabrpg[BD].money
sabrpg[BD].money = Number(pixdono) + Number(taxageral)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}, 1000)
}
reply(comprovante)
break

case 'chavepix':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return sandro.sendMessage(from, {text: `Usuário (a) @${menc_os2.split('@')[0]} não consta em nosso banco...`, mentions: [menc_os2]}, {quoted: selo})
AB = sabrpg.map(i => i.id).indexOf(sender_ou_n)
reply(`Chave encontrada/localizada! 🌟🧾\n• Nome: *${sabrpg[AB].nome}*\n• Chave: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'meupix':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`Aqui está sua numeração da chave pix: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'trocarbanco':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply(`Escolha um número correspondente ao banco...\nEx: ${prefix+command} 2 _(Serão necessários R$ 2500.00 para realizar essa ação)_\n––\nBancos disponíveis:\n• Opção - Número: [1] => Inter\n• Opção - Número: [2] => NuBank\n• Opção - Número: [3] => PagBank\n• Opção - Número: [4] => Bradesco\n• Opção - Número: [5] => Itaú\n• Opção - Número: [6] => Next\n• Opção - Número: [7] =>Caixa\n• Opção - Número: [8] => Santander\n• Opção - Número: [9] => Banco do Brasil\n• Opção - Número: [10] => PicPay\n• Opção - Número: [11] => PayPal️`)
if(Number(args[0]) === 1){ var bankDD = `Inter`}; if(Number(args[0]) === 2){ var bankDD = `NuBank`}; if(Number(args[0]) === 3){ var bankDD = `PagBank`}; if(Number(args[0]) === 4){ var bankDD = `Bradesco`}; if(Number(args[0]) === 5){ var bankDD = `Itaú`}; if(Number(args[0]) === 6){ var bankDD = `Next`}; if(Number(args[0]) === 7){ var bankDD = `Caixa`}; if(Number(args[0]) === 8){ var bankDD = `Santander️`}; if(Number(args[0]) === 9){ var bankDD = `Banco do Brasil`}; if(Number(args[0]) === 10){ var bankDD = `PicPay`}; if(Number(args[0]) === 11){ var bankDD = `PayPal️`}
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 2500) return reply(` Você não tem saldo suficiente pra realizar esta ação... São necessários R$ 2500.00 para alterar seu banco`)
MD = Number(sabrpg[AB].money) - Number(2500)
sabrpg[AB].money = MD
sabrpg[AB].namebank = bankDD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
sandro.sendMessage(from, {text: `Troca efetuada com sucesso *@${sender.split('@')[0]}*, seu banco agora é o(a) ${bankDD}.`, mentions: [sender]})
break

case 'trocarnome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply(`Digite o novo nome junto ao comando... Lembre-se que essa ação custará R$ 1200.00\nEx: ${prefix+command} sandro`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 1200) return reply(` Você não tem saldo suficiente pra realizar esta ação... São necessários R$ 1200.00 para alterar seu nome`)
MD = Number(sabrpg[AB].money) - Number(1200)
sabrpg[AB].money = MD
sabrpg[AB].nome = q
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
sandro.sendMessage(from, {text: `Troca efetuada com sucesso @${sender.split('@')[0]}, seu nome foi alterado para ${q}.`, mentions: [sender]})
break

case 'trabalhar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
horaT = moment.tz('America/Sao_Paulo').format('HH')
dataT = moment.tz('America/Sao_Paulo').format('DD')
data2T = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].limiteTh) === 0 && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].hrT) === Number(horaT)) return reply(`Você já trabalhou agora... Volte na próxima hora.`)
//trabalho normal...
if(Number(sabrpg[AB].limiteTh) > 0 && Number(sabrpg[AB].hrT) === Number(horaT) && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) === Number(data2T)) {
TBALE = Math.floor(Math.random() * 50) + 40
TBLH = Number(sabrpg[AB].money) + Number(TBALE)
HT = sabrpg[AB].limiteTh - 1
TD = sabrpg[AB].limiteTd - 1
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].limiteTh = HT
sabrpg[AB].limiteTd = TD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns ${sabrpg[AB].nome}, você trabalhou e ganhou *R$ ${Number(TBALE).toFixed(2)}* até depois!🫡`)
}
HTR = sabrpg[AB].hrT + 1
//passar para a próxima hora...
if(Number(horaT) > Number(sabrpg[AB].hrT) && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].hrT = horaT
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Já tá pronto pra trabalhar dnv? Digite o comando novamente enquanto eu preparo suas coisas...`)
}
if(Number(sabrpg[AB].limiteTd) < 1 && Number(sabrpg[AB].diaT) === Number(dataT)) return reply(`Você já trabalhou muito por hoje... Volte amanhã!`)
//passar para o outro dia...
if(Number(dataT) > Number(sabrpg[AB].diaT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} usuário (a), está pronto para trabalhar?`)
}
//passar para o próximo mês...
if(Number(data2T) > Number(sabrpg[AB].mT)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
sabrpg[AB].mT = data2T
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} usuário (a), está pronto para iniciar o mês?`)
}
break

case 'minado': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if (isPlayMines) return reply('Uma partida já foi iniciada, espere acabar para iniciar uma nova...')
if (args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
tekyushd = args[0].toLowerCase()
if (tekyushd == 'easy') q_mines = 5
else if (tekyushd == 'normal') q_mines = 8 
else if (tekyushd == 'hard') q_mines = 12 
else return reply('Dificuldade inválida...')
p_mines = await getMinesPositions(minecor, q_mines)
atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
ctw = minecor.filter(function(el) {
return !p_mines.includes(el)
})
var minframes = JSON.parse(fs.readFileSync('./database/grupos/games/minesframe.json'))
mines.push({id: from, jogador: sender, pos_mines: p_mines, qnt_mines: q_mines, selected_cord: [], cord_to_win: ctw, attempts: atp, tips_d: 0, hits: 0, minesp: minframes})
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sandro.sendMessage(from, {image: {url: minado_bomb}, caption: `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna B:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna C:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna D:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna E:* 🟦 🟦 🟦 🟦 🟦\n—\n• Mina(s): *${q_mines}*\n• Dificuldade: *${tekyushd}*\n• Tentativa(s): *${atp}*`})
break

case 'mina': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if (!isPlayMines) return reply('Nehuma partida foi iniciada no grupo atualmente!');
if (args.length < 1) return reply('Diga a dificuldade: easy, normal, hard')
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
tekyushdd = args[0].toLowerCase()
play_i = minesId.indexOf(from)
const RAN_VALOR = Math.floor(Math.random() * 10000)
for(let obj of args) {
tekyushdd = obj.toLowerCase()
if (!minecor.includes(tekyushdd)) return reply('Escolha uma coordenada')
if (mines[play_i].selected_cord.includes(tekyushdd)) return reply('Coordenada já selecionada!')
if (mines[play_i].pos_mines.includes(tekyushdd)) {
mines[play_i].minesp[tekyushdd] = '💣'; mines[play_i].attempts -= 1; mines[play_i].tips_d = 0
} else {
mines[play_i].minesp[tekyushdd] = '⭐'; mines[play_i].hits += 1; mines[play_i].tips_d += 1
} mines[play_i].selected_cord.push(tekyushdd)
}
e = mines[play_i].minesp
res_tekyushdd = `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n—\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}\n—\n• Mina(s): *${mines[play_i].qnt_mines}*\n• Tentativa(s): *${mines[play_i].attempts}*\n• Acerto(s): *${mines[play_i].hits}*`
if (mines[play_i].attempts <= 0) {
res_tekyushdd += `\n——\n😿💙 Nossa que pena, suas chances esgotaram! Você acaba de perder e a chance de receber *R$ ${Number(RAN_VALOR).toFixed(2)}* em sua carteira.`
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sandro.sendMessage(from, {image: {url: minado_bomb}, caption: res_tekyushdd})
} else {
if (mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {
containAll = mines[play_i].cord_to_win.every(e => {
return mines[play_i].selected_cord.includes(e)
})
if (containAll) {
res_tekyushdd += `\n——\n🥳🌟 Meus parabéns e como recompensa da vitória, você acaba de ganhar *R$ ${Number(RAN_VALOR).toFixed(2)}* em sua carteira.`
USER = sabrpg.map(i => i.id).indexOf(sender)
MONEYATUAL = sabrpg[AB].money
sabrpg[USER].money = Number(MONEYATUAL) + Number(RAN_VALOR);
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sandro.sendMessage(from, {image: {url: minado_bomb}, caption: res_tekyushdd})
}
} else {
if (mines[play_i].tips_d >= 3) {
res_tekyushdd += `\n—\nVocê tem direito a *${parseInt(mines[play_i].tips_d/3)}* Dica(s).`
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sandro.sendMessage(from, {image: {url: minado_bomb}, caption: res_tekyushdd})
} else {
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sandro.sendMessage(from, {image: {url: minado_bomb}, caption: res_tekyushdd})
}
}
}
} else return reply("Já existe uma partida ocorrendo no grupo, não é possível iniciar outra! Aguarde acabar a atual, para iniciar a sua partida senhor(a) :(")
break

case 'minareset': 
if(!isGroup) return reply(enviar.msg.grupo);
if(!JSON.stringify(mines).includes(from) && !SoDono) return reply("Não existe nenhuma partida ainda em andamento no grupo.");
nosei = SoDono ? 0 : mines.map(i => i.id).indexOf(from)
if(mines[nosei].jogador == sender || isGroupAdmins || SoDono) {
mines.splice(nosei, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`O campo minado foi resetado com sucesso, a partida foi deletada.`)
} else {
reply("Somente o(s) adm(s) ou a pessoa que iniciou o jogo podem resetar.")
}
break

case 'mineshelp': 
reply(MinesHelp(prefix))
break

case 'minatips': 
if (!isPlayMines) return reply('- Nenhuma partida foi iniciada no grupo atualmente!');
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
play_i = minesId.indexOf(from)
if (mines[play_i].tips_d >= 3) {
is_columns = Math.random() < 0.5
if (!is_columns) {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
row = mines[play_i].pos_mines[m_sorted].charAt(0)
mines_row = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.startsWith(row)) mines_row += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`💡 Há *${mines_row}* bomba(s) na fileira *${row}*`)
} else {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
column = mines[play_i].pos_mines[m_sorted].charAt(1)
mines_column = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.endsWith(column)) mines_column += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`💡 Há *${mines_column}* bomba(s) na coluna *${column}*`)
}
} else return reply('*Acerte 3 ou mais vezes para ter direito a uma dica...*')
} else return reply("Você não pode usar este comando agora, por motivo que está ocorrendo uma partida e você não é o jogador atuante das respostas. :(")
break

case 'itenspesca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(JSON.stringify(pescaria).includes(sender)) return mentions(`Olá @${sender.split("@")[0]}, você já tem uma vara de pesca e um barco! Não é possível comprar novamente, pois você já possui o conjunto de pescaria.`)
if(Number(sabrpg[AB].money) < Number(150)) return reply(`😿 Você não possuí Golds suficiente para realizar a compra de uma vara de pescar e um barco...`)
sabrpg[AB].money -= Number(150) // Diminuir o saldo quando executar a compra!
pescaria.push(sender) // Adicionar ao json o user do id que realizou a compra do mesmo.
fs.writeFileSync("./database/usuarios/SystemRPG/pescaria.json", JSON.stringify(pescaria))
reply(`⛵️🎣 Você acaba de adquirir uma vara de pescar e um barco para se usar na pescaria, acabei de descontar 300 Golds em sua conta por motivo da compra de seus utensílios, agora você está hábito para usar o comando: *${prefix}pescar*\n—\n• Lembrando, você deve ter pelo menos 300 reais para pescar, pois quando não há sucesso você perde um valor de até 200 Golds em sua Império  Account.`)
break

case 'pescaria':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(pescaria).includes(sender)) return mention(`Olá @${sender.split("@")[0]}, você não tem os itens nescessários para usar este comando! Compre uma vara de pescar e um barco por *150 Golds*, use o comando: *${prefix}itenspesca*`)
if(Number(sabrpg[AB].money) < Number(300)) return reply(`Você não possuí Golds suficiente para realizar o uso deste comando, no mínimo você deve ter mais de 300 Golds em sua carteira para usar...\n• Use meus joguinhos e jaja você consegue esse valor, não fique mal!️`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(rg_pescaria).includes(sender)) {
rg_pescaria.push({id: sender, minuto: minu})
fs.writeFileSync("./database/usuarios/SystemRPG/pescaria-t.json", JSON.stringify(rg_pescaria))
}
AC = rg_pescaria.map(i => i.id).indexOf(sender)
if(Number(rg_pescaria[AC].minuto) !== Number(minu)) {
rg_pescaria[AC].minuto = minu
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
CHANCE_G = Math.floor(Math.random() * 100);
reply(`- Iniciando pescaria! Aguarde *5s* para obter o resultado...`)
if(Number(CHANCE_G) > 50) {
ValorPerdido = Math.floor(Math.random() * 150); 
AB = sabrpg.map(i => i.id).indexOf(sender);
sabrpg[AB].money = Number(sabrpg[AB].money) - Number(ValorPerdido);
perdeuMessage = [
`🌊😿 Você estava desbravando os 7 mares quando apareceu o tubarão martelo e derrubou o barco. Todos morreram, e você perdeu *R$ ${Number(ValorPerdido).toFixed(2)}* com gastos no funeral...`,
`Depois de horas de pesca, você não conseguiu o pacu nem o pirarucu! O único que aconteceu foi que você tomou no c*, acaba de perder *R$ ${Number(ValorPerdido).toFixed(2)}*! 😿🌟`,
`Você queria dar um mergulho na água e achar peixes novos, mas infelizmente você acabou caindo no sono e o único que conseguiu foi areia na bunda, ainda perdeu *R$ ${Number(ValorPerdido).toFixed(2)}*! 🤣`
]
txt = perdeuMessage[Math.floor(Math.random() * perdeuMessage.length)]
} else {
ValorGanho = Math.floor(Math.random() * 500)
AB = sabrpg.map(i => i.id).indexOf(sender)
TotalMoedas = sabrpg[AB].money
sabrpg[AB].money = Number(TotalMoedas) + Number(ValorGanho);
pescarMessage = [
`😲🗺 Em sua navegação pelo manguezais, você conseguiu pescar os seguintes frutos do mar *caranguejo-uçá, o camarão-rosa e a tainha* e você conseguiu vender ${Math.floor(Math.random() * 250)} de cada um deles, como recompensa você acaba de ganhar *R$ ${Number(ValorGanho).toFixed(2)}*.`,
`Depois de horas de pesca, finalmente você acaba de fisgar um pirarucu, o peixe era tão grande que foi preciso usar um guincho para tirá-lo da água. Como recompensa de sua pescada, você acaba de ganhar: *R$ ${Number(ValorGanho).toFixed(2)}*. 😌`,
`Você e seu pai foram convidados para um incrível passeio de barco, lá vocês conseguiram encontrar e pescar *${Math.floor(Math.random() * 50)}* peixe(s) e marisco(s)... Como recompensa, você acaba de ganhar em sua carteira: *R$ ${Number(ValorGanho).toFixed(2)}*. ⛵️🤍`,
`O seu esforço foi recompensado! Você ganhou *R$ ${Number(ValorGanho).toFixed(2)}* por ter feito a maior pescaria do dia! 😍`,
`🛒💰 Parabéns! Você vendeu vários peixes no mercado da produção localizado em *Maceió, Alagoas*, como recompensa por suas vendas o seu patrão lhe recompensou com *R$ ${Number(ValorGanho).toFixed(2)}*.`,
`😼 Você foi convidado à um torneio de pesca e ganhou em ${Math.floor(Math.random() * 5)}°, como recompensa você acaba de ganhar: R$ ${Number(ValorGanho).toFixed(2)}*.`,
`Você foi convidado à um torneio de pesca e saiu como campeão! 🎉 Parabéns, como recompensa você acaba de ganhar: R$ ${Number(ValorGanho).toFixed(2)}*.`,
`🌟 Você foi o pescador mais sortudo do dia! Ganhou R$ ${Number(ValorGanho).toFixed(2)} no sorteio desconhecido entre os pescadores.`,
`Você é um verdadeiro profissional! Faturou em toda sua pescada R$ ${Number(ValorGanho).toFixed(2)}, Parabéns amigo(a)! 😍🎉`,
`Você vendeu o seu sururu para um restaurante bem renomado na cidade de São Paulo! Ganhou R$ ${Number(ValorGanho).toFixed(2)}  pelas suas vendas do dia! 😲🌟🎉`,
`Você estava em um cruzeiro e acabou conhecendo muitos peixes de perto! Este cruzeiro era o Titanic, mas pelo menos você conseguiu *R$ ${Number(ValorGanho).toFixed(2)}* com os peixes... 🤣🎉`
]
txt = pescarMessage[Math.floor(Math.random() * pescarMessage.length)]
}
setTimeout(() => {sandro.sendMessage(from, {text: txt}, {quoted: info})}, 5000)
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova pescagem...`)
}
break;

case 'minerar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(minerar).includes(sender)) {
minerar.push({id: sender, minuto: minu})
fs.writeFileSync("./database/usuarios/SystemRPG/minerar.json", JSON.stringify(minerar))
}
AC = minerar.map(i => i.id).indexOf(sender)
if(Number(minerar[AC].minuto) !== Number(minu)) {
minerar[AC].minuto = minu
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MINERAR_G = Math.floor(Math.random() * 100)
reply(`- Iniciando mineração! Aguarde *5s* para obter o resultado...`)
if(Number(MINERAR_G) > 50) {
PD = ["nenhum mineral valioso", "nenhuma joia valiosa em sua busca", "nenhum diamante em sua caçada", "nenhum minério validoso", "nenhum cobre em sua caçada", "nada de redstone em sua caçada"]
txt = `😭 Em sua tentativa de mineração, não foi possível evidenciar ${PD[Math.floor(Math.random()*PD.length)]}...`
} else {
MT = Math.floor(Math.random() * 2000)
AB = sabrpg.map(i => i.id).indexOf(sender)
MA = sabrpg[AB].money
sabrpg[AB].money = Number(MA) + Number(MT);
mineMessage = [
`Você estava minerando nas ilhas savitas e encontrou em seu caminho *R$ ${Number(MT).toFixed(2)}* em minerais preciosos! 💰`, 
`🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou *R$ ${Number(MT).toFixed(2)}* em troca de ouro!`, 
`💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à *R$ ${Number(MT).toFixed(2)}*.`, 
`⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou *R$ ${Number(MT).toFixed(2)}*!`, 
`🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em *R$ ${Number(MT).toFixed(2)}*.`, 
`😱🌟 Você invadiu a casa do vizinho e encontrou *R$ ${Number(MT).toFixed(2)}* escavando o quintal dele.`, 
`⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou *R$ ${Number(MT).toFixed(2)}*`, 
`🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à *R$ ${Number(MT).toFixed(2)}*.`, 
`🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*. 😸`, 
`Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*.`
]
txt = mineMessage[Math.floor(Math.random() * mineMessage.length)]
}
setTimeout(() => {sandro.sendMessage(from, {text: txt}, {quoted: info})}, 5000)
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova mineração...`)
}
break;

case 'comprarseguranca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply("Escolha na loja um segurança de 1-3 para proteger o seu dinheiro e evitar assaltos")
if(!JSON.stringify(roubosrpg).includes(sender)) {
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(Number(args[0]) > 0 && Number(args[0]) <= 3) {
value = Number(args[0]) * 20 + 20
BC = sabrpg.map(i => i.id).indexOf(sender)
AB = roubosrpg.map(i => i.id).indexOf(sender)
if(Number(Number(args[0]) * 600) > sabrpg[BC].money) return reply(`Você não tem dinheiro suficiente para comprar esse segurança...`)
if(roubosrpg[AB].segurança == value) return reply(`Você já possui esse segurança...`)
comp = value > roubosrpg[AB].segurança ? `diminuída em ${value - roubosrpg[AB].segurança}%` : `aumentada em ${value - roubosrpg[AB].segurança}%`
roubosrpg[AB].segurança = value
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
RemoverGold(sender, Number(args[0]) * 600)
reply(`Segurança Lv. ${args[0]} comprado com sucesso 👨🏻‍✈️\nTaxa de drop: ${comp}`)
} else {
reply(`Escolha um número correspondente a um dos seguranças presentes na loja...`)
}
break

case 'treinar': case 'treino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
treinamento = ["Cê já treinou lek", "Hmm", "Tá bão", "Chega lek, cê já treinou", "Te acalma desgrama"]
if(JSON.stringify(roubosrpg).includes(sender)) return reply(`${treinamento[Math.floor(Math.random()*treinamento.length)]}`)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply("Treinamento efetuado com sucesso... Pronto para assaltar outros usuários")
break

case 'assaltar': case 'furtar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você precisa treinar primeiro... Use ${prefix}treinar`)
if(!menc_os2) return reply("Marque a pessoa quem você quer assaltar...")
if(sender.includes(menc_os2)) return reply(`Não é possível assaltar você mesmo...`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return reply(`ID do usuário não encontrado ou inexistente...`)
sandrobot = Math.floor(Math.random()*100)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(roubosrpg[AD].preso == true) return reply("Você está preso, portanto, não é possível roubar...")
if(Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) < 10) return reply("Esse ser não tem nem onde cair morto, pobre desgramado... Vai assaltar alguém mais rico 🤡")
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].hora) === Number(hora3) && Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Hmm... Agora não ${sabrpg[AB].nome}, aguarde ${Number(Number(Number(hora3) + 1) * 60) - Number(Number(roubosrpg[AD].hora) * 60 + Number(minuto3))} minutos para fazer o próximo assalto 🥷🏻`)
if(roubosrpg[AD].limite <= 0 && Number(hora3) > Number(roubosrpg[AD].hora) && Number(roubosrpg[AD].dia) === Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].dia) !== Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  roubosrpg[AD].dia = data3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite > 0 && roubosrpg[AD].preso == false) {
  roubosrpg[AD].limite -= 1
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
  if(sandrobot > 5) {
    sandrobot2 = Math.floor(Math.random()*100)
    lvx = Number(Math.floor(Math.random()*39)+1)
    totalM = lvx * 100
    totalU = sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money - 1
    ganho = totalM > Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) ? Math.floor(Math.random()*totalU) + 1 : Math.floor(Math.random()*100) * lvx
    algo = JSON.stringify(roubosrpg).includes(menc_os2) ? roubosrpg[roubosrpg.map(b => b.id).indexOf(menc_os2)].segurança : 20
    if(sandrobot2 > algo) {
      sabrpg[AB].money += ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money -= ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Assalto efetuado com sucesso ${sabrpg[AB].nome}, você roubou R$ ${Number(ganho).toFixed(2)} da conta ${sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].nome}`)
    } else {
      perda1 = Number(ganho) / 2
      perda2 = perda1 >= sabrpg[AB].money ? sabrpg[AB].money : perda1
      sabrpg[AB].money -= perda2
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`🚓 Ops, você foi pego pela polícia e pagou ${perda1 >= sabrpg[AB].money ? `todo o seu dinheiro` : `R$ ${Number(perda2).toFixed(2)}`} para sair da cadeia... Kkkk sinto muito 😔🤙🏽`)
    }
  } else {
    sandrobot3 = Math.floor(Math.random()*100)
    if(sandrobot3 > 10) {
      roubosrpg[AD].dinheiro += sabrpg[AB].money
      roubosrpg[AD].preso = true
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Putz, cê deu muito azar... Seu caso foi passado para o governo federal, e toda a sua grana foi apreendida 😮‍💨\nFelizmente, cê pode pegar o dinheiro de volta amanhã usando ${prefix}retirar`)
    } else {
      if(JSON.stringify(cavalosrpg).includes(sender)) {
        R1 = cavalosrpg.map(i => i.id).indexOf(sender)
        cavalosrpg.splice(R1, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
      }
      if(JSON.stringify(galosrpg).includes(sender)) {
        R2 = galosrpg.map(i => i.id).indexOf(sender)
        galosrpg.splice(R2, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
      }
      roubosrpg[AD].preso = false
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Vix mlk, deu ruim demais... Seu assalto virou caso da INTERPOL, e ela confiscou todos os seu bens junto com seu dinheiro 👨🏻‍✈️`)
    }
  }
}
break

case 'soltar':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!q && !menc_os2) return
usu = menc_os2 ? menc_os2 : q + `@s.whatsapp.net`
if(!JSON.stringify(roubosrpg).includes(usu)) return reply(`❌ ID não encontrado ou inexistente!`)
AD = roubosrpg.map(i => i.id).indexOf(menc_os2)
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply(`Usuário solto.`)
break

case 'revogar': case 'reivindicar': case 'retirar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você não foi preso lek, aquieta o facho 😂`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
data3 = moment.tz('America/Sao_Paulo').format('DD')
if(roubosrpg[AD].dinheiro <= 0) return reply(`Não há dinheiro apreendido...`)
if(Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Você só pode retirar o dinheiro apreendido amanhã...`)
reply(`Pronto, aqui estão os R$ ${Number(roubosrpg[AD].dinheiro).toFixed(2)} que foram apreendidos pela polícia... Vê se anda na linha mlk 👨🏻‍✈️`)
sabrpg[AB].money += roubosrpg[AD].dinheiro
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
break

case 'comprarestabulo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você já tem um estábulo em seu nome ${sabrpg[AB].nome}... 🐎`)
if(Number(sabrpg[AB].money) < 500) return reply(`Você não saldo suficiente para efetuar essa compra...`)
cavH = moment.tz('America/Sao_Paulo').format('HH')
cavD = moment.tz('America/Sao_Paulo').format('DD')
cavM = moment.tz('America/Sao_Paulo').format('MM')
cavalosrpg.push({id: sender,
level: 1,
quant_cavalos: 0,
setcav: `nenhum`,
countVc: 0,
capitalVc: 0,
countDc: 0,
capitalDc: 0,
corridaL: 10,
corridaH: cavH,
corridaD: cavD,
corridaM: cavM,
cavalos: []
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do estábulo... Agora você pode comprar cavalos para correr com eles 🐴`)
break

case 'venderestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(TT4)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu estábulo ficou avaliado em R$ ${Number(TT4).toFixed(2)}
📈 Parabéns pela venda...`)
break

case 'avaliarestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
txt = `ㅤㅤㅤ〘 *AVALIANDO* 〙
🐴 *Preço Por Cavalos:* R$ ${Number(TT1).toFixed(2)}
📈 *Preço Por Upgrade:* R$ ${Number(TT2).toFixed(2)}
🏆 *Preço Por Vitórias:* R$ ${Number(TT3).toFixed(2)}

🤑 *Total:* R$ ${Number(TT4).toFixed(2)}

-> Use ${prefix}venderestabulo caso queira se desfazer do mesmo.`
reply(txt)
break

case 'estabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) {
countcav = `\n『 Você não possui cavalos... 』\n`
} else {
countcav = `\n🐎 *Cavalos ↴*`
for(c = 0; c < cavalosrpg[AC].cavalos.length; c++) {
if(cavalosrpg[AC].cavalos[c].sela == true){
selasasah = `✅`
} else { selasasah = `❌` }
if(cavalosrpg[AC].cavalos[c].dor == true){
dorsasah = `✅`
} else { dorsasah = `❌` }
if(cavalosrpg[AC].cavalos[c].fratura == true){
fratsasah = `✅`
} else { fratsasah = `❌` }
TTCV = Number(cavalosrpg[AC].cavalos[c].viccav)/Number(Number(cavalosrpg[AC].cavalos[c].viccav)+Number(cavalosrpg[AC].cavalos[c].dercav))*100
if(Number(TTCV) > 0) {
PVCV = TTCV
} else {
PVCV = 0
}
countcav += `\n» ${Number(c)+1} « Nome Do Cavalo: *${cavalosrpg[AC].cavalos[c].nomedocavalo}*\n• Velocidade: *${Number(cavalosrpg[AC].cavalos[c].tipo)+1}x*\n• Sela: *${selasasah}*\n• Doente *${dorsasah}*\n• Fraturado: *${fratsasah}*\n• Vitórias: *${cavalosrpg[AC].cavalos[c].viccav}*\n• Percentual de Ganhos: *${Number(PVCV).toFixed(1)}%*\n• Apostas: *R$ ${Number(cavalosrpg[AC].cavalos[c].contdin).toFixed(2)}*\n• Ganhos: *R$ ${Number(cavalosrpg[AC].cavalos[c].lucdin).toFixed(2)}*\n`
}
}
txt = `👤 Nome: *${sabrpg[AB].nome}*\n💯 Level do Estábulo: *${cavalosrpg[AC].level}*\n📐 Tamanho Do Estábulo: ${Number(cavalosrpg[AC].level)*5} m²*\n🧮 Quantidade De Cavalos: *${cavalosrpg[AC].cavalos.length}*\n🔔 Cavalo Selecionado: *${cavalosrpg[AC].setcav}*\n${countcav}`
sandro.sendMessage(from, {image: {url: `https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`}, caption: txt}, {quoted: selo})
break

case 'setcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(!q) return reply(`Diga o nome de um dos cavalos presentes no seu estábulo...
Ex: ${prefix+command} Patolino`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(q.toLowerCase())) return reply(`Este cavalo não consta eu seus registros... Use o comando ${prefix}estabulo, e verifique quais cavalos você tem 🐴`)
cavalosrpg[AC].setcav = q.toLowerCase()
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Cavalo definido com sucesso...`)
break

case 'upcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
AT = Number(cavalosrpg[AC].level) * 200
if(Number(sabrpg[AB].money) < Number(AT)) return reply(`Você não saldo suficiente para upar seu estábulo...`)
LC = cavalosrpg[AC].level
cavalosrpg[AC].level = Number(LC) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(AT)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(` Agrademos a confiança na *Black Construction...* R$ ${Number(AT).toFixed(2)} foram investidos, e seu estábulo está no level ${cavalosrpg[AC].level} 🐴`)
} else { reply(`Seu estábulo já alcançou o tamanho máximo...`) }
break

case 'comprarcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
var [cavnmr, cavnome] = q.split(`/`)
if(!cavnmr) return reply(`Escolha um cavalo...`)
if(!cavnome) return reply(`Agora dê um nome para seu cavalo... Ex: ${prefix+command} ${q}/Michael`)
if(Number(cavnome.length) > 20) return reply(`Este nome é muito grande...`)
if(Number(cavnmr) === 1 || Number(cavnmr) === 2 || Number(cavnmr) === 3 || Number(cavnmr) === 4) {
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
MCV1 = Number(cavnmr) - 1
MCV2 = Number(MCV1) * 500
MCV3 = Number(MCV2) + 500
if(Number(sabrpg[AB].money) < Number(MCV3)) return reply(`Você não saldo suficiente para comprar este cavalo...`)
if(JSON.stringify(cavalosrpg[AC].cavalos).includes(cavnome)) return reply(`Você já tem um cavalo com esse nome... Pfvr, escolha outro nome 🐴`)
if(Number(cavalosrpg[AC].cavalos.length) == Number(cavalosrpg[AC].level)) return reply(`Você atingiu o número máximo de cavalos no estábulo... Caso queira aumentar o tamanho do estábulo, use ${prefix}upcavalo`)
cavalosrpg[AC].cavalos.push({nomedocavalo: cavnome.toLowerCase(),
tipo: Number(cavnmr)-1,
sela: false,
dor: false,
fratura: false,
viccav: 0,
dercav: 0,
contdin: 0,
lucdin: 0
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
sabrpg[AB].money -= Number(MCV3)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do cavalo... Espero que faça bom proveito com ele 🐴`)
} else {
reply(`Esse cavalo não está disponível para compra...`)
}
break

case 'vendercavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá vender... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) {
HCS = 100
} else {
HCS = 0
}
if(cavalosrpg[AC].cavalos[AD].dor == true) {
HCD = 50
} else {
HCD = 0
}
if(cavalosrpg[AC].cavalos[AD].fratura == true) {
HCF = 125
} else {
HCF = 0
}
HCV = Number(Number(Number(cavalosrpg[AC].cavalos[AD].tipo)+1)*250) + Number(HCS) - Number(HCD) - Number(HCF) + Number(cavalosrpg[AC].cavalos[AD].viccav)
MB = sabrpg[AB].money
sabrpg[AB].money = Number(MB) + Number(HCV)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
cavalosrpg[AC].cavalos.splice(AD, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo ficou avaliado em R$ ${Number(HCV).toFixed(2)} 🐴📈 - Parabéns pela venda...`)
break

case 'comprarsela':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um cavalo!🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) return reply(`Você já possui uma sela neste cavalo...`)
if(Number(sabrpg[AB].money) < 200) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].sela = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 200
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Uma sela foi comprada para o seu alazão com sucesso... 🐴`)
break

case 'cdcv3':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].dor == false) return reply(`Seu cavalo não está doente...`)
if(Number(sabrpg[AB].money) < 100) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].dor = false
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu cavalo recebeu uma injeção poderosa, e está pronto para correr dnv... 🐴`)
break

case 'meme':
    const memes = [
        'https://i.redd.it/1v8w08v7qz741.jpg',
        'https://i.redd.it/6v6gkjyt3qs61.jpg',
        'https://i.redd.it/6n9s7kx52pr41.jpg',
        'https://i.redd.it/xh1ybb69vbt61.jpg',
        'https://i.redd.it/g0nfg6sxzyu61.jpg',
        'https://i.redd.it/fetvci7rjkv61.jpg',
        'https://i.redd.it/4sn78zkzzqv61.jpg',
        'https://i.redd.it/pn2zwk5mpwv61.jpg',
        'https://i.redd.it/1y1dyqfuukv61.jpg',
        'https://i.redd.it/xqqlml3d1fw61.jpg',
        'https://i.redd.it/7utlz5qhm9v61.jpg',
        'https://i.redd.it/kxxm99fybvv61.jpg',
        'https://i.redd.it/9hwdzsl6svv61.jpg',
        'https://i.redd.it/tlu6omvj4zv61.jpg',
        'https://i.redd.it/f8ugxj5lkzv61.jpg',
        'https://i.redd.it/v5gij2gucwv61.jpg',
        'https://i.redd.it/5f2mbfvmxgv61.jpg',
        'https://i.redd.it/9ln92cnj9dv61.jpg',
        'https://i.redd.it/4x3tqjiv61v61.jpg',
        'https://i.redd.it/wik2ox7r5vv61.jpg'
    ];

    let memeUrl = memes[Math.floor(Math.random() * memes.length)];

    await sandro.sendMessage(from, { image: { url: memeUrl }, caption: "😂 Meme do dia para animar!" });

    break;
//
case 'memepv':
reply(`Enviando no pv... caso demore de mais nao consegui te enviar `)
const bufferImgo = await getBuffer(`http://br1.bronxyshost.com:4360/random/loli?apikey=${SANDRO_MD}`);
sandro.sendMessage(sender, {image: bufferImgo}, {quoted: info});
break;

case 'atadura':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].fratura == false) return reply(`Seu cavalo não está fraturado...`)
if(Number(sabrpg[AB].money) < 250) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].fratura = false
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 250
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Atadura colocada com sucesso... Agora deixe seu bichinho descansar 🐴`)
break

case 'cavalo':
case 'cavalos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
horacav = moment.tz('America/Sao_Paulo').format('HH')
diacav = moment.tz('America/Sao_Paulo').format('DD')
mmcav = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == false) return reply(`Você precisa comprar uma sela para seu alazão...`)
if(cavalosrpg[AC].cavalos[AD].dor == true) return reply(`Seu cavalo está doente... Compre uma _"cdcv3"_ na loja de CAVALOS para ele voltar a correr 💉`)
if(cavalosrpg[AC].cavalos[AD].fratura == true) return reply(`Seu cavalo está com a pata torcida... Vá comprar uma atadura para tratar isso 🐴`)
//passar eo limite por hora...
if(Number(cavalosrpg[AC].corridaL) === 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) return reply(`Seu cavalo parece cansado... Pfvr, volte mais tarde 🐴`)
//passar de uma hora pra outra...
if(Number(horacav) > Number(cavalosrpg[AC].corridaH) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo parece ótimo... Você já pode correr dnv 🐴`)
}
//passar de um dia pro outro...
if(Number(diacav) > Number(cavalosrpg[AC].corridaD) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu cavalo está pronto para correr ?`)
}
//passar de um mês pro outro...
if(Number(mmcav) > Number(cavalosrpg[AC].corridaM)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Um novo mês de vitórias se inicia...`)
}
//aposta liberada...
if(Number(cavalosrpg[AC].corridaL) > 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav)) {
if(!q) return reply(`A corrida já vai começar... Faça logo a sua aposta`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 100) return reply(`Nossas apostas são de alto nível aqui... Você não pode apostar menos de R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossas apostas são de alto nível aqui... Mas você não pode apostar mais do que R$ 10000.00`)
MT = Math.floor(Math.random()*40)
if(Number(MT) === 0) {
GB = cavalosrpg.map(m => m.id).indexOf(sender)
GF = cavalosrpg[GB].cavalos.map(n => n.nomedocavalo).indexOf(cavalosrpg[GB].setcav)
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
cavalosrpg[GB].cavalos.splice(GF, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
acidente = [`Seu cavalo se acidentou na pista e morreu... Meus sentimentos ao alazão 🖤`, `Seu cavalo adoeceu gravemente antes da corrida, e morreu... Meus pêsames pelo seu amigo 🖤`]
reply(acidente[Math.floor(Math.random()*acidente.length)])
}
if(Number(MT) === 1) {
cavalosrpg[AC].cavalos[AD].dor = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo adoeceu, mas felizmente, essa doença não é para a morte... Vá comprar a _"cdcv3",_ uma vacina poderosa que vai levantar o seu alazão na hora 💉`)
}
if(Number(MT) === 2) {
cavalosrpg[AC].cavalos[AD].fratura = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🥹 Seu alazão fraturou a patinha enquanto corria... Vá comprar uma atadura na ${prefix}lojadecavalos`)
}
if(Number(MT) > 2) {
cavt1 = SoDono ? 1 : Math.floor(Math.random()*19)+1
cavt2 = Number(cavt1) - Number(cavalosrpg[AC].cavalos[AD].tipo)
if(Number(cavt2) < 1){
var cav = 1
} else {
var cav = cavt2
}
//primeiro lugar...
if(Number(cav) === 1){
cav2 = Number(args[0]) + Number(args[0]) / 2
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L1 = 1
} else {
L1 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC1 = 1
} else {
LC1 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L1)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC1)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//segundo lugar...
if(Number(cav) === 2){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = args[0]
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L2 = 1
} else {
L2 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC2 = 1
} else {
LC2 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L2)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC2)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//terceiro lugar...
if(Number(cav) === 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = Number(args[0]) / 2
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L3 = 1
} else {
L3 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC3 = 1
} else {
LC3 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L3)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC3)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//outros lugares...
if(Number(cav) > 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
LM = cavalosrpg[AC].corridaL
CCD = cavalosrpg[AC].countDc
CDC = cavalosrpg[AC].capitalDc
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countDc = Number(CCD) + 1
cavalosrpg[AC].capitalDc = Number(CDC) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS)+1
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você perdeu R$ ${Number(args[0]).toFixed(2)}`)
}
}
}
break

case '1xbcbet':
case '1xbcbets':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Imperiorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply(`🛒 *Império  City Bets* é o novo sistema de apostas... Invista uma quantia entre R$ 100.00 e R$ 10000.00, e veja seu dinheiro rodar.`)
if(!Number(args[0])) return reply(`${args[0]} não é número... 😿`)
AB = sabrpg.map(i => i.id).indexOf(sender)
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui dinheiro suficiente para investir`)
if(Number(args[0]) < 100) return reply(`Você deve investir no mínimo R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossa plataforma não paga mais que R$ 10000.00`)
if(!JSON.stringify(bcbet).includes(sender)) {
bcbet.push({id: sender, minuto: minuto3})
fs.writeFileSync("./database/usuarios/SystemRPG/1xbcbet.json", JSON.stringify(bcbet))
}
AC = bcbet.map(i => i.id).indexOf(sender)
if(Number(bcbet[AC].minuto) !== Number(minuto3)) {
bcbet[AC].minuto = minuto3
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MN = Math.floor(Math.random()*100)
reply(`📊 Analisando os gráficos...`)
if(Number(MN) > 15) {
PG = ["na construção de um estádio de futebol, mas a construção desabou...", "na bolsa de valores, mas a Bovespa caiu drasticamente...", "num leilão de carros, mas os carros não foram leiloados...", "num leilão de carros, mas você sofreu um golpe...", "no seu time de futebol, mas o seu time perdeu o jogo...", "numa corrida, mas o carro bateu...", "em uma luta de UFC, e seu lutador sofreu um nocaute..."]
txt = `${II}${NomeDoBot} Bet${II} > A sua casa de apostas online!\n—\n[🔴] - As estatísticas não são muito favoráveis! Você investiu ${PG[Math.floor(Math.random()*PG.length)]}\n• Você perdeu, então sofreu uma perda de *R$ ${Number(args[0]).toFixed(2)}* em dinheiro.`
img = fotobot,
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
GG = ["na construção de um estádio de futebol, e a construção foi bem sucedida...", "na bolsa de valores, e a Bovespa subiu exponencialmente...", "num leilão de carros, e obteve grande lucro na venda dos mesmos...", "no seu time de futebol, e o seu time venceu o jogo...", "numa corrida, e o seu carro chegou em primeiro lugar...", "em uma luta de UFC, e seu lutador derrubou o oponente facilmente..."]
VL1 = Math.floor(Math.random()*9)+1
VL2 = Number(args[0]) * Number(VL1)
txt = `${II}${NomeDoBot} Bet${II} > A sua casa de apostas online!\n—\n[🟢] - As estatísticas são positivas e muito boas por sinal! Você investiu ${GG[Math.floor(Math.random()*GG.length)]}\n• Você ganhou e recebeu como saldo: *R$ ${Number(VL2).toFixed(2)}*`
img = fotobot,
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(VL2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
setTimeout(() => {
sandro.sendMessage(from, {image: {url: img}, caption: txt}, {quoted: selo})
}, 2000)
} else {
reply(`Aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))} seg.* para fazer novas apostas novamente.`)
}
break

case 'resetscbet':
if(!SoDono) return reply(enviar.msg.donosmt)
for(i = 0; i < sabrpg.length; i++) {
sabrpg[i].bcbet = true
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
reply(`Gráficos restaurados para todos os ${sabrpg.length} usuários do RPG`)
break

case 'comprargalinheiro':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(JSON.stringify(galosrpg).includes(sender)) return reply(`Você já possui um galinheiro... Consulte a ${prefix}lojadegalos para comprar galos e brigar com eles 🐔`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 500) return reply(`Vc não possui dinheiro suficiente para efetuar essa compra...`)
gaH = moment.tz('America/Sao_Paulo').format('HH')
gaD = moment.tz('America/Sao_Paulo').format('DD')
gaM = moment.tz('America/Sao_Paulo').format('MM')
galosrpg.push({id: sender,level: 1,galinhas: 0,durabilidade: 5,ovos: 0,countVg: 0,countDg: 0,dinVg: 0,luckVg: 0,brigaL: 15,brigaH: gaH,brigaD: gaD,brigaM: gaM,galos: []})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`🐔 Galinheiro comprado com sucesso... Consulte ${prefix}galinheiro`)
break

case 'comprargalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja comprar...`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) === 1 || Number(args[0]) === 6 || Number(args[0]) === 12) {
if(Number(Number(galosrpg[AD].galos.length) + Number(args[0])) > Number(Number(galosrpg[AD].level)*5)) return reply(`Não é possível comprar +${args[0]} ${Number(args[0]) < 2 ? 'galo' : 'galos'}, pois excede o limite de ${Number(galosrpg[AD].level)*5} galos...\n• Caso queira aumentar o tamanho do galinheiro, use ${prefix}upgalo`)
if(Number(args[0]) === 1) {
if(Number(sabrpg[AB].money) < 100) return reply(`Vc não possui saldo suficiente para efetuar essa compra!`)
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`1 galo comprado com sucesso!`)
}
if(Number(args[0]) === 6) {
if(Number(sabrpg[AB].money) < 550) return reply(`Vc não possui saldo suficiente para efetuar essa compra...`)
for(i = 0; i < 6; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 550
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`6 galos comprado com sucesso.`)
}
if(Number(args[0]) === 12) {
if(Number(sabrpg[AB].money) < 1000) return reply("Vc não possui saldo suficiente para efetuar essa compra...")
for(i = 0; i < 12; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`12 galos comprado com sucesso`)
}
} else {
reply(`Não é possível comprar essa quantidade de galos...`)
}
break

case 'vendergalo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que um galo...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galos.length)) return reply(`Não é possível vender um número maior do que a quantidade de galos em seu galinheiro...`)
if(Number(galosrpg[AD].galos.length) === 0) return reply(`Você precisa comprar um galo antes...`)
for(i = 0; i < Number(args[0]); i++) {
galosrpg[AD].galos.splice(i, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galo${Number(args[0]) > 1 ? 's' : ''} vendido${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliado${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'comprargalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(!q) return reply("Coloque a quantidade de galinhas que deseja comprar...")
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível comprar menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
if(Number(args[0]) > Number(Number(galosrpg[AD].level) * 2)) return reply(`Não é possível comprar +${args[0]} galinhas, pois excede o limite de ${Number(galosrpg[AD].level) * 2} galinhas em seu galinheiro...\nCaso queira aumentar o tamanho do seu galinheiro, use o comando ${prefix}upgalo`)
if(Number(sabrpg[AB].money) < Number(Number(args[0]) * 100)) return reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} ${Number(args[0]) > 1 ? "irão" : "irá"} custar R$ ${Number(Number(args[0]) * 100).toFixed(2)}, e este valor excede o saldo monetário em sua conta...`)
GG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(GG) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(Number(args[0]) * 100)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} comprada${Number(args[0]) > 1 ? 's' : ''} com sucesso...`)
break

case 'vendergalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar uma galinha antes...`)
if(!q) return reply(`Defina a quantidade de galinhas que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galinhas)) return reply(`Não é possível vender um número maior do que a quantidade de galinhas em seu galinheiro...`)
if(Number(galosrpg[AD].galinhas) === 0) return reply(`Você precisa comprar uma galinha antes...`)
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} vendida${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliada${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink':
case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("[❗] aguarde uns minutinho estou processado");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=${API_SANDRO_MD}`);
sandro.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'cruzargg':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].galos.length) === 0) return reply("Você não possui galos...🐓 É necessário ao menos 1 galo para cruzar.")
if(Number(galosrpg[AD].galinhas) === 0) return reply("Você não possui galinhas...🐔 É necessário ao menos 1 galinha para cruzar.")
if(Number(galosrpg[AD].ovos) < Number(Number(galosrpg[AD].level * 2))) {
alecruz = Math.floor(Math.random() * 100)
if(alecruz > 50) {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
galosrpg[AD].durabilidade = Number(QD) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = "Não houve sucesso no cruzamento das aves"
} else {
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sua galinha não estava pronta para o cruzamento, e acabou morrendo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} galinha${Number(galosrpg[AD].galinhas) > 1 ? `s` : ``} 🐔` : ``}`
}
} else {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
QO = galosrpg[AD].ovos
galosrpg[AD].durabilidade = Number(QD) - 1
galosrpg[AD].ovos = Number(QO) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo...
Use ${prefix}chocarovo para tentar a sorte`
} else {
QG = galosrpg[AD].galinhas
QO = galosrpg[AD].ovos
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].ovos = Number(QO) + 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo, mas a sua galinha morreu no processo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} ${Number(galosrpg[AD].galinhas) > 1 ? `${galosrpg[AD].galinhas} galinhas` : `1 galinha`}` : ``}`
}
}
reply(`${resp}`)
} else {
reply(`Você atingiu a quantidade máxima de ovos em seu galinheiro... Use ${prefix}chocarovo para choca-los`)
}
break

case 'chocarovo': 
case 'chocar': 
case 'ovo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].ovos) <= 0) return reply("Você não possui ovos para chocar...")
if(Number(galosrpg[AD].galos.length) >= Number(Number(galosrpg[AD].level) * 5)) return reply("Todos os seus slots já estão na quantidade máxima..")
aleovo = Math.floor(Math.random() * 100)
if(aleovo > 40) {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sem sucesso ao tentar chocar o ovo!😿")
} else {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sucesso, ovo chocado deu origem a +1 galo para o seu galinheiro 😸☝🏽")
}
break

case 'galinheiro':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
setTimeout(() => {reagir(from, "🐔")}, 300)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
totalG = galosrpg[AD].galos
let medvida = 0
let medvic = 0
let medder = 0
for(i = 0; i < totalG.length; i++) {medvida += totalG[i].vida
if(Number(totalG[i].vigalo) > 0) {medvic += totalG[i].vigalo}
if(Number(totalG[i].degalo) > 0) {medder += totalG[i].degalo}
}
if(Number(galosrpg[AD].galos.length) > 0) {
TT1 = `${Number(Number(`${medvida}`) / Number(galosrpg[AD].galos.length)).toFixed(0)}`
TT2 = `${Number(Number(`${medvic}`) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}/${Number(Number(Number(`${medvic}`) + Number(`${medder}`)) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}`
TT3 = `${Number(Number(`${medvic}`) / Number(Number(`${medvic}`) + Number(`${medder}`)) * 100).toFixed(1)}%`
} else {
TT1 = `0`
TT2 = `0/0`
TT3 = `0.0%`
}
txt = `Olá *${sender.split("@")[0]}*, aqui está as informações sobre seu galinheiro!\n• Seu galinheiro está atualmente no level: *${galosrpg[AD].level}*\n——\n• [🚧] Área total do Galinheiro: *${Number(galosrpg[AD].level) * Number(galosrpg[AD].level)}m²*\n——\n• [🏡] *Habitantes do seu Galinheiro:*\n• Quantidade de Galo(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galos.length}/${Number(galosrpg[AD].level) * 5}*\n• Quantidade de Galinha(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galinhas}/${Number(galosrpg[AD].level) * 2}*\n• Quantidade de Ovo(s) que as suas galinhas colocaram: *${galosrpg[AD].ovos}/${Number(galosrpg[AD].level) * 2}*\n• Expectativa média de vida de seus bichinhos: *${TT1}*\n——\n• [🏆] *Médias e Porcentagens:*\n• Sua média de vitórias conquistadas por seu(s) bichinho(s): *${TT2}*\n• Sua média percentual atualmente em seu galinheiro: *${TT3}*`
mention(txt);
break

case 'upgalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(Number(galosrpg[AD].level) * 100)) return reply(`Você não possui saldo suficiente para efetuar essa compra...`)
if(Number(galosrpg[AD].level) < 6) {
quant = galosrpg[AD].level
galosrpg[AD].level = Number(quant) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu galinheiro foi upado para o level ${galosrpg[AD].level} com sucesso...`)
} else {
reply(`Seu galinheiro está no level máximo!😿 Não é possível aumentar!`)
}
break

case 'galo':
case 'galos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes!`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
galosH = moment.tz('America/Sao_Paulo').format('HH')
galosD = moment.tz('America/Sao_Paulo').format('DD')
galosM = moment.tz('America/Sao_Paulo').format('MM')
if(Number(galosrpg[AD].galos.length) > 0) {
if(!q) return reply(`Vix lek, cê caiu em uma briga ilegal de galos...🐔 Faça logo a sua aposta, e venha dançar!`)
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa aposta...`)
if(Number(args[0]) > 100) return reply("Não é possível apostar mais que R$ 100.00 em uma briga ilegal e clandestina...")
if(Number(args[0]) < 1) return reply("Deixa de ser pobre lek")
if(Number(galosrpg[AD].brigaL) <= 0) return reply("Chega de brigas por agora... Volte mais tarde")
if(Number(galosH) > Number(galosrpg[AD].brigaH) && Number(galosrpg[AD].brigaD) === Number(galosD) && Number(galosrpg[AD].brigaM) === Number(galosM) && Number(galosrpg[AD].brigaL) <= 0) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Bem vindo (a) de volta, hora de brigar...")
}
if(Number(galosD) > Number(galosrpg[AD].brigaD) && Number(galosrpg[AD].brigaM) === Number(galosM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar ?`)
}
if(Number(galosM) > Number(galosrpg[AD].brigaM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
galosrpg[AD].brigaM = galosM
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar?`)
}
if(Number(galosrpg[AD].brigaD) == Number(galosD) && Number(galosrpg[AD].brigaM) == Number(galosM) && Number(galosrpg[AD].brigaL) > 0) {
galosgeral = galosrpg[AD].galos
alegalo = galosgeral[Math.floor(Math.random()*galosgeral.length)]
sandrobot = Math.floor(Math.random()*100)
if(Number(sandrobot) > 30) {
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CD = alegalo.degalo
alegalo.vida = Number(VD) - 1
alegalo.degalo = Number(CD) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `Seu galo perdeu a briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)}`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `O galo inimigo matou o seu galo na briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)} ${Number(galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length) > 1 ? `\nFelizmente, você ainda possui ${galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length}` : ``}`
}
JH = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg
JH2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
JH3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg = Number(JH) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(JH2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(JH3) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigatxt)
//ganhar
} else {
//vida > 0
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CV = alegalo.vigalo
alegalo.vida = Number(VD) - 1
alegalo.vigalo = Number(CV) + 1
if(Number(alegalo.degalo) > 0) {
NN = alegalo.degalo
alegalo.degalo = Number(NN) + 1
}
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = `Seu galo venceu a briga!🐓 Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = ` Seu galo venceu a briga!🐓 Mas foi sequestrado e morto no caminho... Felizmente, você levou o dinheiro.\n• Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
}
KL = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg
KL2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
KL3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg
KL4 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg = Number(KL) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(KL2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg = Number(KL3) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(KL4) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigawin)
}
}
} else {
reply(`Você não possui galos! 🐓😿`)
}
break

case 'cassino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
horacass = moment.tz('America/Sao_Paulo').format('HH')
diacass = moment.tz('America/Sao_Paulo').format('DD')
mmcass = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(sabrpg[AB].limiteC) === 0 && Number(sabrpg[AB].horaC) === Number(horacass)) return reply(`*Você já apostou muito hoje...* Suas chances estão esgotadas! Por favor, volte mais tarde! 😔😭`)
HC = Number(sabrpg[AB].horaC) + 1
//acabou o limite...
if(Number(horacass) > Number(sabrpg[AB].horaC) && Number(sabrpg[AB].diaC) === Number(diacass) && Number(sabrpg[AB].mC) === Number(mmcass)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`😝🤪 Mas já mlk? Bora apostar então, eu ainda vou sugar muito teu dinheiro!`)
}
//passar do dia pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(diacass) > Number(sabrpg[AB].diaC)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`💰🌟 ${tempo} caro jogador, como está a sua sorte hj?`)
}
//passar do mês pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(mmcass) > Number(sabrpg[AB].mC)) {
sabrpg[AB].limiteC = 30
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
sabrpg[AB].mC = mmcass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`📆🗣 Primeira aposta do mês? Eu ainda vou sugar muito teu dinheiro todo...`)
}
if(Number(sabrpg[AB].limiteC) > 0) {
if(!q) {
return reply(`Você deve escolher uma quantia para apostar... Ex: ${prefix+command} 100 _(você estará apostando R$ 100.00)_`)
}
if(Number(args[0]) < 10) return reply(`Não é possível apostar menos que R$ 10.00`)
if(Number(args[0]) > 20000) return reply(`Não é possível apostar mais que R$ 20000.00! 😿`)
if(!Number(args[0])) return reply(`*${args[0]}* não é número! 😿`)
frutasC = JSON.parse(fs.readFileSync("./arquivos/json/slots.json"));
resulC = `${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]}`
if(resulC == `🦴 : 🦴 : 🦴`) {
CC = Number(sabrpg[AB].limiteC) - 1
sabrpg[AB].money = 50
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`• *[${resulC}]* - Óia a bruxa passando... Todo o dinheiro da sua conta agora é dela!`)
}
if(resulC == `🍫 : 🍫 : 🍫`){cmrpg = 1000};
if(resulC == `🍔 : 🍔 : 🍔`){cmrpg = 600};
if(resulC == `🥩 : 🥩 : 🥩`){cmrpg = 400};
if(resulC == `🍕 : 🍕 : 🍕`){cmrpg = 250};
if(resulC == `🌶️ : 🌶️ : 🌶️`){cmrpg = 200};
if(resulC == `🍪 : 🍪 : 🍪`){cmrpg = 100};
if(resulC == `🍗 : 🍗 : 🍗`){cmrpg = 80};
if(resulC == `🌭 : 🌭 : 🌭`){cmrpg = 70};
if(resulC == `🥞 : 🥞 : 🥞`){cmrpg = 60};
if(resulC == `🥓 : 🥓 : 🥓`){cmrpg = 50};
if((resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`)){cmrpg = 40};
if((resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)){cmrpg = 30}
if((resulC == `🍫 : 🍫 : 🍫`) || (resulC == `🍔 : 🍔 : 🍔`) || (resulC == `🥩 : 🥩 : 🥩`) || (resulC == `🍕 : 🍕 : 🍕`) || (resulC == `🌶️ : 🌶️ : 🌶️`) || (resulC == `🍪 : 🍪 : 🍪`) || (resulC == `🍗 : 🍗 : 🍗`) || (resulC == `🌭 : 🌭 : 🌭`) || (resulC == `🥞 : 🥞 : 🥞`) || (resulC == `🥓 : 🥓 : 🥓`) || (resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`) || (resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)) {
var Vitória = "Você acaba de ganhar"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var TT = Number(args[0]) * Number(cmrpg)
var TC = Number(TT) + Number(args[0])
var VT = Number(MR) + Number(TC) * 5
var Ctxt = `R$ ${Number(TC).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
var Vitória = "Você perdeu! Como punição, você perderá"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var VT = Number(MR) - Number(args[0])
var Ctxt = `R$ ${Number(args[0]).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
const cassino = `• *[${resulC}]* - ${Vitória} ${Ctxt}` 
reply(cassino)
}
break

case 'dadoapostado':
setTimeout(() => {reagir(from, "🎲")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
var [d1, d2] = q.split('/')
if(!d1) return reply(`Digite o valor do dado que você acha que irá cair... Após isso, coloque uma (/) ao lado e coloque uma quantia a ser apostada.\n–\nEx: ${prefix+command} 5/25 _(você estará apostando R$ 25.00 no dado 5)_`)
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d1)) return reply(`${d1} não é número!`)
if(!Number(d2)) return reply(`${d2} não é número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
if(Number(d1) < 1 || Number(d1) > 6) return reply(`Este número no dado não existe...`)
reply(`Sorteando dado(s)!`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/data/media/sticker/dados/${dadoale}.webp`)
if(Number(dadoale) === Number(d1)) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a previsão do dado.`)
}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a previsão do dado.`)
}, 5000)
}
break

case 'caracoroa': //BY : KAIRO MD 
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
var [d1, d2] = q.split('/')
if(Number(d2) > 1000) return reply("Tbm não pode passar de 1000 né meu camarada kkk")
if(d1.length == 0) return reply(`Digite o lado que a moeda que você acha que irá cair, ou seja, cara ou coroa... Após isso, coloque uma (/) ao lado e coloque a quantia que você deseja apostar, por exemplo: 1.\n–\n• Ex: ${prefix+command} cara/25 _(você estará apostando R$25.00 na posição do lado da cara da moeda)_`);
if(d1.toLowerCase() != "cara" && d1.toLowerCase() != "coroa") return reply("Só pode cara ou coroa.")
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d2)) return reply(`${d2} não é um número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
reply(`Sorteando... Aguarde, daqui a pouco o resultado sai!`)
ladosDaMoeda = ["coroa", "cara"];
pegarInfo = ladosDaMoeda[Math.floor(Math.random() * ladosDaMoeda.length)];
enviarfigu(`./database/data/media/sticker/caracoroa/${pegarInfo}.webp`)
if(pegarInfo === d1) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
}
break

case 'lojas_sc':
case 'lojas':
mention(`${tempo} *@${sender.split("@")[0]}*, bem vindo a minha loja de RPG!\n—–\n❱❱ Lojas de Cavalos: *${prefix}lojadecavalos*\n❱❱ Lojas de Galos: *${prefix}lojadegalos*\n—–\n🛍️ *Produtos:*\n*1.* Comprar Segurança *[R$ 600.00]*\n❑→ ${prefix}comprarsegurança 1 | Você consegue *40% de proteção*!\n*2.* Comprar Segurança *[R$ 1200.00]*\n❑→ ${prefix}comprarsegurança 2 | Você consegue *60% de proteção*!\n*3.* Comprar Segurança *[R$ 1800.00]*\n❑→ ${prefix}comprarsegurança 3 | Você consegue *80% de proteção*!`)
break

case 'lojadecavalos':
setTimeout(() => {reagir(from, "🐎")}, 300)
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
uparcavalo = `R$ ${Number(Number(cavalosrpg[AC].level)*200).toFixed(2)}`
} else {
uparcavalo = `Lv. Máx`
}
} else {
uparcavalo = `R$ 200.00`
}
txt = `${tempo} *@${sender.split("@")[0]}*, Seja bem vindo(a) à loja de cavalos:\n—\n❱❱ ${prefix}comprarestabulo *[R$ 500.00]* - De início é necessário você comprar.\n❱❱ ${prefix}upcavalo - Faça um upload em seu(s) cavalo(s). *[${uparcavalo}]*\n—\n🐎 *Comprar Cavalos:*\n❱❱ ${prefix}comprarcavalo 1 *[R$ 500.00]*\n❱❱ ${prefix}comprarcavalo 2 *[R$ 1000.00]*\n❱❱ ${prefix}comprarcavalo 3 *[R$ 1500.00]*\n❱❱ ${prefix}comprarcavalo 4 *[R$ 2000.00]*\n—\n🌾 *Equipamentos:*\n❱❱ ${prefix}comprarsela *[R$ 200.00]* - Compre uma sela para o seu cavalo.\n❱❱ ${prefix}cdcv3 *[R$ 200.00]* - Verifique o status atual de seu alazão.\n❱❱ ${prefix}atadura *[R$ 250.00]* - Caso tenha alguma fratura em alazão.\n—\n🏪 *Vendas:*\n❱❱ Para vender seu alazão, use o comando ao lado: *${prefix}vendercavalo*\n❱❱ Para vender seu estábulo, use o comando ao lado: *${prefix}venderestabulo*`
mention(txt)
break

case 'lojadegalos':
setTimeout(() => {reagir(from, "🐔")}, 300)
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].level) < 6) {
LV = `R$ ${Number(galosrpg[AD].level) * 100}.00`
} else {
LV = `Lv. Máx`
}
PC = LV
} else {
PC = `R$ 100.00`
}
txt = `*${tempo}* @${sender.split('@')[0]}, Seja bem vindo(a) à loja de galos:\n🐓🏷 *Loja de Galos:*\n❱❱ ${prefix}comprargalinheiro *[R$ 500.00]*\n❱❱ ${prefix}comprargalo 1 *[R$ 100.00]*\n❱❱ ${prefix}comprargalo 6 *[R$ 550.00]*\n❱❱ ${prefix}comprargalo 12 *R$ 1000.00]*\n❱❱ ${prefix}comprargalinha *[R$ 100.00]*\n❱❱ ${prefix}upgalo *[${PC}]*\n––\n🐓🏷 *Vendas:*\n❱❱ Venda de Galos: *${prefix}vendergalo (quantidade)*\n❱❱ Venda de Galinhas: *${prefix}vendergalinha (quantidade)*`
mention(txt)
break

case 'image_viewonce':
sandro.sendMessage(from, {image: {url: fotobot}, viewOnce: true}, {quoted: info});
break;

case 'audio_viewonce':
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/ytaudio?url=https://youtu.be/o4lB81AnDSM?si=9zXDqAWwDNPDPkTU&apikey=${API_KEY_sandro}`}, mimetype: "audio/mpeg", viewOnce: true}, {quoted: info});
break;

case 'video_viewonce':
sandro.sendMessage(from, {video: {url: `https://yurimodz-apis.xyz/api/dl/ytvideo?url=https://youtu.be/o4lB81AnDSM?si=9zXDqAWwDNPDPkTU&apikey=${API_KEY_sandro}`}, viewOnce: true}, {quoted: info});
break;

case 'text_newsletter':
sandro.sendMessage(from, {text: "Testando mensagem...", contextInfo: {forwardingScore: 1000000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363173003902460@newsletter"}}}, {quoted: info});
break;



//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : KAIRO MD)==\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return sandro.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sandro.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
sandro.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
sandro.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
sandro.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
sandro.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
sandro.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
sandro.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
sandro.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./arquivos/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
sandro.sendMessage(from, {audio: buffer, ptt:true}, {quoted: selo})
DLT_FL(rano)
})
})
}}}

if(JSON.stringify(music).includes(from)) {
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
BC = music[AB].usus.map(i => i.id).indexOf(sender)
if(budy2.toLowerCase().replace("á", "a") === `audio` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#sandroKey#", API_KEY_sandro)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
sandro.sendMessage(from, {audio: {url: link}, mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {reply(mess.error())})
} catch (e) {
reply(mess.error())
}
}
if(budy2.toLowerCase().replace("í", "i") === `video` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlVideo.replace("#sandroKey#", API_KEY_sandro)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
sandro.sendMessage(from, {video: {url: link}, mimetype: "video/mp4"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}
if(budy2.toLowerCase() === `doc` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#sandroKey#", API_KEY_sandro)
nome = music[AB].usus[BC].title
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
sandro.sendMessage(from, {document: {url: link}, fileName: nome+'.mp3', mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const cmdsticker = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

switch (cmdsticker) {
 
case '42,109,136,252,54,54,117,34,1,79,251,75,13,1,146,67,235,130,95,88,130,240,59,117,201,146,212,108,23,140,227,223':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
sandro.groupSettingUpdate(from, 'not_announcement')
break}

switch (cmdsticker) {

case '179,213,105,251,171,115,119,247,203,199,222,213,27,15,190,112,118,93,89,163,254,73,208,251,66,95,98,98,38,164,152,43':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
sandro.groupSettingUpdate(from, 'announcement')
break} 

//==================== COMEÇO DO AUTO RESPOSTA

if(isAutorepo) {

if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if (budy.includes("karalho") || budy.includes("Karalho") || budy.includes("KARALHO")) {
    const respostasKaralho = [
        "Eita, que palavrão pesado!",
        "Cuidado com as palavras, hein?",
        "Olha a educação, meu amigo!",
        "Calma aí! Vamos manter a paz.",
        "Precisa disso? Vamos conversar direito!"
    ];

    // Seleciona uma resposta aleatória
    const respostaAleatoria = respostasKaralho[Math.floor(Math.random() * respostasKaralho.length)];
    
    reply(respostaAleatoria);
}

if (budy.includes("porra") || budy.includes("Porra") || budy.includes("PORRA")) {
    const respostasPorra = [
        "Eita, olha o palavrão aí!",
        "Porra? Vamos pegar leve nas palavras!",
        "Que boca suja, hein?",
        "Calma lá! Tá bravo por quê?",
        "Olha o respeito, meu amigo!"
    ];

    // Seleciona uma resposta aleatória
    const respostaAleatoria = respostasPorra[Math.floor(Math.random() * respostasPorra.length)];
    
    reply(respostaAleatoria);
}

if (budy.includes("amor") || budy.includes("Amor") || budy.includes("AMOR")) {
    const respostasAmor = [
        "O amor é lindo, não é?",
        "Ah, o amor! Sempre tão inspirador.",
        "Sem amor, o mundo não seria o mesmo.",
        "Falar de amor aquece o coração.",
        "O amor é a resposta para tudo!"
    ];

    // Seleciona uma resposta aleatória
    const respostaAleatoria = respostasAmor[Math.floor(Math.random() * respostasAmor.length)];
    
    reply(respostaAleatoria);
}

if (budy.includes("Toma no cu") || budy.includes("TOMA NO CU") || budy.includes("Vai toma no cu")) {
    const respostasOfensivas = [
        "Olha o nível, hein?",
        "Respeita aqui, por favor.",
        "Eita! Que agressividade!",
        "Vamos manter a calma, tá?",
        "Precisa falar assim? Paz é melhor!"
    ];

    // Seleciona uma resposta aleatória
    const respostaAleatoria = respostasOfensivas[Math.floor(Math.random() * respostasOfensivas.length)];
    
    reply(respostaAleatoria);
}

if(budy.includes("Puta") || budy.includes("PUTA") || budy.includes("PUTONA") || budy.includes("puta")) {
    const respostasPalavrao = [
        "Que boca suja, hein?",
        "Olha o palavrão aí!",
        "Pega leve com as palavras!",
        "Eita! Vamos manter o respeito.",
        "Você fala assim com todo mundo?"
    ];

    // Seleciona uma resposta aleatória
    const respostaAleatoria = respostasPalavrao[Math.floor(Math.random() * respostasPalavrao.length)];
    
    reply(respostaAleatoria);
}

if(budy.includes("Sandro") || budy.includes("sandro") || budy.includes("SANDRO") || budy.includes("sandroo")) {
    const mensagens = [
        "O Sandro é meu criador.",
        "Sandro é incrível! Sempre cuida de mim.",
        "Se tem alguém especial, esse alguém é o Sandro.",
        "Eu só existo graças ao Sandro.",
        "O Sandro sabe como fazer as coisas acontecerem!"
    ];

    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    reply(mensagemAleatoria);
}

if (budy2.includes("boa noite")) {
    const mensagens = [
        "Boa noite! Durma bem e sonhe bonito!",
        "Espero que você tenha uma noite tranquila!",
        "Boa noite! Que seus sonhos sejam doces!",
        "Durma bem! Amanhã será um novo dia cheio de oportunidades.",
        "Boa noite! Aproveite para descansar e recarregar as energias."
    ];

    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    reply(mensagemAleatoria);
}

if (budy2.includes("boa tarde")) {
    const mensagens = [
        "Boa tarde! Espero que sua tarde seja cheia de paz e realizações!",
        "Boa tarde! Aproveite cada momento e faça desta tarde algo especial.",
        "Boa tarde! Que a energia do dia continue te motivando até o fim do dia.",
        "Boa tarde! Que sua tarde seja leve e cheia de boas surpresas.",
        "Boa tarde! Continue firme, o dia ainda reserva coisas incríveis para você!"
    ];

    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    reply(mensagemAleatoria);
}

if (budy2.includes("bom dia")) {
    const mensagens = [
        "Bom dia! Que seu dia seja repleto de alegrias e realizações!",
        "Bom dia! Aproveite cada momento e faça de hoje um dia especial.",
        "Bom dia! Que a luz do sol ilumine seu caminho e traga boas energias!",
        "Bom dia! Sorria e espalhe coisas boas ao seu redor!",
        "Bom dia! Um novo dia, uma nova chance de conquistar seus sonhos."
    ];

    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    reply(mensagemAleatoria);
}

if(budy.includes("vamos namorar") || budy.includes("Vamos namorar") || budy.includes("namorar cmg") || budy.includes("que namorar comigo") || budy.includes("Quer namorar cmg") || budy.includes("Namorar cmg")){
if (SoDono) {
sandro.sendPresenceUpdate('composing', from)
audiomenu = await fs.readFileSync("./database/audios/gracinha.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
} else {
sandro.sendPresenceUpdate('composing', from)
audiomenu = await fs.readFileSync("./database/audios/possibilidade.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await sleep (5000) 
reply(`Mais prefiro o ${NickDono} msm, me desculpa aí, quem sabe na próxima?`)
sleep (7000)
blabla = fs.readFileSync('./database/sticker/yurimodz.webp')
sandro.sendMessage(from, { sticker: blabla },{ quoted: selo})
}
}

if(budy.includes("te amo") || budy.includes("Te amo") || budy.includes("TE AMO") || budy.includes("te amo")){
blabla = fs.readFileSync('./database/sticker/teamo.webp')
sandro.sendMessage(from, { sticker: blabla },{ quoted: selo})
await sleep (1000)
audiomenu = await fs.readFileSync("./database/audios/teamo.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("meu amor") || budy.includes("Meu amor")){
audiomenu = await fs.readFileSync("./database/audios/beijo.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("tudo bem") || budy.includes("Tudo bem") || budy.includes("TUDO BEM") || budy.includes("tudo bem")) { 
blabla = fs.readFileSync('./database/sticker/bem.webp')
sandro.sendMessage(from, {sticker: blabla}, {quoted: selo})
await sleep (2500)
audiomenu = await fs.readFileSync("./database/audios/bem.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("pica") || budy.includes("meu pau") || budy.includes("rola") || budy.includes("Pika")){
audiomenu = await fs.readFileSync("./database/audios/pau.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("gostosa") || budy.includes("Gostosa") || budy.includes("GOSTOSA") || budy.includes("Totosa")){
if (SoDono) {
audiomenu = await fs.readFileSync("./database/audios/gostosa.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
blabla = fs.readFileSync('./database/sticker/gostosamestre.webp')
sandro.sendMessage(from, {sticker: blabla}, {quoted: info})
} else if (!isGroupAdmins) {
blabla = fs.readFileSync('./database/sticker/gostosa.webp')
sandro.sendMessage(from, {sticker: blabla}, {quoted: selo})
} else {
audiomenu = await fs.readFileSync("./database/audios/gostosa1.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
}

if(budy.includes("estou triste") || budy.includes("Estou triste") || budy.includes("ESTOU TRISTE") || budy.includes("eu estou triste")){
bla = fs.readFileSync("./database/sticker/triste.webp")
sandro.sendMessage(from, {sticker: bla}, {quoted: selo})
await sleep (4000)
sandro.sendPresenceUpdate('composing', from)
reply("POIS BEM N FIQUE ASSIM,OUVE ESSA MÚSICA PRA TE ALEGRAR")
audiomenu = await fs.readFileSync("./database/audios/sozinho.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("corno") || budy.includes("Corno")){
audiomenu = await fs.readFileSync("./database/audios/corno.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}


if(budy.includes("Dono da sandrozinha") || budy.includes("dono da sandro") || budy.includes("Dono da sandro") || budy.includes("dono da sandrozinha")) {
reply("Enviando o contato do meu dono...")
await sleep(1500)
                let vcard =
                    'BEGIN:VCARD\n'
                    + 'VERSION:3.0\n'
                    + 'N:;KAIRO MD;;;\n'
                    + 'FN:KAIRO MD\n'
                    + 'item1.TEL;waid=557582599462:557582599462\n'
                    + 'item1.X-ABLabel:Celular\n'
                    + 'END:VCARD'
    await sandro.sendMessage(from, 
                { 
                contacts: { 
                displayName: 'KAIRO MD', 
                contacts: [{vcard}] 
                }
                })
                await sandro.sendMessage(from, {text: `*🛡️ O contato dele caso você use imune: wa.me/+557582599462*`}, {quoted: info})
}


if(budy.includes("nada não") || budy.includes("né nada não") || budy.includes("NÉ NADA NÃO") || budy.includes("nada n") || budy.includes("Nada não")) {
bla = fs.readFileSync("./database/sticker/teodeio.webp")
sandro.sendMessage(from, {sticker: bla}, {quoted: selo})
await sleep (2000)
sandro.sendPresenceUpdate('composing', from)
reply("ENTÃO PARA DE ME CHAMAR PORRA")
}

if(budy.includes("hentai") || budy.includes("Hentai") || budy.includes("HENTAI") || budy.includes("hentai") || budy.includes("hentaii")){
blabla = fs.readFileSync('./database/sticker/hentai.webp')
sandro.sendMessage(from, { sticker: blabla },{ quoted: selo})
}

if(budy.includes("vadia") || budy.includes("Vadia") || budy.includes("VADIA") || budy.includes("vadia")) { 
audiomenu = await fs.readFileSync("./database/audios/vadia.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await sleep (1500)
bla = fs.readFileSync("./database/sticker/vadia2.webp")
sandro.sendMessage(from, {sticker: bla}, {quoted: info})
}

if(budy.includes("au au") || budy.includes("Au au") || budy.includes("AU AU") || budy.includes("Auuu") || budy.includes("Quer namorar cmg")){
audiomenu = await fs.readFileSync("./database/audios/auau.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await sleep (2000) 
blabla = fs.readFileSync('./database/sticker/auau.webp')
sandro.sendMessage(from, { sticker: blabla },{ quoted: selo})
}

if(budy.includes("bot chato") || budy.includes("Bot chato") || budy.includes("Sua chata") || budy.includes("Chata")){ 
bla = fs.readFileSync("./database/sticker/chato.webp")
sandro.sendMessage(from, {sticker: bla}, {quoted: info})
await sleep (1000)
audiomenu = await fs.readFileSync("./database/audios/chato.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("gay") || budy.includes("Gay")){
audiomenu = await fs.readFileSync("./arquivos/audio/audio1.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("maconha") || budy.includes("Maconha") || budy.includes("Maconheiro")){
audiomenu = await fs.readFileSync("./arquivos/audio/audio2.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("bugado") || budy.includes("Bugado")){
audiomenu = await fs.readFileSync("./arquivos/audio/bug2.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("pix") || budy.includes("Pix")){
audiomenu = await fs.readFileSync("./arquivos/audio/audio4.mp3")
sandro.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}

if(budy.includes("fofo") || budy.includes("Fofo") || budy.includes("FOFO") || budy.includes("fofo")){
blabla = fs.readFileSync('./database/sticker/fofa.webp')
sandro.sendMessage(from, { sticker: blabla },{ quoted: selo})
await sleep (2000) 
reply("Não me chama de fofo você que é fofa(o)")
}

 if(budy.includes("Puta") || budy.includes("puta")) {{}
bla = fs.readFileSync("./database/sticker/puta.webp")
sandro.sendMessage(from, {sticker: bla}, {quoted: info})
}
}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//=========[--ANTI PALAVRÃO --]==========\\

if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return
sandro.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
sandro.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
sandro.sendMessage(from, {text: mess.permissionDenied_rUser()})
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
muehe = await simih(budy)
sandro.sendMessage(from, {text: muehe}, {quoted: info}).catch(e => {
reply("Não entendi! Por favor, me explique!") 
})
}


if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) sandro.sendMessage(from, {text: sami}, {quoted: info})
}
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if (isCmd) {
  reagir(from, "‼️");

  // Pega a hora atual em horário de Brasília
  const data = new Date();
  const horaBrasil = data.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const thumbnail = await getBuffer('https://i.ibb.co/CKXwf3ss/sandrobot-1753455081623.jpg');

  sandro.sendMessage(from, {
    text: mess.commandNotFound(horaBrasil, prefix),
    contextInfo: {
      externalAdReply: {
        title: `💙Bot: ${NomeDoBot}`,
        body: `💙Olá ${pushname}, comando não existente no sistema.`,
        thumbnail: thumbnail,
        mediaType: 1,
        sourceUrl: `https://wa.me/sandrobot`
      }
    },
    mentions: [sender]
  }, { quoted: info });
}
}
}
}

//========================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`



async function FunctionEnvMsg() {
sandro.sendMessage(nmrdn, {text: `O que é buceta, que tu me chama?`})
}

startFunctionSab().catch(async(error) => {
if(JSON.stringify(error).includes(API_KEY_sandro)) {
return console.log("A api caiu ou não foi possivel executar esta ação: " + error)
} else if(String(error).includes("Erro: aborted")) {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log("Ocorreu um erro: " + error)
}
})

}
}
}

//===== [Início - Área de Atualizações] =====\\

fs.watchFile('./menus/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[file]
require(file)
})
//
//===== [Fim - Área de Atualizações] =====\\

startConnect().catch(async(error) => {
return console.log(colors.red("Aparentemente, ocorreu um erro ao obter a conexão entre o bot e o WhatsApp Web: " + error))
})
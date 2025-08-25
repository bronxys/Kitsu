/*｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼
𝙀𝙐 𝙎𝘼𝙉𝘿𝙍𝙊 𝘽𝙊𝙏 𝙉𝘼𝙊 𝙋𝙀𝙍𝙈𝙄𝙏𝙊 𝙍𝙀𝙑𝙀𝙉𝘿𝙀𝙍 𝙊𝙐 𝙍𝙀𝙋𝘼𝙎𝙎𝘼𝙍 𝙀𝙎𝙎𝘼 𝙑𝙀𝙍𝙎𝘼𝙊.
｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼*/

const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./exports.js');

const { mess, menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache, insert, response, pushnames } = require('./exports.js');

const { NomeDoBot, NickDono, prefix } = require("./settings/settings.json");

var { fundo1, fundo2 } = require("./settings/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("sim");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciarsandro() {
var folderUserAuth = "./qr-code";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { version, isLatest } = await fetchLatestBaileysVersion();

const originalConsoleInfo = console.info;

console.info = function () {
const message = util.format(...arguments);
const forbiddenStrings = [
"Closing session: SessionEntry", "Removing old closed session: SessionEntry {", "Another forbidden string", "Closing stale open session for new outgoing prekey bundle"];
if (forbiddenStrings.some(msg => message.includes(msg))) {
return;
}
originalConsoleInfo.apply(console, arguments);
};

const sandro = makeWASocket({
version,
auth: state,
syncFullHistory: true,
printQRInTerminal: !pairingCode,
qrTimeout: 180000,
logger: P({ level: 'fatal' }),
browser: ["Chrome (Linux)", "", ""],
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message?.interactiveMessage);
if(requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {}},
...message}}}}
return message}});

const PhoneNumber = require('awesome-phonenumber')

if (pairingCode && !sandro.authState.creds.registered) {
try {
let number = await question(`${colors.gray("Exemplo do número para realizar a conexão do bot: +55 31 7259-5934. (Coloque do jeito que está no WhatsApp)")}${colors.yellow("\n• Insira no parâmetro o número de telefone que você deseja conectar o bot: ")}`);
number = number.replace(/[^0-9]/g, "");
let code = await sandro.requestPairingCode(number);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.yellow("• Código para conectar o bot e desfrutar de suas imensas funcionalidades: ")}` + colors.white(code));
rl.close();
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
}
}

sandro.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var zero2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${zero2.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${zero2.id}.json`));

const getName = (number) => {
ps = number.includes(`@s.whatsapp.net`) ? number : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
returnPush = JSON.stringify(pushnames).includes(ps) ? pushnames[pushnames.map(i => i.id).indexOf(ps)].nick : "usuário(a)"
return returnPush /* Créditos: @Matheus */
}

if(zero2.participants[0].startsWith(sandro.user.id.split(':')[0])) return;

try { var grpmdt = await sandro.groupMetadata(zero2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await sandro.groupMetadata(zero2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(zero2.action == 'add'){
num = zero2.participants[0];
if(nescessario.listanegraG.includes(num)){
await sandro.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban...'});
sandro.groupParticipantsUpdate(GroupMetadata_.id, [zero2.participants[0]], 'remove');
return;
}}
if(zero2.action == 'remove'){
num = zero2.participants[0];
}
if(zero2.action == 'add' && jsonGp[0].listanegra.includes(zero2.participants[0])){
await sandro.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço...'});
sandro.groupParticipantsUpdate(GroupMetadata_.id, [zero2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && zero2.action === 'add' && !zero2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await sandro.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
sandro.groupParticipantsUpdate(GroupMetadata_.id, [zero2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO - WELCOME! 🐢✨️
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await sandro.groupMetadata(zero2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !zero2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO! 
try {
ppimg = await sandro.profilePictureUrl(zero2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
try {
ppgp = await sandro.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}
ppg = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`);

try {
ppuser = await sandro.profilePictureUrl(from, 'image')
} catch {
ppuser = 'https://tinyurl.com/yx93l6da'
}
// pega foto do grupo
try {
ppgroup = await sandro.profilePictureUrl(from, 'image')
} catch {
ppgroup = 'https://tinyurl.com/yx93l6da'
}

try {
var ppUrl = await sandro.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
ppgrupo = await axios.get(`https://tinyurl.com/api-create.php?url=${ppUrl}`);

if(zero2.action === 'add') {

if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+zero2.participants[0].split('@')[0])
.replace('#numerobot#', sandro.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(zero2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
sandro.sendMessage(mdata_2.id, {image: {url:`http://br1.bluidhoster.tech:8943/welcome?&nome=${zero2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=${encodeURI(mdata_2.subject)}&apitoken=LucasMod`},
mentions: zero2.participants, caption: teks});
DLT_FL(ran);
} else if(zero2.action === 'remove') {
mem = zero2.participants[0];
try {
ppimg = await sandro.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', zero2.participants[0].split('@')[0])
.replace('#numerobot#', sandro.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(zero2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
sandro.sendMessage(mdata_2.id, {image: {url:`http://br1.bluidhoster.tech:8943/goodbye?nome=${zero2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=${encodeURI(mdata_2.subject)}&apitoken=LucasMod`}, caption: teks, mentions: zero2.participants})
DLT_FL(ran)
}
}
  
if (jsonGp[0].wellcome[1].bemvindo2 == true) {
  if (zero2.action === 'add') {
    let teks;
    if (isWelcomed2) {
      teks = jsonGp[0].wellcome[1].legendabv
        .replace('#hora#', time)
        .replace('#nomedogp#', mdata_2.subject)
        .replace('#numerodele#', zero2.participants[0].split('@')[0])
        .replace('#numerobot#', sandro.user.id)
        .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
        .replace('#descrição#', groupDesc);
    } else {
      teks = welcome2(zero2.participants[0].split('@')[0], mdata_2.subject);
    }

    const jidNovo = zero2.participants[0];
    const userPhoto = await sandro.profilePictureUrl(jidNovo, 'image').catch(() => 'https://i.ibb.co/k2k7rv6V/sandrobot-1752772181582.jpg');
    
    // Recupera o nome da pessoa que entrou
    const contato = await sandro.onWhatsApp(jidNovo);
    const nomeUsuario = encodeURIComponent(contato[0]?.notify || jidNovo.split('@')[0]);

    const grupo = encodeURIComponent(mdata_2.subject);

    const imageUrl = `https://zero-two-apis.com.br/welcome?titulo=Bem-vindo&nome=${nomeUsuario}&perfil=${encodeURIComponent(userPhoto)}&fundo=https://i.ibb.co/VcrQxGGK/sandrobot-1752771185052.jpg&grupo=${grupo}`;

    try {
      await sandro.sendMessage(mdata_2.id, {
        image: { url: imageUrl },
        caption: teks,
        mentions: zero2.participants
      });
    } catch (err) {
      console.error('Erro ao carregar imagem da API, enviando apenas texto:', err.message);

      await sandro.sendMessage(mdata_2.id, {
        text: teks,
        mentions: zero2.participants
      });
    }

  } else if (zero2.action === 'remove') {
    const mem = zero2.participants[0];
    let teks;

    if (isByed2) {
      teks = jsonGp[0].wellcome[1].legendasaiu
        .replace('#hora#', time)
        .replace('#nomedogp#', mdata_2.subject)
        .replace('#numerodele#', mem.split('@')[0])
        .replace('#numerobot#', sandro.user.id)
        .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
        .replace('#descrição#', groupDesc);
    } else {
      teks = bye2(mem.split('@')[0]);
    }

    sandro.sendMessage(mdata_2.id, {
      text: teks,
      mentions: zero2.participants
    });
  }
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./sandro.js")(upsert, sandro)
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
  console.log(colors.green("Você precisará de um 2° celular, para tirar foto do qr-code, para depois escanear a foto que tirou.."))
}  

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("[Error: 428] - Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente..."));
} else if(shouldReconnect == 401) {
exec("cd database && rm -rf qr-code")
console.log(colors.red("A autenticação com WhatsApp Web falhou! Por favor, reinicie e realize a autenticação novamente."))
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! Restart necessário para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore..."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("[Error: 503] - Ocorreu um erro desconhecido ao executar o bot novamente ou sua primeira inicialização."));
} else if(shouldReconnect == 502) {
console.log(colors.grey("[Error: 502] - A conexão com a internet, está querendo cair..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("[Error: 408] - Conexão fraca, mais vc em e essa sua net movida a carvão..."))
} else {
console.log(colors.yellow(`[CONEXÃO CLOSED] - A conexão entre o WhatsApp foi fechada, por motivos de: ${lastDisconnect?.error}`))
};
iniciarsandro();
}
break;

case 'connecting':
console.log(colors.yellow(`[SANDRO-BOT] RECONECTANDO / INICIANDO - ${date} ${time}`))
break;


case 'open':
    console.log(banner3.string);   
    console.log(banner2.string);  
    console.log(colors.yellow(`${NomeDoBot} conectado! prefixo [ ${prefix} ] Canal: Sandro bot`));
    await sandro.sendPresenceUpdate("available");
    await sandro.updateProfileStatus(`Sandro-bot conectado!`);
    break;

default:
break
}}

if(events["creds.update"]) {await saveCreds()};
require("./sandro.js")(sandro, folderUserAuth);
})}

iniciarsandro().catch(async(error) => {
   return console.log(colors.red("Ocorreu um erro ao inicializar o bot: " + error))
})
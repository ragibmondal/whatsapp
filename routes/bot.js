const _0xacebd0 = _0x181a; (function (_0x595f82, _0x162888) { const _0x25957e = _0x181a, _0x5df822 = _0x595f82(); while (!![]) { try { const _0x478918 = -parseInt(_0x25957e(0x1b4)) / 0x1 * (-parseInt(_0x25957e(0x187)) / 0x2) + -parseInt(_0x25957e(0x196)) / 0x3 * (-parseInt(_0x25957e(0x1a8)) / 0x4) + -parseInt(_0x25957e(0x1a7)) / 0x5 * (parseInt(_0x25957e(0x184)) / 0x6) + parseInt(_0x25957e(0x1b2)) / 0x7 + parseInt(_0x25957e(0x1ab)) / 0x8 + parseInt(_0x25957e(0x1af)) / 0x9 * (-parseInt(_0x25957e(0x1b0)) / 0xa) + parseInt(_0x25957e(0x197)) / 0xb * (-parseInt(_0x25957e(0x18b)) / 0xc); if (_0x478918 === _0x162888) break; else _0x5df822['push'](_0x5df822['shift']()); } catch (_0x446171) { _0x5df822['push'](_0x5df822['shift']()); } } }(_0x1434, 0x4fcfc)); function _0x181a(_0x3c2075, _0x4b18bf) { const _0x1434b9 = _0x1434(); return _0x181a = function (_0x181a1c, _0x36ef5c) { _0x181a1c = _0x181a1c - 0x182; let _0x9644c = _0x1434b9[_0x181a1c]; return _0x9644c; }, _0x181a(_0x3c2075, _0x4b18bf); } function _0x1434() { const _0x1c41f9 = ['destroy', '11208crhLBg', 'decode', '--no-sandbox', '419496YOwPkx', 'post', '--single-process', 'closing', '4383972XQbyik', '/get_one', 'out', 'json', 'query', 'get', 'exports', '\x27\x20WHERE\x20uid\x20=\x20\x27', '--no-zygote', 'map', 'bcrypt', '791853PTGHAX', '11ohmwzj', '--disable-accelerated-2d-canvas', 'log', 'QR\x20Generated', '../middlewares/user', 'UPDATE\x20bot_campaign\x20SET\x20qr_code\x20=\x20\x27', 'DELETE\x20FROM\x20bot_campaign\x20WHERE\x20uid\x20=\x20\x27', 'uid', 'message', 'Router', 'initialize', 'length', 'stringify', 'reply', 'whatsapp-web.js', 'express', '1010FzTbim', '4ghGwyc', '\x27,\x20\x27', 'auth_failure', '1335504XcAUNE', 'Db\x20query\x20error', '--disable-extensions', 'SELECT\x20*\x20FROM\x20bot_campaign\x20WHERE\x20uid\x20=\x20\x27', '200628OZuzbS', '170hfXPVx', '--no-first-run', '2718842lmcedd', '--disable-gpu', '3wCROGt', '../config/config', 'body', '--disable-dev-shm-usage']; _0x1434 = function () { return _0x1c41f9; }; return _0x1434(); } const router = require(_0xacebd0(0x1a6))[_0xacebd0(0x1a0)](), con = require(_0xacebd0(0x1b5)), bcrypt = require(_0xacebd0(0x195)), { isuser, checkbot } = require(_0xacebd0(0x19b)), moment = require('moment'), { Client, LocalAuth, MessageMedia } = require(_0xacebd0(0x1a5)); router[_0xacebd0(0x188)]('/add_one', isuser, checkbot, (_0x17eca9, _0x5de59d) => { const _0x5846f5 = _0xacebd0; var _0x27b47a = _0x5846f5(0x1ae) + _0x17eca9[_0x5846f5(0x185)][_0x5846f5(0x19e)] + '\x27'; con[_0x5846f5(0x18f)](_0x27b47a, (_0x1170c9, _0x479217) => { const _0x42bc47 = _0x5846f5; if (_0x1170c9) { console['log'](_0x1170c9), _0x5de59d['json']({ 'msg': _0x42bc47(0x1ac) }); return; } else { if (_0x479217[_0x42bc47(0x1a2)] > 0x0) { _0x5de59d[_0x42bc47(0x18e)]({ 'msg': 'You\x20have\x20already\x20a\x20bot\x20running\x20Please\x20logout\x20the\x20session\x20from\x20your\x20whstapp\x20app' }); return; } else { var _0x4e48f6 = 'INSERT\x20INTO\x20bot_campaign\x20(reply,\x20uid)\x20VALUES\x20(\x27' + JSON[_0x42bc47(0x1a3)](_0x17eca9[_0x42bc47(0x1b6)]['reply']) + _0x42bc47(0x1a9) + _0x17eca9[_0x42bc47(0x185)][_0x42bc47(0x19e)] + '\x27)\x20'; con[_0x42bc47(0x18f)](_0x4e48f6, (_0xf563f0, _0x25838f) => { const _0x2f815f = _0x42bc47; if (_0xf563f0) { console[_0x2f815f(0x199)](_0xf563f0), _0x5de59d[_0x2f815f(0x18e)]({ 'msg': 'Db\x20query\x20error' }); return; } else { const _0x2d89de = new Client({ 'puppeteer': { 'headless': !![], 'args': [_0x2f815f(0x186), '--disable-setuid-sandbox', _0x2f815f(0x1ad), _0x2f815f(0x182), _0x2f815f(0x198), _0x2f815f(0x1b1), _0x2f815f(0x193), _0x2f815f(0x189), _0x2f815f(0x1b3)] } }); _0x2d89de['on']('qr', _0x82ce21 => { const _0x5ec172 = _0x2f815f, _0x5bff8a = _0x5ec172(0x19c) + _0x82ce21 + _0x5ec172(0x192) + _0x17eca9[_0x5ec172(0x185)][_0x5ec172(0x19e)] + '\x27'; con[_0x5ec172(0x18f)](_0x5bff8a, (_0x212ec3, _0x5e93a8) => { const _0x5eaaeb = _0x5ec172; if (_0x212ec3) return { 'err': _0x212ec3, 'msg': _0x5eaaeb(0x1ac) }; else { console[_0x5eaaeb(0x199)]('added\x20qr'); return; } }), _0x5de59d[_0x5ec172(0x18e)]({ 'msg': _0x5ec172(0x19a), 'success': !![], 'qr': _0x82ce21 }); }), _0x2d89de['on']('ready', () => { const _0x234a0d = _0x2f815f; con['query']('UPDATE\x20bot_campaign\x20SET\x20login_status\x20=\x20\x271\x27\x20WHERE\x20uid\x20=\x20\x27' + _0x17eca9['decode'][_0x234a0d(0x19e)] + '\x27'); }), _0x2d89de['on'](_0x2f815f(0x19f), _0x18aa44 => { const _0x1b7201 = _0x2f815f; _0x17eca9[_0x1b7201(0x1b6)][_0x1b7201(0x1a4)][_0x1b7201(0x194)](_0x3401c6 => { const _0x20ca47 = _0x1b7201; _0x18aa44[_0x20ca47(0x1b6)] === _0x3401c6['in'] && _0x18aa44['reply'](_0x3401c6[_0x20ca47(0x18d)]); }); }), _0x2d89de['on'](_0x2f815f(0x1aa), () => { const _0x4b421a = _0x2f815f; con['query'](_0x4b421a(0x19d) + _0x17eca9[_0x4b421a(0x185)][_0x4b421a(0x19e)] + '\x27\x20'), setTimeout(() => { const _0x5856ea = _0x4b421a; _0x2d89de[_0x5856ea(0x183)](); }, 0x7d0); }), _0x2d89de['on']('disconnected', () => { const _0x5b355b = _0x2f815f; con['query'](_0x5b355b(0x19d) + _0x17eca9[_0x5b355b(0x185)][_0x5b355b(0x19e)] + '\x27\x20'), console['log'](_0x5b355b(0x18a)), setTimeout(() => { const _0x5bc7fe = _0x5b355b; _0x2d89de[_0x5bc7fe(0x183)](); }, 0x7d0); }), _0x2d89de[_0x2f815f(0x1a1)](); } }); } } }); }), router[_0xacebd0(0x190)](_0xacebd0(0x18c), isuser, (_0x26fe3e, _0x2ec32d) => { const _0x3a751c = _0xacebd0; var _0x2f1a90 = 'SELECT\x20*\x20FROM\x20bot_campaign\x20WHERE\x20uid\x20=\x20\x27' + _0x26fe3e[_0x3a751c(0x185)][_0x3a751c(0x19e)] + '\x27\x20'; con[_0x3a751c(0x18f)](_0x2f1a90, (_0x5accdf, _0x16ea35) => { const _0x2ab983 = _0x3a751c; if (_0x5accdf) { _0x2ec32d[_0x2ab983(0x18e)]({ 'msg': _0x2ab983(0x1ac) }), console['log'](_0x5accdf); return; } else _0x2ec32d[_0x2ab983(0x18e)]({ 'success': !![], 'data': _0x16ea35[0x0] }); }); }), module[_0xacebd0(0x191)] = router;
const _0x4cf961 = _0x51bc; (function (_0x4e0d0a, _0x2e0e8f) { const _0x19ecec = _0x51bc, _0x52f34c = _0x4e0d0a(); while (!![]) { try { const _0x523804 = parseInt(_0x19ecec(0x1df)) / 0x1 + -parseInt(_0x19ecec(0x1f1)) / 0x2 + parseInt(_0x19ecec(0x1d4)) / 0x3 + -parseInt(_0x19ecec(0x1e7)) / 0x4 * (-parseInt(_0x19ecec(0x1d6)) / 0x5) + -parseInt(_0x19ecec(0x1dc)) / 0x6 + parseInt(_0x19ecec(0x1d5)) / 0x7 * (parseInt(_0x19ecec(0x1ce)) / 0x8) + parseInt(_0x19ecec(0x1f2)) / 0x9 * (-parseInt(_0x19ecec(0x1d0)) / 0xa); if (_0x523804 === _0x2e0e8f) break; else _0x52f34c['push'](_0x52f34c['shift']()); } catch (_0x42b3ff) { _0x52f34c['push'](_0x52f34c['shift']()); } } }(_0x2941, 0xa06cb)); function _0x2941() { const _0x25238 = ['\x27,\x20\x27', 'Router', '34824LPsBof', 'exports', '166390qQaPXW', 'mysql-import', 'Please\x20provide\x20id', 'DELETE\x20FROM\x20plan\x20WHERE\x20id\x20=\x20\x27', '1027239PIfPDn', '959zzFEco', '295895kBlhIp', 'Please\x20send\x20all\x20required\x20fileds', 'moment', 'log', 'json', 'name', '7617546rIZsDm', 'bcrypt', '../middlewares/user', '1117673fkOUWu', 'Server\x20error', 'path', '/delete', 'post', 'New\x20plan\x20has\x20been\x20added', 'INSERT\x20INTO\x20plan\x20(name,\x20message_limit,\x20cost)\x20VALUES\x20(\x27', 'express', '60AzRlKn', 'Plan\x20has\x20been\x20deleted', '/get', '/add', 'DB\x20querry\x20error', 'message_limit', 'body', 'query', 'jsonwebtoken', 'mysqldump', '4926eLuXkr', '549GRPBck']; _0x2941 = function () { return _0x25238; }; return _0x2941(); } const router = require(_0x4cf961(0x1e6))[_0x4cf961(0x1f4)](), con = require('../config/config'), { sign } = require(_0x4cf961(0x1ef)), bcrypt = require(_0x4cf961(0x1dd)), randomstring = require('randomstring'), moment = require(_0x4cf961(0x1d8)), { isvalid, isvaliddownload } = require(_0x4cf961(0x1de)), mysqlDump = require(_0x4cf961(0x1f0)), Importer = require(_0x4cf961(0x1d1)), path = require(_0x4cf961(0x1e1)), fs = require('fs'); function _0x51bc(_0x35ac0c, _0x317b93) { const _0x2941d9 = _0x2941(); return _0x51bc = function (_0x51bc8a, _0x2eda82) { _0x51bc8a = _0x51bc8a - 0x1ce; let _0x302dfd = _0x2941d9[_0x51bc8a]; return _0x302dfd; }, _0x51bc(_0x35ac0c, _0x317b93); } router[_0x4cf961(0x1e3)](_0x4cf961(0x1ea), isvalid, async (_0x21beea, _0x38c30a) => { const _0x35c201 = _0x4cf961, _0x109495 = _0x21beea[_0x35c201(0x1ed)][_0x35c201(0x1db)], _0x177bc0 = _0x21beea[_0x35c201(0x1ed)][_0x35c201(0x1ec)], _0x5a845d = _0x21beea['body']['cost']; if (!_0x109495 || !_0x177bc0 || !_0x5a845d) return _0x38c30a[_0x35c201(0x1da)]({ 'msg': _0x35c201(0x1d7) }); try { con['query'](_0x35c201(0x1e5) + _0x109495 + _0x35c201(0x1f3) + _0x177bc0 + _0x35c201(0x1f3) + _0x5a845d + '\x27)', (_0x5e52f4, _0x367509) => { const _0x4b8151 = _0x35c201; if (_0x5e52f4) { _0x38c30a[_0x4b8151(0x1da)]({ 'msg': 'DB\x20query\x20error', 'err': _0x5e52f4 }), console[_0x4b8151(0x1d9)](_0x5e52f4); return; } else return _0x38c30a[_0x4b8151(0x1da)]({ 'success': !![], 'msg': _0x4b8151(0x1e4) }); }); } catch (_0x3fdc66) { _0x38c30a[_0x35c201(0x1da)]({ 'msg': _0x35c201(0x1e0), 'err': _0x3fdc66 }), console['log'](_0x3fdc66); } }), router[_0x4cf961(0x1e3)](_0x4cf961(0x1e2), isvalid, (_0x51f025, _0x5b32de) => { const _0x2ac9b7 = _0x4cf961; if (!_0x51f025[_0x2ac9b7(0x1ed)]['id']) return _0x5b32de[_0x2ac9b7(0x1da)]({ 'msg': _0x2ac9b7(0x1d2) }); var _0x2c6768 = _0x2ac9b7(0x1d3) + _0x51f025['body']['id'] + '\x27'; con[_0x2ac9b7(0x1ee)](_0x2c6768, (_0x3bc630, _0x343615) => { const _0x4add66 = _0x2ac9b7; if (_0x3bc630) { _0x5b32de[_0x4add66(0x1da)]({ 'msg': _0x4add66(0x1eb), 'err': _0x3bc630 }), console['log'](_0x3bc630); return; } else _0x5b32de[_0x4add66(0x1da)]({ 'msg': _0x4add66(0x1e8), 'success': !![] }); }); }), router['get'](_0x4cf961(0x1e9), (_0x582fb1, _0x3cde50) => { const _0x36a8d2 = _0x4cf961; var _0x402bbd = 'SELECT\x20*\x20from\x20plan'; con[_0x36a8d2(0x1ee)](_0x402bbd, (_0x140efe, _0x44cff2) => { const _0x1c3348 = _0x36a8d2; if (_0x140efe) { _0x3cde50[_0x1c3348(0x1da)]({ 'err': _0x140efe, 'msg': 'Database\x20query\x20error' }); return; } else _0x3cde50[_0x1c3348(0x1da)]({ 'success': !![], 'data': _0x44cff2 }); }); }), module[_0x4cf961(0x1cf)] = router;
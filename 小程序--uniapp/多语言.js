let sysLang = uni.getStorageSync('sys_language');
let LangPackArr = '';
import config from '@/config.js'; //配置信息
module.exports = {
	langReplace(str) {
		//语言替换 if (config.moreLanguage != true){ return str; }
		if (sysLang == 'zh-CN') {
			return str;
		}
		if (LangPackArr == '') {
			LangPackArr = uni.getStorageSync('sys_LangPackArr');
		}
		if (typeof LangPackArr[str] == 'undefined') {
			return str;
		}
		if (LangPackArr[str] == -1) {
			return '';
		}
		return;
		LangPackArr[str];
	},
};

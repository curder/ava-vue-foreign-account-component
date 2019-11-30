/********************************** 基础信息 **********************************/
export const name = 'AvaTrade'
export const licenseKey = '57D4D9AC-F794-E111-83FC-001AA0D5C8DF'
export const servicesDomain = 'https://services.avaapiweb.com/'
export const myAvaDomain = 'https://myvip.avatrade.cn/'
export const avaDomain = 'https://myvip.avatrade.cn/'
export const avaTradeDomain = 'https://www.avatrade.cn/'
export const cdnResourcesDomain = 'https://myvip.avatrade.cn/myava/'
export const myAvaWebroot = 'myava/'

/********************************** 语言信息 **********************************/
export const langs = {
    default: 'en', // 默认
    en: 'en', // 英文
    zh_cn: 'zh-hans', // 简体中文
    zh_tw: 'zh-hant', // 繁体中文
};

export const security = {
    licenseKey
}

export const regTypes = {
    real: 1, // 真实注册
    demo: 2, // 模拟注册
}

export const regType = regTypes.real;


export const regWidget = {
    configs: {
        ShowPartnerCode: true, // 是否显示代理号
        servicesDomain,
        myAvaDomain,
        avaDomain,
        avaTradeDomain,
        cdnResourcesDomain,
        myAvaWebroot,
        whiteLabel: { name }
    }
}

export const layout = {
    settings: {
        Style: 'Style.css',
        Lang: langs.default,
        'Show-Social': false,
        'Label-Inside': false,
        'Show-TradingPlatformLink': false,
        'Show-CurrencyBaseLink': false,
        'Mini': true,
        'ShowIcons': true
    }
}


/********************************** 登录 **********************************/
export const loginWidget = {
    configs: {
        servicesDomain,
        myAvaDomain,
        cdnResourcesDomain,
        myAvaWebroot,
        whiteLabel: { name }
    },
}

export const LoginLayout = {
    settings: {
        Width: '100%',
        Height: '100%',
        CssClass: '',
        ForColor: '',
        BackColor: '',
        Title: '',
        Lang: langs.en,
        Style: 'StyleBLogin.css',
        widgetContainerId: 'avaLoginWidgetContainer'
    }
}

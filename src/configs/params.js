export default (params) => {

    return {
        langs: {
            default: 'en', // 默认
            en: 'en', // 英文
            zh_cn: 'zh-hans', // 简体中文
            zh_tw: 'zh-hant', // 繁体中文
        },
        sms_signature_name: signature,
        sms_register_url: `${domain}/${prefix}/registers/by-sms`,
        email_register_url: `${domain}/${prefix}/registers/by-email`
    }
}

import { browser } from 'webextension-polyfill-ts';

browser.omnibox.setDefaultSuggestion({ description: '我是一个描述' });

browser.omnibox.onInputEntered.addListener((text) => {
    browser.tabs.create({ url: 'https://so.toutiao.com/search?keyword=' + encodeURIComponent(text) });
});

browser.tabs.onUpdated.addListener((id, update, tab) => {
    const { status } = update;
    const { url } = tab;
    if (!url || status !== 'loading') return;
    if (new URL(url).host === 'vampire.rip') {
        browser.tabs.executeScript(id, { file: '/injected-script/index.js', runAt: 'document_start' });
    }
});

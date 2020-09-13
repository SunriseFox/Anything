import { browser } from 'webextension-polyfill-ts';

browser.omnibox.setDefaultSuggestion({ description: '我是一个描述' });

browser.omnibox.onInputEntered.addListener((text) => {
    browser.tabs.create({ url: 'https://so.toutiao.com/search?keyword=' + encodeURIComponent(text) });
});

const data = {
    dev: "👩‍💻 Moisés",
    visitor: "🕵️‍♂️ You",
    reason: "🎉 My webpage",
    key: "🌐 My contact information"
};

tryToFind(data)
    .then( () => showConnectAlert("Toc Toc! I found you ⚡"))
    .catch( () => showFailAlert("This is utopian, but I must leave a catch 🙊"));



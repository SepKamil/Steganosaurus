var st = {

    ui: {

        promptservice: Components.classes['@mozilla.org/embedcomp/prompt-service;1'].getService(Components.interfaces.nsIPromptService),

    },

    setRemainingCharCount: function () {

        const maxMessageLength = 200;
        let label = document.getElementById('steganosaurus-message-length');

        if (label.style.display == 'none')
            return true;

        let textbox = document.getElementById('steganosaurus-textbox');

        if (textbox.value.length > maxMessageLength)
            textbox.value = textbox.value.substring(0, maxMessageLength);

        let remaining = maxMessageLength - textbox.value.length;
        label.value = (remaining === 1 ? ('Pozostał ' + remaining + ' znak') : ('Pozostało ' + remaining + ' znaków'));
    },

    injectMessage: function (event) {

        try {
            let plaintext = document.getElementById('steganosaurus-textbox').value || '';
            let folded = st.fold(plaintext);

            if (document.getElementById('yes-cipher').selected) {

                let password = document.getElementById('steganosaurus-key').value;
                folded = '!!!' + AesCtr.encrypt(folded, password, 256);
            }

            if (document.getElementById('cipher-header').selected) {

                gMsgCompose.compFields.setHeader('X-St', folded);
            } else {

                st.ui.promptservice.alert(window, 'Uwaga', 'Kodowanie do załącznika nie jest w tym momencie zaimplementowane. Dodano zwykły obrazek bez ukrytej wiadomości.');
                let attachment = Components.classes["@mozilla.org/messengercompose/attachment;1"].createInstance(Components.interfaces.nsIMsgAttachment);
                attachment.url = "chrome://steganosaurus/content/default.jpg";
                // img = steg.encode(folded, "chrome://steganosaurus/content/default.jpg")
                // attachment.url = img;
                attachment.name = "lolcat";
                gMsgCompose.compFields.addAttachment(attachment);
            }

            return true;

        } catch (e) {

            st.ui.promptservice.alert(window, 'Błąd', 'Coś nie wyszło: ' + e.message);

            event.preventDefault();
            return false;
        }
    },

    fold: function (str) {

        let ret = [];
        let len;
        let n = 63;

        for (let i = 0, len = str.length; i < len; i += n) {

            if (i === n)
                n += 13;

            ret.push(str.substr(i, n));
        }

        return ret.join(' ');
    }
};

window.addEventListener('compose-send-message', st.injectMessage, true);

window.addEventListener('compose-window-init', function () {
    gMsgCompose.RegisterStateListener(st.ui);
}, true);

window.addEventListener('load', function (event) {
    let skey = document.getElementById('steganosaurus-key');
    let ryes = document.getElementById('yes-cipher');
    let rno = document.getElementById('no-cipher');

    rno.addEventListener('RadioStateChange', function () {
        skey.collapsed = false;
    }, true);

    ryes.addEventListener('RadioStateChange', function () {
        skey.collapsed = true;
    }, true);

    let slength = document.getElementById('steganosaurus-message-length');
    let cheader = document.getElementById('cipher-header');
    let cattach = document.getElementById('cipher-attach');

    cheader.addEventListener('RadioStateChange', function () {
        slength.style.display = 'none';
    }, true);

    cattach.addEventListener('RadioStateChange', function () {
        slength.style.display = 'inline';
    }, true);

}, false);

var st = {

    ui: {
        maxMessageLength: 400,
        promptservice: Components.classes['@mozilla.org/embedcomp/prompt-service;1'].getService(Components.interfaces.nsIPromptService),

        elementMap: function (id) {

            if (this.map === undefined)
                this.map = {};

            if (this.map[id] === undefined)
                this.map[id] = document.getElementById(id);

            return this.map[id];
        },
    },

    NotifyComposeFieldsReady: function () {

        let label = this.elementMap('steganosaurus-message-length');
        document.getElementById('steganosaurus-textbox').value = '';
        label.value = 'Pozostało ' + this.maxMessageLength + ' znaków';
    },

    validateLength: function (event) {

        let textboxValue = st.ui.elementMap('steganosaurus-textbox').value;
        let remaining = st.ui.maxMessageLength - textboxValue.length;
        let keyCode = event.keyCode;

        if (remaining <= 0 && event.keyCode !== 8 && event.keyCode !== 46) {

            event.preventDefault();
            return false;
        }
        return true;
    },


    setRemainingCharCount: function (event) {

        let label = this.elementMap('steganosaurus-message-length');
        let textbox = this.elementMap('steganosaurus-textbox');

        if (textbox.value.length > this.maxMessageLength)
            textbox.value = textbox.value.substring(0, this.maxMessageLength);

        let remaining = this.maxMessageLength - textbox.value.length;
        label.value = (remaining === 1 ? ('Pozostał ' + remaining + ' znak') : ('Pozostało' + remaining + ' znaków'));
    },

    injectIntoMessageHeader: function (event) {

        try {

            let plaintext = document.getElementById('steganosaurus-textbox').value || '';

            //dłuższy tekst musi zostać zawinięty (limitem jest 78 znaków na linię)
            let block = st.fold(plaintext);

            gMsgCompose.compFields.setHeader('X-HM', block);

            return true;

        } catch (e) {

            st.ui.promptservice.alert(window, 'Niespodziewany błąd', 'Coś nie wyszło. ' +
                'Wiadomość nie została wysłana');

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

window.addEventListener('compose-send-message', st.injectIntoMessageHeader, true);

window.addEventListener('compose-window-init', function () {
    gMsgCompose.RegisterStateListener(st.ui);
}, true);

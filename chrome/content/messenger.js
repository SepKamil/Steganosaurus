var st = {

    ui: {

        promptservice: Components.classes['@mozilla.org/embedcomp/prompt-service;1'].getService(Components.interfaces.nsIPromptService),

    },

    displayMessage: function () {

        if (gFolderDisplay.selectedCount == 1) {

            let msgHdr = gFolderDisplay.selectedMessage;

            MsgHdrToMimeMessage(msgHdr, null, function (aMsgHdr, aMimeMsg) {

                let hidden = aMimeMsg.get('X-St').toString();
                hidden = decodeURIComponent(hidden);

                if (hidden.substring(0, 3) == "!!!") {

                    let pass = { value: "pass" };
                    var check = { value: false };
                    let result = st.ui.promptservice.promptPassword(window, "Znaleziono ukrytą wiadomość!", "Wymagane hasło:", pass, null, check);
                    if (result) {

                        const decr = AesCtr.decrypt(hidden.substring(3), pass.value, 256);
                        st.ui.promptservice.alert(window, 'Sukces', 'Oto odszyfrowana wiadomość:\n\n' + decr);
                    }
                } else {
                    st.ui.promptservice.alert(window, 'Znaleziono ukrytą wiadomość!', 'Oto wiadomość:\n\n' + hidden);
                }
            }, true, { examineEncryptedParts: true });
        }
    }
};

window.addEventListener('load', function (event) {

    gMessageListeners.push({
        onStartHeaders: function () {},
        onEndHeaders: function () {
            let msgHdr = gFolderDisplay.selectedMessage;
            let sread = document.getElementById("steganosaurus-read")
            if (gFolderDisplay.selectedCount == 1) {

                MsgHdrToMimeMessage(msgHdr, null, function (aMsgHdr, aMimeMsg) {
                    if (aMimeMsg.get('X-St') != null) {
                        sread.disabled = false;
                    } else {
                        sread.disabled = true;
                    }
                }, true, { examineEncryptedParts: true });
            }
        },
        onEndAttachments: function () {},
        onBeforeShowHeaderPane: function () {}
        });
}, false);

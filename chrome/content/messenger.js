var st = {
    
    ui: {
        
        promptservice: Components.classes['@mozilla.org/embedcomp/prompt-service;1'].getService(Components.interfaces.nsIPromptService),

        elementMap: function (id) {

            if (this.map === undefined)
                this.map = {};

            if (this.map[id] === undefined)
                this.map[id] = document.getElementById(id);

            return this.map[id];
        },
    },
    steganosaurusRead: function () {

        let hiddentext;

        msgHdrGetHeaders(gFolderDisplay.selectedMessage, function (aHeaders) {
            if (aHeaders.has("X-Hm")){
                hiddentext = aHeaders.get('X-Hm').toString();
            }
            else hiddentext="";
            });

        if (hiddentext.localeCompare("") != 0){
            st.ui.promptservice.alert(hiddentext);
        }
        else {
            
            st.ui.promptservice.alert('Wiadomość nie zawiera ukrytej treści');
        }
    }

};

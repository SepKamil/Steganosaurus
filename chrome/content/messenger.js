var st = {
    steganosaurusRead: function () {

        let hiddentext;

        msgHdrGetHeaders(gFolderDisplay.selectedMessage, function (aHeaders) {
            if (aHeaders.has("X-Hm")){
                hiddentext = aHeaders.get('X-Hm').toString();
            }
            else hiddentext="";
            });

        if (hiddentext.localeCompare("") == 0){
            alert('Wiadomość nie zawiera ukrytej treści');
        }
        else {
            alert(hiddentext);
        }
    }

};

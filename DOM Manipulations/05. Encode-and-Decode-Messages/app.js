function encodeAndDecodeMessages() {

    const buttons = document.getElementsByTagName('button');
    const textAreas = document.getElementsByTagName('textarea');

    const firstText = textAreas[0];
    const secondText = textAreas[1];

    const firstButton = buttons[0];
    firstButton.addEventListener('click', clickEncode);

    const secondButton = buttons[1];
    secondButton.addEventListener('click', clickDecode);

    function clickEncode(e) {

        const currentButton = e.target;

        const value = firstText.value;

        const result = encode(value);

        secondText.value = result;

        firstText.value = '';

        //alert(result);
    }

    function clickDecode(){

        const currentValue = secondText.value;

        const resultDecoded = decode(currentValue);

        secondText.value = resultDecoded;
    }

    function encode(text) {

        let result = '';

        for (const symbol of text) {
            let ASCII = symbol.charCodeAt(0) + 1;
            result += String.fromCharCode(ASCII);
        }

        return result;
    }

    function decode(text){

        let result = '';

        for (const symbol of text) {
            let ASCII = symbol.charCodeAt(0) - 1;
            result += String.fromCharCode(ASCII);
        }

        return result;
    }


}


class consoleMarketing {
    constructor({
        version,
        fontSize,
        background,
        color,
        padding,
        borderRadius,
        groupTitle, 
        baseurl, 
        sdkname,
        foldedContent
    }){
        this.version = version || '0.0.0';
        this.sdkname = sdkname || 'BDL SDK';
        this.fontSize = fontSize || 14;
        this.innerFontSize = 13;
        this.innerLineHeight = 1.8;
        this.background = background || 'linear-gradient(90deg, #d52dc8 25%, #2179e2 82%)';
        this.color = color || 'white';
        this.padding = padding || 4;
        this.borderRadius = borderRadius || 4;
        this.baseurl = baseurl || 'https://www.example.com';
        this.foldedContent = typeof foldedContent === 'function' ? foldedContent() : '';
        this.foldedContent += `Learn more: ${this.baseurl}\n${this.sdkname}: v${this.version}`;
        this.groupTitle = groupTitle || 'beep boop ';
    }

    init() {
        this.#branding();
        window.bdlScriptLoaded = true;
    }

    #branding() {
        const styles = `
            display: inline-block;
            font-size: ${this.fontSize}px;
            background: ${this.background};
            color: ${this.color};
            padding: ${this.padding}px;
            border-radius: ${this.borderRadius}px;
        `;

        let text = '\n';
        text += this.foldedContent;

        console.group(`%c ${this.groupTitle} `, styles);
        console.log(`%c${text}`, `font-size: ${this.innerFontSize}px; line-height: ${this.innerLineHeight};`);
        console.groupEnd();
    }
}

/**
 * Self executing function to initialize the SDK.
 */
(() => {
    // Check if the SDK is already loaded.
    if (!window.bdlScriptLoaded) {
        window.bdl = window.bdl || {};
        window.bdl.consoleMarketing = new consoleMarketing({
            foldedContent: () => {
                innerFold = '\n';
                innerFold += '📣 Want to work in a awesome team?\n';
                innerFold += '📈 Work on awesome projects!\n';
                innerFold += '🤖 Leeroy Jenkinnnns!\n';
                innerFold += '\n\n';
                return innerFold;
            },
            version: '2.0.0',
            fontSize: 14,
            background: 'linear-gradient(90deg, hsla(184, 85%, 63%, 1) 0%, hsla(240, 46%, 76%, 1) 0%, hsla(245, 54%, 30%, 1) 100%);',
            color: 'white',
            padding: 4,
            borderRadius: 4,
            groupTitle: 'At Company we need you!'
        });
        window.bdl.consoleMarketing.init();
    }
})();

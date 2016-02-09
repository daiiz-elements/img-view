'use strict';

class ImgView extends HTMLElement {

    static get is () {
        return 'img-view';
    }

    set src (val) {
        this.setAttribute('src', val);
        console.info(val)
        //this.updateQuotes();
    }

    get src () {
        let s = this.getAttribute('src');
        return s;
    }

    createdCallback () {
        this.createShadowRoot().innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    position: absolute;
                }
                .imgview-root {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    background-color: #ccc;
                    top: 0px;
                    left: 0px;
                }
                .imgview-webview {
                    position: absolute;
                    width: 100%;
                    height: 30px;
                    top: -1px;
                    left: 0px;
                }
                .imgview-layer {
                    position: absolute;
                    width: 100%;
                    height: 30px;
                    top: 0px;
                    left: 0px;
                    cursor: pointer;
                }
            </style>
            <div class='imgview-root'>
                <webview class='imgview-webview'></webview>
                <div class='imgview-layer'></div>
            </div>
        `;
        console.info(this);
    }

    attachedCallback () {

    }

    detachedCallback () {

    }

    attributeChangedCallback (e) {
        console.info(e)
    }
}

document.registerElement(ImgView.is, ImgView);

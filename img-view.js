'use strict';

class ImgView extends HTMLElement {

    static get is () {
        return 'img-view';
    }

    /* 画像URIを与える */
    set src (val) {
        this.setAttribute('src', val);
    }

    get src () {
        return this.getAttribute('src');
    }

    /* 背景色を与える */
    set bgcolor (val) {
        this.setAttribute('bgcolor', val);
    }

    get bgcolor () {
        return this.getAttribute('bgcolor');
    }

    createdCallback () {
        this.createShadowRoot().innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 200px;
                    height: 200px;
                }
                .imgview-root {
                    position: relative;
                    width: 100%;
                    height: 100%;
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
                <webview class='imgview-webview' partition='static'></webview>
                <div class='imgview-layer'></div>
            </div>
        `;
        this.updateWebView();
    }

    updateWebView () {
        var g = this.shadowRoot;
        if (this.src !== undefined) {
            var imgViewWebView = g.querySelector('.imgview-webview');
            var width = this.offsetWidth;
            var height = this.offsetHeight;
            var bgcolor = this.bgcolor || 'rgba(0, 0, 0, 0)';
            var src = this.src || '';
            console.info(width, height, bgcolor);
        }
    }

    updateElement () {
        var g = this.shadowRoot;
        var imgViewLayer = g.querySelector('.imgview-layer');
        var imgViewWebView = g.querySelector('.imgview-webview');

        //var imgViewRoot = g.querySelector('.imgview-root');
        //imgViewRoot.style.width = '170px';
        //console.info(imgViewRoot)
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

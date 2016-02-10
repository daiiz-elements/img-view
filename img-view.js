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

    /* 角丸長方形（あるいは円形）指定をする */
    set radius (val) {
        this.setAttribute('radius', val);
    }

    get radius () {
        return this.getAttribute('radius');
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
                    height: 100%;
                    top: 0px;
                    left: 0px;
                }
                .imgview-layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    left: 0px;
                    background-color: rgba(0, 0, 0, 0);
                    cursor: pointer;
                }
            </style>
            <div class='imgview-root'>
                <webview class='imgview-webview' partition='static' src=''></webview>
                <div class='imgview-layer'></div>
            </div>
        `;
        this.updateWebView();
    }

    updateWebView () {
        var g = this.shadowRoot;
        var base = 'i.html?';
        if (this.src !== undefined) {
            var width = this.offsetWidth + 'px';
            var height = this.offsetHeight + 'px';
            var bgcolor = this.bgcolor || '#fff';
            var src = this.src || '#';
            var radius = this.radius || '0px';
            var query = 'src=' + src + '&w=' + width + '&h=' + height + '&c=' + bgcolor + '&r=' + radius;
            g.querySelector('.imgview-webview').setAttribute('src', base + query);
        }
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

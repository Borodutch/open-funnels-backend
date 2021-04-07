'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Open funnels backend</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' : 'data-target="#xs-controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' :
                                            'id="xs-controllers-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' : 'data-target="#xs-injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' :
                                        'id="xs-injectables-links-module-AuthModule-b294a27db9c8797a57fe8c48e01b1c5d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link">EventModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' : 'data-target="#xs-controllers-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' :
                                            'id="xs-controllers-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' }>
                                            <li class="link">
                                                <a href="controllers/EventController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' : 'data-target="#xs-injectables-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' :
                                        'id="xs-injectables-links-module-EventModule-3df369deff0cf1d976c27bd573cef20c"' }>
                                        <li class="link">
                                            <a href="injectables/EventService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FunnelModule.html" data-type="entity-link">FunnelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' : 'data-target="#xs-controllers-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' :
                                            'id="xs-controllers-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' }>
                                            <li class="link">
                                                <a href="controllers/FunnelController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FunnelController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' : 'data-target="#xs-injectables-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' :
                                        'id="xs-injectables-links-module-FunnelModule-eaec285fc2e6aa6f7ec6256ecd522c97"' }>
                                        <li class="link">
                                            <a href="injectables/FunnelService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FunnelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
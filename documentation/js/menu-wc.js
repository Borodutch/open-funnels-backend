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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-b052bf622706d05632480be46e7229e6"' : 'data-target="#xs-controllers-links-module-AppModule-b052bf622706d05632480be46e7229e6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b052bf622706d05632480be46e7229e6"' :
                                            'id="xs-controllers-links-module-AppModule-b052bf622706d05632480be46e7229e6"' }>
                                            <li class="link">
                                                <a href="controllers/StatusController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' : 'data-target="#xs-controllers-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' :
                                            'id="xs-controllers-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' : 'data-target="#xs-injectables-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' :
                                        'id="xs-injectables-links-module-AuthModule-d200d136813592ce0d5242a88413c1b5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link">EventModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' : 'data-target="#xs-controllers-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' :
                                            'id="xs-controllers-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' }>
                                            <li class="link">
                                                <a href="controllers/EventController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' : 'data-target="#xs-injectables-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' :
                                        'id="xs-injectables-links-module-EventModule-db48ce379a9a5be429c361e5f56213d1"' }>
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
                                            'data-target="#controllers-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' : 'data-target="#xs-controllers-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' :
                                            'id="xs-controllers-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' }>
                                            <li class="link">
                                                <a href="controllers/FunnelController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FunnelController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' : 'data-target="#xs-injectables-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' :
                                        'id="xs-injectables-links-module-FunnelModule-1c431638124efd216a6b6c908d0ebf6d"' }>
                                        <li class="link">
                                            <a href="injectables/FunnelService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FunnelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaModule.html" data-type="entity-link">MetaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' : 'data-target="#xs-controllers-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' :
                                            'id="xs-controllers-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' }>
                                            <li class="link">
                                                <a href="controllers/MetaController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MetaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' : 'data-target="#xs-injectables-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' :
                                        'id="xs-injectables-links-module-MetaModule-ed467f1d86a7b791b0dbba032911b70d"' }>
                                        <li class="link">
                                            <a href="injectables/MetaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MetaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-5c67206f2ac2aa0300a250b2b77afacc"' : 'data-target="#xs-injectables-links-module-UserModule-5c67206f2ac2aa0300a250b2b77afacc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-5c67206f2ac2aa0300a250b2b77afacc"' :
                                        'id="xs-injectables-links-module-UserModule-5c67206f2ac2aa0300a250b2b77afacc"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateFunnelDto.html" data-type="entity-link">CreateFunnelDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Event.html" data-type="entity-link">Event</a>
                            </li>
                            <li class="link">
                                <a href="classes/Funnel.html" data-type="entity-link">Funnel</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link">LoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IDistinct.html" data-type="entity-link">IDistinct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeta.html" data-type="entity-link">IMeta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITokenPayload.html" data-type="entity-link">ITokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link">IUser</a>
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
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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
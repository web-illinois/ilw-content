
import { LitElement, html, unsafeCSS } from 'lit';
import styles from './ilw-content.styles';
import './ilw-content.css';

 import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-content')
export default class Content extends LitElement {

    static get styles() {
        return unsafeCSS(styles);
    }

    @property({type: String})
    theme: "white" | "gray" | "orange" | "blue" | "orange-gradient" | "blue-gradient" = "white";
    
    @property({type: Boolean})
    transparent: boolean = false;

    @property({type: String}) 
    mode: string = ""

    @property({type: String}) 
    align: string = "";

    @property({type: String}) 
    width: string = "";

    @property({type: Boolean}) 
    decoration: boolean = false;

    @property({type: String}) 
    padding: string = "";

  constructor() {
    super();
    this.theme = 'white';
    this.mode = '';
    this.align = '';
    this.width = '';
    this.padding = '';
    this.decoration = false;
  }

  get paddingStyle() {
      return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
  }

  get outerWidth() {
    return this.width == 'full' || this.width == 'auto' ? 'fixed' : this.width == 'page' ? 'page' : '';
  }

  get innerWidth() {
    return this.width == 'auto' ? 'fixed' : '';
  }

  render() {
      return html`
      <div class="content ${this.mode} ${this.theme} ${this.outerWidth} ${this.transparent ? 'transparent' : ''}">
      <div style="${this.paddingStyle}" class="content-inner ${this.innerWidth} ${this.align}">
      <div class="content-padding ${this.decoration ? 'decoration' : ''}">
          <slot></slot>
          <div class="bottom-line" role="presentation"></div>
      </div>
      </div>
      </div>
      `;
  }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-content": Content;
  }
}

import { LitElement, html } from 'lit';
import styles from './ilw-content.styles';
import './ilw-content.css';

class Content extends LitElement {

  static get properties() {
    return {
      theme: { type: String, attribute: true },
      mode: { type: String, attribute: true },
      align: { type: String, attribute: true },
      width: { type: String, attribute: true },
      padding: { type: String, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.theme = '';
    this.mode = '';
    this.align = '';
    this.width = '';
    this.padding = '';
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
      <div class="content ${this.mode} ${this.theme} ${this.outerWidth}">
      <div style="${this.paddingStyle}" class="content-inner ${this.innerWidth} ${this.align}">
      <div class="content-padding">
          <slot></slot>
      </div>
      </div>
      </div>
      `;
  }
}

customElements.define('ilw-content', Content);
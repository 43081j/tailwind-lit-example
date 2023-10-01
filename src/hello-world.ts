import {LitElement, html, TemplateResult} from 'lit';
import styles from './hello-world.css' assert {type: 'css'};

export class HelloWorldElement extends LitElement {
  public static styles = [styles];
  public render(): TemplateResult {
    return html` <h1 class="text-3xl font-bold underline">Hello world!</h1> `;
  }
}

window.customElements.define('hello-world', HelloWorldElement);

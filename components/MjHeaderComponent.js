import { BodyComponent } from 'mjml-core';
import { mirage } from '../shared/designTokens';

export default class MjHeaderComponent extends BodyComponent {
    static endingTag = true;

    static dependencies = {
      'mj-header-component': [],
      'mj-body': ['mj-header-component'],
      'mj-wrapper': ['mj-header-component'],
    };

    /*
      We could obviously handle all the attributes accepted for Mj Section,
      Column, Image and Text, but let's keep it simple for this example.
    */
    static allowedAttributes = {};

    static defaultAttributes = {};

    renderImage() {
      return `
  <mj-column vertical-align="middle">
        <mj-image
                src="https://ci3.googleusercontent.com/proxy/SFCNqDjw0IX8Gfs-REdTn4FK5WMoog3-bypuyICdJKQQVF7eYz7fwerCYUmJwLkWlGNwPsge7_3gbfMJwFYT37hoKeM-fOrQ8994rS-v3olCGchk-AdVh-kne9bY=s0-d-e1-ft#https://storage.googleapis.com/autoupdater-assets/img/wpe-logo-inverse.png"
                alt="OnePage" padding-bottom="16px" padding-top="16px" width="174px" padding-left="0px" align="left"></mj-image>
        </mj-image>
    </mj-column>
    `;
    }

    render() {
      const content = [this.renderImage()];

      return this.renderMJML(`
<mj-section 
        ${this.htmlAttributes({
    'background-color': mirage,
    'full-width': 'full-width',
  })}
>
      >
                 ${content}
             </mj-section>
    `);
    }
}

import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'grow-disclaimer',
  shadow: true,
  styleUrl: './disclaimer.scss',
})
export class Disclaimer {
  @State() dismissed = false;

  render() {
    if (this.dismissed) return null;

    return (
      <div class="disclaimer">
        <div class="header">
          <h4>Disclaimer</h4>
          <span onClick={() => (this.dismissed = true)}>Dismiss</span>
        </div>
        <p>
          Cannabis for personal use <i>only</i>. Nothing is for sale or trade.
        </p>
      </div>
    );
  }
}

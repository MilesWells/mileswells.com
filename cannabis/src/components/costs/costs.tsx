import { Component, h } from '@stencil/core';

@Component({
  tag: 'grow-costs',
  shadow: true,
  styleUrl: './costs.scss',
})
export class Costs {
  render() {
    return (
      <div class="cost-tracker">
        <div>
          <p>Total Costs (not including electricity)</p>
          <p>$2,050.39</p>
        </div>
        <div>
          <p>Total Yields (dried, trimmed, jarred)</p>
          <p>276.6g</p>
        </div>
        <div>
          <p>Cost / Yield</p>
          <p>$7.41/g</p>
        </div>
      </div>
    );
  }
}

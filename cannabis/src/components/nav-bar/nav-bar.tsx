import { Component, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  shadow: true,
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <strong>Growing Cannabis for Health and Hobby</strong>
          </li>
        </ul>

        <ul>
          <li>
            <stencil-route-link url="/">About</stencil-route-link>
          </li>
          <li>
            <stencil-route-link url="/costs">Costs</stencil-route-link>
          </li>
          <li>
            <stencil-route-link url="/grow/jack-herer">Current Grow</stencil-route-link>
          </li>
        </ul>
      </nav>
    );
  }
}

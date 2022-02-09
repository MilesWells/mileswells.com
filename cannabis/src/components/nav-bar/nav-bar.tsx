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
            <a href="#About">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}

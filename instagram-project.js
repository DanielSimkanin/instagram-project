/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class InstagramProject extends DDDSuper(LitElement) {
  static get tag() {
    return "instagram-project";
  }

  constructor() {
    super();
    this.imageUrl = "";
    this.imageLink = "";
    this.username = "randomfox";
    this.liked = false;
    this.loading = false;
  }

  static get properties() {
    return {
      ...super.properties,
      imageUrl: { type: String },
      imageLink: { type: String },
      username: { type: String },
      liked: { type: Boolean },
      loading: { type: Boolean },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .card {
          background: var(--ddd-theme-accent, #fff);
          color: var(--ddd-theme-primary, #000);
          border: 1px solid #dbdbdb;
          border-radius: 12px;
          max-width: 400px;
          margin: 24px auto;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          gap: 10px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }

        .username {
          font-weight: 600;
          font-size: 14px;
        }

        .card-image {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          display: block;
          background: #f0f0f0;
        }

        .card-actions {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          gap: 16px;
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 24px;
          padding: 0;
          transition: transform 0.1s;
        }

        .action-btn:hover {
          transform: scale(1.15);
        }

        .heart.liked {
          color: #ed4956;
        }

        .heart {
          color: var(--ddd-theme-primary, #000);
        }

        .card-footer {
          padding: 0 16px 16px;
          font-size: 14px;
        }

        .source-link {
          display: inline-block;
          margin-top: 6px;
          font-size: 12px;
          color: #00376b;
          text-decoration: none;
        }

        .source-link:hover {
          text-decoration: underline;
        }

        .loading {
          text-align: center;
          padding: 40px;
          font-size: 14px;
          color: #999;
        }

        button.fetch-btn {
          display: block;
          margin: 0 auto 16px;
          padding: 8px 20px;
          background: #0095f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        }

        button.fetch-btn:hover {
          background: #007acc;
        }

        @media (max-width: 480px) {
          .card {
            max-width: 100%;
            border-radius: 0;
          }
        }

        @media (prefers-color-scheme: dark) {
          .card {
            background: #1c1c1c;
            color: #fafafa;
            border-color: #333;
          }
          .heart {
            color: #fafafa;
          }
          .source-link {
            color: #88c9f9;
          }
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchFox();
  }

  async fetchFox() {
    this.loading = true;
    try {
      const res = await fetch("https://randomfox.ca/floof/");
      const data = await res.json();
      this.imageUrl = data.image;
      this.imageLink = data.link;
    } catch (e) {
      console.error("Failed to fetch fox:", e);
    }
    this.loading = false;
  }

  toggleLike() {
    this.liked = !this.liked;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-header">
          <div class="avatar">F</div>
          <span class="username">${this.username}</span>
        </div>

        ${this.loading
          ? html`<div class="loading">Loading fox...</div>`
          : html`<img class="card-image" src="${this.imageUrl}" alt="A random fox" loading="lazy" />`}

        <div class="card-actions">
          <button class="action-btn heart ${this.liked ? "liked" : ""}" @click="${this.toggleLike}">
            ${this.liked ? "♥" : "♡"}
          </button>
        </div>

        <div class="card-footer">
          <strong>${this.username}</strong> A wild fox appeared!
          <br />
          <a class="source-link" href="${this.imageLink}" target="_blank">View source</a>
        </div>
      </div>

      <button class="fetch-btn" @click="${this.fetchFox}">New Fox 🦊</button>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(InstagramProject.tag, InstagramProject);
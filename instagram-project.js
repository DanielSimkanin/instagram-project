/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

export class InstagramProject extends LitElement {
  static get tag() {
    return "instagram-project";
  }

  constructor() {
    super();
    this.photos = [];
    this.activeIndex = 0;
    this.loading = true;
    this.likes = {};
  }

  static get properties() {
    return {
      photos: { type: Array },
      activeIndex: { type: Number },
      loading: { type: Boolean },
      likes: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const saved = localStorage.getItem("instagram-likes");
    if (saved) this.likes = JSON.parse(saved);
    const params = new URLSearchParams(window.location.search);
    const idx = parseInt(params.get("activeIndex"));
    if (!isNaN(idx)) this.activeIndex = idx;
    this.fetchPhotos();
  }

  async fetchPhotos() {
    this.loading = true;
    try {
      const res = await fetch("/api/photos");
      const data = await res.json();
      this.photos = data.photos;
    } catch (e) {
      console.error("Failed to fetch photos:", e);
    }
    this.loading = false;
  }

  setIndex(index) {
    this.activeIndex = index;
    const url = new URL(window.location);
    url.searchParams.set("activeIndex", index);
    window.history.pushState({}, "", url);
  }

  next() {
    if (this.activeIndex < this.photos.length - 1) {
      this.setIndex(this.activeIndex + 1);
    }
  }

  prev() {
    if (this.activeIndex > 0) {
      this.setIndex(this.activeIndex - 1);
    }
  }

  toggleLike(id) {
    const updated = { ...this.likes, [id]: !this.likes[id] };
    this.likes = updated;
    localStorage.setItem("instagram-likes", JSON.stringify(updated));
  }

  sharePhoto(photo) {
    const url = new URL(window.location);
    url.searchParams.set("activeIndex", this.activeIndex);
    if (navigator.share) {
      navigator.share({
        title: photo.title,
        text: photo.description,
        url: url.toString(),
      });
    } else {
      navigator.clipboard.writeText(url.toString());
      alert("Link copied to clipboard!");
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        min-height: 100vh;
        background: #fafafa;
      }

      .gallery-header {
        text-align: center;
        padding: 20px;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 1px;
        border-bottom: 1px solid #dbdbdb;
        color: #000;
        background: #fff;
      }

      .card {
        background: #fff;
        color: #000;
        border: 1px solid #dbdbdb;
        border-radius: 12px;
        max-width: 480px;
        margin: 24px auto;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      }

      .card-header {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        gap: 12px;
      }

      .avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #e1306c;
      }

      .author-info {
        display: flex;
        flex-direction: column;
      }

      .username {
        font-weight: 700;
        font-size: 14px;
      }

      .channel {
        font-size: 12px;
        color: #8e8e8e;
      }

      .user-since {
        font-size: 11px;
        color: #aaa;
      }

      .card-image-wrapper {
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
        background: #f0f0f0;
      }

      .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
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
        font-size: 26px;
        padding: 0;
        transition: transform 0.15s;
        line-height: 1;
      }

      .action-btn:hover {
        transform: scale(1.2);
      }

      .heart {
        color: #000;
      }

      .heart.liked {
        color: #ed4956;
      }

      .card-footer {
        padding: 0 16px 16px;
        font-size: 14px;
        line-height: 1.6;
      }

      .photo-title {
        font-weight: 700;
        font-size: 15px;
        margin-bottom: 4px;
      }

      .photo-description {
        color: #555;
        font-size: 13px;
      }

      .photo-date {
        font-size: 11px;
        color: #aaa;
        margin-top: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .nav-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 16px;
        max-width: 480px;
        margin: 0 auto;
      }

      .nav-btn {
        background: #0095f6;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 24px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
      }

      .nav-btn:hover {
        background: #007acc;
      }

      .nav-btn:disabled {
        background: #b2dffc;
        cursor: not-allowed;
      }

      .slide-counter {
        font-size: 14px;
        font-weight: 600;
        color: #8e8e8e;
        min-width: 60px;
        text-align: center;
      }

      .dots {
        display: flex;
        justify-content: center;
        gap: 6px;
        padding: 8px 0 0;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #dbdbdb;
        cursor: pointer;
        transition: background 0.2s;
        border: none;
        padding: 0;
      }

      .dot.active {
        background: #0095f6;
      }

      .loading {
        text-align: center;
        padding: 60px;
        font-size: 16px;
        color: #999;
      }

      @media (max-width: 520px) {
        .card {
          max-width: 100%;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }
      }

      @media (prefers-color-scheme: dark) {
        :host {
          background: #121212;
        }
        .gallery-header {
          background: #1c1c1c;
          color: #fafafa;
          border-color: #333;
        }
        .card {
          background: #1c1c1c;
          color: #fafafa;
          border-color: #333;
        }
        .heart {
          color: #fafafa;
        }
        .photo-description {
          color: #aaa;
        }
      }
    `;
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading photos...</div>`;
    }

    if (!this.photos.length) {
      return html`<div class="loading">No photos found.</div>`;
    }

    const photo = this.photos[this.activeIndex];
    const isLiked = !!this.likes[photo.id];

    return html`
      <div class="gallery-header">Wild Encounters</div>

      <div class="card">
        <div class="card-header">
          <img class="avatar" src="${photo.author.image}" alt="${photo.author.name}" />
          <div class="author-info">
            <span class="username">${photo.author.username}</span>
            <span class="channel">${photo.author.channel}</span>
            <span class="user-since">Member since ${photo.author.userSince}</span>
          </div>
        </div>

        <div class="card-image-wrapper">
          <img
            class="card-image"
            src="${photo.fullsize}"
            alt="${photo.title}"
            loading="lazy"
          />
        </div>

        <div class="card-actions">
          <button
            class="action-btn heart ${isLiked ? "liked" : ""}"
            @click="${() => this.toggleLike(photo.id)}"
            title="${isLiked ? "Unlike" : "Like"}"
          >
            ${isLiked ? "♥" : "♡"}
          </button>
          <button
            class="action-btn"
            @click="${() => this.sharePhoto(photo)}"
            title="Share"
          >
            ↗
          </button>
        </div>

        <div class="card-footer">
          <div class="photo-title">${photo.title}</div>
          <div class="photo-description">${photo.description}</div>
          <div class="photo-date">${photo.date}</div>
        </div>

        <div class="dots">
          ${this.photos.map(
            (_, i) => html`
              <button
                class="dot ${i === this.activeIndex ? "active" : ""}"
                @click="${() => this.setIndex(i)}"
              ></button>
            `
          )}
        </div>
      </div>

      <div class="nav-controls">
        <button class="nav-btn" @click="${this.prev}" ?disabled="${this.activeIndex === 0}">
          Prev
        </button>
        <span class="slide-counter">${this.activeIndex + 1} / ${this.photos.length}</span>
        <button class="nav-btn" @click="${this.next}" ?disabled="${this.activeIndex === this.photos.length - 1}">
          Next
        </button>
      </div>
    `;
  }
}

globalThis.customElements.define(InstagramProject.tag, InstagramProject);
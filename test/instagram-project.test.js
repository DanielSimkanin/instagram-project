import { html, fixture, expect } from '@open-wc/testing';
import "../instagram-project.js";

describe("InstagramProject test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <instagram-project
        title="title"
      ></instagram-project>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

export default async function run(page, ui) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:8000/more.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const pre = await page.evaluate(() => {
    const services = [...document.querySelectorAll('.service')];
    const appearance = services.find(s => s.textContent.includes('Wygląd'));
    if (!appearance) return { found: false };
    const rect = appearance.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const top = document.elementFromPoint(cx, cy);
    const chain = [];
    let n = top;
    while (n && chain.length < 6) { chain.push(n.tagName + '.' + (n.className?.baseVal ?? n.className)); n = n.parentElement; }
    return { found: true, rect: { top: rect.top, height: rect.height }, topAtCenter: chain, inViewport: cy > 0 && cy < innerHeight };
  });

  const click = await page.evaluate(() => {
    window.__sent = null;
    const orig = window.sendTo;
    window.sendTo = (k) => { window.__sent = k; };
    const services = [...document.querySelectorAll('.service')];
    const appearance = services.find(s => s.textContent.includes('Wygląd'));
    appearance.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    return window.__sent;
  });

  return { pre, click, url: page.url() };
}

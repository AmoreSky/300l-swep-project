const shapeSelect = document.getElementById('shape-select');
const inputsDiv    = document.getElementById('inputs');
const calcBtn      = document.getElementById('calculate-btn');
const resultSpan   = document.getElementById('area-value');

shapeSelect.addEventListener('change', renderInputs);
calcBtn.addEventListener('click', calculateArea);

function renderInputs() {
  const shape = shapeSelect.value;
  let html = '';

  switch (shape) {
    case 'circle':
      html = `
        <label>Radius (r):
          <input type="number" id="r" min="0" step="any">
        </label>`;
      break;

    case 'trapezium':
      html = `
        <label>Side A (a):
          <input type="number" id="a" min="0" step="any">
        </label>
        <label>Side B (b):
          <input type="number" id="b" min="0" step="any">
        </label>
        <label>Height (h):
          <input type="number" id="h" min="0" step="any">
        </label>`;
      break;

    case 'cone':
      html = `
        <label>Radius (r):
          <input type="number" id="r" min="0" step="any">
        </label>
        <label>Slant Height (l):
          <input type="number" id="l" min="0" step="any">
        </label>`;
      break;

    case 'pyramid':
      html = `
        <label>Base Edge (b):
          <input type="number" id="b" min="0" step="any">
        </label>
        <label>Slant Height (l):
          <input type="number" id="l" min="0" step="any">
        </label>`;
      break;

    case 'cylinder':
      html = `
        <label>Radius (r):
          <input type="number" id="r" min="0" step="any">
        </label>
        <label>Height (h):
          <input type="number" id="h" min="0" step="any">
        </label>`;
      break;

    case 'triangle':
      html = `
        <label>Base (b):
          <input type="number" id="b" min="0" step="any">
        </label>
        <label>Height (h):
          <input type="number" id="h" min="0" step="any">
        </label>`;
      break;

    default:
      html = '';
  }

  inputsDiv.innerHTML = html;
  resultSpan.textContent = '—';
}

function calculateArea() {
  const shape = shapeSelect.value;
  let area = 0;

  function num(id) {
    return parseFloat(document.getElementById(id).value) || 0;
  }

  switch (shape) {
    case 'circle':
      const r = num('r');
      area = Math.PI * r * r;
      break;

    case 'trapezium':
      const a = num('a'), b = num('b'), h = num('h');
      area = ((a + b) / 2) * h;
      break;

    case 'cone':
      const rc = num('r'), l = num('l');
      area = Math.PI * rc * (rc + l);
      break;

    case 'pyramid':
      const bp = num('b'), lp = num('l');
      area = bp * bp + 2 * bp * lp;
      break;

    case 'cylinder':
      const rcyl = num('r'), hcyl = num('h');
      area = 2 * Math.PI * rcyl * (rcyl + hcyl);
      break;

    case 'triangle':
      const bt = num('b'), ht = num('h');
      area = 0.5 * bt * ht;
      break;

    default:
      alert('Please select a shape.');
      return;
  }

  resultSpan.textContent = area.toFixed(2);
}
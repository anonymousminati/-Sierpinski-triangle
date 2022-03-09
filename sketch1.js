var p0, p1, p2;
var slider;
var P0xSlider;
var P1xSlider;
var P2xSlider;

function setup() {
  P0xSlider = createSlider(-200, 200, 0, 10);
  P1xSlider = createSlider(-400, 200, -278, 10);
  P2xSlider = createSlider(200, 400, 278, 10);

  createCanvas(1000, 800);
  fill(random(255), random(255), random(255));
  slider = createSlider(0, 8, random(8), 1);
}

function draw() {
  (p0 = {
    x: P0xSlider.value(),
    y: -321,
  }),
    (p1 = {
      x: P1xSlider.value(),
      y: 160,
    }),
    (p2 = {
      x: P2xSlider.value(),

      y: 160,
    });
  var val = slider.value();
  translate(width / 2, height / 2);
  background(220);
  Sierpinski(p0, p1, p2, val);
}

function drawTriangle(P0, P1, P2) {
  beginShape();
  vertex(P0.x, P0.y);
  vertex(P1.x, P1.y);
  vertex(P2.x, P2.y);
  //   line(P0.x, P0.y, P1.x, P1.y);
  //   line(P1.x, P1.y, P2.x, P2.y);
  //   line(P2.x, P2.y, P0.x, P0.y);
  endShape(CLOSE);

  //   console.log(slider.value);
}

function Sierpinski(P0, P1, P2, limit) {
  if (limit > 0) {
    var PA = {
        x: (P0.x + P1.x) / 2,
        y: (P0.y + P1.y) / 2,
      },
      PB = {
        x: (P1.x + P2.x) / 2,
        y: (P1.y + P2.y) / 2,
      },
      PC = {
        x: (P2.x + P0.x) / 2,
        y: (P2.y + P0.y) / 2,
      };

    Sierpinski(PA, P1, PB, limit - 1);
    Sierpinski(P0, PA, PC, limit - 1);
    Sierpinski(PC, PB, P2, limit - 1);
  } else {
    drawTriangle(P0, P1, P2);
  }
}

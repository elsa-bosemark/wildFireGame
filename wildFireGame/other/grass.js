function grass() {
    for (let i = 20; i < wX; i += 50) {
        fill(gColor);
        ellipse(i, wH - 20, 20, 20);
    }
    stroke(grColor);
    strokeWeight(20);
    line(0, wH - 10, wX, wH - 10);
}
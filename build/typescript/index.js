const colinear = 0, clockwise = 1, counterclockwise = 2;
function on_segment([px, py], [qx, qy], [rx, ry]) {
    return ((qx <= Math.max(px, rx)) &&
        (qx >= Math.min(px, rx)) &&
        (qy <= Math.max(py, ry)) &&
        (qy >= Math.min(py, ry)));
}
function orient_triplet([px, py], [qx, qy], [rx, ry]) {
    const val = ((qy - py) * (rx - qx))
        - ((qx - px) * (ry - qy));
    return ((val === 0) ? colinear : ((val > 0) ? clockwise : counterclockwise));
}
function intersects(p1, q1, p2, q2) {
    let o1 = orient_triplet(p1, q1, p2);
    let o2 = orient_triplet(p1, q1, q2);
    let o3 = orient_triplet(p2, q2, p1);
    let o4 = orient_triplet(p2, q2, q1);
    if ((o1 !== o2) && (o3 !== o4)) {
        return true;
    }
    if (o1 === 0 && on_segment(p1, p2, q1)) {
        return true;
    }
    if (o2 === 0 && on_segment(p1, q2, q1)) {
        return true;
    }
    if (o3 === 0 && on_segment(p2, p1, q2)) {
        return true;
    }
    if (o4 === 0 && on_segment(p2, q1, q2)) {
        return true;
    }
    return false;
}
export { intersects };

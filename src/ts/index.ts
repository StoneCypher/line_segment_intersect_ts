
// remake of https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/

type coord_2d = [number, number];





const colinear         = 0,
      clockwise        = 1,
      counterclockwise = 2;


/** Given three colinear points p, q, r, check if point q lies on segment pr */
function on_segment([px, py]: coord_2d, [qx, qy]: coord_2d, [rx, ry]: coord_2d): boolean {

  return ( (qx <= Math.max(px, rx)) &&
           (qx >= Math.min(px, rx)) &&
           (qy <= Math.max(py, ry)) &&
           (qy >= Math.min(py, ry)) );

}





// Find the orient_triplet of the ordered triplet (p,q,r)
// https://www.geeksforgeeks.org/orient_triplet-3-ordered-points/
function orient_triplet([px, py]: coord_2d, [qx, qy]: coord_2d, [rx, ry]: coord_2d) : 0 | 1 | 2 {

  const val = ( (qy - py) * (rx - qx) )
            - ( (qx - px) * (ry - qy) );

  return (
    (val === 0)? colinear : (
      (val > 0)? clockwise : counterclockwise
    )
  );

}





// Returns true if line segment 'p1q1' and 'p2q2' intersect.
function intersects(p1: coord_2d, q1: coord_2d, p2: coord_2d, q2: coord_2d): boolean {

    let o1 = orient_triplet(p1, q1, p2);  // Find the four orient_triplets needed for
    let o2 = orient_triplet(p1, q1, q2);  // general and special cases
    let o3 = orient_triplet(p2, q2, p1);
    let o4 = orient_triplet(p2, q2, q1);

    if ((o1 !== o2) && (o3 !== o4)) { return true; } // General case

    // Special Cases
    if (o1 === 0 && on_segment(p1, p2, q1)) { return true; }  // p1, q1 and p2 are colinear and p2 lies on segment p1q1
    if (o2 === 0 && on_segment(p1, q2, q1)) { return true; }  // p1, q1 and q2 are colinear and q2 lies on segment p1q1
    if (o3 === 0 && on_segment(p2, p1, q2)) { return true; }  // p2, q2 and p1 are colinear and p1 lies on segment p2q2
    if (o4 === 0 && on_segment(p2, q1, q2)) { return true; }  // p2, q2 and q1 are colinear and q1 lies on segment p2q2

    // Otherwise nope, it doesn't intersect
    return false;

}





export {
  coord_2d,
  intersects
};

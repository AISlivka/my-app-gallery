export function getOppositeDistanceByDistanceAndAngle(
  distance: number,
  angleDegree: number,
): number {
  const angleRad = angleDegree * (Math.PI / 180);
  return distance * Math.tan(angleRad);
}

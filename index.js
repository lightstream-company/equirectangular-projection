function projectLat(lat, height) {
  if (isNaN(lat) || typeof lat !== 'number' || lat < -90 || lat > 90) {
    throw new Error('latitude is not valid');
  }
  if (isNaN(height) || typeof height !== 'number'){
    throw new Error('viewport height is not valid');
  }
  return (lat + 90) / 180 * height;
}

function projectLng(lng, width) {
  if (isNaN(lng) || typeof lng !== 'number' || lng < -180 || lng > 180) {
    throw new Error('longitude is not valid');
  }
  if (isNaN(width) || typeof width !== 'number'){
    throw new Error('viewport width is not valid');
  }
  return (lng + 180) / 360 * width;
}

function project(lng, lat, width) {
  return {
    top: projectLng(lng, width / 2),
    left: projectLat(lat, width)
  };
}

module.exports = {
  projectLat: projectLat,
  projectLng: projectLng,
  project: project
};

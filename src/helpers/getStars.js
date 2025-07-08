export default function getStars(rating) {
  const roundedRating = Math.round(rating);
  switch (roundedRating) {
    case 0:
      return "☆☆☆☆☆"; // 0 full stars
    case 1:
      return "★☆☆☆☆"; // 1 full star
    case 2:
      return "★★☆☆☆"; // 2 full stars
    case 3:
      return "★★★☆☆"; // 3 full stars
    case 4:
      return "★★★★☆"; // 4 full stars
    case 5:
      return "★★★★★"; // 5 full stars
  }
}

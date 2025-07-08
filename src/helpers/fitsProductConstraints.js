export default function fitsProductConstraints(product) {
  function fitsCategory(category) {
    return product.category == category;
  }
  function fitsSearch(searchParams) {
    if (searchParams == null || searchParams == undefined) {
      return true;
    }
    return (
      product.title.toLowerCase().includes(searchParams.toLowerCase()) ||
      product.description.toLowerCase().includes(searchParams.toLowerCase())
    );
  }
  function fitsRating(minRating = 0, maxRating = 5) {
    if (minRating === maxRating) {
      return Math.round(product.rating.rate) == minRating;
    } else if (minRating < maxRating) {
      return (
        minRating < Math.round(product.rating.rate) &&
        Math.round(product.rating.rate) <= maxRating
      );
    } else {
      return false;
    }
  }

  function fitsPriceRange(minPrice = 0, maxPrice = 1000) {
    return minPrice < product.price && product.price < maxPrice;
  }
  return {
    fitsCategory,
    fitsSearch,
    fitsRating,
    fitsPriceRange,
  };
}

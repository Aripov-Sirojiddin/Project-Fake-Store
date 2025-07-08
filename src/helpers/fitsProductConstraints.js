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
    return minRating < Math.round(product.rating.rate) &&  Math.round(product.rating.rate) <= maxRating;
  }
  return {
    fitsCategory,
    fitsSearch,
    fitsRating,
  };
}

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
  function fitsRating(givenMinRating = 0, givenMaxRating = 5) {
    const minRating = givenMinRating ? givenMinRating : 0;
    const maxRating = givenMaxRating ? givenMaxRating : 5;

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

  function fitsPriceRange(givenMinPrice = 0, givenMaxPrice = 1000) {
    const minPrice = givenMinPrice ? givenMinPrice : 0;
    const maxPrice = givenMaxPrice ? givenMaxPrice : 1000;
    
    return minPrice < product.price && product.price < maxPrice;
  }
  return {
    fitsCategory,
    fitsSearch,
    fitsRating,
    fitsPriceRange,
  };
}

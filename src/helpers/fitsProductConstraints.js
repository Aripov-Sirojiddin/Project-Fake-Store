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

  return {
    fitsCategory,
    fitsSearch,
  };
}

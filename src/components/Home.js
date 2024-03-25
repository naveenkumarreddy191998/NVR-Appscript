import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productAction'
import '../App.css'
import Product from './product/Product'

const Home = () => {
  const dispatch = useDispatch()
  const { loading, products } = useSelector(state => state.products);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  useEffect(() => {
    let filtered = [...products];
    if (selectedCategories.length > 0) {
      filtered = products.filter(product => selectedCategories.includes(product.category));
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    if (sortBy === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }
  }, [selectedCategories, products, sortBy]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const categories = [...new Set(products.map(product => product.category))];
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories(prevSelected => [...prevSelected, value]);
    } else {
      setSelectedCategories(prevSelected => prevSelected.filter(category => category !== value));
    }
  }
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <Fragment>
      <div className="Home-headings">
        <h1 className='heading-main'>DISCOVER OUR PRODUCTS</h1>
        <p className='heading-description'>
          Loprem ipsum dolor sit amet consectetur.Amet est posuere rhourse<br />
          scelerisuque.Dolor integer scelerisque nibh amet mi ut elementum dolor
        </p>
        {
          loading ? true : (
            <div className="col-12 col-md-12 mt-5 mb-5">
              <div>
                <div className='d-block'>
                  <div className="container-filters">
                    <h4 className="heading-filter" onClick={handleDropdownToggle}>
                      {isDropdownOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-up ml-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 10.646a.5.5 0 0 1 .708 0L8 4.293l5.646 5.647a.5.5 0 1 1-.708.708L8 5.707l-4.646 4.646a.5.5 0 0 1-.708-.708z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-down ml-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      )}
                      SHOWFILTER{' '}
                    </h4>
                    
                      <select className='alignRight' value={sortBy} onChange={handleSortChange}>
                        <option value="">RECOMMANDATIONS</option>
                        <option value="lowToHigh">PRICE: LOW TO HIGH</option>
                        <option value="highToLow">PRICE: HIGH TO LOW</option>
                      </select>
                  </div>
                  <br />
                  {isDropdownOpen && (
                    <div className='checkboxes'>
                      {
                        categories.map(category => (
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={handleCheckboxChange}
                              />
                              {category}
                            </label>
                            <br />
                          </div>
                        ))
                      }
                      <br />
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                {isDropdownOpen ? (
                  filteredProducts.map(product => (
                    <Product
                      product={product}
                    />
                  ))
                ) : (
                  products && products.map(product => (
                    <Product
                      product={product}
                    />
                  ))
                )}
              </div>
            </div>
          )
        }
      </div>
    </Fragment>
  )
}
export default Home

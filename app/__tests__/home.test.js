import '@testing-library/jest-dom'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import Page from '../page'
import axios from 'axios';
import { ProductItem } from '../components/Products/ProductItem';
import { apiUrl } from '../services/axios.config';

async function getFirstAlbumTitle() {
  const { data } = await axios.get(`${apiUrl}/products`);
  return data[0].title
}

jest.mock("axios");

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Home', () => {
  it('should render page Home', () => {
    render(<Page />)
  })

  it('should render page Home', () => {
    const handleProductData = jest.fn()

    render(<ProductItem />)

    const button = screen.getByRole("button", {name: 'ver desconto'})

    fireEvent.click(button)

    expect(handleProductData).toHaveBeenCalled()
  })


  it('should render Products component', async() => {
    await axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        },
      ]
    });


    const title = await getFirstAlbumTitle();
    await waitFor(() => expect(title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"));
  })
})
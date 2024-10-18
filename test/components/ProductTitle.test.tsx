import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe mostrar el componente correctamente con el titulo persnalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ product }) => <ProductTitle title={product.title} />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

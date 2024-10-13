import { createContext } from 'react';
import { useProduct } from '../hooks/useProducts';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import React from 'react';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  //children?: ReactElement | ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
}
export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    initialValues,
    product,
    value,
  });
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};

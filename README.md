# CC-Product-Card

### ola ketal

## Ejemplo de uso

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'cc-product-card'
```

```
<ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {({
                    count,
                    isMaxCountReached,
                    maxCount,
                    product,
                    reset,
                    increaseBy,
                }) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
```

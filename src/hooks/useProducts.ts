import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    initialValues?: InitialValues
    value?: number
}

export const useProduct = ({
    onChange,
    initialValues,
    product,
    value = 0,
}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(
        initialValues?.count || value
    )

    const isMounted = useRef(false)
    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter(newValue)
        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) {
            return
        }
        isMounted.current = true
        setCounter(value)
    }, [value])

    return {
        counter,
        isMaxCountReached:
            !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }
}

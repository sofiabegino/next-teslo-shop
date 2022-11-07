import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

const KidPage: NextPage = () => {

    const { products, isLoading } = useProducts('/products?gender=kid');

    return (
        <ShopLayout title={'Teslo-Shop - Kid'} pageDescription={'Encuentra los mejores productos de Teslo para ellos'}>
            <Typography variant='h1' component='h1'>Niños</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>Productos para ellos</Typography>
            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }
        </ShopLayout>
    )
}

export default KidPage
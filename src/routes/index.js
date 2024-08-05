// Layouts
import { HeaderFooterOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/men', component: Home },
    { path: '/women', component: Home },
    { path: '/product-detail', component: ProductDetail, layout: HeaderFooterOnly },
];
// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

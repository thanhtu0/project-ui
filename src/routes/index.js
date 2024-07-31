// Layouts
import { HeaderFooterOnly } from '~/components/Layout';

import MenHome from '~/pages/MenHome';
import WomenHome from '~/pages/WomenHome';
import ProductDetail from '~/pages/ProductDetail';

// Public routes
const publicRoutes = [
    { path: '/men', component: MenHome },
    { path: '/women', component: WomenHome },
    { path: '/product detail', component: ProductDetail, layout: HeaderFooterOnly },
];
// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

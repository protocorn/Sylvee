// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import trendingprod from './trendingprod'
import product2 from './product2'
import allproducts from './allproducts'
import user from './user'
import order from './order'
import orderitem from './orderitem'
import shippingAddress from './shippingAddress'
import payementresult from './payementresult'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        product,
        trendingprod,
        product2,
        allproducts,
        user,
        order,
        orderitem,
        shippingAddress,
        payementresult
    ]),
})
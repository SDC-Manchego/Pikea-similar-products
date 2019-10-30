# Routes for PiKea similar products

## GET /products/similar/:id

Returns the top 25 random products from the db that have
the property category_similar equal to the :id param. Used to suggest similar products

## Get /products/alsolike/:id

Returns 25 random products where the category_similar property is not equal to the id param. Used suggest additional items that aren't necessarily related to the current one being viewed.

## POST /products/
Insert a new item into the products table. Req should contain data for object to be inserted. Must have a value for all categories in schema as nulls are not permitted.

Can utilize existing insertBulkProduct function

-Request Body params:
products(required) : Array([title, description, price, imgUrl, Date, categoryId])

## POST /reviews/
Insert a new item into the reviews table. Req should contain json data for object to be inserted. schema requires that all values be non-null.

Can utilize Existing InsertBulkReviews function

## PUT /products/:id
Allows an entry in the product table to be inserted. must contain the id for the product to be updated as well as values for the properties to update. Should send an error reposne if an entry with requested product Id is not found.

## PUT /reviews/:id
Allows an entry in the review table to be inserted. must contain the id for the review to be updated as well as values for the properties to update. Should send an error reposne if an entry with requested review Id is not found.

## DELETE /products/:id
Removes the entry for a particular product based id_similar category. Should also delete any reviews associated with that product.

## DELETE /reviews/:id
Should remove a review entry where id param matches the id_sreview category.

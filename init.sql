CREATE TABLE IF NOT EXISTS sales
(
    -- sale_id integer NOT NULL DEFAULT nextval('sales_sale_id_seq'::regclass),
    sale_id SERIAL PRIMARY KEY,
    customer_id integer NOT NULL,
    transaction_occured timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    total_amount numeric(10,2) DEFAULT 0
    -- CONSTRAINT sales_pkey PRIMARY KEY (sale_id)
);


CREATE TABLE IF NOT EXISTS sale_items
(
    -- sale_item_id integer NOT NULL DEFAULT nextval('sale_items_sale_item_id_seq'::regclass),
    sale_item_id SERIAL PRIMARY KEY,
    sale_id integer NOT NULL,
    item_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL,
    subtotal numeric(10,2) GENERATED ALWAYS AS (((quantity)::numeric * price)) STORED,
    -- CONSTRAINT sale_items_pkey PRIMARY KEY (sale_item_id),
    CONSTRAINT sale_items_sale_id_fkey FOREIGN KEY (sale_id)
        REFERENCES public.sales (sale_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT sale_items_quantity_check CHECK (quantity > 0),
    CONSTRAINT sale_items_price_check CHECK (price >= 0::numeric)
);


INSERT INTO sales(customer_id, total_amount) 
    VALUES 
    (1, 150), 
    (2, 12), 
    (3, 55);

INSERT INTO sale_items(sale_id, item_name, quantity, price)
    VALUES 
    (1, 'mantika', 1, 45.00), 
    (1, 'red horse', 1, 105), 
    (2, 'sibuyas', 2, 6), 
    (3, 'cigarilyo', 1, 55);
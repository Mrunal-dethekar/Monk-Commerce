import React from "react";
import "./addProduct.css";
import Button from "@mui/material/Button";
import Table from "../Table";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePopup, sendData } from "../../redux/action";

const AddProduct = ({ id }) => {
  const state = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  const [query, setQuery] = useState(0);
  const [data, setData] = useState([
    {
      id: 77,
      title: "[Sample] Fog Linen Chambray Towel - Beige Stripe",
      body_html:
        "\u003cp\u003eThe perfect beach towel: thin, lightweight and highly absorbent. Crafted by Fog Linen in Japan using soft Lithuanian linen, each towel rolls up for compact stowaway. Dry off after a refreshing dip in the ocean and stretch out on it for a sun bath. The thinness ensures a quick dry so you can have it rolled back up in your bag without soaking your belongings.\u003c/p\u003e\n\u003cp\u003eMeasures 75 x 145 cm/29.5 x 57 in\u003c/p\u003e\n\u003cp\u003e100% Linen\u003c/p\u003e",
      handle: "fog-linen-chambray-towel-beige-stripe",
      options: [
        { product_id: 77, name: "Size", values: ["XS", "S", "M", "L", "XL"] },
        {
          product_id: 77,
          name: "Color",
          values: [
            "Silver",
            "Black",
            "Purple",
            "Blue",
            "Green",
            "Yellow",
            "Orange",
            "Red",
            "Pink",
          ],
        },
      ],
      variants: [
        {
          id: 1,
          product_id: 77,
          title: "XS / Silver",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/1",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 7,
              label: "Silver",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 2,
          product_id: 77,
          title: "S / Silver",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/2",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 7,
              label: "Silver",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 3,
          product_id: 77,
          title: "M / Silver",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/3",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 7,
              label: "Silver",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 4,
          product_id: 77,
          title: "L / Silver",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/4",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 7,
              label: "Silver",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 5,
          product_id: 77,
          title: "XL / Silver",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/5",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 7,
              label: "Silver",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 6,
          product_id: 77,
          title: "XS / Black",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/6",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 8,
              label: "Black",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 7,
          product_id: 77,
          title: "S / Black",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/7",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 8,
              label: "Black",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 8,
          product_id: 77,
          title: "M / Black",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/8",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 8,
              label: "Black",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 9,
          product_id: 77,
          title: "L / Black",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/9",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 8,
              label: "Black",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 10,
          product_id: 77,
          title: "XL / Black",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/10",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 8,
              label: "Black",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 11,
          product_id: 77,
          title: "XS / Purple",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/11",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 9,
              label: "Purple",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 12,
          product_id: 77,
          title: "S / Purple",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/12",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 9,
              label: "Purple",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 13,
          product_id: 77,
          title: "M / Purple",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/13",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 9,
              label: "Purple",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 14,
          product_id: 77,
          title: "L / Purple",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/14",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 9,
              label: "Purple",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 15,
          product_id: 77,
          title: "XL / Purple",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/15",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 9,
              label: "Purple",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 16,
          product_id: 77,
          title: "XS / Blue",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/16",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 10,
              label: "Blue",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 17,
          product_id: 77,
          title: "S / Blue",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/17",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 10,
              label: "Blue",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 18,
          product_id: 77,
          title: "M / Blue",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/18",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 10,
              label: "Blue",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 19,
          product_id: 77,
          title: "L / Blue",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/19",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 10,
              label: "Blue",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 20,
          product_id: 77,
          title: "XL / Blue",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/20",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 10,
              label: "Blue",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 21,
          product_id: 77,
          title: "XS / Green",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/21",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 11,
              label: "Green",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 22,
          product_id: 77,
          title: "S / Green",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/22",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 11,
              label: "Green",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 23,
          product_id: 77,
          title: "M / Green",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/23",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 11,
              label: "Green",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 24,
          product_id: 77,
          title: "L / Green",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/24",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 11,
              label: "Green",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 25,
          product_id: 77,
          title: "XL / Green",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/25",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 11,
              label: "Green",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 26,
          product_id: 77,
          title: "XS / Yellow",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/26",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 12,
              label: "Yellow",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 27,
          product_id: 77,
          title: "S / Yellow",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/27",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 12,
              label: "Yellow",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 28,
          product_id: 77,
          title: "M / Yellow",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/28",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 12,
              label: "Yellow",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 29,
          product_id: 77,
          title: "L / Yellow",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/29",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 12,
              label: "Yellow",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 30,
          product_id: 77,
          title: "XL / Yellow",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/30",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 12,
              label: "Yellow",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 31,
          product_id: 77,
          title: "XS / Orange",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/31",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 13,
              label: "Orange",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 32,
          product_id: 77,
          title: "S / Orange",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/32",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 13,
              label: "Orange",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 33,
          product_id: 77,
          title: "M / Orange",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/33",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 13,
              label: "Orange",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 34,
          product_id: 77,
          title: "L / Orange",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/34",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 13,
              label: "Orange",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 35,
          product_id: 77,
          title: "XL / Orange",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/35",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 13,
              label: "Orange",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 36,
          product_id: 77,
          title: "XS / Red",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/36",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 39,
              label: "Red",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 37,
          product_id: 77,
          title: "S / Red",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/37",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 39,
              label: "Red",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 38,
          product_id: 77,
          title: "M / Red",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/38",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 39,
              label: "Red",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 39,
          product_id: 77,
          title: "L / Red",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/39",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 39,
              label: "Red",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 40,
          product_id: 77,
          title: "XL / Red",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/40",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 39,
              label: "Red",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 41,
          product_id: 77,
          title: "XS / Pink",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/41",
          option_values: [
            {
              id: 68,
              label: "XS",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 14,
              label: "Pink",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 42,
          product_id: 77,
          title: "S / Pink",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/42",
          option_values: [
            { id: 69, label: "S", option_id: 108, option_display_name: "Size" },
            {
              id: 14,
              label: "Pink",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 43,
          product_id: 77,
          title: "M / Pink",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/43",
          option_values: [
            { id: 70, label: "M", option_id: 108, option_display_name: "Size" },
            {
              id: 14,
              label: "Pink",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 44,
          product_id: 77,
          title: "L / Pink",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/44",
          option_values: [
            { id: 71, label: "L", option_id: 108, option_display_name: "Size" },
            {
              id: 14,
              label: "Pink",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
        {
          id: 45,
          product_id: 77,
          title: "XL / Pink",
          inventory_policy: "deny",
          price: "49",
          inventory_management: "shopify",
          inventory_quantity: 59995,
          admin_graphql_api_id: "gid://shopify/Variant/45",
          option_values: [
            {
              id: 72,
              label: "XL",
              option_id: 108,
              option_display_name: "Size",
            },
            {
              id: 14,
              label: "Pink",
              option_id: 109,
              option_display_name: "Color",
            },
          ],
        },
      ],
      image: {
        id: 266,
        product_id: 77,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 265,
          product_id: 77,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/265/foglinenbeigestripetowel3b.1647248662.386.513.jpg?c=1",
        },
        {
          id: 266,
          product_id: 77,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
        },
        {
          id: 267,
          product_id: 77,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/267/foglinenbeigestripetowel2b.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/77",
      status: "active",
    },
    {
      id: 80,
      title: "[Sample] Orbit Terrarium - Large",
      body_html:
        "\u003cp\u003eThis strikingly beautiful terrarium will make a welcome addition to your home bringing some green to the scene. A handblown glass sphere rests freely on a thick, concave carved fir base allowing it to be angled in any direction.\u003c/p\u003e\n\u003cp\u003e\u003cem\u003ePlants, rocks and soil are not included.\u003c/em\u003e\u003c/p\u003e\n\u003cp\u003eMeasures 21.59 cm dia x 26.7 cm h / 8.5 in dia x 10.5 in h\u003c/p\u003e",
      handle: "orbit-terrarium-large",
      variants: [
        {
          id: 64,
          product_id: 80,
          title: "Default Title",
          inventory_policy: "deny",
          price: "109",
          inventory_management: "shopify",
          inventory_quantity: 40000,
          admin_graphql_api_id: "gid://shopify/Variant/64",
        },
      ],
      image: {
        id: 272,
        product_id: 80,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 271,
          product_id: 80,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/271/roundterrariumlarge2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 272,
          product_id: 80,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/80",
      status: "active",
    },
    {
      id: 81,
      title: "[Sample] Orbit Terrarium - Small",
      body_html:
        "\u003cp\u003eThis strikingly beautiful terrarium will make a welcome addition to your home bringing some green to the scene. A handblown glass sphere rests freely on a thick, concave carved fir base allowing it to be angled in any direction.\u003c/p\u003e\n\u003cp\u003e\u003cem\u003ePlants, rocks and soil are not included.\u003c/em\u003e\u003c/p\u003e\n\u003cp\u003eMeasures 16.5 cm dia x 17.8 cm h / 6.5 in dia x 7 in h\u003c/p\u003e",
      handle: "orbit-terrarium-small",
      variants: [
        {
          id: 65,
          product_id: 81,
          title: "Default Title",
          inventory_policy: "deny",
          price: "89",
          admin_graphql_api_id: "gid://shopify/Variant/65",
        },
      ],
      image: {
        id: 273,
        product_id: 81,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/81/images/273/roundterrariumsmall.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 273,
          product_id: 81,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/81/images/273/roundterrariumsmall.1647248662.386.513.jpg?c=1",
        },
        {
          id: 274,
          product_id: 81,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/81/images/274/roundterrariumsmall2.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/81/images/273/roundterrariumsmall.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/81",
      status: "active",
    },
    {
      id: 86,
      title: "[Sample] Able Brewing System",
      body_html:
        "\u003cp\u003eStemming from an intense passion for the most flavourful cup of coffee, Able Brewing set out to create a brewer that was as aesthetically pleasing as it was functional. They imagined a product that would easily find itself at home in your kitchen during your morning routine. A product that would successfully showcase the Kone filter that they had painstakingly perfected. Inspired by Japanese and Mid-Century design, the resulting brewer elegantly serves pour over coffee. The multi-part design allows the top brewer portion to be removed once brewing is complete leaving a single pot server. The all ceramic exterior is dishwasher safe.\u003c/p\u003e\n\u003cp\u003eMade in the USA\u003c/p\u003e\n\u003cp\u003eMeasures 20.3 x 15.2 cm / 8 in x 6 in\u003c/p\u003e\n\u003cp\u003eCapacity 946 ml / 32 oz.\u003c/p\u003e",
      handle: "able-brewing-system",
      variants: [
        {
          id: 66,
          product_id: 86,
          title: "Default Title",
          inventory_policy: "deny",
          price: "225",
          inventory_management: "shopify",
          inventory_quantity: 3000,
          admin_graphql_api_id: "gid://shopify/Variant/66",
        },
      ],
      image: {
        id: 286,
        product_id: 86,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/286/ablebrewingsystem4.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 283,
          product_id: 86,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/283/ablebrewingsystem1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 284,
          product_id: 86,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/284/ablebrewingsystem2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 285,
          product_id: 86,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/285/ablebrewingsystem5.1647248662.386.513.jpg?c=1",
        },
        {
          id: 286,
          product_id: 86,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/286/ablebrewingsystem4.1647248662.386.513.jpg?c=1",
        },
        {
          id: 287,
          product_id: 86,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/287/ablebrewingsystem3.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/86/images/286/ablebrewingsystem4.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/86",
      status: "active",
    },
    {
      id: 88,
      title: "[Sample] Chemex Coffeemaker 3 Cup",
      body_html:
        "\u003cp\u003eThe Chemex Coffeemaker was created in 1939 by famed inventor Peter J. Schlumbohm\n                                \u003c/p\u003e\n\u003cp\u003e\n                                Applying his knowledge of filtration and extraction, Mr. Schlumbohm was able to craft the vessel that would pour the perfect cup of joe. The angles of the drip, thickness of the filter paper and the air vent chamber allow coffee to brew in a specified time and release gases that are usually trapped in by other brewing methods. This results in a smooth, bitter-free cup in less than four minutes.\n                                \u003c/p\u003e\n\u003cp\u003e\n                                Made of labratory heatproof borosilicate glass with a simple wooden handle, the Chemex coffeemaker's design has been inducted in to the permanent collection of The Museum of Modern Art.\n                                \u003c/p\u003e\n\u003cp\u003e\n                                Measures 21 cm h x 7.6 cm dia/8.25 in h x 3 in dia\n                                \u003c/p\u003e\n\u003cp\u003e\n                                Capacity 473 ml/1 Pint\u003c/p\u003e",
      handle: "chemex-coffeemaker-3-cup",
      variants: [
        {
          id: 67,
          product_id: 88,
          title: "Default Title",
          inventory_policy: "deny",
          price: "49.5",
          inventory_management: "shopify",
          inventory_quantity: 2001,
          admin_graphql_api_id: "gid://shopify/Variant/67",
        },
      ],
      image: {
        id: 292,
        product_id: 88,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/292/3cupchemex5.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 292,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/292/3cupchemex5.1647248662.386.513.jpg?c=1",
        },
        {
          id: 293,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/293/chemex3cupfilters1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 294,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/294/3cupchemex2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 295,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/295/3cupchemex1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 296,
          product_id: 88,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/296/3cupchemex4.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/88/images/292/3cupchemex5.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/88",
      status: "active",
    },
    {
      id: 93,
      title: "[Sample] 1 L Le Parfait Jar",
      body_html:
        '\u003cp\u003eWhen translated Le Parfait means "the perfect one" - and that\'s just what this air-tight jar is. Designed for canning, these jars will ensure your harvest does not spoil, but is kept well-preserved for those cold winter months that lie ahead. Also can be used to store grains, beans and spices. Lid easily removes for a thorough cleaning. May be frozen - just be sure to leave enough room for expansion. \u003c/p\u003e\u003cp\u003e 1 L/34 fl oz\u003c/p\u003e',
      handle: "1-l-le-parfait-jar",
      options: [
        {
          product_id: 93,
          name: "Color",
          values: ["Orange", "Silver", "Black", "Blue"],
        },
        { product_id: 93, name: "Size", values: ["Medium", "Large", "Small"] },
      ],
      variants: [
        {
          id: 46,
          product_id: 93,
          title: "Silver / Small",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/46",
          option_values: [
            {
              id: 7,
              label: "Silver",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 95,
              label: "Small",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 47,
          product_id: 93,
          title: "Black / Small",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/47",
          option_values: [
            {
              id: 8,
              label: "Black",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 95,
              label: "Small",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 48,
          product_id: 93,
          title: "Blue / Small",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/48",
          option_values: [
            {
              id: 10,
              label: "Blue",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 95,
              label: "Small",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 49,
          product_id: 93,
          title: "Orange / Small",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/49",
          option_values: [
            {
              id: 13,
              label: "Orange",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 95,
              label: "Small",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 50,
          product_id: 93,
          title: "Silver / Medium",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/50",
          option_values: [
            {
              id: 7,
              label: "Silver",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 96,
              label: "Medium",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 51,
          product_id: 93,
          title: "Black / Medium",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/51",
          option_values: [
            {
              id: 8,
              label: "Black",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 96,
              label: "Medium",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 52,
          product_id: 93,
          title: "Blue / Medium",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/52",
          option_values: [
            {
              id: 10,
              label: "Blue",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 96,
              label: "Medium",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 53,
          product_id: 93,
          title: "Orange / Medium",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/53",
          option_values: [
            {
              id: 13,
              label: "Orange",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 96,
              label: "Medium",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 54,
          product_id: 93,
          title: "Silver / Large",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/54",
          option_values: [
            {
              id: 7,
              label: "Silver",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 97,
              label: "Large",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 55,
          product_id: 93,
          title: "Black / Large",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/55",
          option_values: [
            {
              id: 8,
              label: "Black",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 97,
              label: "Large",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 56,
          product_id: 93,
          title: "Blue / Large",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/56",
          option_values: [
            {
              id: 10,
              label: "Blue",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 97,
              label: "Large",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
        {
          id: 57,
          product_id: 93,
          title: "Orange / Large",
          inventory_policy: "deny",
          price: "7",
          admin_graphql_api_id: "gid://shopify/Variant/57",
          option_values: [
            {
              id: 13,
              label: "Orange",
              option_id: 111,
              option_display_name: "Color",
            },
            {
              id: 97,
              label: "Large",
              option_id: 112,
              option_display_name: "Size",
            },
          ],
        },
      ],
      image: {
        id: 311,
        product_id: 93,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/311/leparfaitmedium3.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 311,
          product_id: 93,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/311/leparfaitmedium3.1647248662.386.513.jpg?c=1",
        },
        {
          id: 312,
          product_id: 93,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/312/leparfaitmedium4.1647248662.386.513.jpg?c=1",
        },
        {
          id: 313,
          product_id: 93,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/93/images/313/leparfaitmedium1.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/93",
      status: "active",
    },
    {
      id: 94,
      title: "[Sample] Oak Cheese Grater",
      body_html:
        "\u003cp\u003eCrafted from oak and stainless steel this handy cheese grater is the perfect addition for the considered tabletop. Works wonderfully for grated parmesan: the fine stainless steel teeth grate the thing strings of cheese into the drawer below allowing guests to pinch as needed. \u003c/p\u003e\\n\u003cp\u003eMeasures 14 x 8.6 x 8.9 cm / 5.5 x \u003cspan\u003e3.38\u003c/span\u003e x 3.5 in\u003c/p\u003e",
      handle: "oak-cheese-grater",
      variants: [
        {
          id: 68,
          product_id: 94,
          title: "Default Title",
          inventory_policy: "deny",
          price: "34.95",
          admin_graphql_api_id: "gid://shopify/Variant/68",
        },
      ],
      image: {
        id: 314,
        product_id: 94,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/94/images/314/oakcheesegrater2.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 314,
          product_id: 94,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/94/images/314/oakcheesegrater2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 315,
          product_id: 94,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/94/images/315/oakcheesegrater1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 316,
          product_id: 94,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/94/images/316/oakcheesegrater3.1647248662.386.513.jpg?c=1",
        },
        {
          id: 317,
          product_id: 94,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/94/images/317/oakcheesegrater4.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/94/images/314/oakcheesegrater2.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/94",
      status: "active",
    },
    {
      id: 97,
      title: "[Sample] Tiered Wire Basket",
      body_html:
        "\u003cp\u003eHere's a three tiered wire basket to clean up your countertop and elevate your storage space. Display a selection of fresh fruit to encourage healthy snacking: pile it high and watch it fly. Can also be used as a caddy for dinner time fixings. Gather up a nice display of baked buns or cupcakes and usher them off to the table with the handy carry ring at the top.\n                        \u003c/p\u003e\n\u003cp\u003e\n                        Measures 63 x 30 cm/25 x 12 in\u003c/p\u003e",
      handle: "tiered-wire-basket",
      variants: [
        {
          id: 69,
          product_id: 97,
          title: "Default Title",
          inventory_policy: "deny",
          price: "119.95",
          admin_graphql_api_id: "gid://shopify/Variant/69",
        },
      ],
      image: {
        id: 325,
        product_id: 97,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/97/images/325/tieredbasket.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 323,
          product_id: 97,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/97/images/323/tieredwirebasket2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 324,
          product_id: 97,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/97/images/324/tieredwirebasket3.1647248662.386.513.jpg?c=1",
        },
        {
          id: 325,
          product_id: 97,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/97/images/325/tieredbasket.1647248662.386.513.jpg?c=1",
        },
        {
          id: 326,
          product_id: 97,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/97/images/326/tieredwirebasket4.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/97/images/325/tieredbasket.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/97",
      status: "active",
    },
    {
      id: 98,
      title: "[Sample] Laundry Detergent",
      body_html:
        "\u003cp\u003eA 100% biodegradable plant based 3x concentrated laundry detergent for use in conventional and high efficiency machines. This product is leaping bunny certified and has not been tested on animals.\n                        \u003c/p\u003e\n\u003cp\u003e\n                        Lavender Scented. Contains 48 High Efficiency Loads.\n                        \u003c/p\u003e\n\u003cp\u003e\n                        Free from synthetic fragrance and phthalates, optical brighteners, dye, chlorine bleach and ammonia.\n                        \u003c/p\u003e\n\u003cp\u003e\n                        ingredients: purified water, decyl glucoside, caprylyl/capryl glucoside, coconut fatty acid, L-lactic acid, potassium hydroxide, protease enzyme, amylase enzyme, citric acid, lipase enzyme\n                        \u003c/p\u003e\n\u003cp\u003e\n                        950 ml/32 fl oz\u003c/p\u003e",
      handle: "laundry-detergent",
      variants: [
        {
          id: 70,
          product_id: 98,
          title: "Default Title",
          inventory_policy: "deny",
          price: "29.95",
          admin_graphql_api_id: "gid://shopify/Variant/70",
        },
      ],
      image: {
        id: 327,
        product_id: 98,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/98/images/327/CommonGoodLaundrySoap.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 327,
          product_id: 98,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/98/images/327/CommonGoodLaundrySoap.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/98/images/327/CommonGoodLaundrySoap.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/98",
      status: "active",
    },
    {
      id: 103,
      title: "[Sample] Canvas Laundry Cart",
      body_html:
        "\u003cdiv\u003e\n\u003cp\u003eThe last laundry cart you'll ever buy. This industrial non-collapsable cart is constructed with a steel framed body using heavyweight canvas capped with a soft leather rim sitting on four smooth rolling casters. Keeps the grubby garments off the floor and almost makes laundry enjoyable. Can also be used as the ideal storage solution: many people find it ideal for children's toys or a load of chopped firewood. Load it up and wheel it away.\u003c/p\u003e\n\u003c/div\u003e\n\u003cdiv\u003e\n\u003cp\u003eNatural Heavyweight Canvas with Vegetable Tanned Leather Rim\u003c/p\u003e\n\u003c/div\u003e\n\u003cdiv\u003e\n\u003cp\u003eMeasures 45 x 45 x 53 cm/18 x 18 x 21 in\u003c/p\u003e\n\u003c/div\u003e\n\u003cp\u003eThis item is not available for international orders nor does it qualify for gift-wrapping.\u003c/p\u003e",
      handle: "canvas-laundry-cart",
      variants: [
        {
          id: 71,
          product_id: 103,
          title: "Default Title",
          inventory_policy: "deny",
          price: "200",
          admin_graphql_api_id: "gid://shopify/Variant/71",
        },
      ],
      image: {
        id: 334,
        product_id: 103,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/103/images/334/naturalcanvascart2.1647248662.386.513.jpg?c=1",
      },
      images: [
        {
          id: 332,
          product_id: 103,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/103/images/332/naturalcanvascart1.1647248662.386.513.jpg?c=1",
        },
        {
          id: 333,
          product_id: 103,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/103/images/333/naturalcanvascart5.1647248662.386.513.jpg?c=1",
        },
        {
          id: 334,
          product_id: 103,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/103/images/334/naturalcanvascart2.1647248662.386.513.jpg?c=1",
        },
        {
          id: 335,
          product_id: 103,
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/103/images/335/naturalcanvascart3.1647248662.386.513.jpg?c=1",
        },
        {
          src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/103/images/334/naturalcanvascart2.1647248662.386.513.jpg?c=1",
        },
      ],
      admin_graphql_api_id: "gid://shopify/Product/103",
      status: "active",
    },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `https://stageapibc.monkcommerce.app/admin/shop/product?search=${query}&Fo&page=1`
  //     );
  //     const data = await res.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, [query]);

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const closeProduct = () => {
    dispatch(handlePopup());
  };

  const sendDataFun = (id) => {
    dispatch(sendData(id));
    dispatch(handlePopup());
  };

  return (
    <div
      className="addProduct"
      style={
        state.popup.id == id
          ? { display: state.popup.display }
          : { display: "none" }
      }
    >
      <div className="upperRow">
        <p>Add Products</p>
        <i className="fa-solid fa-xmark" onClick={closeProduct}></i>
      </div>
      <div className="inputRow">
        <div className="inputField">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search Product"
            onChange={changeQuery}
          />
        </div>
      </div>
      <div className="table">
        {data.map((product, index) => (
          <Table product={product} key={index} />
        ))}
      </div>
      <div className="lowerRow">
        <div className="left">
          {Object.keys(state.tempState).length ? "1" : "0"} Item Selected
        </div>
        <div className="right">
          <Button variant="outlined" onClick={closeProduct}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => sendDataFun(id)}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
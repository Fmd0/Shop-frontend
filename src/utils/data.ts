















const searchPlaceholderList = [
    "Organic skincare products",
    "White skate shoes",
    "Compact Camera for travel",
    "Eco friendly clothes for baby",
    "Gifts for coffee lovers",
    "High-efficiency washing machines",
    "Yoga mats with good grips",
    "Waterproof jackets for hiking",
    "Cold weather camping gear",
    "Affordable 4K monitors",
    "Organic cotton bedding sets",
    "Mechanical keyboards",
]

const shipToOptions = [
    {
        "value": "",
        "textValue": "Select a country"
    },
    {
        "value": "AF",
        "textValue": "Afghanistan"
    },
    {
        "value": "AX",
        "textValue": "Åland Islands"
    },
    {
        "value": "AL",
        "textValue": "Albania"
    },
    {
        "value": "DZ",
        "textValue": "Algeria"
    },
    {
        "value": "AD",
        "textValue": "Andorra"
    },
    {
        "value": "AO",
        "textValue": "Angola"
    },
    {
        "value": "AI",
        "textValue": "Anguilla"
    },
    {
        "value": "AG",
        "textValue": "Antigua & Barbuda"
    },
    {
        "value": "AR",
        "textValue": "Argentina"
    },
    {
        "value": "AM",
        "textValue": "Armenia"
    },
    {
        "value": "AW",
        "textValue": "Aruba"
    },
    {
        "value": "AC",
        "textValue": "Ascension Island"
    },
    {
        "value": "AU",
        "textValue": "Australia"
    },
    {
        "value": "AT",
        "textValue": "Austria"
    },
    {
        "value": "AZ",
        "textValue": "Azerbaijan"
    },
    {
        "value": "BS",
        "textValue": "Bahamas"
    },
    {
        "value": "BH",
        "textValue": "Bahrain"
    },
    {
        "value": "BD",
        "textValue": "Bangladesh"
    },
    {
        "value": "BB",
        "textValue": "Barbados"
    },
    {
        "value": "BY",
        "textValue": "Belarus"
    },
    {
        "value": "BE",
        "textValue": "Belgium"
    },
    {
        "value": "BZ",
        "textValue": "Belize"
    },
    {
        "value": "BJ",
        "textValue": "Benin"
    },
    {
        "value": "BM",
        "textValue": "Bermuda"
    },
    {
        "value": "BT",
        "textValue": "Bhutan"
    },
    {
        "value": "BO",
        "textValue": "Bolivia"
    },
    {
        "value": "BA",
        "textValue": "Bosnia & Herzegovina"
    },
    {
        "value": "BW",
        "textValue": "Botswana"
    },
    {
        "value": "BR",
        "textValue": "Brazil"
    },
    {
        "value": "IO",
        "textValue": "British Indian Ocean Territory"
    },
    {
        "value": "VG",
        "textValue": "British Virgin Islands"
    },
    {
        "value": "BN",
        "textValue": "Brunei"
    },
    {
        "value": "BG",
        "textValue": "Bulgaria"
    },
    {
        "value": "BF",
        "textValue": "Burkina Faso"
    },
    {
        "value": "BI",
        "textValue": "Burundi"
    },
    {
        "value": "KH",
        "textValue": "Cambodia"
    },
    {
        "value": "CM",
        "textValue": "Cameroon"
    },
    {
        "value": "CA",
        "textValue": "Canada"
    },
    {
        "value": "CV",
        "textValue": "Cape Verde"
    },
    {
        "value": "BQ",
        "textValue": "Caribbean Netherlands"
    },
    {
        "value": "KY",
        "textValue": "Cayman Islands"
    },
    {
        "value": "CF",
        "textValue": "Central African Republic"
    },
    {
        "value": "TD",
        "textValue": "Chad"
    },
    {
        "value": "CL",
        "textValue": "Chile"
    },
    {
        "value": "CN",
        "textValue": "China"
    },
    {
        "value": "CX",
        "textValue": "Christmas Island"
    },
    {
        "value": "CC",
        "textValue": "Cocos (Keeling) Islands"
    },
    {
        "value": "CO",
        "textValue": "Colombia"
    },
    {
        "value": "KM",
        "textValue": "Comoros"
    },
    {
        "value": "CG",
        "textValue": "Congo - Brazzaville"
    },
    {
        "value": "CD",
        "textValue": "Congo - Kinshasa"
    },
    {
        "value": "CK",
        "textValue": "Cook Islands"
    },
    {
        "value": "CR",
        "textValue": "Costa Rica"
    },
    {
        "value": "HR",
        "textValue": "Croatia"
    },
    {
        "value": "CW",
        "textValue": "Curaçao"
    },
    {
        "value": "CY",
        "textValue": "Cyprus"
    },
    {
        "value": "CZ",
        "textValue": "Czechia"
    },
    {
        "value": "CI",
        "textValue": "Côte d’Ivoire"
    },
    {
        "value": "DK",
        "textValue": "Denmark"
    },
    {
        "value": "DJ",
        "textValue": "Djibouti"
    },
    {
        "value": "DM",
        "textValue": "Dominica"
    },
    {
        "value": "DO",
        "textValue": "Dominican Republic"
    },
    {
        "value": "EC",
        "textValue": "Ecuador"
    },
    {
        "value": "EG",
        "textValue": "Egypt"
    },
    {
        "value": "SV",
        "textValue": "El Salvador"
    },
    {
        "value": "GQ",
        "textValue": "Equatorial Guinea"
    },
    {
        "value": "ER",
        "textValue": "Eritrea"
    },
    {
        "value": "EE",
        "textValue": "Estonia"
    },
    {
        "value": "SZ",
        "textValue": "Eswatini"
    },
    {
        "value": "ET",
        "textValue": "Ethiopia"
    },
    {
        "value": "FK",
        "textValue": "Falkland Islands"
    },
    {
        "value": "FO",
        "textValue": "Faroe Islands"
    },
    {
        "value": "FJ",
        "textValue": "Fiji"
    },
    {
        "value": "FI",
        "textValue": "Finland"
    },
    {
        "value": "FR",
        "textValue": "France"
    },
    {
        "value": "GF",
        "textValue": "French Guiana"
    },
    {
        "value": "PF",
        "textValue": "French Polynesia"
    },
    {
        "value": "TF",
        "textValue": "French Southern Territories"
    },
    {
        "value": "GA",
        "textValue": "Gabon"
    },
    {
        "value": "GM",
        "textValue": "Gambia"
    },
    {
        "value": "GE",
        "textValue": "Georgia"
    },
    {
        "value": "DE",
        "textValue": "Germany"
    },
    {
        "value": "GH",
        "textValue": "Ghana"
    },
    {
        "value": "GI",
        "textValue": "Gibraltar"
    },
    {
        "value": "GR",
        "textValue": "Greece"
    },
    {
        "value": "GL",
        "textValue": "Greenland"
    },
    {
        "value": "GD",
        "textValue": "Grenada"
    },
    {
        "value": "GP",
        "textValue": "Guadeloupe"
    },
    {
        "value": "GT",
        "textValue": "Guatemala"
    },
    {
        "value": "GG",
        "textValue": "Guernsey"
    },
    {
        "value": "GN",
        "textValue": "Guinea"
    },
    {
        "value": "GW",
        "textValue": "Guinea-Bissau"
    },
    {
        "value": "GY",
        "textValue": "Guyana"
    },
    {
        "value": "HT",
        "textValue": "Haiti"
    },
    {
        "value": "HN",
        "textValue": "Honduras"
    },
    {
        "value": "HK",
        "textValue": "Hong Kong SAR"
    },
    {
        "value": "HU",
        "textValue": "Hungary"
    },
    {
        "value": "IS",
        "textValue": "Iceland"
    },
    {
        "value": "IN",
        "textValue": "India"
    },
    {
        "value": "ID",
        "textValue": "Indonesia"
    },
    {
        "value": "IQ",
        "textValue": "Iraq"
    },
    {
        "value": "IE",
        "textValue": "Ireland"
    },
    {
        "value": "IM",
        "textValue": "Isle of Man"
    },
    {
        "value": "IL",
        "textValue": "Israel"
    },
    {
        "value": "IT",
        "textValue": "Italy"
    },
    {
        "value": "JM",
        "textValue": "Jamaica"
    },
    {
        "value": "JP",
        "textValue": "Japan"
    },
    {
        "value": "JE",
        "textValue": "Jersey"
    },
    {
        "value": "JO",
        "textValue": "Jordan"
    },
    {
        "value": "KZ",
        "textValue": "Kazakhstan"
    },
    {
        "value": "KE",
        "textValue": "Kenya"
    },
    {
        "value": "KI",
        "textValue": "Kiribati"
    },
    {
        "value": "XK",
        "textValue": "Kosovo"
    },
    {
        "value": "KW",
        "textValue": "Kuwait"
    },
    {
        "value": "KG",
        "textValue": "Kyrgyzstan"
    },
    {
        "value": "LA",
        "textValue": "Laos"
    },
    {
        "value": "LV",
        "textValue": "Latvia"
    },
    {
        "value": "LB",
        "textValue": "Lebanon"
    },
    {
        "value": "LS",
        "textValue": "Lesotho"
    },
    {
        "value": "LR",
        "textValue": "Liberia"
    },
    {
        "value": "LY",
        "textValue": "Libya"
    },
    {
        "value": "LI",
        "textValue": "Liechtenstein"
    },
    {
        "value": "LT",
        "textValue": "Lithuania"
    },
    {
        "value": "LU",
        "textValue": "Luxembourg"
    },
    {
        "value": "MO",
        "textValue": "Macao SAR"
    },
    {
        "value": "MG",
        "textValue": "Madagascar"
    },
    {
        "value": "MW",
        "textValue": "Malawi"
    },
    {
        "value": "MY",
        "textValue": "Malaysia"
    },
    {
        "value": "MV",
        "textValue": "Maldives"
    },
    {
        "value": "ML",
        "textValue": "Mali"
    },
    {
        "value": "MT",
        "textValue": "Malta"
    },
    {
        "value": "MQ",
        "textValue": "Martinique"
    },
    {
        "value": "MR",
        "textValue": "Mauritania"
    },
    {
        "value": "MU",
        "textValue": "Mauritius"
    },
    {
        "value": "YT",
        "textValue": "Mayotte"
    },
    {
        "value": "MX",
        "textValue": "Mexico"
    },
    {
        "value": "MD",
        "textValue": "Moldova"
    },
    {
        "value": "MC",
        "textValue": "Monaco"
    },
    {
        "value": "MN",
        "textValue": "Mongolia"
    },
    {
        "value": "ME",
        "textValue": "Montenegro"
    },
    {
        "value": "MS",
        "textValue": "Montserrat"
    },
    {
        "value": "MA",
        "textValue": "Morocco"
    },
    {
        "value": "MZ",
        "textValue": "Mozambique"
    },
    {
        "value": "MM",
        "textValue": "Myanmar (Burma)"
    },
    {
        "value": "NA",
        "textValue": "Namibia"
    },
    {
        "value": "NR",
        "textValue": "Nauru"
    },
    {
        "value": "NP",
        "textValue": "Nepal"
    },
    {
        "value": "NL",
        "textValue": "Netherlands"
    },
    {
        "value": "NC",
        "textValue": "New Caledonia"
    },
    {
        "value": "NZ",
        "textValue": "New Zealand"
    },
    {
        "value": "NI",
        "textValue": "Nicaragua"
    },
    {
        "value": "NE",
        "textValue": "Niger"
    },
    {
        "value": "NG",
        "textValue": "Nigeria"
    },
    {
        "value": "NU",
        "textValue": "Niue"
    },
    {
        "value": "NF",
        "textValue": "Norfolk Island"
    },
    {
        "value": "MK",
        "textValue": "North Macedonia"
    },
    {
        "value": "NO",
        "textValue": "Norway"
    },
    {
        "value": "OM",
        "textValue": "Oman"
    },
    {
        "value": "PK",
        "textValue": "Pakistan"
    },
    {
        "value": "PS",
        "textValue": "Palestinian Territories"
    },
    {
        "value": "PA",
        "textValue": "Panama"
    },
    {
        "value": "PG",
        "textValue": "Papua New Guinea"
    },
    {
        "value": "PY",
        "textValue": "Paraguay"
    },
    {
        "value": "PE",
        "textValue": "Peru"
    },
    {
        "value": "PH",
        "textValue": "Philippines"
    },
    {
        "value": "PN",
        "textValue": "Pitcairn Islands"
    },
    {
        "value": "PL",
        "textValue": "Poland"
    },
    {
        "value": "PT",
        "textValue": "Portugal"
    },
    {
        "value": "QA",
        "textValue": "Qatar"
    },
    {
        "value": "RE",
        "textValue": "Réunion"
    },
    {
        "value": "RO",
        "textValue": "Romania"
    },
    {
        "value": "RU",
        "textValue": "Russia"
    },
    {
        "value": "RW",
        "textValue": "Rwanda"
    },
    {
        "value": "WS",
        "textValue": "Samoa"
    },
    {
        "value": "SM",
        "textValue": "San Marino"
    },
    {
        "value": "ST",
        "textValue": "São Tomé & Príncipe"
    },
    {
        "value": "SA",
        "textValue": "Saudi Arabia"
    },
    {
        "value": "SN",
        "textValue": "Senegal"
    },
    {
        "value": "RS",
        "textValue": "Serbia"
    },
    {
        "value": "SC",
        "textValue": "Seychelles"
    },
    {
        "value": "SL",
        "textValue": "Sierra Leone"
    },
    {
        "value": "SG",
        "textValue": "Singapore"
    },
    {
        "value": "SX",
        "textValue": "Sint Maarten"
    },
    {
        "value": "SK",
        "textValue": "Slovakia"
    },
    {
        "value": "SI",
        "textValue": "Slovenia"
    },
    {
        "value": "SB",
        "textValue": "Solomon Islands"
    },
    {
        "value": "SO",
        "textValue": "Somalia"
    },
    {
        "value": "ZA",
        "textValue": "South Africa"
    },
    {
        "value": "GS",
        "textValue": "South Georgia & South Sandwich Islands"
    },
    {
        "value": "KR",
        "textValue": "South Korea"
    },
    {
        "value": "SS",
        "textValue": "South Sudan"
    },
    {
        "value": "ES",
        "textValue": "Spain"
    },
    {
        "value": "LK",
        "textValue": "Sri Lanka"
    },
    {
        "value": "BL",
        "textValue": "St. Barthélemy"
    },
    {
        "value": "SH",
        "textValue": "St. Helena"
    },
    {
        "value": "KN",
        "textValue": "St. Kitts & Nevis"
    },
    {
        "value": "LC",
        "textValue": "St. Lucia"
    },
    {
        "value": "MF",
        "textValue": "St. Martin"
    },
    {
        "value": "PM",
        "textValue": "St. Pierre & Miquelon"
    },
    {
        "value": "VC",
        "textValue": "St. Vincent & Grenadines"
    },
    {
        "value": "SD",
        "textValue": "Sudan"
    },
    {
        "value": "SR",
        "textValue": "Suriname"
    },
    {
        "value": "SJ",
        "textValue": "Svalbard & Jan Mayen"
    },
    {
        "value": "SE",
        "textValue": "Sweden"
    },
    {
        "value": "CH",
        "textValue": "Switzerland"
    },
    {
        "value": "TW",
        "textValue": "Taiwan"
    },
    {
        "value": "TJ",
        "textValue": "Tajikistan"
    },
    {
        "value": "TZ",
        "textValue": "Tanzania"
    },
    {
        "value": "TH",
        "textValue": "Thailand"
    },
    {
        "value": "TL",
        "textValue": "Timor-Leste"
    },
    {
        "value": "TG",
        "textValue": "Togo"
    },
    {
        "value": "TK",
        "textValue": "Tokelau"
    },
    {
        "value": "TO",
        "textValue": "Tonga"
    },
    {
        "value": "TT",
        "textValue": "Trinidad & Tobago"
    },
    {
        "value": "TA",
        "textValue": "Tristan da Cunha"
    },
    {
        "value": "TN",
        "textValue": "Tunisia"
    },
    {
        "value": "TR",
        "textValue": "Turkey"
    },
    {
        "value": "TM",
        "textValue": "Turkmenistan"
    },
    {
        "value": "TC",
        "textValue": "Turks & Caicos Islands"
    },
    {
        "value": "TV",
        "textValue": "Tuvalu"
    },
    {
        "value": "UM",
        "textValue": "U.S. Outlying Islands"
    },
    {
        "value": "UG",
        "textValue": "Uganda"
    },
    {
        "value": "UA",
        "textValue": "Ukraine"
    },
    {
        "value": "AE",
        "textValue": "United Arab Emirates"
    },
    {
        "value": "GB",
        "textValue": "United Kingdom"
    },
    {
        "value": "US",
        "textValue": "United States"
    },
    {
        "value": "UY",
        "textValue": "Uruguay"
    },
    {
        "value": "UZ",
        "textValue": "Uzbekistan"
    },
    {
        "value": "VU",
        "textValue": "Vanuatu"
    },
    {
        "value": "VA",
        "textValue": "Vatican City"
    },
    {
        "value": "VE",
        "textValue": "Venezuela"
    },
    {
        "value": "VN",
        "textValue": "Vietnam"
    },
    {
        "value": "WF",
        "textValue": "Wallis & Futuna"
    },
    {
        "value": "EH",
        "textValue": "Western Sahara"
    },
    {
        "value": "YE",
        "textValue": "Yemen"
    },
    {
        "value": "ZM",
        "textValue": "Zambia"
    },
    {
        "value": "ZW",
        "textValue": "Zimbabwe"
    }
]


const sortByList = [
    {textValue: "Best selling", value: "bestSelling"},
    {textValue: "Newest", value: "newest"},
    {textValue: "Price: Low - High", value: "priceAsc"},
    {textValue: "Price: High - Low", value: "priceDesc"},
];

export {
    searchPlaceholderList,
    shipToOptions,
    sortByList,
}
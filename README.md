# wc-smart-table

Are your dashboards so good that users still ask to export to Excel ?

wc-smart-table is a web component that displays large datasets in a flexible table that offers readymade calculations and filtering options, avoiding the user to export the table to make their own averages or sums.

wc-smart-table also provides a quick way to make a bar, line or donut chart on selected portions of the data.

Of course, users can still also export to Excel as wc-smart-table provides this utility too ;)

## setup

Include wc-smart-table.js in the head of your html:

```
<html>

<head>

<script defer src="wc-smart-table.js" type="module"></script>

</head>

</html>

```

Or: npm i wc-smart-table, and import it the usual way in your app

## props

### header
This prop configures the columns of your table and what they can perform.
Provide a JSON format of an array of objects, as many as there are columns in your table.
Here is the datastructure:

```
"[
    {
        "name" : "my column name", (mandatory)
        "type" : "text", // "text" | "date" | "numeric" (mandatory)
        "average" : false, (optional, defaults to false. Use true if type is numeric to display the average on the table head)
        "decimals" : undefined, (optional, defaults to undefined, provide a number for numeric columns to display decimals)
        "sum": false, (optional, defaults to false. Use true if type is numeric to display the sum on the table head)
        "isSort": false, (optional, defaults to false. Use true to show a sort button. Works for all column types)
        "isSearch": false, (optional, defaults to false. Use true to show a search input. Use it for columns of type 'text')
        "isMultiselect": false, (optional, defaults to false. Use true to show a dropdown menu to filter a column by category)
        "isPercentage": false, (optional, defaults to false. Use true to display percentage values. Will convert 0.01 to 1%. If used, will require an empty slot in the td array provided in the table body)
        "percentageTo": undefined, (optional, defaults to undefined. Use the name of another numeric column to base the calculation of percentages on its sum)
        "prefix": "", (optional, defaults to empty string. If provided, adds a prefix to all values of the column)
        "suffix": "", (optional, defaults to empty string. If provided, adds a suffix to all values of the column)
        "rangeFilter": false (optional, defaults to false. Use true to show number inputs to filter values in a range)
    }
]"

```

### body
This prop will feed the table with data.
Provide a JSON format of an array of objects.
Every td attribute must contain an array in the same order as your header.
Here is the datastructure, for a table with 2 columns, one "text" and one "numeric"

```
"[
    {
        td: [
            "sales",
            100
        ]
    },
    {
        td: [
            "promotions",
            35
        ]
    },
    {
        td: [
            "promotions",
            42
        ]
    },
    {
        td: [
            "sales",
            120
        ]
    },
]"
```

Now let's say you want to provide a third column, with percentages based on the second column.
Setup your header for the third column with "isPercentage": true, and "percentageTo": "spend" (example name for your second column)
Since percentages will be calculated by wc-smart-table, you must provide an empty string inside your dataset:

```

"[
    {
        td: [
            "sales",
            100,
            "" // provide an empty string
        ]
    },
    {
        td: [
            "promotions",
            35,
            ""
        ]
    },
    {
        td: [
            "promotions",
            42,
            ""
        ]
    },
    {
        td: [
            "sales",
            120,
            ""
        ]
    },
]"
```


### translations
This prop lets you adapt translations for labels used on wc-smart-table.
Here are the default labels, you can override by passing your own JSON configuration:

```

"{
    "average": "Average",
    "by": "by",
    "chooseCategoryColumn": "Choose category column",
    "exportAllButton": "XLSX all",
    "exportAllLabel": "Export all rows of your current filtered dataset",
    "exportPageButton": "XLSX page",
    "exportPageLabel": "Export rows of the current page",
    "from": "Du",
    "inputPlaceholder": "Search...",
    "makeDonut": "Generate",
    "nb": "Nb",
    "page": "Page",
    "paginatorLabel": "Rows per page",
    "sizeWarning": "Displaying too many rows at a time can lead to slower performance",
    "sum": "Somme",
    "to": "Au",
    "total": 'Total',
    "totalRows": "Total rows"
}"
```

### Other optional props
- max-height: string, (defaults to "500px". You can use any css height, like "calc(100vh - 200px)" for example)

- font-family: "inherit", (defaults to "inherit")

- rows-per-page: 25, (defaults to 25. Over 200 can slightly affect performance)

- use-chart: string, (defaults to "true". Use false if for some reason you don't want to use charts)

- locale: string, (defaults to "fr-fr", used for date formatting)
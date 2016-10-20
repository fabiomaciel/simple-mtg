define({ "api": [
  {
    "type": "get",
    "url": "/cards/:id",
    "title": "Request Card information by id",
    "name": "GetCard",
    "group": "Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Cards unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Card id on Mongo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Card artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cmc",
            "description": "<p>Card mana cust converted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flavor",
            "description": "<p>Card flavor text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Card unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageName",
            "description": "<p>Card's name on lowercase</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout",
            "description": "<p>Card's layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manaCost",
            "description": "<p>Card's mana cost</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mciNumber",
            "description": "<p>?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Card's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Card's collection number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power",
            "description": "<p>Card's power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rarity",
            "description": "<p>Card's rarity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Card's Text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "toughness",
            "description": "<p>Card's toughness</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Card's type</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "supertypes",
            "description": "<p>Card's supertypes</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "subtypes",
            "description": "<p>Card's subtypes</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "types",
            "description": "<p>Card's types</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "colors",
            "description": "<p>Card's colors</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "colorIdentity",
            "description": "<p>Card's color identity</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "collectionCode",
            "description": "<p>All collection that this card apppears</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "names",
            "description": "<p>?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_v",
            "description": "<p>?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succes-Response:",
          "content": "HTTP/1.1 200 OK\n{\n_id: \"5807e11bbe54fa68a4de26c6\",\nartist: \"Mark Zug\",\ncmc: 1,\nflavor: \"\"Beg me for life, and I will fill you with the glory of Phyrexian perfection.\"\",\nid: \"3ce08578e9f4ef206fd44eced0fab9260e12ce18\",\nimageName: \"glistener elf\",\nlayout: \"normal\",\nmanaCost: \"{G}\",\nmciNumber: 140,\nname: \"Glistener Elf\",\nnumber: 140,\npower: \"1\",\nrarity: \"Special\",\ntext: \"Infect (This creature deals damage to creatures in the form of -1/-1 counters and to players in the form of poison counters.)\",\ntoughness: \"1\",\ntype: \"Creature — Elf Warrior\",\nsupertypes: [ ],\nsubtypes: [\n\"Elf\",\n\"Warrior\"\n],\ntypes: [\n\"Creature\"\n],\ncolors: [\n\"Green\"\n],\ncolorIdentity: [ ],\ncollectionCode: [\n\"pFNM\",\n\"NPH\"\n],\nnames: [ ],\n__v: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/cards.js",
    "groupTitle": "Card"
  },
  {
    "type": "get",
    "url": "/cards?name=:name",
    "title": "Request Card information by name",
    "name": "GetCardByName",
    "group": "Card",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Number",
            "description": "<p>Array of cards</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/routes/cards.js",
    "groupTitle": "Card"
  },
  {
    "type": "get",
    "url": "/cards?collection=:collectionCode",
    "title": "Request Cards by collection code",
    "name": "GetCardsByCollection",
    "group": "Card",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Number",
            "description": "<p>Array of cards</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/routes/cards.js",
    "groupTitle": "Card"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_finn_projects_personal_simple_mtg_apidoc_main_js",
    "groupTitle": "_home_finn_projects_personal_simple_mtg_apidoc_main_js",
    "name": ""
  }
] });

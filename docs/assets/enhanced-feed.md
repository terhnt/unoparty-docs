---
sidebar_position: 3
---

# Enhanced Feed Info
Feed providers can initialize a feed via a broadcast where the broadcast text field contains a URL to a specially formatted .json file (e.g. http://www.mydomain.com/foo.json). This allows the feed operator to provide enhanced information to their users.

## Feed URL format
The URL itself in the broadcast text field must conform to the following:

- Must fully fit within the text field space allowed
- May or may not start with "http://" or "https://". If the URL does not start with either, "http://" is assumed
- May or may not end with ".json" (i.e., no specific file name ending is required)
- It is recommended that the server return the JSON data with the correct MIME type set (e.g. "application/json")
- A HTTP 200 response code must be returned (redirects, e.g. 301, 302, etc. are not allowed)

## Feed JSON format
The JSON object/mapping data the URL points to must contain the following data:

| **Field**        | Status                     | Description.                                                                                                                                                                                                                                                                                                            |
|--------------------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **address**        | Required                     | The Unobtanium address used to broadcast the json url and that will broadcast the result.                                                                                                                                                                                                                                                                                                            |
| **title**          | Required                     | The title of the feed. 64 characters max.                                                                                                                                                                                                                                                                                                                                                         |
| **broadcast_date** | Required                     | When the bet will be resolved. When type=binary broadcast_date must be a rfc3339 date. When type=cfd broadcast_date must be an iso8601 repeating interval.                                                                                                                                                                                                                                        |
| **deadline**       | Required if type='cfd'.      | Must be an iso8601 repeating interval.                                                                                                                                                                                                                                                                                                                                                            |
| **targets**        | Required if type='binary'.   | A list/array of JSON objects. Each object contains details about a potential user choice for the bet. Normally, with binary bets, there is only one target object provided. However, it is possible to provide more than one, but in this case, the user would be able to bet yes or no for each option (meaning, if two targets were provided, there would be 4 separate user choices possible). |
| **type**           | Optional                     | The type of the bet. Must be one of: 'binary', 'cfd' or 'all'. If type is not specified, targets OR deadline MUST be provided.                                                                                                                                                                                                                                                                    |
| **category**       | Optional                     | The nature of the feed. Must be one of: 'sports', 'politics', 'entertainment', 'economics', or 'other'.                                                                                                                                                                                                                                                                                           |
| **description**    | Optional                     | A longish description about this feed. 255 characters max.                                                                                                                                                                                                                                                                                                                                        |
| **image**          | Optional                     | A link a 48x48 PNG image to represent the feed in the graphical user interface listing. The text itself must be a valid URL that starts with "http://" or "https://". The image the URL references must be in PNG format (the URL must end in .png). It must be 48x48, and it must use the RGB or RGBA color palette. If any of these are not correct, the system will reject it.                 |
| **url**            | Optional                     | A link to the website for the feed. 100 characters max. Must be a valid URL that starts with "http://" or "https://"                                                                                                                                                                                                                                                                              |
| **operator**       | Optional                     | Object that contains informations about the feed operator.                                                                                                                                                                                                                                                                                                                                        |
| **customs**        | Optional                     | Object that contains additional custom informations about the feed. All values should be integer or string.                                                                                                                                                                                                                                                                                       |
| **version**        | Optional                     | Version of the schema used for the json (current 1.0).                                                                                                                                                                                                                                                                                                                                            |
| **labels**         | Optional                     | Labels used for CFD bets.                                                                                                                                                                                                                                                                                                                                                                         |
| **labels.bull**    | Required                     | Label for bet type equal BullCFD. 32 characters max.                                                                                                                                                                                                                                                                                                                                              |
| **labels.bear**    | Required                     | Label for bet type equal BearCFD. 32 characters max.                                                                                                                                                                                                                                                                                                                                              |
| **odds**           | Optional                     | Object that contains default odds for Bull bets (the inverse is used for Bear bets).                                                                                                                                                                                                                                                                                                              |
| **odds.initial**   | Required (or odds.suggested) | Default odds used when there is not open bets.                                                                                                                                                                                                                                                                                                                                                    |
| **odds.suggested** | Required (or odds.initial)   | Default odds used when there is open bets.                                                                                                                                                                                                                                                                                                                                                        |

**'targets' Object format:**

| Field                | Status                       | Description                                                                                     |
|----------------------|------------------------------|-------------------------------------------------------------------------------------------------|
| **text**             | Required                     | Topic of the target_value. 64 characters max.                                                   |
| **value**            | Required                     | The value used for this target_value.                                                           |
| **deadline**         | Required                     | The exact or approximate time that the feed will be resolved.                                   |
| **image**            | Optional                     | A link a 48x48 PNG image to represent the target_value in the graphical user interface listing. |
| **labels**           | Optional                     | Object that contains labels used for each bet type.                                             |
| **labels.equal**     | Required                     | Label for Equal. 32 characters max.                                                             |
| **labels.not_equal** | Required                     | Label for NotEqual. 32 characters max.                                                          |
| **odds**             | Optional                     | Object that contains default odds for Equal bets (the inverse is used for NotEqual bets).       |
| **odds.initial**     | Required (or odds.suggested) | Default odds used when there is not open bets.                                                  |
| **odds.suggested**   | Required (or odds.initial)   | Default odds used when there is open bets.                                                      |

**'operator' fields:**

| Field           | Status   | Description                                                                                                              |
|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------|
| **name**        | Required | The operator name.                                                                                                       |
| **description** | Optional | A longish description about the operator. 2048 characters max.                                                           |
| **image**       | Optional | A link a 48x48 PNG image to represent the operator in the graphical user interface listing.                              |
| **url**         | Optional | A link to the website for the operator. 100 characters max. Must be a valid URL that starts with "http://" or "https://" |

## Examples
Here's an example for a binary feed called **Superbowl 2014:**
```
{
    "version": "1.0",
    "address": "muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu",
    "type": "binary",
    "category": "sports",
    "title": "Superbowl 2014",
    "image": "https://www.jahpowerbit.org/feeds/image-1.png",
    "description": "The feed for the Super Bowl final",
    "url": "http://www.jahpowerbit.org/superbowl2014",
    "broadcast_date": "2014-11-01T05:06:07+00:00",
    "operator": {
        "name": "JahPowerBit",
        "image": "https://www.jahpowerbit.org/feeds/image-1.png",
        "description": "Development site",
        "url": "http://www.jahpowerbit.org"
    },
    "targets": [{
        "text": "The Bronco wins",
        "image": "https://www.jahpowerbit.org/feeds/image-1.png",
        "value": 1,
        "labels": {
            "equal": "yes",
            "not_equal": "no"
        },
        "odds": {
            "initial": 2,
            "suggested": 3
        },
        "deadline": "2014-07-01T05:06:07+00:00"
    }, {
        "text": "The Seahawks wins",
        "image": "https://www.jahpowerbit.org/feeds/image-1.png",
        "value": 2,
        "labels": {
            "equal": "yes",
            "not_equal": "no"
        },
        "deadline": "2014-07-01T05:06:07+00:00"
    }, {
        "text": "They draw",
        "image": "https://www.jahpowerbit.org/feeds/image-1.png",
        "value": 3,
        "labels": {
           "equal": "yes",
            "not_equal": "no"
        },
        "odds": {
            "initial": 3,
            "suggested": 4
        },
        "deadline": "2014-09-01T05:06:07+00:00"
    }],
    "customs": {
        "key1": "value1",
        "key2": 2
    }
}
```

## Other Topics
### Validity and refreshing
In order for this data file to be deemed as valid against the specified address, there must have been a broadcast at that address, and the text field of that broadcast must have been set to the URL of this JSON file and the value field set to -1 (negative 1). From this feed broadcast, Unowallet system will pull the fee-fraction, to use as the fee for the given feed, and will query this URL provided to validate and fetch the necessary information.

If the information you provided is reachable and valid (within a 5 second response time), the feed's information will be enhanced based on this data. If it is not, unoblockd will retry up to 2 additional times, over the next 30 or so minutes, and then give up until rebroadcast is made with a JSON URL and value=-1 (the URL may be the same).

### Validating your JSON data
Your JSON data must respect and validate against [this](https://github.com/CounterpartyXCP/counterblock/blob/master/counterblock/schemas/feed.schema.json) JSON schema. If the validation fails on any level, unoblockd will not accept the data.

To check your data against this schema, go [here](http://json-schema-validator.herokuapp.com/). Paste the schema from the link above into the '''Schema''' field, and place your example output into the '''Data''' field. Then click the '''Validate''' button.

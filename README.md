## &lt;img-view&gt;

`img-view` provides almost the same role as an `img` element in your Chrome Apps.
By specifying the `src` attribute, you can display the external image resources.

First thing to do is:
* Load img-view.js in the `head` element
* Add the "webview" in the permission of manifest.json
* Add the following description in manifest.json
```
"webview": {
    "partitions": [
        {
            "name": "static",
            "accessible_resources": ["i.html"]
        }
    ]
}
```

#### Example:
Display the square (100 x 100 px) avatar image.
```
<style>
    #avatar {
        width:  100px;
        height: 100px;
    }
</style>

<img-view id="avatar" src="https://avatars0.githubusercontent.com/u/4409909"></img-view>
```

Display the circle avatar image.
```
<img-view id="avatar" bgcolor="#eee" radius="50%" src="https://avatars0.githubusercontent.com/u/4409909"></img-view>
```

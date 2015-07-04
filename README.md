# ScrollableView widget [![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)
This widget for the [Appcelerator](http://www.appcelerator.com) Titanium Alloy MVC framework provides a view that mimics the iOS implementation of the `Ti.UI.ScrollableView` paging control for the Android platform.

## Quick Start

### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/au.jkotchoff.scrollableView)
Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install au.jkotchoff.scrollableView`

### Use it

* Require the widget in a view:

```xml
<Alloy>
  <Window>
    <Widget src="au.jkotchoff.scrollableView">
      <View backgroundColor="orange">
        <Label text="View 1"></Label>
      </View>
      <View backgroundColor="yellow">
        <Label text="View 2"></Label>
      </View>
    </Widget>
  </Window>
</Alloy>
```

### Methods

* setView(View[])
* setCurrentPage(Number)

### Event listeners

The listeners of ScrollableView can be set both in the View as in the Controller.

* Exemple in View:
```xml
<Alloy>
  <Window>
    <Widget id="scrollableView" src="au.jkotchoff.scrollableView" onScroll="onScrollEvent">
      <View backgroundColor="orange">
        <Label text="View 1"></Label>
      </View>
      <View backgroundColor="yellow">
        <Label text="View 2"></Label>
      </View>
    </Widget>
  </Window>
</Alloy>
```

* Or in Controller:
```javascript
$.scrollableView.addEventListener("scroll", function() {
  \\ your code here
});
```

![demo](https://raw.githubusercontent.com/jkotchoff/au.jkotchoff.scrollableView/master/docs/screenshot.png)

## Changelog

* 1.0 Initial version
* 1.1 Add setView method & enable event listeners
* 1.2 Add support to receive a custom paging control image

## Licenses
This project is licensed under the Apache Public License (Version 2). Please see the LICENSE.txt file for the full license.
